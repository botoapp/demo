(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bd3438fe"],{"050c":function(e,t,c){},"0e44":function(e,t,c){"use strict";c("5fb5")},"5fb5":function(e,t,c){},"829a":function(e,t,c){"use strict";c.r(t);var o=c("7a23");const a=Object(o["createVNode"])("div",{class:"text-start"},[Object(o["createVNode"])("h3",null,"My Botos")],-1),n={class:"container h-100"},r={class:"row"},l={class:"col-md-12"},i={class:"table-wrap"},s={class:"table table-striped"},d=Object(o["createVNode"])("thead",null,[Object(o["createVNode"])("tr",null,[Object(o["createVNode"])("th",null,"Id"),Object(o["createVNode"])("th",null,"Name"),Object(o["createVNode"])("th",null,"Frequency"),Object(o["createVNode"])("th",null,"Status"),Object(o["createVNode"])("th",null,[Object(o["createVNode"])("i",{class:"fas fa-robot text-secondary"})]),Object(o["createVNode"])("th",null,[Object(o["createVNode"])("i",{class:"far fa-copy text-secondary"})])])],-1),u={scope:"row"},b={key:0,class:"alert alert-light p-4"},O=Object(o["createTextVNode"])(" You have not created any Botos yet, go "),p=Object(o["createVNode"])("span",null,"create one!",-1),f={key:0,class:"alert alert-warning p-4"},h=Object(o["createTextVNode"])("Great! 😄"),j=Object(o["createTextVNode"])("Your bot "),m={class:"text-success"},g=Object(o["createVNode"])("p",{class:"fst-italic"},"(You can always switch it off from this page anytime you want).",-1);function v(e,t){const c=Object(o["resolveComponent"])("botos-row-place-holder"),v=Object(o["resolveComponent"])("Toggle"),y=Object(o["resolveComponent"])("router-link"),k=Object(o["resolveComponent"])("boto-modal"),V=Object(o["resolveComponent"])("admin-layout");return Object(o["openBlock"])(),Object(o["createBlock"])(V,null,{default:Object(o["withCtx"])(()=>[a,Object(o["createVNode"])("div",n,[Object(o["createVNode"])("section",null,[Object(o["createVNode"])("div",r,[Object(o["createVNode"])("div",l,[Object(o["createVNode"])("div",i,[Object(o["createVNode"])("table",s,[d,Object(o["createVNode"])("tbody",null,[e.isLoadingData?(Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],{key:0},Object(o["renderList"])(10,e=>Object(o["createVNode"])(c)),64)):Object(o["createCommentVNode"])("",!0),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.items,(t,c)=>(Object(o["openBlock"])(),Object(o["createBlock"])("tr",null,[Object(o["createVNode"])("th",u,Object(o["toDisplayString"])(t.id),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(t.name),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.getFrequencyWithUnit(t)),1),Object(o["createVNode"])("td",null,[Object(o["createVNode"])(v,{onClick:t=>e.switchBoto(c),"true-value":"ON","false-value":"OFF",modelValue:e.items[c].status,"onUpdate:modelValue":t=>e.items[c].status=t},null,8,["onClick","modelValue","onUpdate:modelValue"])]),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("a",{onClick:c=>e.gotoBoto(t.id)},"Details",8,["onClick"])]),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("a",{onClick:t=>e.copyBoto(c)},"Copy",8,["onClick"])])]))),256))])]),0!==e.items.length||e.isLoadingData||e.error?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])("div",b,[O,Object(o["createVNode"])(y,{to:{name:"home.editor"},class:"ml-2"},{default:Object(o["withCtx"])(()=>[p]),_:1},8,["to"])]))])])]),e.error?(Object(o["openBlock"])(),Object(o["createBlock"])("div",f," Error: "+Object(o["toDisplayString"])(e.errorText),1)):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(k,{hideCancel:!0,confirmText:"Close",confirmEnabled:"true",modelValue:e.activationModal,"onUpdate:modelValue":t[1]||(t[1]=t=>e.activationModal=t),onConfirm:e.closeActivatedBotMessage},{title:Object(o["withCtx"])(()=>[h]),default:Object(o["withCtx"])(()=>[Object(o["createVNode"])("p",null,[j,Object(o["createVNode"])("span",m,Object(o["toDisplayString"])(e.bot&&e.bot.name),1),Object(o["createTextVNode"])(" is now activated and will run every "+Object(o["toDisplayString"])(e.bot&&e.bot.frequency)+" minutes.",1)]),g]),_:1},8,["modelValue","onConfirm"])])])]),_:1})}var y=c("9ab4"),k=c("96cd");const V={scope:"row"},N={class:"p__placeholder"},B={class:"p__placeholder"},w={class:"p__placeholder"},C={class:"p__placeholder"},x={class:"p__placeholder"};function S(e,t){const c=Object(o["resolveComponent"])("Skeletor");return Object(o["openBlock"])(),Object(o["createBlock"])("tr",null,[Object(o["createVNode"])("th",V,[Object(o["createVNode"])("p",N,[Object(o["createVNode"])(c,{height:"12"})])]),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("p",B,[Object(o["createVNode"])(c,{height:"12"})])]),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("p",w,[Object(o["createVNode"])(c,{height:"12"})])]),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("p",C,[Object(o["createVNode"])(c,{height:"12"})])]),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("p",x,[Object(o["createVNode"])(c,{height:"12"})])])])}var q=c("df33"),D={name:"BotosRowPlaceHolderComponent",components:{Skeletor:q["a"]}};c("edc0");D.render=S;var T=D,_=c("f1e8");function L(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,o)}return c}function $(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}function P(e,t,c){var a=Object(o["toRefs"])(e),n=a.disabled.value,r=function(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?L(Object(c),!0).forEach((function(t){$(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):L(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label"},a.classes.value),l=c.checked;return{classList:Object(o["computed"])((function(){return{container:r.container,toggle:[r.toggle,n?l.value?r.toggleOnDisabled:r.toggleOffDisabled:l.value?r.toggleOn:r.toggleOff],handle:[r.handle,n?l.value?r.handleOnDisabled:r.handleOffDisabled:l.value?r.handleOn:r.handleOff],label:r.label}}))}}var M={name:"Toggle",emits:["input","update:modelValue","change"],props:{value:{validator:function(e){return e=>-1!==["number","string","boolean"].indexOf(typeof e)||null==e},required:!1},modelValue:{validator:function(e){return e=>-1!==["number","string","boolean"].indexOf(typeof e)||null==e},required:!1},id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1}},setup(e,t){const c=function(e,t,c){var a=Object(o["toRefs"])(e),n=a.value,r=a.modelValue,l=a.falseValue,i=a.trueValue,s=a.disabled,d=void 0!==t.expose?r:n,u=Object(o["computed"])((function(){return d.value===i.value})),b=function(e){t.emit("input",e),t.emit("update:modelValue",e),t.emit("change",e)},O=function(){b(i.value)},p=function(){b(l.value)};return-1!==[null,void 0,!1,0,"0","off"].indexOf(d.value)&&d.value!==l.value&&p(),-1!==[!0,1,"1","on"].indexOf(d.value)&&d.value!==i.value&&O(),{externalValue:d,checked:u,update:b,check:O,uncheck:p,handleInput:function(e){b(e.target.checked?i.value:l.value)},handleClick:function(){s.value||(u.value?p():O())}}}(e,t),a=function(e,t,c){var a=Object(o["toRefs"])(e),n=a.trueValue,r=a.falseValue,l=a.onLabel,i=a.offLabel,s=c.checked,d=c.update;return{label:Object(o["computed"])((function(){var e=s.value?l.value:i.value;return e||(e="&nbsp;"),e})),toggle:function(){d(s.value?r.value:n.value)},on:function(){d(n.value)},off:function(){d(r.value)}}}(e,0,{checked:c.checked,update:c.update}),n=P(e,0,{checked:c.checked}),r=(l={check:c.check,uncheck:c.uncheck,checked:c.checked},i=l.check,s=l.uncheck,d=l.checked,{handleSpace:function(){d.value?s():i()}});var l,i,s,d;return{...c,...n,...a,...r}},render:function(e,t,c,a,n,r){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:e.classList.container,tabindex:c.disabled?-1:0,"aria-checked":e.checked,"aria-describedby":c.describedby,"aria-labelledby":c.labelledby,role:"switch",onKeyup:t[2]||(t[2]=Object(o["withKeys"])((...t)=>e.handleSpace&&e.handleSpace(...t),["space"]))},[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"checkbox",id:c.id,name:c.name,value:c.trueValue,checked:e.checked,disabled:c.disabled},null,8,["id","name","value","checked","disabled"]),[[o["vShow"],!1]]),Object(o["createVNode"])("div",{class:e.classList.toggle,onClick:t[1]||(t[1]=(...t)=>e.handleClick&&e.handleClick(...t))},[Object(o["createVNode"])("span",{class:e.classList.handle},null,2),Object(o["renderSlot"])(e.$slots,"label",{checked:e.checked,classList:e.classList},()=>[Object(o["createVNode"])("span",{class:e.classList.label,innerHTML:e.label},null,10,["innerHTML"])]),c.required?(Object(o["openBlock"])(),Object(o["createBlock"])("input",{key:0,type:"checkbox",style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},checked:e.checked,"aria-hidden":"true",tabindex:"-1",required:""},null,8,["checked"])):Object(o["createCommentVNode"])("v-if",!0)],2)],42,["tabindex","aria-checked","aria-describedby","aria-labelledby"])},__file:"src/Toggle.vue"},A=M,F=c("5502"),U=c("6c02"),E=c("8fba"),H=[],R=Object(o["defineComponent"])({name:"Botos",components:{AdminLayout:k["a"],BotosRowPlaceHolder:T,Toggle:A,BotoModal:E["a"]},setup:function(){var e=Object(F["b"])(),t=Object(U["c"])(),c=null;return t.params.botId&&(c={id:t.params.botId,name:t.params.botName,frequency:t.params.botFrequency}),{store:e,bot:c}},data:function(){return{items:H,isLoadingData:!1,errorText:"",error:!1,activationModal:!1}},mounted:function(){return Object(y["b"])(this,void 0,void 0,(function(){var e,t;return Object(y["c"])(this,(function(c){switch(c.label){case 0:return c.trys.push([0,2,3,4]),this.bot&&(this.activationModal=!0),this.isLoadingData=!0,[4,this.getBotos()];case 1:return e=c.sent(),this.items=e,[3,4];case 2:return t=c.sent(),this.error=!0,this.errorText=t,[3,4];case 3:return this.isLoadingData=!1,[7];case 4:return[2]}}))}))},methods:{getFrequencyWithUnit:function(e){var t=e.json.ux&&e.json.ux.frequencyUnit?e.json.ux.frequencyUnit:"minutes",c="days"===t?e.frequency/24/60:e.frequency;return c+" "+t+"."},closeActivatedBotMessage:function(){this.activationModal=!1},getBotos:function(){return Object(y["b"])(this,void 0,void 0,(function(){var e,t;return Object(y["c"])(this,(function(c){switch(c.label){case 0:return[4,fetch("https://botoapp.io/api/my/bots/",{cache:"no-store",headers:{"Content-Type":"application/json",Authorization:"Token "+this.store.getters.localStorageAuthToken}})];case 1:return e=c.sent(),[4,e.json()];case 2:return t=c.sent(),[2,t]}}))}))},switchBoto:function(e){return Object(y["b"])(this,void 0,void 0,(function(){var t,c,o,a,n,r,l,i;return Object(y["c"])(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),t=this.items[e].status,c=this.items[e].name,o=new Headers,a=new FormData,n="https://botoapp.io/api/bot/"+this.items[e].id+"/",a.append("name",c),a.append("status",t),a.append("frequency",this.items[e].frequency.toString()),r={method:"PUT",headers:o,body:a},o.append("Authorization","Token "+this.store.getters.localStorageAuthToken),[4,fetch(n,r)];case 1:if(l=s.sent(),!l.ok)throw new Error("An error has occured: "+l.status);return[3,3];case 2:return i=s.sent(),console.error(i),[3,3];case 3:return[2]}}))}))},gotoBoto:function(e){_["a"].push({name:"home.editor",params:{id:e}})},copyBoto:function(e){var t=this.items[e];t.copy=!0,t.name=t.name+" copy",this.store.commit("setTemplate",JSON.stringify(t)),_["a"].push({name:"home.editor"})}}});c("e2a7"),c("0e44");R.render=v;t["default"]=R},8872:function(e,t,c){},"8fba":function(e,t,c){"use strict";var o=c("7a23");const a={class:"modal__title"},n={class:"modal__content"},r={class:"modal__action"},l={key:0,class:"fas fa-circle-notch fa-spin"};function i(e,t){const c=Object(o["resolveComponent"])("vue-final-modal");return Object(o["openBlock"])(),Object(o["createBlock"])(c,Object(o["mergeProps"])(e.$attrs,{classes:"modal-container","content-class":"modal-content modal-content-"+e.$attrs.modalSize}),{default:Object(o["withCtx"])(({params:t,close:c})=>[Object(o["createVNode"])("span",a,[Object(o["renderSlot"])(e.$slots,"title")]),Object(o["createVNode"])("div",n,[Object(o["renderSlot"])(e.$slots,"default",{params:t})]),Object(o["createVNode"])("div",r,[e.$attrs.hideCancel?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])("button",{key:0,onClick:t=>e.$emit("cancel",c),class:"boto-button secondary-btn large"},Object(o["toDisplayString"])(e.$attrs.cancelText),9,["onClick"])),e.$attrs.hideConfirm?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])("button",{key:1,onClick:t=>e.$emit("confirm",c),class:["boto-button primary-btn large ml-2",e.$attrs.confirmEnabled?"primary-btn":"btn-secondary"],disabled:!e.$attrs.confirmEnabled},[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$attrs.confirmText)+" ",1),e.$attrs.loading?(Object(o["openBlock"])(),Object(o["createBlock"])("i",l)):Object(o["createCommentVNode"])("",!0)],10,["onClick","disabled"]))])]),_:3},16,["content-class"])}var s=Object(o["defineComponent"])({name:"BotoModal",inheritAttrs:!0,emits:["confirm","cancel"]});c("eb6e");s.render=i;t["a"]=s},9067:function(e,t,c){},e2a7:function(e,t,c){"use strict";c("050c")},eb6e:function(e,t,c){"use strict";c("8872")},edc0:function(e,t,c){"use strict";c("9067")}}]);
//# sourceMappingURL=chunk-bd3438fe-legacy.7baaa0e9.js.map