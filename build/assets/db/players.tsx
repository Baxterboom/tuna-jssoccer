
export interface IPlayerData { id?: string;year?: string;firstname?: string;lastname?: string;group?: string;nr?: string;note?: string;status?: string; }
//@ts-ignore
export const EmptyPlayerData = Object.freeze<IPlayerData>({});
export default class Data { 
  //@ts-ignore
  public static readonly All = () : IPlayerData[] => {"Blad1":[{"Grupp":"F13",group:"Spelare","Kommentar":"Fr.kö 2012-09-18","Personnummer":"20070505-6745","Kön":"Kvinna",firstname:"Agnes",lastname:"Lundwall","Adress":"Flyttfågelsgatan 9","Postnummer":"262 57","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0702040485","E-post":"annika.lundwall@icloud.com","Målsman 1":"Fredrik Lundwall","Relation":"mamma","Telefon":"0707158259","Målsman 2":"Annika Lundwall",status:"Aktiv","Skapad":"2012-09-18","Uppdaterad":"2019-09-01","Bekräftad":"2019-12-27",id:"2513",nr:"11","Tröjstlk":"M","Foto":"Ja",},{"Grupp":"F13",group:"Spelare","Kommentar":"Fr.kö 2014-06-09","Personnummer":"20071105-0401","Kön":"Kvinna",firstname:"Alexandra",lastname:"Sandberg","Adress":"Galoppg. 10","Postnummer":"262 58","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0707722119","E-post":"magnus_sandbe22@hotmail.com","Målsman 1":"Yulia Sandberg","Relation":"Pappa","Telefon":"0723306418","Målsman 2":"Magnus Sandberg",status:"Aktiv","Skapad":"2014-06-09","Uppdaterad":"2019-01-02","Bekräftad":"2019-12-27",id:"2922",nr:"14"},{"Grupp":"F13",group:"Spelare","Kommentar":"Fr.kö 2019-04-26","Personnummer":"20070702-6720","Kön":"Kvinna",firstname:"Alicia",lastname:"Charlesson","Adress":"Norra kyrkogatn 5","Postnummer":"262 32","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0728878697","Målsman 1":"Jenny Charlesson","Relation":"pappa","E-post":"olajohnsson77@hotmail.com","Telefon":"0701764511","Målsman 2":"Ola Johnsson",status:"Aktiv","Skapad":"2019-04-26","Uppdaterad":"2020-05-05","Bekräftad":"2019-12-27",id:"4394",nr:"12"},{"Grupp":"F13",group:"Spelare","Kommentar":"Fr.kö 2016-04-05\r\n","Personnummer":"20070801-4345","Kön":"Kvinna",firstname:"Almi",lastname:"Palmér","Adress":"Strandbackevägen 11","Postnummer":"266 54","Ort":"VEJBYSTRAND","Land":"Sverige","Telefon hem":"043110474","Målsman 1":"Sofia Palmér","Relation":"Pappa","E-post":"magnus@tenpoints.se","Telefon":"0736449444","Målsman 2":"Magnus Palmér",status:"Aktiv","Skapad":"2016-04-05","Uppdaterad":"2019-01-02","Bekräftad":"2019-12-27",id:"3489",nr:"21"},{"Grupp":"F13",group:"Spelare","Kommentar":"Fr.kö 2013-09-02","Personnummer":"20070806-0900","Kön":"Kvinna",firstname:"Ebba",lastname:"Hellkvist Maas","Adress":"Galoppgatan 4","Postnummer":"262 58","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0708505998","Telefon hem":"0431311415","E-post":"bjornhellkvist@live.se","Målsman 1":"Anna Hellkvit Maas","Relation":"pappa","Telefon":"0705453676","Målsman 2":"Björn Hellkvist",status:"Aktiv","Skapad":"2013-09-02","Uppdaterad":"2020-04-26","Bekräftad":"2019-12-27",id:"2688",nr:"18"},{"Grupp":"F13",group:"Spelare","Kommentar":"Fr.kö 2018-12-27\r\n","Personnummer":"20071015-6704","Kön":"Kvinna",firstname:"Ellinor",lastname:"Belulaj","Adress":"Heimdalgatan 3b","Postnummer":"262 44","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0763046999","Målsman 1":"Fadil","Relation":"Mamma","E-post":"Behluli_antigona@hotmail.com","Telefon":"0762525249","Målsman 2":"Antigona",status:"Aktiv","Skapad":"2018-12-27","Uppdaterad":"2020-05-05","Bekräftad":"2019-12-27",id:"4277",nr:"17"},{"Grupp":"F13",group:"Spelare","Kommentar":"Fr.kö 2017-05-16\r\n","Personnummer":"20070307-9525","Kön":"Kvinna",firstname:"Elsa",lastname:"Berisha","Adress":"Stallgatan 2B","Postnummer":"262 52","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0729089422","Telefon hem":"0765588388","E-post":"aliardi06@hotmail.com",status:"Aktiv","Skapad":"2017-05-16","Uppdaterad":"2020-05-05","Bekräftad":"2019-12-27",id:"3836",nr:"15"},{"Grupp":"F13",group:"Spelare","Kommentar":"Fr.kö 2019-04-25","Personnummer":"20070330-0640","Kön":"Kvinna",firstname:"Emma",lastname:"Holmberg","Adress":"Storgatan 98D","Postnummer":"262 33","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0707922137","E-post":"davidwallen77@gmail.com","Målsman 1":"Eva Holmberg","Relation":"pappa","Telefon":"0730725577","Målsman 2":"David Wallén",status:"Aktiv","Skapad":"2019-04-25","Uppdaterad":"2019-04-25","Bekräftad":"2019-12-27",id:"4393",nr:"26"},{"Grupp":"F13",group:"Tränare","Personnummer":"19780301-9301","Kön":"Kvinna",firstname:"Emma",lastname:"Håkansson","Adress":"Travgatan 9","Postnummer":"262 58","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0702085603","E-post":"emma@placepromotion.se",status:"Aktiv","Skapad":"2020-04-28","Uppdaterad":"2020-05-04","Bekräftad":"2020-04-28",id:"4648"},{"Grupp":"F13",group:"Tränare","Personnummer":"19790815-3906","Kön":"Kvinna",firstname:"Emma",lastname:"Skog","Adress":"Fuxgatan 2","Postnummer":"262 58","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0702066180","E-post":"emmaskoug@gmail.com",status:"Aktiv","Skapad":"2020-04-28","Uppdaterad":"2020-05-04","Bekräftad":"2020-04-28",id:"4649"},{"Grupp":"F13",group:"Spelare","Personnummer":"20070305-0443","Kön":"Kvinna",firstname:"Filipha",lastname:"Stifors","Adress":"stigmansgatan 5","Postnummer":"262 62","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0723760880","Telefon hem":"0723117118","E-post":"anneliet76@gmail.com","Målsman 1":"Mathias  stifors","Relation":"mamma","Telefon":"0762405050","Målsman 2":"Annelie hellman",status:"Aktiv","Skapad":"2017-07-03","Uppdaterad":"2020-05-05","Bekräftad":"2019-12-27",id:"3913",nr:"19"},{"Grupp":"F13",group:"Tränare","Personnummer":"19740110-1493","Kön":"Man",firstname:"Fredrik",lastname:"Lundwall","Adress":"Flyttfågelsgatan 9","Postnummer":"262 57","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0706405526","E-post":"fredrik@fredriklundwall.se",status:"Aktiv","Skapad":"2014-04-28","Uppdaterad":"2020-04-08","Bekräftad":"2019-12-27",id:"2825"},{"Grupp":"F13",group:"Spelare","Personnummer":"20070310-5346","Kön":"Kvinna",firstname:"Hanna",lastname:"Håkansson","Adress":"Travgatan 9","Postnummer":"262 58","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0733442273","E-post":"fredrik1972@live.com","Målsman 1":"Fredrik","Relation":"Håkansson","Telefon":"0733442273",status:"Aktiv","Skapad":"2016-09-17","Uppdaterad":"2019-01-02","Bekräftad":"2019-12-27",id:"3645",nr:"3"},{"Grupp":"F13",group:"Tränare","Personnummer":"19741005-3594","Kön":"Man",firstname:"Henrik",lastname:"Wester","Adress":"Saltsjövägen 12","Postnummer":"262 62","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0793358757","Telefon hem":"043188215","Telefon jobb":"0793358757","E-post":"westerhenrik01@gmail.com","Målsman 1":"Xxxxxx","Relation":"Alias",status:"Aktiv","Skapad":"2014-05-05","Uppdaterad":"2019-01-02","Bekräftad":"2019-12-27",id:"2845"},{"Grupp":"F13",group:"Spelare","Kommentar":"Fr.kö 2012-05-30\r\n","Personnummer":"20070517-6980","Kön":"Kvinna",firstname:"Ida",lastname:"Wester","Adress":"Saltsjövägen 12","Postnummer":"262 63","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0793348258","Telefon hem":"043188215","E-post":"Charlott.palsson@mazars.se","Målsman 1":"Henrik Wester","Relation":"Mamma","Telefon":"0736203928","Målsman 2":"Charlott Pålsson",status:"Aktiv","Skapad":"2012-05-30","Uppdaterad":"2019-01-02","Bekräftad":"2019-12-27",id:"2470",nr:"13","Tröjstlk":"140","Foto":"Ja"},{"Grupp":"F13",group:"Ungdomsansvarig","Personnummer":"19640314-3552","Kön":"Man",firstname:"Kalle",lastname:"Hansson","Adress":"Boställsgatan 10","Postnummer":"262 53","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0768646827","E-post":"kalle@angelholmsff.se",status:"Aktiv","Skapad":"2011-05-18","Uppdaterad":"2020-04-08","Bekräftad":"2019-12-27",id:"9"},{"Grupp":"F13",group:"Spelare","Kommentar":"Fr.kö 2015-08-24\r\n","Personnummer":"20070729-1266","Kön":"Kvinna",firstname:"Karin",lastname:"Kohdaida","c/o":"nej","Adress":"Heimdallgatan 1b","Postnummer":"262 44","Ort":"ÄNELHÖLM","Land":"Sverige","E-post":"abo.dawd@live.se","Målsman 1":"Ibrahim","Relation":"mamma","Målsman 2":"Balges",status:"Aktiv","Skapad":"2015-08-24","Uppdaterad":"2019-01-02","Bekräftad":"2019-12-27",id:"3384",nr:"10"},{"Grupp":"F13",group:"Tränare","Personnummer":"19730429-8602","Kön":"Kvinna",firstname:"Kolbäck",lastname:"Susanne","Adress":"Espehögsgatan 42","Postnummer":"262 53","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0702375193","E-post":"s.kolback@gmail.com",status:"Aktiv","Skapad":"2012-05-04","Uppdaterad":"2020-04-29","Bekräftad":"2019-12-27",id:"2447"},{"Grupp":"F13",group:"Spelare","Kommentar":"Fr.kö 2019-09-19\r\n","Personnummer":"20070305-2969","Kön":"Kvinna",firstname:"Madeleine",lastname:"Stenberg","Adress":"Pollengatan 38","Postnummer":"262 54","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0709926377","Målsman 1":"Jenny Stenberg","Relation":"Pappa","E-post":"flipdamix@yahoo.se","Telefon":"0723266261","Målsman 2":"Daniel Stenberg",status:"Aktiv","Skapad":"2019-09-19","Uppdaterad":"2019-09-19","Bekräftad":"2019-12-27",id:"4532",nr:"20"},{"Grupp":"F13",group:"Spelare","Kommentar":"Fr.kö 2015-05-07\r\n","Personnummer":"20070720-4327","Kön":"Kvinna",firstname:"Maja",lastname:"Andersson","Adress":"Majsgatan 25","Postnummer":"262 53","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0731004122","Telefon hem":"043114122","E-post":"ulrand70@hotmail.com","Målsman 1":"Thor-Björn Andersson","Relation":"Mamma","Telefon":"0723214122","Målsman 2":"Ulrika Andersson",status:"Aktiv","Skapad":"2015-05-07","Uppdaterad":"2019-05-01","Bekräftad":"2019-12-27",id:"3323",nr:"7","Tröjstlk":"152"},{"Grupp":"F13",group:"Spelare","Kommentar":"Fr.kö 2019-04-23\r\n","Personnummer":"20070123-7448","Kön":"Kvinna",firstname:"Mariline",lastname:"Lejon-Lambert","Adress":"Mörtgränd","Postnummer":"262 42","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0767991994","E-post":"Annalejon@hotmail.com","Målsman 1":"Anna Lejon","Relation":"Mamma","Telefon":"0767991994",status:"Aktiv","Skapad":"2012-06-04","Uppdaterad":"2019-04-23","Bekräftad":"2019-12-27",id:"2476",nr:"4"},{"Grupp":"F13",group:"Spelare","Personnummer":"20070923-6962","Kön":"Kvinna",firstname:"Martha",lastname:"Svensson","Adress":"Blekingegatan 14","Postnummer":"262 43","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0768704867","E-post":"Lindasvensson.v@gmail.com","Målsman 1":"Linda Svensson","Relation":"Pappa","Telefon":"0730581012","Målsman 2":"Jimmi Svensson",status:"Aktiv","Skapad":"2014-08-30","Uppdaterad":"2019-01-02","Bekräftad":"2019-12-27",id:"2971","Allergi/matval":"-",nr:"16"},{"Grupp":"F13",group:"Spelare","Kommentar":"Fr.kö 2018-05-31\r\n","Personnummer":"20071218-0504","Kön":"Kvinna",firstname:"Milla",lastname:"Jonsson","Adress":"Landshövdingevägen 35","Postnummer":"262 52","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0702379253","E-post":"patrikasajonsson@telia.com",status:"Aktiv","Skapad":"2018-05-31","Uppdaterad":"2019-01-02","Bekräftad":"2019-12-27",id:"4178",nr:"23"},{"Grupp":"F13",group:"Spelare","Personnummer":"20070205-3547","Kön":"Kvinna",firstname:"Nellie",lastname:"Bengtsson","Adress":"Espehögsgatan 43","Postnummer":"262 53","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0738340278","Telefon hem":"043183125","E-post":"s.kolback@gmail.com","Målsman 1":"Susanne Kolbäck","Relation":"mamma","Telefon":"0702375193",status:"Aktiv","Skapad":"2011-10-05","Uppdaterad":"2020-05-05","Bekräftad":"2019-12-27",id:"2240",nr:"24"},{"Grupp":"F13",group:"Spelare","Kommentar":"Fr.kö 2018-01-18\r\n","Personnummer":"20070702-5003","Kön":"Kvinna",firstname:"Pella",lastname:"Månsson","Adress":"Umeågatan 20G","Postnummer":"262 65","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0761419993","Målsman 1":"Linda Månsson","Relation":"Pappa","E-post":"lindamansson@telia.com","Telefon":"0701747852","Målsman 2":"Jonas Nilsson",status:"Aktiv","Skapad":"2018-01-18","Uppdaterad":"2019-05-16","Bekräftad":"2019-12-27",id:"4033",nr:"30"},{"Grupp":"F13",group:"Spelare","Personnummer":"20061124-4740","Kön":"Kvinna",firstname:"Rinesa",lastname:"Shkupolli","c/o":"Astrit Skupoli","Adress":"skänkelgatan 5","Postnummer":"262 58","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0739852551","E-post":"xhyljeta86@hotmail.com","Målsman 1":"Astrit Skupoli","Relation":"Mamma","Telefon":"0737348582","Målsman 2":"Xhyljeta Shkupolli",status:"Aktiv","Skapad":"2018-08-24","Uppdaterad":"2020-04-20","Bekräftad":"2019-12-27",id:"4221",nr:"25"},{"Grupp":"F13",group:"Tränare ass","Personnummer":"19681026-4231","Kön":"Man",firstname:"Robert",lastname:"Dujmovic","Adress":"Maskrosgatan 11","Postnummer":"262 52","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0702152840","E-post":"robert.dujmovic@hd.se",status:"Aktiv","Skapad":"2012-01-10","Uppdaterad":"2020-02-11","Bekräftad":"2019-12-27",id:"2297"},{"Grupp":"F13",group:"Spelare","Personnummer":"20071209-1800","Kön":"Kvinna",firstname:"Saga",lastname:"Svahn","Adress":"Haradalsliden 15","Postnummer":"262 62","Ort":"ÄNGELHOLM","Land":"Sverige","Målsman 1":"Marlén Svahn","Relation":"mamma","E-post":"marlen77@live.se","Telefon":"0763200377",status:"Aktiv","Skapad":"2014-05-04","Uppdaterad":"2019-01-02","Bekräftad":"2019-12-27",id:"2844",nr:"8"},{"Grupp":"F13",group:"Tränare","Kommentar":"Fr.kö 2019-03-18","Personnummer":"19740220-3538","Kön":"Man",firstname:"Thor-Björn",lastname:"Andersson","Adress":"Majsgatan 25","Postnummer":"262 53","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0734387180","Telefon hem":"043114122","E-post":"thor-bjorn.andersson@outlook.com",status:"Aktiv","Skapad":"2019-03-18","Uppdaterad":"2020-04-08","Bekräftad":"2019-12-27",id:"4328"},{"Grupp":"F13",group:"Spelare","Personnummer":"20070205-7043","Kön":"Kvinna",firstname:"Tilda",lastname:"Bengtsson","Adress":"Espehögsgatan 43","Postnummer":"262 53","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0738341949","Telefon hem":"043183125","E-post":"s.kolback@gmail.com","Målsman 1":"Susanne Kolbäck","Relation":"mamma","Telefon":"0702375193",status:"Aktiv","Skapad":"2011-10-05","Uppdaterad":"2020-05-05","Bekräftad":"2019-12-27",id:"2241",nr:"27"},{"Grupp":"F13",group:"Spelare","Kommentar":"Fr.kö 2014-05-14\r\n","Personnummer":"20070216-7008","Kön":"Kvinna",firstname:"Tilde",lastname:"Alling","Adress":"Storgatan 18","Postnummer":"262 32","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0760091360","Telefon hem":"0737353529","E-post":"kristina.alling@gmail.com","Målsman 1":"Gunnar Alling","Relation":"Mamma","Telefon":"0700836001","Målsman 2":"Kristina Alling",status:"Aktiv","Skapad":"2014-05-14","Uppdaterad":"2019-01-02","Bekräftad":"2019-12-27",id:"2892",nr:"9"},{"Grupp":"F13",group:"Spelare","Kommentar":"Fr.kö 2015-10-12\r\n","Personnummer":"20070626-1328","Kön":"Kvinna",firstname:"Vilda",lastname:"Skog","Adress":"Fuxgatan 2","Postnummer":"262 58","Ort":"ÄNGELHOLM","Land":"Sverige","Mobiltelefon":"0700976986","Telefon hem":"0702066180","E-post":"magnus@knobby.se","Målsman 1":"Emma Skog","Relation":"Pappa","Telefon":"0705150351","Målsman 2":"Magnus Skog",status:"Aktiv","Skapad":"2015-10-12","Uppdaterad":"2019-01-02","Bekräftad":"2019-12-27",id:"3405",nr:"28","Tröjstlk":"152","Foto":"Ja"}]};
  public static readonly Coaches = () => Data.All().Where(w => w.group != "Spelare");
  public static readonly Players = () => Data.All().Where(w => w.group == "Spelare");
}