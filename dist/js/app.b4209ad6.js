(function(t){function e(e){for(var s,i,r=e[0],c=e[1],l=e[2],u=0,d=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);m&&m(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,i=1;i<a.length;i++){var r=a[i];0!==n[r]&&(s=!1)}s&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},i={app:0},n={app:0},o=[];function r(t){return c.p+"js/"+({actividad:"actividad",comple:"comple",glosario:"glosario",intro:"intro",referencias:"referencias"}[t]||t)+"."+{actividad:"43dce9f4",comple:"bf159492",glosario:"e9aaa8c6",intro:"b1ae29fd",referencias:"9d2f15b3"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={actividad:1,glosario:1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var s="css/"+({actividad:"actividad",comple:"comple",glosario:"glosario",intro:"intro",referencias:"referencias"}[t]||t)+"."+{actividad:"34f3872d",comple:"31d6cfe0",glosario:"d1c89d21",intro:"31d6cfe0",referencias:"31d6cfe0"}[t]+".css",n=c.p+s,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var l=o[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===n))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],u=l.getAttribute("data-href");if(u===s||u===n)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var s=e&&e.target&&e.target.src||n,o=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete i[t],m.parentNode.removeChild(m),a(o)},m.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[t]=0})));var s=n[t];if(0!==s)if(s)e.push(s[2]);else{var o=new Promise((function(e,a){s=n[t]=[e,a]}));e.push(s[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",d.name="ChunkLoadError",d.type=s,d.request=i,a[1](d)}n[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1727:function(t,e,a){t.exports=a.p+"img/group16263.6b81d019.svg"},"1b65":function(t,e,a){"use strict";a("5966")},3065:function(t,e,a){t.exports=a.p+"img/senaLogo.885d44b7.svg"},"562e":function(t,e,a){"use strict";a("d76a")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("0cdd");var s=a("2b0e"),i=a("5f5b");a("ab8b"),a("2dd8");s["default"].use(i["a"]);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"curso-contenedor",class:t.showMenu&&["curso-contenedor--menu-abierto"]},[a("header",{staticClass:"curso-presentacion page-header",attrs:{id:"CursoPresentacion"}},[a("div",{staticClass:"page-textura"},[a("OverHeader",{attrs:{"show-menu":t.showMenu},on:{"update:showMenu":function(e){t.showMenu=e},"update:show-menu":function(e){t.showMenu=e}}}),a("Header",{attrs:{"selected-menu-item":t.selectedMenuItem}})],1)]),a("router-view")],1),a("AsideMenu",{attrs:{showMenu:t.showMenu},on:{"update:showMenu":function(e){t.showMenu=e},"update:show-menu":function(e){t.showMenu=e}}})],1)},o=[],r=(a("7db0"),a("b0c0"),a("cdd9")),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:"inicio"===t.$route.name?["container"]:["container-fluid"]},[a("div",{staticClass:"topbar d-flex justify-content-between align-items-center",class:"inicio"!=t.$route.name&&["topbar--fixed","flex-row-reverse"]},[t._m(0),a("div",{staticClass:"topbar__menu",class:"inicio"===t.$route.name&&["d-md-none"]},[a("a",{staticClass:"topbar__menu__btn btn-menu-responsive",class:t.showMenu&&["active"],on:{click:function(e){return t.$emit("update:showMenu",!t.showMenu)}}},[a("span"),a("span"),a("span")]),"inicio"!=t.$route.name?a("span",{staticClass:"topbar__menu__title"},[t._v("MENÚ")]):t._e()]),"inicio"===t.$route.name?a("nav",{staticClass:"topbar__nav collapse show d-none d-md-block",attrs:{id:"topbar__nav"}},[t._m(1)]):t._e()])])},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"topbar__logo"},[s("img",{attrs:{src:a("3065")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"topbar__list"},[a("li",{staticClass:"topbar__item"},[a("a",{staticClass:"topbar__link",attrs:{href:"#ResultadosAprendizaje"}},[a("span",{staticClass:"text-white"},[t._v("Resultados de aprendizaje")])])]),a("li",{staticClass:"topbar__item"},[a("a",{staticClass:"topbar__link",attrs:{href:"#IndiceTematico"}},[a("span",{staticClass:"text-white"},[t._v("Contenidos")])])]),a("li",{staticClass:"topbar__item"},[a("a",{staticClass:"topbar__link",attrs:{href:"#Creditos"}},[a("span",{staticClass:"text-white"},[t._v("Créditos")])])])])}],u={name:"OverHeader",props:{showMenu:{type:Boolean}}},d=u,m=(a("562e"),a("2877")),p=Object(m["a"])(d,c,l,!1,null,"0fbd9546",null),f=p.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"curso-portada"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-12 col-lg-6"},[a("h3",{staticClass:"curso-subtitulo",attrs:{id:"curso-titulo-componente"}},[t._v(t._s(t.globalData.subtituloPrincipal))]),a("h1",{staticClass:"curso-titulo",attrs:{id:"curso-titulo-tema"}},[t._v(t._s(t.globalData.tituloPrincipal))]),a("div",{staticClass:"brand-line-primary"}),t.$route.path.includes("curso")?[t.selectedMenuItem.hasOwnProperty("tags")?a("div",{staticClass:"keywords"},t._l(t.selectedMenuItem.tags,(function(e){return a("span",{ref:"tag-"+e,refInFor:!0,staticClass:"badge badge-pill badge-light mr-2"},[t._v(t._s("#"+e))])})),0):t._e(),t._m(0)]:[a("p",{staticClass:"curso-descripcion"},[t._v(t._s(t.globalData.descripcionCurso))])],"inicio"===t.$route.name?[a("router-link",{staticClass:"curso-btn-iniciar btn btn-light",attrs:{to:{name:"curso"}}},[a("span",[t._v("Iniciar curso")])])]:t._e()],2),a("div",{staticClass:"col-12 col-lg-6 text-center"},[a("div",{staticClass:"d-none d-lg-block"},[a("img",{staticClass:"curso-imagen",attrs:{src:t.globalData.imagen}})])])])])])},_=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"barra-dots mt-5"},[s("img",{staticClass:"img-fluid",attrs:{src:a("ed9e"),alt:"alt"}})])}],b={name:"HeaderComponent",props:{selectedMenuItem:{type:Object,default:function(){return{}}}},data:function(){return{globalData:r["b"],imagen:a("1727")}}},C=b,h=(a("1b65"),Object(m["a"])(C,v,_,!1,null,"13e63453",null)),g=h.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",[a("div",{class:t.showMenu&&["page-main-aside--open"],attrs:{id:"page-main-aside"}},[a("nav",{staticClass:"aside-contenidos__body"},[a("div",{staticClass:"aside-contenidos"},[a("div",{staticClass:"aside-contenidos__header d-flex justify-content-between align-items-center"},[t._m(0),a("div",{staticClass:"aside-contenidos__close d-md-none"},[a("a",{staticClass:"page-main-aside__close icon btnclose m-0",on:{click:function(e){return t.$emit("update:showMenu",!1)}}})])])]),a("ul",{staticClass:"menu-main",attrs:{id:"menuMain"}},[t._l(t.menuData,(function(e,s){return[a("li",{key:"menu-item-"+s,staticClass:"menu-main__item"},[a("router-link",{staticClass:"menu-main__link",class:{"menu-main__link--active":t.$route.name==e.routeName},attrs:{to:{name:e.routeName}}},[a("span",{staticClass:"menu-main__texto"},[a("strong",[t._v(t._s(e.title))])]),a("span",{staticClass:"menu-main__icono"},[a("i",{class:e.icon})])])],1),e.hasOwnProperty("submenu")&&e.submenu.length?a("ul",{staticClass:"menu-main submenu"},t._l(e.submenu,(function(s,i){return a("li",{key:"submenu-item-"+i,staticClass:"menu-main__item"},[a("router-link",{staticClass:"menu-main__link is-content routerAnchor",class:{"menu-main__link--active":t.$route.hash=="#"+s.hash},attrs:{to:{name:e.routeName,hash:"#"+s.hash}}},[a("span",{staticClass:"menu-main__texto"},[t._v(t._s(s.title))]),a("span",{staticClass:"menu-main__icono"},[a("i",{class:s.icon})])])],1)})),0):t._e()]}))],2),a("ul",{staticClass:"aside-extra menu-secondary",attrs:{id:"menuSecondary"}},t._l(t.subMenuData,(function(e,s){return a("li",{key:"SecMenu-item-"+s,staticClass:"menu-secondary__item"},[e.hasOwnProperty("routeName")?a("router-link",{staticClass:"menu-secondary__link",attrs:{to:{name:e.routeName}}},[a("i",{class:e.icon}),a("span",{staticClass:"menu-secondary__texto"},[t._v(t._s(e.title))])]):e.hasOwnProperty("download")?a("a",{staticClass:"menu-secondary__link",attrs:{href:e.download,target:"_blank"}},[a("i",{class:e.icon}),a("span",{staticClass:"menu-secondary__texto"},[t._v(t._s(e.title))])]):t._e()],1)})),0)])]),!t.showMenu&&t.$route.path.includes("curso")?a("div",{staticClass:"page-control",attrs:{id:"page-control"}},[a("div",{staticClass:"row justify-content-center align-items-center"},[t.controlLinks.back?a("router-link",{staticClass:"page-control-link page-control-prev col py-3 text-center",attrs:{id:"back",to:{name:t.$route.name,hash:"#"+t.controlLinks.back}}},[a("span",[a("i",{staticClass:"fa fa-chevron-left mr-3"}),t._v("Anterior")])]):t._e(),t.controlLinks.next?a("router-link",{staticClass:"page-control-link page-control-next col py-3 text-center",attrs:{id:"next",to:{name:t.$route.name,hash:"#"+t.controlLinks.next}}},[a("span",[t._v(" Siguiente"),a("i",{staticClass:"fa fa-chevron-right ml-3"})])]):t._e()],1)]):t._e()])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aside-contenidos__titulo"},[a("h3",{staticClass:"mb-0"},[a("i",{staticClass:"fa fa-list-ul mr-2"}),t._v("Contenidos")])])}],w=(a("c975"),a("d81d"),a("ac1f"),a("5319"),{name:"AsideMenu",props:{showMenu:{type:Boolean}},data:function(){return{menuData:r["d"]&&r["d"].menu,subMenuData:r["d"]&&r["d"].subMenu}},computed:{controlLinks:function(){var t=this,e=this.menuData.find((function(e){return e.routeName===t.$route.name}));if(e.submenu||e.submenu.length){var a=e.submenu.map((function(t){return t.hash})).indexOf(this.$route.hash.replace("#",""));return-1===a?{next:e.submenu[0].hash}:0===a?{next:e.submenu[a+1].hash}:a===e.submenu.length-1?{back:e.submenu[a-1].hash}:{next:e.submenu[a+1].hash,back:e.submenu[a-1].hash}}return{}}}}),M=w,E=(a("eef9"),Object(m["a"])(M,x,y,!1,null,"403d0f5d",null)),I=E.exports,k={name:"App",components:{Header:g,OverHeader:f,AsideMenu:I},data:function(){return{showMenu:!1,menuPrincipalData:r["d"].menu}},computed:{selectedMenuItem:function(){var t=this;return this.menuPrincipalData.find((function(e){return e.routeName===t.$route.name}))}}},A=k,D=(a("cf25"),Object(m["a"])(A,n,o,!1,null,null,null)),O=D.exports,S=(a("d3b7"),a("8c4f")),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inicio"},[t._m(0),a("section",{staticClass:"curso-indice-tematico section",attrs:{id:"IndiceTematico"}},[a("div",{staticClass:"container"},[t._m(1),a("div",{staticClass:"brand-line-primary"}),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 col-sm-10"},[a("div",{staticClass:"card wow flipInX",attrs:{"data-wow-delay":".4s"}},[a("div",{staticClass:"card-body"},t._l(t.desarrolloDeContenidos,(function(e){return a("ul",{staticClass:"list-group list-group-flush list my-n3 nav-temas"},[a("li",{staticClass:"list-group-item nav-tema-item"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-auto"},[a("div",{staticClass:"avatar avatar-sm"},[a("span",{staticClass:"nav-tema-item__icon avatar-title font-size-lg bg-secondary-soft rounded-circle text-primary font-weight-bold"},[t.getIcon(e.type)!=e.type?a("i",{class:t.getIcon(e.type)}):[t._v(t._s(t.getIcon(e.type)))]],2)])]),a("div",{staticClass:"col ml-n2"},[a("span",{staticClass:"nav-tema-item__titulo"},[a("router-link",{attrs:{to:e.route}},[t._v(t._s(e.title))])],1)]),a("div",{staticClass:"col-auto"},[a("router-link",{staticClass:"btn btn-light nav-tema-item__btn",attrs:{to:e.route}},[t._v("Ver más")])],1)])])])})),0)])])])])]),a("Creditos")],1)},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"curso-resultados section bg-base-light",attrs:{id:"ResultadosAprendizaje"}},[a("div",{staticClass:"container"},[a("h2",[t._v(" Resultados de "),a("br"),t._v("aprendizaje")]),a("div",{staticClass:"brand-line-primary"}),a("div",{staticClass:"card resultado-item"},[a("div",{staticClass:"card-body"},[a("ul",{staticClass:"bg-color-dark"},[a("li",[a("span",[t._v("Reconocer las situaciones de la población privada de la libertad de acuerdo con los principales componentes del sistema penitenciario y carcelario.")])]),a("li",[a("span",[t._v("Valorar la apropiación de la información obtenida del sistema penitenciario y carcelario de acuerdo con la normatividad vigente.")])])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[t._v("Desarrollo de "),a("br"),t._v("contenidos")])}],$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("div",{staticClass:"footer",attrs:{id:"Creditos"}},[s("div",{staticClass:"container"},[s("h1",[t._v("Créditos ")]),s("div",{staticClass:"brand-line-primary"}),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-5"},[s("h3",{staticClass:"footer-subtitulo mb-4"},[t._v("ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES ")]),s("p",{staticClass:"footer-texto mb-2"},[s("strong",[t._v("Ingry Dayanna Bonilla Monzon")]),s("br"),s("span",{staticClass:"text-small"},[t._v("Líder del equipo")])])])]),s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-12 col-md-6"},[s("h4",{staticClass:"footer-subtitulo-2 mt-0"},[s("div",{staticClass:"fa fa-caret-right mr-2"},[t._v(" Contenido Instruccional")])]),s("p",{staticClass:"footer-texto mb-2"},[s("strong",[t._v("Gloria Matilde Lee Mejía")]),s("br"),s("span",{staticClass:"text-small"},[t._v("Responsable del equipo")])]),s("p",{staticClass:"footer-texto"},[s("span",{staticClass:"text-small text-uppercase"},[t._v("Centro de Comercio y Servicios")]),s("br"),s("span",{staticClass:"text-small"},[t._v("Regional Tolima")])]),s("p",{staticClass:"footer-texto mb-2"},[s("strong",[t._v("Rafael Nelftalí Lizcano Reyes")]),s("br"),s("span",{staticClass:"text-small"},[t._v("Asesor pedagógico")]),s("br")]),s("p",{staticClass:"footer-texto"},[s("span",{staticClass:"text-small text-uppercase"},[t._v("CENTRO INDUSTRIAL DEL DISEÑO Y LA MANUFACTURA ")]),s("br"),s("span",{staticClass:"text-small"},[t._v("Regional Santander ")])]),s("p",{staticClass:"footer-texto mb-2"},[s("strong",[t._v("Fernando Martínez Rivera")]),s("br"),s("span",{staticClass:"text-small"},[t._v("Experto temático")]),s("br")]),s("p",{staticClass:"footer-texto"},[s("span",{staticClass:"text-small text-uppercase"},[t._v("Coordinación Complementaria-UTI-CSF-Bogotá")]),s("br"),s("span",{staticClass:"text-small"},[t._v("Regional Distrito Capital")])]),s("p",{staticClass:"footer-texto mb-2"},[s("strong",[t._v("Oscar Absalón Guevara]")]),s("br"),s("span",{staticClass:"text-small"},[t._v("Diseñador instruccional")]),s("br")]),s("p",{staticClass:"footer-texto"},[s("span",{staticClass:"text-small text-uppercase"},[t._v("Centro de Gestión Empresarial")]),s("br"),s("span",{staticClass:"text-small"},[t._v("Regional Distrito Capital")])]),s("p",{staticClass:"footer-texto mb-2"},[s("strong",[t._v("Andrés Felipe Velandia Espitia")]),s("br"),s("span",{staticClass:"text-small"},[t._v("Evaluador instruccional")]),s("br")]),s("p",{staticClass:"footer-texto"},[s("span",{staticClass:"text-small text-uppercase"},[t._v("Centro de Diseño y Metrología")]),s("br"),s("span",{staticClass:"text-small"},[t._v("Regional Distrito Capital")])]),s("p",{staticClass:"footer-texto mb-2"},[s("strong",[t._v("Julieth Paola Vital López")]),s("br"),s("span",{staticClass:"text-small"},[t._v("Corrección de estilo")]),s("br")]),s("p",{staticClass:"footer-texto"},[s("span",{staticClass:"text-small text-uppercase"},[t._v("Centro para la Industria de la Comunicación Gráfica")]),s("br"),s("span",{staticClass:"text-small"},[t._v("Regional Distrito Capital ")])])]),s("div",{staticClass:"col-12 col-md-6"},[s("h4",{staticClass:"footer-subtitulo-2 mt-0"},[s("div",{staticClass:"fa fa-caret-right mr-2"},[t._v("Diseño y desarrollo de recursos educativos digitales")])]),s("p",{staticClass:"footer-texto"},[s("strong",[t._v("Francisco José Lizcano Reyes ")]),s("br"),s("span",{staticClass:"text-small"},[t._v("Responsable del equipo")]),s("br")]),s("p",{staticClass:"footer-texto"},[s("strong",[t._v("Leyson Fabian Castaño Perez")]),s("br"),s("span",{staticClass:"text-small"},[t._v("Integración de recursos y pruebas")]),s("br")]),s("p",{staticClass:"footer-texto"},[s("strong",[t._v("Camilo Andrés Villamizar Lizcano")]),s("br"),s("strong",[t._v("Ernesto Navarro Jaimes")]),s("br"),s("strong",[t._v("Eulises Orduz Amezquita")]),s("br"),s("strong",[t._v("Maria Camila Ovalle Ospina ")]),s("br"),s("strong",[t._v("Yazmin Rocio Figueroa Pacheco")]),s("br"),s("span",{staticClass:"text-small"},[t._v("Diseño web & producción audiovisual")]),s("br")]),s("p",{staticClass:"footer-texto"},[s("strong",[t._v("Edgar Mauricio Cortes")]),s("br"),s("strong",[t._v("Magdi Khalifah Gamboa")]),s("br"),s("span",{staticClass:"text-small"},[t._v("Desarrollo front-end")]),s("br")]),s("p",{staticClass:"footer-texto"},[s("span",{staticClass:"text-small text-uppercase"},[t._v("CENTRO INDUSTRIAL DEL DISEÑO Y LA MANUFACTURA ")]),s("br"),s("span",{staticClass:"text-small"},[t._v("Regional Santander")])]),s("h4",{staticClass:"footer-subtitulo-2 mt-5"},[s("div",{staticClass:"fa fa-caret-right mr-2"},[t._v("Gestores de repositorio")])]),s("p",{staticClass:"footer-texto"},[s("strong",[t._v("Alba Ines Gutierrez Gonzalez ")]),s("br"),s("strong",[t._v("Fernando Amortegui ")]),s("br"),s("strong",[t._v("Daniel Felipe Varon Molina ")]),s("br"),s("span",{staticClass:"text-small"},[t._v("Validación de recursos.")]),s("br")]),s("p",{staticClass:"footer-texto"},[s("span",{staticClass:"text-small text-uppercase"},[t._v("Centro de comercio y servicios ")]),s("br"),s("span",{staticClass:"text-small"},[t._v("Regional Tolima")])])])]),s("div",{staticClass:"row justify-content-center align-items-center mt-5"},[s("img",{staticStyle:{"max-width":"100px"},attrs:{src:a("3065")}})])])]),s("section",{attrs:{id:"cc"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"d-flex flex-column flex-sm-row"},[s("span",{staticClass:"pr-3"},[s("i",{staticClass:"icon cc"})]),s("span",[t._v("Este material puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de la licencia que el trabajo original.")])])])])])}],T={name:"Creditos"},L=T,P=Object(m["a"])(L,$,N,!1,null,"5c11d5a7",null),z=P.exports,q={name:"Inicio",components:{Creditos:z},data:function(){return{desarrolloDeContenidos:r["a"]}},methods:{getIcon:function(t){switch(t){case"play":return"fa fa-play";case"question":return"fa fa-question";case"text":return"fa fa-file-text-o";case"folder":return"fa fa-folder-open";case"references":return"fa fa-book";case"glosary":return"fa fa-sort-alpha-asc";default:return t}}}},F=q,G=Object(m["a"])(F,j,R,!1,null,null,null),U=G.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"curso"},[a("router-view")],1)},V=[],H={name:"Curso"},J=H,W=Object(m["a"])(J,B,V,!1,null,"5ed582d6",null),Y=W.exports;s["default"].use(S["a"]);var K=new S["a"]({routes:[{path:"/",name:"inicio",component:U},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:Y,redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("actividad").then(a.bind(null,"d301"))}},{path:"tema2",name:"tema2",component:function(){return a.e("actividad").then(a.bind(null,"d301"))}}]},{path:"/actividad",name:"actividad",component:function(){return a.e("actividad").then(a.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"c92c"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dbb5"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"7c1e"))}}],scrollBehavior:function(t,e,a){return t.hash?{selector:t.hash}:{x:0,y:0}}}),Q=K,X=a("2f62");s["default"].use(X["a"]);var Z=new X["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["default"].config.productionTip=!1,new s["default"]({router:Q,store:Z,render:function(t){return t(O)}}).$mount("#app")},5966:function(t,e,a){},"8a51":function(t,e,a){},cdd9:function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return i})),a.d(e,"d",(function(){return n})),a.d(e,"e",(function(){return o})),a.d(e,"c",(function(){return r}));var s={tituloPrincipal:"Empezando el aprendizaje, dispositivos y TIC.",subtituloPrincipal:"Desarrollo de habilidades digitales para la gestión de la información ",descripcionCurso:"Este módulo aborda conceptos básicos relacionados con los dispositivos usados para navegar en internet, así como la influencia que tiene el uso de las tecnologías de información y comunicación - TIC en diferentes contextos",imagen:a("ceef")},i=[{type:"play",title:"Introducción",route:"introduccion"},{type:"1",title:"Componentes",route:"curso"},{type:"question",title:"Actividad didáctica",route:"actividad"}],n={menu:[{icon:"fa fa-home",title:"Volver al inicio",routeName:"inicio"},{routeName:"tema1",icon:"fa fa-play-circle",title:"1. Empezando el aprendizaje, dispositivos y TIC",tags:["TIC","Internet","WiFi","DispositivosElectrónicos"],submenu:[{icon:"fa fa-file-text",title:"1.1 Dispositivos",hash:"t_1_1"},{icon:"fa fa-file-text",title:"1.1.1 Reconocimiento de dispositivos",hash:"t_1_1_1"},{icon:"fa fa-file-text",title:"1.1.2 Tipos de dispositivos para conectarse a internet",hash:"t_1_1_2"},{icon:"fa fa-file-text",title:"1.2 Impacto de las TIC",hash:"t_1_2"},{icon:"fa fa-file-text",title:"1.2.1 Impacto Académico",hash:"t_1_2_1"},{icon:"fa fa-file-text",title:"1.2.2 Impacto Social",hash:"t_1_2_2"},{icon:"fa fa-file-text",title:"1.2.3 Impacto Emprendimiento",hash:"t_1_2_3"}]},{icon:"fa fa-question-circle",title:"Actividad didáctica",routeName:"actividad"}],subMenu:[{icon:"fa fa-sort-alpha-asc",title:"Glosario",routeName:"glosario"},{icon:"fa fa-book",title:"Referencias bibliográficas",routeName:"referencias"},{icon:"fa fa-download",title:"Descargar material",download:"download/material.zip"}]},o=[{referencia:"Atzori, L., Iera, A. y Morabito, G., (2017) Understanding the internet of things: Definition, Potentials, And Societal Role of a Fast Evolving Paradigm",enlace:"https://doi.org/10.1016/j.adhoc.2016.12.004",tituloenlace:"Ad Hoc Networks, 56, 122-140."},{referencia:"Castro, S., Medina, B. y Camargo, L., (2016) Supervisión y Control Industrial a través de Teléfonos Inteligentes Usando un Computador de Placa Única Raspberry Pi",enlace:"http://dx.doi.org/10.4067/S0718-07642016000200015",tituloenlace:"Inf. Tecnol. 27(2), 121-130."},{referencia:"Eines, Mónica E.; Aranda, Nélida Inés y Amilivia, Luis Alberto. (2018) Las Píldoras de Contenidos. Rev. iberoam. tecnol. educ. educ. tecnol. [online]., n.21 [citado 2020-12-18], pp.15-23. Disponible en:",enlace:"http://www.scielo.org.ar/scielo.php?script=sci_arttext&pid=S1850-99592018000100003&lng=es&nrm=iso",tituloenlace:"ISSN 1851-0086"},{referencia:"Moreira, Gislene (2011). Democracia WiFi: Dinámicas de la política y la comunicación en la era digital. Quórum Académico, 8(2),183-208. [fecha de Consulta 18 de diciembre de 2020]. ISSN: 1690-7582. Disponible en:",enlace:"https://www.redalyc.org/articulo.oa?id=1990/199020215002",tituloenlace:""}],r=[{termino:"Android",significado:"Sistema operativo que usan teléfonos móviles usa como base Linux."},{termino:"Raspberry",significado:"Dispositivo embebido con una placa base emulando un computador de bajo costo para aplicaciones específicas."},{termino:"TIC",significado:"Acrónimo de tecnologías de la información y comunicación."},{termino:"Wifi",significado:"Es una marca comercial que también es usada para designar a las tecnologías de red sin cable (Moreira, 2011)."}]},ceef:function(t,e,a){t.exports=a.p+"img/img3.53cf7e26.svg"},cf25:function(t,e,a){"use strict";a("fea6")},d76a:function(t,e,a){},ed9e:function(t,e,a){t.exports=a.p+"img/icon_dots.40ab1c04.svg"},eef9:function(t,e,a){"use strict";a("8a51")},fea6:function(t,e,a){}});
//# sourceMappingURL=app.b4209ad6.js.map