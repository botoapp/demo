(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ae2b5e3"],{1:function(t,e){},1132:function(t,e,n){(function(e,r){t.exports=r(n("21bf"))})(0,(function(t){return function(){var e=t,n=e.lib,r=n.WordArray,i=e.enc;i.Base64={stringify:function(t){var e=t.words,n=t.sigBytes,r=this._map;t.clamp();for(var i=[],o=0;o<n;o+=3)for(var s=e[o>>>2]>>>24-o%4*8&255,a=e[o+1>>>2]>>>24-(o+1)%4*8&255,c=e[o+2>>>2]>>>24-(o+2)%4*8&255,u=s<<16|a<<8|c,h=0;h<4&&o+.75*h<n;h++)i.push(r.charAt(u>>>6*(3-h)&63));var f=r.charAt(64);if(f)while(i.length%4)i.push(f);return i.join("")},parse:function(t){var e=t.length,n=this._map,r=this._reverseMap;if(!r){r=this._reverseMap=[];for(var i=0;i<n.length;i++)r[n.charCodeAt(i)]=i}var s=n.charAt(64);if(s){var a=t.indexOf(s);-1!==a&&(e=a)}return o(t,e,r)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function o(t,e,n){for(var i=[],o=0,s=0;s<e;s++)if(s%4){var a=n[t.charCodeAt(s-1)]<<s%4*2,c=n[t.charCodeAt(s)]>>>6-s%4*2,u=a|c;i[o>>>2]|=u<<24-o%4*8,o++}return r.create(i,o)}}(),t.enc.Base64}))},"21bf":function(t,e,n){(function(e){(function(e,n){t.exports=n()})(0,(function(){var t=t||function(t,r){var i;if("undefined"!==typeof window&&window.crypto&&(i=window.crypto),"undefined"!==typeof self&&self.crypto&&(i=self.crypto),"undefined"!==typeof globalThis&&globalThis.crypto&&(i=globalThis.crypto),!i&&"undefined"!==typeof window&&window.msCrypto&&(i=window.msCrypto),!i&&"undefined"!==typeof e&&e.crypto&&(i=e.crypto),!i)try{i=n(1)}catch(v){}var o=function(){if(i){if("function"===typeof i.getRandomValues)try{return i.getRandomValues(new Uint32Array(1))[0]}catch(v){}if("function"===typeof i.randomBytes)try{return i.randomBytes(4).readInt32LE()}catch(v){}}throw new Error("Native crypto module could not be used to get secure random number.")},s=Object.create||function(){function t(){}return function(e){var n;return t.prototype=e,n=new t,t.prototype=null,n}}(),a={},c=a.lib={},u=c.Base=function(){return{extend:function(t){var e=s(this);return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),h=c.WordArray=u.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=e!=r?e:4*t.length},toString:function(t){return(t||d).stringify(this)},concat:function(t){var e=this.words,n=t.words,r=this.sigBytes,i=t.sigBytes;if(this.clamp(),r%4)for(var o=0;o<i;o++){var s=n[o>>>2]>>>24-o%4*8&255;e[r+o>>>2]|=s<<24-(r+o)%4*8}else for(var a=0;a<i;a+=4)e[r+a>>>2]=n[a>>>2];return this.sigBytes+=i,this},clamp:function(){var e=this.words,n=this.sigBytes;e[n>>>2]&=4294967295<<32-n%4*8,e.length=t.ceil(n/4)},clone:function(){var t=u.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var e=[],n=0;n<t;n+=4)e.push(o());return new h.init(e,t)}}),f=a.enc={},d=f.Hex={stringify:function(t){for(var e=t.words,n=t.sigBytes,r=[],i=0;i<n;i++){var o=e[i>>>2]>>>24-i%4*8&255;r.push((o>>>4).toString(16)),r.push((15&o).toString(16))}return r.join("")},parse:function(t){for(var e=t.length,n=[],r=0;r<e;r+=2)n[r>>>3]|=parseInt(t.substr(r,2),16)<<24-r%8*4;return new h.init(n,e/2)}},p=f.Latin1={stringify:function(t){for(var e=t.words,n=t.sigBytes,r=[],i=0;i<n;i++){var o=e[i>>>2]>>>24-i%4*8&255;r.push(String.fromCharCode(o))}return r.join("")},parse:function(t){for(var e=t.length,n=[],r=0;r<e;r++)n[r>>>2]|=(255&t.charCodeAt(r))<<24-r%4*8;return new h.init(n,e)}},l=f.Utf8={stringify:function(t){try{return decodeURIComponent(escape(p.stringify(t)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(t){return p.parse(unescape(encodeURIComponent(t)))}},w=c.BufferedBlockAlgorithm=u.extend({reset:function(){this._data=new h.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=l.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var n,r=this._data,i=r.words,o=r.sigBytes,s=this.blockSize,a=4*s,c=o/a;c=e?t.ceil(c):t.max((0|c)-this._minBufferSize,0);var u=c*s,f=t.min(4*u,o);if(u){for(var d=0;d<u;d+=s)this._doProcessBlock(i,d);n=i.splice(0,u),r.sigBytes-=f}return new h.init(n,f)},clone:function(){var t=u.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),y=(c.Hasher=w.extend({cfg:u.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){w.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){t&&this._append(t);var e=this._doFinalize();return e},blockSize:16,_createHelper:function(t){return function(e,n){return new t.init(n).finalize(e)}},_createHmacHelper:function(t){return function(e,n){return new y.HMAC.init(t,n).finalize(e)}}}),a.algo={});return a}(Math);return t}))}).call(this,n("c8ba"))},"625b":function(t,e,n){"use strict";n.r(e);var r=n("7a23");const i={class:"d-flex flex-column min-vh-100 justify-content-center align-items-center"};function o(t,e){return Object(r["openBlock"])(),Object(r["createBlock"])("div",i,[Object(r["createVNode"])("img",{src:t.context+"img/loading.svg"},null,8,["src"])])}var s=n("9ab4"),a=n("f1e8"),c=n("94f8"),u=n.n(c),h=n("1132"),f=n.n(h),d=n("5502"),p=Object(r["defineComponent"])({name:"Callback",data:function(){return{context:"/demo/"}},setup:function(){var t=Object(d["b"])();return{store:t}},methods:{error:function(t,e){Object(d["b"])();this.store.commit("removeToken"),this.$auth.logout({returnTo:window.location.origin+this.context+"error?error="+encodeURI(t)+"&error_description="+encodeURI(e)})},changePassword:function(t,e,n){return Object(s["b"])(this,void 0,void 0,(function(){var r,i,o,a;return Object(s["c"])(this,(function(s){switch(s.label){case 0:return r=new Headers,r.append("Authorization","Token "+n),i=new FormData,i.append("new_password",f.a.stringify(u()(t))),i.append("current_password",f.a.stringify(u()(e))),o={method:"POST",headers:r,body:i},[4,fetch("https://api.boto.io/auth/users/set_password/",o)];case 1:return a=s.sent(),[2,a]}}))}))},login:function(t,e){return Object(s["b"])(this,void 0,void 0,(function(){var n,r,i;return Object(s["c"])(this,(function(o){switch(o.label){case 0:return n=new FormData,n.append("username",t),n.append("password",f.a.stringify(u()(e))),r={method:"POST",body:n},[4,fetch("https://api.boto.io/auth/token/login",r)];case 1:return i=o.sent(),[2,i]}}))}))},newUser:function(t,e){return Object(s["b"])(this,void 0,void 0,(function(){var n,r,i;return Object(s["c"])(this,(function(o){switch(o.label){case 0:return n=new FormData,n.append("username",t),n.append("password",f.a.stringify(u()(e))),r={method:"POST",body:n},[4,fetch("https://api.boto.io/auth/users/",r)];case 1:return i=o.sent(),[2,i]}}))}))}},created:function(){return Object(s["b"])(this,void 0,void 0,(function(){var t,e,n,r,i,o,c,u,h,f,p,l,w,y,v;return Object(s["c"])(this,(function(s){switch(s.label){case 0:return this.$route.query.error?(this.error(this.$route.query.error.toString(),this.$route.query.error_description.toString()),[3,18]):[3,1];case 1:t=Object(d["b"])(),e=t.getters.localStorageTemplate,n=this.$auth,r=n.user.value.sub,i=n.user.value.email,s.label=2;case 2:return s.trys.push([2,17,,18]),[4,this.newUser(i,r)];case 3:return o=s.sent(),[4,o.json()];case 4:return c=s.sent(),c.username?[4,this.login(i,r)]:[3,15];case 5:return u=s.sent(),u.ok?[4,u.json()]:[3,7];case 6:return h=s.sent(),y=e?"editor":"dashboard",t.commit("setAuthToken",h.auth_token),a["a"].push({path:y}),[3,14];case 7:return 400!==u.status?[3,13]:[4,this.login(i,n.sub)];case 8:return f=s.sent(),[4,f.json()];case 9:return p=s.sent(),[4,this.changePassword(n.user.value.sub,n.sub,p.auth_token)];case 10:return s.sent(),[4,this.login(i,n.user.value.sub)];case 11:return l=s.sent(),[4,l.json()];case 12:return w=s.sent(),y=e?"editor":"dashboard",t.commit("setAuthToken",w.auth_token),a["a"].push({path:y}),[3,14];case 13:this.error("There was an error with the request ("+u.status+")",u.statusText),s.label=14;case 14:return[3,16];case 15:this.error("There was an error with the request.","400"),s.label=16;case 16:return[3,18];case 17:return v=s.sent(),this.error("There was an error with the request.",v),[3,18];case 18:return[2]}}))}))}});p.render=o;e["default"]=p},"94f8":function(t,e,n){(function(e,r){t.exports=r(n("21bf"))})(0,(function(t){return function(e){var n=t,r=n.lib,i=r.WordArray,o=r.Hasher,s=n.algo,a=[],c=[];(function(){function t(t){for(var n=e.sqrt(t),r=2;r<=n;r++)if(!(t%r))return!1;return!0}function n(t){return 4294967296*(t-(0|t))|0}var r=2,i=0;while(i<64)t(r)&&(i<8&&(a[i]=n(e.pow(r,.5))),c[i]=n(e.pow(r,1/3)),i++),r++})();var u=[],h=s.SHA256=o.extend({_doReset:function(){this._hash=new i.init(a.slice(0))},_doProcessBlock:function(t,e){for(var n=this._hash.words,r=n[0],i=n[1],o=n[2],s=n[3],a=n[4],h=n[5],f=n[6],d=n[7],p=0;p<64;p++){if(p<16)u[p]=0|t[e+p];else{var l=u[p-15],w=(l<<25|l>>>7)^(l<<14|l>>>18)^l>>>3,y=u[p-2],v=(y<<15|y>>>17)^(y<<13|y>>>19)^y>>>10;u[p]=w+u[p-7]+v+u[p-16]}var g=a&h^~a&f,b=r&i^r&o^i&o,m=(r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22),_=(a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25),B=d+_+g+c[p]+u[p],j=m+b;d=f,f=h,h=a,a=s+B|0,s=o,o=i,i=r,r=B+j|0}n[0]=n[0]+r|0,n[1]=n[1]+i|0,n[2]=n[2]+o|0,n[3]=n[3]+s|0,n[4]=n[4]+a|0,n[5]=n[5]+h|0,n[6]=n[6]+f|0,n[7]=n[7]+d|0},_doFinalize:function(){var t=this._data,n=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;return n[i>>>5]|=128<<24-i%32,n[14+(i+64>>>9<<4)]=e.floor(r/4294967296),n[15+(i+64>>>9<<4)]=r,t.sigBytes=4*n.length,this._process(),this._hash},clone:function(){var t=o.clone.call(this);return t._hash=this._hash.clone(),t}});n.SHA256=o._createHelper(h),n.HmacSHA256=o._createHmacHelper(h)}(Math),t.SHA256}))}}]);
//# sourceMappingURL=chunk-4ae2b5e3-legacy.c48ca74b.js.map