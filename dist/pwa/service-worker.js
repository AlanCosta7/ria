if(!self.define){const n=n=>{"require"!==n&&(n+=".js");let e=Promise.resolve();return i[n]||(e=new Promise((async e=>{if("document"in self){const i=document.createElement("script");i.src=n,document.head.appendChild(i),i.onload=e}else importScripts(n),e()}))),e.then((()=>{if(!i[n])throw new Error(`Module ${n} didn’t register its module`);return i[n]}))},e=(e,i)=>{Promise.all(e.map(n)).then((n=>i(1===n.length?n[0]:n)))},i={require:Promise.resolve(e)};self.define=(e,r,s)=>{i[e]||(i[e]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+e.slice(1)};return Promise.all(r.map((e=>{switch(e){case"exports":return i;case"module":return c;default:return n(e)}}))).then((n=>{const e=s(...n);return i.default||(i.default=e),i}))})))}}define("./service-worker.js",["./workbox-2f0deffe"],(function(n){"use strict";n.setCacheNameDetails({prefix:"ria"}),self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"/css/app.0e433876.css",revision:null},{url:"/css/vendor.c43fc5af.css",revision:null},{url:"/favicon.ico",revision:"a2c667cc4ff44cbe6b58a9595b566f22"},{url:"/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:null},{url:"/fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:null},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.f9e3a827.woff",revision:null},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.a563f825.woff2",revision:null},{url:"/icons/apple-icon-120x120.png",revision:"790b1754f57e0f31d019b641b10650d8"},{url:"/icons/apple-icon-152x152.png",revision:"ed333f168f67db918b88f37353706f64"},{url:"/icons/apple-icon-167x167.png",revision:"117c7944f71694e57ab2fea9f20ee641"},{url:"/icons/apple-icon-180x180.png",revision:"ecf3f178dd251b3f1929352842d42d7f"},{url:"/icons/apple-launch-1125x2436.png",revision:"392937a355ec510b6a6484afc0143df0"},{url:"/icons/apple-launch-1242x2208.png",revision:"447fa5c3bf54ab4b2024e8a01f98b368"},{url:"/icons/apple-launch-1242x2688.png",revision:"0ced7ae42cc48f6668e93bcdf9218530"},{url:"/icons/apple-launch-1536x2048.png",revision:"acb3c710f0ef652d45e3fb6a5bfe1e92"},{url:"/icons/apple-launch-1668x2224.png",revision:"5309badb0866507c33f9b5db07fec3a6"},{url:"/icons/apple-launch-1668x2388.png",revision:"46a7e7d99abc5169fb0136a7fc9080f1"},{url:"/icons/apple-launch-2048x2732.png",revision:"97efe8ed4807278ff54cfcadf0d02604"},{url:"/icons/apple-launch-640x1136.png",revision:"58212d65778b89f4a7b37c3ad060beec"},{url:"/icons/apple-launch-750x1334.png",revision:"bfb99bff6939060276cd320297c13d40"},{url:"/icons/apple-launch-828x1792.png",revision:"924308cc914f74e24043f2be60a921e2"},{url:"/icons/favicon-128x128.png",revision:"517e85e28e37d78e1f737cc5ff590b00"},{url:"/icons/favicon-16x16.png",revision:"3be11e8ba3a0466bebd56f714d5812c2"},{url:"/icons/favicon-32x32.png",revision:"5ac6d762ddebbd8034fcf944b7ac3a5c"},{url:"/icons/favicon-96x96.png",revision:"b5728128347214b116e2919aa4b879a1"},{url:"/icons/icon-128x128.png",revision:"517e85e28e37d78e1f737cc5ff590b00"},{url:"/icons/icon-192x192.png",revision:"ab3530237a459aad68a9c7592b278c23"},{url:"/icons/icon-256x256.png",revision:"77ba367b8deba29926f571c76a05f480"},{url:"/icons/icon-384x384.png",revision:"e5b9d073b1b9a657600c6b963e65ad4f"},{url:"/icons/icon-512x512.png",revision:"a1435423c283f11c0cec47f3c45302d1"},{url:"/icons/ms-icon-144x144.png",revision:"c1aa72f710136fb1378f170699f6f2bc"},{url:"/icons/safari-pinned-tab.svg",revision:"293ec321e47736c9bedccd3d542f24a8"},{url:"/img/empty.9c8584f3.svg",revision:null},{url:"/index.html",revision:"3e8da4478da2f98446bc85e11935b7d2"},{url:"/js/2.0bb56b09.js",revision:null},{url:"/js/3.af6749ed.js",revision:null},{url:"/js/4.a468def2.js",revision:null},{url:"/js/5.094dc275.js",revision:null},{url:"/js/6.83427917.js",revision:null},{url:"/js/7.f69b3aa1.js",revision:null},{url:"/js/8.c01dfbe3.js",revision:null},{url:"/js/9.613b2652.js",revision:null},{url:"/js/app.9c8c153a.js",revision:null},{url:"/js/vendor.892a796c.js",revision:null},{url:"/logo.png",revision:"abdf379bb0c158c4c972e4b02c480f61"},{url:"/manifest.json",revision:"13d68a9bb2abc57460f42beaae65f39b"}],{}),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
