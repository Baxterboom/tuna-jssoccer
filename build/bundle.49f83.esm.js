!function(t){function e(e){for(var n,r,o=e[0],a=e[1],u=0,c=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&c.push(i[r][0]),i[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);for(s&&s(e);c.length;)c.shift()()}function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={0:0},i={0:0};n.e=function(t){var e=[];o[t]?e.push(o[t]):0!==o[t]&&{2:1,3:1,4:1}[t]&&e.push(o[t]=new Promise((function(e,r){for(var i=({}[t]||t)+".chunk."+{2:"83b87",3:"3da23",4:"709ee"}[t]+".css",a=n.p+i,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=(f=u[c]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(s===i||s===a))return e()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){var f;if((s=(f=l[c]).getAttribute("data-href"))===i||s===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[t],p.parentNode.removeChild(p),r(i)},p.href=a,document.getElementsByTagName("head")[0].appendChild(p)})).then((function(){o[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=a);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=function(t){return n.p+""+({}[t]||t)+".chunk."+{2:"081bd",3:"d71ab",4:"9bf01"}[t]+".esm.js"}(t);var s=new Error;u=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}i[t]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},n.m=t,n.c=r,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n.oe=function(t){throw console.error(t),t};var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var s=u;n(n.s="mdyV")}({"4dxh":function(t,e,n){"use strict";function r(t,e){var n,r,o,i,a=S;for(i=arguments.length;i-- >2;)N.push(arguments[i]);for(e&&null!=e.children&&(N.length||N.push(e.children),delete e.children);N.length;)if((r=N.pop())&&void 0!==r.pop)for(i=r.length;i--;)N.push(r[i]);else"boolean"==typeof r&&(r=null),(o="function"!=typeof t)&&(null==r?r="":"number"==typeof r?r=String(r):"string"!=typeof r&&(o=!1)),o&&n?a[a.length-1]+=r:a===S?a=[r]:a.push(r),n=o;var u=new U;return u.nodeName=t,u.children=a,u.attributes=null==e?void 0:e,u.key=null==e?void 0:e.key,void 0!==j.vnode&&j.vnode(u),u}function o(t,e){for(var n in e)t[n]=e[n];return t}function i(t,e){t&&("function"==typeof t?t(e):t.current=e)}function a(t,e){return r(t.nodeName,o(o({},t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}function u(t){!t._dirty&&(t._dirty=!0)&&1==T.push(t)&&(j.debounceRendering||A)(c)}function c(){for(var t;t=T.pop();)t._dirty&&w(t)}function s(t,e,n){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&l(t,e.nodeName):n||t._componentConstructor===e.nodeName}function l(t,e){return t.normalizedNodeName===e||t.nodeName.toLowerCase()===e.toLowerCase()}function f(t){var e=o({},t.attributes);e.children=t.children;var n=t.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===e[r]&&(e[r]=n[r]);return e}function p(t){var e=t.parentNode;e&&e.removeChild(t)}function d(t,e,n,r,o){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)i(n,null),i(r,t);else if("class"!==e||o)if("style"===e){if(r&&"string"!=typeof r&&"string"!=typeof n||(t.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var a in n)a in r||(t.style[a]="");for(var a in r)t.style[a]="number"==typeof r[a]&&!1===L.test(a)?r[a]+"px":r[a]}}else if("dangerouslySetInnerHTML"===e)r&&(t.innerHTML=r.__html||"");else if("o"==e[0]&&"n"==e[1]){var u=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),r?n||t.addEventListener(e,h,u):t.removeEventListener(e,h,u),(t._listeners||(t._listeners={}))[e]=r}else if("list"!==e&&"type"!==e&&!o&&e in t){try{t[e]=null==r?"":r}catch(t){}null!=r&&!1!==r||"spellcheck"==e||t.removeAttribute(e)}else{var c=o&&e!==(e=e.replace(/^xlink:?/,""));null==r||!1===r?c?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof r&&(c?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),r):t.setAttribute(e,r))}else t.className=r||""}function h(t){return this._listeners[t.type](j.event&&j.event(t)||t)}function v(){for(var t;t=E.shift();)j.afterMount&&j.afterMount(t),t.componentDidMount&&t.componentDidMount()}function m(t,e,n,r,o,i){R++||(M=null!=o&&void 0!==o.ownerSVGElement,I=null!=t&&!("__preactattr_"in t));var a=function t(e,n,r,o,i){var a=e,u=M;if(null!=n&&"boolean"!=typeof n||(n=""),"string"==typeof n||"number"==typeof n)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||i)?e.nodeValue!=n&&(e.nodeValue=n):(a=document.createTextNode(n),e&&(e.parentNode&&e.parentNode.replaceChild(a,e),b(e,!0))),a.__preactattr_=!0,a;var c,h,v=n.nodeName;if("function"==typeof v)return function(t,e,n,r){for(var o=t&&t._component,i=o,a=t,u=o&&t._componentConstructor===e.nodeName,c=u,s=f(e);o&&!c&&(o=o._parentComponent);)c=o.constructor===e.nodeName;return o&&c&&(!r||o._component)?(C(o,s,3,n,r),t=o.base):(i&&!u&&(x(i),t=a=null),o=g(e.nodeName,s,n),t&&!o.nextBase&&(o.nextBase=t,a=null),C(o,s,1,n,r),t=o.base,a&&t!==a&&(a._component=null,b(a,!1))),t}(e,n,r,o);if(M="svg"===v||"foreignObject"!==v&&M,v=String(v),(!e||!l(e,v))&&(c=v,(h=M?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c)).normalizedNodeName=c,a=h,e)){for(;e.firstChild;)a.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(a,e),b(e,!0)}var m=a.firstChild,y=a.__preactattr_,_=n.children;if(null==y){y=a.__preactattr_={};for(var w=a.attributes,O=w.length;O--;)y[w[O].name]=w[O].value}return!I&&_&&1===_.length&&"string"==typeof _[0]&&null!=m&&void 0!==m.splitText&&null==m.nextSibling?m.nodeValue!=_[0]&&(m.nodeValue=_[0]):(_&&_.length||null!=m)&&function(e,n,r,o,i){var a,u,c,l,f,d=e.childNodes,h=[],v={},m=0,y=0,g=d.length,_=0,C=n?n.length:0;if(0!==g)for(var w=0;w<g;w++){var x=d[w],O=x.__preactattr_;null!=(k=C&&O?x._component?x._component.__key:O.key:null)?(m++,v[k]=x):(O||(void 0!==x.splitText?!i||x.nodeValue.trim():i))&&(h[_++]=x)}if(0!==C)for(w=0;w<C;w++){var k;if(f=null,null!=(k=(l=n[w]).key))m&&void 0!==v[k]&&(f=v[k],v[k]=void 0,m--);else if(y<_)for(a=y;a<_;a++)if(void 0!==h[a]&&s(u=h[a],l,i)){f=u,h[a]=void 0,a===_-1&&_--,a===y&&y++;break}f=t(f,l,r,o),c=d[w],f&&f!==e&&f!==c&&(null==c?e.appendChild(f):f===c.nextSibling?p(c):e.insertBefore(f,c))}if(m)for(var w in v)void 0!==v[w]&&b(v[w],!1);for(;y<=_;)void 0!==(f=h[_--])&&b(f,!1)}(a,_,r,o,I||null!=y.dangerouslySetInnerHTML),function(t,e,n){var r;for(r in n)e&&null!=e[r]||null==n[r]||d(t,r,n[r],n[r]=void 0,M);for(r in e)"children"===r||"innerHTML"===r||r in n&&e[r]===("value"===r||"checked"===r?t[r]:n[r])||d(t,r,n[r],n[r]=e[r],M)}(a,n.attributes,y),M=u,a}(t,e,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--R||(I=!1,i||v()),a}function b(t,e){var n=t._component;n?x(n):(null!=t.__preactattr_&&i(t.__preactattr_.ref,null),!1!==e&&null!=t.__preactattr_||p(t),y(t))}function y(t){for(t=t.lastChild;t;){var e=t.previousSibling;b(t,!0),t=e}}function g(t,e,n){var r,o=B.length;for(t.prototype&&t.prototype.render?(r=new t(e,n),O.call(r,e,n)):((r=new O(e,n)).constructor=t,r.render=_);o--;)if(B[o].constructor===t)return r.nextBase=B[o].nextBase,B.splice(o,1),r;return r}function _(t,e,n){return this.constructor(t,n)}function C(t,e,n,r,o){t._disable||(t._disable=!0,t.__ref=e.ref,t.__key=e.key,delete e.ref,delete e.key,void 0===t.constructor.getDerivedStateFromProps&&(!t.base||o?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,r)),r&&r!==t.context&&(t.prevContext||(t.prevContext=t.context),t.context=r),t.prevProps||(t.prevProps=t.props),t.props=e,t._disable=!1,0!==n&&(1!==n&&!1===j.syncComponentUpdates&&t.base?u(t):w(t,1,o)),i(t.__ref,t))}function w(t,e,n,r){if(!t._disable){var i,a,u,c=t.props,s=t.state,l=t.context,p=t.prevProps||c,d=t.prevState||s,h=t.prevContext||l,y=t.base,_=t.nextBase,O=y||_,k=t._component,P=!1,U=h;if(t.constructor.getDerivedStateFromProps&&(s=o(o({},s),t.constructor.getDerivedStateFromProps(c,s)),t.state=s),y&&(t.props=p,t.state=d,t.context=h,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(c,s,l)?P=!0:t.componentWillUpdate&&t.componentWillUpdate(c,s,l),t.props=c,t.state=s,t.context=l),t.prevProps=t.prevState=t.prevContext=t.nextBase=null,t._dirty=!1,!P){i=t.render(c,s,l),t.getChildContext&&(l=o(o({},l),t.getChildContext())),y&&t.getSnapshotBeforeUpdate&&(U=t.getSnapshotBeforeUpdate(p,d));var N,S,A=i&&i.nodeName;if("function"==typeof A){var L=f(i);(a=k)&&a.constructor===A&&L.key==a.__key?C(a,L,1,l,!1):(N=a,t._component=a=g(A,L,l),a.nextBase=a.nextBase||_,a._parentComponent=t,C(a,L,0,l,!1),w(a,1,n,!0)),S=a.base}else u=O,(N=k)&&(u=t._component=null),(O||1===e)&&(u&&(u._component=null),S=m(u,i,l,n||!y,O&&O.parentNode,!0));if(O&&S!==O&&a!==k){var T=O.parentNode;T&&S!==T&&(T.replaceChild(S,O),N||(O._component=null,b(O,!1)))}if(N&&x(N),t.base=S,S&&!r){for(var M=t,I=t;I=I._parentComponent;)(M=I).base=S;S._component=M,S._componentConstructor=M.constructor}}for(!y||n?E.push(t):P||(t.componentDidUpdate&&t.componentDidUpdate(p,d,U),j.afterUpdate&&j.afterUpdate(t));t._renderCallbacks.length;)t._renderCallbacks.pop().call(t);R||r||v()}}function x(t){j.beforeUnmount&&j.beforeUnmount(t);var e=t.base;t._disable=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?x(n):e&&(null!=e.__preactattr_&&i(e.__preactattr_.ref,null),t.nextBase=e,p(e),B.push(t),y(e)),i(t.__ref,null)}function O(t,e){this._dirty=!0,this.context=e,this.props=t,this.state=this.state||{},this._renderCallbacks=[]}function k(t,e,n){return m(n,t,{},!1,e,!1)}function P(){return{}}n.r(e),n.d(e,"h",(function(){return r})),n.d(e,"createElement",(function(){return r})),n.d(e,"cloneElement",(function(){return a})),n.d(e,"createRef",(function(){return P})),n.d(e,"Component",(function(){return O})),n.d(e,"render",(function(){return k})),n.d(e,"rerender",(function(){return c})),n.d(e,"options",(function(){return j}));var U=function(){},j={},N=[],S=[],A="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,L=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,T=[],E=[],R=0,M=!1,I=!1,B=[];o(O.prototype,{setState:function(t,e){this.prevState||(this.prevState=this.state),this.state=o(o({},this.state),"function"==typeof t?t(this.state,this.props):t),e&&this._renderCallbacks.push(e),u(this)},forceUpdate:function(t){t&&this._renderCallbacks.push(t),w(this,2)},render:function(){}}),e.default={h:r,createElement:r,cloneElement:a,createRef:P,Component:O,render:k,rerender:c,options:j}},GFNa:function(){},QfWi:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function o(t){return"/"===t.charAt(0)}function i(t,e){for(var n=e,r=n+1,o=t.length;r<o;n+=1,r+=1)t[n]=t[r];t.pop()}function a(t){return"/"===t.charAt(0)?t:"/"+t}function u(t){return"/"===t.charAt(0)?t.substr(1):t}function c(t){var e=t.search,n=t.hash,r=t.pathname||"/";return e&&"?"!==e&&(r+="?"===e.charAt(0)?e:"?"+e),n&&"#"!==n&&(r+="#"===n.charAt(0)?n:"#"+n),r}function s(t,e,n,o){var i;"string"==typeof t?(i=function(t){var e=t||"/",n="",r="",o=e.indexOf("#");-1!==o&&(r=e.substr(o),e=e.substr(0,o));var i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}}(t)).state=e:(void 0===(i=r({},t)).pathname&&(i.pathname=""),i.search?"?"!==i.search.charAt(0)&&(i.search="?"+i.search):i.search="",i.hash?"#"!==i.hash.charAt(0)&&(i.hash="#"+i.hash):i.hash="",void 0!==e&&void 0===i.state&&(i.state=e));try{i.pathname=decodeURI(i.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return n&&(i.key=n),o?i.pathname?"/"!==i.pathname.charAt(0)&&(i.pathname=v(i.pathname,o.pathname)):i.pathname=o.pathname:i.pathname||(i.pathname="/"),i}function l(t,e){e(window.confirm(t))}function f(t){var e=t.indexOf("#");return-1===e?t:t.slice(0,e)}function p(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)}function d(t){window.location.replace(f(window.location.href)+"#"+t)}function h(t){function e(){var t=k(p());return w&&(t=function(t,e){return function(t,e){return 0===t.toLowerCase().indexOf(e.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(e.length))}(t,e)?t.substr(e.length):t}(t,w)),s(t)}function n(t){r(R,t),R.length=h.length,P.notifyListeners(R.location,R.action)}function o(){var t,r,o=p(),a=O(o);if(o!==a)d(a);else{var u=e();if(!U&&(t=R.location).pathname===(r=u).pathname&&t.search===r.search&&t.hash===r.hash)return;if(j===c(u))return;j=null,function(t){U?(U=!1,n()):P.confirmTransitionTo(t,"POP",g,(function(e){e?n({action:"POP",location:t}):function(t){var e=L.lastIndexOf(c(R.location));-1===e&&(e=0);var n=L.lastIndexOf(c(t));-1===n&&(n=0);var r=e-n;r&&(U=!0,i(r))}(t)}))}(u)}}function i(t){h.go(t)}function u(t){1===(T+=t)&&1===t?window.addEventListener("hashchange",o):0===T&&window.removeEventListener("hashchange",o)}void 0===t&&(t={}),b||m(!1);var h=window.history,v=(window.navigator.userAgent.indexOf("Firefox"),t.getUserConfirmation),g=void 0===v?l:v,_=t.hashType,C=void 0===_?"slash":_,w=t.basename?function(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}(a(t.basename)):"",x=y[C],O=x.encodePath,k=x.decodePath,P=function(){var t=null,e=[];return{setPrompt:function(e){return t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,r,o){if(null!=t){var i="function"==typeof t?t(e,n):t;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(t){function n(){r&&t.apply(void 0,arguments)}var r=!0;return e.push(n),function(){r=!1,e=e.filter((function(t){return t!==n}))}},notifyListeners:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];e.forEach((function(t){return t.apply(void 0,n)}))}}}(),U=!1,j=null,N=p(),S=O(N);N!==S&&d(S);var A=e(),L=[c(A)],T=0,E=!1,R={length:h.length,action:"POP",location:A,createHref:function(t){var e=document.querySelector("base"),n="";return e&&e.getAttribute("href")&&(n=f(window.location.href)),n+"#"+O(w+c(t))},push:function(t){var e=s(t,void 0,void 0,R.location);P.confirmTransitionTo(e,"PUSH",g,(function(t){if(t){var r=c(e),o=O(w+r);if(p()!==o){j=r,function(t){window.location.hash=t}(o);var i=L.lastIndexOf(c(R.location)),a=L.slice(0,i+1);a.push(r),L=a,n({action:"PUSH",location:e})}else n()}}))},replace:function(t){var e=s(t,void 0,void 0,R.location);P.confirmTransitionTo(e,"REPLACE",g,(function(t){if(t){var r=c(e),o=O(w+r);p()!==o&&(j=r,d(o));var i=L.indexOf(c(R.location));-1!==i&&(L[i]=r),n({action:"REPLACE",location:e})}}))},go:i,goBack:function(){i(-1)},goForward:function(){i(1)},block:function(t){void 0===t&&(t=!1);var e=P.setPrompt(t);return E||(u(1),E=!0),function(){return E&&(E=!1,u(-1)),e()}},listen:function(t){var e=P.appendListener(t);return u(1),function(){u(-1),e()}}};return R}n.r(e),n("GFNa");var v=function(t,e){void 0===e&&(e="");var n,r=t&&t.split("/")||[],a=e&&e.split("/")||[],u=t&&o(t),c=e&&o(e),s=u||c;if(t&&o(t)?a=r:r.length&&(a.pop(),a=a.concat(r)),!a.length)return"/";if(a.length){var l=a[a.length-1];n="."===l||".."===l||""===l}else n=!1;for(var f=0,p=a.length;p>=0;p--){var d=a[p];"."===d?i(a,p):".."===d?(i(a,p),f++):f&&(i(a,p),f--)}if(!s)for(;f--;f)a.unshift("..");!s||""===a[0]||a[0]&&o(a[0])||a.unshift("");var h=a.join("/");return n&&"/"!==h.substr(-1)&&(h+="/"),h},m=function(t){if(!t)throw new Error("Invariant failed")},b=!("undefined"==typeof window||!window.document||!window.document.createElement),y={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+u(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:u,decodePath:a},slash:{encodePath:a,decodePath:a}},g=n("4dxh"),_=n("Y3FI"),C=function(t){function e(){let e,n;g.Component.call(this),this.componentWillMount=()=>{e=this.base=this.nextBase||this.__b,t(t=>{this.setState({child:t.default||t})})},this.shouldComponentUpdate=(t,r)=>(n=(r=void 0===r.child)&&void 0===n&&e?3===e.nodeType?e.data:Object(g.h)(e.nodeName,{dangerouslySetInnerHTML:{__html:e.innerHTML}}):"",!r),this.render=(t,e)=>e.child?Object(g.h)(e.child,t):n}return(e.prototype=new g.Component).constructor=e,e},w=C((function(t){n.e(2).then(function(){t(n("KXrs"))}.bind(null,n)).catch(n.oe)})),x=C((function(t){n.e(3).then(function(){t(n("FDtd"))}.bind(null,n)).catch(n.oe)})),O=C((function(t){n.e(4).then(function(){t(n("Myht"))}.bind(null,n)).catch(n.oe)})),k=n("ox/y"),P=n("ySiU");class U extends g.Component{render(){return Object(g.h)("header",{class:P.header},Object(g.h)("h1",null,"ÄFF - F12"),Object(g.h)("nav",null,Object(g.h)(k.Link,{activeClassName:P.active,href:"/"},"Home"),Object(g.h)(k.Link,{activeClassName:P.active,href:"/game/bnVsbDtudWxsfG51bGw7bnVsbHxudWxsfG51bGw7bnVsbA=="},"Game")))}}e.default=class extends g.Component{constructor(...t){super(...t),this.currentUrl=void 0,this.handleRoute=t=>{this.currentUrl=t.url}}render(){return Object(g.h)("div",{id:"app"},Object(g.h)(U,null),Object(g.h)(_.Router,{onChange:this.handleRoute,history:h()},Object(g.h)(_.Route,{path:"/",component:x}),Object(g.h)(_.Route,{path:"/game/",component:w,lineup:"0:0;0:0,0:0;0:0,0:0,0:0;0:0"}),Object(g.h)(_.Route,{path:"/game/:lineup",component:w}),Object(g.h)(_.Route,{path:"/profile/",component:O,user:"me"}),Object(g.h)(_.Route,{path:"/profile/:user",component:O})))}}},Y3FI:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function i(t,e){return t.index=e,t.rank=function(t){return t.attributes.default?0:a(t.attributes.path).map(u).join("")}(t),t.attributes}function a(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function u(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function c(){var t;return""+((t=b&&b.location?b.location:b&&b.getCurrentLocation?b.getCurrentLocation():"undefined"!=typeof location?location:_).pathname||"")+(t.search||"")}function s(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=y.length;e--;)if(y[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),b&&b[e]?b[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),l(t)}function l(t){for(var e=!1,n=0;n<y.length;n++)!0===y[n].routeTo(t)&&(e=!0);for(var r=g.length;r--;)g[r](t);return e}function f(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return s(e)}}function p(t){if(0==t.button)return f(t.currentTarget||t.target||this),d(t)}function d(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function h(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e,n=t.target;do{if("A"===String(n.nodeName).toUpperCase()&&n.getAttribute("href")&&(null!=(e=n).__preactattr_||"undefined"!=typeof Symbol&&null!=e[Symbol.for("preactattr")])){if(n.hasAttribute("native"))return;if(f(n))return d(t)}}while(n=n.parentNode)}}n.r(e),n.d(e,"subscribers",(function(){return g})),n.d(e,"getCurrentUrl",(function(){return c})),n.d(e,"route",(function(){return s})),n.d(e,"Router",(function(){return w})),n.d(e,"Route",(function(){return O})),n.d(e,"Link",(function(){return x}));var v=n("4dxh"),m={},b=null,y=[],g=[],_={},C=!1,w=function(t){function e(e){t.call(this,e),e.history&&(b=e.history),this.state={url:e.url||c()},C||("function"==typeof addEventListener&&(b||addEventListener("popstate",(function(){l(c())})),addEventListener("click",h)),C=!0)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||t.url!==this.props.url||t.onChange!==this.props.onChange},e.prototype.canRoute=function(t){return this.getMatchingChildren(this.props.children,t,!1).length>0},e.prototype.routeTo=function(t){return this._didRoute=!1,this.setState({url:t}),this.updating?this.canRoute(t):(this.forceUpdate(),this._didRoute)},e.prototype.componentWillMount=function(){y.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;b&&(this.unlisten=b.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),y.splice(y.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(i).sort(o).map((function(t){var o=function(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),u={};if(i&&i[1])for(var c=i[1].split("&"),s=0;s<c.length;s++){var l=c[s].split("=");u[decodeURIComponent(l[0])]=decodeURIComponent(l.slice(1).join("="))}t=a(t.replace(o,"")),e=a(e||"");for(var f=Math.max(t.length,e.length),p=0;p<f;p++)if(e[p]&&":"===e[p].charAt(0)){var d=e[p].replace(/(^\:|[+*?]+$)/g,""),h=(e[p].match(/[+*?]+$/)||m)[0]||"",v=~h.indexOf("+"),b=~h.indexOf("*"),y=t[p]||"";if(!y&&!b&&(h.indexOf("?")<0||v)){r=!1;break}if(u[d]=decodeURIComponent(y),v||b){u[d]=t.slice(p).map(decodeURIComponent).join("/");break}}else if(e[p]!==t[p]){r=!1;break}return(!0===n.default||!1!==r)&&u}(e,t.attributes.path,t.attributes);if(o){if(!1!==n){var i={url:e,matches:o};return r(i,o),delete i.ref,delete i.key,Object(v.cloneElement)(t,i)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.onChange,r=e.url,o=this.getMatchingChildren(t.children,r,!0),i=o[0]||null;this._didRoute=!!i;var a=this.previousUrl;return r!==a&&(this.previousUrl=r,"function"==typeof n&&n({router:this,url:r,previous:a,active:o,current:i})),i},e}(v.Component),x=function(t){return Object(v.h)("a",r({onClick:p},t))},O=function(t){return Object(v.h)(t.component,t)};w.subscribers=g,w.getCurrentUrl=c,w.route=s,w.Router=w,w.Route=O,w.Link=x,e.default=w},mdyV:function(t,e,n){"use strict";n.r(e);var r=n("4dxh");const{h:o,render:i}=r,a=t=>t&&t.default?t.default:t;if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw-esm.js"),"function"==typeof a(n("QfWi"))){let t=document.getElementById("preact_root")||document.body.firstElementChild;(()=>{let e=a(n("QfWi")),r={};const u=document.querySelector('[type="__PREACT_CLI_DATA__"]');u&&(r=JSON.parse(u.innerHTML).preRenderData||r),t=i(o(e,{CLI_DATA:{preRenderData:r}}),document.body,t)})()}},"ox/y":function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n("4dxh"),a=n("Y3FI"),u=e.Match=function(t){function e(){for(var e,n,o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return e=n=r(this,t.call.apply(t,[this].concat(i))),n.update=function(t){n.nextUrl=t,n.setState({})},r(n,e)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){a.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){a.subscribers.splice(a.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,a.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children[0]&&t.children[0]({url:e,path:n,matches:n===t.path})},e}(i.Component),c=function(t){var e=t.activeClassName,n=t.path,r=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,i.h)(u,{path:n||r.href},(function(t){return(0,i.h)(a.Link,o({},r,{class:[r.class||r.className,t.matches&&e].filter(Boolean).join(" ")}))}))};e.Link=c,e.default=u,u.Link=c},ySiU:function(t){t.exports={header:"_2MqSoAqABLziUEDU41Wy5t",active:"_27Q54JLf3jYcp0_0xGpQJP"}}});
//# sourceMappingURL=bundle.49f83.esm.js.map