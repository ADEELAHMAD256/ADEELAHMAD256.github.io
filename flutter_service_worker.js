'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "cb699b6fbc43820e25d9e0299d9eb2d4",
"version.json": "ef20ed547da03ca57da0bcda0676d65a",
"index.html": "693aec9fe9be978a30ae11f06699fb89",
"/": "693aec9fe9be978a30ae11f06699fb89",
"main.dart.js": "beb20da153a1cdb601387000b7b40ef9",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "ac3ec11c56aa82d21e1647aeb1ed4969",
"assets/AssetManifest.json": "cefa3717cfdc781a45e4a7d1e944f3d5",
"assets/NOTICES": "87272008b22d2b4d9ef73ae0f6fc45e6",
"assets/FontManifest.json": "04d44cf699c963aeba45aff545b8c5e5",
"assets/AssetManifest.bin.json": "b4df02334c01d81578434df74f84fc55",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2c26550e51f16cc7d0749e37eb068b4e",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/m3.png": "04ad313e5ca56513d2cb50455875c61b",
"assets/assets/images/m2.png": "9926d382a9a4a044cd3d4c42ab0dce18",
"assets/assets/images/m1.png": "02b25531be83e0653636d06a744df11e",
"assets/assets/images/m4.png": "4da7462522cafb951ede1031b2ff103e",
"assets/assets/images/instagram.png": "104814f01b9a97a8453586885b926330",
"assets/assets/images/why%2520us.png": "202c4e9e9b5cd67b10b1f8c4ffeede28",
"assets/assets/images/delivery.png": "7274e2f4877839dd6e11c6406b7e1c41",
"assets/assets/images/accept%2520card.png": "ce0706f2d2fbe6f73a68abbc2f9da949",
"assets/assets/images/Rectangle.png": "8e20bd6ea3c0fbcab720a253315bc837",
"assets/assets/images/Rectangle1.png": "9668cb9a4314fc33c86e005be154d61d",
"assets/assets/images/track.png": "34ec8987ff69a1ab44e3a93f79683d37",
"assets/assets/images/why.png": "83f43a9d87745700593aeaac778e1606",
"assets/assets/images/Rectangle2.png": "2e5eda88221d5dc0b9239200fc071ecf",
"assets/assets/images/done1.png": "60e7398b7db661f2a6cdb85e20089bd6",
"assets/assets/images/Rectangle3.png": "65288b326d7ea9e1eec629a7b9b5a7c8",
"assets/assets/images/send1.png": "46c852ffc4187b45a853119ff02cd625",
"assets/assets/images/Keep%2520recipients%2520involved.png": "5d5a1be05db415236ba8d9f8cd9a0ce9",
"assets/assets/images/tiktok.png": "d30f6d0b6c4df085e8e11884c369a2a1",
"assets/assets/images/contect%2520us.png": "fe5daca49225b2e3d64f21daa9b30f48",
"assets/assets/images/done.png": "3ddcbc7245c1cc8d639a529cd02578f5",
"assets/assets/images/Hire%2520a%2520team.png": "e003386489cf0e507669dd405751ddb0",
"assets/assets/images/become%2520a%2520khoudm.png": "2f2ceafdf39f3e65b85a8381ef9165ae",
"assets/assets/images/bg4.png": "3d76b6c7830a521bdadaed0a09a7e2b7",
"assets/assets/images/save%2520address.png": "cb65cccc8789585e5a357ce92a33990b",
"assets/assets/images/logo.png": "acc71402360627fa9fe5efe0185c2df7",
"assets/assets/images/about%2520us.png": "637f3ed702a756665bbd3f716796067c",
"assets/assets/images/bg1.png": "e0cb0fd2c17f85d7e3bb2d3467003e01",
"assets/assets/images/bg1.jpg": "491456102317881815c3939f0709ec12",
"assets/assets/images/linkedin.png": "0173f6516295df1d202fc4a03559f10f",
"assets/assets/images/bg3.jpg": "b88e784c206d9ef66ca1ab3f587340ad",
"assets/assets/images/mobile.png": "fcce0fde3db7adfd188045714315ae85",
"assets/assets/images/bg2.jpg": "3ed1e2121b4c10bc5eefe99efdcb8b49",
"assets/assets/images/track1.png": "bc26d79aac1e5a3b56c1cadb94445f3a",
"assets/assets/images/how_it_work.png": "dd76c7db687719d4bdd103eedcbd1fe7",
"assets/assets/images/send.png": "cb63542843ee2ee4f5c8d1e45ad5e90c",
"assets/assets/fonts/peachy-keen-jf.otf": "3ebcb4e60184cd412ce2808e3ac05db0",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
