var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&o(e,n,t[n]);if(a)for(var n of a(t))r.call(t,n)&&o(e,n,t[n]);return e},i=(e,a)=>t(e,n(a));import{_ as u,a as s,b as c,c as p,d as m,e as g,f as b,g as h,h as f,i as v,j as y,k as W,l as V,m as _,n as x,o as I,p as L,q as w,V as z,r as k,s as O,t as C,u as R,v as U,w as A,F as N,x as E,y as T,z as j,A as D,B as P,C as H,D as B,E as S,G as F,H as M,I as $,J as q,K as J,L as G,M as K,N as X}from"./vendor.a1b79265.js";let Y;u(s);const Q={};const Z=I({name:"Home",components:{VueDragResize:z},setup(){const e=k({color:"green",bgHeight:750,bgWidth:576,currentWidget:{id:null,fieldLabel:""},renderList:[],widgetList:[{name:"rect",label:"矩形"},{name:"barCode",label:"条形码"},{name:"qrCode",label:"二维码",isAspectRatio:!0},{name:"text",label:"文本"}],fieldList:[{name:"",label:"自定义"},{name:"proCode",label:"时效类型"},{name:"destRouteLabel",label:"目的地"},{name:"fromName",label:"姓名（寄）"},{name:"fromPhone",label:"电话（寄）"},{name:"fromOrgName",label:"公司（寄）"},{name:"fromAddress",label:"地址（寄）"},{name:"toName",label:"姓名（收）"},{name:"toPhone",label:"电话（收）"},{name:"toOrgName",label:"公司（收）"},{name:"toAddress",label:"地址（收）"}]});O((()=>{}));return i(d({},C(e)),{handleAdd:t=>{const n={type:t.name,typeName:t.label,width:0,height:0,left:0,top:0,zIndex:1,fieldLabel:"自定义",isAspectRatio:!1,id:(new Date).getTime().toString()};let a={};switch(t.name){case"rect":a={width:100,height:100,borderTop:1,borderRight:1,borderBottom:1,borderLeft:1,borderStyle:"solid"};break;case"qrCode":a={width:100,height:100,isAspectRatio:!0};break;case"barCode":a={width:440,height:100};break;case"text":a={size:1,bold:1};break;default:a={}}const l=d(d({},n),a),r=Object.assign({},l);e.currentWidget=l,e.renderList.push(r)},changeDimensions:(t,n)=>{let a={};const l=[];e.renderList.forEach((e=>{e.id===n?(l.push(d(d({},e),t)),a=Object.assign({},d(d({},e),t))):l.push(e)})),e.renderList=l,e.currentWidget=a},changeInput:(t,n,a)=>{const l=[];e.renderList.forEach((e=>{if(e.id===n){const n=Object.assign({},e);n[a]=t,l.push(n)}else l.push(e)})),e.renderList=l},changeField:(t,n)=>{const a=e.fieldList.slice(0),l=[],r=a.find((e=>e.label===t));e.renderList.forEach((e=>{if(e.id===n){const t=Object.assign({},e);t.fieldLabel=r.label,t.fieldName=r.name,l.push(t)}else l.push(e)})),e.renderList=l,e.currentWidget.fieldLabel=r.label,e.currentWidget.fieldName=r.name}})}}),ee=j("data-v-4905de6c");L("data-v-4905de6c");const te={class:"home-container"},ne={class:"left"},ae=A("h4",null,"组件",-1),le=A("i",{class:"el-icon-plus el-icon--right"},null,-1),re={class:"mid"},oe={class:"operate-view"},de=D(" 撤销 "),ie=D(" 重做 "),ue=D(" 导入JSON "),se=D(" 生成JSON "),ce=D("预览"),pe=D("清空"),me={class:"content-view"},ge=A("div",{class:"filler"},null,-1),be={class:"right"},he=A("h4",null,"属性",-1),fe={key:0,class:"form-box"},ve=D("px"),ye=D("px"),We=A("h5",null,"边框",-1),Ve=D("px"),_e=D("px"),xe=D("px"),Ie=D("px");w();const Le=ee(((e,t,n,a,l,r)=>{const o=P("el-button"),d=P("VueDragResize"),i=P("el-option"),u=P("el-select"),s=P("el-form-item"),c=P("el-input"),p=P("el-color-picker"),m=P("el-form");return R(),U("div",te,[A("div",ne,[ae,(R(!0),U(N,null,E(e.widgetList,((t,n)=>(R(),U("div",{key:n,class:"left-item"},[A(o,{onClick:n=>e.handleAdd(t),type:"primary",size:"mini",class:"btn-item"},{default:ee((()=>[D(H(t.label)+" ",1),le])),_:2},1032,["onClick"])])))),128))]),A("div",re,[A("div",oe,[A("div",null,[A(o,{type:"danger",icon:"el-icon-refresh-left",size:"mini"},{default:ee((()=>[de])),_:1}),A(o,{type:"primary",icon:"el-icon-refresh-right",size:"mini"},{default:ee((()=>[ie])),_:1})]),A("div",null,[A(o,{type:"warning",icon:"el-icon-upload2",size:"mini"},{default:ee((()=>[ue])),_:1}),A(o,{type:"success",icon:"el-icon-download",size:"mini"},{default:ee((()=>[se])),_:1}),A(o,{type:"primary",icon:"el-icon-view",size:"mini"},{default:ee((()=>[ce])),_:1}),A(o,{type:"danger",icon:"el-icon-delete",size:"mini"},{default:ee((()=>[pe])),_:1})])]),A("div",me,[A("div",{class:"canvas-view",style:{width:e.bgWidth+"px",height:e.bgHeight+"px"}},[(R(!0),U(N,null,E(e.renderList,(t=>(R(),U(d,{style:{"border-style":t.borderStyle,"border-color":t.borderColor,"border-width":`${t.borderTop}px ${t.borderRight}px ${t.borderBottom}px ${t.borderLeft}px`},key:t.id,isActive:!0,w:t.width,h:t.height,x:t.left,y:t.top,z:t.zIndex,parentW:e.bgWidth,parentH:e.bgHeight,parentLimitation:!0,aspectRatio:t.isAspectRatio,onDragging:n=>e.changeDimensions(n,t.id),onResizing:n=>e.changeDimensions(n,t.id)},{default:ee((()=>[ge])),_:2},1032,["style","w","h","x","y","z","parentW","parentH","aspectRatio","onDragging","onResizing"])))),128))],4)])]),A("div",be,[he,e.currentWidget.id?(R(),U("div",fe,[A(m,{ref:"form",size:"mini",model:e.currentWidget,"label-width":"60px"},{default:ee((()=>[A(s,{label:"属性"},{default:ee((()=>[A(u,{onChange:t[1]||(t[1]=t=>e.changeField(t,e.currentWidget.id)),modelValue:e.currentWidget.fieldLabel,"onUpdate:modelValue":t[2]||(t[2]=t=>e.currentWidget.fieldLabel=t),placeholder:"选择绑定的属性"},{default:ee((()=>[(R(!0),U(N,null,E(e.fieldList,(e=>(R(),U(i,{key:e.label,label:e.label,value:e.label},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),A(s,{label:"字段"},{default:ee((()=>[A(c,{readonly:Boolean("自定义"!==e.currentWidget.fieldLabel),onInput:t[3]||(t[3]=t=>e.changeInput(t,e.currentWidget.id,"fieldName")),modelValue:e.currentWidget.fieldName,"onUpdate:modelValue":t[4]||(t[4]=t=>e.currentWidget.fieldName=t)},null,8,["readonly","modelValue"])])),_:1}),A(s,{label:"示例值"},{default:ee((()=>[A(c,{onInput:t[5]||(t[5]=t=>e.changeInput(t,e.currentWidget.id,"fieldValue")),modelValue:e.currentWidget.fieldValue,"onUpdate:modelValue":t[6]||(t[6]=t=>e.currentWidget.fieldValue=t)},null,8,["modelValue"])])),_:1}),A(s,{label:"类型"},{default:ee((()=>[A(c,{readonly:"",modelValue:e.currentWidget.typeName,"onUpdate:modelValue":t[7]||(t[7]=t=>e.currentWidget.typeName=t)},null,8,["modelValue"])])),_:1}),A(s,{label:"X坐标"},{default:ee((()=>[A(c,{type:"number",onInput:t[8]||(t[8]=t=>e.changeInput(t,e.currentWidget.id,"left")),modelValue:e.currentWidget.left,"onUpdate:modelValue":t[9]||(t[9]=t=>e.currentWidget.left=t)},null,8,["modelValue"])])),_:1}),A(s,{label:"Y坐标"},{default:ee((()=>[A(c,{type:"number",onInput:t[10]||(t[10]=t=>e.changeInput(t,e.currentWidget.id,"top")),modelValue:e.currentWidget.top,"onUpdate:modelValue":t[11]||(t[11]=t=>e.currentWidget.top=t)},null,8,["modelValue"])])),_:1}),A(s,{label:"层级"},{default:ee((()=>[A(c,{type:"number",onInput:t[12]||(t[12]=t=>e.changeInput(t,e.currentWidget.id,"zIndex")),modelValue:e.currentWidget.zIndex,"onUpdate:modelValue":t[13]||(t[13]=t=>e.currentWidget.zIndex=t)},null,8,["modelValue"])])),_:1}),"text"!==e.currentWidget.type?(R(),U(N,{key:0},[A(s,{label:"宽度"},{default:ee((()=>[A(c,{type:"number",onInput:t[14]||(t[14]=t=>e.changeInput(t,e.currentWidget.id,"width")),modelValue:e.currentWidget.width,"onUpdate:modelValue":t[15]||(t[15]=t=>e.currentWidget.width=t)},{append:ee((()=>[ve])),_:1},8,["modelValue"])])),_:1}),A(s,{label:"高度"},{default:ee((()=>[A(c,{type:"number",onInput:t[16]||(t[16]=t=>e.changeInput(t,e.currentWidget.id,"height")),modelValue:e.currentWidget.height,"onUpdate:modelValue":t[17]||(t[17]=t=>e.currentWidget.height=t)},{append:ee((()=>[ye])),_:1},8,["modelValue"])])),_:1})],64)):(R(),U(N,{key:1},[A(s,{label:"大小"},{default:ee((()=>[A(c,{onInput:t[18]||(t[18]=t=>e.changeInput(t,e.currentWidget.id,"size")),modelValue:e.currentWidget.size,"onUpdate:modelValue":t[19]||(t[19]=t=>e.currentWidget.size=t)},null,8,["modelValue"])])),_:1}),A(s,{label:"字重"},{default:ee((()=>[A(c,{onInput:t[20]||(t[20]=t=>e.changeInput(t,e.currentWidget.id,"bold")),modelValue:e.currentWidget.bold,"onUpdate:modelValue":t[21]||(t[21]=t=>e.currentWidget.bold=t)},null,8,["modelValue"])])),_:1})],64)),"rect"===e.currentWidget.type?(R(),U(N,{key:2},[We,A(s,{label:"上"},{default:ee((()=>[A(c,{type:"number",onInput:t[22]||(t[22]=t=>e.changeInput(t,e.currentWidget.id,"borderTop")),modelValue:e.currentWidget.borderTop,"onUpdate:modelValue":t[23]||(t[23]=t=>e.currentWidget.borderTop=t)},{append:ee((()=>[Ve])),_:1},8,["modelValue"])])),_:1}),A(s,{label:"右"},{default:ee((()=>[A(c,{type:"number",onInput:t[24]||(t[24]=t=>e.changeInput(t,e.currentWidget.id,"borderRight")),modelValue:e.currentWidget.borderRight,"onUpdate:modelValue":t[25]||(t[25]=t=>e.currentWidget.borderRight=t)},{append:ee((()=>[_e])),_:1},8,["modelValue"])])),_:1}),A(s,{label:"下"},{default:ee((()=>[A(c,{type:"number",onInput:t[26]||(t[26]=t=>e.changeInput(t,e.currentWidget.id,"borderBottom")),modelValue:e.currentWidget.borderBottom,"onUpdate:modelValue":t[27]||(t[27]=t=>e.currentWidget.borderBottom=t)},{append:ee((()=>[xe])),_:1},8,["modelValue"])])),_:1}),A(s,{label:"左"},{default:ee((()=>[A(c,{type:"number",onInput:t[28]||(t[28]=t=>e.changeInput(t,e.currentWidget.id,"borderLeft")),modelValue:e.currentWidget.borderLeft,"onUpdate:modelValue":t[29]||(t[29]=t=>e.currentWidget.borderLeft=t)},{append:ee((()=>[Ie])),_:1},8,["modelValue"])])),_:1}),A(s,{label:"颜色"},{default:ee((()=>[A(p,{onChange:t[30]||(t[30]=t=>e.changeInput(t,e.currentWidget.id,"borderColor")),modelValue:e.currentWidget.borderColor,"onUpdate:modelValue":t[31]||(t[31]=t=>e.currentWidget.borderColor=t)},null,8,["modelValue"])])),_:1})],64)):T("",!0)])),_:1},8,["model"])])):T("",!0)])])}));Z.render=Le,Z.__scopeId="data-v-4905de6c";const we=B({state:{text:"This is Vuex Root.state.text"},getters:{},mutations:{},actions:{},modules:{numFactoryModule:{namespaced:!0,state:{name:"numFactory-module",count:1},mutations:{DOUBLE_COUNT(e){e.count*=2}},actions:{}}}}),ze=Symbol("vue-store");var ke=I({name:"Vuex",setup(){const e=S(ze),t=k({text:F((()=>e.state.text)),count:F((()=>e.state.numFactoryModule.count))});return i(d({},C(t)),{double:()=>{e.commit("numFactoryModule/DOUBLE_COUNT")}})}});const Oe={class:"vuex-container page-container"},Ce=A("div",{class:"page-title"},"Vuex Test Page",-1),Re=D("double");ke.render=function(e,t,n,a,l,r){const o=P("el-button");return R(),U("div",Oe,[Ce,A("p",null,"store Root is: "+H(e.text),1),A("p",null,"store doubleCount is: "+H(e.count),1),A(o,{type:"primary",onClick:e.double},{default:M((()=>[Re])),_:1},8,["onClick"])])};var Ue=I({name:"Vuex",setup(){const e=$(0);return{count:e,increment:()=>{e.value+=1}}}});const Ae={class:"test-container page-container"},Ne=A("div",{class:"page-title"},"Unit Test Page",-1);Ue.render=function(e,t,n,a,l,r){return R(),U("div",Ae,[Ne,A("p",null,"count is: "+H(e.count),1),A("button",{onClick:t[1]||(t[1]=(...t)=>e.increment&&e.increment(...t))},"increment")])};const Ee=[{path:"/",name:"Home",component:Z},{path:"/vuex",name:"Vuex",component:ke},{path:"/axios",name:"Axios",component:()=>function(e,t){if(!t||0===t.length)return e();if(void 0===Y){const e=document.createElement("link").relList;Y=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`./${e}`)in Q)return;Q[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":Y,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>import("./Axios.483f0215.js")),["assets/Axios.483f0215.js","assets/Axios.264f78dd.css","assets/vendor.a1b79265.js"])},{path:"/test",name:"Test",component:Ue}],Te=q({history:J(),routes:Ee});L("data-v-9fa4a286");const je={class:"header"},De=A("img",{class:"logo",src:"./assets/logo.992afb06.png"},null,-1);w();var Pe=I({setup:e=>(G(),(e,t)=>(R(),U("div",je,[De])))});Pe.__scopeId="data-v-9fa4a286";var He=I({name:"Nav",setup(){const e=G(),t=k({navList:[{name:"Home",isActive:!1,path:"/"},{name:"Vuex",isActive:!1,path:"/vuex"},{name:"Axios",isActive:!1,path:"/axios"},{name:"Test",isActive:!1,path:"/test"}],navClick(t){e.push(t.path)}}),n=e=>{t.navList.forEach((t=>{const n=t;return n.isActive=n.path===e,n}))};return K((()=>e.currentRoute.value),(e=>{n(e.path)})),O((()=>{e.isReady().then((()=>{n(e.currentRoute.value.path)}))})),d({},C(t))}});const Be=j("data-v-ab9f24b4");L("data-v-ab9f24b4");const Se=A("i",{class:"el-icon-menu"},null,-1);w();const Fe=Be(((e,t,n,a,l,r)=>{const o=P("el-menu-item"),d=P("el-menu");return R(),U(d,{class:"left-menu","default-active":"0"},{default:Be((()=>[(R(!0),U(N,null,E(e.navList,((e,t)=>(R(),U(o,{key:t,index:t},{title:Be((()=>[D(H(e.name),1)])),default:Be((()=>[Se])),_:2},1032,["index"])))),128))])),_:1})}));He.render=Fe,He.__scopeId="data-v-ab9f24b4";var Me=I({name:"Main",components:{Header:Pe,Nav:He}});const $e=j("data-v-849c83d4");L("data-v-849c83d4");const qe={class:"main-container"},Je={class:"top"},Ge={class:"bottom"},Ke={class:"left"},Xe={class:"right"};w();const Ye=$e(((e,t,n,a,l,r)=>{const o=P("Header"),d=P("Nav"),i=P("router-view");return R(),U("main",qe,[A("div",Je,[A(o)]),A("div",Ge,[A("div",Ke,[A(d)]),A("div",Xe,[A(i)])])])}));Me.render=Ye,Me.__scopeId="data-v-849c83d4";var Qe=I({name:"App",components:{Main:Me}});Qe.render=function(e,t,n,a,l,r){const o=P("Main");return R(),U(o)};const Ze=X(Qe);var et;(et=Ze,et.use(c).use(p).use(m).use(g).use(b).use(h).use(f).use(v).use(y).use(W).use(V).use(_).use(x),et).use(Te).use(we,ze).mount("#app");
//# sourceMappingURL=index.06a2d823.js.map