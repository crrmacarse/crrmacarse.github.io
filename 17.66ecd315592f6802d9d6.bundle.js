(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{582:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),c=t(56),u=[{value:"Main",component:Object(a.lazy)((function(){return t.e(20).then(t.bind(null,574))}))},{value:"Blog",component:Object(a.lazy)((function(){return t.e(18).then(t.bind(null,575))}))},{value:"Github",component:Object(a.lazy)((function(){return t.e(19).then(t.bind(null,576))}))},{value:"Gists",component:Object(a.lazy)((function(){return t.e(4).then(t.bind(null,577))}))},{value:"Stack Overflow",component:Object(a.lazy)((function(){return t.e(22).then(t.bind(null,578))}))},{value:"Reddit",component:Object(a.lazy)((function(){return t.e(5).then(t.bind(null,579))}))},{value:"News",component:Object(a.lazy)((function(){return t.e(21).then(t.bind(null,580))}))},{value:"Twitter",component:Object(a.lazy)((function(){return t.e(23).then(t.bind(null,581))}))}],o=t(16),r=function(e){var n=e.routes,t=e.current;return l.a.createElement("div",{className:"navigation text-xl"},l.a.createElement("ul",{className:"navigation-links"},n.map((function(e,n){var a=e.value;return l.a.createElement("li",{key:n},l.a.createElement(o.b,{to:{state:a},className:"py-1 "+(t===a&&"text-orange-600 font-bold")},a))}))))};n.default=function(){var e=Object(c.f)().state,n=Object(a.useState)(e||"Main"),t=n[0],o=n[1],i=u.find((function(e){return e.value===t})).component;return Object(a.useEffect)((function(){e&&o(e)}),[e]),l.a.createElement("div",{className:"personal-section flex lg:flex-row flex-col justify-between"},l.a.createElement(r,{routes:u,current:t}),l.a.createElement("div",{className:"component lg:w-3/4"},l.a.createElement("div",{className:"mr-auto"},l.a.createElement(i,null))))}}}]);
//# sourceMappingURL=17.66ecd315592f6802d9d6.bundle.js.map