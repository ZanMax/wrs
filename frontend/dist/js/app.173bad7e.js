(function(t){function e(e){for(var s,n,o=e[0],l=e[1],d=e[2],u=0,f=[];u<o.length;u++)n=o[u],r[n]&&f.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(f.length)f.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},i=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var c=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("1530")},1530:function(t,e,a){},"16f2":function(t,e,a){},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=i(t);return a(e)}function i(t){var e=s[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}r.keys=function(){return Object.keys(s)},r.resolve=i,t.exports=r,r.id="4678"},5273:function(t,e,a){"use strict";a("b89b")},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=a("5f5b"),i=a("b1e0"),n=a("8c4f"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("body",{attrs:{id:"page-top"}},[a("div",{attrs:{id:"wrapper"}},[a("SideBar"),a("div",{staticClass:"d-flex flex-column",attrs:{id:"content-wrapper"}},[a("div",{attrs:{id:"content"}},[a("Header"),t._m(0)],1),a("Footer")],1)],1)])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"d-sm-flex align-items-center justify-content-between mb-4"},[a("h1",{staticClass:"h3 mb-0 text-gray-800"},[t._v("Dashboard")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-3 col-md-6 mb-4"},[a("div",{staticClass:"card border-left-primary shadow h-100 py-2"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row no-gutters align-items-center"},[a("div",{staticClass:"col mr-2"},[a("div",{staticClass:"text-xs font-weight-bold text-primary text-uppercase mb-1"},[t._v("\n                        Stat 1\n                      ")]),a("div",{staticClass:"h5 mb-0 font-weight-bold text-gray-800"},[t._v("Data")])]),a("div",{staticClass:"col-auto"},[a("i",{staticClass:"fas fa-calendar fa-2x text-gray-300"})])])])])]),a("div",{staticClass:"col-xl-3 col-md-6 mb-4"},[a("div",{staticClass:"card border-left-success shadow h-100 py-2"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row no-gutters align-items-center"},[a("div",{staticClass:"col mr-2"},[a("div",{staticClass:"text-xs font-weight-bold text-success text-uppercase mb-1"},[t._v("\n                        Stat 2\n                      ")]),a("div",{staticClass:"h5 mb-0 font-weight-bold text-gray-800"},[t._v("Data")])]),a("div",{staticClass:"col-auto"},[a("i",{staticClass:"fas fa-dollar-sign fa-2x text-gray-300"})])])])])]),a("div",{staticClass:"col-xl-3 col-md-6 mb-4"},[a("div",{staticClass:"card border-left-info shadow h-100 py-2"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row no-gutters align-items-center"},[a("div",{staticClass:"col mr-2"},[a("div",{staticClass:"text-xs font-weight-bold text-info text-uppercase mb-1"},[t._v("Stat 3\n                      ")]),a("div",{staticClass:"h5 mb-0 font-weight-bold text-gray-800"},[t._v("Data")])]),a("div",{staticClass:"col-auto"},[a("i",{staticClass:"fas fa-clipboard-list fa-2x text-gray-300"})])])])])]),a("div",{staticClass:"col-xl-3 col-md-6 mb-4"},[a("div",{staticClass:"card border-left-warning shadow h-100 py-2"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row no-gutters align-items-center"},[a("div",{staticClass:"col mr-2"},[a("div",{staticClass:"text-xs font-weight-bold text-warning text-uppercase mb-1"},[t._v("\n                        STAT 4\n                      ")]),a("div",{staticClass:"h5 mb-0 font-weight-bold text-gray-800"},[t._v("Data")])]),a("div",{staticClass:"col-auto"},[a("i",{staticClass:"fas fa-comments fa-2x text-gray-300"})])])])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-8 col-lg-7"},[a("div",{staticClass:"card shadow mb-4"},[a("div",{staticClass:"card-header py-3 d-flex flex-row align-items-center justify-content-between"},[a("h6",{staticClass:"m-0 font-weight-bold text-primary"},[t._v("Work Time")])]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"chart-area"},[a("div",{staticClass:"chartjs-size-monitor"},[a("div",{staticClass:"chartjs-size-monitor-expand"},[a("div",{})]),a("div",{staticClass:"chartjs-size-monitor-shrink"},[a("div",{})])]),a("canvas",{staticClass:"chartjs-render-monitor",staticStyle:{display:"block",width:"892px",height:"320px"},attrs:{id:"myAreaChart",width:"892",height:"320"}})])])])]),a("div",{staticClass:"col-xl-4 col-lg-5"},[a("div",{staticClass:"card shadow mb-4"},[a("div",{staticClass:"card-header py-3 d-flex flex-row align-items-center justify-content-between"},[a("h6",{staticClass:"m-0 font-weight-bold text-primary"},[t._v("Top Sites")])]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"chart-pie pt-4 pb-2"},[a("div",{staticClass:"chartjs-size-monitor"},[a("div",{staticClass:"chartjs-size-monitor-expand"},[a("div",{})]),a("div",{staticClass:"chartjs-size-monitor-shrink"},[a("div",{})])]),a("canvas",{staticClass:"chartjs-render-monitor",staticStyle:{display:"block",width:"413px",height:"245px"},attrs:{id:"myPieChart",width:"413",height:"245"}})]),a("div",{staticClass:"mt-4 text-center small"},[a("span",{staticClass:"mr-2"},[a("i",{staticClass:"fas fa-circle text-primary"}),t._v(" Direct\n                                      ")]),a("span",{staticClass:"mr-2"},[a("i",{staticClass:"fas fa-circle text-success"}),t._v(" Social\n                                      ")]),a("span",{staticClass:"mr-2"},[a("i",{staticClass:"fas fa-circle text-info"}),t._v(" Referral\n                                      ")])])])])])])])}],d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"},[a("button",{staticClass:"btn btn-link d-md-none rounded-circle mr-3",attrs:{id:"sidebarToggleTop"}},[a("i",{staticClass:"fa fa-bars"})]),a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item dropdown no-arrow d-sm-none"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"searchDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fas fa-search fa-fw"})]),a("div",{staticClass:"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in",attrs:{"aria-labelledby":"searchDropdown"}},[a("form",{staticClass:"form-inline mr-auto w-100 navbar-search"},[a("div",{staticClass:"input-group"},[a("input",{staticClass:"form-control bg-light border-0 small",attrs:{type:"text",placeholder:"Search for...","aria-label":"Search","aria-describedby":"basic-addon2"}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[a("i",{staticClass:"fas fa-search fa-sm"})])])])])])]),a("div",{staticClass:"topbar-divider d-none d-sm-block"}),a("li",{staticClass:"nav-item dropdown no-arrow"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"userDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("span",{staticClass:"mr-2 d-none d-lg-inline text-gray-600 small"},[t._v("UserName")])]),a("div",{staticClass:"dropdown-menu dropdown-menu-right shadow animated--grow-in",attrs:{"aria-labelledby":"userDropdown"}},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-user fa-sm fa-fw mr-2 text-gray-400"}),t._v("\n            Profile\n          ")]),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"}),t._v("\n            Settings\n          ")]),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-list fa-sm fa-fw mr-2 text-gray-400"}),t._v("\n            Activity Log\n          ")]),a("div",{staticClass:"dropdown-divider"}),a("a",{staticClass:"dropdown-item",attrs:{href:"#","data-toggle":"modal","data-target":"#logoutModal"}},[a("i",{staticClass:"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"}),t._v("\n            Logout\n          ")])])])])])])}],u={name:"Header"},f=u,m=a("2877"),p=Object(m["a"])(f,d,c,!1,null,"38b9ce23",null),b=p.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",attrs:{id:"accordionSidebar"}},[a("router-link",{staticClass:"sidebar-brand d-flex align-items-center justify-content-center",attrs:{to:"/"}},[a("div",{staticClass:"sidebar-brand-icon rotate-n-15"},[a("i",{staticClass:"fas fa-laugh-wink"})]),a("div",{staticClass:"sidebar-brand-text mx-3"},[t._v("WRS "),a("sup",[t._v("0")]),a("sup",[t._v(".1")])])]),a("hr",{staticClass:"sidebar-divider my-0"}),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[a("span",[t._v("Dashboard")])])],1),a("hr",{staticClass:"sidebar-divider"}),a("div",{staticClass:"sidebar-heading"},[t._v("\n      Reports\n    ")]),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/worktime"}},[a("span",[t._v("WorkTime")])])],1),a("hr",{staticClass:"sidebar-divider"}),a("div",{staticClass:"sidebar-heading"},[t._v("\n      Settings\n    ")]),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/users"}},[a("span",[t._v("Users")])])],1),a("hr",{staticClass:"sidebar-divider d-none d-md-block"})],1)])},v=[],g={name:"SideBar"},y=g,_=Object(m["a"])(y,h,v,!1,null,"422b0d82",null),j=_.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("footer",{staticClass:"sticky-footer bg-white"},[a("div",{staticClass:"container my-auto"},[a("div",{staticClass:"copyright text-center my-auto"},[a("span",[t._v("Copyright © "),a("a",{attrs:{href:"https://devbytes.net/"}},[t._v("DevBytes")]),t._v(" 2021")])])])])])}],k={name:"Footer"},x=k,S=Object(m["a"])(x,w,C,!1,null,"23093a37",null),D=S.exports,z={title:"Dashboard - Work Report System",name:"Dashboard",components:{Header:b,SideBar:j,Footer:D}},E=z,O=Object(m["a"])(E,o,l,!1,null,"c23403f4",null),T=O.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("body",{attrs:{id:"page-top"}},[a("div",{attrs:{id:"wrapper"}},[a("SideBar"),a("div",{staticClass:"d-flex flex-column",attrs:{id:"content-wrapper"}},[a("div",{attrs:{id:"content"}},[a("Header"),a("div",{staticClass:"container-fluid"},[a("div",[a("label",{attrs:{for:"datepicker"}},[t._v("Choose a date")]),a("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"datepicker"},on:{input:t.getDataByDate},model:{value:t.selected_date,callback:function(e){t.selected_date=e},expression:"selected_date"}})],1),[a("div",[a("b-table",{attrs:{striped:"",hover:"",items:t.table_body,fields:t.table_header},scopedSlots:t._u([{key:"cell(start)",fn:function(e){return[t._v("\n                  "+t._s(t._f("moment")(e.item.start))+"\n                ")]}},{key:"cell(finish)",fn:function(e){return[t._v("\n                  "+t._s(t._f("moment")(e.item.finish))+"\n                ")]}},{key:"cell(detailed_report)",fn:function(e){return[a("router-link",{staticClass:"btn btn-primary btn-icon-split btn-sm btn-view",attrs:{to:{name:"detailedReport",params:{userId:e.item.id_user,uid:e.item.uid,reportDate:t.selected_date}}}},[a("span",[a("b-icon",{attrs:{icon:"box-arrow-right","aria-hidden":"true"}})],1),a("span",{staticClass:"viewResult"},[t._v("View")])])]}},{key:"cell(consolidate_report)",fn:function(e){return[a("router-link",{staticClass:"btn btn-primary btn-icon-split btn-sm btn-view",attrs:{to:{name:"consolidateReport",params:{userId:e.item.id_user,uid:e.item.uid,reportDate:t.selected_date}}}},[a("span",[a("b-icon",{attrs:{icon:"box-arrow-right","aria-hidden":"true"}})],1),a("span",{staticClass:"viewResult"},[t._v("View")])])]}}])})],1)]],2)],1),a("Footer")],1)],1)])])},I=[],M=a("c1df"),U=a.n(M),q=a("bc3a"),B=a.n(q),R={title:"Work Time - Work Report System",name:"WorkTime",components:{Header:b,SideBar:j,Footer:D},data:function(){return{selected_date:"",table_header:[{key:"name",label:"Name"},{key:"start",label:"Start"},{key:"finish",label:"Finish"},{key:"work_shift",label:"Work Shift"},{key:"detailed_report",label:"Detailed Report"},{key:"consolidate_report",label:"Consolidate Report"}],table_body:[]}},methods:{getDataByDate:function(){var t=this;B.a.get("/worktime/",{params:{selected_date:this.selected_date}}).then((function(e){t.table_body=e.data})).catch((function(t){console.log(t)})).then((function(){}))}},watch:{selected_date:function(){console.log("Date was changed")}},filters:{moment:function(t){return U()(t).format("DD-MM-YYYY HH:mm:ss")}},created:function(){console.log("created"),this.selected_date=U()(new Date).format("YYYY-MM-DD")},mounted:function(){console.log("Mount"),this.getDataByDate()}},P=R,$=(a("916b"),Object(m["a"])(P,A,I,!1,null,"61277d70",null)),H=$.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("body",{attrs:{id:"page-top"}},[a("div",{attrs:{id:"wrapper"}},[a("SideBar"),a("div",{staticClass:"d-flex flex-column",attrs:{id:"content-wrapper"}},[a("div",{attrs:{id:"content"}},[a("Header"),a("div",{staticClass:"container-fluid add-user"},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-add-user",modifiers:{"modal-add-user":!0}}],attrs:{variant:"outline-primary"}},[t._v("Add User")])],1),a("div",{staticClass:"container-fluid"},[a("b-table",{attrs:{striped:"",hover:"",items:t.table_body,fields:t.table_header},scopedSlots:t._u([{key:"cell(action)",fn:function(e){return[a("b-button",{staticClass:"btn-sm",attrs:{variant:"primary"},on:{click:function(a){return t.selectUser(e.item.id)}}},[a("span",[a("b-icon",{attrs:{icon:"pencil-square","aria-hidden":"true"}})],1),a("span",{staticClass:"edit-text"},[t._v("Edit")])])]}}])})],1)],1),a("Footer")],1)],1)]),a("b-modal",{ref:"modal",attrs:{id:"modal-add-user",title:"Add new user"},on:{show:t.resetModal,hidden:t.resetModal,ok:t.handleOk}},[a("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("b-form-group",{attrs:{label:"Name","label-for":"name-input","invalid-feedback":"Name is required",state:t.nameState}},[a("b-form-input",{attrs:{id:"name-input",state:t.nameState,required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("b-form-group",{attrs:{label:"Email","label-for":"email-input","invalid-feedback":"Email is required",state:t.emailState}},[a("b-form-input",{attrs:{id:"email-input",state:t.emailState,required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("b-form-group",{attrs:{label:"Password","label-for":"password-input","invalid-feedback":"Password is required",state:t.passwordState}},[a("b-form-input",{attrs:{id:"password-input",state:t.passwordState,required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("b-form-group",{attrs:{label:"Type","label-for":"type-input","invalid-feedback":"Type is required",state:t.typeState}},[a("b-form-select",{attrs:{id:"type-input",options:t.user_types,state:t.typeState},model:{value:t.selectedType,callback:function(e){t.selectedType=e},expression:"selectedType"}})],1),a("b-form-group",{attrs:{label:"Groups","label-for":"groups-input","invalid-feedback":"Groups is required",state:t.groupState}},[a("b-form-select",{attrs:{id:"type-input",options:t.user_groups,state:t.groupState},model:{value:t.selectedGroup,callback:function(e){t.selectedGroup=e},expression:"selectedGroup"}})],1)],1)]),a("b-modal",{ref:"modal",attrs:{id:"modal-edit-user",title:"Edit user"},on:{show:t.editShowModal,hidden:t.editResetModal,ok:t.updateUser}},[a("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("b-form-group",{attrs:{label:"Name","label-for":"edit-name-input","invalid-feedback":"Name is required",state:t.nameState}},[a("b-form-input",{attrs:{id:"edit-name-input",state:t.nameState,required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("b-form-group",{attrs:{label:"Email","label-for":"email-input","invalid-feedback":"Email is required",state:t.emailState}},[a("b-form-input",{attrs:{id:"email-input",state:t.emailState,required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("b-form-group",{attrs:{label:"Password","label-for":"password-input","invalid-feedback":"Password is required",state:t.passwordState}},[a("b-form-input",{attrs:{id:"password-input",state:t.passwordState,required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("b-form-checkbox",{attrs:{id:"checkbox-user-active",name:"checkbox-user-active",value:"true","unchecked-value":"false"},model:{value:t.userStatus,callback:function(e){t.userStatus=e},expression:"userStatus"}},[t._v("\n        Active\n      ")])],1)])],1)},F=[],G=(a("b0c0"),{name:"Users",components:{Header:b,SideBar:j,Footer:D},data:function(){return{name:"",email:"",password:"",selectedType:"",selectedGroup:"",nameState:null,emailState:null,passwordState:null,typeState:null,groupState:null,userStatus:"true",selectedUserId:0,table_header:[{key:"name",label:"Name"},{key:"email",label:"Email"},{key:"is_active",label:"Active"},{key:"action",label:"Action"}],table_body:[],user_types:[{value:"super-admin",text:"Super Admin"},{value:"group-admin",text:"Group Admin"},{value:"user",text:"User"}],user_groups:[{value:"support",text:"Support"}]}},methods:{getUsersDataByLoad:function(){var t=this;B.a.get("/user",{params:{}}).then((function(e){t.table_body=e.data})).catch((function(t){console.log(t)})).then((function(){}))},getGroupsByLoad:function(){console.log("Get Groups")},checkFormValidity:function(){var t=this.$refs.form.checkValidity();return this.nameState=t,console.log(t),t},handleOk:function(t){var e=this;this.checkFormValidity()?(console.log(this.name,this.email,this.password,this.selectedGroup,this.selectedType),B.a.post("/user",{name:this.name,email:this.email,password:this.password}).then((function(t){console.log(t.data),e.getUsersDataByLoad()})).catch((function(t){console.log(t)})).then((function(){}))):t.preventDefault()},resetModal:function(){this.name="",this.email="",this.password="",this.selectedGroup="",this.selectedType=""},editShowModal:function(){console.log("show")},editResetModal:function(){console.log("reset")},selectUser:function(t){var e=this;B.a.get("/user/?user_id="+t,{}).then((function(t){e.$bvModal.show("modal-edit-user"),e.name=t.data.name,e.email=t.data.email})).catch((function(t){console.log(t)})).then((function(){e.selectedUserId=t}))},updateUser:function(){console.log(this.name,this.email,this.password,this.userStatus),B.a.put("/user",{id:this.selectedUserId,name:this.name,email:this.email,password:this.password,is_active:this.userStatus}).then((function(t){console.log(t.data)})).catch((function(t){console.log(t)})).then((function(){}))}},mounted:function(){this.getUsersDataByLoad(),this.getGroupsByLoad()}}),N=G,Y=(a("9469"),Object(m["a"])(N,L,F,!1,null,"4ea20cdb",null)),W=Y.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("body",{attrs:{id:"page-top"}},[a("div",{attrs:{id:"wrapper"}},[a("SideBar"),a("div",{staticClass:"d-flex flex-column",attrs:{id:"content-wrapper"}},[a("div",{attrs:{id:"content"}},[a("Header"),a("div",{staticClass:"container-fluid"},[a("b-table",{attrs:{striped:"",hover:"",items:t.table_body,fields:t.table_header},scopedSlots:t._u([{key:"cell(track_time)",fn:function(e){return[t._v("\n              "+t._s(t._f("toHMS")(e.item.track_time))+"\n            ")]}},{key:"cell(tab_opened)",fn:function(e){return[t._v("\n              "+t._s(t._f("moment")(e.item.tab_opened))+"\n            ")]}},{key:"cell(tab_closed)",fn:function(e){return[t._v("\n              "+t._s(t._f("moment")(e.item.tab_closed))+"\n            ")]}},{key:"cell(tab_url)",fn:function(e){return[a("a",{attrs:{href:e.value}},[t._v(t._s(e.value.slice(0,120)))])]}}])})],1)],1),a("Footer")],1)],1)])])},J=[],K={title:"Detailed Report - Work Report System",name:"DetailedReport",components:{Header:b,SideBar:j,Footer:D},props:["userId","reportDate","uid"],data:function(){return{table_header:[{key:"tab_url",label:"Tab URL"},{key:"track_time",label:"Track Time",sortable:!0},{key:"tab_opened",label:"Tab Opened"},{key:"tab_closed",label:"Tab Closed"}],table_body:[]}},methods:{getDataByDateAndUserId:function(){var t=this;B.a.get("/detailedreport",{params:{report_date:this.reportDate,user_id:this.userId,uid:this.uid}}).then((function(e){t.table_body=e.data})).catch((function(t){console.log(t)})).then((function(){}))}},filters:{moment:function(t){return U()(t).format("DD-MM-YYYY HH:mm:ss")},toHMS:function(t){return new Date(1e3*t).toISOString().substr(11,8)}},mounted:function(){this.getDataByDateAndUserId()}},Q=K,X=Object(m["a"])(Q,V,J,!1,null,"57a90ad2",null),Z=X.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("body",{attrs:{id:"page-top"}},[a("div",{attrs:{id:"wrapper"}},[a("SideBar"),a("div",{staticClass:"d-flex flex-column",attrs:{id:"content-wrapper"}},[a("div",{attrs:{id:"content"}},[a("Header"),a("div",{staticClass:"container-fluid"},[a("b-table",{attrs:{striped:"",hover:"",items:t.table_body,fields:t.table_header},scopedSlots:t._u([{key:"cell(tab_url)",fn:function(e){return[a("a",{attrs:{href:e.value}},[t._v(t._s(e.value))])]}},{key:"cell(track_time)",fn:function(e){return[t._v("\n              "+t._s(t._f("toHMS")(e.item.track_time))+"\n            ")]}}])})],1)],1),a("Footer")],1)],1)])])},et=[],at={title:"Consolidated Report - Work Report System",name:"ConsolidatedReport",components:{Header:b,SideBar:j,Footer:D},props:["userId","reportDate","uid"],data:function(){return{table_header:[{key:"tab_domain",label:"URL"},{key:"track_time",label:"Active time spent",sortable:!0}],table_body:[]}},methods:{getDataByDateAndUserId:function(){var t=this;B.a.get("/consolidatereport",{params:{report_date:this.reportDate,user_id:this.userId,uid:this.uid}}).then((function(e){t.table_body=e.data})).catch((function(t){console.log(t)})).then((function(){}))}},filters:{toHMS:function(t){return new Date(1e3*t).toISOString().substr(11,8)}},mounted:function(){this.getDataByDateAndUserId()}},st=at,rt=Object(m["a"])(st,tt,et,!1,null,"8c7bd74a",null),it=rt.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3"}),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"p-5"},[t._m(0),a("form",{staticClass:"user"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control form-control-user",attrs:{type:"text",id:"username","aria-describedby":"emailHelp",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-user",attrs:{type:"password",id:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("b-button",{staticClass:"btn btn-login btn-primary btn-user btn-block",on:{click:t.login}},[t._v("\n            Login\n          ")])],1),a("hr"),t._m(1),t._m(2)])]),a("div",{staticClass:"col-lg-3"})])])},ot=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("h1",{staticClass:"h4 text-gray-900 mb-4"},[t._v("Private Area")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("a",{staticClass:"small",attrs:{href:"#"}},[t._v("Forgot Password?")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("a",{staticClass:"small",attrs:{href:"#"}},[t._v("Create an Account!")])])}],lt={name:"Login",data:function(){return{username:"",password:""}},methods:{login:function(){var t=this,e=new FormData;e.append("username",this.username),e.append("password",this.password),this.$store.dispatch("login",e).then((function(){return t.$router.push("/")})).catch((function(t){return console.log(t)}))}}},dt=lt,ct=(a("5273"),Object(m["a"])(dt,nt,ot,!1,null,"3c52cdc6",null)),ut=ct.exports,ft=(a("d3b7"),a("2f62"));s["default"].use(ft["a"]);var mt=new ft["a"].Store({state:{status:"",token:localStorage.getItem("token")||"",user:{}},mutations:{auth_request:function(t){t.status="loading"},auth_success:function(t,e,a){t.status="success",t.token=e,t.user=a},auth_error:function(t){t.status="error"},logout:function(t){t.status="",t.token=""}},actions:{login:function(t,e){var a=t.commit;return new Promise((function(t,s){a("auth_request"),B()({url:"/login/access-token",data:e,method:"POST"}).then((function(e){var s=e.data.access_token,r="";localStorage.setItem("token",s),B.a.defaults.headers.common["Authorization"]=s,a("auth_success",s,r),t(e)})).catch((function(t){a("auth_error"),localStorage.removeItem("token"),s(t)}))}))},logout:function(t){var e=t.commit;return new Promise((function(t){e("logout"),localStorage.removeItem("token"),delete B.a.defaults.headers.common["Authorization"],t()}))}},getters:{isLoggedIn:function(t){return!!t.token},authStatus:function(t){return t.status}},modules:{}}),pt=new n["a"]({routes:[{path:"/login",component:ut},{path:"/",component:T,meta:{requiresAuth:!0},beforeEnter:function(t,e,a){if(!mt.getters["isLoggedIn"])return a({path:"/login"});a()}},{path:"/worktime",component:H,meta:{requiresAuth:!0},beforeEnter:function(t,e,a){if(!mt.getters["isLoggedIn"])return a({path:"/login"});a()}},{path:"/users",component:W,meta:{requiresAuth:!0},beforeEnter:function(t,e,a){if(!mt.getters["isLoggedIn"])return a({path:"/login"});a()}},{path:"/detailedreport",name:"detailedReport",component:Z,props:!0,meta:{requiresAuth:!0},beforeEnter:function(t,e,a){if(!mt.getters["isLoggedIn"])return a({path:"/login"});a()}},{path:"/consolidatereport",name:"consolidateReport",component:it,props:!0,meta:{requiresAuth:!0},beforeEnter:function(t,e,a){if(!mt.getters["isLoggedIn"])return a({path:"/login"});a()}},{path:"*",redirect:"/login"}]}),bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},ht=[],vt={name:"App",components:{}},gt=vt,yt=(a("034f"),Object(m["a"])(gt,bt,ht,!1,null,null,null)),_t=yt.exports;a("f9e3"),a("2dd8");function jt(t){var e=t.$options.title;if(e)return"function"===typeof e?e.call(t):e}var wt={created:function(){var t=jt(this);t&&(document.title=t)}},Ct="https://wrs.db.rv.ua/api";B.a.defaults.baseURL=Ct,s["default"].config.productionTip=!1;var kt=localStorage.getItem("token");kt&&(B.a.defaults.headers.common["Authorization"]=kt),s["default"].use(r["a"]),s["default"].use(i["a"]),s["default"].use(n["a"]),s["default"].mixin(wt),s["default"].use(a("2ead")),new s["default"]({render:function(t){return t(_t)},router:pt,store:mt}).$mount("#app")},"5a78":function(t,e,a){},"916b":function(t,e,a){"use strict";a("16f2")},9469:function(t,e,a){"use strict";a("5a78")},b89b:function(t,e,a){}});
//# sourceMappingURL=app.173bad7e.js.map