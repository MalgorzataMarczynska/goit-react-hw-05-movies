"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[556],{131:function(e,n,t){t.d(n,{e:function(){return o}});t(791);var r=t(87),i=t(689),s="MovieList_list__yjDCC",c="MovieList_listItem__vOVoz",a=t(184),o=function(e){var n=e.moviesArr,t=(0,i.TH)(),o=n.map((function(e){return e.release_date})).join("").slice(0,4);return(0,a.jsx)("ul",{className:s,children:n.map((function(e){return(0,a.jsx)("li",{className:c,children:(0,a.jsx)(r.rU,{to:"/movies/".concat(e.id),state:{from:t},children:(0,a.jsxs)("p",{children:[e.title," (",o,")"]})})},e.id)}))})}},556:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(861),i=t(439),s=t(757),c=t.n(s),a=t(791),o=t(691),u="Home_section__uZuiO",l="Home_title__L087v",f=t(131),v="bf9c4d58b7779ca7f547438ec065a7d2",h="https://api.themoviedb.org/3/trending/",p="https://api.themoviedb.org/3/genre/movie/list?api_key=",d=function(){var e=(0,r.Z)(c().mark((function e(){var n,t,r,i=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:1,e.next=3,fetch("".concat(h,"movie/week?api_key=").concat(v,"&page=").concat(n));case 3:return e.next=5,e.sent.json();case 5:return t=e.sent,e.next=8,fetch("".concat(p).concat(v));case 8:return e.next=10,e.sent.json();case 10:return r=e.sent,e.abrupt("return",{movies:t,genreIds:r});case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=t(184),x=function(){var e=(0,a.useState)([]),n=(0,i.Z)(e,2),t=n[0],s=n[1],v=(0,a.useState)(!1),h=(0,i.Z)(v,2),p=h[0],x=h[1],_=(0,a.useState)(null),j=(0,i.Z)(_,2),w=j[0],g=j[1];return(0,a.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.prev=1,e.next=4,d(1);case 4:t=e.sent,r=t.movies.results,s(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),g(e.t0);case 12:return e.prev=12,x(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(n){return e.apply(this,arguments)}}();e()}),[]),(0,m.jsx)("main",{children:(0,m.jsxs)("section",{className:u,children:[(0,m.jsx)("h1",{className:l,children:"Trending today"}),w&&(0,m.jsxs)("p",{children:["Sorry, something went really wrong: ",w.message]}),p&&(0,m.jsx)(o.Rf,{color:"#3f51b5",width:"100",visible:!0,ariaLabel:"falling-lines-loading"}),(0,m.jsx)(f.e,{moviesArr:t})]})})}},861:function(e,n,t){function r(e,n,t,r,i,s,c){try{var a=e[s](c),o=a.value}catch(u){return void t(u)}a.done?n(o):Promise.resolve(o).then(r,i)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(i,s){var c=e.apply(n,t);function a(e){r(c,i,s,a,o,"next",e)}function o(e){r(c,i,s,a,o,"throw",e)}a(void 0)}))}}t.d(n,{Z:function(){return i}})}}]);
//# sourceMappingURL=556.402f4396.chunk.js.map