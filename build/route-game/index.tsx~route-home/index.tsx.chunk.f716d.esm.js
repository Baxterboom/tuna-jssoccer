(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{M1bE:function(e,n,a){"use strict";var r=a("4dxh"),t=a("z+7z");class s extends r.Component{set(e,n){const a=e.score+n;a<0||(e.score=a,this.setState(this.state))}render(e,n){return Object(r.h)("div",{class:t.main},Object(r.h)("button",{class:[].join(" "),onClick:this.set.bind(this,e.data,-1),title:"decrease score"},"-"),Object(r.h)("div",null,e.data.name.toUpperCase(),": ",Object(r.h)("b",null,e.data.score)),Object(r.h)("button",{class:[].join(" "),onClick:this.set.bind(this,e.data,1),title:"increase score"},"+"))}}var o=a("TcrM");a.d(n,"a",function(){return l});class l extends r.Component{render(e,n){return Object(r.h)("div",{class:[o.scoreboard].join(" ")},Object(r.h)(s,{data:e.match.home}),Object(r.h)(s,{data:e.match.guest}))}}},TcrM:function(e){e.exports={scoreboard:"scoreboard__baKDt"}},abVj:function(e){e.exports={"color-picker":"color-picker__3E5O1",colorPicker:"color-picker__3E5O1"}},hcwh:function(e,n,a){"use strict";function r(e,n){const a=n=>{const a=e();a&&a.contains(n.target)||r()},r=()=>{document.removeEventListener("click",a),n()};return setTimeout(()=>document.addEventListener("click",a)),r}function t(e){return btoa(e)}function s(e){return atob(e)}function o(e,n){for(let a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&!0===n(e[a],a))break}a.d(n,"b",function(){return r}),a.d(n,"d",function(){return t}),a.d(n,"c",function(){return s}),a.d(n,"a",function(){return o});a("4dxh")},iFcc:function(e,n,a){"use strict";function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}a.d(n,"a",function(){return l});var t=a("4dxh"),s=a("zMTv"),o=a("vls+");class l extends t.Component{static get Empty(){return{id:-1,firstname:"?",lastname:"?",number:"?",goals:0,color:0}}onSelect(e){const n=this.props.data.line.match;n.playerListEventArgs={event:e,selected:this.props.data},n.update()}render(e,n){const a=e.data,r=a.goals>0?Object(t.h)("div",{class:s.goals},a.goals):"";return Object(t.h)("div",{class:[s.player].join(" "),style:{background:o.a[a.color]},onClick:this.onSelect.bind(this),id:a.id},Object(t.h)("div",{class:s.number},a.number),Object(t.h)("div",{class:s.text},a.displayname),r)}static Map(e,n){e.id=e.id||function(e){let n=0;if(0==e.length)return n;for(let a=0;a<e.length;a++)n=(n<<5)-n+e.charCodeAt(a),n&=n;return n}([e.nr||"?",e.firstname||"?",e.lastname||"?"].join("#")).toString(),"59286199"==e.id&&(e.id=function(){const e=()=>(65536*(1+Math.random())|0).toString(16).substring(1);return(e()+e()+"-"+e()+"-4"+e().substr(0,3)+"-"+e()+"-"+e()+e()+e()).toLowerCase()}());const a={id:e.id,color:0,goals:0,number:e.nr||"?",firstname:e.firstname||"?",lastname:e.lastname,displayname:e.firstname+" "+e.lastname};return n?function(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{},t=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.forEach(function(n){r(e,n,a[n])})}return e}({},a,n):a}}},mLX3:function(e,n,a){"use strict";function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}a.d(n,"a",function(){return t});class t{}r(t,"All",()=>[{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2012-09-18",Personnummer:"20070505-6745","Kön":"Kvinna",firstname:"Agnes",lastname:"Lundwall",Adress:"Flyttfågelsgatan 9",Postnummer:"262 57",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0702040485","E-post":"annika.lundwall@icloud.com","Målsman 1":"Fredrik Lundwall",Relation:"mamma",Telefon:"0707158259","Målsman 2":"Annika Lundwall",status:"Aktiv",Skapad:"2012-09-18",Uppdaterad:"2019-09-01","Bekräftad":"2019-01-02",id:"2513",nr:"11","Tröjstlk":"164",Foto:"Ja"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2019-06-04",Personnummer:"20070621-5068","Kön":"Kvinna",firstname:"Alexandra",lastname:"Jordö",Adress:"Vintervägen 19",Postnummer:"262 68",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0760104480","Målsman 1":"Donna Jordö",Relation:"Pappa","E-post":"daniel_jordo@hotmail.com",Telefon:"0705388953","Målsman 2":"Daniel Jordö",status:"Aktiv",Skapad:"2019-06-04",Uppdaterad:"2019-06-04","Bekräftad":"2019-06-04",id:"4454",nr:"29"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2014-06-09",Personnummer:"20071105-0401","Kön":"Kvinna",firstname:"Alexandra",lastname:"Sandberg",Adress:"Galoppg. 10",Postnummer:"262 58",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0707722119","E-post":"magnus_sandbe22@hotmail.com","Målsman 1":"Yulia Sandberg",Relation:"Pappa",Telefon:"0723306418","Målsman 2":"Magnus Sandberg",status:"Aktiv",Skapad:"2014-06-09",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"2922",nr:"6"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2019-04-26",Personnummer:"20070702-6720","Kön":"Kvinna",firstname:"Alicia",lastname:"Charlesson",Adress:"Norra kyrkogatn 5",Postnummer:"262 32",Ort:"ÄNGELHOLM",Land:"Sverige","Målsman 1":"Jenny Charlesson",Relation:"pappa","E-post":"olajohnsson77@hotmail.com",Telefon:"0701764511","Målsman 2":"Ola Johnsson",status:"Aktiv",Skapad:"2019-04-26",Uppdaterad:"2019-04-26","Bekräftad":"2019-04-26",id:"4394",nr:"33"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2016-04-05",Personnummer:"20070801-4345","Kön":"Kvinna",firstname:"Almi",lastname:"Palmér",Adress:"Strandbackevägen 11",Postnummer:"266 54",Ort:"VEJBYSTRAND",Land:"Sverige","Telefon hem":"043110474","Målsman 1":"Sofia Palmér",Relation:"Pappa","E-post":"magnus@tenpoints.se",Telefon:"0736449444","Målsman 2":"Magnus Palmér",status:"Aktiv",Skapad:"2016-04-05",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"3489",nr:"21"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2019-04-09",Personnummer:"20070315-2447","Kön":"Kvinna",firstname:"Anna",lastname:"Böcker",Adress:"Starbyvägen 158",Postnummer:"262 95",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0730650632","E-post":"jessica@tgm.nu","Målsman 1":"Jessica Böcker",Relation:"Pappa",Telefon:"0702479489","Målsman 2":"Christian Böcker",status:"Aktiv",Skapad:"2019-04-09",Uppdaterad:"2019-04-09","Bekräftad":"2019-04-09",id:"4362",nr:"25"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2013-09-02",Personnummer:"20070806-0900","Kön":"Kvinna",firstname:"Ebba",lastname:"Hellkvist Maas",Adress:"Galoppgatan 4",Postnummer:"262 58",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0708505998","Telefon hem":"0431311415","E-post":"bjornhellkvist@live.se","Målsman 1":"Anna Hellkvit Maas",Relation:"pappa",Telefon:"0705453676","Målsman 2":"Björn Hellkvist",status:"Aktiv",Skapad:"2013-09-02",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"2688",nr:"18"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2018-12-27",Personnummer:"20071015-6704","Kön":"Kvinna",firstname:"Ellinor",lastname:"Belulaj",Adress:"Heimdalgatan 3b",Postnummer:"262 44",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0762525249","Målsman 1":"Fadil",Relation:"Mamma","E-post":"Behluli_antigona@hotmail.com",Telefon:"0762525249","Målsman 2":"Antigona",status:"Aktiv",Skapad:"2018-12-27",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"4277",nr:"17"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2017-05-16",Personnummer:"20070307-9525","Kön":"Kvinna",firstname:"Elsa",lastname:"Berisha",Adress:"Stallgatan 2B",Postnummer:"262 52",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0769479575","Telefon hem":"0765588388","E-post":"aliardi06@hotmail.com",status:"Aktiv",Skapad:"2017-05-16",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"3836",nr:"15"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2019-04-25",Personnummer:"20070330-0640","Kön":"Kvinna",firstname:"Emma",lastname:"Holmberg",Adress:"Storgatan 98D",Postnummer:"262 33",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0707922137","E-post":"davidwallen77@gmail.com","Målsman 1":"Eva Holmberg",Relation:"pappa",Telefon:"0730725577","Målsman 2":"David Wallén",status:"Aktiv",Skapad:"2019-04-25",Uppdaterad:"2019-04-25","Bekräftad":"2019-04-25",id:"4393",nr:"31"},{Grupp:"F12",group:"Spelare",Personnummer:"20070305-0443","Kön":"Kvinna",firstname:"Filipha",lastname:"Stifors",Adress:"stigmansgatan 5",Postnummer:"262 62",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0723760880","Telefon hem":"0723117118","E-post":"anneliet76@gmail.com","Målsman 1":"Mathias  stifors",Relation:"mamma",Telefon:"0762405050","Målsman 2":"Annelie hellman",status:"Aktiv",Skapad:"2017-07-03",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"3913",nr:"19"},{Grupp:"F12",group:"Tränare",Personnummer:"19740110-1493","Kön":"Man",firstname:"Fredrik",lastname:"Lundwall",Adress:"Flyttfågelsgatan 9",Postnummer:"262 57",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0706405526","E-post":"fredrik@fredriklundwall.se",status:"Aktiv",Skapad:"2014-04-28",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"2825"},{Grupp:"F12",group:"Spelare",Personnummer:"20070310-5346","Kön":"Kvinna",firstname:"Hanna",lastname:"Håkansson",Adress:"Travgatan 9",Postnummer:"262 58",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0733442273","E-post":"fredrik1972@live.com","Målsman 1":"Fredrik",Relation:"Håkansson",Telefon:"0733442273",status:"Aktiv",Skapad:"2016-09-17",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"3645",nr:"3"},{Grupp:"F12",group:"Tränare",Personnummer:"19741005-3594","Kön":"Man",firstname:"Henrik",lastname:"Wester",Adress:"Saltsjövägen 12",Postnummer:"262 62",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0793358757","Telefon hem":"043188215","Telefon jobb":"0793358757","E-post":"westerhenrik01@gmail.com","Målsman 1":"Xxxxxx",Relation:"Alias",status:"Aktiv",Skapad:"2014-05-05",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"2845"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2012-05-30",Personnummer:"20070517-6980","Kön":"Kvinna",firstname:"Ida",lastname:"Wester",Adress:"Saltsjövägen 12",Postnummer:"262 63",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0793348258","Telefon hem":"043188215","E-post":"Charlott.palsson@mazars.se","Målsman 1":"Henrik Wester",Relation:"Mamma",Telefon:"0736203928","Målsman 2":"Charlott Pålsson",status:"Aktiv",Skapad:"2012-05-30",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"2470",nr:"4","Tröjstlk":"140",Foto:"Ja"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2019-04-09",Personnummer:"20070315-9608","Kön":"Kvinna",firstname:"Isa",lastname:"Böcker",Adress:"Starbyvägen 158",Postnummer:"262 95",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0706388289","E-post":"jessica@tgm.nu","Målsman 1":"Jessica Böcker",Relation:"Pappa",Telefon:"0702479489","Målsman 2":"Christian Böcker",status:"Aktiv",Skapad:"2019-04-09",Uppdaterad:"2019-04-09","Bekräftad":"2019-04-09",id:"4361",nr:"26"},{Grupp:"F12",group:"Ungdomsansvarig",Personnummer:"19640314-3552","Kön":"Man",firstname:"Kalle",lastname:"Hansson",Adress:"Boställsgatan 10",Postnummer:"262 53",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0768646827","Telefon jobb":"0431487805","E-post":"kalle@angelholmsff.se",status:"Aktiv",Skapad:"2011-05-18",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"9"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2015-08-24",Personnummer:"20070729-1266","Kön":"Kvinna",firstname:"Karin",lastname:"Kohdaida","c/o":"nej",Adress:"Heimdallgatan 1b",Postnummer:"262 44",Ort:"ÄNELHÖLM",Land:"Sverige","E-post":"abo.dawd@live.se","Målsman 1":"Ibrahim",Relation:"mamma","Målsman 2":"Balges",status:"Aktiv",Skapad:"2015-08-24",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"3384",nr:"10"},{Grupp:"F12",group:"Tränare",Personnummer:"19730429-8602","Kön":"Kvinna",firstname:"Kolbäck",lastname:"Susanne",Adress:"Espehögsgatan 42",Postnummer:"262 53",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0702375193","E-post":"s.kolback@gmail.com",status:"Aktiv",Skapad:"2012-05-04",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"2447"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2015-05-07",Personnummer:"20070720-4327","Kön":"Kvinna",firstname:"Maja",lastname:"Andersson",Adress:"Majsgatan 25",Postnummer:"262 53",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0731004122","Telefon hem":"043114122","E-post":"ulrand70@hotmail.com","Målsman 1":"Thor-Björn Andersson",Relation:"Mamma",Telefon:"0723214122","Målsman 2":"Ulrika Andersson",status:"Aktiv",Skapad:"2015-05-07",Uppdaterad:"2019-05-01","Bekräftad":"2019-01-02",id:"3323",nr:"7","Tröjstlk":"140"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2016-06-29",Personnummer:"20070320-6243","Kön":"Kvinna",firstname:"Marija Marta",lastname:"Ozolina",Adress:"Kamomillgatan 17",Postnummer:"262 52",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0703500027","E-post":"roland.kreslins@ekamant.se","Målsman 1":"Ilona Ozolina",Relation:"Pappa",Telefon:"0730940020","Målsman 2":"Roland Kreslins",status:"Aktiv",Skapad:"2016-06-29",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"3604",nr:"5"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2019-04-23",Personnummer:"20070123-7448","Kön":"Kvinna",firstname:"Mariline",lastname:"Lejon-Lambert",Adress:"Mörtgränd",Postnummer:"262 42",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0767991994","E-post":"Annalejon@hotmail.com","Målsman 1":"Anna Lejon",Relation:"Mamma",Telefon:"0767991994",status:"Aktiv",Skapad:"2012-06-04",Uppdaterad:"2019-04-23","Bekräftad":"2019-04-23",id:"2476",nr:"32"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2019-06-24",Personnummer:"20070328-3366","Kön":"Kvinna",firstname:"Marta",lastname:"Eklund",Adress:"Vintervägen 5",Postnummer:"262 68",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0738282888","E-post":"fredannaeklund@yahoo.se","Målsman 1":"Fredrik Eklund",Relation:"Pappa",Telefon:"0738282888",status:"Aktiv",Skapad:"2019-06-24",Uppdaterad:"2019-06-24","Bekräftad":"2019-06-24",id:"4462",nr:"34"},{Grupp:"F12",group:"Spelare",Personnummer:"20070923-6962","Kön":"Kvinna",firstname:"Martha",lastname:"Svensson",Adress:"Blekingegatan 14",Postnummer:"262 43",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0768704867","E-post":"Lindasvensson.v@gmail.com","Målsman 1":"Linda Svensson",Relation:"Pappa",Telefon:"0730581012","Målsman 2":"Jimmi Svensson",status:"Aktiv",Skapad:"2014-08-30",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"2971","Allergi/matval":"-",nr:"2"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2018-05-31",Personnummer:"20071218-0504","Kön":"Kvinna",firstname:"Milla",lastname:"Jonsson",Adress:"Landshövdingevägen 35",Postnummer:"262 52",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0702379253","E-post":"patrikasajonsson@telia.com",status:"Aktiv",Skapad:"2018-05-31",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"4178",nr:"23"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2019-01-05",Personnummer:"20070511-9402","Kön":"Kvinna",firstname:"Molly",lastname:"Häll",Adress:"Pildammsvägen 2",Postnummer:"262 93",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0709817158","Telefon hem":"0431410022","Målsman 1":"Maria Häll",Relation:"Pappa","E-post":"cjcjcj123@live.se",Telefon:"0702661627","Målsman 2":"Christer Häll",status:"Aktiv",Skapad:"2019-01-05",Uppdaterad:"2019-01-05","Bekräftad":"2019-01-05",id:"4280",nr:"16"},{Grupp:"F12",group:"Spelare",Personnummer:"20070205-3547","Kön":"Kvinna",firstname:"Nellie",lastname:"Bengtsson",Adress:"Espehögsgatan 43",Postnummer:"262 53",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0702375193","Telefon hem":"043183125","E-post":"s.kolback@gmail.com","Målsman 1":"Susanne Kolbäck",Relation:"mamma",Telefon:"0702375193",status:"Aktiv",Skapad:"2011-10-05",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"2240",nr:"30"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2018-01-18",Personnummer:"20070702-5003","Kön":"Kvinna",firstname:"Pella",lastname:"Månsson",Adress:"Umeågatan 20G",Postnummer:"262 65",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0761419993","Målsman 1":"Linda Månsson",Relation:"Pappa","E-post":"lindamansson@telia.com",Telefon:"0701747852","Målsman 2":"Jonas Nilsson",status:"Aktiv",Skapad:"2018-01-18",Uppdaterad:"2019-05-16","Bekräftad":"2019-01-02",id:"4033",nr:"14"},{Grupp:"F12",group:"Spelare",Personnummer:"20071209-1800","Kön":"Kvinna",firstname:"Saga",lastname:"Svahn",Adress:"Haradalsliden 15",Postnummer:"262 62",Ort:"ÄNGELHOLM",Land:"Sverige","Målsman 1":"Marlén Svahn",Relation:"mamma","E-post":"marlen77@live.se",Telefon:"0763200377",status:"Aktiv",Skapad:"2014-05-04",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"2844",nr:"8"},{Grupp:"F12",group:"Tränare",Kommentar:"Fr.kö 2019-03-18",Personnummer:"19740220-3538","Kön":"Man",firstname:"Thor-Björn",lastname:"Andersson",Adress:"Majsgatan 25",Postnummer:"262 53",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0734387180","Telefon hem":"043114122","E-post":"thor-bjorn.andersson@outlook.com",status:"Aktiv",Skapad:"2019-03-18",Uppdaterad:"2019-03-18","Bekräftad":"2019-03-18",id:"4328"},{Grupp:"F12",group:"Spelare",Personnummer:"20070205-7043","Kön":"Kvinna",firstname:"Tilda",lastname:"Bengtsson",Adress:"Espehögsgatan 43",Postnummer:"262 53",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0702375193","Telefon hem":"043183125","E-post":"s.kolback@gmail.com","Målsman 1":"Susanne Kolbäck",Relation:"mamma",Telefon:"0702375193",status:"Aktiv",Skapad:"2011-10-05",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"2241",nr:"27"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2014-05-14",Personnummer:"20070216-7008","Kön":"Kvinna",firstname:"Tilde",lastname:"Alling",Adress:"Storgatan 18",Postnummer:"262 32",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0760091360","Telefon hem":"0737353529","E-post":"kristina.alling@gmail.com","Målsman 1":"Gunnar Alling",Relation:"Mamma",Telefon:"0700836001","Målsman 2":"Kristina Alling",status:"Aktiv",Skapad:"2014-05-14",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"2892",nr:"9"},{Grupp:"F12",group:"Spelare",Kommentar:"Fr.kö 2015-10-12",Personnummer:"20070626-1328","Kön":"Kvinna",firstname:"Vilda",lastname:"Skog",Adress:"Fuxgatan 2",Postnummer:"262 58",Ort:"ÄNGELHOLM",Land:"Sverige",Mobiltelefon:"0700976986","Telefon hem":"0702066180","E-post":"magnus@knobby.se","Målsman 1":"Emma Skog",Relation:"Pappa",Telefon:"0705150351","Målsman 2":"Magnus Skog",status:"Aktiv",Skapad:"2015-10-12",Uppdaterad:"2019-01-02","Bekräftad":"2019-01-02",id:"3405",nr:"28","Tröjstlk":"152",Foto:"Ja"}]),r(t,"Coaches",()=>t.All().Where(e=>"Spelare"!=e.group)),r(t,"Players",()=>t.All().Where(e=>"Spelare"==e.group))},sxGq:function(e,n,a){"use strict";function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(n){t(e,n,a[n])})}return e}function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}a.d(n,"a",function(){return i});var s=a("iFcc"),o=a("mLX3"),l=a("hcwh");class i{constructor(e){this.update=e,t(this,"home",{id:0,name:"ÄFF",score:0}),t(this,"guest",{id:0,name:"OTHER",score:0}),t(this,"playerListEventArgs",{}),t(this,"lines",[])}toString(){const e=[];return this.lines.ForEach(n=>{const a=n.players.Select(e=>{const n=r({},i.PlayerSeed);return Object(l.a)(n,(a,r)=>{n[r]=e[r]||a}),JSON.stringify(n)}).join("|");e.push(a)}),Object(l.d)(e.join(";"))}print(){const e=[];return this.lines.ForEach(n=>{const a=n.players.Select(e=>{return""+e.displayname+(e.goals>0?" ("+(e.goals||0)+")":"")}).join(", ");e.push(a)}),e.Select((e,n)=>0==n?"G: "+e:1==n?"D: "+e:2==n?"M: "+e:"O: "+e).Insert(this.home.name+": "+this.home.score+" - "+this.guest.name+": "+this.guest.score,0).join("\n")}lineup(e,n){const a=o.a.Players();return Object(l.c)(e).split(";").Select(e=>{const t={match:n,players:[]},o=e.split("|").Select(e=>{const n=JSON.parse(e||"null")||r({},i.PlayerSeed),o=a.FirstOrDefault(e=>e.id===n.id)||s.a.Empty;return s.a.Map(o,r({},{goals:0,line:t},n))});return t.players.AddRange(o),t})}}t(i,"PlayerSeed",Object.freeze({id:null,goals:0,color:0}))},"vls+":function(e,n,a){"use strict";a.d(n,"a",function(){return s}),a.d(n,"b",function(){return o});var r=a("4dxh"),t=a("abVj");const s=["#808080","#845b41","#484f4f"];class o extends r.Component{render(e,n){const a=s.Select((n,a)=>Object(r.h)("li",{style:{background:n},onClick:e.options.onClick.bind(this,a)}));return Object(r.h)("ul",{class:t.colorPicker},a)}}},"z+7z":function(e){e.exports={main:"main__2cZwe"}},zMTv:function(e){e.exports={player:"player__3_b_C",number:"number__26zQA",text:"text__2Cl9v",goals:"goals__2YGYl"}}}]);
//# sourceMappingURL=index.tsx.chunk.f716d.esm.js.map