(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{115:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(70),s=a(3);const i={tension:1200,friction:40},o={mass:10,tension:200,friction:50},c=(e,t)=>`translate3d(${e}px,${t}px,0) translate3d(-50%,-50%,0)`;t.default=()=>{const{t:e}=Object(s.b)(),[t,a]=Object(r.b)(3,()=>({xy:[0,0],config:e=>0===e?i:o}));return l.a.createElement("div",{className:"home-section flex flex-col items-center justify-center"},l.a.createElement("svg",{style:{position:"absolute",width:0,height:0}},l.a.createElement("filter",{id:"goo"},l.a.createElement("feGaussianBlur",{in:"SourceGraphic",result:"blur",stdDeviation:"30"}),l.a.createElement("feColorMatrix",{in:"blur",values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"}))),l.a.createElement("div",{className:"hooks-main",onMouseMove:e=>a({xy:[e.clientX,e.clientY]})},t.map((e,t)=>l.a.createElement(r.a.div,{key:t,style:{transform:e.xy.interpolate(c)}}))),l.a.createElement("div",{className:"z-20 text-center cursor-default"},l.a.createElement("h1",null,e("home.title")),l.a.createElement("p",{className:"text-lg"},e("home.subtitle")," ",l.a.createElement("a",{href:"https://crrmacarse.github.io/old-portfolio/",className:"font-bold"},e("Click here")))))}}}]);
//# sourceMappingURL=9.10a26d0e924afea1d18e.bundle.js.map