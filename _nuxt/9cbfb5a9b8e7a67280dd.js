(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{312:function(t,e,i){},313:function(t,e,i){},314:function(t,e,i){"use strict";(function(t){e.a={name:"CalendarSection",computed:{baseUrl:function(){return t.env.baseUrl}}}}).call(this,i(61))},316:function(t,e,i){"use strict";var s=i(0),o=i.n(s),a={name:"VigotechVideoPlayer",props:{video:{type:[Object],required:!0},preferExternal:{type:Boolean,default:!1},showTitles:{type:Boolean,default:!1}},methods:{getVideoOptions:function(t){return{sources:[{type:"video/mp4",src:t.src}],poster:t.thumbnail}},pubDate:function(t){return o()(t).format("dddd, D MMMM YYYY")}}},n=i(13),c=Object(n.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",["youtube"==t.video.player?i("div",[t.preferExternal?i("a",{attrs:{href:"//www.youtube.com/watch?v="+t.video.id,target:"_blank"}},[i("img",{attrs:{src:t.video.thumbnails.medium.url}}),t._v(" "),i("h3",[t._v(t._s(t.pubDate(t.video.pubDate)))]),t._v(" "),i("h2",[t._v(t._s(t.video.title))])]):i("div",[i("div",{staticClass:"embed-responsive  embed-responsive-16by9"},[i("iframe",{staticClass:"embed-responsive-item",attrs:{src:"//www.youtube.com/embed/"+t.video.id,frameborder:"0",allowfullscreen:""}})]),t._v(" "),t.showTitles?i("h3",[t._v(t._s(t.pubDate(t.video.pubDate)))]):t._e(),t._v(" "),t.showTitles?i("h2",[t._v(t._s(t.video.title))]):t._e()])]):t._e(),t._v(" "),"native"==t.video.player?i("div",{staticClass:"video-player-container"},[i("no-ssr",[i("div",{directives:[{name:"video-player",rawName:"v-video-player:videoPlayer",value:t.getVideoOptions(t.video),expression:"getVideoOptions(video)",arg:"videoPlayer"}],staticClass:"video-player-box embed-responsive  embed-responsive-16by9",attrs:{playsinline:!0}}),t._v(" "),t.showTitles?i("h3",[t._v(t._s(t.pubDate(t.video.pubDate)))]):t._e(),t._v(" "),t.showTitles?i("h2",[t._v(t._s(t.video.title))]):t._e()])],1):t._e(),t._v(" "),"teltek"==t.video.player?i("div",{staticClass:"embed-responsive  embed-responsive-16by9"},[i("iframe",{staticClass:"embed-responsive-item",attrs:{src:"https://replay.teltek.es/videoplayer/"+t.video.id+"?autostart=false",frameborder:"0"}}),t._v(" "),t.showTitles?i("h3",[t._v(t._s(t.pubDate(t.video.pubDate)))]):t._e(),t._v(" "),t.showTitles?i("h2",[t._v(t._s(t.video.title))]):t._e()]):t._e()])},[],!1,null,null,null);c.options.__file="VigotechVideoPlayer.vue";e.a=c.exports},319:function(t,e,i){"use strict";var s=i(312);i.n(s).a},320:function(t,e,i){"use strict";var s=i(313);i.n(s).a},321:function(t){t.exports={name:"VigoTech Alliance",logo:"https://github.com/VigoTech/Design-elements/blob/master/01%20IDENTIDAD%20CORPORATIVA/01%20EXPORT/PNG/Logo%20VIGOTECH_claim-es-horizontal-fondo-blanco.png?raw=true",sticker:"http://hexb.in/hexagons/vigotech.png",links:{web:"https://vigotech.org/",twitter:"http://twitter.com/vigotechallianc",mail:"alliance@vigotech.org",github:"https://github.com/VigoTech"},members:{agilevigo:{name:"Agile Vigo",logo:"https://vigotech.org/images/agile_vigo.jpg",links:{web:"https://www.agilevigo.com/",twitter:"https://twitter.com/agilevigo",meetup:"https://www.meetup.com/es-ES/agile-vigo/",github:"https://github.com/agileVigo"},events:{type:"meetup",meetupid:"agilevigo"}},aindustriosa:{name:"A Industriosa",logo:"https://vigotech.org/images/aindustriosa.png",links:{web:"https://aindustriosa.org/",twitter:"https://twitter.com/aindustriosa",meetup:"https://www.meetup.com/es-ES/AIndustriosa/",youtube:"https://www.youtube.com/channel/UC9DPKfcLiNd7SEU-QLlIG7A"},events:{type:"meetup",meetupid:"AIndustriosa"},videos:[{type:"youtube",channel_id:"UC9DPKfcLiNd7SEU-QLlIG7A"}]},blockchaingal:{name:"Blockchain.gal Vigo",logo:"https://vigotech.org/images/blockchaingal.png",links:{web:"https://blockchain.gal/",twitter:"https://twitter.com/blockchain_gal",meetup:"https://www.meetup.com/es-ES/blockchain_gal_vigo/",github:"https://github.com/blockchain-gal"},events:{type:"meetup",meetupid:"blockchain_gal_vigo"}},galpon:{name:"GALPon",logo:"https://vigotech.org/images/galpon.png",links:{web:"https://www.galpon.org",twitter:"https://twitter.com/galpon",maillist:"https://www.galpon.org/content/listas-correo-galpon"}},galstech:{name:"GalsTech",logo:"https://vigotech.org/images/galstech.png",links:{meetup:"https://www.meetup.com/GalsTech/",twitter:"https://twitter.com/galstech_?lang=es"},events:{type:"meetup",meetupid:"galstech_"}},gdgvigo:{name:"GDG Vigo",logo:"https://vigotech.org/images/gdg_vigo.png",links:{twitter:"http://twitter.com/GDGVigo/",meetup:"https://www.meetup.com/es-ES/GDGVigo/?chapter_analytics_code=UA-73757047-1",youtube:"https://www.youtube.com/user/GDGVigo"},events:{type:"meetup",meetupid:"GDGVigo"},videos:[{type:"youtube",channel_id:"UC3BXzHGAMx7tAgVD1CqCuCQ"}]},joomlavigo:{name:"Grupo de Usuarios de Joomla de Vigo",logo:"https://vigotech.org/images/joomla_vigo.png",links:{web:"https://www.joomlavigo.es/",twitter:"https://twitter.com/JoomlaVigo",facebook:"https://www.facebook.com/JoomlaVigo/",meetup:"https://www.meetup.com/es-ES/Grupo-de-Usuarios-de-Joomla-de-Vigo/"},events:{type:"meetup",meetupid:"Grupo-de-Usuarios-de-Joomla-de-Vigo"}},jsvigo:{name:"JavascriptVigo",logo:"https://vigotech.org/images/jsvigo.png",links:{meetup:"https://www.meetup.com/es-ES/JavaScriptVigo/",twitter:"http://twitter.com/JavaScriptVigo/",youtube:"https://www.youtube.com/channel/UCjFplxtEs0XtunTn-n0LUtQ"},events:{type:"meetup",meetupid:"JavaScriptVigo"},videos:[{type:"youtube",channel_id:"UCjFplxtEs0XtunTn-n0LUtQ"}]},phpvigo:{name:"PHPVigo",logo:"https://vigotech.org/images/php_vigo.jpg",links:{web:"http://phpvigo.com/",meetup:"https://www.meetup.com/es-ES/PHPVigo/",twitter:"https://twitter.com/phpvigo",github:"https://github.com/phpvigo",youtube:"https://www.youtube.com/c/phpvigo"},events:{type:"meetup",meetupid:"phpvigo"},videos:[{type:"youtube",channel_id:"UCzcSOwRc7bfKs9jPehJRNxQ"}]},pythonvigo:{name:"PythonVigo",logo:"https://vigotech.org/images/python_vigo.png",links:{web:"https://www.python-vigo.es/",twitter:"https://twitter.com/python_vigo?lang=es",maillist:"https://lists.es.python.org/listinfo/vigo",youtube:"https://www.youtube.com/channel/UCTUXabChakosnupWEnz4xTA"},events:{type:"json",source:"https://www.python-vigo.es/events.json"},videos:[{type:"youtube",channel_id:"UCTUXabChakosnupWEnz4xTA"}]},seogalicia:{name:"Seo Galicia",logo:"https://vigotech.org/images/seogalicia.png",links:{facebook:"https://www.facebook.com/SEOGaliciaMeetup",meetup:"https://www.meetup.com/es/SEO-Galicia/",twitter:"https://twitter.com/seo_galicia"},events:{type:"meetup",meetupid:"SEO-Galicia"}},sysadmingalicia:{name:"SysAdmin Galicia",logo:"https://vigotech.org/images/sysadmin_galicia.jpg",links:{meetup:"https://www.meetup.com/es-ES/Sysadmin-Galicia/",twitter:"https://twitter.com/sysadmingalicia/"},events:{type:"meetup",meetupid:"Sysadmin-Galicia"},videos:[{type:"teltek",source:"https://replay.teltek.es/podcast/series/58af67c7a7bc283f008b456c/collection.xml"}]},uxgalicia:{name:"UX Galicia",logo:"https://vigotech.org/images/ux_gal.jpg",links:{web:"http://www.uxgalicia.com/",meetup:"https://www.meetup.com/es-ES/Experiencia-de-Usuario-Meetup/",twitter:"https://twitter.com/uxgalicia/"},events:{type:"meetup",meetupid:"Experiencia-de-Usuario-Meetup"}},vigoadg:{name:"Vigo Android Developer Group",logo:"https://vigotech.org/images/vigoadg.jpg",links:{twitter:"https://twitter.com/VigoADG",meetup:"https://www.meetup.com/Vigo-Android-Developer-Group/"},events:{type:"meetup",meetupid:"Vigo-Android-Developer-Group"}},vigobrain:{name:"Vigo Brain",logo:"https://vigotech.org/images/vigobrain.png",links:{github:"https://github.com/vigobrain/",meetup:"https://www.meetup.com/es-ES/VigoBrain/",twitter:"https://twitter.com/vigobrain/"},events:{type:"meetup",meetupid:"VigoBrain"}},vigojug:{name:"VigoJUG",logo:"https://vigotech.org/images/vigojug.jpg",links:{web:"http://www.vigojug.org/",github:"https://github.com/vigojug/",meetup:"https://www.meetup.com/es-ES/Vigo-JUG/",twitter:"https://twitter.com/vigojug/",linkedin:"https://www.linkedin.com/organization/11056204",youtube:"https://www.youtube.com/channel/UCNOihTnorv6dZDANaPXgx_g"},events:{type:"meetup",meetupid:"Vigo-JUG"},videos:[{type:"youtube",channel_id:"UCNOihTnorv6dZDANaPXgx_g"}]},wppontevedra:{name:"WordpressPontevedra",logo:"https://vigotech.org/images/wordpress-pontevedra.png",links:{meetup:"https://www.meetup.com/es-ES/Pontevedra-WordPress-Meetup/",twitter:"https://twitter.com/wppontevedra"},events:{type:"meetup",meetupid:"Pontevedra-WordPress-Meetup"}},vigowordpress:{name:"VigoWordpress",logo:"https://vigotech.org/images/vigowordpress.png",links:{mail:"wpmeetupvigo@gmail.com",meetup:"https://www.meetup.com/es-ES/Vigo-WordPress-Meetup/",twitter:"https://twitter.com/wp_vigo",youtube:"https://www.youtube.com/channel/UCuipENHgKAhr1VgK59156Tw"},events:{type:"meetup",meetupid:"Vigo-WordPress-Meetup"},videos:[{type:"youtube",channel_id:"UCuipENHgKAhr1VgK59156Tw"}]}}}},323:function(t,e,i){"use strict";i.r(e);i(43);var s=i(5),o=i.n(s),a=i(0),n=i.n(a),c={name:"VigotechNextEvent",props:{nextEvent:{type:Object,default:function(){return{url:"",title:"",date:null}}}},computed:{fullTitle:function(){return"".concat(this.nextEvent.title,"\n").concat(n()(this.nextEvent.date).format("dddd, D MMMM YYYY HH:mm"))}}},r=(i(319),i(13)),l=Object(r.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vigotech-next-event"},[this.nextEvent.title?e("a",{attrs:{href:this.nextEvent.url,title:this.fullTitle,date:this.nextEvent.date}},[e("i",{staticClass:"fa fa-calendar"})]):this._e()])},[],!1,null,"10c73c2c",null);l.options.__file="VigotechNextEventTip.vue";var p=l.exports,u={web:"globe"},v={name:"VigotechMember",components:{VigotechNextEventTip:p},filters:{toFontAwesome:function(t){return t?(void 0!==u[t]&&(t=u[t]),"fa fa-".concat(t)):""}},props:{member:{type:Object,required:!0},showNextEvent:{type:Boolean,default:!0,required:!1}}},h=(i(320),Object(r.a)(v,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vigotech-member"},[i("div",{staticClass:"logo-wrapper"},[i("div",{staticClass:"logo-content"},[i("img",{staticClass:"square-bg",attrs:{src:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==\n"}}),t._v(" "),i("img",{staticClass:"logo",attrs:{src:t.member.logo,alt:t.member.name}}),t._v(" "),t.showNextEvent&&t.member.nextEvent&&t.member.nextEvent.date>(new Date).getTime()?i("VigotechNextEventTip",{staticClass:"next-event",attrs:{"next-event":t.member.nextEvent}}):t._e()],1)]),t._v(" "),i("h4",{staticClass:"name"},[t._v("\n    "+t._s(t.member.name)+"\n  ")]),t._v(" "),i("div",{staticClass:"links"},t._l(t.member.links,function(e,s){return i("a",{key:s,staticClass:"link",attrs:{href:e,target:"_blank"}},[i("i",{class:t._f("toFontAwesome")(s)})])}))])},[],!1,null,"2ff0d8c4",null));h.options.__file="VigotechMember.vue";var m={name:"VigotechMemberList",components:{VigotechMember:h.exports},props:{members:{type:[Array,Object],required:!0}}},g=Object(r.a)(m,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vigotech-member-list row"},this._l(this.members,function(t,i){return e("vigotech-member",{key:i,staticClass:"col-xs-6 col-sm-4 col-md-3",attrs:{member:t,"next-event":t.nextEvent,"show-next-event":""}})}))},[],!1,null,null,null);g.options.__file="VigotechMemberList.vue";var d={name:"VigotechMembersSection",components:{VigotechMemberList:g.exports},props:{vigotechStructure:{type:[Object],required:!0}},data:function(){return{}},methods:{}},w=Object(r.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"wrap container-fluid",attrs:{id:"grupos"}},[e("h2",{directives:[{name:"sticky",rawName:"v-sticky"}],staticClass:"section-title",attrs:{"z-index":100,"sticky-top":100}},[e("div",[this._v("\n      Os grupos\n    ")])]),this._v(" "),e("vigotech-member-list",{attrs:{members:this.vigotechStructure.members||{}}})],1)},[],!1,null,null,null);w.options.__file="VigotechMembersSection.vue";var b=w.exports,_={props:{nextEventGroup:{type:[Object],required:!1,default:function(){return{}}}},computed:{eventDate:function(){return n()(this.nextEventGroup.nextEvent.date).format("dddd, D MMMM YYYY HH:mm")}}},f=Object(r.a)(_,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vigotech-next-event"},[t._m(0),t._v(" "),i("div",{staticClass:"wrapper"},[i("div",{staticClass:"logo-wrapper"},[i("a",{attrs:{href:t.nextEventGroup.nextEvent.url}},[i("img",{staticClass:"member-logo",attrs:{src:t.nextEventGroup.logo,alt:t.nextEventGroup.name}})])]),t._v(" "),i("div",{staticClass:"next-event-content"},[i("a",{attrs:{href:t.nextEventGroup.nextEvent.url}},[i("h6",[t._v(t._s(t.nextEventGroup.name))]),t._v(" "),i("h5",[t._v(t._s(t.nextEventGroup.nextEvent.title))]),t._v(" "),i("strong",[t._v(t._s(t.eventDate))]),t._v(" "),i("span",{staticClass:"btn"},[t._v("\n          Máis info\n        ")])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h4",[e("i",{staticClass:"fa fa-calendar"}),this._v(" Vindeiro evento\n  ")])}],!1,null,null,null);f.options.__file="VigotechNextEvent.vue";var C={name:"CoverSection",components:{VigotechNextEvent:f.exports},props:{nextEventGroup:{type:[Object],required:!1,default:function(){return{}}}}},y=Object(r.a)(C,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"cover"}},[i("div",{staticClass:"wrap container-fluid"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-12 content-wrapper"},[i("div",{staticClass:"content"},[i("img",{staticClass:"logo",attrs:{src:"logo_white.jpg",alt:"Vigo Tech Alliance"}}),t._v(" "),i("h1",[t._v("\n            Vigo Tech Alliance\n          ")]),t._v(" "),i("h2",[t._v("\n            Os grupos de tecnoloxía de Vigo facemos piña para promover a tecnoloxía na cidade\n          ")]),t._v(" "),i("no-ssr",[t.nextEventGroup.nextEvent?i("VigotechNextEvent",{attrs:{"next-event-group":t.nextEventGroup}}):t._e()],1),t._v(" "),i("div",{staticClass:"down-wrapper"},[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#grupos",expression:"'#grupos'"}],staticClass:"down",attrs:{href:"#"}},[i("i",{staticClass:"fa fa-chevron-down"})])])],1)])])])])},[],!1,null,null,null);y.options.__file="CoverSection.vue";var x=y.exports,E=i(314).a,V=Object(r.a)(E,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"calendar"}},[e("div",{staticClass:"wrap container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 content-wrapper"},[e("h2",{directives:[{name:"sticky",rawName:"v-sticky"}],staticClass:"section-title",attrs:{"z-index":100,"sticky-top":100}},[e("div",[this._v("\n            Calendario\n          ")])]),this._v(" "),this._m(0),this._v(" "),this._m(1)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"embed-responsive embed-responsive-16by9"},[e("iframe",{staticClass:"embed-responsive-item",staticStyle:{border:"0"},attrs:{src:"gcalendar/gcal.html",frameborder:"0",scrolling:"no"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"view-more"},[e("a",{staticClass:"btn btn-white",attrs:{href:"https://calendar.google.com/calendar/ical/orestes.io_fj8ev1vakdnl8l8o6jeljhof1s%40group.calendar.google.com/public/basic.ics"}},[this._v("\n            Preme aquí para acceder no formato iCal\n          ")])])}],!1,null,null,null);V.options.__file="CalendarSection.vue";var k=V.exports,S={name:"ConversationSection"},A=Object(r.a)(S,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"conversation"}},[e("div",{staticClass:"wrap container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 content-wrapper"},[e("h2",{directives:[{name:"sticky",rawName:"v-sticky"}],staticClass:"section-title",attrs:{"z-index":100,"sticky-top":100}},[e("div",[this._v("\n            Únete a conversa\n          ")])]),this._v(" "),this._m(0),this._v(" "),this._m(1)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"social"},[e("a",{attrs:{href:"http://twitter.com/vigotechallianc",title:"Twitter"}},[e("i",{staticClass:"fa fa-twitter fa-2x"})]),this._v(" "),e("a",{attrs:{href:"mailto:alliance@vigotech.org",title:"Email alliance@vigotech.org"}},[e("i",{staticClass:"fa fa-envelope-o fa-2x"})]),this._v(" "),e("a",{attrs:{href:"https://github.com/VigoTech",title:"GitHub"}},[e("i",{staticClass:"fa fa-github fa-2x"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 col-sm-6 col"},[e("div",{staticClass:"section-content section-content-center"},[e("p",[this._v("Aberto a todo o mundo, é o punto de encontro virtual de todos os grupos e un bo sitio para facer un pouco de networking:")]),this._v(" "),e("p",[e("a",{attrs:{href:"https://vigotechalliance.slack.com"}},[e("img",{attrs:{src:"slack.png",alt:"Slack"}})])]),this._v(" "),e("p",[e("a",{staticClass:"btn btn-white",attrs:{href:"https://slackin-vigotech.herokuapp.com/"}},[this._v("\n                  Consegue unha invitación no teu correo clickando aquí\n                ")])])])]),this._v(" "),e("div",{staticClass:"col-xs-12 col-sm-6 col"},[e("a",{staticClass:"twitter-timeline",attrs:{"data-theme":"light","data-height":"400","data-width":"400","data-border-color":"#e84a5f","data-chrome":"nofooter",href:"https://twitter.com/VigoTechAllianc?ref_src=twsrc%5Etfw"}},[this._v("\n              Tweets by VigoTech Alliance\n            ")]),this._v(" "),e("script",{attrs:{async:"",src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}})])])}],!1,null,null,null);A.options.__file="ConversationSection.vue";var G=A.exports,T={name:"VideosSection",components:{VigotechVideoPlayer:i(316).a},props:{vigotechStructure:{type:[Object],required:!0}},data:function(){return{}},computed:{recentVideos:function(){return this.$store.getters.recentVideos}}},j=Object(r.a)(T,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"videos"}},[i("div",{staticClass:"wrap container-fluid"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-12 content-wrapper"},[i("h2",{directives:[{name:"sticky",rawName:"v-sticky"}],staticClass:"section-title",attrs:{"z-index":100,"sticky-top":100}},[i("div",[t._v("\n            Charlas en video\n          ")])]),t._v(" "),i("div",{staticClass:"section-content section-content-center"},[i("p",[t._v("A maioría de charlas está gravadas e dispoñibles para o seu visionado.")]),t._v(" "),i("div",{staticClass:"row"},t._l(t.recentVideos,function(t,e){return i("div",{key:e,staticClass:"col-xs-12 col-sm-6 video"},[i("VigotechVideoPlayer",{attrs:{video:t,"show-titles":!0}})],1)})),t._v(" "),i("a",{staticClass:"btn btn-white",attrs:{href:"videos"}},[t._v("\n            Ver máis\n          ")])])])])])])},[],!1,null,null,null);j.options.__file="VideosSection.vue";var D=j.exports,O=i(321),M={name:"VigotechDocsSection"},U=Object(r.a)(M,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"docs"}},[e("div",{staticClass:"wrap container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 content-wrapper"},[e("h2",{directives:[{name:"sticky",rawName:"v-sticky"}],staticClass:"section-title",attrs:{"z-index":100,"sticky-top":100}},[e("div",[this._v("\n            Documentos\n          ")])]),this._v(" "),this._m(0)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-content section-content-center"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 col-sm-6 col-md-4 col-lg-3 col"},[e("a",{staticClass:"btn btn-block btn-lg",attrs:{href:"https://github.com/VigoTech/documentos/blob/master/manifiesto.md"}},[this._v("\n                Manifiesto\n              ")])]),this._v(" "),e("div",{staticClass:"col-xs-12 col-sm-6 col-md-4 col-lg-3 col"},[e("a",{staticClass:"btn btn-block btn-lg",attrs:{href:"https://github.com/VigoTech/documentos/blob/master/codigodeconducta.md"}},[this._v("\n                Código de conducta\n              ")])]),this._v(" "),e("div",{staticClass:"col-xs-12 col-sm-6 col-md-4 col-lg-3 col"},[e("a",{staticClass:"btn btn-block btn-lg",attrs:{href:"https://github.com/VigoTech/documentos/blob/master/condicionsentrada.md"}},[this._v("\n                Cóndicions de entrada\n              ")])]),this._v(" "),e("div",{staticClass:"col-xs-12 col-sm-6 col-md-4 col-lg-3 col"},[e("a",{staticClass:"btn btn-block btn-lg",attrs:{href:"https://github.com/VigoTech/documentos/blob/master/conducta_slack.md"}},[this._v("\n                Código de conducta en Slack\n              ")])])])])}],!1,null,null,null);U.options.__file="VigotechDocsSection.vue";var P,$={components:{VigotechDocsSection:U.exports,VideosSection:D,ConversationSection:G,CoverSection:x,VigotechMembersSection:b,CalendarSection:k},data:function(){return{vigotechStructure:{members:{}},docs:[]}},computed:{vigotechStructureStore:function(){return this.$store.state.vigotechStructure},nextEventGroup:function(){return this.$store.getters.nextEventGroup}},watch:{vigotechStructureStore:function(t,e){this.vigotechStructure=t}},mounted:function(){this.$store.dispatch("loadData"),$nuxt.$route.hash&&this.scrollToHash()},asyncData:(P=o()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{vigotechStructure:O});case 1:case"end":return t.stop()}},t,this)})),function(t){return P.apply(this,arguments)}),methods:{scrollToHash:function(){var t=this,e=$nuxt.$route.hash;this.$nextTick(function(){t.$scrollTo(e,500)})}}},N=Object(r.a)($,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("CoverSection",{staticClass:"page-section",attrs:{"next-event-group":t.nextEventGroup}}),t._v(" "),i("VigotechMembersSection",{staticClass:"page-section",attrs:{"vigotech-structure":t.vigotechStructure}}),t._v(" "),i("CalendarSection",{staticClass:"page-section red-bg"}),t._v(" "),i("VigotechDocsSection",{staticClass:"page-section"}),t._v(" "),i("VideosSection",{staticClass:"page-section red-bg",attrs:{"vigotech-structure":t.vigotechStructure}}),t._v(" "),i("ConversationSection",{staticClass:"page-section"})],1)},[],!1,null,null,null);N.options.__file="index.vue";e.default=N.exports}}]);