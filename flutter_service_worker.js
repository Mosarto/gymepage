'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
".git/config": "e507c1d317052a27095276424f6057e9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bf1c042684b29000994f2591619c6b2d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "097f533879990d5e7fca40673432cf8d",
".git/logs/refs/heads/main": "9745f6e14491db7f69c6c99e6229ec63",
".git/logs/refs/remotes/origin/main": "02a4ee48995ee983eb3c78599b95e81b",
".git/objects/15/8bd3641d48364f5f51d1413d73ea7a1a246fca": "bcd7dca64463d1554e4efa45268f6282",
".git/objects/16/143313c7345f910d710221c32dd361ff036c79": "feb212e67b3c41fb20bb97784011548a",
".git/objects/1d/1a373970b50f86b5c8ed8bae7b6a8ad8b9b04b": "0816908caef45d397b2c6fa9386b11c5",
".git/objects/1e/0e7e296353c9a6a0033dec8f6b5823e4525ff6": "3f4206a6beb3e371b607fac7cf0a5627",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/09f59fd23f7745bb96bc4e0ab7e441cd0fdbbf": "4233088272183efa19b07f7dc8aa2e14",
".git/objects/24/aff3463d0c4b5ae696a7be42762e61e4c87093": "fd78ad74fb87ebaccc090c3820017fcd",
".git/objects/2c/4ab8c5e173a66ea26630e3cb474335fe1ee0f8": "6b9273dc3f8fa01e5aab631c2fc7c3d5",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/485c3534dd2ba742c20f07365770f1c4cc8ccc": "9affc408b8baf7ba15bcbff62d73137d",
".git/objects/3a/360973356706d1dc8e4c10efb545368e7d9396": "ee9480d6a644eeb1ca658e26736fee33",
".git/objects/3c/afbc6a0c7c8381c0fdae56910572efa4b006c1": "cc1c5a68085f9cea36664c5498a1b65a",
".git/objects/45/7419bbacee056c71046468c72e7fedc2a5acb4": "0d89276424301ceff114c28a2613506b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/61/3e758b58bfda19c8379c4470487366321194f5": "31933acb5b375a9f3528fcb9ebfc71a6",
".git/objects/62/9f4f66bc5d53969f1389e81fc73cbca54ae329": "2e78e911eafc5d2c46a5adfcab621316",
".git/objects/72/f3ff14bb456e38ce6f2b4c93550cbbdb454af0": "59d05398edeb223914986e6c85d9677f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/f135599f05fe38f057eb600a6480e2164b43b1": "5e523313098096002aedb4743ed55664",
".git/objects/97/5baa8775f213fe95aef5c0c53440cb84a485f4": "bd5fd2fe8853598c1b3fc866828c2f3f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/28738a49fdb92542edd5d2a7fd7fc12d6691b0": "249047f3eeb36a515ff8ac2bc6278dcb",
".git/objects/a7/895acb85a1605721518a1ad273f04cc2c278db": "267dd701c5c0a6fdddb88d56170d1c73",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/19eb7b44dbec999aeac639b76386b250d96ab8": "e4c391d82e6a83a0b371197441e4568c",
".git/objects/b3/0cc5e6ef4672ab3adbde4200dc8f9c0e8a0aff": "67dbabfaee488460ab1d185a03ded4d4",
".git/objects/b4/3ac13e4af339558cdf3fcb10edff034f04f3fa": "3150f613bf2c367c1fb61676d600237a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c1/03f0e244dd922995fc9a8685c5eef874809621": "4a4f98bab085a67709225b85bdc9854b",
".git/objects/ca/715c85aeb91fe48291af427aec6c3d58851712": "0e1d6a1dfb459e7a322c1bea684efd82",
".git/objects/cd/cd319cd8dc083f223759bb7f6807b9204307ac": "2d5c6ad1eff72512706d7a78fe32d2f0",
".git/objects/e3/8a2724694df391bd6a2e04616d4189a46497c8": "3798b391926a335cdfce9b702e392af6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f8/6502a083654a27a937d3873d452c03d6973b6f": "519edb3dec0ef1a318088690045bf5f9",
".git/refs/heads/main": "bd367b2862ebacb93b5b19060a7dbdcb",
".git/refs/remotes/origin/main": "bd367b2862ebacb93b5b19060a7dbdcb",
"assets/AssetManifest.json": "73b9270711dc2c46ba018be92d30c130",
"assets/assets/icons/arrow.svg": "0cf9d22e2c44c4b3fe7abe6ebef99424",
"assets/assets/icons/logo.svg": "be57b145abfa1f2364f2fee060f274e4",
"assets/assets/icons/menu.svg": "a148bfeae9536a4ca481d3f738ad4fc5",
"assets/assets/icons/star.svg": "e363d78f48f4e9fbfac365e11daff86b",
"assets/assets/imgs/fundo.png": "12fc5d9efefd97ec1a895ea9791cae69",
"assets/assets/imgs/logo.png": "f3c2ce036e93cf85b473efb4665cbf54",
"assets/assets/imgs/man.png": "ae79c85723b575f3c61682033fd20c96",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "4bc9ab74913dc54bec35598920249873",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "27e9b613b3f6889583dbba89eb3b309b",
"/": "27e9b613b3f6889583dbba89eb3b309b",
"main.dart.js": "8c2df1c1d46cb37669044122e5421126",
"manifest.json": "4a36b757a5b76904498896d1f869168a",
"version.json": "c02f1cd125637600b0ec6327231d2307"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
