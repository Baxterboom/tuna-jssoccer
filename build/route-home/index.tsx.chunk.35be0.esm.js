(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{FA6U:function(e){e.exports={home:"home__2Q5nZ"}},FDtd:function(e,t,s){"use strict";s.r(t);var n=s("4dxh"),c=s("FA6U"),a=s("z+7z");class r extends n.Component{set(e,t){const s=e.score+t;s<0||(e.score=s,this.setState(this.state))}render(e,t){return Object(n.h)("div",{class:a.main},Object(n.h)("div",null,e.data.name.toUpperCase()),Object(n.h)("div",null,e.data.score,Object(n.h)("button",{class:[].join(" "),onClick:this.set.bind(this,e.data,1),title:"increase score"},"+"),Object(n.h)("button",{class:[].join(" "),onClick:this.set.bind(this,e.data,-1),title:"decrease score"},"-")))}}var i=s("TcrM");class o extends n.Component{render(e,t){return Object(n.h)("div",{class:[i.scoreboard].join(" ")},Object(n.h)(r,{data:e.match.home}),Object(n.h)(r,{data:e.match.guest}))}}var l=s("sxGq");s.d(t,"default",function(){return h});class h extends n.Component{constructor(){var e,t,s;super(...arguments),e=this,t="state",s={match:new l.a(()=>this.setState(this.state))},t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s}render(e,t){return Object(n.h)("ul",{class:c.home},Object(n.h)("fieldset",null,Object(n.h)("legend",null,"Lineup"),Object(n.h)("li",null,Object(n.h)("a",{href:"/game/1,2,3,1"},"7 players")),Object(n.h)("li",null,Object(n.h)("a",{href:"/game/1,3,1,3,1"},"9 players"))),Object(n.h)("fieldset",null,Object(n.h)("legend",null,"Demo"),Object(n.h)(o,{match:t.match})))}}},TcrM:function(e){e.exports={scoreboard:"scoreboard__baKDt"}},sxGq:function(e,t,s){"use strict";function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s.d(t,"a",function(){return c});class c{constructor(e){this.update=e,n(this,"home",{id:0,name:"home",score:0,lines:[]}),n(this,"guest",{id:0,name:"guest",score:0,lines:[]}),n(this,"playerListEventArgs",{}),n(this,"lines",[])}}},"z+7z":function(e){e.exports={main:"main__2cZwe"}}}]);
//# sourceMappingURL=index.tsx.chunk.35be0.esm.js.map