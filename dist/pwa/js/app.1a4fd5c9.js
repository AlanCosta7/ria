(function(e){function t(t){for(var o,s,i=t[0],c=t[1],u=t[2],l=0,p=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={1:0},a=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{2:"9324a66f",3:"4046eff1",4:"3b4c2119",5:"29bf979d",6:"2898af5b",7:"649bc16a",8:"73d204e4",9:"3c7f6bec"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e);var u=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;a.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"currentUser",(function(){return y})),n.d(o,"err",(function(){return j})),n.d(o,"getLetterUser",(function(){return T})),n.d(o,"geoLocation",(function(){return U})),n.d(o,"tags",(function(){return O})),n.d(o,"token",(function(){return C})),n.d(o,"listPackages",(function(){return E})),n.d(o,"selectViagem",(function(){return S})),n.d(o,"listPoints",(function(){return L}));var r={};n.r(r),n.d(r,"setCurrentUser",(function(){return M})),n.d(r,"setErr",(function(){return W})),n.d(r,"setGeoLocation",(function(){return _})),n.d(r,"setToken",(function(){return G})),n.d(r,"setListPackages",(function(){return V})),n.d(r,"setSelectViagem",(function(){return z})),n.d(r,"setListPoints",(function(){return J}));var a={};n.r(a),n.d(a,"signInWithEmailAndPassword",(function(){return D})),n.d(a,"createUserWithEmailAndPassword",(function(){return I})),n.d(a,"signInWithEmailAndPasswordProviders",(function(){return R})),n.d(a,"createUserWithEmailAndPasswordProviders",(function(){return q})),n.d(a,"salvarInteresses",(function(){return B})),n.d(a,"getPackagesAuth",(function(){return H})),n.d(a,"getPackages",(function(){return Q})),n.d(a,"getPoints",(function(){return F})),n.d(a,"saveProfile",(function(){return K})),n.d(a,"loadUser",(function(){return X})),n.d(a,"logout",(function(){return Y}));n("e6cf"),n("ddb0"),n("5319");var s=n("7a23"),i=(n("7d6e"),n("e54f"),n("985d"),n("31cd"),n("b05d")),c=n("f476"),u=n("42d2"),l=n("2a19"),d=n("436b"),p=n("f508"),f=n("18d6"),m=n("696d"),h=n("9c64"),g={config:{},lang:c["a"],iconSet:u["a"],plugins:{Notify:l["a"],Dialog:d["a"],Loading:p["a"],LocalStorage:f["a"],AddressbarColor:m["a"],Meta:h["a"]}};function v(e,t,n,o,r,a){const i=Object(s["D"])("router-view");return Object(s["y"])(),Object(s["h"])(i)}var b=Object(s["l"])({name:"App"});b.render=v;var k=b,P=n("5502"),w=function(){return{currentUser:null,token:null,selectViagem:null,listPoints:[],user:{email:"",cpf:"",name:"",budget:"",tags:[],savedPackages:[]},err:null,geoLocation:null,listPackages:[],tags:["Historia","Museu","Livros","Cultura","Restaurante","Regional","Bebida","Comida","Aventura","Trilha","Cachoeira","Natureza"]}};const y=e=>{const t=JSON.stringify(e.currentUser);return JSON.parse(t)},j=e=>e.err,T=e=>{const{currentUser:t}=e;return t.name?t.name[0]:"."},U=e=>e.geoLocation,O=e=>e.tags,C=e=>e.token,E=e=>e.listPackages,S=e=>e.selectViagem,L=e=>e.listPoints;var A=n("ded3"),x=n.n(A);const M=(e,t)=>{if(t){var n=e.currentUserModelo;let o=x()(x()({},n),t);e.currentUser=o}else e.currentUser=t},W=(e,t)=>{e.err=t},_=(e,t)=>{e.geoLocation=t},G=(e,t)=>{e.token=t},V=(e,t)=>{e.listPackages=t},z=(e,t)=>{e.selectViagem=t},J=(e,t)=>{e.listPoints=t};var N=n("bc3a"),$=n.n(N);function D({commit:e},t){var n="https://ria-back.herokuapp.com/auth/users/login";return $()({url:n,method:"POST",data:{email:t.email,password:t.password}}).then((function(t){if("200"==t.status){e("setCurrentUser",t.data.user),e("setToken",t.data.token);var n=t.data.user;return f["a"].set("user",n),f["a"].set("token",t.data.token),!0}})).catch((e=>(console.log("error user",e),l["a"].create({position:"top",message:"Senha inválida ou usuário não existe",timeout:3e3,color:"negative"}),!1)))}function I({commit:e,state:t},n){console.log("createUserWithEmailAndPassword",n);var o="https://ria-back.herokuapp.com/auth/users/register",r={email:n.email,password:n.password};return $()({method:"POST",url:o,data:r,headers:{"Content-Type":"application/json"}}).then((function(t){if("201"==t.status){e("setCurrentUser",t.data.user),e("setToken",t.data.token);var n=t.data.user;return f["a"].set("user",n),f["a"].set("token",t.data.token),!0}})).catch((e=>(console.log(e),l["a"].create({position:"top",message:"Usuário já existe",timeout:3e3,color:"negative"}),e)))}function R({commit:e},t){var n="https://ria-back.herokuapp.com/auth/providers/login";return $()({url:n,method:"POST",data:{email:t.email,password:t.password}}).then((function(t){if("200"==t.status){e("setCurrentUser",t.data.user),e("setToken",t.data.token);var n=t.data.user;return f["a"].set("user",n),f["a"].set("token",t.data.token),!0}})).catch((e=>(console.log("error user",e),l["a"].create({position:"top",message:"Senha inválida ou usuário não existe",timeout:3e3,color:"negative"}),!1)))}function q({commit:e,state:t},n){console.log("createUserWithEmailAndPassword",n);var o="https://ria-back.herokuapp.com/auth/providers/register",r={email:n.email,password:n.password};return $()({method:"POST",url:o,data:r,headers:{"Content-Type":"application/json"}}).then((function(t){if("201"==t.status){e("setCurrentUser",t.data.user),e("setToken",t.data.token);var n=t.data.user;return f["a"].set("user",n),f["a"].set("token",t.data.token),!0}})).catch((e=>(console.log(e),l["a"].create({position:"top",message:"Usuário já existe",timeout:3e3,color:"negative"}),e)))}function B({commit:e,state:t},n){console.log(t.token);var o=t.token,r="https://ria-back.herokuapp.com/users";return $()({method:"PUT",url:r,data:n,headers:{Authorization:o,"Content-Type":"application/json"}}).then((function(e){return console.log(e),l["a"].create({position:"top",message:"Dados salvos com sucesso",timeout:3e3,color:"positive"}),!0})).catch((e=>(console.log(e),l["a"].create({position:"top",message:"Erro ao salvar dados",timeout:3e3,color:"negative"}),!1)))}function H({commit:e,state:t}){if(t.currentUser){var n=t.token,o="https://ria-back.herokuapp.com/users/packages/matched";return $()({method:"GET",url:o,headers:{Authorization:n,"Content-Type":"application/json"}}).then((function(t){console.log(t),"200"==t.status&&e("setListPackages",t.data)})).catch((e=>(console.log(e),l["a"].create({position:"top",message:"Erro ao carregar viagens",timeout:3e3,color:"negative"}),!1)))}return null}function Q({commit:e,state:t},n){var o="https://ria-back.herokuapp.com/packages";return $()({method:"GET",url:o,data:n,headers:{"Content-Type":"application/json"}}).then((function(t){console.log(t),"200"==t.status&&e("setListPackages",t.data)})).catch((e=>(console.log(e),l["a"].create({position:"top",message:"Erro ao carregar viagens",timeout:3e3,color:"negative"}),!1)))}function F({commit:e,state:t},n){console.log("getPoints",n);var o=`https://ria-back.herokuapp.com/packages/${n}`;return $()({method:"GET",url:o,headers:{"Content-Type":"application/json"}}).then((function(t){console.log(t),"200"==t.status&&e("setListPoints",t.data)})).catch((e=>(console.log(e),l["a"].create({position:"top",message:"Erro ao carregar dados da viagem",timeout:3e3,color:"negative"}),!1)))}function K({commit:e,state:t},n){var o,r=t.currentUser.token,a="https://reset-back-end.herokuapp.com/student",s="https://reset-back-end.herokuapp.com/mentor";if("student"===n.type)o=a;else{if("mentor"!==n.type)return;o=s}return $()({method:"PUT",url:o,data:t.currentUser,headers:{"Content-Type":"application/json",token:r}}).then((function(e){return e})).catch((e=>(console.log(e),l["a"].create({position:"top",message:"Erro ao tentar atualizar dados",timeout:3e3,color:"negative"}),e)))}function X({commit:e},t){var n,o=t.token,r=t.type,a="https://reset-back-end.herokuapp.com/student",s="https://reset-back-end.herokuapp.com/mentor";if("student"===r)n=a;else{if("mentor"!==r)return;n=s}return $()({method:"GET",url:n,headers:{"Content-Type":"application/json",token:o}}).then((function(t){return console.log("saveProfile",t.data),t.data.token=o,e("setCurrentUser",t.data),t})).catch((e=>(console.log(e),l["a"].create({position:"top",message:"Erro ao tentar carregar dados",timeout:3e3,color:"negative"}),e)))}function Y({commit:e,state:t}){return e("setCurrentUser",null),f["a"].set("user",null),!0}var Z={namespaced:!0,getters:o,mutations:r,actions:a,state:w},ee=function(){const e=new P["a"]({state:Z.state,actions:Z.actions,getters:Z.getters,mutations:Z.mutations,strict:!1});return e},te=n("4bde"),ne=n("6c02");const oe=[{path:"/",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"713b")),children:[{path:"interesses",name:"interesses",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"123c"))},{path:"orcamento",name:"orcamento",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"1cf9"))},{path:"",name:"viagens",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"d4f0"))},{path:"rotas",name:"rotas",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"c201"))},{path:"auth",name:"login",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"fa72"))},{path:"empresas",name:"empresas",component:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"2c92"))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"e51e"))}];var re=oe,ae=Object(te["route"])((function(){const e=ne["b"],t=Object(ne["a"])({scrollBehavior:()=>({left:0,top:0}),routes:re,history:e("/")});return t})),se=async function(e){const t="function"===typeof ee?await ee({}):ee,n="function"===typeof ae?await ae({store:t}):ae;t.$router=n;const o=e(k);return o.use(i["a"],g),{app:o,store:t,router:n}},ie=n("9483");Object(ie["a"])("/service-worker.js",{ready(){0},registered(){0},cached(){0},updatefound(){0},updated(e){location.reload()},offline(){0},error(e){0}}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&n.e(0).then(n.t.bind(null,"a0db",7));const ce="/";async function ue({app:e,router:t,store:n},o){let r=!1;const a=e=>{r=!0;const n=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=n},s=window.location.href.replace(window.location.origin,"");for(let i=0;!1===r&&i<o.length;i++)try{await o[i]({app:e,router:t,store:n,ssrContext:null,redirect:a,urlPath:s,publicPath:ce})}catch(j){return j&&j.url?void(window.location.href=j.url):void console.error("[Quasar] boot error:",j)}!0!==r&&(e.use(t),e.use(n),e.mount("#q-app"))}se(s["g"]).then((e=>Promise.all([Promise.resolve().then(n.bind(null,"758b"))]).then((t=>{const n=t.map((e=>e.default)).filter((e=>"function"===typeof e));ue(e,n)}))))},"31cd":function(e,t,n){},"758b":function(e,t,n){"use strict";n.r(t),n.d(t,"api",(function(){return s}));var o=n("4bde"),r=n("bc3a"),a=n.n(r);n.d(t,"axios",(function(){return a.a}));const s=a.a.create({baseURL:"https://api.example.com"});t["default"]=Object(o["boot"])((({app:e})=>{e.config.globalProperties.$axios=a.a,e.config.globalProperties.$api=s}))}});