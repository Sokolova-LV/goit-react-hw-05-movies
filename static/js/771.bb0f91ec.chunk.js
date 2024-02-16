"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[771],{771:function(n,t,e){e.r(t),e.d(t,{default:function(){return F}});var r,i,o,a,c,s,p,u,d=e(861),x=e(439),f=e(687),h=e.n(f),l=e(791),m=e(689),g=e(86),v=e(168),w=e(686),b=w.Z.div(r||(r=(0,v.Z)(["\n    padding: 0 50px;\n"]))),Z=w.Z.img(i||(i=(0,v.Z)(["\n    display: block;\n    margin: auto;\n    width: 280px;\n    height: 402px;\n\n    @media (min-width: 768px) {\n        width: 336px;\n        height: 455px;\n    };\n\n    @media (min-width: 1280px) {\n        width: 395px;\n        height: 574px;\n    };\n"]))),k=w.Z.h1(o||(o=(0,v.Z)(["\n    display: block;\n    margin: 20px auto;\n    font-family: 'Roboto';\n    font-size: 18px;\n    font-weight: 700;\n    line-height: normal;\n    font-style: normal;\n    text-transform: uppercase;\n    color: #000;\n\n    @media (min-width: 768px) {\n        font-size: 20px;\n    };\n\n    @media (min-width: 1280px) {\n        font-size: 30px;\n    };\n"]))),y=w.Z.p(a||(a=(0,v.Z)(["\n    margin: 20px 0;\n    max-width: 280px;\n    text-align: justify;\n    font-family: 'Roboto';\n    font-size: 12px;\n    font-weight: 400;\n    line-height: normal;\n    font-style: normal;\n    color: #000;\n\n    @media (min-width: 768px) {\n        max-width: 720px;\n        font-size: 16px;\n    };\n\n    @media (min-width: 1280px) {\n        max-width: 1240px;\n        font-size: 28px;\n    };\n"]))),j=w.Z.h3(c||(c=(0,v.Z)(["\n    width: 280px;\n    margin: 20px 0;\n    font-family: 'Roboto';\n    font-size: 14px;\n    font-weight: 700;\n    line-height: normal;\n    font-style: normal;\n    text-transform: uppercase;\n    color: red;\n\n    @media (min-width: 768px) {\n        width: 336px;\n        font-size: 16px;\n    };\n\n    @media (min-width: 1280px) {\n        width: 395px;\n        font-size: 28px;\n    };\n"]))),z=e(184),_=function(n){var t=n.movie,e=t.title,r=t.genres,i=t.release_date,o=t.overview,a=t.vote_average,c=t.poster_path,s=new Date(i).getFullYear(),p=(a/10*100).toFixed(0),u="https://image.tmdb.org/t/p/w300".concat(c);return(0,z.jsxs)("div",{children:[u&&(0,z.jsx)(Z,{src:u,alt:e}),(0,z.jsxs)(b,{children:[(0,z.jsxs)(k,{children:[e,"(",s,")"]}),p&&(0,z.jsxs)(y,{children:["User rate: ",p,"%"]}),(0,z.jsx)(j,{children:"Overview"}),(0,z.jsx)(y,{children:o}),(0,z.jsx)(j,{children:"Genres"}),r&&r.length>0?(0,z.jsx)(y,{children:r[0]&&r[0].name}):(0,z.jsx)("p",{children:"There is no information about genres"})]})]})},R=e(87),U=(0,w.Z)(R.rU)(s||(s=(0,v.Z)(["\n    text-decoration: none;\n"]))),S=w.Z.button(p||(p=(0,v.Z)(["\n    display: block;\n    margin: 16px auto;\n    background: #fff;\n    color: red;\n    border: none;\n    border-radius: 5px;\n    padding: 5px 10px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n    transition: background 0.3s, transform 0.2s;\n\n    &:hover {\n        background: red;\n        color: #fff;\n    };\n\n    @media (min-width: 768px) {\n        padding: 10px 20px;\n    };\n"]))),C=w.Z.h1(u||(u=(0,v.Z)(["\n    text-align: center;\n    margin-top: 16px;\n    font-family: 'Roboto';\n    font-size: 40px;\n    font-weight: 700;\n    line-height: normal;\n    font-style: normal;\n    text-transform: uppercase;\n    color: #000;\n"]))),F=function(){var n,t,e=(0,l.useState)({}),r=(0,x.Z)(e,2),i=r[0],o=r[1],a=(0,m.UO)().movieId,c=(0,m.TH)(),s=(0,l.useRef)(null!==(n=null===(t=c.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/");return(0,l.useEffect)((function(){var n=function(){var n=(0,d.Z)(h().mark((function n(t){var e;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,g.$5)(t);case 3:e=n.sent,o(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}();n(a)}),[a]),(0,z.jsxs)("div",{children:[(0,z.jsx)(U,{to:s.current,children:(0,z.jsx)(S,{type:"button",children:"Go back"})}),(0,z.jsx)(C,{children:"Movie info"}),(0,z.jsx)(_,{movie:i}),(0,z.jsx)(l.Suspense,{fallback:(0,z.jsx)("div",{children:"Loading..."}),children:(0,z.jsx)(m.j3,{})})]})}},86:function(n,t,e){e.d(t,{$5:function(){return d},SU:function(){return p},bI:function(){return u}});var r=e(861),i=e(687),o=e.n(i),a=e(243),c="4a3136bad29614034a217fa6beb2440a",s="https://api.themoviedb.org/3",p=function(){var n=(0,r.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(s,"/trending/movie/week?api_key=").concat(c));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(s,"/search/movie?api_key=").concat(c,"&query=").concat(t,"&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(s,"/movie/").concat(t,"?api_key=").concat(c));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=771.bb0f91ec.chunk.js.map