!function(){"use strict";try{self["workbox:core:5.1.3"]&&_()}catch(e){}const e=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:5.1.3"]&&_()}catch(e){}const s=e=>e&&"object"==typeof e?e:{handle:e};class n{constructor(e,t,n="GET"){this.handler=s(t),this.match=e,this.method=n}}class r extends n{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}const a=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),"");class i{constructor(){this._routes=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const{params:n,route:r}=this.findMatchingRoute({url:s,request:e,event:t});let a,i=r&&r.handler;if(!i&&this._defaultHandler&&(i=this._defaultHandler),i){try{a=i.handle({url:s,request:e,event:t,params:n})}catch(e){a=Promise.reject(e)}return a instanceof Promise&&this._catchHandler&&(a=a.catch(n=>this._catchHandler.handle({url:s,request:e,event:t}))),a}}findMatchingRoute({url:e,request:t,event:s}){const n=this._routes.get(t.method)||[];for(const r of n){let n;const a=r.match({url:e,request:t,event:s});if(a)return n=a,(Array.isArray(a)&&0===a.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(n=void 0),{route:r,params:n}}return{}}setDefaultHandler(e){this._defaultHandler=s(e)}setCatchHandler(e){this._catchHandler=s(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this._routes.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this._routes.get(e.method).splice(s,1)}}let c;const o=()=>(c||(c=new i,c.addFetchListener(),c.addCacheListener()),c);function h(e,s,a){let i;if("string"==typeof e){const t=new URL(e,location.href);i=new n(({url:e})=>e.href===t.href,s,a)}else if(e instanceof RegExp)i=new r(e,s,a);else if("function"==typeof e)i=new n(e,s,a);else{if(!(e instanceof n))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});i=e}return o().registerRoute(i),i}const u={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},l=e=>[u.prefix,e,u.suffix].filter(e=>e&&e.length>0).join("-"),d=e=>e||l(u.precache),p=e=>e||l(u.runtime),f=new Set;const m=(e,t)=>e.filter(e=>t in e),g=async({request:e,mode:t,plugins:s=[]})=>{const n=m(s,"cacheKeyWillBeUsed");let r=e;for(const e of n)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},w=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:r=[]})=>{const a=await self.caches.open(e),i=await g({plugins:r,request:t,mode:"read"});let c=await a.match(i,n);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;c=await r.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:c,request:i})}return c},y=async({cacheName:e,request:s,response:n,event:r,plugins:i=[],matchOptions:c})=>{const o=await g({plugins:i,request:s,mode:"write"});if(!n)throw new t("cache-put-with-no-response",{url:a(o.url)});const h=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let r=t,a=!1;for(const t of n)if("cacheWillUpdate"in t){a=!0;const n=t.cacheWillUpdate;if(r=await n.call(t,{request:e,response:r,event:s}),!r)break}return a||(r=r&&200===r.status?r:void 0),r||null})({event:r,plugins:i,response:n,request:o});if(!h)return;const u=await self.caches.open(e),l=m(i,"cacheDidUpdate"),d=l.length>0?await w({cacheName:e,matchOptions:c,request:o}):null;try{await u.put(o,h)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of f)await e()}(),e}for(const t of l)await t.cacheDidUpdate.call(t,{cacheName:e,event:r,oldResponse:d,newResponse:h,request:o})},v=w,R=async({request:e,fetchOptions:s,event:n,plugins:r=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const a=m(r,"fetchDidFail"),i=a.length>0?e.clone():null;try{for(const t of r)if("requestWillFetch"in t){const s=t.requestWillFetch,r=e.clone();e=await s.call(t,{request:r,event:n})}}catch(e){throw new t("plugin-error-request-will-fetch",{thrownError:e})}const c=e.clone();try{let t;t="navigate"===e.mode?await fetch(e):await fetch(e,s);for(const e of r)"fetchDidSucceed"in e&&(t=await e.fetchDidSucceed.call(e,{event:n,request:c,response:t}));return t}catch(e){for(const t of a)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:i.clone(),request:c.clone()});throw e}};try{self["workbox:strategies:5.1.3"]&&_()}catch(e){}class q{constructor(e={}){this._cacheName=p(e.cacheName),this._plugins=e.plugins||[],this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:s}){"string"==typeof s&&(s=new Request(s));let n,r=await v({cacheName:this._cacheName,request:s,event:e,matchOptions:this._matchOptions,plugins:this._plugins});if(!r)try{r=await this._getFromNetwork(s,e)}catch(e){n=e}if(!r)throw new t("no-response",{url:s.url,error:n});return r}async _getFromNetwork(e,t){const s=await R({request:e,event:t,fetchOptions:this._fetchOptions,plugins:this._plugins}),n=s.clone(),r=y({cacheName:this._cacheName,request:e,response:n,event:t,plugins:this._plugins});if(t)try{t.waitUntil(r)}catch(e){}return s}}const x={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};let U;function N(e){e.then(()=>{})}class T{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this._db=null,this._name=e,this._version=t,this._onupgradeneeded=s,this._onversionchange=n||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this._name,this._version);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this._onupgradeneeded&&this._onupgradeneeded(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:r,includeKeys:a=!1}={}){return await this.transaction([e],"readonly",(i,c)=>{const o=i.objectStore(e),h=t?o.index(t):o,u=[],l=h.openCursor(s,n);l.onsuccess=()=>{const e=l.result;e?(u.push(a?e:e.value),r&&u.length>=r?c(u):e.continue()):c(u)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,r)=>{const a=this._db.transaction(e,t);a.onabort=()=>r(a.error),a.oncomplete=()=>n(),s(a,e=>n(e))})}async _call(e,t,s,...n){return await this.transaction([t],s,(s,r)=>{const a=s.objectStore(t),i=a[e].apply(a,n);i.onsuccess=()=>r(i.result)})}close(){this._db&&(this._db.close(),this._db=null)}}T.prototype.OPEN_TIMEOUT=2e3;const b={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(b))for(const s of t)s in IDBObjectStore.prototype&&(T.prototype[s]=async function(t,...n){return await this._call(s,t,e,...n)});async function L(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},r=t?t(n):n,a=function(){if(void 0===U){const e=new Response("");if("body"in e)try{new Response(e.body),U=!0}catch(e){U=!1}U=!1}return U}()?s.body:await s.blob();return new Response(a,r)}try{self["workbox:precaching:5.1.3"]&&_()}catch(e){}const E=[],O={get:()=>E,add(e){E.push(...e)}};function C(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const r=new URL(n,location.href),a=new URL(n,location.href);return r.searchParams.set("__WB_REVISION__",s),{cacheKey:r.href,url:a.href}}class K{constructor(e){this._cacheName=d(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:e,url:r}=C(n),a="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(r)&&this._urlsToCacheKeys.get(r)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(r),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:r});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(r,e),this._urlsToCacheModes.set(r,a),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],r=await self.caches.open(this._cacheName),a=await r.keys(),i=new Set(a.map(e=>e.url));for(const[e,t]of this._urlsToCacheKeys)i.has(t)?n.push(e):s.push({cacheKey:t,url:e});const c=s.map(({cacheKey:s,url:n})=>{const r=this._cacheKeysToIntegrities.get(s),a=this._urlsToCacheModes.get(n);return this._addURLToCache({cacheKey:s,cacheMode:a,event:e,integrity:r,plugins:t,url:n})});await Promise.all(c);return{updatedURLs:s.map(e=>e.url),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const r of t)s.has(r.url)||(await e.delete(r),n.push(r.url));return{deletedURLs:n}}async _addURLToCache({cacheKey:e,url:s,cacheMode:n,event:r,plugins:a,integrity:i}){const c=new Request(s,{integrity:i,cache:n,credentials:"same-origin"});let o,h=await R({event:r,plugins:a,request:c});for(const e of a||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:r,request:c,response:h}):h.status<400))throw new t("bad-precaching-response",{url:s,status:h.status});h.redirected&&(h=await L(h)),await y({event:r,plugins:a,response:h,request:e===s?c:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this._cacheName)).match(s)}}createHandler(e=!0){return async({request:s})=>{try{const e=await this.matchPrecache(s);if(e)return e;throw new t("missing-precache-entry",{cacheName:this._cacheName,url:s instanceof Request?s.url:s})}catch(t){if(e)return fetch(s);throw t}}}createHandlerBoundToURL(e,s=!0){if(!this.getCacheKeyForURL(e))throw new t("non-precached-url",{url:e});const n=this.createHandler(s),r=new Request(e);return()=>n({request:r})}}let S;const M=()=>(S||(S=new K),S);const D=(e,t)=>{const s=M().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:r}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(a,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(r){const e=r({url:a});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}};let k=!1;function A(e){k||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const r=d();self.addEventListener("fetch",a=>{const i=D(a.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!i)return;let c=self.caches.open(r).then(e=>e.match(i)).then(e=>e||fetch(i));a.respondWith(c)})})(e),k=!0)}function P(e){return M().matchPrecache(e)}const W=e=>{const t=M(),s=O.get();e.waitUntil(t.install({event:e,plugins:s}).catch(e=>{throw e}))},I=e=>{const t=M();e.waitUntil(t.activate())};try{self["workbox:expiration:5.1.3"]&&_()}catch(e){}const F=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class H{constructor(e){this._cacheName=e,this._db=new T("workbox-expiration",1,{onupgradeneeded:e=>this._handleUpgrade(e)})}_handleUpgrade(e){const t=e.target.result.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}})})(this._cacheName)}async setTimestamp(e,t){const s={url:e=F(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)};await this._db.put("cache-entries",s)}async getTimestamp(e){return(await this._db.get("cache-entries",this._getId(e))).timestamp}async expireEntries(e,t){const s=await this._db.transaction("cache-entries","readwrite",(s,n)=>{const r=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),a=[];let i=0;r.onsuccess=()=>{const s=r.result;if(s){const n=s.value;n.cacheName===this._cacheName&&(e&&n.timestamp<e||t&&i>=t?a.push(s.value):i++),s.continue()}else n(a)}}),n=[];for(const e of s)await this._db.delete("cache-entries",e.id),n.push(e.url);return n}_getId(e){return this._cacheName+"|"+F(e)}}class j{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._cacheName=e,this._timestampModel=new H(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const e of t)await s.delete(e);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,N(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){return await this._timestampModel.getTimestamp(e)<Date.now()-1e3*this._maxAgeSeconds}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class B{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const r=this._isResponseDateFresh(n),a=this._getCacheExpiration(s);N(a.expireEntries());const i=a.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(e){}return r?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),f.add(t))}_getCacheExpiration(e){if(e===p())throw new t("expire-custom-caches-only");let s=this._cacheExpirations.get(e);return s||(s=new j(e,this._config),this._cacheExpirations.set(e,s)),s}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(null===t)return!0;return t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}const J={map:new Map,set(e,t){return this.map.set(Z(e),t)},get(e){const t=this.map.get(Z(e));return t&&(t.validLeft=(new Date(t.validUntil)-new Date)/1e3),t}},Q=function(e){return{cachedResponseWillBeUsed({cacheName:e,request:t,matchOptions:s,cachedResponse:n,event:r}){if(!0!==V(t).writeHeaders)return n;const a=new Headers(n.headers),i=J.get(t)||{};for(const[e,t]of Object.entries(i))a.set("x-routify-"+e.replace(/[A-Z]/g,e=>"-"+e.toLowerCase()),t);return a.set("x-routify-use-cache","true"),n.arrayBuffer().then(e=>new Response(e,{...n,headers:a}))},cacheDidUpdate:async({cacheName:t,request:s,oldResponse:n,newResponse:r,event:a})=>{const i=function({referrer:e}){const t=(e.match(/\?(.+)/)||[null,""])[1],s=[...new URLSearchParams(t)].filter(([e])=>e.startsWith("__routify_")),n={};for(const[e,t]of s)n[e.replace(/^__routify_/,"")]=t;return n}(a.request),c=V(a.request),o={...e,...i,...c},h=Date.now();J.set(a.request,{...o,validUntil:new Date(h+1e3*o.validFor).toISOString(),cachedAt:new Date(h).toISOString()})}}};function G(e){return J.map.forEach((e,t)=>{new Date(e.validUntil)<new Date&&J.map.delete(t)}),J.get(e.request)}function V({headers:e}){const t=[...e.entries()].filter(([e])=>e.startsWith("x-routify-")),s={};for(const[e,n]of t){s[e.replace("x-routify-","").replace(/-./g,e=>e.toUpperCase()[1])]=$(n)}return s}function Z({url:e,headers:t,method:s}){return JSON.stringify({url:e,method:s,headers:[...t.entries()]})}function $(e){try{return JSON.parse(e)}catch(e){}}const z=[{"revision":"0201b9b9b18ce90fabc5a04e8999e6c3","url":"404.svg"},{"revision":"0d755d22201ade5810af63c7729c4b7d","url":"build/_-f5920b90.js"},{"revision":"bcecd90e9ab06728b5eb90d35b253a5c","url":"build/bundle.css"},{"revision":"32446f525a5d3340c477557347e5d4ee","url":"build/bundle.js"},{"revision":"d6cb172cc11891ea1e2ba409b03e69d5","url":"build/main.js"},{"revision":"6d796eb67116f9a45c5a6ab897a0a7a6","url":"fonts/icomoon.svg"},{"revision":"e79f7a24e68b9543b951912763fe0a38","url":"global.css"},{"revision":"447f4d71902f9772c73aa942b7f01100","url":"images/chipz.svg"},{"revision":"9299a2bde612e8a458063a706ee7e132","url":"images/mintz.svg"},{"revision":"ad3ed6b00d3d75ba0c3dadc629c7302e","url":"images/patties.svg"},{"revision":"f0b8775de11e720ff14ce4e577369747","url":"images/semonas.svg"},{"revision":"7cb3a2163e64ec02a0502844c69a23cb","url":"images/shmores.svg"},{"revision":"e898780f42a2dd8bde9904c64d21c070","url":"images/wagalongs.svg"},{"revision":"39c9965ef4b2bff76e82e4b522408c61","url":"__app.html"}],X=()=>({cacheName:"external",plugins:[Q({validFor:60}),new B({maxEntries:50,purgeOnQuotaError:!0})]});var Y,ee;(function(e){M().addToCacheList(e),e.length>0&&(self.addEventListener("install",W),self.addEventListener("activate",I))})(z),A(Y),self.addEventListener("install",()=>self.skipWaiting()),self.addEventListener("activate",()=>self.clients.claim()),h((function({url:e,request:t}){return e.host===self.location.host&&"document"===t.destination}),P("__app.html")),h((function({url:e,request:t}){return e.host===self.location.host&&"document"!=t.destination}),new q),h((function(e){return!!G(e)}),new q(X())),ee=new class{constructor(e={}){if(this._cacheName=p(e.cacheName),e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this._plugins=t?e.plugins:[x,...e.plugins]}else this._plugins=[x];this._networkTimeoutSeconds=e.networkTimeoutSeconds||0,this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:s}){const n=[];"string"==typeof s&&(s=new Request(s));const r=[];let a;if(this._networkTimeoutSeconds){const{id:t,promise:i}=this._getTimeoutPromise({request:s,event:e,logs:n});a=t,r.push(i)}const i=this._getNetworkPromise({timeoutId:a,request:s,event:e,logs:n});r.push(i);let c=await Promise.race(r);if(c||(c=await i),!c)throw new t("no-response",{url:s.url});return c}_getTimeoutPromise({request:e,logs:t,event:s}){let n;return{promise:new Promise(t=>{n=setTimeout(async()=>{t(await this._respondFromCache({request:e,event:s}))},1e3*this._networkTimeoutSeconds)}),id:n}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,event:n}){let r,a;try{a=await R({request:t,event:n,fetchOptions:this._fetchOptions,plugins:this._plugins})}catch(e){r=e}if(e&&clearTimeout(e),r||!a)a=await this._respondFromCache({request:t,event:n});else{const e=a.clone(),s=y({cacheName:this._cacheName,request:t,response:e,event:n,plugins:this._plugins});if(n)try{n.waitUntil(s)}catch(e){}}return a}_respondFromCache({event:e,request:t}){return v({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins})}}(X()),o().setDefaultHandler(ee),function(e){o().setCatchHandler(e)}(async({event:e})=>{switch(e.request.destination){case"document":return await P("__app.html");case"image":return await P("404.svg");default:return Response.error()}})}();
//# sourceMappingURL=sw.js.map
