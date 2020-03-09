/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [
    [
        "pages\/the-climb-1\/index.html",
        "MkRbFyu6THJvPVPAJXi3w"
    ],
    [
        "pages\/why-i-started-hax-camp-1\/index.html",
        "aDZBqL8Pj6PeE3aAR3wQ"
    ],
    [
        "pages\/abstractionism-1\/index.html",
        "JOqQTByCxre3kViuny76QA"
    ],
    [
        "pages\/villains-and-visionaries\/index.html",
        "ATebOj9aY5nmwk6JXcdBNw"
    ],
    [
        "pages\/our-values-empowerment-1\/index.html",
        "lj3ImRPySX3kin7BnwLVQ"
    ],
    [
        "pages\/catching-gman-1\/index.html",
        "RbOWY1adWeZr99zRabeJQ"
    ],
    [
        "pages\/the-infinite-void-1\/index.html",
        "HyLeDXqvRW8iePFLrGynQ"
    ],
    [
        "pages\/my-first-time-on-stage-2\/index.html",
        "uwhsNjfR5Zh3G3CAstgaKg"
    ],
    [
        "pages\/annabella-2\/index.html",
        "mX44cCL8ar6KNzAPtFppBA"
    ],
    [
        "pages\/hey-remember-when-2\/index.html",
        "u1NAjoHVTNojO4tRueDPLw"
    ],
    [
        "pages\/open-community-pedagogy-2\/index.html",
        "RYWnQA9lfyDgUXqkHww6g"
    ],
    [
        "pages\/stand-against-the-ocean-2\/index.html",
        "Kgr7hAfsQHnuKvDZgLWQ"
    ],
    [
        "pages\/edtechjoker-2\/index.html",
        "TXt1ymPckb9egwr5UaTA"
    ],
    [
        "pages\/technical-weapons-2\/index.html",
        "8Su70e5UVvZl4q8D46bkEg"
    ],
    [
        "pages\/i-made-a-thing-2\/index.html",
        "5JHwoW0B6tMPwO3GMikKkA"
    ],
    [
        "pages\/the-web-components-high-performance-video-2\/index.html",
        "MBXdeF4nZ1UGB55uhU1R5w"
    ],
    [
        "pages\/drunken-ux-interview-2\/index.html",
        "YIrXqJttKQud5JdcEBVqog"
    ],
    [
        "pages\/fortify-2\/index.html",
        "8hYm5MbVcHtq6XB6K4Ar4A"
    ],
    [
        "pages\/all-screens-have-rights-2\/index.html",
        "UVfscFY2QbsxXyecwSySuA"
    ],
    [
        "pages\/reclaim-the-web-2\/index.html",
        "T1atx0YsGCcnn2WKm2MWA"
    ],
    [
        "pages\/structured-anarchy-2\/index.html",
        "OOr9Rf3Pt6ZC8juiVNhdw"
    ],
    [
        "pages\/haxcms-theme-layer-code-review-2\/index.html",
        "82oTxaqmLOf31gfQo5Aqw"
    ],
    [
        "pages\/2018-innovation-submission-2\/index.html",
        "n8oLh1EZKcdVfnPYdqC6Q"
    ],
    [
        "pages\/elms-ln-code-review-series-part-1-2\/index.html",
        "OLYibzIIGxapa57Ogg2jw"
    ],
    [
        "pages\/golden-shimmering-joy-2\/index.html",
        "JBlTnoTsWVlzuS3YPykUFg"
    ],
    [
        "pages\/common-web-component-state-question-2\/index.html",
        "wFhD5h7AxUXfnChSSKWWA"
    ],
    [
        "pages\/ngdle-is-really-just-enigma-misspelled-2\/index.html",
        "tuqRVnrHlwF3HmwGgatyA"
    ],
    [
        "pages\/compartmentalizing-2\/index.html",
        "lDVsMJOOIYVzPksjd1f7g"
    ],
    [
        "pages\/occupy-the-bridge-2\/index.html",
        "fIjzDCd0GMK6edgGgW7ycw"
    ],
    [
        "pages\/when-educators-left-the-lms-2\/index.html",
        "BpYAvU0j6h9UC5V81mTdVw"
    ],
    [
        "pages\/the-lms-is-cable-we-are-roku-expect-us-2\/index.html",
        "7gmDrwwG9TpQUsvA09fPA"
    ],
    [
        "pages\/innovation-s-four-ingredients-2\/index.html",
        "wUtgb4pmRcSo6QfxEEuvA"
    ],
    [
        "pages\/straddling-the-abyss-2\/index.html",
        "mJG3G3u7Qu4vUSVIYRTPA"
    ],
    [
        "pages\/the-knowledge-decentralization-manifesto-2\/index.html",
        "1h7TigGPbxVVGwHx1nVDtA"
    ],
    [
        "pages\/hax-apereo-piece-2\/index.html",
        "AsykHl3UuMPJZy3bqxJw"
    ],
    [
        "pages\/the-perfect-cup-of-coffee-2\/index.html",
        "5uJSCbofVhBNvglqLjNtQ"
    ],
    [
        "pages\/watch-the-ripples-and-you-ll-miss-the-waves-2\/index.html",
        "pnuJuSkm6CeCW6vrS93zpg"
    ],
    [
        "pages\/i-challenge-you-to-transform-education-together-2\/index.html",
        "cFv09pj0etsH2f5uCb2cA"
    ],
    [
        "pages\/actually-curing-edtech-2\/index.html",
        "YqxXNxxva5VCpltmqiVJQ"
    ],
    [
        "pages\/pure-joy-2\/index.html",
        "AOxjnbbPPuVc1gTaAtFG3Q"
    ],
    [
        "pages\/creating-the-decentralized-instructional-experience-app-2\/index.html",
        "yr4cCxeyKJn6fckAoJhQ"
    ],
    [
        "pages\/using-webcomponents-to-unearth-the-ngdle-2\/index.html",
        "xxEUknopjIIl76T32iA"
    ],
    [
        "pages\/this-is-not-reality-2\/index.html",
        "6c7JKWEG3STDaZq75eEtlw"
    ],
    [
        "pages\/playing-for-40-2\/index.html",
        "XYzC7WdDD4GpeEUwYpRjrA"
    ],
    [
        "pages\/dood-2\/index.html",
        "PdWy8D4G2dWPglm7xTgaQg"
    ],
    [
        "pages\/generation-uine-2\/index.html",
        "IY6FwIyLM87vt5rwNgIHw"
    ],
    [
        "pages\/birthday-party-2\/index.html",
        "lmcCuXSrNGzOUrlBf9yXQ"
    ],
    [
        "pages\/end-of-summer-2\/index.html",
        "4RK96XElOmm9mYVCO1FxQ"
    ],
    [
        "pages\/combating-the-rise-of-authoritarianism-2\/index.html",
        "wzsqtNrWX4qDQ80dz39b8w"
    ],
    [
        "pages\/singularity-digital-activism-and-saving-our-institutions-2\/index.html",
        "bQ1EeY5SiPMqxaJxlhMg"
    ],
    [
        "pages\/ddosa-2\/index.html",
        "A0DPC1FyiXyh8b06fz2HDg"
    ],
    [
        "pages\/occutea-wallparty-2\/index.html",
        "xmCE4HbfxmFzEaPH32uHA"
    ],
    [
        "pages\/efficiency-as-activism-2\/index.html",
        "7590h4eMWiTZRUwougQ"
    ],
    [
        "pages\/rate-of-perception-2\/index.html",
        "9GB3m1egiVzgmDGtTbQ"
    ],
    [
        "pages\/ministry-of-information-2\/index.html",
        "hkxgWtR5Alua9rw6Seslw"
    ],
    [
        "pages\/organic-deployment-architecture-2\/index.html",
        "4SQj43J0GwLUbAmMqVvy8g"
    ],
    [
        "pages\/legacy-of-human-hierarchy-2\/index.html",
        "WeSXbhZ8wePfSz8KQ1opiA"
    ],
    [
        "pages\/transform-control-2\/index.html",
        "T7uoRQIeu8gvjxNhRN8FQ"
    ],
    [
        "pages\/transforming-industry-through-information-altruism-2\/index.html",
        "Pz0votjYrXzLSoHNUHua8w"
    ],
    [
        "pages\/sustainable-systems-development-a-moral-issue-2\/index.html",
        "2fEDg1YpoRdjv9gi1wzg"
    ],
    [
        "index.html",
        "WGa3vji4VdX4pB29a5rsbQ"
    ],
    [
        "files\/haxcms-managed\/512x512-IMG_20190823_102434 2.jpg",
        "RMuKEMmXQwyCiEFWW59N0A"
    ],
    [
        "files\/haxcms-managed\/310x310-IMG_20190823_102434 2.jpg",
        "x5VRkvbVlfcnhZvQ2eLZA"
    ],
    [
        "files\/haxcms-managed\/192x192-IMG_20190823_102434 2.jpg",
        "wTVCFKtpmsW0SvRGrAFw"
    ],
    [
        "files\/haxcms-managed\/150x150-IMG_20190823_102434 2.jpg",
        "gjkMQhlMXvrthcbqBSc8Q"
    ],
    [
        "files\/haxcms-managed\/144x144-IMG_20190823_102434 2.jpg",
        "J9XNQQWTXSKLPJmyOoAWA"
    ],
    [
        "files\/haxcms-managed\/96x96-IMG_20190823_102434 2.jpg",
        "HzYZ8IvE9wfJHAEjkgONRQ"
    ],
    [
        "files\/haxcms-managed\/72x72-IMG_20190823_102434 2.jpg",
        "bP4mQkAWnVEa1PFiTobA"
    ],
    [
        "files\/haxcms-managed\/70x70-IMG_20190823_102434 2.jpg",
        "QHr7eI2l4ETGVE2tmIedQ"
    ],
    [
        "files\/haxcms-managed\/48x48-IMG_20190823_102434 2.jpg",
        "VC1M2eBkPS47I02q1j2I4A"
    ],
    [
        "files\/haxcms-managed\/36x36-IMG_20190823_102434 2.jpg",
        "aP82luzmv19QDAnjWvW0aA"
    ],
    [
        "files\/haxcms-managed\/16x16-IMG_20190823_102434 2.jpg",
        "MC2oEa4LYQvAnSJAw65c2w"
    ],
    [
        "manifest.json",
        "gmNXxVtnfpUk2yLp2YOQ"
    ],
    [
        "site.json",
        "XmdQYpmPKXdRARHyFtMxpQ"
    ],
    [
        "404.html",
        "QEzLbAYRfRrqwxyIGIpfNQ"
    ],
    [
        "files\/._243b170c2b1bfa37b38cf9b7b4d1f2b6810e8906-dsc01395.jpg",
        "sRGPEVw6CaCFhA2NyCeqw"
    ],
    [
        "files\/agency.jpg",
        "heuFcUVfQMUlmlSNOVyOQ"
    ],
    [
        "files\/89cd7f14f2e207bd9a20b916cddc089da4ba3464-butterfly.jpg",
        "JpT29cZTxByMKCs67l6A"
    ],
    [
        "files\/ipad2.jpg",
        "AmsTaVcswbLHUOQ77CJ69g"
    ],
    [
        "files\/._2019-05-24_11-14-49.jpg",
        "Ws7qzV0D7JKfGxq0n7r43w"
    ],
    [
        "files\/e4e17905cd786316dd2485bc5e6bc8854f18661b-ngdle-university.jpg",
        "1dFIchnn58zwLHvrvWVzg"
    ],
    [
        "files\/._89cd7f14f2e207bd9a20b916cddc089da4ba3464-butterfly.jpg",
        "ju9eOCu4n0p9oNNZmvrzXA"
    ],
    [
        "files\/IMG_20190819_205859.jpg",
        "5QBi9DgW1FYBuP2KH9bcqg"
    ],
    [
        "files\/collapse.jpg",
        "9AhNkigqf3OSXyOx3jlB6w"
    ],
    [
        "files\/._.DS_Store",
        "A0pQqDXkb1dum938Ip9Mxw"
    ],
    [
        "files\/headshot143493.3299999684.jpg",
        "gJwD9axCQTt2nMKKzPDdOA"
    ],
    [
        "files\/android22.jpg",
        "Y9MlD6h5MVcxCbXV59lfPw"
    ],
    [
        "files\/headshot.jpg",
        "JkwKNRVzizk5HjpprMaLPQ"
    ],
    [
        "files\/IMG_20190713_122826.jpg",
        "uCQ1SsTycMdzlS4XBpcoQ"
    ],
    [
        "files\/ff3.jpg",
        "aARwUXVR7yGVvQYTTUDhQ"
    ],
    [
        "files\/243b170c2b1bfa37b38cf9b7b4d1f2b6810e8906-dsc01395.jpg",
        "Ow96pIX28xlDg55FlYD8Q"
    ],
    [
        "files\/IMG_20190726_110706.jpg",
        "6723pAlAbqZ0WnHHK7ow"
    ],
    [
        "files\/headshot14025.480000011157.jpg",
        "XnigKEEcgLIJqWDMxlN4A"
    ],
    [
        "files\/ie8.jpg",
        "bCJvIk5u73GlkEVmq9OaQ"
    ],
    [
        "files\/creatinglife.jpg",
        "8yfMVUAQdIq3is7axjDBA"
    ],
    [
        "files\/IMG_20190713_115919.jpg",
        "8E2o48IrottbOuTP31HNg"
    ],
    [
        "files\/2019-05-24_11-14-49.jpg",
        "HKAmOmArCq11EM1PS8hSw"
    ],
    [
        "files\/2cbcf74eb414cbc4ffc644bc923c33a3b5e3be26-sandbagged.jpg",
        "xhhQhctjxuk4fJxGxfwGw"
    ],
    [
        "files\/edtechjoker.jpg",
        "SV16KwJAobEPF83aqpyJzQ"
    ],
    [
        "files\/IMG_20190729_213151.jpg",
        "m9Oqr4VylyamKBOO6t9rxA"
    ],
    [
        "files\/headshot495331.4750000136.jpg",
        "p3KLjW1ynrj2YWafHWoMw"
    ],
    [
        "files\/headshot3389968.250000001.jpg",
        "a1IjCWVuT80Jcqr1cM3gw"
    ],
    [
        "files\/drunkenux.jpg",
        "cgrT7GXih0Szj5xkf9UpBA"
    ],
    [
        "files\/3f7119c8ee0795b23c3ed754c7e48860e8ad8b98-organic.jpg",
        "MOfRwci0ijhdYtKrZJgoQ"
    ],
    [
        "files\/safari4.jpg",
        "FQDtEWPImlz125IU6ExsA"
    ],
    [
        "files\/edtechjoker.gif",
        "53CIQlkqpVRe4lT85qaJQ"
    ],
    [
        "files\/headshot522511.73000002746.jpg",
        "6MD5JYySNuHQ6gSM4ZQ8Q"
    ],
    [
        "files\/headshot451242.7200000384.jpg",
        "wdcjAmi7h8NoO34DVEePsA"
    ],
    [
        "files\/color-spectrum.jpg",
        "DFSsTizZxcq8wsHHUSU7Rw"
    ],
    [
        "files\/snowflake.jpg",
        "5dt4nAk47PuOAoEuQBg"
    ],
    [
        "files\/IMG_20190729_103418.jpg",
        "usgbaGcdv75VjkZ5rdeENQ"
    ],
    [
        "files\/037e9f1490d0606b7967973e65ebefb1dbb333ee-file0001605429169.jpg",
        "Ho2sa0rCeT7Kac3f0x29uQ"
    ],
    [
        "files\/IMG_20190221_184100.jpg",
        "qhEbl6kNiJpyJ5enib19g"
    ],
    [
        "files\/headshot511743.1799999904.jpg",
        "R637p9fdcA9HCiCZ5NHE4Q"
    ],
    [
        "files\/IMG_20190726_105535.jpg",
        "8mAikag0Iwwh8mG9sCwzqw"
    ],
    [
        "files\/headshot504645.5449999776.jpg",
        "09HayoCYHBzqoUKUJnDwA"
    ],
    [
        "files\/ie6.jpg",
        "0stdTxGFUHdc7qAvBKmXg"
    ],
    [
        "files\/headshot3408605.23.jpg",
        "z77zUoHK2sWjSeTi04Pusg"
    ],
    [
        "files\/._IMG_20190127_153429.jpg",
        "o7NZhAVUXdFv9PwpRG0A"
    ],
    [
        "files\/headshot533131.1700000078.jpg",
        "uYa5u8X2mBeGl0UEsSTdEw"
    ],
    [
        "files\/._3f7119c8ee0795b23c3ed754c7e48860e8ad8b98-organic.jpg",
        "U4imMD90WwXH0qaLWK983g"
    ],
    [
        "files\/complexlife.jpg",
        "FgtyZtkjKWo5gOtiFurHg"
    ],
    [
        "files\/._IMG_20190221_184100.jpg",
        "wpywaqcdQrn6xzSeSoEA"
    ],
    [
        "files\/IMG_20190127_153429.jpg",
        "yd4LYpwHWIv1yKGKmkQd4Q"
    ],
    [
        "files\/IMG_20190716_102855.jpg",
        "ms7WdmwvAsGo5dwGzXdLUQ"
    ],
    [
        "files\/._935b7d832386eaf3173d063a70fe5000fc03dc1c-ngdle-university-uni-side.jpg",
        "6z2iSBLctFChuNECTL32Q"
    ],
    [
        "files\/headshot14076.185000012629.jpg",
        "0x4WCdPB4GyYJ5IMxw"
    ],
    [
        "files\/IMG_20190307_142300.jpg",
        "c387SyJ8R3SqkbiEerHqg"
    ],
    [
        "files\/._037e9f1490d0606b7967973e65ebefb1dbb333ee-file0001605429169.jpg",
        "MkwEm1KVDLqsacNQFVcSg"
    ],
    [
        "files\/bridge.jpg",
        "ABnWktPUavyklcTBuzrxFg"
    ],
    [
        "files\/935b7d832386eaf3173d063a70fe5000fc03dc1c-ngdle-university-uni-side.jpg",
        "5c7Gwqut1iFxr8npV0XPEw"
    ],
    [
        "files\/EBd7L7eXkAAOW_d.jpg",
        "84JUWrlsDVAciy6S9zA"
    ],
    [
        "files\/container.jpg",
        "2z8CQpVm2zKutbkjxOA1pA"
    ],
    [
        "files\/IMG_20190823_102434 2.jpg",
        "78cjrqsJ4FniDgCxzAsQ"
    ],
    [
        "files\/IMG_20190729_213158.jpg",
        "g4uN2RkhSt9VFaohPFOxyA"
    ],
    [
        "files\/headshot422070.074999996.jpg",
        "LUnzN4NO7ByKLmet2KpuA"
    ],
    [
        "files\/headshot529121.6300000087.jpg",
        "WqqMjfZOFxJDYejOQxFXQ"
    ],
    [
        "files\/IMG_20190713_185619.jpg",
        "fHWEWlbpxUmMF70B2vTwQ"
    ]
];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
  var url = new URL(originalUrl);
  if (url.pathname.slice(-1) === '/') {
    url.pathname += index;
  }
  return url.toString();
};

var cleanResponse = function (originalResponse) {
  // If this is not a redirected response, then we don't have to do anything.
  if (!originalResponse.redirected) {
    return Promise.resolve(originalResponse);
  }

  // Firefox 50 and below doesn't support the Response.body stream, so we may
  // need to read the entire body to memory as a Blob.
  var bodyPromise = 'body' in originalResponse ?
    Promise.resolve(originalResponse.body) :
    originalResponse.blob();

  return bodyPromise.then(function (body) {
    // new Response() is happy when passed either a stream or a Blob.
    return new Response(body, {
      headers: originalResponse.headers,
      status: originalResponse.status,
      statusText: originalResponse.statusText
    });
  });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
  dontCacheBustUrlsMatching) {
  // Create a new URL object to avoid modifying originalUrl.
  var url = new URL(originalUrl);

  // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
  // then add in the extra cache-busting URL parameter.
  if (!dontCacheBustUrlsMatching ||
    !(url.pathname.match(dontCacheBustUrlsMatching))) {
    url.search += (url.search ? '&' : '') +
      encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
  }

  return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
  // If the whitelist is empty, then consider all URLs to be whitelisted.
  if (whitelist.length === 0) {
    return true;
  }

  // Otherwise compare each path regex to the path of the URL passed in.
  var path = (new URL(absoluteUrlString)).pathname;
  return whitelist.some(function (whitelistedPathRegex) {
    return path.match(whitelistedPathRegex);
  });
};

var stripIgnoredUrlParameters = function (originalUrl,
  ignoreUrlParametersMatching) {
  var url = new URL(originalUrl);
  // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
  url.hash = '';

  url.search = url.search.slice(1) // Exclude initial '?'
    .split('&') // Split into an array of 'key=value' strings
    .map(function (kv) {
      return kv.split('='); // Split each 'key=value' string into a [key, value] array
    })
    .filter(function (kv) {
      return ignoreUrlParametersMatching.every(function (ignoredRegex) {
        return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
      });
    })
    .map(function (kv) {
      return kv.join('='); // Join each [key, value] array into a 'key=value' string
    })
    .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

  return url.toString();
};


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function (item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function (requests) {
    return requests.map(function (request) {
      return request.url;
    });
  }).then(function (urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return setOfCachedUrls(cache).then(function (cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, { credentials: 'same-origin' });
              return fetch(request).then(function (response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function (responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function () {

      // Force the SW to transition from installing -> active state
      return self.skipWaiting();

    })
  );
});

self.addEventListener('activate', function (event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.keys().then(function (existingRequests) {
        return Promise.all(
          existingRequests.map(function (existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function () {

      return self.clients.claim();

    })
  );
});


self.addEventListener('fetch', function (event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = '';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'index.html';
    if (!shouldRespond &&
      navigateFallback &&
      (event.request.mode === 'navigate') &&
      isPathWhitelisted(["\\/[^\\/\\.]*(\\?|$)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function (cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function (e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
!function (e) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else { var t; t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.toolbox = e() } }(function () { return function e(t, n, r) { function o(c, s) { if (!n[c]) { if (!t[c]) { var a = "function" == typeof require && require; if (!s && a) return a(c, !0); if (i) return i(c, !0); var u = new Error("Cannot find module '" + c + "'"); throw u.code = "MODULE_NOT_FOUND", u } var f = n[c] = { exports: {} }; t[c][0].call(f.exports, function (e) { var n = t[c][1][e]; return o(n ? n : e) }, f, f.exports, e, t, n, r) } return n[c].exports } for (var i = "function" == typeof require && require, c = 0; c < r.length; c++)o(r[c]); return o }({ 1: [function (e, t, n) { "use strict"; function r(e, t) { t = t || {}; var n = t.debug || m.debug; n && console.log("[sw-toolbox] " + e) } function o(e) { var t; return e && e.cache && (t = e.cache.name), t = t || m.cache.name, caches.open(t) } function i(e, t) { t = t || {}; var n = t.successResponses || m.successResponses; return fetch(e.clone()).then(function (r) { return "GET" === e.method && n.test(r.status) && o(t).then(function (n) { n.put(e, r).then(function () { var r = t.cache || m.cache; (r.maxEntries || r.maxAgeSeconds) && r.name && c(e, n, r) }) }), r.clone() }) } function c(e, t, n) { var r = s.bind(null, e, t, n); d = d ? d.then(r) : r() } function s(e, t, n) { var o = e.url, i = n.maxAgeSeconds, c = n.maxEntries, s = n.name, a = Date.now(); return r("Updating LRU order for " + o + ". Max entries is " + c + ", max age is " + i), g.getDb(s).then(function (e) { return g.setTimestampForUrl(e, o, a) }).then(function (e) { return g.expireEntries(e, c, i, a) }).then(function (e) { r("Successfully updated IDB."); var n = e.map(function (e) { return t.delete(e) }); return Promise.all(n).then(function () { r("Done with cache cleanup.") }) }).catch(function (e) { r(e) }) } function a(e, t, n) { return r("Renaming cache: [" + e + "] to [" + t + "]", n), caches.delete(t).then(function () { return Promise.all([caches.open(e), caches.open(t)]).then(function (t) { var n = t[0], r = t[1]; return n.keys().then(function (e) { return Promise.all(e.map(function (e) { return n.match(e).then(function (t) { return r.put(e, t) }) })) }).then(function () { return caches.delete(e) }) }) }) } function u(e, t) { return o(t).then(function (t) { return t.add(e) }) } function f(e, t) { return o(t).then(function (t) { return t.delete(e) }) } function h(e) { e instanceof Promise || p(e), m.preCacheItems = m.preCacheItems.concat(e) } function p(e) { var t = Array.isArray(e); if (t && e.forEach(function (e) { "string" == typeof e || e instanceof Request || (t = !1) }), !t) throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests."); return e } function l(e, t, n) { if (!e) return !1; if (t) { var r = e.headers.get("date"); if (r) { var o = new Date(r); if (o.getTime() + 1e3 * t < n) return !1 } } return !0 } var d, m = e("./options"), g = e("./idb-cache-expiration"); t.exports = { debug: r, fetchAndCache: i, openCache: o, renameCache: a, cache: u, uncache: f, precache: h, validatePrecacheInput: p, isResponseFresh: l } }, { "./idb-cache-expiration": 2, "./options": 4 }], 2: [function (e, t, n) { "use strict"; function r(e) { return new Promise(function (t, n) { var r = indexedDB.open(u + e, f); r.onupgradeneeded = function () { var e = r.result.createObjectStore(h, { keyPath: p }); e.createIndex(l, l, { unique: !1 }) }, r.onsuccess = function () { t(r.result) }, r.onerror = function () { n(r.error) } }) } function o(e) { return e in d || (d[e] = r(e)), d[e] } function i(e, t, n) { return new Promise(function (r, o) { var i = e.transaction(h, "readwrite"), c = i.objectStore(h); c.put({ url: t, timestamp: n }), i.oncomplete = function () { r(e) }, i.onabort = function () { o(i.error) } }) } function c(e, t, n) { return t ? new Promise(function (r, o) { var i = 1e3 * t, c = [], s = e.transaction(h, "readwrite"), a = s.objectStore(h), u = a.index(l); u.openCursor().onsuccess = function (e) { var t = e.target.result; if (t && n - i > t.value[l]) { var r = t.value[p]; c.push(r), a.delete(r), t.continue() } }, s.oncomplete = function () { r(c) }, s.onabort = o }) : Promise.resolve([]) } function s(e, t) { return t ? new Promise(function (n, r) { var o = [], i = e.transaction(h, "readwrite"), c = i.objectStore(h), s = c.index(l), a = s.count(); s.count().onsuccess = function () { var e = a.result; e > t && (s.openCursor().onsuccess = function (n) { var r = n.target.result; if (r) { var i = r.value[p]; o.push(i), c.delete(i), e - o.length > t && r.continue() } }) }, i.oncomplete = function () { n(o) }, i.onabort = r }) : Promise.resolve([]) } function a(e, t, n, r) { return c(e, n, r).then(function (n) { return s(e, t).then(function (e) { return n.concat(e) }) }) } var u = "sw-toolbox-", f = 1, h = "store", p = "url", l = "timestamp", d = {}; t.exports = { getDb: o, setTimestampForUrl: i, expireEntries: a } }, {}], 3: [function (e, t, n) { "use strict"; function r(e) { var t = a.match(e.request); t ? e.respondWith(t(e.request)) : a.default && "GET" === e.request.method && 0 === e.request.url.indexOf("http") && e.respondWith(a.default(e.request)) } function o(e) { s.debug("activate event fired"); var t = u.cache.name + "$$$inactive$$$"; e.waitUntil(s.renameCache(t, u.cache.name)) } function i(e) { return e.reduce(function (e, t) { return e.concat(t) }, []) } function c(e) { var t = u.cache.name + "$$$inactive$$$"; s.debug("install event fired"), s.debug("creating cache [" + t + "]"), e.waitUntil(s.openCache({ cache: { name: t } }).then(function (e) { return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function (t) { return s.debug("preCache list: " + (t.join(", ") || "(none)")), e.addAll(t) }) })) } e("serviceworker-cache-polyfill"); var s = e("./helpers"), a = e("./router"), u = e("./options"); t.exports = { fetchListener: r, activateListener: o, installListener: c } }, { "./helpers": 1, "./options": 4, "./router": 6, "serviceworker-cache-polyfill": 16 }], 4: [function (e, t, n) { "use strict"; var r; r = self.registration ? self.registration.scope : self.scope || new URL("./", self.location).href, t.exports = { cache: { name: "$$$toolbox-cache$$$" + r + "$$$", maxAgeSeconds: null, maxEntries: null }, debug: !1, networkTimeoutSeconds: null, preCacheItems: [], successResponses: /^0|([123]\d\d)|(40[14567])|410$/ } }, {}], 5: [function (e, t, n) { "use strict"; var r = new URL("./", self.location), o = r.pathname, i = e("path-to-regexp"), c = function (e, t, n, r) { t instanceof RegExp ? this.fullUrlRegExp = t : (0 !== t.indexOf("/") && (t = o + t), this.keys = [], this.regexp = i(t, this.keys)), this.method = e, this.options = r, this.handler = n }; c.prototype.makeHandler = function (e) { var t; if (this.regexp) { var n = this.regexp.exec(e); t = {}, this.keys.forEach(function (e, r) { t[e.name] = n[r + 1] }) } return function (e) { return this.handler(e, t, this.options) }.bind(this) }, t.exports = c }, { "path-to-regexp": 15 }], 6: [function (e, t, n) { "use strict"; function r(e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") } var o = e("./route"), i = e("./helpers"), c = function (e, t) { for (var n = e.entries(), r = n.next(), o = []; !r.done;) { var i = new RegExp(r.value[0]); i.test(t) && o.push(r.value[1]), r = n.next() } return o }, s = function () { this.routes = new Map, this.routes.set(RegExp, new Map), this.default = null };["get", "post", "put", "delete", "head", "any"].forEach(function (e) { s.prototype[e] = function (t, n, r) { return this.add(e, t, n, r) } }), s.prototype.add = function (e, t, n, c) { c = c || {}; var s; t instanceof RegExp ? s = RegExp : (s = c.origin || self.location.origin, s = s instanceof RegExp ? s.source : r(s)), e = e.toLowerCase(); var a = new o(e, t, n, c); this.routes.has(s) || this.routes.set(s, new Map); var u = this.routes.get(s); u.has(e) || u.set(e, new Map); var f = u.get(e), h = a.regexp || a.fullUrlRegExp; f.has(h.source) && i.debug('"' + t + '" resolves to same regex as existing route.'), f.set(h.source, a) }, s.prototype.matchMethod = function (e, t) { var n = new URL(t), r = n.origin, o = n.pathname; return this._match(e, c(this.routes, r), o) || this._match(e, [this.routes.get(RegExp)], t) }, s.prototype._match = function (e, t, n) { if (0 === t.length) return null; for (var r = 0; r < t.length; r++) { var o = t[r], i = o && o.get(e.toLowerCase()); if (i) { var s = c(i, n); if (s.length > 0) return s[0].makeHandler(n) } } return null }, s.prototype.match = function (e) { return this.matchMethod(e.method, e.url) || this.matchMethod("any", e.url) }, t.exports = new s }, { "./helpers": 1, "./route": 5 }], 7: [function (e, t, n) { "use strict"; function r(e, t, n) { return n = n || {}, i.debug("Strategy: cache first [" + e.url + "]", n), i.openCache(n).then(function (t) { return t.match(e).then(function (t) { var r = n.cache || o.cache, c = Date.now(); return i.isResponseFresh(t, r.maxAgeSeconds, c) ? t : i.fetchAndCache(e, n) }) }) } var o = e("../options"), i = e("../helpers"); t.exports = r }, { "../helpers": 1, "../options": 4 }], 8: [function (e, t, n) { "use strict"; function r(e, t, n) { return n = n || {}, i.debug("Strategy: cache only [" + e.url + "]", n), i.openCache(n).then(function (t) { return t.match(e).then(function (e) { var t = n.cache || o.cache, r = Date.now(); if (i.isResponseFresh(e, t.maxAgeSeconds, r)) return e }) }) } var o = e("../options"), i = e("../helpers"); t.exports = r }, { "../helpers": 1, "../options": 4 }], 9: [function (e, t, n) { "use strict"; function r(e, t, n) { return o.debug("Strategy: fastest [" + e.url + "]", n), new Promise(function (r, c) { var s = !1, a = [], u = function (e) { a.push(e.toString()), s ? c(new Error('Both cache and network failed: "' + a.join('", "') + '"')) : s = !0 }, f = function (e) { e instanceof Response ? r(e) : u("No result returned") }; o.fetchAndCache(e.clone(), n).then(f, u), i(e, t, n).then(f, u) }) } var o = e("../helpers"), i = e("./cacheOnly"); t.exports = r }, { "../helpers": 1, "./cacheOnly": 8 }], 10: [function (e, t, n) { t.exports = { networkOnly: e("./networkOnly"), networkFirst: e("./networkFirst"), cacheOnly: e("./cacheOnly"), cacheFirst: e("./cacheFirst"), fastest: e("./fastest") } }, { "./cacheFirst": 7, "./cacheOnly": 8, "./fastest": 9, "./networkFirst": 11, "./networkOnly": 12 }], 11: [function (e, t, n) { "use strict"; function r(e, t, n) { n = n || {}; var r = n.successResponses || o.successResponses, c = n.networkTimeoutSeconds || o.networkTimeoutSeconds; return i.debug("Strategy: network first [" + e.url + "]", n), i.openCache(n).then(function (t) { var s, a, u = []; if (c) { var f = new Promise(function (r) { s = setTimeout(function () { t.match(e).then(function (e) { var t = n.cache || o.cache, c = Date.now(), s = t.maxAgeSeconds; i.isResponseFresh(e, s, c) && r(e) }) }, 1e3 * c) }); u.push(f) } var h = i.fetchAndCache(e, n).then(function (e) { if (s && clearTimeout(s), r.test(e.status)) return e; throw i.debug("Response was an HTTP error: " + e.statusText, n), a = e, new Error("Bad response") }).catch(function (r) { return i.debug("Network or response error, fallback to cache [" + e.url + "]", n), t.match(e).then(function (e) { if (e) return e; if (a) return a; throw r }) }); return u.push(h), Promise.race(u) }) } var o = e("../options"), i = e("../helpers"); t.exports = r }, { "../helpers": 1, "../options": 4 }], 12: [function (e, t, n) { "use strict"; function r(e, t, n) { return o.debug("Strategy: network only [" + e.url + "]", n), fetch(e) } var o = e("../helpers"); t.exports = r }, { "../helpers": 1 }], 13: [function (e, t, n) { "use strict"; var r = e("./options"), o = e("./router"), i = e("./helpers"), c = e("./strategies"), s = e("./listeners"); i.debug("Service Worker Toolbox is loading"), self.addEventListener("install", s.installListener), self.addEventListener("activate", s.activateListener), self.addEventListener("fetch", s.fetchListener), t.exports = { networkOnly: c.networkOnly, networkFirst: c.networkFirst, cacheOnly: c.cacheOnly, cacheFirst: c.cacheFirst, fastest: c.fastest, router: o, options: r, cache: i.cache, uncache: i.uncache, precache: i.precache } }, { "./helpers": 1, "./listeners": 3, "./options": 4, "./router": 6, "./strategies": 10 }], 14: [function (e, t, n) { t.exports = Array.isArray || function (e) { return "[object Array]" == Object.prototype.toString.call(e) } }, {}], 15: [function (e, t, n) { function r(e, t) { for (var n, r = [], o = 0, i = 0, c = "", s = t && t.delimiter || "/"; null != (n = x.exec(e));) { var f = n[0], h = n[1], p = n.index; if (c += e.slice(i, p), i = p + f.length, h) c += h[1]; else { var l = e[i], d = n[2], m = n[3], g = n[4], v = n[5], w = n[6], y = n[7]; c && (r.push(c), c = ""); var b = null != d && null != l && l !== d, E = "+" === w || "*" === w, R = "?" === w || "*" === w, k = n[2] || s, $ = g || v; r.push({ name: m || o++, prefix: d || "", delimiter: k, optional: R, repeat: E, partial: b, asterisk: !!y, pattern: $ ? u($) : y ? ".*" : "[^" + a(k) + "]+?" }) } } return i < e.length && (c += e.substr(i)), c && r.push(c), r } function o(e, t) { return s(r(e, t)) } function i(e) { return encodeURI(e).replace(/[\/?#]/g, function (e) { return "%" + e.charCodeAt(0).toString(16).toUpperCase() }) } function c(e) { return encodeURI(e).replace(/[?#]/g, function (e) { return "%" + e.charCodeAt(0).toString(16).toUpperCase() }) } function s(e) { for (var t = new Array(e.length), n = 0; n < e.length; n++)"object" == typeof e[n] && (t[n] = new RegExp("^(?:" + e[n].pattern + ")$")); return function (n, r) { for (var o = "", s = n || {}, a = r || {}, u = a.pretty ? i : encodeURIComponent, f = 0; f < e.length; f++) { var h = e[f]; if ("string" != typeof h) { var p, l = s[h.name]; if (null == l) { if (h.optional) { h.partial && (o += h.prefix); continue } throw new TypeError('Expected "' + h.name + '" to be defined') } if (v(l)) { if (!h.repeat) throw new TypeError('Expected "' + h.name + '" to not repeat, but received `' + JSON.stringify(l) + "`"); if (0 === l.length) { if (h.optional) continue; throw new TypeError('Expected "' + h.name + '" to not be empty') } for (var d = 0; d < l.length; d++) { if (p = u(l[d]), !t[f].test(p)) throw new TypeError('Expected all "' + h.name + '" to match "' + h.pattern + '", but received `' + JSON.stringify(p) + "`"); o += (0 === d ? h.prefix : h.delimiter) + p } } else { if (p = h.asterisk ? c(l) : u(l), !t[f].test(p)) throw new TypeError('Expected "' + h.name + '" to match "' + h.pattern + '", but received "' + p + '"'); o += h.prefix + p } } else o += h } return o } } function a(e) { return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1") } function u(e) { return e.replace(/([=!:$\/()])/g, "\\$1") } function f(e, t) { return e.keys = t, e } function h(e) { return e.sensitive ? "" : "i" } function p(e, t) { var n = e.source.match(/\((?!\?)/g); if (n) for (var r = 0; r < n.length; r++)t.push({ name: r, prefix: null, delimiter: null, optional: !1, repeat: !1, partial: !1, asterisk: !1, pattern: null }); return f(e, t) } function l(e, t, n) { for (var r = [], o = 0; o < e.length; o++)r.push(g(e[o], t, n).source); var i = new RegExp("(?:" + r.join("|") + ")", h(n)); return f(i, t) } function d(e, t, n) { return m(r(e, n), t, n) } function m(e, t, n) { v(t) || (n = t || n, t = []), n = n || {}; for (var r = n.strict, o = n.end !== !1, i = "", c = 0; c < e.length; c++) { var s = e[c]; if ("string" == typeof s) i += a(s); else { var u = a(s.prefix), p = "(?:" + s.pattern + ")"; t.push(s), s.repeat && (p += "(?:" + u + p + ")*"), p = s.optional ? s.partial ? u + "(" + p + ")?" : "(?:" + u + "(" + p + "))?" : u + "(" + p + ")", i += p } } var l = a(n.delimiter || "/"), d = i.slice(-l.length) === l; return r || (i = (d ? i.slice(0, -l.length) : i) + "(?:" + l + "(?=$))?"), i += o ? "$" : r && d ? "" : "(?=" + l + "|$)", f(new RegExp("^" + i, h(n)), t) } function g(e, t, n) { return v(t) || (n = t || n, t = []), n = n || {}, e instanceof RegExp ? p(e, t) : v(e) ? l(e, t, n) : d(e, t, n) } var v = e("isarray"); t.exports = g, t.exports.parse = r, t.exports.compile = o, t.exports.tokensToFunction = s, t.exports.tokensToRegExp = m; var x = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g") }, { isarray: 14 }], 16: [function (e, t, n) { !function () { var e = Cache.prototype.addAll, t = navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/); if (t) var n = t[1], r = parseInt(t[2]); e && (!t || "Firefox" === n && r >= 46 || "Chrome" === n && r >= 50) || (Cache.prototype.addAll = function (e) { function t(e) { this.name = "NetworkError", this.code = 19, this.message = e } var n = this; return t.prototype = Object.create(Error.prototype), Promise.resolve().then(function () { if (arguments.length < 1) throw new TypeError; return e = e.map(function (e) { return e instanceof Request ? e : String(e) }), Promise.all(e.map(function (e) { "string" == typeof e && (e = new Request(e)); var n = new URL(e.url).protocol; if ("http:" !== n && "https:" !== n) throw new t("Invalid scheme"); return fetch(e.clone()) })) }).then(function (r) { if (r.some(function (e) { return !e.ok })) throw new t("Incorrect response status"); return Promise.all(r.map(function (t, r) { return n.put(e[r], t) })) }).then(function () { }) }, Cache.prototype.add = function (e) { return this.addAll([e]) }) }() }, {}] }, {}, [13])(13) });


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.
