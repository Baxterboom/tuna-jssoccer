(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{FA6U:function(t){t.exports={home:"home__2Q5nZ"}},FDtd:function(t,e,n){"use strict";n.r(e);var r=n("4dxh"),o=n("FA6U"),c=n("z+7z"),i=function(t){function e(){return t.apply(this,arguments)||this}var n,o;o=t,(n=e).prototype=Object.create(o.prototype),n.prototype.constructor=n,n.__proto__=o;var i=e.prototype;return i.set=function(t,e){var n=t.score+e;n<0||(t.score=n,this.setState(this.state))},i.render=function(t){return Object(r.h)("div",{class:c.main},Object(r.h)("div",null,t.data.name.toUpperCase()),Object(r.h)("div",null,t.data.score,Object(r.h)("button",{class:[].join(" "),onClick:this.set.bind(this,t.data,1),title:"increase score"},"+"),Object(r.h)("button",{class:[].join(" "),onClick:this.set.bind(this,t.data,-1),title:"decrease score"},"-")))},e}(r.Component),a=n("TcrM"),s=function(t){function e(){return t.apply(this,arguments)||this}var n,o;return o=t,(n=e).prototype=Object.create(o.prototype),n.prototype.constructor=n,n.__proto__=o,e.prototype.render=function(t){return Object(r.h)("div",{class:[a.scoreboard].join(" ")},Object(r.h)(i,{data:t.match.home}),Object(r.h)(i,{data:t.match.guest}))},e}(r.Component),u=n("sxGq");n.d(e,"default",function(){return l});var l=function(t){function e(){for(var e,n,r,o,c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i))||this,n=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e),r="state",o={match:new u.a(function(){return e.setState(e.state)})},r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,e}var n,c;return c=t,(n=e).prototype=Object.create(c.prototype),n.prototype.constructor=n,n.__proto__=c,e.prototype.render=function(t,e){return Object(r.h)("ul",{class:o.home},Object(r.h)("fieldset",null,Object(r.h)("legend",null,"Lineup"),Object(r.h)("li",null,Object(r.h)("a",{href:"/game/1,2,3,1"},"7 players")),Object(r.h)("li",null,Object(r.h)("a",{href:"/game/1,3,1,3,1"},"9 players"))),Object(r.h)("fieldset",null,Object(r.h)("legend",null,"Demo"),Object(r.h)(s,{match:e.match})))},e}(r.Component)},TcrM:function(t){t.exports={scoreboard:"scoreboard__baKDt"}},sxGq:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",function(){return o});var o=function(){r(this,"home",{id:0,name:"home",score:0,lines:[]}),r(this,"guest",{id:0,name:"guest",score:0,lines:[]}),r(this,"playerListEventArgs",{}),r(this,"lines",[])}},"z+7z":function(t){t.exports={main:"main__2cZwe"}}}]);
//# sourceMappingURL=index.tsx.chunk.0c9b6.js.map