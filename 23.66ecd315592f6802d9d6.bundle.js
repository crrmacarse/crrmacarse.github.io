(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{581:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function c(e){try{i(r.next(e))}catch(t){o(t)}}function l(e){try{i(r.throw(e))}catch(t){o(t)}}function i(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,l)}i((r=r.apply(e,t||[])).next())}))},c=function(e,t){var n,r,a,o,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,r=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(a=(a=c.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){c=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){c.label=o[1];break}if(6===o[0]&&c.label<a[1]){c.label=a[1],a=o;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(o);break}a[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(l){o=[6,l],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};t.default=function(){var e=Object(r.useState)([]),t=e[0],n=e[1];return Object(r.useEffect)((function(){o(void 0,void 0,void 0,(function(){var e;return c(this,(function(t){switch(t.label){case 0:return[4,fetch("https://api.twitter.com/1.1/trends/place.json?id=1",{method:"GET"})];case 1:return[4,t.sent().json()];case 2:return e=t.sent(),n(e),[2]}}))}))}),[]),a.a.createElement("div",null,a.a.createElement("div",{className:"title"},a.a.createElement("h1",{className:"text-5xl"},"Playing around with Twitter"),a.a.createElement("a",{href:"https://twitter.com/pablongbuhaymo",className:"text-sm font-bold"},"Follow me on Twitter"),a.a.createElement("a",{href:"https://developer.twitter.com/en/docs",className:"text-sm font-bold"},"Twitter API Docs")),a.a.createElement("div",{className:"content"},a.a.createElement("ul",null,t.map((function(e){return a.a.createElement("li",{key:e.id},e.id)})))))}}}]);
//# sourceMappingURL=23.66ecd315592f6802d9d6.bundle.js.map