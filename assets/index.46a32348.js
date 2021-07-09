var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,l=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&r(e,a,t[a]);if(n)for(var a of n(t))o.call(t,a)&&r(e,a,t[a]);return e};import{_ as c,a as i,b as u,c as d,d as p,e as m,r as v,o as h,f,g as y,w as b,h as x,i as V,j as g,u as k,k as C,l as O,t as _,m as A,n as E,p as P,q as T,s as j,v as w,x as L,y as U,z as H,F as M,A as R,B as S,C as F}from"./vendor.8b5a3fd7.js";let N;const D={};var I=m({name:"Home",setup:()=>({value1:v(""),value2:v(""),value3:v(""),handleClick:()=>{console.log("hello")}})});const B={class:"home-container page-container"},q=V("开始"),z=y("div",{class:"page-title"},"Vite2.x + Vue3.x + TypeScript + Element Plus",-1);I.render=function(e,t,a,n,s,o){const r=x("el-input"),l=x("el-button");return h(),f("div",B,[y(r,{modelValue:e.value1,"onUpdate:modelValue":t[1]||(t[1]=t=>e.value1=t),placeholder:"请输入内容"},null,8,["modelValue"]),y(r,{modelValue:e.value2,"onUpdate:modelValue":t[2]||(t[2]=t=>e.value2=t)},null,8,["modelValue"]),y(r,{modelValue:e.value3,"onUpdate:modelValue":t[3]||(t[3]=t=>e.value3=t)},null,8,["modelValue"]),y(l,{onClick:e.handleClick,type:"primary"},{default:b((()=>[q])),_:1},8,["onClick"]),z])};const $=g({state:{text:"This is Vuex Root.state.text"},getters:{},mutations:{},actions:{},modules:{numFactoryModule:{namespaced:!0,state:{name:"numFactory-module",count:1},mutations:{DOUBLE_COUNT(e){e.count*=2}},actions:{}}}}),G=Symbol("vue-store");var W=m({name:"Vuex",setup(){const e=k(G),n=C({text:O((()=>e.state.text)),count:O((()=>e.state.numFactoryModule.count))});return s=l({},_(n)),t(s,a({double:()=>{e.commit("numFactoryModule/DOUBLE_COUNT")}}));var s}});const J={class:"vuex-container page-container"},K=y("div",{class:"page-title"},"Vuex Test Page",-1),Q=V("double");W.render=function(e,t,a,n,s,o){const r=x("el-button");return h(),f("div",J,[K,y("p",null,"store Root is: "+A(e.text),1),y("p",null,"store doubleCount is: "+A(e.count),1),y(r,{type:"primary",onClick:e.double},{default:b((()=>[Q])),_:1},8,["onClick"])])};var X=m({name:"Vuex",setup(){const e=v(0);return{count:e,increment:()=>{e.value+=1}}}});const Y={class:"test-container page-container"},Z=y("div",{class:"page-title"},"Unit Test Page",-1);X.render=function(e,t,a,n,s,o){return h(),f("div",Y,[Z,y("p",null,"count is: "+A(e.count),1),y("button",{onClick:t[1]||(t[1]=(...t)=>e.increment&&e.increment(...t))},"increment")])};const ee=[{path:"/",name:"Home",component:I},{path:"/vuex",name:"Vuex",component:W},{path:"/axios",name:"Axios",component:()=>function(e,t){if(!t)return e();if(void 0===N){const e=document.createElement("link").relList;N=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in D)return;D[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":N,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>import("./Axios.52a0941d.js")),["./assets/Axios.52a0941d.js","./assets/Axios.264f78dd.css","./assets/vendor.8b5a3fd7.js"])},{path:"/test",name:"Test",component:X}],te=E({history:P(),routes:ee}),ae={class:"header"},ne=y("i",{class:"icon el-icon-s-promotion"},null,-1),se=V(" GitHub ");var oe=m({setup(e){const t=T(),a=()=>{window.open("https://github.com/vectorzero/vite-vue3-starter")};return(e,n)=>(h(),f("div",ae,[y("div",{class:"title",onClick:n[1]||(n[1]=e=>j(t).push("/"))}," Vite2.x + Vue3.x + TypeScript Starter "),y("div",{class:"go-github",onClick:a},[ne,se])]))}}),re=m({name:"Nav",setup(){const e=T(),t=C({navList:[{name:"Home",isActive:!1,path:"/"},{name:"Vuex",isActive:!1,path:"/vuex"},{name:"Axios",isActive:!1,path:"/axios"},{name:"Test",isActive:!1,path:"/test"}],navClick(t){e.push(t.path)}}),a=e=>{t.navList.forEach((t=>{const a=t;return a.isActive=a.path===e,a}))};return w((()=>e.currentRoute.value),(e=>{a(e.path)})),L((()=>{e.isReady().then((()=>{a(e.currentRoute.value.path)}))})),l({},_(t))}});const le=S("data-v-9056cfea");U("data-v-9056cfea");const ce={class:"nav"},ie={class:"nav-list"};H();const ue=le(((e,t,a,n,s,o)=>(h(),f("aside",ce,[y("ul",ie,[(h(!0),f(M,null,R(e.navList,((t,a)=>(h(),f("li",{class:["nav-item flex-center",{active:t.isActive}],key:a,onClick:a=>e.navClick(t)},A(t.name),11,["onClick"])))),128))])]))));re.render=ue,re.__scopeId="data-v-9056cfea";var de=m({name:"Main",components:{Header:oe,Nav:re}});const pe=S("data-v-705c113d");U("data-v-705c113d");const me={class:"main-container"},ve={class:"top"},he={class:"bottom"},fe={class:"left"},ye={class:"right"},be={class:"content"};H();const xe=pe(((e,t,a,n,s,o)=>{const r=x("Header"),l=x("Nav"),c=x("router-view");return h(),f("main",me,[y("div",ve,[y(r)]),y("div",he,[y("div",fe,[y(l)]),y("div",ye,[y("div",be,[y(c)])])])])}));de.render=xe,de.__scopeId="data-v-705c113d";var Ve=m({name:"App",components:{Main:de}});Ve.render=function(e,t,a,n,s,o){const r=x("Main");return h(),f(r)};const ge=F(Ve);var ke;(ke=ge,ke.use(c).use(i).use(u).use(d).use(p),ke).use(te).use($,G).mount("#app");