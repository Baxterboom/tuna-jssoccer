(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{BYag:function(t){t.exports={"action-menu":"_2GhxsLskSh1hjW86vCiAXS",actionMenu:"_2GhxsLskSh1hjW86vCiAXS",button:"_1TZj6V20vVi6dOES4u5j_b",items:"_2TWJFa8fLQFjs50xw10gU4",show:"_2kEoS4qA6-ZX5b465pw-BN"}},DtED:function(t,e,n){"use strict";var r=n("MAaF");t.exports=function(t,e,n){t&&r((function(){t.apply(n||null,e||[])}))}},Gkjj:function(t,e,n){(function(e){var n=e.CustomEvent;t.exports=function(){try{var t=new n("cat",{detail:{foo:"bar"}});return"cat"===t.type&&"bar"===t.detail.foo}catch(t){}return!1}()?n:"function"==typeof document.createEvent?function(t,e){var n=document.createEvent("CustomEvent");return e?n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail):n.initCustomEvent(t,!1,!1,void 0),n}:function(t,e){var n=document.createEventObject();return n.type=t,e?(n.bubbles=Boolean(e.bubbles),n.cancelable=Boolean(e.cancelable),n.detail=e.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(this,n("pCvA"))},"K/8s":function(t){"use strict";function e(t){var e=n[t];return e?e.lastIndex=0:n[t]=e=new RegExp("(?:^|\\s)"+t+"(?:\\s|$)","g"),e}var n={};t.exports={add:function(t,n){var r=t.className;r.length?e(n).test(r)||(t.className+=" "+n):t.className=n},rm:function(t,n){t.className=t.className.replace(e(n)," ").trim()}}},KXrs:function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.r(e),n.d(e,"default",(function(){return E}));var l=n("4dxh"),u=n("BYag"),p=n("hcwh"),f=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))||this).element=void 0,e}var n,r;r=t,(n=e).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var i=e.prototype;return i.close=function(){this.setState({show:!1})},i.toggle=function(){this.setState({show:!this.state.show})},i.callback=function(t,e){e.onClick&&e.onClick(t,e),this.close()},i.isOverflowing=function(){return this.element.scrollHeight>this.element.clientHeight||this.element.scrollWidth>this.element.clientWidth},i.render=function(t,e){var n=this,r=JSLinq(t.options.items).Select((function(t){return Object(l.h)("li",{onClick:function(e){return n.callback(e,t)}},t.text)})),i=[u.items];return e.show&&(i.push(u.show),Object(p.b)((function(){return n.element}),this.close.bind(this))),Object(l.h)("div",{class:u.actionMenu,ref:function(t){return n.element=t}},Object(l.h)("div",{class:u.button,onClick:this.toggle.bind(this)}),Object(l.h)("ul",{class:i.join(" ")},r))},e}(l.Component),h=n("iFcc"),d=n("t4lu"),v=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))||this).state={actionMenu:{title:"A title",items:[]}},e}var n,r;r=t,(n=e).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var o=e.prototype;return o.componentWillMount=function(){this.state.actionMenu.items.AddRange([{text:"Add player",onClick:this.addPlayer.bind(this,void 0)},{text:"Add line",onClick:this.addLine.bind(this)},{text:"Remove line",onClick:this.removeLine.bind(this)}])},o.addPlayer=function(t){this.props.data.players.Add(t||i(i({},h.a.Empty),{line:this.props.data})),this.setState(this.state)},o.removePlayer=function(t){this.props.data.players.Remove(t),this.setState(this.state)},o.addLine=function(){var t=this.props.data.match,e={players:[],match:t};e.players.push(i(i({},h.a.Empty),{},{line:e})),t.lines.Insert(e,t.lines.indexOf(this.props.data)+1),t.update()},o.removeLine=function(){var t=this.props.data.match;t.lines.Remove(this.props.data),t.update()},o.render=function(t,e){var n=0,r=t.data.players.map((function(t){return Object(l.h)(h.a,{key:n++,data:t})}));return Object(l.h)("div",{class:["line",d.line].join(" ")},Object(l.h)(f,{options:e.actionMenu}),Object(l.h)("div",{class:["players",d.players].join(" ")},r))},e}(l.Component),m=n("W8JN"),y=n("vls+"),b=n("mLX3"),g=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))||this).element=void 0,e.state={players:[]},e}var n,r;r=t,(n=e).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var i=e.prototype;return i.componentWillMount=function(){var t=b.a.Players().Select((function(t){return h.a.Map(t)})).OrderBy((function(t){return t.displayname}));this.state.players.AddRange(t)},i.render=function(t,e){var n=this,r=t.match.playerListEventArgs,i=[m.playerList];if(!r.event)return Object(l.h)("ul",{class:i.join(" ")});i.push(m.show),Object(p.b)((function(){return n.element}),this.close.bind(this));var o=t.match.lines.SelectMany((function(t){return t.players})),c=(r.selected.number||"?")+" # "+(r.selected.displayname||"?"),a=e.players.map((function(t){var e=o.Any((function(e){return e.id==t.id}))?m.selected:"";return Object(l.h)("li",{class:e,onClick:n.onSelectPlayer.bind(n,t)},Object(l.h)("span",null,t.displayname))}));return Object(l.h)("ul",{class:i.join(" "),ref:function(t){return n.element=t}},Object(l.h)("li",{class:m.player},Object(l.h)("div",{class:m.playerName},Object(l.h)("input",{type:"text",placeholder:"Enter name",value:c,onChange:this.setText.bind(this)}),Object(l.h)("button",{onClick:this.onRemoveSelectPlayer.bind(this)},"Remove")),Object(l.h)("div",{class:m.playerGoals},Object(l.h)("span",null,"Score: ",r.selected.goals||0),Object(l.h)("button",{onClick:this.score.bind(this,r.selected,-1)},"-"),Object(l.h)("button",{onClick:this.score.bind(this,r.selected,1)},"+"))),Object(l.h)("li",{class:m.playerColor},Object(l.h)(y.b,{options:{onClick:this.setColor.bind(this)}})),a)},i.score=function(t,e){e<0&&0==t.goals||(t.goals+=e,this.props.match.update())},i.close=function(){this.props.match.playerListEventArgs={},this.props.match.update()},i.setText=function(t){var e=t.target.value.split(" # "),n=this.props.match.playerListEventArgs;n.selected.number=e.length<2?"":e.FirstOrDefault(),n.selected.displayname=e.LastOrDefault(),this.props.match.update()},i.setColor=function(t){var e=this.props.match.playerListEventArgs;e.selected.color=t,this.props.match.update(),this.close(),console.log(e.selected)},i.onSelectPlayer=function(t){var e=this.props.match.playerListEventArgs.selected;if(e&&e.line){var n=t.line=e.line,r=n.players.indexOf(e);n.players[r]=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t),this.close()}},i.onRemoveSelectPlayer=function(){var t=this.props.match.playerListEventArgs.selected;t&&t.line&&(t.line.players.Remove(t),this.close())},e}(l.Component),O=n("sxGq"),j=n("uDKj"),w=n("kOkB"),C=n.n(w),S=n("Y3FI"),E=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))||this).drake=void 0,e.state={match:new O.a(e.update.bind(s(e)))},e}var n,r;r=t,(n=e).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var i=e.prototype;return i.update=function(){var t=this;this.setState(this.state,(function(){Object(S.route)("/game/"+t.state.match.toString())}))},i.componentWillMount=function(){var t=this.state.match;t.lines=t.lineup(this.props.lineup,t)},i.componentDidUpdate=function(){this.drake&&this.drake.destroy();var t=[].slice.call(document.querySelectorAll(".players"));this.drake=C()(t,{copySortSource:!0}),this.drake.on("drop",(function(t,e,n,r){var i=$(t).prop("_component").props.data,o=$(e).closest(".line").prop("_component").props.data;$(n).closest(".line").prop("_component").props.data.players.Remove(i),o.players.Insert(i,$(r).index()-1||0),i.line=o}))},i.componentWillUnmount=function(){this.drake&&this.drake.destroy()},i.render=function(t,e){var n=e.match.lines.map((function(t,e){return Object(l.h)(v,{key:e,data:t})}));return Object(l.h)("div",{class:[j.main].join(" ")},Object(l.h)("div",{id:"print-sheet",class:j.printSheet},this.state.match.print()),Object(l.h)("div",{class:[j.pitch].join(" ")},n),Object(l.h)(g,{match:e.match}),Object(l.h)("img",{class:j.btnReload,src:"assets/img/refresh_48px.svg",onClick:this.randomizeLineUp.bind(this),title:"New line up"}),Object(l.h)("img",{class:j.btnPrint,src:"assets/img/print.svg",onClick:this.print.bind(this),title:"Print"}))},i.print=function(){var t=$("#print-sheet").toggle();t.is(":hidden")||Object(p.b)((function(){return t.get(0)}),(function(){return t.hide()}))},i.randomizeLineUp=function(){var t=this;this.state.match.lines.Clear();var e=b.a.Players();Object(p.c)(this.props.lineup).split(";").ForEach((function(n){var r=n.split("|").Select((function(t){return t[1]})).Count();r>e.length&&(r=e.length);var i={match:t.state.match,players:new Array(r)};i.players.ForEach((function(t,n){var r=Math.floor(Math.random()*e.length),o=e[r];e.Remove(o),i.players[n]=h.a.Map(o,{line:i,goals:0,color:0})})),t.state.match.lines.Add(i)})),this.update()},e}(l.Component)},MAaF:function(t){var e="function"==typeof setImmediate;t.exports=e?function(t){setImmediate(t)}:function(t){setTimeout(t,0)}},R5Bz:function(t,e,n){"use strict";(function(e){function r(t,e,n){var r=function(t,e,n){var r,i;for(r=0;r<l.length;r++)if((i=l[r]).element===t&&i.type===e&&i.fn===n)return r}(t,e,n);if(r){var i=l[r].wrapper;return l.splice(r,1),i}}var i=n("Gkjj"),o=n("rXEU"),c=e.document,a=function(t,e,n,r){return t.addEventListener(e,n,r)},s=function(t,e,n,r){return t.removeEventListener(e,n,r)},l=[];e.addEventListener||(a=function(t,n,i){return t.attachEvent("on"+n,function(t,n,i){var o=r(t,n,i)||function(t,n,r){return function(n){var i=n||e.event;i.target=i.target||i.srcElement,i.preventDefault=i.preventDefault||function(){i.returnValue=!1},i.stopPropagation=i.stopPropagation||function(){i.cancelBubble=!0},i.which=i.which||i.keyCode,r.call(t,i)}}(t,0,i);return l.push({wrapper:o,element:t,type:n,fn:i}),o}(t,n,i))},s=function(t,e,n){var i=r(t,e,n);if(i)return t.detachEvent("on"+e,i)}),t.exports={add:a,remove:s,fabricate:function(t,e,n){var r=-1===o.indexOf(e)?new i(e,{detail:n}):function(){var t;return c.createEvent?(t=c.createEvent("Event")).initEvent(e,!0,!0):c.createEventObject&&(t=c.createEventObject()),t}();t.dispatchEvent?t.dispatchEvent(r):t.fireEvent("on"+e,r)}}}).call(this,n("pCvA"))},ReCf:function(t,e,n){"use strict";var r=n("ngLP"),i=n("DtED");t.exports=function(t,e){var n=e||{},o={};return void 0===t&&(t={}),t.on=function(e,n){return o[e]?o[e].push(n):o[e]=[n],t},t.once=function(e,n){return n._once=!0,t.on(e,n),t},t.off=function(e,n){var r=arguments.length;if(1===r)delete o[e];else if(0===r)o={};else{var i=o[e];if(!i)return t;i.splice(i.indexOf(n),1)}return t},t.emit=function(){var e=r(arguments);return t.emitterSnapshot(e.shift()).apply(this,e)},t.emitterSnapshot=function(e){var c=(o[e]||[]).slice(0);return function(){var o=r(arguments),a=this||t;if("error"===e&&!1!==n.throws&&!c.length)throw 1===o.length?o[0]:o;return c.forEach((function(r){n.async?i(r,o,a):r.apply(a,o),r._once&&t.off(e,r)})),t}},t}},W8JN:function(t){t.exports={"player-list":"_3kl8sApR5StkiLn1xWSlKr",playerList:"_3kl8sApR5StkiLn1xWSlKr",show:"DCTXs_ivR0jCfikW2YiVj",selected:"_2jo3uG0CKQNSC580vXCreb",player:"_11oQYUFcG1hyx-y2P3Cxdc","player-name":"_26y3KD-UcLbzWcem2BV7zY",playerName:"_26y3KD-UcLbzWcem2BV7zY","player-color":"_2O73aj6TOka0iE2uh_Rpy1",playerColor:"_2O73aj6TOka0iE2uh_Rpy1","player-goals":"_3bPhIA-Rfs9WCTkX15945M",playerGoals:"_3bPhIA-Rfs9WCTkX15945M"}},kOkB:function(t,e,n){"use strict";(function(e){function r(t,n,r,i){e.navigator.pointerEnabled?y[n](t,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[r],i):e.navigator.msPointerEnabled?y[n](t,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[r],i):(y[n](t,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[r],i),y[n](t,r,i))}function i(t){if(void 0!==t.touches)return t.touches.length;if(void 0!==t.which&&0!==t.which)return t.which;if(void 0!==t.buttons)return t.buttons;var e=t.button;return void 0!==e?1&e?1:2&e?3:4&e?2:0:void 0}function o(t){var e=t.getBoundingClientRect();return{left:e.left+c("scrollLeft","pageXOffset"),top:e.top+c("scrollTop","pageYOffset")}}function c(t,n){return void 0!==e[n]?e[n]:O.clientHeight?O[t]:g.body[t]}function a(t,e,n){var r,i=t||{},o=i.className;return i.className+=" gu-hide",r=g.elementFromPoint(e,n),i.className=o,r}function s(){return!1}function l(){return!0}function u(t){return t.width||t.right-t.left}function p(t){return t.height||t.bottom-t.top}function f(t){return t.parentNode===g?null:t.parentNode}function h(t){return"INPUT"===t.tagName||"TEXTAREA"===t.tagName||"SELECT"===t.tagName||function t(e){if(!e)return!1;if("false"===e.contentEditable)return!1;if("true"===e.contentEditable)return!0;return t(f(e))}(t)}function d(t){return t.nextElementSibling||function(){var e=t;do{e=e.nextSibling}while(e&&1!==e.nodeType);return e}()}function v(t,e){var n=function(t){return t.targetTouches&&t.targetTouches.length?t.targetTouches[0]:t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t}(e),r={pageX:"clientX",pageY:"clientY"};return t in r&&!(t in n)&&r[t]in n&&(t=r[t]),n[t]}var m=n("ReCf"),y=n("R5Bz"),b=n("K/8s"),g=document,O=g.documentElement;t.exports=function(t,e){function n(t){return-1!==ut.containers.indexOf(t)||lt.isContainer(t)}function c(t){var e=t?"remove":"add";r(O,e,"mousedown",E),r(O,e,"mouseup",D)}function j(t){r(O,t?"remove":"add","mousemove",_)}function w(t){var e=t?"remove":"add";y[e](O,"selectstart",S),y[e](O,"click",S)}function C(){c(!0),D({})}function S(t){at&&t.preventDefault()}function E(t){if(tt=t.clientX,et=t.clientY,!(1!==i(t)||t.metaKey||t.ctrlKey)){var e=t.target,n=k(e);n&&(at=n,j(),"mousedown"===t.type&&(h(e)?e.focus():t.preventDefault()))}}function _(t){if(at)if(0!==i(t)){if(void 0===t.clientX||t.clientX!==tt||void 0===t.clientY||t.clientY!==et){if(lt.ignoreInputTextSelection){var e=v("clientX",t),n=v("clientY",t);if(h(g.elementFromPoint(e,n)))return}var r=at;j(!0),w(),R(),A(r);var c=o(Q);V=v("pageX",t)-c.left,$=v("pageY",t)-c.top,b.add(it||Q,"gu-transit"),G(),B(t)}}else D({})}function k(t){if(!(ut.dragging&&q||n(t))){for(var e=t;f(t)&&!1===n(f(t));){if(lt.invalid(t,e))return;if(!(t=f(t)))return}var r=f(t);if(r)if(!lt.invalid(t,e))if(lt.moves(t,r,e,d(t)))return{item:t,source:r}}}function x(t){return!!k(t)}function P(t){var e=k(t);e&&A(e)}function A(t){Z(t.item,t.source)&&(it=t.item.cloneNode(!0),ut.emit("cloned",it,t.item,"copy")),H=t.source,Q=t.item,nt=rt=d(t.item),ut.dragging=!0,ut.emit("drag",Q,H)}function L(){return!1}function R(){if(ut.dragging){var t=it||Q;T(t,f(t))}}function N(){at=!1,j(!0),w(!0)}function D(t){if(N(),ut.dragging){var e=it||Q,n=v("clientX",t),r=v("clientY",t),i=Y(a(q,n,r),n,r);i&&(it&&lt.copySortSource||!it||i!==H)?T(e,i):lt.removeOnSpill?M():W()}}function T(t,e){var n=f(t);it&&lt.copySortSource&&e===H&&n.removeChild(Q),F(e)?ut.emit("cancel",t,H,H):ut.emit("drop",t,e,H,rt),X()}function M(){if(ut.dragging){var t=it||Q,e=f(t);e&&e.removeChild(t),ut.emit(it?"cancel":"remove",t,e,H),X()}}function W(t){if(ut.dragging){var e=arguments.length>0?t:lt.revertOnSpill,n=it||Q,r=f(n),i=F(r);!1===i&&e&&(it?r&&r.removeChild(it):H.insertBefore(n,nt)),i||e?ut.emit("cancel",n,H,H):ut.emit("drop",n,r,H,rt),X()}}function X(){var t=it||Q;N(),K(),t&&b.rm(t,"gu-transit"),ot&&clearTimeout(ot),ut.dragging=!1,st&&ut.emit("out",t,st,H),ut.emit("dragend",t),H=Q=it=nt=rt=ot=st=null}function F(t,e){var n;return n=void 0!==e?e:q?rt:d(it||Q),t===H&&n===nt}function Y(t,e,r){function i(){if(!1===n(o))return!1;var i=z(o,t),c=J(o,i,e,r);return!!F(o,c)||lt.accepts(Q,o,H,c)}for(var o=t;o&&!i();)o=f(o);return o}function B(t){function e(t){ut.emit(t,o,st,H)}if(q){t.preventDefault();var n=v("clientX",t),r=v("clientY",t),i=r-$;q.style.left=n-V+"px",q.style.top=i+"px";var o=it||Q,c=a(q,n,r),s=Y(c,n,r),l=null!==s&&s!==st;(l||null===s)&&(st&&e("out"),st=s,l&&e("over"));var u=f(o);if(s!==H||!it||lt.copySortSource){var p,h=z(s,c);if(null!==h)p=J(s,h,n,r);else{if(!0!==lt.revertOnSpill||it)return void(it&&u&&u.removeChild(o));p=nt,s=H}(null===p&&l||p!==o&&p!==d(o))&&(rt=p,s.insertBefore(o,p),ut.emit("shadow",o,s,H))}else u&&u.removeChild(o)}}function U(t){b.rm(t,"gu-hide")}function I(t){ut.dragging&&b.add(t,"gu-hide")}function G(){if(!q){var t=Q.getBoundingClientRect();(q=Q.cloneNode(!0)).style.width=u(t)+"px",q.style.height=p(t)+"px",b.rm(q,"gu-transit"),b.add(q,"gu-mirror"),lt.mirrorContainer.appendChild(q),r(O,"add","mousemove",B),b.add(lt.mirrorContainer,"gu-unselectable"),ut.emit("cloned",q,Q,"mirror")}}function K(){q&&(b.rm(lt.mirrorContainer,"gu-unselectable"),r(O,"remove","mousemove",B),f(q).removeChild(q),q=null)}function z(t,e){for(var n=e;n!==t&&f(n)!==t;)n=f(n);return n===O?null:n}function J(t,e,n,r){function i(t){return t?d(e):e}var o,c="horizontal"===lt.direction;return e!==t?(o=e.getBoundingClientRect(),i(c?n>o.left+u(o)/2:r>o.top+p(o)/2)):function(){var e,i,o,a=t.children.length;for(e=0;e<a;e++){if(o=(i=t.children[e]).getBoundingClientRect(),c&&o.left+o.width/2>n)return i;if(!c&&o.top+o.height/2>r)return i}return null}()}function Z(t,e){return"boolean"==typeof lt.copy?lt.copy:lt.copy(t,e)}var q,H,Q,V,$,tt,et,nt,rt,it,ot,ct=arguments.length;1===ct&&!1===Array.isArray(t)&&(e=t,t=[]);var at,st=null,lt=e||{};void 0===lt.moves&&(lt.moves=l),void 0===lt.accepts&&(lt.accepts=l),void 0===lt.invalid&&(lt.invalid=L),void 0===lt.containers&&(lt.containers=t||[]),void 0===lt.isContainer&&(lt.isContainer=s),void 0===lt.copy&&(lt.copy=!1),void 0===lt.copySortSource&&(lt.copySortSource=!1),void 0===lt.revertOnSpill&&(lt.revertOnSpill=!1),void 0===lt.removeOnSpill&&(lt.removeOnSpill=!1),void 0===lt.direction&&(lt.direction="vertical"),void 0===lt.ignoreInputTextSelection&&(lt.ignoreInputTextSelection=!0),void 0===lt.mirrorContainer&&(lt.mirrorContainer=g.body);var ut=m({containers:lt.containers,start:P,end:R,cancel:W,remove:M,destroy:C,canMove:x,dragging:!1});return!0===lt.removeOnSpill&&ut.on("over",U).on("out",I),c(),ut}}).call(this,n("pCvA"))},ngLP:function(t){t.exports=function(t,e){return Array.prototype.slice.call(t,e)}},pCvA:function(t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},rXEU:function(t,e,n){"use strict";(function(e){var n=[],r="",i=/^on/;for(r in e)i.test(r)&&n.push(r.slice(2));t.exports=n}).call(this,n("pCvA"))},t4lu:function(t){t.exports={line:"ChHp0KhEfDOv3NtCxLfj",players:"sUl2_mCH4oMfj56NTy0rN",actions:"_3lP_E1wpjMHLQvwISUN0Z-"}},uDKj:function(t){t.exports={main:"_1gZmulpwg570Sq0vvYozFT",pitch:"_2rJNfRGIEj9UTGAjE9wH4b","btn-reload":"_2ZU1FqoROF8uY9_wN8hxIG",btnReload:"_2ZU1FqoROF8uY9_wN8hxIG","btn-print":"_2gJS_cfDzKnpuiijCQLmWW",btnPrint:"_2gJS_cfDzKnpuiijCQLmWW","print-sheet":"_3mEA6F776LjkUZz1_Gkt32",printSheet:"_3mEA6F776LjkUZz1_Gkt32"}}}]);
//# sourceMappingURL=3.chunk.67b79.js.map