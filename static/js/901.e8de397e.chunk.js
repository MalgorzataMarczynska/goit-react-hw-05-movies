"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[901],{901:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r=t(861),i=t(439),s=t(757),a=t.n(s),c=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3/","movie/").concat(n,"?api_key=").concat("bf9c4d58b7779ca7f547438ec065a7d2"));case 2:return e.next=4,e.sent.json();case 4:return t=e.sent,e.abrupt("return",{movie:t});case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=t(791),l=t(691),u=t(87),h=t(689),d="MovieDetails_section__CCh0q",v="MovieDetails_goBackSec__OPRMd",f="MovieDetails_goBack__C8OKE",m="MovieDetails_mainDescription__r0vEm",p="MovieDetails_poster__yO7gD",_="MovieDetails_title__cUGs9",x="MovieDetails_additional__+f3rh",j="MovieDetails_genres__Pnmgt",b="MovieDetails_linkItem__QXhuP",g=t(184),w=function(){var e=(0,o.useState)({}),n=(0,i.Z)(e,2),t=n[0],s=n[1],w=(0,o.useState)(!1),k=(0,i.Z)(w,2),D=k[0],M=k[1],N=(0,o.useState)(null),y=(0,i.Z)(N,2),C=y[0],S=y[1],Z=(0,h.UO)().movieId,O=(0,h.TH)(),P=(0,h.s0)();(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.prev=1,t=Number(Z),e.next=5,c(t);case 5:r=e.sent,i=r.movie,s(i),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),S(e.t0);case 13:return e.prev=13,M(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(n){return e.apply(this,arguments)}}();e()}),[Z]);var U=t.release_date,R="".concat(U).substring(0,4),E=t.genres,G=null===E||void 0===E?void 0:E.map((function(e){return e.name})).join(" "),B=Math.round(10*t.vote_average);return(0,g.jsxs)("section",{className:d,children:[(0,g.jsx)("div",{className:v,children:(0,g.jsx)("button",{type:"button",className:f,onClick:function(){return P(-1)},children:"Go back"})}),C&&(0,g.jsxs)("p",{children:["Sorry, something went really wrong: ",C.message]}),D&&(0,g.jsx)(l.Rf,{color:"#3f51b5",width:"100",visible:!0,ariaLabel:"falling-lines-loading"}),(0,g.jsxs)("div",{className:m,children:[(0,g.jsx)("img",{className:p,src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title}),(0,g.jsxs)("div",{children:[(0,g.jsxs)("h2",{className:_,children:[t.title," (",R,")"]}),(0,g.jsxs)("p",{children:[(0,g.jsx)("b",{children:"User Score:"})," ",B," %"]}),(0,g.jsx)("h3",{children:"Overview"}),(0,g.jsx)("p",{children:t.overview}),(0,g.jsx)("h4",{children:"Genres"}),(null===E||void 0===E?void 0:E.length)>0?(0,g.jsxs)("p",{className:j,children:[G," "]}):(0,g.jsx)("p",{children:"We have no information about it"})]})]}),(0,g.jsxs)("div",{className:x,children:[(0,g.jsx)("h5",{children:"Additional information"}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:(0,g.jsx)(u.rU,{to:"cast",className:b,state:{from:O},children:"Cast"})}),(0,g.jsx)("li",{children:(0,g.jsx)(u.rU,{to:"reviews",className:b,state:{from:O},children:"Rewiews"})})]}),(0,g.jsx)(o.Suspense,{fallback:(0,g.jsx)(l.Rf,{color:"#3f51b5",width:"100",visible:!0,ariaLabel:"falling-lines-loading"}),children:(0,g.jsx)(h.j3,{})})]})]})}},861:function(e,n,t){function r(e,n,t,r,i,s,a){try{var c=e[s](a),o=c.value}catch(l){return void t(l)}c.done?n(o):Promise.resolve(o).then(r,i)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(i,s){var a=e.apply(n,t);function c(e){r(a,i,s,c,o,"next",e)}function o(e){r(a,i,s,c,o,"throw",e)}c(void 0)}))}}t.d(n,{Z:function(){return i}})}}]);
//# sourceMappingURL=901.e8de397e.chunk.js.map