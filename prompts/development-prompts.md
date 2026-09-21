# Development Prompt Log

This document records the exact development prompts and analytical workflows executed during the independent reproduction of the Airbnb listing experience ("Romantic Jacuzzi 1BHK Candolim | Mirashya UG10") for the Playpower Labs assessment.

---

### 1. Analysis Prompt & Video Decomposition
```text
Task: Analyze the supplied reference screen recording (Screen Recording 2026-09-18 164538.mp4) frame-by-frame.
Extract exact metadata:
- Listing title, location, and property type
- Exact pricing (₹28,499 for 5 nights: 18 Oct 2026 - 23 Oct 2026)
- Ratings breakdown (4.95 overall, Cleanliness 5.0, Accuracy 5.0, Check-in 5.0, Communication 5.0, Location 4.8, Value 4.8)
- Host information (Mirashya Homes, 2 years hosting, 1,463 reviews, 4.68 rating)
- Amenities list, room sleeping arrangements, and policy notes
- Photo tour categorization and ordering
```

---

### 2. Architecture & Data Modeling Prompt
```text
Task: Create a centralized TypeScript domain model and decoupled component hierarchy.
Requirements:
- Technology stack: React 18, TypeScript, Vite, Tailwind CSS, Lucide React.
- Ensure strict types in src/types/property.ts (Property, GalleryImage, Room, Amenity, Review, Host, GuestCounts, DateRange).
- Isolate property content in src/data/property.ts to avoid hardcoded values across components.
- Implement independent hooks: useLockBodyScroll, useKeyboardNavigation, and useFocusTrap.
- No Redux or unnecessary global state bloat; keep state local and predictable.
```

---

### 3. Implementation Prompts (Systematic Components)
```text
Task: Build modular React components reproducing desktop Airbnb listing structure:
1. Header: Brand mark, search pill ("Anywhere | Anytime | Add guests"), host action, language icon, user profile menu.
2. PropertyHeader: Listing title, location, share button, interactive wishlist save toggle with heart fill.
3. HeroGallery: Asymmetric 5-photo grid (50% main left hero, 25%/25% quad right), rounded outer corners, 8px gaps, and floating "Show all photos" button with 9-dot grid icon.
4. PropertySummary & HostSection: Tagline, bed/bath specs, laurel wreath "Guest favourite" badge, host avatar, and key features.
5. Description & SleepingArrangements: Expandable text with "Show more", room cards with double bed and sofa specifications.
6. Amenities: 2-column highlighted grid + full 50-item categorized dialog modal with focus trap.
7. Sticky BookingCard: Dynamic pricing, check-in/checkout dates, guest selector dropdown, free cancellation notice, and reservation CTA.
8. Reviews: Hero 4.95 score, 6 subcategory bars, sentiment tags, 2-column testimonial cards, and all-reviews modal.
9. LocationSection: Candolim map visual, central marker pin, zoom controls, and neighborhood description.
10. ThingsToKnow & NearbyStays: 3-column policies layout and paginated 4-card carousel.
11. Footer: Structured link columns, copyright notices, and currency picker.
```

---

### 4. Photo Tour & Gallery Experience Prompt
```text
Task: Implement the full-screen Photo Tour modal triggered by hero clicks or "Show all photos".
Requirements:
- Sticky header with back chevron, title "Photo tour", share, and save actions.
- Horizontal category pill navigator with thumbnail previews for all rooms (Living room 1, Living room 2, Full kitchen, Bedroom, Full bathroom, Gym, Exterior, Pool, Additional photos).
- Smooth scroll navigation between room sections.
- Left column room specs and right column image list.
- Clicking any image transfers context seamlessly to the Lightbox at that image's exact index.
```

---

### 5. Lightbox & Navigation Prompt
```text
Task: Build an accessible, full-screen image lightbox.
Requirements:
- Centered high-resolution image stage with constrained aspect ratios to avoid viewport overflow.
- Top navigation bar with "all photos" grid icon, room category name, and "X of Y" counter.
- Previous and Next circular chevron navigation controls.
- Keyboard bindings: ArrowLeft (previous), ArrowRight (next), Escape (close).
- Smooth transition and focus retention.
```

---

### 6. Accessibility & Scroll Management Prompt
```text
Task: Audit and enforce WCAG 2.1 AA keyboard accessibility and dialog semantics.
Requirements:
- useLockBodyScroll to prevent background document scrolling and eliminate layout shifts from disappearing scrollbars.
- useFocusTrap to cycle keyboard tab navigation within active dialogs and return focus upon dismissal.
- Native <button> elements with aria-label, aria-modal="true", and role="dialog".
- Visible focus rings with high contrast outline.
```

---

### 7. Visual QA & Verification Prompt
```text
Task: Launch Vite dev server, inspect viewport at 1440px desktop reference width, and compare against reference recording frames:
- Verify container alignment, spacing, typography weights, and sticky reservation card behavior.
- Validate modal launch, date picking, guest incrementing/decrementing, and image lightbox indexing.
- Run tsc and production build test to guarantee zero compile or bundling warnings.
```
