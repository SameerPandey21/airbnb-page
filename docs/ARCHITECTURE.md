# Airbnb Listing Clone — Production Scaling Architecture

This document describes the high-availability, low-latency production scaling architecture for the Airbnb Listing application (featuring the *Romantic Jacuzzi 1BHK Candolim | Mirashya UG10* stay).

The architecture is designed around 4 core scaling pillars:
1. **Frontend Scaling**
2. **Storage Scaling**
3. **Search Scaling**
4. **Deployment & Infrastructure Scaling**

---

## Architecture Diagram Files

- **High-Resolution PNG Diagram**: [docs/architecture_diagram.png](file:///c:/Users/samee/OneDrive/Desktop/airbnb/docs/architecture_diagram.png) (also available in root at [architecture_diagram.png](file:///c:/Users/samee/OneDrive/Desktop/airbnb/architecture_diagram.png))
- **Printable Vector PDF**: [docs/architecture_diagram.pdf](file:///c:/Users/samee/OneDrive/Desktop/airbnb/docs/architecture_diagram.pdf) (also available in root at [architecture_diagram.pdf](file:///c:/Users/samee/OneDrive/Desktop/airbnb/architecture_diagram.pdf))
- **HTML/CSS Diagram Source**: [docs/architecture-template.html](file:///c:/Users/samee/OneDrive/Desktop/airbnb/docs/architecture-template.html)

---

## 1. Frontend Scaling Strategy

### Global Anycast Edge CDN & Caching
- **Network**: Deployed across 300+ edge locations worldwide (Cloudflare / AWS CloudFront) providing `< 25ms` TTFB globally.
- **Cache Policy**: Immutable asset caching for hashed production JS/CSS bundles with `stale-while-revalidate` for listing pages.
- **Protocol**: HTTP/3 (QUIC) and Brotli compression for maximum compression and multiplexed streaming.

### Dynamic Responsive Media Pipeline
- **Bandwidth Optimization**: Automatic client viewport detection serving tailored resolution widths via `getOptimizedImageUrl(src, width)` (`im_w=720`, `im_w=1200`, `im_w=1440`).
- **Modern Formats**: On-the-fly edge transcoding to WebP and AVIF formats, reducing image payload by over 85%.
- **Lazy Loading**: Off-screen gallery photos (43 room images across 9 spaces) load asynchronously with native `loading="lazy"`.

### Incremental Static Regeneration (ISR) & Edge SSR
- High-traffic listings (such as Candolim PV203/UV30) are pre-rendered into static HTML at the edge.
- Background revalidation triggers when host rates, reviews, or calendar availability changes without blocking user requests.

### Client Performance & Accessibility
- **Zero Cumulative Layout Shift (CLS = 0)**: Pre-calculated aspect ratios (`4/3`, `16/9`) on image containers.
- **Accessible Modal Containment**: Reusable custom hooks `useLockBodyScroll` (eliminates background document shifts) and `useFocusTrap` (WCAG 2.1 AA keyboard focus management).
- **Pure CSS Sticky Headings**: Photo Tour sticky room headers use `sticky top-24 self-start` with zero JavaScript scroll listeners.

---

## 2. Storage Scaling Strategy

### Multi-Tier Data Layer Architecture
- **Primary Relational Store (PostgreSQL / Aurora)**:
  - Master instance for ACID-compliant transactional operations: booking reservations, payment settlements, guest reviews, and pricing rules.
  - Multi-AZ synchronous replication with automated failover (< 30s RTO).
- **Horizontally Scaled Read Pool (Read Replicas)**:
  - Multiple read replicas dedicated to high-volume read queries (property descriptions, amenities, host badges).
  - PgBouncer connection pooling layer managing thousands of concurrent database connections.

### Distributed In-Memory Cache (Redis Cluster)
- **Sub-2ms Latency**: Multi-node Redis Cluster with master-replica sharding.
- **Cached Datasets**:
  - Nightly rate calculations (`₹28,499 for 5 nights`).
  - Real-time availability calendars (Oct 18 – Oct 23, 2026).
  - Distributed locks for in-flight reservation requests to prevent double-bookings.

### Cloud Object Storage (AWS S3 / Cloudflare R2)
- High-durability (99.999999999%) storage for 43 listing images, host avatar, nearby stay assets, and raw user uploads.
- Automated lifecycle policies transitioning older media assets from Standard to Warm/Infrequent Access and Glacier cold archiving.

### Change Data Capture (CDC) via Kafka & Debezium
- Debezium monitors PostgreSQL write-ahead logs (WAL) and streams change events into Apache Kafka topics.
- Eliminates expensive polling queries and synchronizes downstream search indices in real time (< 500ms).

---

## 3. Search Scaling Strategy

### Elasticsearch / OpenSearch Distributed Cluster
- Multi-node dedicated cluster with separated Master nodes and Data nodes partitioned across availability zones.
- Sharded indices enabling sub-50ms query latency over millions of listings, reviews, and host profiles.

### Geospatial Indexing & Search
- Spatial indexing using `geo_point` and `geo_shape` coordinates (Candolim: `lat: 15.5186, lng: 73.7634`).
- Supports fast radius queries, bounding polygon filters, and tile-based map clustering for the North Goa region.

### Multi-Facet Filtering Engine
- High-speed boolean filter combinations:
  - Date availability check (check-in / checkout overlap queries).
  - Capacity filters (3 guests, 1 bedroom, 1 bed, 1 bathroom).
  - Amenities bitset caching ("Hot tub", "Pool", "Wifi", "Air conditioning").
  - Badges & quality ranking ("Guest favourite", rating >= 4.95).

### Real-Time Ingestion Pipeline
- Microservices consume Kafka change events and execute batch bulk updates against Elasticsearch indices.
- Guarantees eventual consistency within 500ms of any booking or listing update.

---

## 4. Deployment & Infrastructure Scaling Strategy

### Containerization & Kubernetes (AWS EKS)
- Lightweight OCI container images built on Alpine/Distroless bases.
- Multi-AZ Kubernetes pod distribution with Pod Disruption Budgets (PDB) and readiness/liveness health probes.

### Dynamic Elastic Autoscaling
- **Horizontal Pod Autoscaler (HPA)**: Dynamically scales application pods from 5 to 100+ replicas based on CPU utilization (> 70%) and incoming request rates.
- **Karpenter Cluster Autoscaler**: Provisions just-in-time EC2 compute capacity in seconds, utilizing mixed Spot and On-Demand instance pools for 60% cost efficiency.

### Zero-Downtime Blue/Green CI/CD Pipeline
- **GitHub Actions**:
  - Automated linting, TypeScript typecheck (`npx tsc --noEmit`), and test execution.
  - Docker multi-stage container builds with vulnerability scanning (Trivy).
- **ArgoCD GitOps**: Automated progressive canary rollouts with automated rollback upon error budget spikes.

### Observability & APM Monitoring
- **Metrics**: Prometheus & Grafana monitoring latency (p50, p95, p99), error rates, and CPU/memory saturation.
- **Distributed Tracing**: OpenTelemetry instrumentation tracing requests end-to-end from Edge CDN to PostgreSQL.
- **Alerting**: PagerDuty integration with SLO/SLA violation thresholds.
