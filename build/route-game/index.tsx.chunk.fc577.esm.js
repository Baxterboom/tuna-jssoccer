(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{BYag:function(e){e.exports={"action-menu":"action-menu__2Ghxs",actionMenu:"action-menu__2Ghxs",button:"button__1TZj6",items:"items__2TWJF",show:"show__2kEoS"}},DtED:function(e,t,n){"use strict";var a=n("MAaF");e.exports=function(e,t,n){e&&a(function(){e.apply(n||null,t||[])})}},Gkjj:function(e,t,n){(function(t){var n=t.CustomEvent;e.exports=function(){try{var e=new n("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?n:"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(this,n("pCvA"))},"K/8s":function(e){"use strict";function t(e){var t=n[e];return t?t.lastIndex=0:n[e]=t=new RegExp(a+e+r,"g"),t}var n={},a="(?:^|\\s)",r="(?:\\s|$)";e.exports={add:function(e,n){var a=e.className;a.length?t(n).test(a)||(e.className+=" "+n):e.className=n},rm:function(e,n){e.className=e.className.replace(t(n)," ").trim()}}},KXrs:function(e,t,n){"use strict";function a(e,t){const n=t=>{const n=e();n&&n.contains(t.target)||a()},a=()=>{document.removeEventListener("click",n),t()};return setTimeout(()=>document.addEventListener("click",n)),a}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){o(e,t,n[t])})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t);var l=n("4dxh"),m=n("BYag");class c extends l.Component{constructor(){var e,t,n;super(...arguments),n=void 0,(t="element")in(e=this)?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}close(){this.setState({show:!1})}toggle(){this.setState({show:!this.state.show})}callback(e,t){t.onClick&&t.onClick(e,t),this.close()}isOverflowing(){return this.element.scrollHeight>this.element.clientHeight||this.element.scrollWidth>this.element.clientWidth}render(e,t){const n=JSLinq(e.options.items).Select(e=>Object(l.h)("li",{onClick:t=>this.callback(t,e)},e.text)),r=[m.items];return t.show&&(r.push(m.show),a(()=>this.element,this.close.bind(this))),Object(l.h)("div",{class:m.actionMenu,ref:e=>this.element=e},Object(l.h)("div",{class:m.button,onClick:this.toggle.bind(this)}),Object(l.h)("ul",{class:r.join(" ")},n))}}var p=n("iFcc"),u=n("t4lu");class d extends l.Component{constructor(){super(...arguments),o(this,"state",{actionMenu:{title:"A title",items:[]}})}componentWillMount(){this.state.actionMenu.items.AddRange([{text:"Add player",onClick:this.addPlayer.bind(this,void 0)},{text:"Add line",onClick:this.addLine.bind(this)},{text:"Remove line",onClick:this.removeLine.bind(this)}])}addPlayer(e){this.props.data.players.Add(e||r({},p.a.Empty,{line:this.props.data})),this.setState(this.state)}removePlayer(e){this.props.data.players.Remove(e),this.setState(this.state)}addLine(){const e=this.props.data.match,t={players:[],match:e};t.players.push(r({},p.a.Empty,{line:t})),e.lines.Insert(t,e.lines.indexOf(this.props.data)+1),e.update()}removeLine(){const e=this.props.data.match;e.lines.Remove(this.props.data),e.update()}render(e,t){let n=0;const a=e.data.players.map(e=>Object(l.h)(p.a,{key:n++,data:e}));return Object(l.h)("div",{class:["line",u.line].join(" ")},Object(l.h)(c,{options:t.actionMenu}),Object(l.h)("div",{class:["players",u.players].join(" ")},a))}}var f=n("W8JN"),h=n("abVj");class v extends l.Component{render(e,t){const n=["#808080","#845b41","#484f4f"].Select(t=>Object(l.h)("li",{style:{background:t},onClick:e.options.onClick.bind(this,t)}));return Object(l.h)("ul",{class:h.colorPicker},n)}}var g=n("mLX3");class b extends l.Component{constructor(){super(...arguments),s(this,"element",void 0),s(this,"state",{players:[]})}componentWillMount(){const e=g.a.Players().Select(e=>p.a.Map(e)).OrderBy(e=>e.displayname);this.state.players.AddRange(e)}render(e,t){const n=e.match.playerListEventArgs,r=[f.playerList];if(!n.event)return Object(l.h)("ul",{class:r.join(" ")});r.push(f.show),a(()=>this.element,this.close.bind(this));const o=e.match.lines.SelectMany(e=>e.players),s=n.selected.number+"|"+n.selected.displayname,i=t.players.map(e=>{const t=o.Any(t=>t.id==e.id)?f.selected:"";return Object(l.h)("li",{class:t,onClick:this.onSelectPlayer.bind(this,e)},Object(l.h)("span",null,e.displayname))});return Object(l.h)("ul",{class:r.join(" "),ref:e=>this.element=e},Object(l.h)("li",{class:f.player},Object(l.h)("div",{class:f.playerName},Object(l.h)("input",{type:"text",placeholder:"Enter name",value:s,onInput:this.setText.bind(this)}),Object(l.h)("button",{onClick:this.onRemoveSelectPlayer.bind(this)},"Remove")),Object(l.h)("div",{class:f.playerGoals},Object(l.h)("span",null,"Score: ",n.selected.goals||0),Object(l.h)("button",{onClick:this.score.bind(this,n.selected,-1)},"-"),Object(l.h)("button",{onClick:this.score.bind(this,n.selected,1)},"+"))),Object(l.h)("li",{class:f.playerColor},Object(l.h)(v,{options:{onClick:this.setColor.bind(this)}})),i)}score(e,t){e.goals+=t,this.props.match.update()}close(){this.props.match.playerListEventArgs={},this.props.match.update()}setText(e){const t=e.target.value.split("|"),n=this.props.match.playerListEventArgs;n.selected.number=t.length<2?"":t.FirstOrDefault(),n.selected.displayname=t.LastOrDefault(),this.props.match.update()}setColor(e){this.props.match.playerListEventArgs.selected.color=e,this.props.match.update(),this.close()}onSelectPlayer(e){const t=this.props.match.playerListEventArgs.selected;if(!t||!t.line)return;const n=e.line=t.line,a=n.players.indexOf(t);n.players[a]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){s(e,t,n[t])})}return e}({},e),this.close()}onRemoveSelectPlayer(){const e=this.props.match.playerListEventArgs.selected;e&&e.line&&(e.line.players.Remove(e),this.close())}}var k=n("sxGq"),S=n("uDKj"),y=n("kOkB"),M=n.n(y),O=n("Y3FI");n.d(t,"default",function(){return E});class E extends l.Component{constructor(){super(...arguments),i(this,"drake",void 0),i(this,"state",{match:new k.a(this.update.bind(this))})}update(){this.setState(this.state,()=>{Object(O.route)("/game/"+this.state.match.toString())})}componentWillMount(){const e=this.state.match;e.lines=e.lineup(this.props.lineup,e)}componentDidUpdate(){this.drake&&this.drake.destroy();const e=[].slice.call(document.querySelectorAll(".players"));this.drake=M()(e,{copySortSource:!0}),this.drake.on("drop",(e,t,n,a)=>{const r=$(e).prop("_component").props.data,o=$(t).closest(".line").prop("_component").props.data;$(n).closest(".line").prop("_component").props.data.players.Remove(r),o.players.Insert(r,$(a).index()-1||0),r.line=o})}componentWillUnmount(){this.drake&&this.drake.destroy()}render(e,t){const n=t.match.lines.map((e,t)=>Object(l.h)(d,{key:t,data:e}));return Object(l.h)("div",{class:[S.main].join(" ")},Object(l.h)("div",{id:"print-sheet",class:S.printSheet},this.state.match.print()),Object(l.h)("div",{class:[S.pitch].join(" ")},n),Object(l.h)(b,{match:t.match}),Object(l.h)("img",{class:S.btnReload,src:"assets/img/refresh_48px.svg",onClick:this.randomizeLineUp.bind(this),title:"New line up"}),Object(l.h)("img",{class:S.btnPrint,src:"assets/img/print.svg",onClick:this.print.bind(this),title:"Print"}))}print(){$("#print-sheet").toggle()}randomizeLineUp(){this.state.match.lines.Clear();const e=g.a.Players();this.props.lineup.split(";").ForEach(t=>{let n=t.split(",").Select(e=>e[1]).Count();n>e.length&&(n=e.length);const a={match:this.state.match,players:new Array(n)};a.players.ForEach((t,n)=>{const r=Math.floor(Math.random()*e.length),o=e[r];e.Remove(o),a.players[n]=p.a.Map(o,{line:a,goals:0})}),this.state.match.lines.Add(a)}),this.update()}}},MAaF:function(e){var t="function"==typeof setImmediate;e.exports=t?function(e){setImmediate(e)}:function(e){setTimeout(e,0)}},R5Bz:function(e,t,n){"use strict";(function(t){function a(e,t,n){var a=function(e,t,n){var a,r;for(a=0;a<m.length;a++)if((r=m[a]).element===e&&r.type===t&&r.fn===n)return a}(e,t,n);if(a){var r=m[a].wrapper;return m.splice(a,1),r}}var r=n("Gkjj"),o=n("rXEU"),s=t.document,i=function(e,t,n,a){return e.addEventListener(t,n,a)},l=function(e,t,n,a){return e.removeEventListener(t,n,a)},m=[];t.addEventListener||(i=function(e,n,r){return e.attachEvent("on"+n,function(e,n,r){var o=a(e,n,r)||function(e,n,a){return function(n){var r=n||t.event;r.target=r.target||r.srcElement,r.preventDefault=r.preventDefault||function(){r.returnValue=!1},r.stopPropagation=r.stopPropagation||function(){r.cancelBubble=!0},r.which=r.which||r.keyCode,a.call(e,r)}}(e,0,r);return m.push({wrapper:o,element:e,type:n,fn:r}),o}(e,n,r))},l=function(e,t,n){var r=a(e,t,n);if(r)return e.detachEvent("on"+t,r)}),e.exports={add:i,remove:l,fabricate:function(e,t,n){var a=-1===o.indexOf(t)?new r(t,{detail:n}):function(){var e;return s.createEvent?(e=s.createEvent("Event")).initEvent(t,!0,!0):s.createEventObject&&(e=s.createEventObject()),e}();e.dispatchEvent?e.dispatchEvent(a):e.fireEvent("on"+t,a)}}}).call(this,n("pCvA"))},ReCf:function(e,t,n){"use strict";var a=n("ngLP"),r=n("DtED");e.exports=function(e,t){var n=t||{},o={};return void 0===e&&(e={}),e.on=function(t,n){return o[t]?o[t].push(n):o[t]=[n],e},e.once=function(t,n){return n._once=!0,e.on(t,n),e},e.off=function(t,n){var a=arguments.length;if(1===a)delete o[t];else if(0===a)o={};else{var r=o[t];if(!r)return e;r.splice(r.indexOf(n),1)}return e},e.emit=function(){var t=a(arguments);return e.emitterSnapshot(t.shift()).apply(this,t)},e.emitterSnapshot=function(t){var s=(o[t]||[]).slice(0);return function(){var o=a(arguments),i=this||e;if("error"===t&&!1!==n.throws&&!s.length)throw 1===o.length?o[0]:o;return s.forEach(function(a){n.async?r(a,o,i):a.apply(i,o),a._once&&e.off(t,a)}),e}},e}},W8JN:function(e){e.exports={"player-list":"player-list__3kl8s",playerList:"player-list__3kl8s",show:"show__DCTXs",selected:"selected__2jo3u",player:"player__11oQY","player-name":"player-name__26y3K",playerName:"player-name__26y3K","player-color":"player-color__2O73a",playerColor:"player-color__2O73a","player-goals":"player-goals__3bPhI",playerGoals:"player-goals__3bPhI"}},abVj:function(e){e.exports={"color-picker":"color-picker__3E5O1",colorPicker:"color-picker__3E5O1"}},iFcc:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return s});var r=n("4dxh"),o=n("zMTv");class s extends r.Component{static get Empty(){return{id:-1,firstname:"?",lastname:"?",number:"?",goals:0}}onSelect(e){const t=this.props.data.line.match;t.playerListEventArgs={event:e,selected:this.props.data},t.update()}render(e,t){const n=e.data,a=n.goals>0?Object(r.h)("div",{class:o.goals},n.goals):"";return Object(r.h)("div",{class:[o.player].join(" "),style:{background:n.color},onClick:this.onSelect.bind(this),id:n.id},Object(r.h)("div",{class:o.number},n.number),Object(r.h)("div",{class:o.text},n.displayname),a)}static Map(e,t){e.id=e.id||function(e){let t=0;if(0==e.length)return t;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t&=t;return t}([e.nr||"?",e.firstname||"?",e.lastname||"?"].join("#")).toString(),"59286199"==e.id&&(e.id=function(){const e=()=>(65536*(1+Math.random())|0).toString(16).substring(1);return(e()+e()+"-"+e()+"-4"+e().substr(0,3)+"-"+e()+"-"+e()+e()+e()).toLowerCase()}());const n={id:e.id,goals:0,number:e.nr||"?",firstname:e.firstname||"?",lastname:e.lastname,displayname:e.firstname+" "+e.lastname};return t?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}({},n,t):n}}},kOkB:function(e,t,n){"use strict";(function(t){function a(e,n,a,r){t.navigator.pointerEnabled?v[n](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[a],r):t.navigator.msPointerEnabled?v[n](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[a],r):(v[n](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[a],r),v[n](e,a,r))}function r(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var t=e.button;return void 0!==t?1&t?1:2&t?3:4&t?2:0:void 0}function o(e,n){return void 0!==t[n]?t[n]:k.clientHeight?k[e]:b.body[e]}function s(e,t,n){var a,r=e||{},o=r.className;return r.className+=" gu-hide",a=b.elementFromPoint(t,n),r.className=o,a}function i(){return!1}function l(){return!0}function m(e){return e.width||e.right-e.left}function c(e){return e.height||e.bottom-e.top}function p(e){return e.parentNode===b?null:e.parentNode}function u(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||function e(t){if(!t)return!1;if("false"===t.contentEditable)return!1;if("true"===t.contentEditable)return!0;return e(p(t))}(e)}function d(e){return e.nextElementSibling||function(){var t=e;do{t=t.nextSibling}while(t&&1!==t.nodeType);return t}()}function f(e,t){var n=function(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}(t),a={pageX:"clientX",pageY:"clientY"};return e in a&&!(e in n)&&a[e]in n&&(e=a[e]),n[e]}var h=n("ReCf"),v=n("R5Bz"),g=n("K/8s"),b=document,k=b.documentElement;e.exports=function(e,t){function n(e){return-1!==ee.containers.indexOf(e)||Q.isContainer(e)}function S(e){var t=e?"remove":"add";a(k,t,"mousedown",E),a(k,t,"mouseup",F)}function y(e){a(k,e?"remove":"add","mousemove",L)}function M(e){var t=e?"remove":"add";v[t](k,"selectstart",O),v[t](k,"click",O)}function O(e){q&&e.preventDefault()}function E(e){if(X=e.clientX,Y=e.clientY,1===r(e)&&!e.metaKey&&!e.ctrlKey){var t=e.target,n=P(t);n&&(q=n,y(),"mousedown"===e.type&&(u(t)?t.focus():e.preventDefault()))}}function L(e){if(q)if(0!==r(e)){if(void 0===e.clientX||e.clientX!==X||void 0===e.clientY||e.clientY!==Y){if(Q.ignoreInputTextSelection){var t=f("clientX",e),n=f("clientY",e);if(u(b.elementFromPoint(t,n)))return}var s=q;y(!0),M(),j(),A(s);var i,l={left:(i=D.getBoundingClientRect()).left+o("scrollLeft","pageXOffset"),top:i.top+o("scrollTop","pageYOffset")};J=f("pageX",e)-l.left,I=f("pageY",e)-l.top,g.add(V||D,"gu-transit"),function(){if(!R){var e=D.getBoundingClientRect();(R=D.cloneNode(!0)).style.width=m(e)+"px",R.style.height=c(e)+"px",g.rm(R,"gu-transit"),g.add(R,"gu-mirror"),Q.mirrorContainer.appendChild(R),a(k,"add","mousemove",x),g.add(Q.mirrorContainer,"gu-unselectable"),ee.emit("cloned",R,D,"mirror")}}(),x(e)}}else F({})}function P(e){if(!(ee.dragging&&R||n(e))){for(var t=e;p(e)&&!1===n(p(e));){if(Q.invalid(e,t))return;if(!(e=p(e)))return}var a=p(e);if(a&&!Q.invalid(e,t)&&Q.moves(e,a,t,d(e)))return{item:e,source:a}}}function A(e){var t,n;t=e.item,n=e.source,("boolean"==typeof Q.copy?Q.copy:Q.copy(t,n))&&(V=e.item.cloneNode(!0),ee.emit("cloned",V,e.item,"copy")),U=e.source,D=e.item,W=z=d(e.item),ee.dragging=!0,ee.emit("drag",D,U)}function j(){if(ee.dragging){var e=V||D;_(e,p(e))}}function K(){q=!1,y(!0),M(!0)}function F(e){if(K(),ee.dragging){var t=V||D,n=f("clientX",e),a=f("clientY",e),r=B(s(R,n,a),n,a);r&&(V&&Q.copySortSource||!V||r!==U)?_(t,r):Q.removeOnSpill?T():G()}}function _(e,t){var n=p(e);V&&Q.copySortSource&&t===U&&n.removeChild(D),C(t)?ee.emit("cancel",e,U,U):ee.emit("drop",e,t,U,z),w()}function T(){if(ee.dragging){var e=V||D,t=p(e);t&&t.removeChild(e),ee.emit(V?"cancel":"remove",e,t,U),w()}}function G(e){if(ee.dragging){var t=arguments.length>0?e:Q.revertOnSpill,n=V||D,a=p(n),r=C(a);!1===r&&t&&(V?a&&a.removeChild(V):U.insertBefore(n,W)),r||t?ee.emit("cancel",n,U,U):ee.emit("drop",n,a,U,z),w()}}function w(){var e=V||D;K(),R&&(g.rm(Q.mirrorContainer,"gu-unselectable"),a(k,"remove","mousemove",x),p(R).removeChild(R),R=null),e&&g.rm(e,"gu-transit"),$&&clearTimeout($),ee.dragging=!1,Z&&ee.emit("out",e,Z,U),ee.emit("dragend",e),U=D=V=W=z=$=Z=null}function C(e,t){var n;return n=void 0!==t?t:R?z:d(V||D),e===U&&n===W}function B(e,t,a){function r(){if(!1===n(o))return!1;var r=N(o,e),s=H(o,r,t,a);return!!C(o,s)||Q.accepts(D,o,U,s)}for(var o=e;o&&!r();)o=p(o);return o}function x(e){function t(e){ee.emit(e,o,Z,U)}if(R){e.preventDefault();var n=f("clientX",e),a=f("clientY",e),r=a-I;R.style.left=n-J+"px",R.style.top=r+"px";var o=V||D,i=s(R,n,a),l=B(i,n,a),m=null!==l&&l!==Z;(m||null===l)&&(Z&&t("out"),Z=l,m&&t("over"));var c=p(o);if(l!==U||!V||Q.copySortSource){var u,h=N(l,i);if(null!==h)u=H(l,h,n,a);else{if(!0!==Q.revertOnSpill||V)return void(V&&c&&c.removeChild(o));u=W,l=U}(null===u&&m||u!==o&&u!==d(o))&&(z=u,l.insertBefore(o,u),ee.emit("shadow",o,l,U))}else c&&c.removeChild(o)}}function N(e,t){for(var n=t;n!==e&&p(n)!==e;)n=p(n);return n===k?null:n}function H(e,t,n,a){function r(e){return e?d(t):t}var o,s="horizontal"===Q.direction;return t!==e?(o=t.getBoundingClientRect(),r(s?n>o.left+m(o)/2:a>o.top+c(o)/2)):function(){var t,r,o,i=e.children.length;for(t=0;t<i;t++){if(o=(r=e.children[t]).getBoundingClientRect(),s&&o.left+o.width/2>n)return r;if(!s&&o.top+o.height/2>a)return r}return null}()}var R,U,D,J,I,X,Y,W,z,V,$;1===arguments.length&&!1===Array.isArray(e)&&(t=e,e=[]);var q,Z=null,Q=t||{};void 0===Q.moves&&(Q.moves=l),void 0===Q.accepts&&(Q.accepts=l),void 0===Q.invalid&&(Q.invalid=function(){return!1}),void 0===Q.containers&&(Q.containers=e||[]),void 0===Q.isContainer&&(Q.isContainer=i),void 0===Q.copy&&(Q.copy=!1),void 0===Q.copySortSource&&(Q.copySortSource=!1),void 0===Q.revertOnSpill&&(Q.revertOnSpill=!1),void 0===Q.removeOnSpill&&(Q.removeOnSpill=!1),void 0===Q.direction&&(Q.direction="vertical"),void 0===Q.ignoreInputTextSelection&&(Q.ignoreInputTextSelection=!0),void 0===Q.mirrorContainer&&(Q.mirrorContainer=b.body);var ee=h({containers:Q.containers,start:function(e){var t=P(e);t&&A(t)},end:j,cancel:G,remove:T,destroy:function(){S(!0),F({})},canMove:function(e){return!!P(e)},dragging:!1});return!0===Q.removeOnSpill&&ee.on("over",function(e){g.rm(e,"gu-hide")}).on("out",function(e){ee.dragging&&g.add(e,"gu-hide")}),S(),ee}}).call(this,n("pCvA"))},mLX3:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return r});class r{}a(r,"All",()=>[{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2012-09-18",Personnummer:"20070505-6745","Kön":"Kvinna",firstname:"Agnes",lastname:"Lundwall",Adress:"Flyttfågelsgatan 9",Postnummer:"262 57",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0702040485","E-post":"annika.lundwall@icloud.com","Målsman 1":"Fredrik Lundwall",Relation:"mamma",Telefon:"0707158259","Målsman 2":"Annika Lundwall",status:"Aktiv",Skapad:"2012-09-18",Uppdaterad:"2019-09-01","Bekräftad":"2019-01-02",id:"2513",nr:"11","Tröjstlk":"164",Foto:"Ja"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2019-06-04",Personnummer:"20070621-5068","Kön":"Kvinna",firstname:"Alexandra",lastname:"Jordö",Adress:"Vintervägen 19",Postnummer:"262 68",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0760104480","Målsman 1":"Donna Jordö",Relation:"Pappa","E-post":"daniel_jordo@hotmail.com",Telefon:"0705388953","Målsman 2":"Daniel Jordö",status:"Aktiv",Skapad:"2019-06-04",Uppdaterad:"2019-06-04","Bekräftad":"2019-06-04",id:"4454",nr:"29"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2014-06-09",Personnummer:"20071105-0401","Kön":"Kvinna",firstname:"Alexandra",lastname:"Sandberg",Adress:"Galoppg. 10",Postnummer:"262 58",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0707722119","E-post":"magnus_sandbe22@hotmail.com","Målsman 1":"Yulia Sandberg",Relation:"Pappa",Telefon:"0723306418","Målsman 2":"Magnus Sandberg",status:"Aktiv",Skapad:"2014-06-09",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"2922",nr:"6"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2019-04-26",Personnummer:"20070702-6720","Kön":"Kvinna",firstname:"Alicia",lastname:"Charlesson",Adress:"Norra kyrkogatn 5",Postnummer:"262 32",Ort:"ÄNGELHOLM",Land:"Sverige","Målsman 1":"Jenny Charlesson",Relation:"pappa","E-post":"olajohnsson77@hotmail.com",Telefon:"0701764511","Målsman 2":"Ola Johnsson",status:"Aktiv",Skapad:"2019-04-26",Uppdaterad:"2019-04-26","Bekräftad":"2019-04-26",id:"4394",nr:"33"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2016-04-05",Personnummer:"20070801-4345","Kön":"Kvinna",firstname:"Almi",lastname:"Palmér",Adress:"Strandbackevägen 11",Postnummer:"266 54",Ort:"VEJBYSTRAND",Land:"Sverige","Telefon hem":"043110474","Målsman 1":"Sofia Palmér",Relation:"Pappa","E-post":"magnus@tenpoints.se",Telefon:"0736449444","Målsman 2":"Magnus Palmér",status:"Aktiv",Skapad:"2016-04-05",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"3489",nr:"21"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2019-04-09",Personnummer:"20070315-2447","Kön":"Kvinna",firstname:"Anna",lastname:"Böcker",Adress:"Starbyvägen 158",Postnummer:"262 95",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0730650632","E-post":"jessica@tgm.nu","Målsman 1":"Jessica Böcker",Relation:"Pappa",Telefon:"0702479489","Målsman 2":"Christian Böcker",status:"Aktiv",Skapad:"2019-04-09",Uppdaterad:"2019-04-09","Bekräftad":"2019-04-09",id:"4362",nr:"25"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2013-09-02",Personnummer:"20070806-0900","Kön":"Kvinna",firstname:"Ebba",lastname:"Hellkvist Maas",Adress:"Galoppgatan 4",Postnummer:"262 58",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0708505998","Telefon hem":"0431311415","E-post":"bjornhellkvist@live.se","Målsman 1":"Anna Hellkvit Maas",Relation:"pappa",Telefon:"0705453676","Målsman 2":"Björn Hellkvist",status:"Aktiv",Skapad:"2013-09-02",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"2688",nr:"18"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2018-12-27",Personnummer:"20071015-6704","Kön":"Kvinna",firstname:"Ellinor",lastname:"Belulaj",Adress:"Heimdalgatan 3b",Postnummer:"262 44",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0762525249","Målsman 1":"Fadil",Relation:"Mamma","E-post":"Behluli_antigona@hotmail.com",Telefon:"0762525249","Målsman 2":"Antigona",status:"Aktiv",Skapad:"2018-12-27",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"4277",nr:"17"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2017-05-16",Personnummer:"20070307-9525","Kön":"Kvinna",firstname:"Elsa",lastname:"Berisha",Adress:"Stallgatan 2B",Postnummer:"262 52",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0769479575","Telefon hem":"0765588388","E-post":"aliardi06@hotmail.com",status:"Aktiv",Skapad:"2017-05-16",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"3836",nr:"15"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2019-04-25",Personnummer:"20070330-0640","Kön":"Kvinna",firstname:"Emma",lastname:"Holmberg",Adress:"Storgatan 98D",Postnummer:"262 33",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0707922137","E-post":"davidwallen77@gmail.com","Målsman 1":"Eva Holmberg",Relation:"pappa",Telefon:"0730725577","Målsman 2":"David Wallén",status:"Aktiv",Skapad:"2019-04-25",Uppdaterad:"2019-04-25","Bekräftad":"2019-04-25",id:"4393",nr:"31"},{Grupp:"F12",group:"Spelare",Personnummer:"20070305-0443","Kön":"Kvinna",firstname:"Filipha",lastname:"Stifors",Adress:"stigmansgatan 5",Postnummer:"262 62",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0723760880","Telefon hem":"0723117118","E-post":"anneliet76@gmail.com","Målsman 1":"Mathias  stifors",Relation:"mamma",Telefon:"0762405050","Målsman 2":"Annelie hellman",status:"Aktiv",Skapad:"2017-07-03",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"3913",nr:"19"},{Grupp:"F12",group:"Tränare",Personnummer:"19740110-1493","Kön":"Man",firstname:"Fredrik",lastname:"Lundwall",Adress:"Flyttfågelsgatan 9",Postnummer:"262 57",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0706405526","E-post":"fredrik@fredriklundwall.se",status:"Aktiv",Skapad:"2014-04-28",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"2825"},{Grupp:"F12",group:"Spelare",Personnummer:"20070310-5346","Kön":"Kvinna",firstname:"Hanna",lastname:"Håkansson",Adress:"Travgatan 9",Postnummer:"262 58",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0733442273","E-post":"fredrik1972@live.com","Målsman 1":"Fredrik",Relation:"Håkansson",Telefon:"0733442273",status:"Aktiv",Skapad:"2016-09-17",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"3645",nr:"3"},{Grupp:"F12",group:"Tränare",Personnummer:"19741005-3594","Kön":"Man",firstname:"Henrik",lastname:"Wester",Adress:"Saltsjövägen 12",Postnummer:"262 62",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0793358757","Telefon hem":"043188215","Telefon jobb":"0793358757","E-post":"westerhenrik01@gmail.com","Målsman 1":"Xxxxxx",Relation:"Alias",status:"Aktiv",Skapad:"2014-05-05",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"2845"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2012-05-30",Personnummer:"20070517-6980","Kön":"Kvinna",firstname:"Ida",lastname:"Wester",Adress:"Saltsjövägen 12",Postnummer:"262 63",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0793348258","Telefon hem":"043188215","E-post":"Charlott.palsson@mazars.se","Målsman 1":"Henrik Wester",Relation:"Mamma",Telefon:"0736203928","Målsman 2":"Charlott Pålsson",status:"Aktiv",Skapad:"2012-05-30",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"2470",nr:"4","Tröjstlk":"140",Foto:"Ja"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2019-04-09",Personnummer:"20070315-9608","Kön":"Kvinna",firstname:"Isa",lastname:"Böcker",Adress:"Starbyvägen 158",Postnummer:"262 95",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0706388289","E-post":"jessica@tgm.nu","Målsman 1":"Jessica Böcker",Relation:"Pappa",Telefon:"0702479489","Målsman 2":"Christian Böcker",status:"Aktiv",Skapad:"2019-04-09",Uppdaterad:"2019-04-09","Bekräftad":"2019-04-09",id:"4361",nr:"26"},{Grupp:"F12",group:"Ungdomsansvarig",Personnummer:"19640314-3552","Kön":"Man",firstname:"Kalle",lastname:"Hansson",Adress:"Boställsgatan 10",Postnummer:"262 53",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0768646827","Telefon jobb":"0431487805","E-post":"kalle@angelholmsff.se",status:"Aktiv",Skapad:"2011-05-18",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"9"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2015-08-24",Personnummer:"20070729-1266","Kön":"Kvinna",firstname:"Karin",lastname:"Kohdaida","c/o":"nej",Adress:"Heimdallgatan 1b",Postnummer:"262 44",Ort:"ÄNELHÖLM",Land:"Sverige","E-post":"abo.dawd@live.se","Målsman 1":"Ibrahim",Relation:"mamma","Målsman 2":"Balges",status:"Aktiv",Skapad:"2015-08-24",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"3384",nr:"10"},{Grupp:"F12",group:"Tränare",Personnummer:"19730429-8602","Kön":"Kvinna",firstname:"Kolbäck",lastname:"Susanne",Adress:"Espehögsgatan 42",Postnummer:"262 53",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0702375193","E-post":"s.kolback@gmail.com",status:"Aktiv",Skapad:"2012-05-04",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"2447"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2015-05-07",Personnummer:"20070720-4327","Kön":"Kvinna",firstname:"Maja",lastname:"Andersson",Adress:"Majsgatan 25",Postnummer:"262 53",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0731004122","Telefon hem":"043114122","E-post":"ulrand70@hotmail.com","Målsman 1":"Thor-Björn Andersson",Relation:"Mamma",Telefon:"0723214122","Målsman 2":"Ulrika Andersson",status:"Aktiv",Skapad:"2015-05-07",Uppdaterad:"2019-05-01","Bekräftad":"2019-01-02",id:"3323",nr:"7","Tröjstlk":"140"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2016-06-29",Personnummer:"20070320-6243","Kön":"Kvinna",firstname:"Marija Marta",lastname:"Ozolina",Adress:"Kamomillgatan 17",Postnummer:"262 52",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0703500027","E-post":"roland.kreslins@ekamant.se","Målsman 1":"Ilona Ozolina",Relation:"Pappa",Telefon:"0730940020","Målsman 2":"Roland Kreslins",status:"Aktiv",Skapad:"2016-06-29",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"3604",nr:"5"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2019-04-23",Personnummer:"20070123-7448","Kön":"Kvinna",firstname:"Mariline",lastname:"Lejon-Lambert",Adress:"Mörtgränd",Postnummer:"262 42",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0767991994","E-post":"Annalejon@hotmail.com","Målsman 1":"Anna Lejon",Relation:"Mamma",Telefon:"0767991994",status:"Aktiv",Skapad:"2012-06-04",Uppdaterad:"2019-04-23","Bekräftad":"2019-04-23",id:"2476",nr:"32"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2019-06-24",Personnummer:"20070328-3366","Kön":"Kvinna",firstname:"Marta",lastname:"Eklund",Adress:"Vintervägen 5",Postnummer:"262 68",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0738282888","E-post":"fredannaeklund@yahoo.se","Målsman 1":"Fredrik Eklund",Relation:"Pappa",Telefon:"0738282888",status:"Aktiv",Skapad:"2019-06-24",Uppdaterad:"2019-06-24","Bekräftad":"2019-06-24",id:"4462",nr:"34"},{Grupp:"F12",group:"Spelare",Personnummer:"20070923-6962","Kön":"Kvinna",firstname:"Martha",lastname:"Svensson",Adress:"Blekingegatan 14",Postnummer:"262 43",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0768704867","E-post":"Lindasvensson.v@gmail.com","Målsman 1":"Linda Svensson",Relation:"Pappa",Telefon:"0730581012","Målsman 2":"Jimmi Svensson",status:"Aktiv",Skapad:"2014-08-30",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"2971","Allergi/matval":"-",nr:"2"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2018-05-31",Personnummer:"20071218-0504","Kön":"Kvinna",firstname:"Milla",lastname:"Jonsson",Adress:"Landshövdingevägen 35",Postnummer:"262 52",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0702379253","E-post":"patrikasajonsson@telia.com",status:"Aktiv",Skapad:"2018-05-31",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"4178",nr:"23"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2019-01-05",Personnummer:"20070511-9402","Kön":"Kvinna",firstname:"Molly",lastname:"Häll",Adress:"Pildammsvägen 2",Postnummer:"262 93",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0709817158","Telefon hem":"0431410022","Målsman 1":"Maria Häll",Relation:"Pappa","E-post":"cjcjcj123@live.se",Telefon:"0702661627","Målsman 2":"Christer Häll",status:"Aktiv",Skapad:"2019-01-05",Uppdaterad:"2019-01-05","Bekräftad":"2019-01-05",id:"4280",nr:"16"},{Grupp:"F12",group:"Spelare",Personnummer:"20070205-3547","Kön":"Kvinna",firstname:"Nellie",lastname:"Bengtsson",Adress:"Espehögsgatan 43",Postnummer:"262 53",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0702375193","Telefon hem":"043183125","E-post":"s.kolback@gmail.com","Målsman 1":"Susanne Kolbäck",Relation:"mamma",Telefon:"0702375193",status:"Aktiv",Skapad:"2011-10-05",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"2240",nr:"30"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2018-01-18",Personnummer:"20070702-5003","Kön":"Kvinna",firstname:"Pella",lastname:"Månsson",Adress:"Umeågatan 20G",Postnummer:"262 65",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0761419993","Målsman 1":"Linda Månsson",Relation:"Pappa","E-post":"lindamansson@telia.com",Telefon:"0701747852","Målsman 2":"Jonas Nilsson",status:"Aktiv",Skapad:"2018-01-18",Uppdaterad:"2019-05-16","Bekräftad":"2019-01-02",id:"4033",nr:"14"},{Grupp:"F12",group:"Spelare",Personnummer:"20071209-1800","Kön":"Kvinna",firstname:"Saga",lastname:"Svahn",Adress:"Haradalsliden 15",Postnummer:"262 62",Ort:"ÄNGELHOLM",Land:"Sverige","Målsman 1":"Marlén Svahn",Relation:"mamma","E-post":"marlen77@live.se",Telefon:"0763200377",status:"Aktiv",Skapad:"2014-05-04",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"2844",nr:"8"},{Grupp:"F12",group:"Tränare",Kommentar:"Fr.kö 2019-03-18",Personnummer:"19740220-3538","Kön":"Man",firstname:"Thor-Björn",lastname:"Andersson",Adress:"Majsgatan 25",Postnummer:"262 53",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0734387180","Telefon hem":"043114122","E-post":"thor-bjorn.andersson@outlook.com",status:"Aktiv",Skapad:"2019-03-18",Uppdaterad:"2019-03-18","Bekräftad":"2019-03-18",id:"4328"},{Grupp:"F12",group:"Spelare",Personnummer:"20070205-7043","Kön":"Kvinna",firstname:"Tilda",lastname:"Bengtsson",Adress:"Espehögsgatan 43",Postnummer:"262 53",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0702375193","Telefon hem":"043183125","E-post":"s.kolback@gmail.com","Målsman 1":"Susanne Kolbäck",Relation:"mamma",Telefon:"0702375193",status:"Aktiv",Skapad:"2011-10-05",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"2241",nr:"27"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2014-05-14",Personnummer:"20070216-7008","Kön":"Kvinna",firstname:"Tilde",lastname:"Alling",Adress:"Storgatan 18",Postnummer:"262 32",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0760091360","Telefon hem":"0737353529","E-post":"kristina.alling@gmail.com","Målsman 1":"Gunnar Alling",Relation:"Mamma",Telefon:"0700836001","Målsman 2":"Kristina Alling",status:"Aktiv",Skapad:"2014-05-14",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"2892",nr:"9"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2015-10-12",Personnummer:"20070626-1328","Kön":"Kvinna",firstname:"Vilda",lastname:"Skog",Adress:"Fuxgatan 2",Postnummer:"262 58",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0700976986","Telefon hem":"0702066180","E-post":"magnus@knobby.se","Målsman 1":"Emma Skog",Relation:"Pappa",Telefon:"0705150351","Målsman 2":"Magnus Skog",status:"Aktiv",Skapad:"2015-10-12",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"3405",nr:"28","Tröjstlk":"152",Foto:"Ja"}]),a(r,"Coaches",()=>r.All().Where(e=>"Spelare"!=e.group)),a(r,"Players",()=>r.All().Where(e=>"Spelare"==e.group))},ngLP:function(e){e.exports=function(e,t){return Array.prototype.slice.call(e,t)}},pCvA:function(e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t},rXEU:function(e,t,n){"use strict";(function(t){var n=[],a="",r=/^on/;for(a in t)r.test(a)&&n.push(a.slice(2));e.exports=n}).call(this,n("pCvA"))},sxGq:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return s});var r=n("iFcc"),o=n("mLX3");class s{constructor(e){this.update=e,a(this,"home",{id:0,name:"ÄFF",score:0}),a(this,"guest",{id:0,name:"GUEST",score:0}),a(this,"playerListEventArgs",{}),a(this,"lines",[])}toString(){const e=[];return this.lines.ForEach(t=>{const n=t.players.Select(e=>e.id+":"+(e.goals||0)).join(",");e.push(n)}),e.join(";")}print(){const e=[];return this.lines.ForEach(t=>{const n=t.players.Select(e=>{return""+e.displayname+(e.goals>0?" ("+(e.goals||0)+")":"")}).join(", ");e.push(n)}),e.Select((t,n)=>1==n?"G: "+t:2==n?"D: "+t:n==e.length-1?"O: "+t:"M: "+t).Insert(this.home.name+": "+this.home.score+" - "+this.guest.name+": "+this.guest.score,0).join("\n")}lineup(e,t){const n=o.a.Players();return e.split(";").Select(e=>{const a={match:t,players:[]},o=e.split(",").Select(e=>{const t=e.split(":"),o=parseInt(t[1]||"0"),s=n.FirstOrDefault(e=>e.id===t[0])||r.a.Empty;return r.a.Map(s,{goals:o,line:a})});return a.players.AddRange(o),a})}}},t4lu:function(e){e.exports={line:"line__ChHp0",players:"players__sUl2_",actions:"actions__3lP_E"}},uDKj:function(e){e.exports={main:"main__1gZmu",pitch:"pitch__2rJNf","btn-reload":"btn-reload__2ZU1F",btnReload:"btn-reload__2ZU1F","btn-print":"btn-print__2gJS_",btnPrint:"btn-print__2gJS_","print-sheet":"print-sheet__3mEA6",printSheet:"print-sheet__3mEA6"}},zMTv:function(e){e.exports={player:"player__3_b_C",number:"number__26zQA",text:"text__2Cl9v",goals:"goals__2YGYl"}}}]);
//# sourceMappingURL=index.tsx.chunk.fc577.esm.js.map