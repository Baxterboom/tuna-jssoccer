(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{BYag:function(e){e.exports={"action-menu":"action-menu__2Ghxs",actionMenu:"action-menu__2Ghxs",button:"button__1TZj6",items:"items__2TWJF",show:"show__2kEoS"}},DtED:function(e,t,n){"use strict";var r=n("MAaF");e.exports=function(e,t,n){e&&r(function(){e.apply(n||null,t||[])})}},Gkjj:function(e,t,n){(function(t){var n=t.CustomEvent;e.exports=function(){try{var e=new n("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?n:"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(this,n("pCvA"))},"K/8s":function(e){"use strict";function t(e){var t=n[e];return t?t.lastIndex=0:n[e]=t=new RegExp(r+e+o,"g"),t}var n={},r="(?:^|\\s)",o="(?:\\s|$)";e.exports={add:function(e,n){var r=e.className;r.length?t(n).test(r)||(e.className+=" "+n):e.className=n},rm:function(e,n){e.className=e.className.replace(t(n)," ").trim()}}},KXrs:function(e,t,n){"use strict";function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t);var s,l,c,u=n("4dxh"),p=n("BYag"),f=function(e){function t(){for(var t,n,r,o,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return t=e.call.apply(e,[this].concat(a))||this,n=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t),o=void 0,(r="element")in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,t}var n,r;r=e,(n=t).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var o=t.prototype;return o.toggle=function(){this.state.show?document.removeEventListener("mousedown",this.close.bind(this),!1):document.addEventListener("mousedown",this.close.bind(this),!1),this.setState({show:!this.state.show})},o.close=function(e){this.element&&!this.element.contains(e.target)&&this.setState({show:!1})},o.callback=function(e,t){t.onClick&&t.onClick(e,t),this.close(e)},o.isOverflowing=function(){return this.element.scrollHeight>this.element.clientHeight||this.element.scrollWidth>this.element.clientWidth},o.render=function(e,t){var n=this,r=JSLinq(e.options.items).Select(function(e){return Object(u.h)("li",{onClick:function(t){return n.callback(t,e)}},e.text)}),o=[p.items];return t.show&&o.push(p.show),Object(u.h)("div",{class:p.actionMenu,ref:function(e){return n.element=e}},Object(u.h)("div",{class:p.button,onClick:this.toggle.bind(this)}),Object(u.h)("ul",{class:o.join(" ")},r))},t}(u.Component),m=n("zMTv"),h=function(e){function t(){return e.apply(this,arguments)||this}var n,r;r=e,(n=t).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var o=t.prototype;return o.onSelect=function(e){var t=this.props.data.line.match;t.playerListEventArgs={event:e,selected:this.props.data},t.update()},o.render=function(e){return Object(u.h)("div",{class:[m.player].join(" "),onClick:this.onSelect.bind(this),id:e.data.id},Object(u.h)("div",{class:m.number},e.data.number),Object(u.h)("div",{class:m.text},e.data.name))},t}(u.Component);s=h,l="Empty",c=Object.freeze({id:0,name:"?"}),l in s?Object.defineProperty(s,l,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[l]=c;var d=n("t4lu"),v=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return o(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t=e.call.apply(e,[this].concat(r))||this),"state",{actionMenu:{title:"A title",items:[]}}),t}var n,i;i=e,(n=t).prototype=Object.create(i.prototype),n.prototype.constructor=n,n.__proto__=i;var a=t.prototype;return a.componentWillMount=function(){this.state.actionMenu.items.AddRange([{text:"Add player",onClick:this.addPlayer.bind(this,void 0)},{text:"Add line",onClick:this.addLine.bind(this)},{text:"Remove line",onClick:this.removeLine.bind(this)}])},a.addPlayer=function(e){this.props.data.players.Add(e||r({},h.Empty,{line:this.props.data})),this.setState(this.state)},a.removePlayer=function(e){this.props.data.players.Remove(e),this.setState(this.state)},a.addLine=function(){var e=this.props.data.match,t={players:[],match:e};t.players.push(r({},h.Empty,{line:t})),e.lines.Insert(t,e.lines.indexOf(this.props.data)+1),e.update()},a.removeLine=function(){var e=this.props.data.match;e.lines.Remove(this.props.data),e.update()},a.render=function(e,t){var n=0,r=e.data.players.map(function(e){return Object(u.h)(h,{key:n++,data:e})});return Object(u.h)("div",{class:d.line},Object(u.h)(f,{options:t.actionMenu}),Object(u.h)("div",{class:["players",d.players].join(" ")},r))},t}(u.Component),g=n("W8JN"),y=function(){function e(){}return e.Coaches=function(){return e.All.Where(function(e){return"Spelare"!=e.group})},e.Players=function(){return e.All.Where(function(e){return"Spelare"==e.group})},e}();!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(y,"All",[{year:"2007",firstname:"Agnes",lastname:"Lundwall",group:"Spelare",photo:"Ja",nr:"24",size:"164",note:"Fr.kö 2012-09-18",status:""},{year:"2007",firstname:"Alexandra",lastname:"Sandberg",group:"Spelare",photo:"",nr:"6",size:"",note:"Fr.kö 2014-06-09",status:""},{year:"2007",firstname:"Almi",lastname:"Palmér",group:"Spelare",photo:"",nr:"21",size:"",note:"Fr.kö 2016-04-05",status:""},{year:"2007",firstname:"Anna",lastname:"Böcker",group:"Spelare",photo:"",nr:"",size:"",note:"Fr.kö 2019-04-09",status:""},{year:"2007",firstname:"Clara",lastname:"Thulin",group:"Spelare",photo:"",nr:"29",size:"",note:"Fr.kö 2018-04-24",status:""},{year:"2007",firstname:"Ebba",lastname:"Hellkvist Maas",group:"Spelare",photo:"",nr:"18",size:"",note:"Fr.kö 2013-09-02",status:""},{year:"2007",firstname:"Ellinor",lastname:"Belulaj",group:"Spelare",photo:"",nr:"17",size:"",note:"Fr.kö 2018-12-27",status:""},{year:"2007",firstname:"Elsa",lastname:"Berisha",group:"Spelare",photo:"",nr:"15",size:"",note:"Fr.kö 2017-05-16",status:""},{year:"2007",firstname:"Filipha",lastname:"Stifors",group:"Spelare",photo:"",nr:"19",size:"",note:"",status:""},{"":"",year:"2007",firstname:"Hanna",lastname:"Håkansson",group:"Spelare",photo:"",nr:"3",size:"",note:"",status:""},{"":"",year:"2007",firstname:"Ida",lastname:"Wester",group:"Spelare",photo:"Ja",nr:"4",size:"140",note:"Fr.kö 2012-05-30",status:""},{"":"",year:"2007",firstname:"Isa",lastname:"Böcker",group:"Spelare",photo:"",nr:"",size:"",note:"Fr.kö 2019-04-09",status:""},{"":"",year:"2007",firstname:"Karin",lastname:"Kohdaida",group:"Spelare",photo:"",nr:"10",size:"",note:"Fr.kö 2015-08-24",status:""},{"":"",year:"2007",firstname:"Maja",lastname:"Andersson",group:"Spelare",photo:"",nr:"7",size:"140",note:"Fr.kö 2015-05-07",status:""},{"":"",year:"2007",firstname:"Marija Marta",lastname:"Ozolina",group:"Spelare",photo:"",nr:"5",size:"",note:"Fr.kö 2016-06-29",status:""},{"":"",year:"2007",firstname:"Mariline",lastname:"Lejon-Lambert",group:"Spelare",photo:"",nr:"",size:"",note:"Fr.kö 2019-04-23",status:""},{"":"",year:"2007",firstname:"Martha",lastname:"Svensson",group:"Spelare",photo:"",nr:"2",size:"",note:"",status:""},{"":"",year:"2007",firstname:"Milla",lastname:"Jonsson",group:"Spelare",photo:"",nr:"23",size:"",note:"Fr.kö 2018-05-31",status:""},{"":"",year:"2007",firstname:"Molly",lastname:"Häll",group:"Spelare",photo:"",nr:"16",size:"",note:"Fr.kö 2019-01-05",status:""},{"":"",year:"2007",firstname:"Natalie",lastname:"Olsson",group:"Spelare",photo:"",nr:"11",size:"",note:"Fr.kö 2015-10-05",status:""},{"":"",year:"2007",firstname:"Nellie",lastname:"Bengtsson",group:"Spelare",photo:"",nr:"30",size:"",note:"",status:""},{"":"",year:"2007",firstname:"Pella",lastname:"Månsson",group:"Spelare",photo:"",nr:"14",size:"",note:"Fr.kö 2018-01-18",status:""},{"":"",year:"2007",firstname:"Saga",lastname:"Svahn",group:"Spelare",photo:"",nr:"8",size:"",note:"",status:""},{"":"",year:"2007",firstname:"Tilda",lastname:"Bengtsson",group:"Spelare",photo:"",nr:"27",size:"",note:"",status:""},{"":"",year:"2007",firstname:"Tilde",lastname:"Alling",group:"Spelare",photo:"",nr:"9",size:"",note:"Fr.kö 2014-05-14",status:""},{"":"",year:"2007",firstname:"Tintin",lastname:"Norlin Ljungdahl",group:"Spelare",photo:"",nr:"20",size:"",note:"Fr.kö 2017-11-07",status:""},{"":"",year:"2007",firstname:"Vilda",lastname:"Skog",group:"Spelare",photo:"Ja",nr:"28",size:"152",note:"Fr.kö 2015-10-12",status:""},{"":""},{"":"",year:"",firstname:"",lastname:"",group:"",photo:"",nr:"",size:"",note:"",status:""},{"":""},{"":"",year:"1974",firstname:"Fredrik",lastname:"Lundwall",group:"Tränare",photo:"",nr:"",size:"",note:"",status:""},{"":"",year:"1974",firstname:"Henrik",lastname:"Wester",group:"Tränare",photo:"",nr:"",size:"",note:"",status:""},{"":"",year:"1973",firstname:"Kolbäck",lastname:"Susanne",group:"Tränare",photo:"",nr:"",size:"",note:"",status:""},{"":"",year:"1974",firstname:"Thor-Björn",lastname:"Andersson",group:"Tränare",photo:"",nr:"",size:"",note:"Fr.kö 2019-03-18",status:""},{"":"",year:"1964",firstname:"Kalle",lastname:"Hansson",group:"Ungdomsansvarig",photo:"",nr:"",size:"",note:"",status:""}]);var b=n("abVj"),S=function(e){function t(){return e.apply(this,arguments)||this}var n,r;return r=e,(n=t).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r,t.prototype.render=function(e){var t=this,n=["#808080","#e0e2e4","#c6bcb6","#96897f","#625750","#484f4f"].Select(function(n){return Object(u.h)("li",{style:{background:n},onClick:e.options.onClick.bind(t,n)})});return Object(u.h)("ul",{class:b.colorPicker},n)},t}(u.Component),w=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return i(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t=e.call.apply(e,[this].concat(r))||this),"state",{players:[]}),t}var n,r;r=e,(n=t).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var o=t.prototype;return o.componentWillMount=function(){var e=y.Players().Select(function(e){return{id:e.firstname+" "+e.lastname,name:e.firstname+" "+e.lastname,number:parseInt(e.nr||"0")}}).OrderBy(function(e){return e.name});this.state.players.AddRange(e)},o.render=function(e,t){var n=this,r=e.match.playerListEventArgs,o=[g.playerList];if(!r.event)return Object(u.h)("ul",null);o.push(g.show);var i=e.match.lines.SelectMany(function(e){return e.players}),a=t.players.map(function(e){var t=i.Any(function(t){return t.id==e.id})?g.selected:"";return Object(u.h)("li",{class:t,onClick:n.onSelectPlayer.bind(n,e)},e.name)});return Object(u.h)("ul",{class:o.join(" ")},Object(u.h)("li",{onClick:this.onRemoveSelectPlayer.bind(this)},"Remove - ",r.selected.name),Object(u.h)("li",null,Object(u.h)(S,{options:{onClick:this.setColor.bind(this)}})),a)},o.close=function(){this.props.match.playerListEventArgs={},this.props.match.update()},o.setColor=function(e){console.log(111),this.props.match.playerListEventArgs.selected.color=e},o.onSelectPlayer=function(e){var t=this.props.match.playerListEventArgs.selected;if(t&&t.line){var n=e.line=t.line,r=n.players.indexOf(t);n.players[r]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){i(e,t,n[t])})}return e}({},e),this.close()}},o.onRemoveSelectPlayer=function(){var e=this.props.match.playerListEventArgs.selected;e&&e.line&&(e.line.players.Remove(e),this.close())},t}(u.Component),O=function(){a(this,"home",{id:0,name:"home",score:0,lines:[]}),a(this,"guest",{id:0,name:"guest",score:0,lines:[]}),a(this,"playerListEventArgs",{}),a(this,"lines",[])},j=n("uDKj"),_=n("kOkB"),k=n.n(_);n.d(t,"default",function(){return E});var E=function(e){function t(){var t,n,r,o;return t=e.call(this)||this,n=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t),r="state",o={match:new O(function(){return t.setState(t.state)})},r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,t.state.match.lines=t.state.match.home.lines,t.randomizeLineUp(),t}var n,r;r=e,(n=t).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var o=t.prototype;return o.componentDidMount=function(){var e=[].slice.call(document.getElementsByClassName("players"));k()(e)},o.render=function(e,t){var n=t.match.lines.map(function(e,t){return Object(u.h)(v,{key:t,data:e})});return Object(u.h)("div",{class:[j.main].join(" ")},Object(u.h)("div",{class:[j.pitch].join(" ")},n),Object(u.h)(w,{match:t.match}),Object(u.h)("img",{class:j.reload,src:"assets/img/refresh_48px.svg",onClick:this.randomizeLineUp.bind(this),title:"New line up"}))},o.randomizeLineUp=function(){var e=this;this.state.match.lines.Clear();var t=y.Players();[1,2,3,1].ForEach(function(n){var r={match:e.state.match,players:new Array(n)};r.players.ForEach(function(e,n){var o=Math.floor(Math.random()*t.length),i=t[o];t.Remove(i),r.players[n]={id:i.firstname+" "+i.lastname||o.toString(),name:i.firstname+" "+i.lastname||o.toString(),number:parseInt(i.nr||"0"),line:r}}),e.state.match.lines.Add(r)}),this.setState(this.state)},t}(u.Component)},MAaF:function(e){var t="function"==typeof setImmediate;e.exports=t?function(e){setImmediate(e)}:function(e){setTimeout(e,0)}},R5Bz:function(e,t,n){"use strict";(function(t){function r(e,t,n){var r=function(e,t,n){var r,o;for(r=0;r<c.length;r++)if((o=c[r]).element===e&&o.type===t&&o.fn===n)return r}(e,t,n);if(r){var o=c[r].wrapper;return c.splice(r,1),o}}var o=n("Gkjj"),i=n("rXEU"),a=t.document,s=function(e,t,n,r){return e.addEventListener(t,n,r)},l=function(e,t,n,r){return e.removeEventListener(t,n,r)},c=[];t.addEventListener||(s=function(e,n,o){return e.attachEvent("on"+n,function(e,n,o){var i=r(e,n,o)||function(e,n,r){return function(n){var o=n||t.event;o.target=o.target||o.srcElement,o.preventDefault=o.preventDefault||function(){o.returnValue=!1},o.stopPropagation=o.stopPropagation||function(){o.cancelBubble=!0},o.which=o.which||o.keyCode,r.call(e,o)}}(e,0,o);return c.push({wrapper:i,element:e,type:n,fn:o}),i}(e,n,o))},l=function(e,t,n){var o=r(e,t,n);if(o)return e.detachEvent("on"+t,o)}),e.exports={add:s,remove:l,fabricate:function(e,t,n){var r=-1===i.indexOf(t)?new o(t,{detail:n}):function(){var e;return a.createEvent?(e=a.createEvent("Event")).initEvent(t,!0,!0):a.createEventObject&&(e=a.createEventObject()),e}();e.dispatchEvent?e.dispatchEvent(r):e.fireEvent("on"+t,r)}}}).call(this,n("pCvA"))},ReCf:function(e,t,n){"use strict";var r=n("ngLP"),o=n("DtED");e.exports=function(e,t){var n=t||{},i={};return void 0===e&&(e={}),e.on=function(t,n){return i[t]?i[t].push(n):i[t]=[n],e},e.once=function(t,n){return n._once=!0,e.on(t,n),e},e.off=function(t,n){var r=arguments.length;if(1===r)delete i[t];else if(0===r)i={};else{var o=i[t];if(!o)return e;o.splice(o.indexOf(n),1)}return e},e.emit=function(){var t=r(arguments);return e.emitterSnapshot(t.shift()).apply(this,t)},e.emitterSnapshot=function(t){var a=(i[t]||[]).slice(0);return function(){var i=r(arguments),s=this||e;if("error"===t&&!1!==n.throws&&!a.length)throw 1===i.length?i[0]:i;return a.forEach(function(r){n.async?o(r,i,s):r.apply(s,i),r._once&&e.off(t,r)}),e}},e}},W8JN:function(e){e.exports={"player-list":"player-list__3kl8s",playerList:"player-list__3kl8s",show:"show__DCTXs",selected:"selected__2jo3u"}},abVj:function(e){e.exports={"color-picker":"color-picker__3E5O1",colorPicker:"color-picker__3E5O1"}},kOkB:function(e,t,n){"use strict";(function(t){function r(e,n,r,o){t.navigator.pointerEnabled?v[n](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[r],o):t.navigator.msPointerEnabled?v[n](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[r],o):(v[n](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[r],o),v[n](e,r,o))}function o(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var t=e.button;return void 0!==t?1&t?1:2&t?3:4&t?2:0:void 0}function i(e,n){return void 0!==t[n]?t[n]:b.clientHeight?b[e]:y.body[e]}function a(e,t,n){var r,o=e||{},i=o.className;return o.className+=" gu-hide",r=y.elementFromPoint(t,n),o.className=i,r}function s(){return!1}function l(){return!0}function c(e){return e.width||e.right-e.left}function u(e){return e.height||e.bottom-e.top}function p(e){return e.parentNode===y?null:e.parentNode}function f(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||function e(t){if(!t)return!1;if("false"===t.contentEditable)return!1;if("true"===t.contentEditable)return!0;return e(p(t))}(e)}function m(e){return e.nextElementSibling||function(){var t=e;do{t=t.nextSibling}while(t&&1!==t.nodeType);return t}()}function h(e,t){var n=function(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}(t),r={pageX:"clientX",pageY:"clientY"};return e in r&&!(e in n)&&r[e]in n&&(e=r[e]),n[e]}var d=n("ReCf"),v=n("R5Bz"),g=n("K/8s"),y=document,b=y.documentElement;e.exports=function(e,t){function n(e){return-1!==ee.containers.indexOf(e)||$.isContainer(e)}function S(e){var t=e?"remove":"add";r(b,t,"mousedown",_),r(b,t,"mouseup",A)}function w(e){r(b,e?"remove":"add","mousemove",k)}function O(e){var t=e?"remove":"add";v[t](b,"selectstart",j),v[t](b,"click",j)}function j(e){q&&e.preventDefault()}function _(e){if(W=e.clientX,H=e.clientY,1===o(e)&&!e.metaKey&&!e.ctrlKey){var t=e.target,n=E(t);n&&(q=n,w(),"mousedown"===e.type&&(f(t)?t.focus():e.preventDefault()))}}function k(e){if(q)if(0!==o(e)){if(void 0===e.clientX||e.clientX!==W||void 0===e.clientY||e.clientY!==H){if($.ignoreInputTextSelection){var t=h("clientX",e),n=h("clientY",e);if(f(y.elementFromPoint(t,n)))return}var a=q;w(!0),O(),x(),C(a);var s,l={left:(s=Y.getBoundingClientRect()).left+i("scrollLeft","pageXOffset"),top:s.top+i("scrollTop","pageYOffset")};J=h("pageX",e)-l.left,K=h("pageY",e)-l.top,g.add(V||Y,"gu-transit"),function(){if(!X){var e=Y.getBoundingClientRect();(X=Y.cloneNode(!0)).style.width=c(e)+"px",X.style.height=u(e)+"px",g.rm(X,"gu-transit"),g.add(X,"gu-mirror"),$.mirrorContainer.appendChild(X),r(b,"add","mousemove",N),g.add($.mirrorContainer,"gu-unselectable"),ee.emit("cloned",X,Y,"mirror")}}(),N(e)}}else A({})}function E(e){if(!(ee.dragging&&X||n(e))){for(var t=e;p(e)&&!1===n(p(e));){if($.invalid(e,t))return;if(!(e=p(e)))return}var r=p(e);if(r&&!$.invalid(e,t)&&$.moves(e,r,t,m(e)))return{item:e,source:r}}}function C(e){var t,n;t=e.item,n=e.source,("boolean"==typeof $.copy?$.copy:$.copy(t,n))&&(V=e.item.cloneNode(!0),ee.emit("cloned",V,e.item,"copy")),I=e.source,Y=e.item,U=G=m(e.item),ee.dragging=!0,ee.emit("drag",Y,I)}function x(){if(ee.dragging){var e=V||Y;P(e,p(e))}}function z(){q=!1,w(!0),O(!0)}function A(e){if(z(),ee.dragging){var t=V||Y,n=h("clientX",e),r=h("clientY",e),o=B(a(X,n,r),n,r);o&&(V&&$.copySortSource||!V||o!==I)?P(t,o):$.removeOnSpill?F():L()}}function P(e,t){var n=p(e);V&&$.copySortSource&&t===I&&n.removeChild(Y),M(t)?ee.emit("cancel",e,I,I):ee.emit("drop",e,t,I,G),T()}function F(){if(ee.dragging){var e=V||Y,t=p(e);t&&t.removeChild(e),ee.emit(V?"cancel":"remove",e,t,I),T()}}function L(e){if(ee.dragging){var t=arguments.length>0?e:$.revertOnSpill,n=V||Y,r=p(n),o=M(r);!1===o&&t&&(V?r&&r.removeChild(V):I.insertBefore(n,U)),o||t?ee.emit("cancel",n,I,I):ee.emit("drop",n,r,I,G),T()}}function T(){var e=V||Y;z(),X&&(g.rm($.mirrorContainer,"gu-unselectable"),r(b,"remove","mousemove",N),p(X).removeChild(X),X=null),e&&g.rm(e,"gu-transit"),Z&&clearTimeout(Z),ee.dragging=!1,Q&&ee.emit("out",e,Q,I),ee.emit("dragend",e),I=Y=V=U=G=Z=Q=null}function M(e,t){var n;return n=void 0!==t?t:X?G:m(V||Y),e===I&&n===U}function B(e,t,r){function o(){if(!1===n(i))return!1;var o=R(i,e),a=D(i,o,t,r);return!!M(i,a)||$.accepts(Y,i,I,a)}for(var i=e;i&&!o();)i=p(i);return i}function N(e){function t(e){ee.emit(e,i,Q,I)}if(X){e.preventDefault();var n=h("clientX",e),r=h("clientY",e),o=r-K;X.style.left=n-J+"px",X.style.top=o+"px";var i=V||Y,s=a(X,n,r),l=B(s,n,r),c=null!==l&&l!==Q;(c||null===l)&&(Q&&t("out"),Q=l,c&&t("over"));var u=p(i);if(l!==I||!V||$.copySortSource){var f,d=R(l,s);if(null!==d)f=D(l,d,n,r);else{if(!0!==$.revertOnSpill||V)return void(V&&u&&u.removeChild(i));f=U,l=I}(null===f&&c||f!==i&&f!==m(i))&&(G=f,l.insertBefore(i,f),ee.emit("shadow",i,l,I))}else u&&u.removeChild(i)}}function R(e,t){for(var n=t;n!==e&&p(n)!==e;)n=p(n);return n===b?null:n}function D(e,t,n,r){function o(e){return e?m(t):t}var i,a="horizontal"===$.direction;return t!==e?(i=t.getBoundingClientRect(),o(a?n>i.left+c(i)/2:r>i.top+u(i)/2)):function(){var t,o,i,s=e.children.length;for(t=0;t<s;t++){if(i=(o=e.children[t]).getBoundingClientRect(),a&&i.left+i.width/2>n)return o;if(!a&&i.top+i.height/2>r)return o}return null}()}var X,I,Y,J,K,W,H,U,G,V,Z;1===arguments.length&&!1===Array.isArray(e)&&(t=e,e=[]);var q,Q=null,$=t||{};void 0===$.moves&&($.moves=l),void 0===$.accepts&&($.accepts=l),void 0===$.invalid&&($.invalid=function(){return!1}),void 0===$.containers&&($.containers=e||[]),void 0===$.isContainer&&($.isContainer=s),void 0===$.copy&&($.copy=!1),void 0===$.copySortSource&&($.copySortSource=!1),void 0===$.revertOnSpill&&($.revertOnSpill=!1),void 0===$.removeOnSpill&&($.removeOnSpill=!1),void 0===$.direction&&($.direction="vertical"),void 0===$.ignoreInputTextSelection&&($.ignoreInputTextSelection=!0),void 0===$.mirrorContainer&&($.mirrorContainer=y.body);var ee=d({containers:$.containers,start:function(e){var t=E(e);t&&C(t)},end:x,cancel:L,remove:F,destroy:function(){S(!0),A({})},canMove:function(e){return!!E(e)},dragging:!1});return!0===$.removeOnSpill&&ee.on("over",function(e){g.rm(e,"gu-hide")}).on("out",function(e){ee.dragging&&g.add(e,"gu-hide")}),S(),ee}}).call(this,n("pCvA"))},ngLP:function(e){e.exports=function(e,t){return Array.prototype.slice.call(e,t)}},pCvA:function(e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t},rXEU:function(e,t,n){"use strict";(function(t){var n=[],r="",o=/^on/;for(r in t)o.test(r)&&n.push(r.slice(2));e.exports=n}).call(this,n("pCvA"))},t4lu:function(e){e.exports={line:"line__ChHp0",players:"players__sUl2_",actions:"actions__3lP_E"}},uDKj:function(e){e.exports={main:"main__1gZmu",pitch:"pitch__2rJNf",reload:"reload__2t2F6"}},zMTv:function(e){e.exports={player:"player__3_b_C",number:"number__26zQA",text:"text__2Cl9v"}}}]);
//# sourceMappingURL=index.tsx.chunk.fd98f.js.map