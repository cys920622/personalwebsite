"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/personalwebsite/index.html","17ea91ac6e96c7b0f99255ef16bc53a2"],["/personalwebsite/static/css/main.3c4bbded.css","95934d7e43990a54bdc73d52e2c2adf8"],["/personalwebsite/static/js/main.a9217337.js","01cb41b7317cf5fc632715129fa9b42a"],["/personalwebsite/static/media/bio_section_background.ded2c112.jpg","ded2c112eabec42ccf80ac0ace69117f"],["/personalwebsite/static/media/collab-a-comic.f4c49629.jpg","f4c4962998f42fcddc8039eae91d50a8"],["/personalwebsite/static/media/email.7bffa1b3.png","7bffa1b331ff0b71bf86a255102d7fb1"],["/personalwebsite/static/media/github.71edeaef.svg","71edeaefdc2f5a19dc84298669af6962"],["/personalwebsite/static/media/headshot.864e230a.png","864e230a195fb4abebe6ef0e21bbe575"],["/personalwebsite/static/media/hootsuite-logo.e0559b69.png","e0559b69cfc18a7e656763504c1a3193"],["/personalwebsite/static/media/icon-backend.bb243e84.png","bb243e84e616dab7c76a88b5a56424be"],["/personalwebsite/static/media/icon-toolbox.3f8096a8.svg","3f8096a8f8551e5dd4b83ad803911fa4"],["/personalwebsite/static/media/kikisdeliveryservice.40617e49.png","40617e49f25e2b0f6333b47f5d389c02"],["/personalwebsite/static/media/linkedin-in.7332e656.svg","7332e656ce3c7d58bcde5bc4ce230453"],["/personalwebsite/static/media/ms-logo.7f62a1fe.png","7f62a1fe4ed382703c155246f2970abb"],["/personalwebsite/static/media/resume-icon.e330d7da.svg","e330d7daf394bb31364c636de5c4daf4"],["/personalwebsite/static/media/study-buddy.d71e90c9.png","d71e90c910e43513d752eeefc3cd1b32"],["/personalwebsite/static/media/visier-logo.23a36c1d.png","23a36c1dfe4f8d3e6b4709994302520f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var s=new URL(e);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),s=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/personalwebsite/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});