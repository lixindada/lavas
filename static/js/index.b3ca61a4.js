webpackJsonp([1],{0:function(t,e,n){t.exports=n("msSN")},"3JWO":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"SET_PAGE_SWITCHING",function(){return c}),n.d(e,"SET_PAGE_SCROLL_POSITION",function(){return l}),n.d(e,"state",function(){return u}),n.d(e,"mutations",function(){return h}),n.d(e,"actions",function(){return d});var a,i=n("bOdI"),r=n.n(i),s=n("Dd8w"),o=n.n(s),c="SET_PAGE_SWITCHING",l="SET_PAGE_SCROLL_POSITION",u=function(){return{isPageSwitching:!1,scrollPostionMap:{}}},h=(a={},r()(a,c,function(t,e){t.isPageSwitching=e}),r()(a,l,function(t,e){var n=e.pageId,a=e.scrollPosition;t.scrollPostionMap=o()({},t.scrollPostionMap,r()({},n,a))}),a),d={setPageSwitching:function(t,e){(0,t.commit)(c,e)},savePageScrollPosition:function(t,e){var n=t.commit,a=e.pageId,i=e.scrollPosition;n(l,{pageId:a,scrollPosition:i})}}},"5e9e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return a}),n.d(e,"mutations",function(){return i});var a=function(){return{enable:!0,type:"none",effect:"none"}},i={setType:function(t,e){t.type=e},setEffect:function(t,e){t.effect=e}}},CJsk:function(t,e){},FP9L:function(t,e){},IaLg:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"SET_SIDEBAR_VISIBILITY",function(){return i}),n.d(e,"state",function(){return r}),n.d(e,"mutations",function(){return s}),n.d(e,"actions",function(){return o});var a=n("bOdI"),i="SET_SIDEBAR_VISIBILITY",r=function(){return{show:!1,title:{imageLeft:"",altLeft:"",iconLeft:"home",text:"Home",imageRight:"",altRight:"",iconRight:""},blocks:[{sublistTitle:"Sublist1",list:[{text:"Detail Page 1",icon:"sentiment_satisfied",route:"/detail/1"},{text:"Detail Page 2",image:"https://github.com/google/material-design-icons/blob/master/social/2x_web/ic_mood_bad_black_48dp.png?raw=true",alt:"mood-bad",route:"/detail/2"},{text:"Detail Page 3",icon:"sentiment_neutral",route:"/detail/3"}]}]}},s=n.n(a)()({},i,function(t,e){t.show=e}),o={showSidebar:function(t){(0,t.commit)(i,!0)},hideSidebar:function(t){(0,t.commit)(i,!1)}}},Jfi4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"SET_APP_HEADER",function(){return o}),n.d(e,"state",function(){return c}),n.d(e,"mutations",function(){return l}),n.d(e,"actions",function(){return u});var a=n("bOdI"),i=n.n(a),r=n("woOf"),s=n.n(r),o="SET_APP_HEADER",c=function(){return{show:!0,title:"Lavas",logoIcon:{src:"",alt:""},showMenu:!0,showBack:!1,showLogo:!1,actions:[]}},l=i()({},o,function(t,e){t=s()(t,e)}),u={setAppHeader:function(t,e){(0,t.commit)(o,e)}}},MWJB:function(t,e){},"RW+i":function(t,e){},SbDi:function(t,e){},Uz7q:function(t,e){t.exports={buildVersion:1551691151276,build:{ssr:!1,publicPath:"/",compress:!0,cssExtract:!0},middleware:{all:[],server:[],client:[]},router:{mode:"history",base:"/",pageTransition:{type:"slide",transitionClass:"slide"}},errorHandler:{defaultErrorMessage:"Internal Server Error",showRealErrorMessage:!1,errorPath:"/error"},serviceWorker:{enable:!0,swDest:"E:\\lxsvn\\lavas\\dist\\service-worker.js"},skeleton:{enable:!0,asyncCSS:!0}}},VfP6:function(t,e,n){var a={"./appShell/appHeader.js":"Jfi4","./appShell/appSidebar.js":"IaLg","./appShell/common.js":"3JWO","./pageTransition.js":"5e9e"};function i(t){return n(r(t))}function r(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}i.keys=function(){return Object.keys(a)},i.resolve=r,t.exports=i,i.id="VfP6"},"Zbl+":function(t,e){},gHRC:function(t,e){},j5d9:function(t,e){},msSN:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("//Fk"),i=n.n(a),r=n("Gu7T"),s=n.n(r),o=n("Xxa5"),c=n.n(o),l=n("exGp"),u=n.n(l),h=n("/5sW"),d=n("1nuA"),p=function(){var t=u()(c.a.mark(function t(e){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();function f(t,e){var n={isClient:!0,app:e,store:t.store,route:t.to,from:t.from},a=t.next;return n.params=n.route.params||{},n.query=n.route.query||{},n.redirect=function(t){var e=t.status,i=void 0===e?302:e,r=t.path,s=void 0===r?"":r,o=t.query,c=void 0===o?{}:o,l=t.external,u=void 0!==l&&l;n._redirected=!0,a({path:s,query:c,status:i,external:u})},n}var v=function(){var t=u()(c.a.mark(function t(e,n){var a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=0;case 1:if(!(a<e.length)){t.next=9;break}if(!n._redirected){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,m(e[a],n);case 6:a++,t.next=1;break;case 9:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}();function m(t,e){var n=void 0;return 2===t.length?n=new i.a(function(n,a){t(e,function(t,i){t?(e.error(t),a(t)):n(i)})}):(n=t(e))&&(n instanceof i.a||"function"==typeof n.then)||(n=i.a.resolve(n)),n}var w=n("Uz7q"),b=n.n(w),_=n("Dd8w"),g=n.n(_),y=n("p3jY"),S=n.n(y),k=n("mvHQ"),x=n.n(k),C=n("pFYg"),P=n.n(C),T=n("/ocq"),A={name:"appshell",metaInfo:{title:"Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}],bodyAttrs:{"empty-appshell":void 0}}},E=n("XyMi"),I=Object(E.a)(A,function(){var t=this.$createElement;return(this._self._c||t)("div")},[],!1,null,null,null).exports,O={appHeaderState:{show:!0,title:"Lavas",showMenu:!1,showBack:!0,showLogo:!1,actions:[{icon:"home",route:{name:"index"}}]}};function L(t){t.dispatch("appShell/appHeader/setAppHeader",O.appHeaderState)}var $={name:"detailId",metaInfo:function(){return{title:"Detail "+this.$route.params.id,titleTemplate:"%s - Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}]}},asyncData:function(){var t=u()(c.a.mark(function t(e){var n=e.store;e.route;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return L(n),t.next=3,new i.a(function(t,e){setTimeout(t,500)});case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),activated:function(){L(this.$store)}};var H=function(t){n("RW+i")},W=Object(E.a)($,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail-wrapper"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs10:"","offset-xs1":""}},[n("article",{staticClass:"detail-content text-xs-center"},[n("header",{staticClass:"detail-title text-xs-center"},[t._v("\n                        Detail "+t._s(t.$route.params.id)+"\n                    ")]),t._v(" "),n("router-link",{attrs:{to:{name:"detailId",params:{id:Number(t.$route.params.id)+1}}}},[t._v("\n                        Detail "+t._s(Number(t.$route.params.id)+1)+"\n                    ")]),t._v(" "),n("p",[t._v("\n                    Progressive Web Apps are user experiences that have the reach of the web, and are:\nReliable - Load instantly and never show the downasaur, even in uncertain network conditions.\nFast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.\n                    ")]),t._v(" "),n("p",[t._v("\n                    Progressive Web Apps are user experiences that have the reach of the web, and are:\nReliable - Load instantly and never show the downasaur, even in uncertain network conditions.\nFast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.\n                    ")]),t._v(" "),n("p",[t._v("\n                    Progressive Web Apps are user experiences that have the reach of the web, and are:\nReliable - Load instantly and never show the downasaur, even in uncertain network conditions.\nFast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.\n                    ")]),t._v(" "),n("p",[t._v("\n                    Progressive Web Apps are user experiences that have the reach of the web, and are:\nReliable - Load instantly and never show the downasaur, even in uncertain network conditions.\nFast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.\n                    ")]),t._v(" "),n("p",[t._v("\n                    Progressive Web Apps are user experiences that have the reach of the web, and are:\nReliable - Load instantly and never show the downasaur, even in uncertain network conditions.\nFast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.\n                    ")])],1)])],1)],1)},[],!1,H,"data-v-2ecb0f5c",null).exports,j=n("fZjL"),R=n.n(j),M={name:"error",computed:{message:function(){return this.$route.params.error||"您访问的路径不存在"}},created:function(){var t=this.$route.query;0!==R()(t).length&&this.$router.replace({name:"error",params:t})}},q=Object(E.a)(M,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-error"},[e("p",[this._v(this._s(this.message))])])},[],!1,null,null,null).exports,D=n("NYxO");function B(t){t.dispatch("appShell/appHeader/setAppHeader",{show:!0,title:"Lavas",showMenu:!0,showBack:!1,showLogo:!1,actions:[{icon:"search",route:"/search"}]})}var N={name:"index",metaInfo:{title:"Home",titleTemplate:"%s - Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}]},asyncData:function(){var t=u()(c.a.mark(function t(e){var n=e.store;e.route;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:B(n);case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),activated:function(){B(this.$store)}};var Y=function(t){n("qSrE")},V=Object(E.a)(N,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"content"},[e("div",[e("h2",[this._v("LAVAS")]),this._v(" "),e("h4",[this._v("[ˈlɑ:vəz]")])])])])}],!1,Y,"data-v-38a27fdd",null).exports,F={appHeaderState:{show:!1}};function G(t){t.dispatch("appShell/appHeader/setAppHeader",F.appHeaderState)}var X={name:"search",metaInfo:{title:"Search",titleTemplate:"%s - Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}]},data:function(){return{query:"",loading:!1,data:[]}},methods:{search:function(){var t=u()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.data=[],this.loading=!0,this.$el.querySelector(".search-input").blur(),t.next=5,new i.a(function(t){setTimeout(t,1e3)});case 5:this.data=[{title:"Ali Connors",headline:"Brunch this weekend?",subtitle:"I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",action:"15 min"},{title:"me, Scrott, Jennifer",headline:"Summer BBQ",subtitle:"Wish I could come, but I'm out of town this weekend.",action:"2 hr"},{title:"Sandra Adams",headline:"Oui oui",subtitle:"Do you have Paris recommendations? Have you ever been?",action:"6 hr"},{title:"Trevor Hansen",headline:"Birthday gift",subtitle:"Have any ideas about what we should get Heidi for her birthday?",action:"12 hr"},{title:"Britta Holt",headline:"Recipe to try",subtitle:"We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",action:"18 hr"}],this.loading=!1;case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},asyncData:function(){var t=u()(c.a.mark(function t(e){var n=e.store;e.route;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:G(n);case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),activated:function(){G(this.$store)}};var J=function(t){n("pU7c")},U=[{path:"/appshell",component:I,meta:{},name:"appshell"},{path:"/detail/:id",component:W,meta:{},name:"detailId"},{path:"/",component:V,meta:{},name:"index"},{path:"/search",component:Object(E.a)(X,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-search-page"},[n("header",[n("v-btn",{staticClass:"search-btn",attrs:{light:"",icon:""},nativeOn:{click:function(e){return t.$router.go(-1)}}},[n("v-icon",{staticClass:"search-icon"},[t._v("arrow_back")])],1),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"search-input",attrs:{type:"search",autocomplete:"off",placeholder:"请输入搜索词",autocapitalize:"off"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]),t._v(" "),n("v-btn",{staticClass:"search-btn",attrs:{light:"",icon:""},nativeOn:{click:function(e){t.query=""}}},[n("v-icon",{staticClass:"search-icon"},[t._v("close")])],1)],1),t._v(" "),t.loading?n("div",{staticClass:"search-loading"},[n("v-progress-circular",{staticClass:"primary--text",attrs:{indeterminate:"",size:70}})],1):t._e(),t._v(" "),t.data&&t.data.length?n("div",{staticClass:"search-content"},[n("v-list",{attrs:{"two-line":""}},[t._l(t.data,function(e,a){return[n("v-list-tile",{key:e.title,attrs:{avatar:"",ripple:""}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))]),t._v(" "),n("v-list-tile-sub-title",{staticClass:"grey--text text--darken-4"},[t._v(t._s(e.headline))]),t._v(" "),n("v-list-tile-sub-title",[t._v(t._s(e.subtitle))])],1),t._v(" "),n("v-list-tile-action",[n("v-list-tile-action-text",[t._v(t._s(e.action))]),t._v(" "),n("v-icon",{staticClass:"grey--text text--lighten-1"},[t._v("star_border")])],1)],1),t._v(" "),a+1<t.data.length?n("v-divider",{attrs:{light:""}}):t._e()]})],2)],1):t._e()])},[],!1,J,"data-v-3f2ecb02",null).exports,meta:{},name:"search"},{path:"/error",component:q,meta:{},name:"error",alias:"*"}];h.a.use(T.a);var z=["index"],K=[],Z=[],Q="LAVAS_HISTORY_ARRAY_STACK_LOCAL_KEY",tt="LAVAS_HISTORY_STATE_STACK_LOCAL_KEY",et=[],nt=!1;function at(){return history.state?history.state.key:""}function it(t,e){try{localStorage.setItem(t,"object"===(void 0===e?"undefined":P()(e))?x()(e):e)}catch(t){}}function rt(t,e){var n=!0;return nt?(n=function(){var t=et.indexOf(at());return t===et.length-1||-1===t||(et.length=t+1,!1)}(),setTimeout(function(){var t=at(),e=et.indexOf(t);n&&-1===e&&et.push(t),it(tt,et)},300)):((n=function(t,e){var n=Z.indexOf(t.fullPath);return-1===n||(Z.length=n+1,!1)}(t))&&Z.push(t.fullPath),it(Q,Z)),t.name&&-1!==z.indexOf(t.name)?n=!1:t.name&&-1!==K.indexOf(t.name)&&(n=!0),n}nt=window.history&&"state"in history;var st=function(t,e,n){if(n)return n;var a={};return t.hash&&(a.selector=t.hash),t.matched.some(function(t){return t.meta.scrollToTop})&&(a.x=0,a.y=0),a},ot=U.filter(function(t){return t.keepAlive||t.meta.keepAlive}).map(function(t){return t.name});function ct(){var t=new T.a({mode:"history",base:"/",scrollBehavior:st,routes:U});return nt?function(){if(history.length>1)try{var t=JSON.parse(localStorage.getItem(tt));t&&t.length&&(et=t.slice(-history.length))}catch(t){}setTimeout(function(){et.length?et[et.length-1]=at():et.push(at())},300)}():function(t){var e=location.href.replace(location.origin+t,"/");try{var n=JSON.parse(localStorage.getItem(Q));n&&n.length&&n[n.length-1]===e&&(Z=n)}catch(t){}-1===Z.indexOf(e)&&Z.push(e)}(t.options.base),t.beforeEach(function(e,n,a){if(t.app.$store&&t.app.$store.state.pageTransition.enable){var i=rt(e)?"slide-left":"slide-right";t.app.$store.commit("pageTransition/setType","slide"),t.app.$store.commit("pageTransition/setEffect",i)}a()}),t}var lt=n("woOf"),ut=n.n(lt),ht=n("BO1k"),dt=n.n(ht);h.a.use(D.a);var pt=n("VfP6"),ft=pt.keys(),vt={},mt=!0,wt=!1,bt=void 0;try{for(var _t,gt=dt()(ft);!(mt=(_t=gt.next()).done);mt=!0){var yt=_t.value;if("./index.js"===yt){vt=Lt(yt);break}}}catch(t){wt=!0,bt=t}finally{try{!mt&&gt.return&&gt.return()}finally{if(wt)throw bt}}if("function"!=typeof vt){vt.modules=vt.modules||{};var St=!0,kt=!1,xt=void 0;try{for(var Ct,Pt=dt()(ft);!(St=(Ct=Pt.next()).done);St=!0){var Tt=Ct.value;if("./index.js"!==Tt){var At=Tt.replace(/^\.\//,"").replace(/\.js$/,""),Et=At.split("/"),It=$t(vt,Et);It[At=Et.pop()]=Lt(Tt),It[At].namespaced=!0}}}catch(t){kt=!0,xt=t}finally{try{!St&&Pt.return&&Pt.return()}finally{if(kt)throw xt}}}var Ot=vt instanceof Function?vt:function(){return new D.a.Store(ut()({},vt,{state:vt.state instanceof Function?vt.state():{}}))};function Lt(t){var e=pt(t),n=e.default||e;if(n.commit)throw new Error("[lavas] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[lavas] state should be a function in store/"+t.replace("./",""));return n}function $t(t,e){if(1===e.length)return t.modules;var n=e.shift(),a=t.modules[n]=t.modules[n]||{};return a.namespaced=!0,a.modules=a.modules||{},$t(a,e)}var Ht=new h.a,Wt={name:"appHeader",computed:g()({},Object(D.c)("appShell/appHeader",["show","showMenu","showBack","showLogo","logoIcon","title","actions"]),Object(D.c)("appShell/common",["isPageSwitching"])),methods:{handleClick:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.actionIdx,a=e.route;if(!this.isPageSwitching){var i={};"action"===t&&(i.actionIdx=n),this.$emit("click-"+t,i),Ht.$emit("app-header:click-"+t,i),a&&this.$router.push(a)}}}};var jt=function(t){n("MWJB")},Rt=Object(E.a)(Wt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-down"}},[n("header",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"app-header-wrapper"},[n("div",{staticClass:"app-header-left"},[t.showMenu?n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){return t.handleClick("menu")}}},[n("v-icon",{staticClass:"app-header-icon",attrs:{color:"white"}},[t._v("menu")])],1):t._e(),t._v(" "),t.showBack?n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){return t.handleClick("back")}}},[n("v-icon",{staticClass:"app-header-icon",attrs:{color:"white"}},[t._v("arrow_back")])],1):t._e(),t._v(" "),t.showLogo?n("div",{on:{click:function(e){return t.handleClick("logo")}}},[t._t("logo",[t.logoIcon.src?n("img",{staticClass:"app-header-icon",attrs:{src:t.logoIcon.src,alt:t.logoIcon.alt}}):t._e()])],2):t._e()],1),t._v(" "),n("div",{staticClass:"app-header-middle"},[t._t("title",[t._v("\n                "+t._s(t.title)+"\n            ")])],2),t._v(" "),n("div",{staticClass:"app-header-right"},[t._l(t.actions,function(e,a){return t._t("actions",[n("v-btn",{attrs:{icon:"icon"},nativeOn:{click:function(n){return t.handleClick("action",{actionIdx:a,route:e.route})}}},[e.icon?n("v-icon",{staticClass:"app-header-icon",attrs:{color:"white"}},[t._v(t._s(e.icon))]):t._e()],1)],{icon:e.icon,route:e.route})})],2)])])},[],!1,jt,"data-v-60e08c58",null).exports,Mt=n("bOdI"),qt=n.n(Mt),Dt=n("XPnZ"),Bt=n.n(Dt),Nt=function(t){setTimeout(t,1e3/60)};Nt=window.requestAnimationFrame||window.webkitRequestAnimationFrame||Nt;var Yt={props:{value:{type:Boolean,default:!1},enable:{type:Boolean,default:!0},width:{type:Number,default:.75},duration:{type:Number,default:200},region:qt()({type:Object},"default",function(){return{top:0,bottom:0,left:0,width:40}})},data:function(){return{clientWidth:320,clientHeight:568,startX:0,startY:0,scrollEnable:!1,wrapperClass:{expand:!1,collapse:!0,"w-left":!0},opacity:0,iscroll:null}},computed:{itsWidth:function(){return this.width<1?Math.round(this.width*this.clientWidth):this.width},widthProp:function(){return this.itsWidth+"px"},status:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},zone:function(){var t=this.region,e=t.top,n=t.right,a=t.bottom,i=t.left,r=t.width,s=t.height,o=this.clientWidth,c=this.clientHeight;return{top:void 0===e?c-a-s:e,left:void 0===i?o-n-r:i,width:void 0===r?o-i-n:r,height:void 0===s?c-e-i:s}}},watch:{status:function(t){t?this.expand():this.collapse()}},mounted:function(){this.clientWidth=document.documentElement.clientWidth,this.clientHeight=document.documentElement.clientHeight,document.body.addEventListener("touchstart",this.touchStart.bind(this)),document.body.addEventListener("touchmove",this.touchMove.bind(this))},methods:{touchStart:function(t){if(!this.wrapperClass.expand&&this.enable){var e=t.touches[0],n=e.clientX,a=e.clientY,i=this.zone,r=i.left,s=i.top,o=i.width,c=i.height;n<r||n>r+o||a<s||a>s+c||(this.scrollEnable=!0,this.startX=n,this.startY=a)}},touchMove:function(t){var e=this;if(this.scrollEnable){var n=t.touches[0],a=n.clientX,i=n.clientY,r=a-this.startX;r>5&&Math.abs(i-this.startY)/r<.577&&(this.wrapperClass.expand=!0,this.wrapperClass.collapse=!1,this.$nextTick(function(){e.bindScroll(t)}))}},toggleClick:function(t){this.status=!1},bindScroll:function(t){var e=this;this.iscroll||(this.iscroll=new Bt.a(this.$refs.sidebarWrapper,{eventPassthrough:!0,scrollY:!1,scrollX:!0,bounce:!1,startX:-this.itsWidth}),this.iscroll.on("scrollEnd",function(){var t=e.iscroll,n=t.directionX,a=t.x;0===a?e.status=!0:a===-e.itsWidth?e.status=!1:e.status=!(n>0)&&(n<0||!e.status)}),this.changeOpacity(),t&&this.iscroll._start(t))},expand:function(){var t=this;this.wrapperClass.expand=!0,this.wrapperClass.collapse=!1,this.$nextTick(function(){t.iscroll||t.bindScroll(),t.iscroll.x<0&&setTimeout(function(){t.iscroll&&t.iscroll.scrollTo(0,0,t.duration)},10)})},collapse:function(){var t=this;this.iscroll&&(this.iscroll.x===-this.itsWidth?this.unbindScroll():(setTimeout(function(){t.iscroll.scrollTo(-t.itsWidth,0,t.duration)}),setTimeout(function(){t.unbindScroll()},this.duration+10)))},unbindScroll:function(){this.iscroll&&(this.iscroll.destroy(),this.iscroll=null,this.wrapperClass.expand=!1,this.wrapperClass.collapse=!0,this.scrollEnable=!1,this.opacity=0,this.$refs.sidebarScroller.setAttribute("style","padding-left:"+this.widthProp))},changeOpacity:function(){this.wrapperClass.expand&&this.iscroll&&(this.opacity=(this.iscroll.x+this.itsWidth)/this.itsWidth*.5,Nt(this.changeOpacity.bind(this)))}}};var Vt=function(t){n("j5d9")},Ft={components:{Sidebar:Object(E.a)(Yt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"sidebarWrapper",staticClass:"sidebar-wrapper",class:t.wrapperClass},[n("div",{ref:"sidebarScroller",staticClass:"sidebar-scroller",style:{"padding-left":t.widthProp}},[n("div",{staticClass:"sidebar-main",style:{width:t.widthProp},on:{scroll:function(t){t.stopPropagation()}}},[t._t("default")],2),t._v(" "),n("div",{ref:"sidebarToggle",staticClass:"touch-toggle",style:{opacity:t.opacity,"padding-left":t.widthProp},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleClick(e)}}})])])},[],!1,Vt,"data-v-5bd0481a",null).exports},computed:g()({},Object(D.c)("appShell/appSidebar",["show","title","user","blocks"]),{sidebarStatus:{get:function(){return this.show},set:function(t){t?this.$emit("show-sidebar"):this.$emit("hide-sidebar")}},enableSidebar:function(){return this.$store.state.appShell.appHeader.show&&this.$store.state.appShell.appHeader.showMenu}}),methods:{close:function(){this.sidebarStatus=!1},closeAndGo:function(t){this.$router.push(t),this.close()}}};var Gt=function(t){n("Zbl+")},Xt=Object(E.a)(Ft,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("sidebar",{attrs:{enable:t.enableSidebar},model:{value:t.sidebarStatus,callback:function(e){t.sidebarStatus=e},expression:"sidebarStatus"}},[n("div",{staticClass:"app-sidebar-content"},[t.title?n("div",{staticClass:"app-sidebar-title",on:{click:function(e){return e.stopPropagation(),t.closeAndGo("/")}}},[n("span",{staticClass:"app-sidebar-title-left-icon"},[t.title.imageLeft?n("img",{attrs:{src:t.title.imageLeft,alt:t.title.altLeft}}):t.title.iconLeft?n("v-icon",{attrs:{color:"white"}},[t._v(t._s(t.title.iconLeft))]):t._e()],1),t._v(" "),n("span",[t._v(t._s(t.title.text))]),t._v(" "),t._t("logo",[n("span",{staticClass:"app-sidebar-title-right-logo"},[t.title.imageRight?n("img",{attrs:{src:t.title.imageRight,alt:t.title.altRight}}):t.title.iconRight?n("v-icon",[t._v(t._s(t.title.iconRight))]):t._e()],1)])],2):t._e(),t._v(" "),t.user?n("div",{staticClass:"app-sidebar-user"},[n("div",{staticClass:"user-avatar"},[n("v-icon",{staticClass:"user-avatar-icon"},[t._v("face")])],1),t._v(" "),n("div",{staticClass:"user-info"},[n("div",{staticClass:"user-name"},[n("v-icon",[t._v("person")]),t._v(t._s(t.user.name))],1),t._v(" "),n("div",{staticClass:"user-location"},[n("v-icon",[t._v("room")]),t._v(t._s(t.user.location))],1),t._v(" "),n("div",{staticClass:"user-email"},[n("v-icon",[t._v("email")]),t._v(t._s(t.user.email))],1)])]):t._e(),t._v(" "),t.blocks?n("div",{staticClass:"app-sidebar-blocks"},[n("ul",t._l(t.blocks,function(e,a){return n("li",{key:a,staticClass:"app-sidebar-block"},[e.sublistTitle?n("div",{staticClass:"sub-list-title"},[t._v(t._s(e.sublistTitle))]):t._e(),t._v(" "),e.list?n("ul",t._l(e.list,function(e){return n("li",{key:e.text,on:{click:function(n){return n.stopPropagation(),t.closeAndGo(e.route)}}},[e.icon||e.image?n("span",{staticClass:"app-sidebar-block-left-icon"},[e.image?n("img",{attrs:{src:e.image,alt:e.alt}}):e.icon?n("v-icon",[t._v(t._s(e.icon))]):t._e()],1):t._e(),t._v(" "),e.text?n("span",{staticClass:"app-sidebar-block-text"},[t._v(t._s(e.text))]):t._e()])}),0):t._e()])}),0)]):t._e()])])},[],!1,Gt,"data-v-8f8898f8",null).exports,Jt={name:"updateToast",props:{text:{type:String,default:"站点发生更新，请手动刷新"}},data:function(){return{show:!1}},mounted:function(){window.addEventListener("sw.update",this.handleUpdate)},beforeDestroy:function(){window.removeEventListener("sw.update",this.handleUpdate)},methods:{handleUpdate:function(t){this.show=!0},handleRefresh:function(){window.location.reload()}}};var Ut=function(t){n("SbDi")},zt={name:"app",components:{UpdateToast:Object(E.a)(Jt,function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"popup"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"update-toast"},[e("span",[this._v(this._s(this.text))]),this._v(" "),e("span",{staticClass:"update-toast-close-btn",on:{click:this.handleRefresh}},[e("i",{staticClass:"iconfont icon-refresh"})])])])},[],!1,Ut,"data-v-3553eff5",null).exports,AppHeader:Rt,AppSidebar:Xt},computed:g()({},Object(D.c)("pageTransition",{pageTransitionType:function(t){return t.type},pageTransitionEffect:function(t){return t.effect}}),Object(D.c)("appShell/appHeader",{appHeaderShow:function(t){return t.show}}),Object(D.c)("appShell/common",{scrollPostionMap:function(t){return t.scrollPostionMap}}),{pageTransitionClass:function(){return"transition-"+this.pageTransitionType},routerViewKey:function(){var t=this.$route,e=t.name,n=t.params,a=R()(n);return a.length?e+a.reduce(function(t,e){return t+n[e]},""):null}}),data:function(){return{keepAlivePages:ot}},methods:g()({},Object(D.b)("appShell/appSidebar",["showSidebar","hideSidebar"]),Object(D.b)("appShell/common",["setPageSwitching","savePageScrollPosition"]),{restoreContainerScrollPosition:function(t,e){t.classList.add("app-view-scroll-enabled"),t.scrollTop=e},restoreBodyScrollPosition:function(t,e){t.classList.remove("app-view-scroll-enabled"),document.body.scrollTop=document.documentElement.scrollTop=e},handleBeforeEnter:function(t){var e=this,n=t.dataset.pageId,a=(this.scrollPostionMap[n]||{}).y,i=void 0===a?0:a;this.setPageSwitching(!0),h.a.nextTick(function(){e.restoreContainerScrollPosition(t,i)})},handleAfterEnter:function(t){var e=t.dataset.pageId,n=(this.scrollPostionMap[e]||{}).y,a=void 0===n?0:n;this.setPageSwitching(!1),this.restoreBodyScrollPosition(t,a)},handleBeforeLeave:function(t){var e=t.dataset.pageId,n=document.body.scrollTop||document.documentElement.scrollTop;this.restoreContainerScrollPosition(t,n),this.savePageScrollPosition({pageId:e,scrollPosition:{y:n}})},handleClickHeaderBack:function(){this.$router.go(-1)},handleClickHeaderMenu:function(){this.showSidebar()},handleHideSidebar:function(){this.hideSidebar()},handleShowSidebar:function(){this.showSidebar()}})};var Kt=function(t){n("gHRC")},Zt=Object(E.a)(zt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",[n("app-header",{staticClass:"app-shell-header",on:{"click-menu":t.handleClickHeaderMenu,"click-back":t.handleClickHeaderBack}}),t._v(" "),n("app-sidebar",{on:{"hide-sidebar":t.handleHideSidebar,"show-sidebar":t.handleShowSidebar}}),t._v(" "),n("transition",{attrs:{name:t.pageTransitionEffect},on:{"before-enter":t.handleBeforeEnter,"after-enter":t.handleAfterEnter,"before-leave":t.handleBeforeLeave}},[n("keep-alive",{attrs:{include:[].concat(t.keepAlivePages)}},[n("router-view",{key:t.routerViewKey,staticClass:"app-view",class:[{"app-view-with-header":t.appHeaderShow},t.pageTransitionClass],attrs:{"data-page-id":t.$route.fullPath}})],1)],1),t._v(" "),n("update-toast")],1)],1)},[],!1,Kt,null,null).exports,Qt=n("3EgV"),te=n.n(Qt);h.a.use(S.a),h.a.use(te.a),h.a.config.productionTip=!1;var ee={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#ffca2b",failedColor:"#ff0000"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,t.$nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}};var ne=function(t){n("FP9L")},ae=Object(E.a)(ee,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})},[],!1,ne,"data-v-5fa349a2",null).exports,ie=n("p5k0"),re=n.n(ie),se=n("XGXE"),oe=n.n(se);n("MU8w"),n("CJsk");re.a.shim(),oe.a.shim();var ce=h.a.prototype.$loading=new h.a(ae).$mount(),le=function(){var t=ct(),e=Ot();return{App:h.a.extend(g()({router:t,store:e},Zt)),router:t,store:e}}(),ue=le.App,he=le.router,de=le.store,pe=b.a.build,fe=pe.ssr,ve=pe.cssExtract,me=b.a.middleware,we=void 0===me?{}:me,be=b.a.skeleton,_e=be.enable,ge=be.asyncCSS,ye=void 0;window.__INITIAL_STATE__&&de.replaceState(window.__INITIAL_STATE__),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),document.body.appendChild(ce.$el),h.a.mixin({beforeRouteUpdate:function(){var t=u()(c.a.mark(function t(e,n,a){var i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(i=this.$options.asyncData)?(ce.start(),i.call(this,{store:this.$store,route:e}).then(function(){ce.finish(),a()}).catch(a)):a();case 2:case"end":return t.stop()}},t,this)}));return function(e,n,a){return t.apply(this,arguments)}}()});var Se=!0;if(function(){var t=this;he.beforeEach(function(){var e=u()(c.a.mark(function e(n,a,i){var r,o,l,u,h,m,w;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(Se||n.path!==a.path){t.next=2;break}return t.abrupt("return",i());case 2:return Se=!1,r=he.getMatchedComponents(n),o=[].concat(s()(we.all||[]),s()(we.client||[]),s()(r.filter(function(t){var e=t.middleware;return!!e}).reduce(function(t,e){var n=e.middleware;return t.concat(n)},[]))),t.next=7,p(o);case 7:if(l=t.sent,!(u=o.find(function(t){return"function"!=typeof l[t]}))){t.next=11;break}throw new Error("Unknown middleware "+u);case 11:return h=!1,m=f({to:n,from:a,store:de,next:function(t){if(ce.finish&&ce.finish(),!h){if(h=!0,t.external)return t.query=Object(d.stringify)(t.query),t.path=t.path+(t.query?"?"+t.query:""),window.location.replace(t.path),i();i(t)}}},ye),w=o.map(function(t){return l[t]}),t.next=17,v(w,m);case 17:h||i();case 18:case"end":return t.stop()}},e,t)}));return function(t,n,a){return e.apply(this,arguments)}}())}(),!document.body.hasAttribute("empty-appshell")&&fe)ye=new ue,he.onReady(function(){xe(),ye.$mount("#app")});else{var ke=_e&&ge&&ve;window.mountLavas=function(){setTimeout(function(){var t=document.querySelector("#app");t&&(t.innerHTML=""),ye.$mount("#app")},0)},xe(),ye=new ue,(fe||!ke||ke&&window.STYLE_READY)&&window.mountLavas()}function xe(){var t=this;he.beforeResolve(function(e,n,a){var r=he.getMatchedComponents(e),s=he.getMatchedComponents(n),o=!1,l=r.filter(function(t,e){return o||(o=s[e]!==t)});if(!l.length)return a();ce.start(),i.a.all(l.filter(function(t){return t.asyncData&&(!t.asyncDataFetched||!e.meta.keepAlive)}).map(function(){var n=u()(c.a.mark(function n(a){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.asyncData({store:de,route:e});case 2:a.asyncDataFetched=!0;case 3:case"end":return t.stop()}},n,t)}));return function(t){return n.apply(this,arguments)}}())).then(function(){ce.finish(),a()}).catch(a)})}},pU7c:function(t,e){},qSrE:function(t,e){}},[0]);
//# sourceMappingURL=index.b3ca61a4.js.map