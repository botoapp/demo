(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ae2b5e3"],{1:function(t,n){},1132:function(t,n,e){(function(n,r){t.exports=r(e("21bf"))})(0,(function(t){return function(){var n=t,e=n.lib,r=e.WordArray,i=n.enc;i.Base64={stringify:function(t){var n=t.words,e=t.sigBytes,r=this._map;t.clamp();for(var i=[],o=0;o<e;o+=3)for(var s=n[o>>>2]>>>24-o%4*8&255,a=n[o+1>>>2]>>>24-(o+1)%4*8&255,c=n[o+2>>>2]>>>24-(o+2)%4*8&255,u=s<<16|a<<8|c,f=0;f<4&&o+.75*f<e;f++)i.push(r.charAt(u>>>6*(3-f)&63));var h=r.charAt(64);if(h)while(i.length%4)i.push(h);return i.join("")},parse:function(t){var n=t.length,e=this._map,r=this._reverseMap;if(!r){r=this._reverseMap=[];for(var i=0;i<e.length;i++)r[e.charCodeAt(i)]=i}var s=e.charAt(64);if(s){var a=t.indexOf(s);-1!==a&&(n=a)}return o(t,n,r)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function o(t,n,e){for(var i=[],o=0,s=0;s<n;s++)if(s%4){var a=e[t.charCodeAt(s-1)]<<s%4*2,c=e[t.charCodeAt(s)]>>>6-s%4*2,u=a|c;i[o>>>2]|=u<<24-o%4*8,o++}return r.create(i,o)}}(),t.enc.Base64}))},"21bf":function(t,n,e){(function(n){(function(n,e){t.exports=e()})(0,(function(){var t=t||function(t,r){var i;if("undefined"!==typeof window&&window.crypto&&(i=window.crypto),"undefined"!==typeof self&&self.crypto&&(i=self.crypto),"undefined"!==typeof globalThis&&globalThis.crypto&&(i=globalThis.crypto),!i&&"undefined"!==typeof window&&window.msCrypto&&(i=window.msCrypto),!i&&"undefined"!==typeof n&&n.crypto&&(i=n.crypto),!i)try{i=e(1)}catch(v){}var o=function(){if(i){if("function"===typeof i.getRandomValues)try{return i.getRandomValues(new Uint32Array(1))[0]}catch(v){}if("function"===typeof i.randomBytes)try{return i.randomBytes(4).readInt32LE()}catch(v){}}throw new Error("Native crypto module could not be used to get secure random number.")},s=Object.create||function(){function t(){}return function(n){var e;return t.prototype=n,e=new t,t.prototype=null,e}}(),a={},c=a.lib={},u=c.Base=function(){return{extend:function(t){var n=s(this);return t&&n.mixIn(t),n.hasOwnProperty("init")&&this.init!==n.init||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),f=c.WordArray=u.extend({init:function(t,n){t=this.words=t||[],this.sigBytes=n!=r?n:4*t.length},toString:function(t){return(t||p).stringify(this)},concat:function(t){var n=this.words,e=t.words,r=this.sigBytes,i=t.sigBytes;if(this.clamp(),r%4)for(var o=0;o<i;o++){var s=e[o>>>2]>>>24-o%4*8&255;n[r+o>>>2]|=s<<24-(r+o)%4*8}else for(var a=0;a<i;a+=4)n[r+a>>>2]=e[a>>>2];return this.sigBytes+=i,this},clamp:function(){var n=this.words,e=this.sigBytes;n[e>>>2]&=4294967295<<32-e%4*8,n.length=t.ceil(e/4)},clone:function(){var t=u.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var n=[],e=0;e<t;e+=4)n.push(o());return new f.init(n,t)}}),h=a.enc={},p=h.Hex={stringify:function(t){for(var n=t.words,e=t.sigBytes,r=[],i=0;i<e;i++){var o=n[i>>>2]>>>24-i%4*8&255;r.push((o>>>4).toString(16)),r.push((15&o).toString(16))}return r.join("")},parse:function(t){for(var n=t.length,e=[],r=0;r<n;r+=2)e[r>>>3]|=parseInt(t.substr(r,2),16)<<24-r%8*4;return new f.init(e,n/2)}},d=h.Latin1={stringify:function(t){for(var n=t.words,e=t.sigBytes,r=[],i=0;i<e;i++){var o=n[i>>>2]>>>24-i%4*8&255;r.push(String.fromCharCode(o))}return r.join("")},parse:function(t){for(var n=t.length,e=[],r=0;r<n;r++)e[r>>>2]|=(255&t.charCodeAt(r))<<24-r%4*8;return new f.init(e,n)}},l=h.Utf8={stringify:function(t){try{return decodeURIComponent(escape(d.stringify(t)))}catch(n){throw new Error("Malformed UTF-8 data")}},parse:function(t){return d.parse(unescape(encodeURIComponent(t)))}},y=c.BufferedBlockAlgorithm=u.extend({reset:function(){this._data=new f.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=l.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(n){var e,r=this._data,i=r.words,o=r.sigBytes,s=this.blockSize,a=4*s,c=o/a;c=n?t.ceil(c):t.max((0|c)-this._minBufferSize,0);var u=c*s,h=t.min(4*u,o);if(u){for(var p=0;p<u;p+=s)this._doProcessBlock(i,p);e=i.splice(0,u),r.sigBytes-=h}return new f.init(e,h)},clone:function(){var t=u.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),w=(c.Hasher=y.extend({cfg:u.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){y.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){t&&this._append(t);var n=this._doFinalize();return n},blockSize:16,_createHelper:function(t){return function(n,e){return new t.init(e).finalize(n)}},_createHmacHelper:function(t){return function(n,e){return new w.HMAC.init(t,e).finalize(n)}}}),a.algo={});return a}(Math);return t}))}).call(this,e("c8ba"))},"625b":function(t,n,e){"use strict";e.r(n);var r=e("7a23");function i(t,n){return Object(r["openBlock"])(),Object(r["createBlock"])("div")}var o=e("9ab4"),s=e("f1e8"),a=e("94f8"),c=e.n(a),u=e("1132"),f=e.n(u),h=e("5502"),p=Object(r["defineComponent"])({name:"Callback",created:function(){return Object(o["b"])(this,void 0,void 0,(function(){var t,n,e,r,i,a,u,p,d,l,y;return Object(o["c"])(this,(function(o){switch(o.label){case 0:return this.$route.query.error?(this.$auth.logout({returnTo:window.location.origin+"/error?error="+encodeURI(this.$route.query.error.toString())+"&error_description="+encodeURI(this.$route.query.error_description.toString())}),[3,9]):[3,1];case 1:t=Object(h["b"])(),n=this.$auth,e=f.a.stringify(c()(n.sub)),r=n.user.value.email,i=new FormData,i.append("username",r),i.append("password",e),a={method:"POST",body:i},o.label=2;case 2:return o.trys.push([2,8,,9]),[4,fetch("https://botoapp.io/auth/users/",a)];case 3:return u=o.sent(),[4,u.json()];case 4:return p=o.sent(),p.username?[4,fetch("https://botoapp.io/auth/token/login",a)]:[3,7];case 5:return d=o.sent(),[4,d.json()];case 6:l=o.sent(),t.commit("setAuthToken",l.auth_token),s["a"].push({path:"dashboard"}),o.label=7;case 7:return[3,9];case 8:return y=o.sent(),console.log("error",y),[3,9];case 9:return[2]}}))}))}});p.render=i;n["default"]=p},"94f8":function(t,n,e){(function(n,r){t.exports=r(e("21bf"))})(0,(function(t){return function(n){var e=t,r=e.lib,i=r.WordArray,o=r.Hasher,s=e.algo,a=[],c=[];(function(){function t(t){for(var e=n.sqrt(t),r=2;r<=e;r++)if(!(t%r))return!1;return!0}function e(t){return 4294967296*(t-(0|t))|0}var r=2,i=0;while(i<64)t(r)&&(i<8&&(a[i]=e(n.pow(r,.5))),c[i]=e(n.pow(r,1/3)),i++),r++})();var u=[],f=s.SHA256=o.extend({_doReset:function(){this._hash=new i.init(a.slice(0))},_doProcessBlock:function(t,n){for(var e=this._hash.words,r=e[0],i=e[1],o=e[2],s=e[3],a=e[4],f=e[5],h=e[6],p=e[7],d=0;d<64;d++){if(d<16)u[d]=0|t[n+d];else{var l=u[d-15],y=(l<<25|l>>>7)^(l<<14|l>>>18)^l>>>3,w=u[d-2],v=(w<<15|w>>>17)^(w<<13|w>>>19)^w>>>10;u[d]=y+u[d-7]+v+u[d-16]}var g=a&f^~a&h,m=r&i^r&o^i&o,_=(r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22),b=(a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25),B=p+b+g+c[d]+u[d],A=_+m;p=h,h=f,f=a,a=s+B|0,s=o,o=i,i=r,r=B+A|0}e[0]=e[0]+r|0,e[1]=e[1]+i|0,e[2]=e[2]+o|0,e[3]=e[3]+s|0,e[4]=e[4]+a|0,e[5]=e[5]+f|0,e[6]=e[6]+h|0,e[7]=e[7]+p|0},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;return e[i>>>5]|=128<<24-i%32,e[14+(i+64>>>9<<4)]=n.floor(r/4294967296),e[15+(i+64>>>9<<4)]=r,t.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var t=o.clone.call(this);return t._hash=this._hash.clone(),t}});e.SHA256=o._createHelper(f),e.HmacSHA256=o._createHmacHelper(f)}(Math),t.SHA256}))}}]);
//# sourceMappingURL=chunk-4ae2b5e3-legacy.d9c602d6.js.map