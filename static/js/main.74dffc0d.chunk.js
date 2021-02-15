(this["webpackJsonpultimate-starwars-battle"]=this["webpackJsonpultimate-starwars-battle"]||[]).push([[0],{85:function(e,n,t){},88:function(e,n,t){"use strict";t.r(n);var r,a,c,i,s,o,d,l,j,p,m,b,h,u,O,x,g,f,w,v,y,k,I,N,E,T,S,P,M=t(0),F=t(18),_=t(8),C=t(10),L=t(14),z=t.p+"static/media/starwarssong.1852ca55.mp3",R=t(4),W=t(5),A=t.p+"static/media/deathstar.3125cba8.jpg",B=Object(W.a)(L.a)(r||(r=Object(R.a)(["\n  && {\n    background-color: #000;\n    border: 1px solid #cbcbcb;\n    border-radius: 5px;\n    color: #cbcbcb;\n    padding: 0.5rem;\n    text-decoration: none;\n    margin: 2rem;\n    align-self: flex-end;\n\n    :hover{\n      /* background-color: rgba(48,48,51,0.93); */\n      border-color: #feda4a;\n    }\n  }\n"]))),H=W.a.div(a||(a=Object(R.a)(["\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  height: 100%;\n  color: #feda4a;\n  font-family: 'Pathway Gothic One', sans-serif;\n  font-size: 500%;\n  font-weight: 600;\n  letter-spacing: 6px;\n  line-height: 150%;\n  perspective: 400px;\n  text-align: center;\n\n  &::before {\n    content: '';\n    position: absolute;\n    pointer-events: none;\n    width: 100%;\n    min-height: 60vh;\n    top: -25px;\n    background-image: linear-gradient(0deg, transparent, black 75%);\n    z-index: 1;\n  }\n"]))),G=W.a.div(c||(c=Object(R.a)(["\n  position: relative;\n  top: 9999px;\n  transform-origin: 50% 100%;\n  animation: crawl 50s linear;\n\n  && h1 {\n    font-size: 90%;\n    text-align: center;\n    margin: 0 0 100px\n  }\n  @keyframes crawl {\n    0% {\n      top: 200px;\n      transform: rotateX(20deg)  translateZ(0);\n    }\n    100% { \n      top: -6000px;\n      transform: rotateX(25deg) translateZ(-2500px);\n    }\n  }\n"]))),D=W.a.div(i||(i=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n"])),A),J="[intro] SKIP_INTRO",U="[intro] SET_MUTED",X=t(48),Y=t.n(X),Z=t(47),K=t.n(Z),q=t(49),Q=t.n(q),V=t(1),$=function(){var e=Object(M.useRef)(),n=Object(_.c)((function(e){var n=e.intro;return[n.muted,n.skipIntro]})),t=Object(C.a)(n,2),r=t[0],a=t[1],c=Object(_.b)();Object(M.useEffect)((function(){e.current.volume=1,e.current.muted=r,!r&&e.current.play(),setTimeout((function(){Object(L.c)("/card-menu")}),2e4)}),[r]);var i=function(){c(function(e){return{type:U,muted:e}}(!r))};return Object(V.jsx)(V.Fragment,{children:!a&&Object(V.jsxs)(D,{children:[r&&Object(V.jsx)(K.a,{style:{color:"white",margin:"2rem"},onClick:i}),!r&&Object(V.jsx)(Y.a,{style:{color:"white",margin:"2rem"},onClick:i}),Object(V.jsx)(H,{children:Object(V.jsxs)(G,{children:[Object(V.jsx)("audio",{ref:e,src:z}),Object(V.jsx)("h1",{children:"Ultimate StarWars Battle"}),Object(V.jsx)("p",{children:" Build an application to select random people or starships and render their details to see who would win based on a common attribute."}),Object(V.jsx)("p",{children:"A person with greater mass wins, a starship with more crew wins."}),Object(V.jsx)("p",{children:"Once two cards are displayed the app should declare one of the cards a winner based on the higher common attribute."}),Object(V.jsx)("p",{children:"Being Creative"})]})}),Object(V.jsxs)(B,{to:"/card-menu",children:["Skip Intro ",Object(V.jsx)(Q.a,{})]})]})})},ee=t(27),ne=t.n(ee),te=t(50),re=t(6),ae="[card] SET_OPPONENT",ce="[card] FETCH_OPPONENT",ie="[card-people] SET_FIGHTER",se="[card-starship] SET_STARSHIPS",oe=t(51),de=t.n(oe),le=function(e,n){return{type:ae,who:e,list:n}},je=t(100),pe=W.a.span(s||(s=Object(R.a)(["\n  text-align: center;\n  font-size: 32px;\n  font-weight: bold;\n  opacity: 0.7;\n"]))),me=W.a.div(o||(o=Object(R.a)(["\n  margin-top: 20px;\n"]))),be=Object(W.a)(je.a)(d||(d=Object(R.a)(["\n  width: 100%;\n  font-weight: 600;\n  text-align: center;\n  color: #135175;\n  background-color: rgba(255,255,255,0.85);\n  position: relative;\n\n  @media only screen and (min-width: 768px) {\n    /*  */\n  }\n  @media only screen and (min-width: 992px) {\n    width: 150px;\n    height: 120px;\n  }\n\n"]))),he=W.a.div(l||(l=Object(R.a)(["\n  height: 100%;\n  display: grid;\n  margin: 1rem;\n  max-width: 1280px;\n  grid-template-columns: repeat(auto-fill, minmax(186px, 1fr)) ; grid-template-rows: auto;\n  grid-gap: 10px;\n\n  @media only screen and (min-width: 768px) {\n    grid-template-columns: repeat(8, 1fr);\n    grid-template-rows: repeat(8, 1fr);\n  }\n  @media only screen and (min-width: 992px) {\n    grid-template-rows: repeat(12, 1fr);\n    grid-template-columns: repeat(auto-fill, minmax(150px, 260px));\n  }\n\n"]))),ue=t(101),Oe=t(102),xe=t.p+"static/media/people.e2b3ded2.jpg",ge=t.p+"static/media/starships.72f204f2.webp",fe=t(105),we=Object(W.a)(fe.a)(j||(j=Object(R.a)(["\n  z-index: 1;\n"]))),ve=Object(W.a)(L.a)(p||(p=Object(R.a)(["\n  text-decoration: none;\n  color: #fff;\n  background-color: #007bff;\n  padding: 10px;\n  padding-top: 7px;\n  border-radius: 4px;\n\n  &:hover {\n    text-decoration: none;\n    color: #fff;\n    background-color: #0069d9;\n  }\n"]))),ye=W.a.div(m||(m=Object(R.a)(["\n  grid-column: 1/-1;\n  grid-row: 4/-1;\n  justify-self: center;\n  align-self: end;\n\n  @media only screen and (min-width: 768px) {\n    grid-column: 3/7;\n    grid-row: 3/7;\n  }\n  @media only screen and (min-width: 992px) {\n    grid-row: 12/-1;\n    grid-column: 1/6;\n    margin-bottom: 1rem;\n  }\n\n"]))),ke="[menu] DISPLAY_NEW_OPPONENTS",Ie="[menu] SET_OPPONENTS_TO_FIGHT",Ne=function(){var e=Object(_.b)(),n=Object(_.c)((function(e){var n=e.card;return[n.people,n.starships]})),t=Object(C.a)(n,2),r=t[0],a=t[1],c=function(){var n,t,c,i=Math.round(Math.random()),s=Math.round(Math.random());if(i===s&&0===i){var o=r.list.sort((function(){return Math.random()-.5}));n=o[0],t=o[1]}else if(i===s&&1===i){var d=a.list.sort((function(){return Math.random()-.5}));n=d[0],t=d[1]}else{var l=r.list.sort((function(){return Math.random()-.5})),j=a.list.sort((function(){return Math.random()-.5}));0===i?(n=l[0],t=j[0]):(t=l[0],n=j[0])}return console.log(n,t,"you there?"),e((c={first:n,second:t},Object(re.a)({type:Ie},c)))};return Object(V.jsxs)(ye,{children:[Object(V.jsx)(we,{onClick:function(){c(),e({type:ke,displayOpponents:!0}),Object(L.c)("/fight")},children:"Pick Opponents"}),Object(V.jsx)(ve,{to:"/card-menu",children:"Card Menu"}),Object(V.jsx)(ve,{to:"/",children:"Back to Intro"})]})},Ee=function(){var e=Object(_.b)(),n=Object(_.c)((function(e){var n=e.card,t=e.menu;return[n.people,n.starships,t.displayOpponents]})),t=Object(C.a)(n,3),r=t[0],a=t[1];t[2];return Object(M.useEffect)((function(){e((function(e){try{["people","starships"].forEach(function(){var n=Object(te.a)(ne.a.mark((function n(t){var r;return ne.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:ce,who:t}),n.next=3,de()("https://swapi.dev/api/".concat(t,"/"));case 3:r=n.sent,e(le(t,r.data.results)),console.log(r);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}catch(n){console.log("Error:",n)}}))}),[]),Object(V.jsx)(V.Fragment,{children:Object(V.jsxs)(he,{children:[r&&r.list.map((function(e,n){var t=e.name;e.mass;return Object(V.jsxs)(be,{children:[Object(V.jsx)(ue.a,{src:xe}),Object(V.jsx)(me,{children:Object(V.jsx)(Oe.a,{tag:"h6",children:t})})]},n)})),r&&r.list.map((function(e,n){var t=e.name;e.crew;return Object(V.jsxs)(be,{children:[Object(V.jsx)(ue.a,{src:ge}),Object(V.jsx)(me,{children:Object(V.jsx)(Oe.a,{tag:"h6",children:t})})]},n)})),a.isLoading&&Object(V.jsx)(pe,{children:"Loading..."}),Object(V.jsx)(Ne,{})]})})},Te=Object(W.a)(L.b)(b||(b=Object(R.a)(["\n  height: 100%;\n"]))),Se=W.a.div(h||(h=Object(R.a)(["\n  height: 100%;\n\n"]))),Pe=t(103),Me=t(104),Fe=W.a.div(u||(u=Object(R.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin: 8px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid #135175;\n"]))),_e=Object(W.a)(fe.a)(O||(O=Object(R.a)(["\n  background-color: #fff;\n  color: #135175;\n  border-color: #135175;\n  margin-left: 20px;\n\n  &:hover {\n    background-color: rgba(203,203,203,0.38);\n    color: #1A6FA1;\n    border-color: #135175;\n  }\n"]))),Ce=(Object(W.a)(Pe.a)(x||(x=Object(R.a)(["\n justify-self: center;\n"]))),Object(W.a)(Me.a)(g||(g=Object(R.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 5px;\n  justify-items: start;\n  overflow-x: auto;\n"])))),Le=Object(W.a)(Pe.a)(f||(f=Object(R.a)(["\n  justify-self: end;\n"]))),ze=Object(W.a)(Oe.a)(w||(w=Object(R.a)(["\n  /* text-align: center; */\n  /* display: flex; */\n  margin: 5px;\n  padding-left: 16px;\n"]))),Re=(Object(W.a)(je.a)(v||(v=Object(R.a)(["\n  width: 400px;\n  height: 40%;\n"]))),W.a.div(y||(y=Object(R.a)(["\n  /* opacity: 0.8; */\n  margin-bottom: 1rem;\n  font-size: 40px;\n  font-weight: bold;\n  text-align: center;\n  color: #000;\n  text-shadow: 2px 2px 5px red;\n\n"])))),We=Object(W.a)(je.a)(k||(k=Object(R.a)(["\n  color: #135175;\n"]))),Ae=W.a.div(I||(I=Object(R.a)(["\n  grid-row: 1/-1;\n  grid-column: 1/-1;\n  margin: 1rem;\n\n  @media only screen and (min-width: 768px) {\n    grid-row: 3/7;\n    grid-column: 3/7\n  }\n  @media only screen and (min-width: 992px) {\n    grid-row: 2/10;\n    grid-column: 2/5;\n  }\n"]))),Be=Object(W.a)(je.a)(N||(N=Object(R.a)(["\n  color: red;\n  box-shadow: 5px 5px 23px 6px rgba(155,14,14,0.69);\n  text-shadow: 2px 2px 5px red;\n"]))),He=W.a.div(E||(E=Object(R.a)(["\n  justify-items: center;\n  height: 100%;\n  grid-column: 1/-1;\n  grid-row: 1/-1;\n  display: grid;\n  grid-template-rows: repeat(4, 1fr);\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 10px;\n\n  @media only screen and (min-width: 768px) {\n    grid-template-columns: repeat(8, 1fr);\n    grid-template-rows: repeat(8, 1fr);\n  }\n  @media only screen and (min-width: 992px) {\n    grid-template-columns: repeat(auto-fill, minmax(150px, 260px));\n    grid-template-rows: repeat(12, 1fr);\n  }\n"]))),Ge=function(){var e=Object(_.c)((function(e){var n=e.menu;return[n.opponents.first,n.opponents.second]})),n=Object(C.a)(e,2),t=n[0],r=n[1];return Object(V.jsxs)(He,{children:[!t&&Object(V.jsx)("h1",{children:"You have to pick a fight first"}),t&&Object(V.jsxs)(Ae,{children:[Object(V.jsx)(Re,{children:"Fight !"}),Object(V.jsx)(We,{children:Object(V.jsx)(Ce,{children:Object(V.jsx)(Oe.a,{tag:"h6",children:t.name})})}),Object(V.jsx)(We,{children:Object(V.jsx)(Ce,{children:Object(V.jsx)(Oe.a,{tag:"h6",children:r.name})})}),Object(V.jsx)(Be,{children:Object(V.jsx)(Ce,{children:Object(V.jsxs)(Oe.a,{tag:"h6",children:["The WINER is... ",function(){var e;if(t.mass&&r.mass)e=parseInt(t.mass)>parseInt(r.mass)?t.name:r.name;else if(t.mass&&r.crew)e=parseInt(t.mass)>parseInt(r.crew)?t.name:r.name;else if(t.crew&&r.mass)e=parseInt(t.crew)>parseInt(r.mass)?t.name:r.name;else{if(!t.crew||!r.crew)return"Tie Match";e=parseInt(t.crew)>parseInt(r.crew)?t.name:r.name}return e}()," !"]})})})]}),Object(V.jsx)(Ne,{})]})},De=Object(W.a)(je.a)(T||(T=Object(R.a)(["\n  grid-column: 1/-1;\n  grid-row: 3/4;\n\n  @media only screen and (min-width: 768px) {\n    grid-column: 3/-1;\n    grid-row: 1/auto;\n  }\n  @media only screen and (min-width: 992px) {\n    grid-column: 3/-1;\n    grid-row: 1/auto;\n  }\n"]))),Je=function(){var e=Object(_.b)(),n=Object(_.c)((function(e){var n=e.card;return[n.starships,n.starship.first,n.starship.second]})),t=Object(C.a)(n,3),r=t[0],a=t[1],c=t[2];return Object(V.jsxs)(De,{children:[Object(V.jsx)(ue.a,{top:!0,alt:"starships img",src:ge}),Object(V.jsxs)(Fe,{children:[!a&&Object(V.jsx)(ze,{tag:"h5",children:"Starships"}),a&&Object(V.jsx)(ze,{tag:"h5",children:+a.crew>parseInt(c.crew)?"".concat(a.name," is a Winner !"):"".concat(c.name," is a Winner!")}),Object(V.jsx)(_e,{onClick:function(){var n,t=r.list.sort((function(){return Math.random()-.5})),c=Object(C.a)(t,2),i=c[0],s=c[1];e((n=a?{}:{first:i,second:s},Object(re.a)({type:se},n)))},children:"Shuffle Starships"})]}),Object(V.jsxs)(Ce,{children:[a&&Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(Pe.a,{tag:"h6",className:"mb-2 text-muted",children:a.name}),Object(V.jsx)(Le,{tag:"h6",className:"mb-2 text-muted",children:a.crew}),Object(V.jsx)(Pe.a,{tag:"h6",className:"mb-2 text-muted",children:c.name}),Object(V.jsx)(Le,{tag:"h6",className:"mb-2 text-muted",children:c.crew})]}),!a&&r.list.map((function(e){var n=e.name,t=e.crew;return Object(V.jsxs)(M.Fragment,{children:[Object(V.jsx)(Pe.a,{tag:"h6",className:"mb-2 text-muted",children:n}),Object(V.jsx)(Le,{tag:"h6",className:"mb-2 text-muted",children:t})]},n)}))]})]})},Ue=Object(W.a)(je.a)(S||(S=Object(R.a)(["\n  grid-column: 1/-1;\n  grid-row: 1/2;\n\n  @media only screen and (min-width: 768px) {\n    grid-column: 1/3;\n    grid-row: 1/auto;\n  }\n  @media only screen and (min-width: 992px) {\n    grid-column: 1/3;\n    grid-row: 1/auto;\n  }\n"]))),Xe=function(){var e=Object(_.b)(),n=Object(_.c)((function(e){var n=e.card;return[n.people,n.fighter.first,n.fighter.second]})),t=Object(C.a)(n,3),r=t[0],a=t[1],c=t[2];return Object(V.jsxs)(Ue,{children:[Object(V.jsx)(ue.a,{top:!0,alt:"people img",src:xe}),Object(V.jsxs)(Fe,{children:[a&&Object(V.jsx)(ze,{tag:"h5",children:+a.mass>parseInt(c.mass)?"".concat(a.name," is a Winner !"):"".concat(c.name," is a Winner!")}),!a&&Object(V.jsx)(ze,{tag:"h5",children:"Humans"}),Object(V.jsx)(_e,{onClick:function(){var n,t=r.list.sort((function(){return Math.random()-.5})),c=Object(C.a)(t,2),i=c[0],s=c[1];e((n=a?{}:{first:i,second:s},Object(re.a)({type:ie},n)))},children:"Shuffle Fighters"})]}),Object(V.jsxs)(Ce,{children:[a&&Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(Pe.a,{tag:"h6",className:"mb-2 text-muted",children:a.name}),Object(V.jsx)(Le,{tag:"h6",className:"mb-2 text-muted",children:a.mass}),Object(V.jsx)(Pe.a,{tag:"h6",className:"mb-2 text-muted",children:c.name}),Object(V.jsx)(Le,{tag:"h6",className:"mb-2 text-muted",children:c.mass})]}),!a&&r.list.map((function(e){var n=e.name,t=e.mass;return Object(V.jsxs)(M.Fragment,{children:[Object(V.jsx)(Pe.a,{tag:"h6",className:"mb-2 text-muted",children:n}),Object(V.jsx)(Le,{tag:"h6",className:"mb-2 text-muted",children:t})]},n)}))]})]})},Ye=W.a.div(P||(P=Object(R.a)(["\n  display: grid;\n  height: 100%;\n  margin: 1rem;\n  margin-left: 8rem;\n  max-width: 1280px;\n  grid-template-columns: repeat(auto-fill, minmax(186px, 1fr)) ; grid-template-rows: auto;\n  grid-gap: 10px;\n\n  @media only screen and (min-width: 768px) {\n    grid-template-columns: repeat(8, 1fr);\n    grid-template-rows: repeat(8, 1fr);\n  }\n  @media only screen and (min-width: 992px) {\n    grid-template-rows: repeat(12, 1fr);\n    grid-template-columns: repeat(auto-fill, minmax(150px, 260px));\n  }\n\n"]))),Ze=function(){return Object(V.jsxs)(Ye,{children:[Object(V.jsx)(Xe,{}),Object(V.jsx)(Je,{}),Object(V.jsx)(Ne,{})]})},Ke=function(){Object(_.c)((function(e){return e.intro.skipIntro}));return Object(V.jsx)(Se,{children:Object(V.jsxs)(Te,{children:[Object(V.jsx)($,{path:"/"}),Object(V.jsx)(Ee,{path:"card-menu"}),Object(V.jsx)(Ge,{path:"fight"}),Object(V.jsx)(Ze,{path:"fight-first-version"})]})})},qe=(t(85),t(15)),Qe=t(52),Ve=t(21),$e={people:{list:[],isLoading:!1},starships:{list:[],isLoading:!1},fighter:{},starship:{}},en=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case se:return Object(re.a)(Object(re.a)({},e),{},{starship:{first:n.first,second:n.second}});case ie:return Object(re.a)(Object(re.a)({},e),{},{fighter:{first:n.first,second:n.second}});case ce:return Object(re.a)(Object(re.a)({},e),{},Object(Ve.a)({},n.who,{list:[],isLoading:!0}));case ae:return Object(re.a)(Object(re.a)({},e),{},Object(Ve.a)({},n.who,{list:n.list,isLoading:!1}));default:return e}},nn={skipIntro:!1,muted:!0},tn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case U:return Object(re.a)(Object(re.a)({},e),{},{muted:n.muted});case J:return Object(re.a)(Object(re.a)({},e),{},{skipIntro:n.skipIntro});default:return e}},rn={displayOpponents:!1,opponents:{}},an=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Ie:return Object(re.a)(Object(re.a)({},e),{},{opponents:{first:n.first,second:n.second}});case ke:return Object(re.a)(Object(re.a)({},e),{},{displayOpponents:n.displayOpponents});default:return e}},cn=function(e){return Object(qe.d)(Object(re.a)({intro:tn,card:en,menu:an},e))};qe.a.REPLACE="@@redux/INIT";var sn=(0,qe.e)(Object(qe.b)(Qe.a)),on=Object(qe.f)(cn(),sn);on.asyncReducers={};var dn=on,ln=(t(86),document.getElementById("app")),jn=Object(V.jsxs)(_.a,{store:dn,children:[Object(V.jsx)(Ke,{})," "]});Object(F.render)(jn,ln)}},[[88,1,2]]]);
//# sourceMappingURL=main.74dffc0d.chunk.js.map