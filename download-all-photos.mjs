import fs from 'fs';
import path from 'path';

const galleryDir = path.resolve('public/images/gallery');
if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

const photos = [
  // Living room 2 (photo 6 & 7)
  { name: 'lr2_6.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/153aa732-4935-48b8-a6fe-b469b6af5efc.jpeg?im_w=1440' },
  { name: 'lr2_7.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/3c6e6809-1bb1-47a6-8e24-aff593e1c28f.jpeg?im_w=1440' },

  // Kitchen (2)
  { name: 'kitchen_1.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg?im_w=1440' },
  { name: 'kitchen_2.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/ddc853d7-e658-405c-bedc-8f31106c447e.jpeg?im_w=1440' },

  // Bedroom (6)
  { name: 'bedroom_1.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/67c61c6f-6260-4809-9510-0360e58a345d.jpeg?im_w=1440' },
  { name: 'bedroom_2.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/1c827136-4a85-4fe0-8e69-3fd8ea19bb17.jpeg?im_w=1440' },
  { name: 'bedroom_3.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/0622ab42-b851-4d55-9d9f-df3143bc5909.jpeg?im_w=1440' },
  { name: 'bedroom_4.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/a74e3c0b-3188-4442-9146-1cd4d6ea45df.jpeg?im_w=1440' },
  { name: 'bedroom_5.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/48a8ffbc-fbf7-4f84-bc29-ee400da3f08b.jpeg?im_w=1440' },
  { name: 'bedroom_6.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/3cf31697-f3f3-4c60-82c4-029acb119ae4.jpeg?im_w=1440' },

  // Bathroom (1)
  { name: 'bathroom_1.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/97c78f8a-5090-4663-aebc-ba4e13b47092.jpeg?im_w=1440' },

  // Gym (5)
  { name: 'gym_1.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/9aa8e65f-94ac-4ba0-9a10-9ec91e536d22.jpeg?im_w=1440' },
  { name: 'gym_2.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/246bd88d-4dd6-4117-a401-02a36ebfcf16.jpeg?im_w=1440' },
  { name: 'gym_3.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/4fede77d-7a71-446f-89e3-263af937f3fa.jpeg?im_w=1440' },
  { name: 'gym_4.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/79f59adb-5a5f-4d6c-8109-1f01f4ca0d03.jpeg?im_w=1440' },
  { name: 'gym_5.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/f19d8c0a-1d88-42a4-9218-686d4f0db7e4.jpeg?im_w=1440' },

  // Exterior (6)
  { name: 'exterior_1.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/23ea6621-6f74-4baa-acea-2fd03e312b41.jpeg?im_w=1440' },
  { name: 'exterior_2.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/5adfdf3e-d497-4efc-ab8c-fc559dab311e.jpeg?im_w=1440' },
  { name: 'exterior_3.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/608748cd-6ee7-4a71-88a2-ba79d3ddba5a.jpeg?im_w=1440' },
  { name: 'exterior_4.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/5b856fde-a393-41bf-b373-c9d02e64221f.jpeg?im_w=1440' },
  { name: 'exterior_5.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg?im_w=1440' },
  { name: 'exterior_6.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/42befad7-fb29-473d-91db-b03e7a544d1d.jpeg?im_w=1440' },

  // Pool (3)
  { name: 'pool_1.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/fc02f48f-a937-42c5-895d-f9cc3113d6ca.jpeg?im_w=1440' },
  { name: 'pool_2.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/929545d3-e241-46c0-8a70-c24531ce7b54.jpeg?im_w=1440' },
  { name: 'pool_3.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/8eb65a8b-e795-4870-b141-6f63b1be24ae.jpeg?im_w=1440' },

  // Additional photos (10)
  { name: 'additional_1.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/70325367-cbae-4993-b560-18cd3f6edd53.jpeg?im_w=1440' },
  { name: 'additional_2.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/cc7a56bd-242c-498a-9aef-0cffac619e54.jpeg?im_w=1440' },
  { name: 'additional_3.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/30ad93b2-293f-494d-b645-626303c6cb93.jpeg?im_w=1440' },
  { name: 'additional_4.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/9642a60d-e9de-4e1a-89c2-9ebd230f4a74.jpeg?im_w=1440' },
  { name: 'additional_5.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/b6599f26-d65c-4df0-baf2-ef18c82a86a3.jpeg?im_w=1440' },
  { name: 'additional_6.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/dc01fd46-b119-48d3-a43b-f6c093e26eca.jpeg?im_w=1440' },
  { name: 'additional_7.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/fe37b80e-da8a-4225-b27b-dfbb5d763c01.jpeg?im_w=1440' },
  { name: 'additional_8.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/3c90338e-86b4-423f-aae1-279e0ccc3a18.jpeg?im_w=1440' },
  { name: 'additional_9.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/862d936c-0f34-4e50-af87-b519e2781d19.jpeg?im_w=1440' },
  { name: 'additional_10.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599895892448055764/original/79addceb-8c2d-419b-80ff-e29af426a94c.jpeg?im_w=1440' },

  // Nearby Stays (8)
  { name: 'nearby_stay_1.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1660960231486578515/original/34934234-caf4-48d5-98a7-83759cd1af86.jpeg?im_w=1200' },
  { name: 'nearby_stay_2.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1146146270922883239/original/d78d8f7b-f5af-4558-b81d-b2599f72cbaa.jpeg?im_w=1200' },
  { name: 'nearby_stay_3.jpg', url: 'https://a0.muscache.com/im/pictures/miso/Hosting-1088724410874791609/original/55be089a-64bc-4b8a-b08c-8a890988b1fd.jpeg?im_w=1440' },
  { name: 'nearby_stay_4.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ3MTcyODMyMDA4MjE2MTMwMQ==/original/7a217142-d0b9-4466-a6c8-d65a6fd857e5.jpeg?im_w=1440' },
  { name: 'nearby_stay_5.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1105704406958313192/original/03429628-6281-4373-b8e3-d6c2405debf5.jpeg?im_w=1200' },
  { name: 'nearby_stay_6.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1599299089527292296/original/122ab805-0b77-4634-a0ab-a0f22378c2ea.jpeg?im_w=1200' },
  { name: 'nearby_stay_7.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1146146270922883239/original/d78d8f7b-f5af-4558-b81d-b2599f72cbaa.jpeg?im_w=1200' },
  { name: 'nearby_stay_8.jpg', url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ3MTcyODMyMDA4MjE2MTMwMQ==/original/7a217142-d0b9-4466-a6c8-d65a6fd857e5.jpeg?im_w=1440' },
];

async function downloadAll() {
  console.log(`Starting download of ${photos.length} photos...`);
  let completed = 0;
  for (const item of photos) {
    try {
      const res = await fetch(item.url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      const dest = path.join(galleryDir, item.name);
      fs.writeFileSync(dest, buf);
      completed++;
      console.log(`[${completed}/${photos.length}] Downloaded ${item.name} (${Math.round(buf.length / 1024)} KB)`);
    } catch (err) {
      console.error(`Error downloading ${item.name}:`, err.message);
    }
  }
  console.log('All downloads completed!');
}

downloadAll();
