(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ae2b5e3"],{1:function(t,e){},1132:function(t,e,r){(function(e,n){t.exports=n(r("21bf"))})(0,(function(t){return function(){var e=t,r=e.lib,n=r.WordArray,i=e.enc;i.Base64={stringify:function(t){var e=t.words,r=t.sigBytes,n=this._map;t.clamp();for(var i=[],o=0;o<r;o+=3)for(var s=e[o>>>2]>>>24-o%4*8&255,a=e[o+1>>>2]>>>24-(o+1)%4*8&255,c=e[o+2>>>2]>>>24-(o+2)%4*8&255,u=s<<16|a<<8|c,h=0;h<4&&o+.75*h<r;h++)i.push(n.charAt(u>>>6*(3-h)&63));var f=n.charAt(64);if(f)while(i.length%4)i.push(f);return i.join("")},parse:function(t){var e=t.length,r=this._map,n=this._reverseMap;if(!n){n=this._reverseMap=[];for(var i=0;i<r.length;i++)n[r.charCodeAt(i)]=i}var s=r.charAt(64);if(s){var a=t.indexOf(s);-1!==a&&(e=a)}return o(t,e,n)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function o(t,e,r){for(var i=[],o=0,s=0;s<e;s++)if(s%4){var a=r[t.charCodeAt(s-1)]<<s%4*2,c=r[t.charCodeAt(s)]>>>6-s%4*2,u=a|c;i[o>>>2]|=u<<24-o%4*8,o++}return n.create(i,o)}}(),t.enc.Base64}))},"21bf":function(t,e,r){(function(e){(function(e,r){t.exports=r()})(0,(function(){var t=t||function(t,n){var i;if("undefined"!==typeof window&&window.crypto&&(i=window.crypto),"undefined"!==typeof self&&self.crypto&&(i=self.crypto),"undefined"!==typeof globalThis&&globalThis.crypto&&(i=globalThis.crypto),!i&&"undefined"!==typeof window&&window.msCrypto&&(i=window.msCrypto),!i&&"undefined"!==typeof e&&e.crypto&&(i=e.crypto),!i)try{i=r(1)}catch(v){}var o=function(){if(i){if("function"===typeof i.getRandomValues)try{return i.getRandomValues(new Uint32Array(1))[0]}catch(v){}if("function"===typeof i.randomBytes)try{return i.randomBytes(4).readInt32LE()}catch(v){}}throw new Error("Native crypto module could not be used to get secure random number.")},s=Object.create||function(){function t(){}return function(e){var r;return t.prototype=e,r=new t,t.prototype=null,r}}(),a={},c=a.lib={},u=c.Base=function(){return{extend:function(t){var e=s(this);return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),h=c.WordArray=u.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=e!=n?e:4*t.length},toString:function(t){return(t||d).stringify(this)},concat:function(t){var e=this.words,r=t.words,n=this.sigBytes,i=t.sigBytes;if(this.clamp(),n%4)for(var o=0;o<i;o++){var s=r[o>>>2]>>>24-o%4*8&255;e[n+o>>>2]|=s<<24-(n+o)%4*8}else for(var a=0;a<i;a+=4)e[n+a>>>2]=r[a>>>2];return this.sigBytes+=i,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-r%4*8,e.length=t.ceil(r/4)},clone:function(){var t=u.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var e=[],r=0;r<t;r+=4)e.push(o());return new h.init(e,t)}}),f=a.enc={},d=f.Hex={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],i=0;i<r;i++){var o=e[i>>>2]>>>24-i%4*8&255;n.push((o>>>4).toString(16)),n.push((15&o).toString(16))}return n.join("")},parse:function(t){for(var e=t.length,r=[],n=0;n<e;n+=2)r[n>>>3]|=parseInt(t.substr(n,2),16)<<24-n%8*4;return new h.init(r,e/2)}},l=f.Latin1={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],i=0;i<r;i++){var o=e[i>>>2]>>>24-i%4*8&255;n.push(String.fromCharCode(o))}return n.join("")},parse:function(t){for(var e=t.length,r=[],n=0;n<e;n++)r[n>>>2]|=(255&t.charCodeAt(n))<<24-n%4*8;return new h.init(r,e)}},p=f.Utf8={stringify:function(t){try{return decodeURIComponent(escape(l.stringify(t)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(t){return l.parse(unescape(encodeURIComponent(t)))}},w=c.BufferedBlockAlgorithm=u.extend({reset:function(){this._data=new h.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=p.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var r,n=this._data,i=n.words,o=n.sigBytes,s=this.blockSize,a=4*s,c=o/a;c=e?t.ceil(c):t.max((0|c)-this._minBufferSize,0);var u=c*s,f=t.min(4*u,o);if(u){for(var d=0;d<u;d+=s)this._doProcessBlock(i,d);r=i.splice(0,u),n.sigBytes-=f}return new h.init(r,f)},clone:function(){var t=u.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),y=(c.Hasher=w.extend({cfg:u.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){w.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){t&&this._append(t);var e=this._doFinalize();return e},blockSize:16,_createHelper:function(t){return function(e,r){return new t.init(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return new y.HMAC.init(t,r).finalize(e)}}}),a.algo={});return a}(Math);return t}))}).call(this,r("c8ba"))},"625b":function(t,e,r){"use strict";r.r(e);var n=r("7a23"),i={class:"d-flex flex-column min-vh-100 justify-content-center align-items-center"},o=["src"];function s(t,e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",i,[Object(n["createElementVNode"])("img",{src:t.context+"img/loading.svg"},null,8,o)])}var a=r("9ab4"),c=r("f1e8"),u=r("94f8"),h=r.n(u),f=r("1132"),d=r.n(f),l=r("5502"),p=Object(n["defineComponent"])({name:"Callback",data:function(){return{context:"/demo/"}},setup:function(){var t=Object(l["b"])();return{store:t}},methods:{error:function(t,e){Object(l["b"])();this.store.commit("removeToken"),this.$auth.logout({returnTo:window.location.origin+this.context+"error?error="+encodeURI(t)+"&error_description="+encodeURI(e)})},changePassword:function(t,e,r){return Object(a["b"])(this,void 0,void 0,(function(){var n,i,o,s;return Object(a["c"])(this,(function(a){switch(a.label){case 0:return n=new Headers,n.append("Authorization","Token "+r),i=new FormData,i.append("new_password",d.a.stringify(h()(t))),i.append("current_password",d.a.stringify(h()(e))),o={method:"POST",headers:n,body:i},[4,fetch("https://api.boto.io/auth/users/set_password/",o)];case 1:return s=a.sent(),[2,s]}}))}))},login:function(t,e){return Object(a["b"])(this,void 0,void 0,(function(){var r,n,i;return Object(a["c"])(this,(function(o){switch(o.label){case 0:return r=new FormData,r.append("username",t),r.append("password",d.a.stringify(h()(e))),n={method:"POST",body:r},[4,fetch("https://api.boto.io/auth/token/login",n)];case 1:return i=o.sent(),[2,i]}}))}))},newUser:function(t,e){return Object(a["b"])(this,void 0,void 0,(function(){var r,n,i;return Object(a["c"])(this,(function(o){switch(o.label){case 0:return r=new FormData,r.append("username",t),r.append("password",d.a.stringify(h()(e))),n={method:"POST",body:r},[4,fetch("https://api.boto.io/auth/users/",n)];case 1:return i=o.sent(),[2,i]}}))}))}},created:function(){return Object(a["b"])(this,void 0,void 0,(function(){var t,e,r,n,i,o,s,u,h,f,d,p,w,y,v,g;return Object(a["c"])(this,(function(a){switch(a.label){case 0:return this.$route.query.error?(this.error(this.$route.query.error.toString(),this.$route.query.error_description.toString()),[3,18]):[3,1];case 1:t=Object(l["b"])(),e=t.getters.localStorageTemplate,r=this.$auth,n=r.user.value.sub,i=r.user.value.email,a.label=2;case 2:return a.trys.push([2,17,,18]),[4,this.newUser(i,n)];case 3:return o=a.sent(),[4,o.json()];case 4:return s=a.sent(),s.username?[4,this.login(i,n)]:[3,15];case 5:return u=a.sent(),u.ok?[4,u.json()]:[3,7];case 6:return h=a.sent(),y=e?"editor":"dashboard",t.commit("setAuthToken",h.auth_token),c["a"].push({path:y}),[3,14];case 7:return 400!==u.status?[3,13]:[4,this.login(i,r.sub)];case 8:return f=a.sent(),[4,f.json()];case 9:return d=a.sent(),[4,this.changePassword(r.user.value.sub,r.sub,d.auth_token)];case 10:return a.sent(),[4,this.login(i,r.user.value.sub)];case 11:return p=a.sent(),[4,p.json()];case 12:return w=a.sent(),p.ok?(y=e?"editor":"dashboard",t.commit("setAuthToken",w.auth_token),c["a"].push({path:y})):(v=w.non_field_errors[0],this.error("There was an error with the request ("+v+")",v)),[3,14];case 13:this.error("There was an error with the request ("+u.status+")",u.statusText),a.label=14;case 14:return[3,16];case 15:this.error("There was an error with the request.","400"),a.label=16;case 16:return[3,18];case 17:return g=a.sent(),this.error("There was an error with the request.",g),[3,18];case 18:return[2]}}))}))}}),w=r("6b0d"),y=r.n(w);const v=y()(p,[["render",s]]);e["default"]=v},"94f8":function(t,e,r){(function(e,n){t.exports=n(r("21bf"))})(0,(function(t){return function(e){var r=t,n=r.lib,i=n.WordArray,o=n.Hasher,s=r.algo,a=[],c=[];(function(){function t(t){for(var r=e.sqrt(t),n=2;n<=r;n++)if(!(t%n))return!1;return!0}function r(t){return 4294967296*(t-(0|t))|0}var n=2,i=0;while(i<64)t(n)&&(i<8&&(a[i]=r(e.pow(n,.5))),c[i]=r(e.pow(n,1/3)),i++),n++})();var u=[],h=s.SHA256=o.extend({_doReset:function(){this._hash=new i.init(a.slice(0))},_doProcessBlock:function(t,e){for(var r=this._hash.words,n=r[0],i=r[1],o=r[2],s=r[3],a=r[4],h=r[5],f=r[6],d=r[7],l=0;l<64;l++){if(l<16)u[l]=0|t[e+l];else{var p=u[l-15],w=(p<<25|p>>>7)^(p<<14|p>>>18)^p>>>3,y=u[l-2],v=(y<<15|y>>>17)^(y<<13|y>>>19)^y>>>10;u[l]=w+u[l-7]+v+u[l-16]}var g=a&h^~a&f,b=n&i^n&o^i&o,m=(n<<30|n>>>2)^(n<<19|n>>>13)^(n<<10|n>>>22),_=(a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25),B=d+_+g+c[l]+u[l],j=m+b;d=f,f=h,h=a,a=s+B|0,s=o,o=i,i=n,n=B+j|0}r[0]=r[0]+n|0,r[1]=r[1]+i|0,r[2]=r[2]+o|0,r[3]=r[3]+s|0,r[4]=r[4]+a|0,r[5]=r[5]+h|0,r[6]=r[6]+f|0,r[7]=r[7]+d|0},_doFinalize:function(){var t=this._data,r=t.words,n=8*this._nDataBytes,i=8*t.sigBytes;return r[i>>>5]|=128<<24-i%32,r[14+(i+64>>>9<<4)]=e.floor(n/4294967296),r[15+(i+64>>>9<<4)]=n,t.sigBytes=4*r.length,this._process(),this._hash},clone:function(){var t=o.clone.call(this);return t._hash=this._hash.clone(),t}});r.SHA256=o._createHelper(h),r.HmacSHA256=o._createHmacHelper(h)}(Math),t.SHA256}))}}]);
//# sourceMappingURL=chunk-4ae2b5e3.49193e1a.js.map