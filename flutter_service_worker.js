'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f6c18025f060163525b2137922cf8010",
"assets/FontManifest.json": "10633e039e86df42774b99973b6d151d",
"assets/fonts/KleeOne-Regular.ttf": "2b20142b4fc98b3e2102a54a90d19904",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/airsquat.jpg": "be36bfd236d4b8dfedc5200c3cd51cba",
"assets/images/deadlift.gif": "5b7daa1e5d7dc4377a57d2678aa35ed0",
"assets/images/deadlift.jpg": "2aefac07d7d3376b5b550e73d9abf9e3",
"assets/images/decagon.png": "2d410c626511c226d91b7bdf6559ff73",
"assets/images/dumbbelldeadlift.gif": "74c699712ac3edf28b8428009c99b402",
"assets/images/dumbbellfrontsquat.gif": "df7eeb756fb1a0e63bdcf27a058aa74d",
"assets/images/dumbbellhangpowerclean.gif": "0bb25918f05c7ea12aa5f5899985bb71",
"assets/images/dumbbellhangpowersnatch.gif": "7446600eaf7bc205716c25d4414add4c",
"assets/images/dumbbelloverheadsquat.gif": "b95fef6f103ef9355f858a4f5b949884",
"assets/images/dumbbellpress.gif": "f7f3d6c0a1a6c3abf88915527d7df997",
"assets/images/dumbbellsnatch.gif": "b338ef44fb6b7215f40c7288401ce6d5",
"assets/images/dumbbellthruster.gif": "b9cbdbbeafb2430cd2b85056e5ba16db",
"assets/images/dumbbellturkishgetup.gif": "cf4ae90099af7ca433e1aab576e237e8",
"assets/images/frontsquat.gif": "7dca948b8ca82bc4311a0f5486f0af89",
"assets/images/frontsquat.jpg": "0f464212d5c845c6c74367423bb72d03",
"assets/images/hangpowerclean.gif": "ddcc1899a145086841fde94099765781",
"assets/images/hangpowersnatch.gif": "cceca3b3935679965fbe9522e4e89017",
"assets/images/medicineballclean.jpg": "71bba186fd6499d7bc4364b581767605",
"assets/images/overheadsquat.gif": "1ba99ac5b110f8c4d7a518d6d20b3cf0",
"assets/images/overheadsquat.jpg": "3be67a042f50a5432cedc21f6413e2d2",
"assets/images/press.gif": "93f20d32dce670428a1f6374748dc642",
"assets/images/pushjerk.jpg": "2f48a9038238f20346027888527e1b3d",
"assets/images/pushpress.jpg": "2f33249543f2ecfe39d6fd1ee2baf5c1",
"assets/images/sdhp.jpg": "13634173de476dd5c4e124258e819771",
"assets/images/shoulderpress.jpg": "dd4bc4ac996a3efa5abe2c815ed21989",
"assets/images/snatch.gif": "54c020c61d3a03ed64617debff090baa",
"assets/images/snatchbalance.gif": "263a6b7ee9dd8a1b6043f1401ecd3029",
"assets/images/sotspress.gif": "767814b294d18afeac36182f5af27cbd",
"assets/images/thruster.gif": "2a2c133db6be1a8b60f337ecc99c130a",
"assets/NOTICES": "92ac3c55d70dffd17f7c8a9dd603ea15",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_material_symbols/lib/fonts/material_symbols_regular.ttf": "0ca3d9dc35a283a5ae7c43e79da8388f",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "e9f2f143310604845f8aa26c42ad5f55",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b7e82d66331adb3570caf4f8d6b11dbb",
"/": "b7e82d66331adb3570caf4f8d6b11dbb",
"main.dart.js": "b6e0ab90c10a5fa8f5d032a0f810d822",
"manifest.json": "db7e7156b067129e99ad7e7462e4ce9b",
"version.json": "3b283fd457d5504ceae627da4ed30643"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
