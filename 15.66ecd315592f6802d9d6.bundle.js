(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{562:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(519),l=n(54),c={tension:1200,friction:40},o={mass:10,tension:200,friction:50},s=function(e,t){return"translate3d("+e+"px,"+t+"px,0) translate3d(-50%,-50%,0)"};t.default=function(){var e=Object(l.b)().t,t=Object(i.b)(3,(function(){return{xy:[0,0],config:function(e){return 0===e?c:o}}})),n=t[0],a=t[1];return r.a.createElement("div",{className:"home-section flex flex-col items-center justify-center"},r.a.createElement("svg",{style:{position:"absolute",width:0,height:0}},r.a.createElement("filter",{id:"goo"},r.a.createElement("feGaussianBlur",{in:"SourceGraphic",result:"blur",stdDeviation:"30"}),r.a.createElement("feColorMatrix",{in:"blur",values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"}))),r.a.createElement("div",{className:"hooks-main",onMouseMove:function(e){return a({xy:[e.clientX,e.clientY]})}},n.map((function(e,t){return r.a.createElement(i.a.div,{key:t,style:{transform:e.xy.interpolate(s)}})}))),r.a.createElement("div",{className:"z-10 cursor-default"},r.a.createElement("h1",null,e("home.title")),r.a.createElement("p",{className:"text-xs lg:text-lg"},e("home.subtitle"))))}}}]);
//# sourceMappingURL=15.66ecd315592f6802d9d6.bundle.js.map