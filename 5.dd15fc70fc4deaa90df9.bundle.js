(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{465:function(t,e,n){var r=n(487),o="object"==typeof self&&self&&self.Object===Object&&self,c=r||o||Function("return this")();t.exports=c},471:function(t,e,n){var r=n(503),o=n(508);t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},476:function(t,e,n){var r=n(486),o=n(504),c=n(505),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?o(t):c(t)}},479:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},481:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},484:function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},485:function(t,e,n){var r=n(476),o=n(488);t.exports=function(t){if(!o(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},486:function(t,e,n){var r=n(465).Symbol;t.exports=r},487:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(39))},488:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},489:function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(e){}try{return t+""}catch(e){}}return""}},490:function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},497:function(t,e,n){var r=n(498),o=n(501),c=n(513),a=n(515),u=n(516),i=n(517),f=n(484),l=n(519),s=Object.prototype.hasOwnProperty;t.exports=function(t){if(null==t)return!0;if(u(t)&&(a(t)||"string"==typeof t||"function"==typeof t.splice||i(t)||l(t)||c(t)))return!t.length;var e=o(t);if("[object Map]"==e||"[object Set]"==e)return!t.size;if(f(t))return!r(t).length;for(var n in t)if(s.call(t,n))return!1;return!0}},498:function(t,e,n){var r=n(484),o=n(499),c=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=[];for(var n in Object(t))c.call(t,n)&&"constructor"!=n&&e.push(n);return e}},499:function(t,e,n){var r=n(500)(Object.keys,Object);t.exports=r},500:function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},501:function(t,e,n){var r=n(502),o=n(509),c=n(510),a=n(511),u=n(512),i=n(476),f=n(489),l=f(r),s=f(o),p=f(c),b=f(a),y=f(u),j=i;(r&&"[object DataView]"!=j(new r(new ArrayBuffer(1)))||o&&"[object Map]"!=j(new o)||c&&"[object Promise]"!=j(c.resolve())||a&&"[object Set]"!=j(new a)||u&&"[object WeakMap]"!=j(new u))&&(j=function(t){var e=i(t),n="[object Object]"==e?t.constructor:void 0,r=n?f(n):"";if(r)switch(r){case l:return"[object DataView]";case s:return"[object Map]";case p:return"[object Promise]";case b:return"[object Set]";case y:return"[object WeakMap]"}return e}),t.exports=j},502:function(t,e,n){var r=n(471)(n(465),"DataView");t.exports=r},503:function(t,e,n){var r=n(485),o=n(506),c=n(488),a=n(489),u=/^\[object .+?Constructor\]$/,i=Function.prototype,f=Object.prototype,l=i.toString,s=f.hasOwnProperty,p=RegExp("^"+l.call(s).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!c(t)||o(t))&&(r(t)?p:u).test(a(t))}},504:function(t,e,n){var r=n(486),o=Object.prototype,c=o.hasOwnProperty,a=o.toString,u=r?r.toStringTag:void 0;t.exports=function(t){var e=c.call(t,u),n=t[u];try{t[u]=void 0;var r=!0}catch(i){}var o=a.call(t);return r&&(e?t[u]=n:delete t[u]),o}},505:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},506:function(t,e,n){var r,o=n(507),c=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!c&&c in t}},507:function(t,e,n){var r=n(465)["__core-js_shared__"];t.exports=r},508:function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},509:function(t,e,n){var r=n(471)(n(465),"Map");t.exports=r},510:function(t,e,n){var r=n(471)(n(465),"Promise");t.exports=r},511:function(t,e,n){var r=n(471)(n(465),"Set");t.exports=r},512:function(t,e,n){var r=n(471)(n(465),"WeakMap");t.exports=r},513:function(t,e,n){var r=n(514),o=n(481),c=Object.prototype,a=c.hasOwnProperty,u=c.propertyIsEnumerable,i=r(function(){return arguments}())?r:function(t){return o(t)&&a.call(t,"callee")&&!u.call(t,"callee")};t.exports=i},514:function(t,e,n){var r=n(476),o=n(481);t.exports=function(t){return o(t)&&"[object Arguments]"==r(t)}},515:function(t,e){var n=Array.isArray;t.exports=n},516:function(t,e,n){var r=n(485),o=n(490);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},517:function(t,e,n){(function(t){var r=n(465),o=n(518),c=e&&!e.nodeType&&e,a=c&&"object"==typeof t&&t&&!t.nodeType&&t,u=a&&a.exports===c?r.Buffer:void 0,i=(u?u.isBuffer:void 0)||o;t.exports=i}).call(this,n(479)(t))},518:function(t,e){t.exports=function(){return!1}},519:function(t,e,n){var r=n(520),o=n(521),c=n(522),a=c&&c.isTypedArray,u=a?o(a):r;t.exports=u},520:function(t,e,n){var r=n(476),o=n(490),c=n(481),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,t.exports=function(t){return c(t)&&o(t.length)&&!!a[r(t)]}},521:function(t,e){t.exports=function(t){return function(e){return t(e)}}},522:function(t,e,n){(function(t){var r=n(487),o=e&&!e.nodeType&&e,c=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=c&&c.exports===o&&r.process,u=function(){try{var t=c&&c.require&&c.require("util").types;return t||a&&a.binding&&a.binding("util")}catch(e){}}();t.exports=u}).call(this,n(479)(t))},584:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),c=n(497),a=n.n(c),u=function(t,e,n,r){return new(n||(n=Promise))((function(o,c){function a(t){try{i(r.next(t))}catch(e){c(e)}}function u(t){try{i(r.throw(t))}catch(e){c(e)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}i((r=r.apply(t,e||[])).next())}))},i=function(t,e){var n,r,o,c,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function u(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=e.call(t,a)}catch(u){c=[6,u],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}},f=["all","askreddit","showerthoughts","movies","wtf","dota2","alasjuicy","underlords"];e.default=function(){var t=Object(r.useState)("all"),e=t[0],n=t[1],c=Object(r.useState)([]),l=c[0],s=c[1];Object(r.useEffect)((function(){var t;s([]),t=e,u(void 0,void 0,void 0,(function(){var e;return i(this,(function(n){switch(n.label){case 0:return[4,fetch("https://www.reddit.com/r/"+t+".json",{method:"GET"})];case 1:return[4,n.sent().json()];case 2:return e=n.sent().data,s(e.children),[2]}}))}))}),[e]);var p=o.a.createElement("div",{className:"flex flex-wrap mb-5"},f.map((function(t,r){return o.a.createElement("div",{className:"mr-2 font-bold "+(t===e&&"text-orange-400"),role:"button",tabIndex:r,onClick:function(){return n(t)},onKeyDown:function(){return n(t)}},"r/"+t)})));return o.a.createElement("div",null,o.a.createElement("div",{className:"title"},o.a.createElement("h1",{className:"text-5xl"},"Maybe some memes could make your day."),o.a.createElement("a",{href:"https://www.reddit.com/dev/api/"},"Reddit API")),o.a.createElement("div",{className:"content"},p,o.a.createElement("ul",{className:"fetched-content"},a()(l)&&o.a.createElement("p",null,"Fetching..."),l.map((function(t,e){var n=t.data;return o.a.createElement("li",null,o.a.createElement("a",{key:e,href:"http://www.reddit.com/"+n.permalink,target:"_blank",rel:"noopener noreferrer"},n.title))})))))}}}]);
//# sourceMappingURL=5.dd15fc70fc4deaa90df9.bundle.js.map