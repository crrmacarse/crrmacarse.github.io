if(!self.define){const e=async e=>{if("require"!==e&&(e+=".js"),!f[e]&&(await new Promise(async d=>{if("document"in self){const f=document.createElement("script");f.src=e,document.head.appendChild(f),f.onload=d}else importScripts(e),d()}),!f[e]))throw new Error(`Module ${e} didn’t register its module`);return f[e]},d=async(d,f)=>{const c=await Promise.all(d.map(e));f(1===c.length?c[0]:c)};d.toUrl=e=>`./${e}`;const f={require:Promise.resolve(d)};self.define=(d,c,r)=>{f[d]||(f[d]=new Promise(async f=>{let s={};const b={uri:location.origin+d.slice(1)},i=await Promise.all(c.map(d=>"exports"===d?s:"module"===d?b:e(d))),a=r(...i);s.default||(s.default=a),f(s)}))}}define("./service-worker.js",["./workbox-5d3caa67"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/0.0482854d25cdf6fe4767.bundle.js",revision:"9c48ef04d8e63d995df1f88b7da6f4ae"},{url:"/10.0482854d25cdf6fe4767.bundle.js",revision:"947ed25057542e79cc0384eb44431a89"},{url:"/11.0482854d25cdf6fe4767.bundle.js",revision:"7116722ef4abe3cfd0c85554ec83f255"},{url:"/12.0482854d25cdf6fe4767.bundle.js",revision:"d0ddd02e659ec7a1396c2fe34a32babc"},{url:"/13.0482854d25cdf6fe4767.bundle.js",revision:"4ea0fa8e8ec40c644ce2a8d006743f03"},{url:"/14.0482854d25cdf6fe4767.bundle.js",revision:"629680815c5838f6ac5f68cf4e5e4ff0"},{url:"/15.0482854d25cdf6fe4767.bundle.js",revision:"1c6d72ee1268b047fa7053f569a48caa"},{url:"/16.0482854d25cdf6fe4767.bundle.js",revision:"ab1bf9b0c2b2223f168c3c2ee8bd646b"},{url:"/17.0482854d25cdf6fe4767.bundle.js",revision:"ed435d84a917b0fb05f30c282971d7e3"},{url:"/18.0482854d25cdf6fe4767.bundle.js",revision:"358b3c61fa0ac942858953c532ad247e"},{url:"/19.0482854d25cdf6fe4767.bundle.js",revision:"d4e4dbe4bf4fecf9efcedc85f3f322c8"},{url:"/20.0482854d25cdf6fe4767.bundle.js",revision:"f95da4c9edcc4646a900b9eaf8a9f19a"},{url:"/21.0482854d25cdf6fe4767.bundle.js",revision:"9d89f052cc55732f135b66d0e4bed2d8"},{url:"/22.0482854d25cdf6fe4767.bundle.js",revision:"2f208e6cdfbdb7e890bfad8091eb672e"},{url:"/23.0482854d25cdf6fe4767.bundle.js",revision:"1e41dccfa65cab51e85c394bb4482202"},{url:"/24.0482854d25cdf6fe4767.bundle.js",revision:"02239a59b24fd5267bffd60436cfcc4a"},{url:"/25.0482854d25cdf6fe4767.bundle.js",revision:"7511cf0d62862c21c66c5b2874888f2f"},{url:"/26.0482854d25cdf6fe4767.bundle.js",revision:"c45da93875a2d63fa10b9bf1e1232ed9"},{url:"/27.0482854d25cdf6fe4767.bundle.js",revision:"f12827d41042542c67f8c4fff996c375"},{url:"/28.0482854d25cdf6fe4767.bundle.js",revision:"829568130adced0e360753fe62533454"},{url:"/29.0482854d25cdf6fe4767.bundle.js",revision:"82a160965ec35e981a989d6f57cb3edd"},{url:"/3.0482854d25cdf6fe4767.bundle.js",revision:"9eadefa1adf16fe3de26cdfce775d397"},{url:"/3.0482854d25cdf6fe4767.bundle.js.LICENSE",revision:"a9501ead2e74dfeb01fd4ba9ba6f7eb1"},{url:"/30.0482854d25cdf6fe4767.bundle.js",revision:"938925b49e26e79272109bafda1dc752"},{url:"/4.0482854d25cdf6fe4767.bundle.js",revision:"74725666579f13d80d2c2ac7f334c6b8"},{url:"/5.0482854d25cdf6fe4767.bundle.js",revision:"b3019dcfc66ba75f39415e2fb1634469"},{url:"/6.0482854d25cdf6fe4767.bundle.js",revision:"ffbae95e66f452e161074adafd3df4ee"},{url:"/7.0482854d25cdf6fe4767.bundle.js",revision:"e678e87f751c921f1c3ebd795bc8e56c"},{url:"/72258ee2835c42d8a4e7.0482854d25cdf6fe4767.css",revision:"2a7c8eea3692457352eb16eda67ae654"},{url:"/8.0482854d25cdf6fe4767.bundle.js",revision:"872ef159f7e5dcf81fd4e80cdf69c4ed"},{url:"/9.0482854d25cdf6fe4767.bundle.js",revision:"6631d2c986462ec70e0f3457a1e10813"},{url:"/a8695eeeb2a31f61008f.worker.js",revision:"952092c521f7ebd681d24b8a7e30d1dc"},{url:"/a8695eeeb2a31f61008f.worker.js.LICENSE",revision:"956bdcd2cf1173cb832e3fedbd258a0f"},{url:"/assets/60eb8ea0e4e3bfba37a9b24a2e5f98de.60eb8ea0e4e3bfba37a9b24a2e5f98de.png",revision:"60eb8ea0e4e3bfba37a9b24a2e5f98de"},{url:"/assets/63488821d3fbd631ff967f8883f4d608.63488821d3fbd631ff967f8883f4d608.pdf",revision:"63488821d3fbd631ff967f8883f4d608"},{url:"/assets/b557306a182e914228a882d0a3de9f62.b557306a182e914228a882d0a3de9f62.jpg",revision:"b557306a182e914228a882d0a3de9f62"},{url:"/favicon.ico",revision:"d1533a58237243e3f348b16e52aa9b75"},{url:"/index.html",revision:"1ca5c661c1c2d27524625d706e8742f0"},{url:"/main.0482854d25cdf6fe4767.bundle.js",revision:"5ef418f792c42823dbbb28fdf6d85841"},{url:"/main.0482854d25cdf6fe4767.bundle.js.LICENSE",revision:"51fe09b7c119defd1a2f967b4f995c50"},{url:"/vendors~pdfjsWorker.0482854d25cdf6fe4767.bundle.js",revision:"7a40965fb43d0045a7367ca3e7ade5c9"},{url:"/vendors~pdfjsWorker.0482854d25cdf6fe4767.bundle.js.LICENSE",revision:"567051801cab5cf204f3cfc69ae1adbe"}],{})}));
//# sourceMappingURL=service-worker.js.map
