(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0310846b"],{"050c":function(e,t,o){},"0e44":function(e,t,o){"use strict";o("5fb5")},"5fb5":function(e,t,o){},"829a":function(e,t,o){"use strict";o.r(t);var a=o("7a23");const c=Object(a["createVNode"])("div",{class:"text-start"},[Object(a["createVNode"])("h3",null,"My Botos")],-1),n={class:"container h-100"},r={class:"row"},l={class:"col-md-12"},i={class:"table-wrap"},s={class:"table table-striped"},d={colspan:"7"},u=Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th",null,"Id"),Object(a["createVNode"])("th",null,"Name"),Object(a["createVNode"])("th",null,"Frequency"),Object(a["createVNode"])("th",null,"Status"),Object(a["createVNode"])("th",null,[Object(a["createVNode"])("i",{class:"fas fa-robot text-secondary"})]),Object(a["createVNode"])("th",null,[Object(a["createVNode"])("i",{class:"far fa-copy text-secondary"})]),Object(a["createVNode"])("th")],-1),b={scope:"row"},h=Object(a["createVNode"])("i",{class:"far fa-trash-alt"},null,-1),f={key:0,class:"alert alert-light p-4"},p=Object(a["createTextVNode"])(" You have not created any Botos yet, go "),O=Object(a["createVNode"])("span",null,"create one!",-1),j={key:0,class:"alert alert-warning p-4"},m=Object(a["createTextVNode"])("Are you sure you want to delete this bot?"),g={key:0},v=Object(a["createTextVNode"])("Great! 😄"),y=Object(a["createTextVNode"])("Your bot "),V={class:"text-success"},k=Object(a["createVNode"])("p",{class:"fst-italic"},"(You can always switch it off from this page anytime you want).",-1);function N(e,t){const o=Object(a["resolveComponent"])("botos-row-place-holder"),N=Object(a["resolveComponent"])("Toggle"),w=Object(a["resolveComponent"])("router-link"),B=Object(a["resolveComponent"])("boto-modal"),C=Object(a["resolveComponent"])("admin-layout");return Object(a["openBlock"])(),Object(a["createBlock"])(C,null,{default:Object(a["withCtx"])(()=>[c,Object(a["createVNode"])("div",n,[Object(a["createVNode"])("section",null,[Object(a["createVNode"])("div",r,[Object(a["createVNode"])("div",l,[Object(a["createVNode"])("div",i,[Object(a["createVNode"])("table",s,[Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("td",d,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=t=>e.search=t),class:"form-control",placeholder:"Search botos..."},null,512),[[a["vModelText"],e.search]])])]),u]),Object(a["createVNode"])("tbody",null,[e.isLoadingData?(Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:0},Object(a["renderList"])(10,e=>Object(a["createVNode"])(o)),64)):Object(a["createCommentVNode"])("",!0),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.filteredList,(t,o)=>(Object(a["openBlock"])(),Object(a["createBlock"])("tr",null,[Object(a["createVNode"])("th",b,Object(a["toDisplayString"])(t.id),1),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(t.name),1),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])("SCH"===t.schedule?e.getFrequencyWithUnit(t):"Trigger"),1),Object(a["createVNode"])("td",null,[Object(a["createVNode"])(N,{onClick:o=>e.switchBoto(t.id),"true-value":"ON","false-value":"OFF",modelValue:e.filteredList[o].status,"onUpdate:modelValue":t=>e.filteredList[o].status=t},null,8,["onClick","modelValue","onUpdate:modelValue"])]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("a",{href:`${e.context}editor/${t.id}?${e.uid}`,title:""},"Details",8,["href"])]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("a",{onClick:o=>e.copyBoto(t.id)},"Copy",8,["onClick"])]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("a",{onClick:o=>e.deleteBotoDialog(t.id)},[h],8,["onClick"])])]))),256))])]),0!==e.items.length||e.isLoadingData||e.error?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])("div",f,[p,Object(a["createVNode"])(w,{to:{name:"home.editor"},class:"ml-2"},{default:Object(a["withCtx"])(()=>[O]),_:1},8,["to"])]))])])]),e.error?(Object(a["openBlock"])(),Object(a["createBlock"])("div",j," Error: "+Object(a["toDisplayString"])(e.errorText),1)):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(B,{confirmText:"Yes, please",cancelText:"No",loading:e.deletionLoading,modelValue:e.deletionModal,"onUpdate:modelValue":t[2]||(t[2]=t=>e.deletionModal=t),confirmEnabled:"true",onConfirm:e.deleteBoto,onCancel:e.cancelDeleteBot},{title:Object(a["withCtx"])(()=>[m]),default:Object(a["withCtx"])(()=>[null!==this.activeItem?(Object(a["openBlock"])(),Object(a["createBlock"])("p",g,Object(a["toDisplayString"])(this.getItemById(this.activeItem).name),1)):Object(a["createCommentVNode"])("",!0)]),_:1},8,["loading","modelValue","onConfirm","onCancel"]),Object(a["createVNode"])(B,{hideCancel:!0,confirmText:"Close",confirmEnabled:"true",modelValue:e.activationModal,"onUpdate:modelValue":t[3]||(t[3]=t=>e.activationModal=t),onConfirm:e.closeActivatedBotMessage},{title:Object(a["withCtx"])(()=>[v]),default:Object(a["withCtx"])(()=>[Object(a["createVNode"])("p",null,[y,Object(a["createVNode"])("span",V,Object(a["toDisplayString"])(e.bot&&e.bot.name),1),Object(a["createTextVNode"])(" is now activated and will "+Object(a["toDisplayString"])(e.activationRunningText)+".",1)]),k]),_:1},8,["modelValue","onConfirm"])])])]),_:1})}var w=o("9ab4"),B=o("96cd");const C={scope:"row"},x={class:"p__placeholder"},S={class:"p__placeholder"},T={class:"p__placeholder"},D={class:"p__placeholder"},L={class:"p__placeholder"},q={class:"p__placeholder"},_={class:"p__placeholder"};function I(e,t){const o=Object(a["resolveComponent"])("Skeletor");return Object(a["openBlock"])(),Object(a["createBlock"])("tr",null,[Object(a["createVNode"])("th",C,[Object(a["createVNode"])("p",x,[Object(a["createVNode"])(o,{height:"12"})])]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("p",S,[Object(a["createVNode"])(o,{height:"12"})])]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("p",T,[Object(a["createVNode"])(o,{height:"12"})])]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("p",D,[Object(a["createVNode"])(o,{height:"12"})])]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("p",L,[Object(a["createVNode"])(o,{height:"12"})])]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("p",q,[Object(a["createVNode"])(o,{height:"12"})])]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("p",_,[Object(a["createVNode"])(o,{height:"12"})])])])}var M=o("df33"),E={name:"BotosRowPlaceHolderComponent",components:{Skeletor:M["a"]}};o("edc0");E.render=I;var $=E,P=o("f1e8");function U(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function R(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function A(e,t,o){var c=Object(a["toRefs"])(e),n=c.disabled.value,r=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?U(Object(o),!0).forEach((function(t){R(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):U(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label"},c.classes.value),l=o.checked;return{classList:Object(a["computed"])((function(){return{container:r.container,toggle:[r.toggle,n?l.value?r.toggleOnDisabled:r.toggleOffDisabled:l.value?r.toggleOn:r.toggleOff],handle:[r.handle,n?l.value?r.handleOnDisabled:r.handleOffDisabled:l.value?r.handleOn:r.handleOff],label:r.label}}))}}var F={name:"Toggle",emits:["input","update:modelValue","change"],props:{value:{validator:function(e){return e=>-1!==["number","string","boolean"].indexOf(typeof e)||null==e},required:!1},modelValue:{validator:function(e){return e=>-1!==["number","string","boolean"].indexOf(typeof e)||null==e},required:!1},id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1}},setup(e,t){const o=function(e,t,o){var c=Object(a["toRefs"])(e),n=c.value,r=c.modelValue,l=c.falseValue,i=c.trueValue,s=c.disabled,d=void 0!==t.expose?r:n,u=Object(a["computed"])((function(){return d.value===i.value})),b=function(e){t.emit("input",e),t.emit("update:modelValue",e),t.emit("change",e)},h=function(){b(i.value)},f=function(){b(l.value)};return-1!==[null,void 0,!1,0,"0","off"].indexOf(d.value)&&d.value!==l.value&&f(),-1!==[!0,1,"1","on"].indexOf(d.value)&&d.value!==i.value&&h(),{externalValue:d,checked:u,update:b,check:h,uncheck:f,handleInput:function(e){b(e.target.checked?i.value:l.value)},handleClick:function(){s.value||(u.value?f():h())}}}(e,t),c=function(e,t,o){var c=Object(a["toRefs"])(e),n=c.trueValue,r=c.falseValue,l=c.onLabel,i=c.offLabel,s=o.checked,d=o.update;return{label:Object(a["computed"])((function(){var e=s.value?l.value:i.value;return e||(e="&nbsp;"),e})),toggle:function(){d(s.value?r.value:n.value)},on:function(){d(n.value)},off:function(){d(r.value)}}}(e,0,{checked:o.checked,update:o.update}),n=A(e,0,{checked:o.checked}),r=(l={check:o.check,uncheck:o.uncheck,checked:o.checked},i=l.check,s=l.uncheck,d=l.checked,{handleSpace:function(){d.value?s():i()}});var l,i,s,d;return{...o,...n,...c,...r}},render:function(e,t,o,c,n,r){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{class:e.classList.container,tabindex:o.disabled?-1:0,"aria-checked":e.checked,"aria-describedby":o.describedby,"aria-labelledby":o.labelledby,role:"switch",onKeyup:t[2]||(t[2]=Object(a["withKeys"])((...t)=>e.handleSpace&&e.handleSpace(...t),["space"]))},[Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"checkbox",id:o.id,name:o.name,value:o.trueValue,checked:e.checked,disabled:o.disabled},null,8,["id","name","value","checked","disabled"]),[[a["vShow"],!1]]),Object(a["createVNode"])("div",{class:e.classList.toggle,onClick:t[1]||(t[1]=(...t)=>e.handleClick&&e.handleClick(...t))},[Object(a["createVNode"])("span",{class:e.classList.handle},null,2),Object(a["renderSlot"])(e.$slots,"label",{checked:e.checked,classList:e.classList},()=>[Object(a["createVNode"])("span",{class:e.classList.label,innerHTML:e.label},null,10,["innerHTML"])]),o.required?(Object(a["openBlock"])(),Object(a["createBlock"])("input",{key:0,type:"checkbox",style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},checked:e.checked,"aria-hidden":"true",tabindex:"-1",required:""},null,8,["checked"])):Object(a["createCommentVNode"])("v-if",!0)],2)],42,["tabindex","aria-checked","aria-describedby","aria-labelledby"])},__file:"src/Toggle.vue"},H=F,Y=o("5502"),z=o("6c02"),G=o("8fba"),J=o("ac15"),W=o("f8d5"),K=o("ec26"),Q=[],X=Object(a["defineComponent"])({name:"Botos",components:{AdminLayout:B["a"],BotosRowPlaceHolder:$,Toggle:H,BotoModal:G["a"]},setup:function(){var e=Object(Y["b"])(),t=Object(z["c"])(),o=null;return t.params.botId&&(o={id:t.params.botId,name:t.params.botName,frequency:t.params.botFrequency,schedule:t.params.botSchedule,frequency_unit:t.params.botFrequencyUnit}),{store:e,bot:o}},data:function(){return{context:"/demo/",items:Q,isLoadingData:!1,errorText:"",error:!1,activationModal:!1,deletionModal:!1,deletionLoading:!1,activeItem:null,search:"",filteredItems:Q,uid:Object(K["a"])()}},computed:{filteredList:function(){var e=this;return this.items.filter((function(t){return t.name.toLowerCase().includes(e.search.toLowerCase())}))},activationRunningText:function(){if(this.bot&&"SCH"===this.bot.schedule){var e=this.getFrequencyWithUnit(this.bot);return"run every "+e}return"trigger with every event"}},mounted:function(){return Object(w["b"])(this,void 0,void 0,(function(){var e;return Object(w["c"])(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,3,4]),this.bot&&(this.activationModal=!0),this.isLoadingData=!0,[4,this.loadBotos()];case 1:return t.sent(),[3,4];case 2:return e=t.sent(),this.error=!0,this.errorText=e,[3,4];case 3:return this.isLoadingData=!1,[7];case 4:return[2]}}))}))},methods:{loadBotos:function(){return Object(w["b"])(this,void 0,void 0,(function(){var e;return Object(w["c"])(this,(function(t){switch(t.label){case 0:return[4,this.getBotos()];case 1:return e=t.sent(),this.items=e,[2]}}))}))},getFrequencyWithUnit:function(e){var t,o=e.frequency_unit||"MIN";switch(o){case"HR":t=e.frequency/60,o="hours";break;case"DAY":t=e.frequency/24/60,o="days";break;case"MIN":t=e.frequency,o="minutes";break;default:t=e.frequency,o="minutes"}return t+" "+o},closeActivatedBotMessage:function(){this.activationModal=!1},cancelDeleteBot:function(){this.deletionModal=!1,this.activeItem=null},deleteBoto:function(){return Object(w["b"])(this,void 0,void 0,(function(){var e,t;return Object(w["c"])(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,4]),this.deletionLoading=!0,e=this.getItemById(this.activeItem),[4,W["a"].request("https://api.boto.io/api/bot/"+e.id+"/",this.store.getters.localStorageAuthToken,J["a"].DELETE,!0)];case 1:return o.sent(),this.deletionModal=!1,this.deletionLoading=!1,this.activeItem=null,this.isLoadingData=!0,[4,this.loadBotos()];case 2:return o.sent(),this.isLoadingData=!1,[3,4];case 3:return t=o.sent(),console.error(t),this.deletionLoading=!1,this.activeItem=null,this.deletionModal=!1,this.isLoadingData=!1,[3,4];case 4:return[2]}}))}))},getBotos:function(){return Object(w["b"])(this,void 0,void 0,(function(){return Object(w["c"])(this,(function(e){switch(e.label){case 0:return[4,W["a"].request("https://api.boto.io/api/my/bots/",this.store.getters.localStorageAuthToken,J["a"].GET)];case 1:return[2,e.sent()]}}))}))},switchBoto:function(e){return Object(w["b"])(this,void 0,void 0,(function(){var t,o,a,c,n;return Object(w["c"])(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),t=this.getItemById(e),o=t.status,a=t.name,c=new FormData,c.append("name",a),c.append("status",o),c.append("frequency",t.frequency.toString()),[4,W["a"].request("https://api.boto.io/api/bot/"+t.id+"/",this.store.getters.localStorageAuthToken,J["a"].PUT,c,!0)];case 1:return r.sent(),[3,3];case 2:return n=r.sent(),console.error(n),[3,3];case 3:return[2]}}))}))},deleteBotoDialog:function(e){this.deletionModal=!0,this.activeItem=e},gotoBoto:function(e){P["a"].push({name:"home.editor",params:{id:e,uuid:Object(K["a"])()}})},getItemById:function(e){return this.items.find((function(t){return t.id===e}))},copyBoto:function(e){var t=this.getItemById(e);t.copy=!0,t.name=t.name+" copy",this.store.commit("setTemplate",JSON.stringify(t)),P["a"].push({name:"home.editor"})}}});o("e2a7"),o("0e44");X.render=N;t["default"]=X},8872:function(e,t,o){},"8fba":function(e,t,o){"use strict";var a=o("7a23");const c={class:"modal__title"},n={class:"modal__content"},r={class:"modal__action"},l={key:0,class:"fas fa-circle-notch fa-spin"};function i(e,t){const o=Object(a["resolveComponent"])("vue-final-modal");return Object(a["openBlock"])(),Object(a["createBlock"])(o,Object(a["mergeProps"])(e.$attrs,{classes:"modal-container text-center","content-class":"modal-content modal-content-"+e.$attrs.modalSize}),{default:Object(a["withCtx"])(({params:t,close:o})=>[Object(a["createVNode"])("span",c,[Object(a["renderSlot"])(e.$slots,"title")]),Object(a["createVNode"])("div",n,[Object(a["renderSlot"])(e.$slots,"default",{params:t})]),Object(a["createVNode"])("div",r,[e.$attrs.hideCancel?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])("button",{key:0,onClick:t=>e.$emit("cancel",o),class:"boto-button secondary-btn large"},Object(a["toDisplayString"])(e.$attrs.cancelText),9,["onClick"])),e.$attrs.hideConfirm?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])("button",{key:1,onClick:t=>e.$emit("confirm",o),class:["boto-button primary-btn large ml-2",e.$attrs.confirmEnabled?"primary-btn":"btn-secondary"],disabled:!e.$attrs.confirmEnabled},[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$attrs.confirmText)+" ",1),e.$attrs.loading?(Object(a["openBlock"])(),Object(a["createBlock"])("i",l)):Object(a["createCommentVNode"])("",!0)],10,["onClick","disabled"]))])]),_:3},16,["content-class"])}var s=Object(a["defineComponent"])({name:"BotoModal",inheritAttrs:!0,emits:["confirm","cancel"]});o("eb6e");s.render=i;t["a"]=s},9067:function(e,t,o){},ac15:function(e,t,o){"use strict";var a;o.d(t,"a",(function(){return a})),function(e){e["GET"]="get",e["POST"]="post",e["PUT"]="PUT",e["DELETE"]="DELETE"}(a||(a={}))},e2a7:function(e,t,o){"use strict";o("050c")},eb6e:function(e,t,o){"use strict";o("8872")},ec26:function(e,t,o){"use strict";var a,c=new Uint8Array(16);function n(){if(!a&&(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!a))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(c)}var r=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function l(e){return"string"===typeof e&&r.test(e)}for(var i=l,s=[],d=0;d<256;++d)s.push((d+256).toString(16).substr(1));function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase();if(!i(o))throw TypeError("Stringified UUID is invalid");return o}var b=u;function h(e,t,o){e=e||{};var a=e.random||(e.rng||n)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){o=o||0;for(var c=0;c<16;++c)t[o+c]=a[c];return t}return b(a)}t["a"]=h},edc0:function(e,t,o){"use strict";o("9067")},f8d5:function(e,t,o){"use strict";var a=o("9ab4"),c=function(e,t,o,c,n){return Object(a["b"])(void 0,void 0,void 0,(function(){var r,l,i,s,d,u,b,h;return Object(a["c"])(this,(function(f){switch(f.label){case 0:return r=new AbortController,l=new Headers,n||l.append("Content-Type","application/json"),t&&l.append("Authorization","Token "+t),i={method:o,headers:l,cache:"no-store"},s=i.timeout,d=void 0===s?8e3:s,u=setTimeout((function(){return r.abort()}),d),c&&(i["body"]=c),[4,fetch(e,Object(a["a"])(Object(a["a"])({},i),{signal:r.signal}))];case 1:if(b=f.sent(),!b.ok)throw new Error("There was an error with this request");return[4,b.clone().json().catch((function(){return b.text()}))];case 2:return h=f.sent(),clearTimeout(u),[2,h]}}))}))};t["a"]={request:c}}}]);
//# sourceMappingURL=chunk-0310846b-legacy.0e13f6f5.js.map