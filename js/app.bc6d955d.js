(function(e){function t(t){for(var r,a,u=t[0],l=t[1],i=t[2],d=0,b=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(b.length)b.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==c[l]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/qrcode_creater/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var s=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"08f2":function(e,t,n){"use strict";n("221a")},"221a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=Object(r["e"])("h1",{class:"display-1 mt-5 mb-2"},"QRcode 轉換器",-1);function o(e,t){var n=Object(r["s"])("router-view");return Object(r["o"])(),Object(r["d"])(r["a"],null,[c,Object(r["e"])(n,{class:"mb-5"})],64)}n("08f2");const a={};a.render=o;var u=a,l=n("6c02"),i={class:"container"},s={class:"row mb-5"},d=Object(r["e"])("div",{class:"col-md-6"},[Object(r["e"])("label",{for:"inputQRcodetext",class:"form-label fs-2"},"Your Text")],-1),b={class:"col-md-6 d-grid"},f={class:"row justify-content-center mb-5"},p={class:"col-md-6"},v={for:"customRange3",class:"form-label fs-2"},j={class:"col-md-6 align-self-center"},O={class:"row justify-content-end mb-5"},m={class:"col-md-3 d-grid"};function g(e,t,n,c,o,a){return Object(r["o"])(),Object(r["d"])("div",i,[Object(r["e"])("form",{onSubmit:t[3]||(t[3]=Object(r["A"])((function(){}),["prevent"])),class:"mt-3 mb-2"},[Object(r["e"])("div",s,[d,Object(r["e"])("div",b,[Object(r["z"])(Object(r["e"])("input",{type:"text",class:"form-control-lg",id:"inputQRcodetext",placeholder:"input some text here..","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.textValue=e})},null,512),[[r["w"],c.textValue]])])]),Object(r["e"])("div",f,[Object(r["e"])("div",p,[Object(r["e"])("label",v,"QRcode尺寸大小: "+Object(r["u"])(c.size),1)]),Object(r["e"])("div",j,[Object(r["z"])(Object(r["e"])("input",{type:"range",class:"form-range",min:"100",max:c.maxRange,step:"10",id:"customRange3","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.size=e})},null,8,["max"]),[[r["w"],c.size]])])])],32),Object(r["e"])("div",O,[Object(r["e"])("div",m,[Object(r["e"])("button",{class:"btn btn-success",onClick:t[4]||(t[4]=function(){return c.getQRcode&&c.getQRcode.apply(c,arguments)})},"送出")])]),Object(r["z"])(Object(r["e"])("img",{id:"qrcodeImage mx-auto",src:c.endpoint,alt:"",title:""},null,8,["src"]),[[r["x"],c.qrcodeGet]])])}var h=Object(r["r"])(null),y=Object(r["r"])(!1),w=Object(r["r"])("test"),x="http://api.qrserver.com/v1/create-qr-code/",R="?data=",q="&size=",z=Object(r["r"])(300),Q=Object(r["r"])(500),_={setup:function(){var e=function(){Q.value=window.innerWidth,z.value=10*Math.round((Q.value+100)/2/10),y.value=!1};Object(r["m"])((function(){Q.value=window.innerWidth-150,z.value=10*Math.round((Q.value+100)/2/10),window.addEventListener("resize",e)}));var t=function(){y.value=!1,setTimeout((function(){var e=z.value+"x"+z.value;w.value=x+R+h.value+q+e,y.value=!0;var t=document.querySelector("#qrcodeImage");t.src=w.value,t.alt=h.value,t.title=h.value,h.value=null,z.value=10*Math.round((Q.value+100)/2/10)}),1e3)};return{textValue:h,qrcodeGet:y,getQRcode:t,endpoint:w,maxRange:Q,size:z}}};_.render=g;var M=_,P=[{path:"/",name:"QRcodeCreater",component:M}],S=Object(l["a"])({history:Object(l["b"])("/qrcode_creater/"),routes:P}),V=S;n("f507"),n("ab8b");Object(r["c"])(u).use(V).mount("#app")}});
//# sourceMappingURL=app.bc6d955d.js.map