"use strict";(self.webpackChunkhab_guide=self.webpackChunkhab_guide||[]).push([[3237],{1609:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$n});var i=n(7294),r=n(9521),a=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},o=(0,r.iv)(s||(s=a(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"],["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"])));(0,r.vJ)(m||(m=a(["",""],["",""])),o);const l=o;var s,m;const d=({createGlobalStyle:r.vJ,...r.ZP}.createGlobalStyle)`

  ${l}

  html,
  body {
    color: whitesmoke;
    padding: 0;
    margin: 0;
    font-family: Baskerville, Baskervville, Baskerville Old Face, Hoefler Text, Garamond,
    Times New Roman, serif;
    background: #000000;
    font-size: 1.2rem;
    font-weight: 400;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;var c=n(9960),h=n(4996);const p=(0,r.ZP)(c.Z)`
  position: fixed;
  top: 1rem;
  left: 1.2rem;
  display: flex;
  flex-direction: column;
  z-index: 200;
  width: 2rem;
  height: 2rem;
  border: none;
  background: none;
  opacity: 0.5;
`,g=e=>i.createElement(p,{to:"/why"},i.createElement("img",{src:(0,h.Z)("/img/ionico.png")})),f=i.memo(g),u=r.ZP.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: white;
  color: black;
`,w=r.ZP.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  max-width: 1000px;
  margin: 5%;
  @media (max-width: 768px) {
    margin: 0;
  }
`,x=r.ZP.h1`
  font-size: 1.9rem;
  line-height: 1.2;
  color: black;
  padding: 1rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
  @media (min-width: 850px) {
    font-size: 4rem;
  }
  @media (min-width: 1200px) {
    font-size: 5rem;
  }
  @media (pointer: coarse) {
    font-size: 1.9rem;
    padding-top: 0;
  }
  @media (max-height: 730px) and (pointer: fine) {
    font-size: 3rem;
    padding-top: 0;
  }
`,v=r.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;

  @media (pointer: coarse) and (orientation: landscape) {
    flex-direction: row-reverse;
  }
  @media (max-height: 900px) and (pointer: fine) {
    flex-direction: row-reverse;
    align-items: center;
  }
`,b=r.ZP.div`
  flex: 1;
  position: relative;
  min-height: 45vh;
  margin-left: 1rem;
  margin-right: 1rem;
`,y=r.ZP.img`
  object-fit: contain;
  position: absolute;
  width: 100%;
  height: 100%;
`,E=r.ZP.img`
  object-fit: contain;
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scale(0.45) translate(-0.4vw, 0);

  @media (max-width: 768px) {
    transform: scale(0.79) translate(-0.5vw, 0);
  }
  @media (max-height: 900px) and (pointer: fine) {
    transform: scale(0.79) translate(-0.5vw, 0);
  }
`,P=r.ZP.div`
  flex: 2;
  font-size: 1.5rem;
  line-height: 2;
  margin: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.4;
  }
  @media (pointer: coarse) and (orientation: landscape) {
    font-size: 1.2rem;
    line-height: 1.4;
  }
  @media (max-height: 900px) and (pointer: fine) {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    font-size: 1.2rem;
    line-height: 1.4;
  }
  text-align: justify;
  hyphens: auto;
  word-break: break-word;
  text-indent: 1rem;
`,k=e=>{let{pos:t}=e;return i.createElement(u,null,i.createElement(w,null,i.createElement(x,null,"Aesthetic Option"),i.createElement(v,null,i.createElement(b,null,i.createElement(E,{src:(0,h.Z)("/img/feature_aesthetics_node.png")}),i.createElement(y,{src:(0,h.Z)("/img/feature_aesthetics.png")})),i.createElement(P,null,"A HAB Node could truly be an equivalent entrant in 24 Hour Le Mans. They are the best candidates for externally beautiful nodes, because they have the most robust internal enginering. HAB Nodes play the man."))))},Z=r.ZP.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: black;
  color: white;
`,z=r.ZP.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  height: 100%;
  margin: 5%;
  @media (max-width: 768px) {
    margin: 0;
  }
`,$=r.ZP.h1`
  font-size: 1.9rem;
  line-height: 1.2;
  padding: 1rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
  @media (min-width: 850px) {
    font-size: 4rem;
  }
  @media (min-width: 1200px) {
    font-size: 5rem;
  }
  @media (pointer: coarse) {
    font-size: 1.9rem;
    padding-top: 0;
  }
  @media (max-height: 730px) and (pointer: fine) {
    font-size: 3rem;
    padding-top: 0;
  }
`,j=r.ZP.div`
  font-size: 1.5rem;
  line-height: 2;
  margin-bottom: 1.2rem;
  margin-left: 1.2rem;
  margin-right: 1.2rem;
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1.2rem;
    line-height: 1.4;
  }
  @media (pointer: coarse) {
    font-size: 1.2rem;
    line-height: 1.4;
  }

  @media (pointer: coarse) and (orientation: landscape) {
    margin-bottom: 0;
  }
  @media (max-height: 900px) and (pointer: fine) {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    font-size: 1.2rem;
    line-height: 1.4;
  }

  text-align: justify;
  hyphens: auto;
  word-break: break-word;
  text-indent: 1rem;
`,H=r.ZP.div`
  position: relative;
  width: 12rem;
  height: 9rem;
  @media (max-width: 768px) {
    width: 4rem;
    height: 3rem;
  }
  @media (pointer: coarse) {
    width: 4rem;
    height: 3rem;
  }
  @media (max-height: 730px) and (pointer: fine) {
    width: 4rem;
    height: 3rem;
  }
`,A=r.ZP.img`
  object-fit: contain;
  position: absolute;
  width: 100%;
  height: 100%;
`,B=e=>{let{pos:t}=e;return i.createElement(Z,null,i.createElement(z,null,i.createElement($,null,"Induction Option",i.createElement(H,null,i.createElement(A,{src:(0,h.Z)("/img/feature_baptismal.png")}))),i.createElement(j,null,"Today, K8s can still run on any entry-level consumer hardware which can run a modern linux distribution: RPis, SBCs, NUCs, etc. As such, it can allow a Bitcoin node to baptize nearly any idle compute or storage into the cluster, making all services more robust."),i.createElement(j,null,"The grandfather of k8s was internally called \u201cBorg\u201d at Google, as it assimilated all. Inheriting this quality, HAB Nodes can scale budgets from 0 to anything and expand or contract compute and storage without downtime.")))},O=r.ZP.div.attrs((e=>{let{from:t,to:n,start:i,end:r,pos:a,killAtZero:o}=e;if(a||0===a){const e=n-t;if(0===e)return{style:{opacity:`${t}`,...0===t&&o&&{display:"none"}}};const l=(a-i)/(r-i),s=e>=0?e*l:t-Math.abs(e*l),m=a<i?t:a<r?s:n;return{style:{opacity:`${m}`,...0===m&&o&&{display:"none"}}}}return{style:{opacity:`${t}`,...0===t&&o&&{display:"none"}}}}))`
  will-change: auto;
`,V=i.memo(O),q=r.ZP.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  color: white;
  background: black;
`,S=r.iv`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`,L=r.iv`
  background: black;
  box-decoration-break: clone;
  box-shadow: 10px 0 0 black, -10px 0 0 black;
`,_=r.ZP.div`
  ${S};
  display: flex;
  justify-content: center;
  align-items: center;
`,N=r.ZP.div`
  align-self: center;

  font-size: 1.5rem;
  max-width: 35%;
  margin: 5%;
  @media (max-width: 1200px) {
    max-width: 50%;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    margin: 5%;
  }
  @media (pointer: coarse) {
    font-size: 1.2rem;
  }
  @media (pointer: coarse) and (orientation: landscape) {
    max-width: 100%;
  }
  padding-left: 10px;
  padding-right: 10px;
  text-align: left;
  line-height: 2;
  position: absolute;
  z-index: 1000;
`,T=r.ZP.span`
  ${L};
`,R=r.ZP.div`
  ${S};
  display: flex;
  justify-content: left;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
`,I=r.ZP.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`,F=r.ZP.div`
  ${S};
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`,C=r.ZP.span`
  ${L};
  margin-bottom: 10px;
`,M=r.ZP.span`
  ${L};
  margin-bottom: 10px;
`,G=r.ZP.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 900;
  ${S}
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`,D=(0,r.ZP)(c.Z)`
  color: #f2a900;
`,X=e=>{let{pos:t}=e;return i.createElement(q,null,i.createElement(_,null,i.createElement(N,null,i.createElement(V,{start:0,end:.11,from:1,pos:t,to:0},i.createElement(T,null,"However...")))),i.createElement(R,null,i.createElement(V,{start:.11,end:.22,pos:t,from:0,to:1},i.createElement(V,{start:.22,end:.33,pos:t,from:1,to:0},i.createElement(G,null,i.createElement(I,{src:(0,h.Z)("/img/casestudy_white1.png"),loading:"lazy"})))),i.createElement(V,{start:.22,end:.33,pos:t,from:0,to:1},i.createElement(V,{start:.33,end:.44,pos:t,from:1,to:0},i.createElement(G,null,i.createElement(I,{src:(0,h.Z)("/img/casestudy_orange.png"),loading:"lazy"})))),i.createElement(V,{start:.33,end:.44,pos:t,from:0,to:1},i.createElement(V,{start:.44,end:.55,pos:t,from:1,to:0},i.createElement(G,null,i.createElement(I,{src:(0,h.Z)("/img/casestudy_blue.png"),loading:"lazy"})))),i.createElement(V,{start:.44,end:.55,pos:t,from:0,to:1},i.createElement(V,{start:.55,end:.66,pos:t,from:1,to:0},i.createElement(G,null,i.createElement(I,{src:(0,h.Z)("/img/casestudy_yellow.png"),loading:"lazy"})))),i.createElement(V,{start:.55,end:.66,pos:t,from:0,to:1},i.createElement(V,{start:.66,end:.77,pos:t,from:1,to:0},i.createElement(G,null,i.createElement(I,{src:(0,h.Z)("/img/casestudy_white2.png"),loading:"lazy"})))),i.createElement(N,null,i.createElement(V,{start:.22,end:.33,from:0,pos:t,to:1},i.createElement(V,{start:.55,end:.66,pos:t,from:1,to:0},i.createElement(T,null,"No Highly Available Bitcoin Node will be the same.",i.createElement("br",null),i.createElement("br",null)," Each one is as individualized as its builder, modularized as its supply chain allows, and unique as its physical location.",i.createElement("br",null),i.createElement("br",null),"No other node will be like this proof of concept..."))))),i.createElement(F,null,i.createElement(G,null,i.createElement(V,{start:.66,end:.77,pos:t,from:0,to:1,style:{height:"100%",width:"100%"}},i.createElement(I,{src:(0,h.Z)("/img/fin_black.png"),loading:"lazy"}))),i.createElement(N,null,i.createElement(V,{start:.77,end:.88,from:0,pos:t,to:1},i.createElement(C,null,"What will your HAB Node be like?")),i.createElement(V,{start:.88,end:1,from:0,pos:t,to:1},i.createElement(D,{to:"/why"},i.createElement(M,null,"\u27a4 A Case For HAB Nodes")),i.createElement(D,{to:"/how"},i.createElement("br",null),i.createElement(M,null,"\u27a4 How Does It Work?")),i.createElement(D,{to:"/poc"},i.createElement("br",null),i.createElement(M,null,"\u27a4 PoC Design and Specs")),i.createElement(D,{to:"docs/Introduction/intro"},i.createElement("br",null),i.createElement(M,null,"\u27a4 Build Your Own"))))))},Y=r.ZP.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: white;
  color: black;
`,K=r.ZP.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin: 5%;
  max-width: 1000px;
  @media (max-width: 768px) {
    margin: 0;
  }
`,U=r.ZP.h1`
  font-size: 1.9rem;
  line-height: 1.2;
  color: black;
  padding: 1rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
  @media (min-width: 850px) {
    font-size: 4rem;
  }
  @media (min-width: 1200px) {
    font-size: 5rem;
  }
  @media (pointer: coarse) {
    font-size: 1.9rem;
    padding-top: 0;
  }
  @media (max-height: 730px) and (pointer: fine) {
    font-size: 3rem;
    padding-top: 0;
  }
`,W=r.ZP.div`
  display: flex;
`,J=r.ZP.div`
  flex: 1;
  position: relative;
  min-height: 250px;
  display: flex;
  align-items: center;
`,Q=r.ZP.img`
  object-fit: contain;
  position: absolute;
  width: 100%;
  height: 100%;
`,ee=r.ZP.div`
  min-height: 250px;
  flex: 2;
  display: flex;
  align-items: center;

  font-size: 1.5rem;
  line-height: 2;
  margin: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.4;
    margin-left: 0;
    margin-top: 0;
  }
  @media (pointer: coarse) and (orientation: landscape) {
    font-size: 1.2rem;
    line-height: 1.4;
    margin-left: 0;
    margin-top: 0;
  }
  @media (max-height: 900px) and (pointer: fine) {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    font-size: 1.2rem;
    line-height: 1.4;
  }
  text-align: justify;
  hyphens: auto;
  word-break: break-word;
  text-indent: 1rem;
`,te=e=>{let{pos:t}=e;return i.createElement(Y,null,i.createElement(K,null,i.createElement(U,null,"H.A.L.X. Option"),i.createElement(W,null,i.createElement(J,null,i.createElement(Q,{src:(0,h.Z)("/img/feature_HALX2.png")})),i.createElement(ee,null,"Not only does high availability on layer 1 ensure layer X is more stable, HA at higher, self-hosted, p2p layers is predicated on highly available lower layers. Running multiple instances of Lightning from one Bitcoin instance, running on one computer, is not a HA Lightning Node. Only H.A.B.N. can enable H.A.L.X."))))},ne=r.ZP.div.attrs((e=>{let{from:t,to:n,start:i,end:r,pos:a}=e;if(a||0===a){const e=n-t;if(0===e)return{style:{transform:`scale(${t})`}};const o=(a-i)/(r-i),l=e>=0?t+e*o:t-Math.abs(e*o);return{style:{transform:`scale(${a<i?t:a<r?l:n})`}}}return{style:{transform:`scale(${t})`}}}))`
  will-change: auto;
`,ie=i.memo(ne),re=r.ZP.div.attrs((e=>{let{fromHorizontal:t,fromVertical:n,toHorizontal:i,toVertical:r,start:a,end:o,pos:l}=e;if(l||0===l){const e=l-a,s=`(${t} - ${i})`,m=`(${n} - ${r})`;if(o===a)throw new Error(`End and Start must be differnt values. Got ${o} for both.`);const d=e/(o-a);return{style:{transform:`translate(${l<a?t:l<o?`calc(${i} + (${s} - (${s} * ${d})))`:i}, ${l<a?n:l<o?`calc(${r} + (${m} - (${m} * ${d})))`:r})`}}}return{style:{transform:`translate(${t}, ${n})`}}}))`
  will-change: auto;
`,ae=i.memo(re),oe=r.ZP.div`
  display: grid;
  height: 100vh;
`,le=r.ZP.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
  height: 100vh;
  width: 100%;
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (pointer: coarse) {
    justify-content: center;
  }
`,se=r.ZP.div`
  max-width: 800px;

  font-size: 1.5rem;
  line-height: 2;
  margin: 1.2rem;
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1.2rem;
    line-height: 1.4;
  }
  @media (pointer: coarse) {
    font-size: 1.2rem;
    max-width: 100%;
    line-height: 1.4;
    margin: 1rem;
  }

  @media (pointer: coarse) and (orientation: landscape) {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }

  @media (max-height: 730px) {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    font-size: 1.2rem;
    line-height: 1.4;
  }

  text-align: justify;
  hyphens: auto;
  word-break: break-word;
  text-indent: 1rem;
`,me=r.ZP.div`
  align-self: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 20vh;
  width: 95vw;
  margin-top: 5%;
  margin-bottom: 5%;
  @media (pointer: coarse) and (orientation: landscape) {
    height: 30vh;
    width: 85vw;
    margin: 0;
  }
`,de=r.ZP.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0px;
  top: 0px;
  box-shadow: inset 0px 0px 10px 10px white;
`,ce=r.ZP.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vh;
`,he=r.ZP.img`
  object-fit: contain;
  position: absolute;
`,pe=e=>{let{pos:t}=e;return i.createElement(oe,null,i.createElement(le,null,i.createElement(se,null,"High Avalability (HA) is the process of eliminating as much downtime as possible in providing a remote service. The Bitcoin protocol is designed to be Highly Available:"),i.createElement(me,null,i.createElement(ae,{start:0,end:.33,fromHorizontal:"calc(-42px * .65)",fromVertical:"21vh",pos:t,toHorizontal:"0px",toVertical:"0px"},i.createElement(ie,{start:.33,end:.66,pos:t,from:.65,to:1.2},i.createElement(ce,null,i.createElement(he,{src:(0,h.Z)("/img/white_paper2.png")})))),i.createElement(de,null)),i.createElement(se,null,i.createElement(V,{start:.66,end:1,pos:t,from:0,to:1},"Although most nodes are not HA, meaning it is unlikely to persistently connect to one minimally run Bitcoin node, the incentives in Bitcoin as a whole ensure many nodes will always be available."))))},ge=r.ZP.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: black;
  color: white;
`,fe=r.ZP.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`,ue=r.ZP.div`
  ${fe};
  width: 100%;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (pointer: coarse) {
    justify-content: center;
  }
`,we=r.ZP.div`
  ${fe};
  height: 100vh;
  width: 100vw;
  position: absolute;
`,xe=r.ZP.div`
  max-width: 800px;

  font-size: 1.5rem;
  line-height: 2;
  margin: 1.2rem;
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1.2rem;
    line-height: 1.4;
  }
  @media (pointer: coarse) {
    font-size: 1.2rem;
    max-width: 100%;
    line-height: 1.4;
  }
  @media (pointer: coarse) and (orientation: landscape) {
    margin-top: 0rem;
  }
  @media (max-height: 730px) {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    font-size: 1.2rem;
    line-height: 1.4;
  }
  text-align: justify;
  hyphens: auto;
  word-break: break-word;
  text-indent: 1rem;
`,ve=r.ZP.div`
  height: 100vh;
  width: 100vw;
  background: ${e=>{let{pos:t}=e;return 0===t?"none":"white"}};
`,be=e=>{let{pos:t}=e;return i.createElement(ge,null,i.createElement(we,null,i.createElement(V,{start:-1,end:0,pos:t,from:1,to:0},i.createElement(ve,{pos:t}))),i.createElement(ue,null,i.createElement(xe,null,i.createElement(V,{start:.33,end:.66,pos:t,from:1,to:0},"And thank God the incentives work. Thermodynamics ensures uptime for"," ",i.createElement("span",{style:{fontStyle:"italic"}},"any")," physical computing, including individual nodes, and all HA hardware is a perennial problem.")),i.createElement(xe,null,i.createElement(V,{start:0,end:.33,pos:t,from:0,to:1},i.createElement(V,{start:.66,end:1,pos:t,from:1,to:0},"Over the decades, billions of dollars and millions of hours have been spent by nearly every major player in tech on research, development, and deployment of dually centralized and highly available computer systems."))),i.createElement(xe,null,i.createElement(V,{start:.33,end:.66,pos:t,from:0,to:1},"And yet computers still",i.createElement(ae,{start:1.05,end:2.05,fromHorizontal:"0px",fromVertical:"0px",pos:t,toHorizontal:"0%",toVertical:"100vh",style:{display:"inline-block"},key:t},i.createElement("div",{style:{display:"inline-block",marginLeft:"-10px",textIndent:"0"}},"fail"," ")," ")," ","all the time."))))},ye=r.ZP.div`
  display: grid;
  height: 100vh;
`,Ee=r.ZP.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`,Pe=r.ZP.div`
  ${Ee};
  height: 100vh;
  width: 100%;
  background: white;
  color: black;
  position: absolute;
  z-index: 10;
`,ke=r.ZP.div`
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ze=r.ZP.img`
  height: 100%;
  width: 100%;

  object-fit: cover;
  position: absolute;
  object-position: center center;
`,ze=r.ZP.div`
  ${Ee};
  height: 100vh;
  width: 100%;
  color: white;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (pointer: coarse) {
    max-width: 100%;
    margin-left: 0;
  }
`,$e=r.ZP.div`
  max-width: 600px;
  font-size: 1.5rem;
  line-height: 2;
  margin: 1.2rem;
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1.2rem;
    line-height: 1.4;
  }
  @media (pointer: coarse) {
    font-size: 1.2rem;
    max-width: 100%;
    line-height: 2.2;
  }
  @media (max-height: 730px) {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    font-size: 1.2rem;
    line-height: 1.4;
  }
  text-align: justify;
  hyphens: auto;
  word-break: break-word;
  text-indent: 1rem;
`,je=r.ZP.span`
  background: white;
  color: black;
  box-decoration-break: clone;
  box-shadow: 10px 0 0 white, -10px 0 0 white;
`,He=(0,r.ZP)(c.Z)`
  color: #f2a900;
`,Ae=e=>{let{pos:t}=e;return i.createElement(ye,null,i.createElement(Pe,null,i.createElement(ke,null,i.createElement(Ze,{src:(0,h.Z)("/img/google_prod_server.jpg"),loading:"lazy"}))),i.createElement(ze,null,i.createElement($e,null,i.createElement(V,{start:.3,end:1,pos:t,from:1,to:0},i.createElement(je,null,"To solve this problem, in the late 90s, the prevailing wisdom was to only put critical infrastructure on top-of-the-line hardware. Google put this on its head by creating a software abstraction layer for server reliability, allowing their first production server,"," ",i.createElement(He,{to:"https://www.flickr.com/photos/jurvetson/157722937/"},"shown here"),", composed of cheap consumer hardware which was expected to fail, to be highly fault-tolerant.")))))},Be=r.ZP.div`
  display: grid;
  height: 100vh;
  width: 100vw;
`,Oe=r.ZP.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`,Ve=r.ZP.div`
  ${Oe};
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,qe=r.ZP.div`
  max-width: 600px;
  font-size: 1.5rem;
  line-height: 2;
  margin: 1.2rem;
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1.2rem;
    line-height: 1.4;
  }
  @media (pointer: coarse) {
    font-size: 1.2rem;
    max-width: 100%;
    line-height: 1.4;
  }
  @media (max-height: 730px) {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    font-size: 1.2rem;
    line-height: 1.4;
  }
  text-align: justify;
  hyphens: auto;
  word-break: break-word;
  text-indent: 1rem;
`,Se=r.ZP.div`
  ${Oe};
  height: 100vh;
  width: 100vw;
  position: absolute;
`,Le=r.ZP.div`
  height: 100vh;
  width: 100vw;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`,_e=r.ZP.a`
  color: #f2a900;
`,Ne=e=>{let{pos:t}=e;return i.createElement(Be,null,i.createElement(Se,null,i.createElement(V,{start:1,end:2,pos:t,from:0,to:1,killAtZero:!0},i.createElement(Le,null))),i.createElement(Ve,null,i.createElement(qe,null,i.createElement(V,{start:.5,end:1,pos:t,from:1,to:0},"Google continued to build upon this foundation, and did so in tandem with every one of its massive catalog of eligable products, providing them all, over the last 20+ years, as Highly Available.")),i.createElement(qe,null,i.createElement(V,{start:0,end:.5,pos:t,from:0,to:1},i.createElement(V,{start:1.33,end:1.66,pos:t,from:1,to:0},"In the early twenty teens, wanting to integrate new container technology, and improve upon lessons learned, Google rebuilt this software as general purpose, and in 2015, released it as a free and open source project called"," ",i.createElement(_e,{href:"https://kubernetes.io/"},"Kubernetes"),", or k8s for short.")))))},Te=r.ZP.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: white;
  color: black;
`,Re=r.ZP.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`,Ie=r.ZP.div`
  ${Re};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
`,Fe=r.ZP.div`
  max-width: 600px;
  font-size: 1.5rem;
  line-height: 2;
  margin: 1.2rem;
  padding-top: 2rem;
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1.2rem;
    line-height: 1.4;
  }
  @media (pointer: coarse) {
    font-size: 1.2rem;
    max-width: 100%;
    line-height: 1.4;
  }
  @media (max-height: 730px) {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    font-size: 1.2rem;
    line-height: 1.4;
  }
  text-align: justify;
  hyphens: auto;
  word-break: break-word;
  text-indent: 1rem;
`,Ce=r.ZP.span`
  background: white;
  color: black;
  box-decoration-break: clone;
  box-shadow: 10px 0 0 white, -10px 0 0 white;
`,Me=r.ZP.div`
  ${Re};
  position: absolute;
  display: ${e=>{let{pos:t}=e;return t&&t<.35?"none":"flex"}};
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`,Ge=r.ZP.div`
  ${Re};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`,De=r.ZP.img`
  object-fit: cover;
  width: 20vh;
  height: 20vh;

  position: fixed;
  top: 15vh;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`,Xe=r.ZP.div`
  font-family: "Ubuntu", sans-serif;
  text-align: center;
  font-size: 5vh;

  position: fixed;
  top: 25vh;
  left: 0;
  right: 0;
  text-align: center;
`,Ye=(0,r.ZP)(c.Z)`
  color: #f2a900;
`,Ke=e=>{let{pos:t}=e;return i.createElement(Te,null,i.createElement(Ge,null,i.createElement(ae,{start:-1,end:0,pos:t,fromHorizontal:"0px",fromVertical:"0vh",toHorizontal:"0px",toVertical:"-5vh",style:{position:"fixed",top:"0",left:"0",right:"0"}},i.createElement(ie,{start:-1,end:0,pos:t,from:1,to:.8,style:{position:"fixed",top:"0",left:"0",right:"0"}},i.createElement(V,{start:-1.5,end:-1,pos:t,from:0,to:1,killAtZero:!0},i.createElement(De,{src:(0,h.Z)("/img/k8s_logo.png"),loading:"lazy"})))),i.createElement(V,{start:-.25,end:0,pos:t,from:0,to:1,killAtZero:!0},i.createElement(Xe,null,"kubernetes"))),i.createElement(Ie,null,i.createElement(Fe,null,i.createElement(V,{start:0,end:.35,pos:t,from:1,to:0},i.createElement(Ce,null,"Over"," ",i.createElement(Ye,{to:"https://github.com/kubernetes/kubernetes"},"100,000 commits"),", thousands of contributors, and"," ",i.createElement(Ye,{to:"https://landscape.cncf.io/card-mode?grouping=no&sort=amount"},"billions")," ","in funding later, k8s can orchestrate the smallest IoT clusters to the biggest server farms on earth."," ",i.createElement(Ye,{to:"https://k8s.devstats.cncf.io/d/9/companies-table?orgId=1"},"And does"),". It is no stretch to assume everyone online, unknowingly, depends on it every day.")))),i.createElement(Me,{pos:t},i.createElement(Fe,null,i.createElement(V,{start:.35,end:.7,pos:t,from:0,to:1},i.createElement(V,{start:.8,end:1,pos:t,from:1,to:0},i.createElement(Ce,null,"Today, k8s is the market leader for companies and institutions worldwide which rely on highly available infrastructure. It could easily be argued that it is the most important piece of engineering Google ever created, as it defends, in total,"," ",i.createElement(Ye,{to:"https://enlyft.com/tech/products/kubernetes"},"trillions in value"),"."))))))},Ue=r.ZP.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: black;
  color: white;
`,We=r.ZP.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`,Je=r.ZP.div`
  ${We};
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
  @media (pointer: coarse) {
    justify-content: center;
  }
`,Qe=r.ZP.div`
  ${We};
  height: 100vh;
  width: 100vw;
  position: absolute;
  display: ${e=>{let{pos:t}=e;return t&&t>0?"none":"block"}};
`,et=r.ZP.div`
  max-width: 600px;

  font-size: 1.5rem;
  line-height: 2;
  margin: 1.2rem;
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1.2rem;
    line-height: 1.4;
  }
  @media (pointer: coarse) {
    font-size: 1.2rem;
    max-width: 100%;
    line-height: 1.4;
  }
  @media (pointer: coarse) and (orientation: landscape) {
    margin-top: 0rem;
  }
  @media (max-height: 730px) {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    font-size: 1.2rem;
    line-height: 1.4;
  }
  text-align: justify;
  hyphens: auto;
  word-break: break-word;
  text-indent: 1rem;
`,tt=r.ZP.div`
  height: 100vh;
  width: 100vw;
  background: ${e=>{let{pos:t}=e;return 0===t?"none":"white"}};
`,nt=r.ZP.div`
  ${We};
  display: ${e=>{let{pos:t}=e;return t&&t<.15?"none":"flex"}};

  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
`,it=r.ZP.div`
  text-align: center;
  font-size: 1.9rem;
  line-height: 3rem;
  background: black;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`,rt=r.ZP.div`
  ${We};
  display: ${e=>{let{pos:t}=e;return t&&t<.15?"none":"flex"}};

  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
`,at=r.ZP.a`
  color: #f2a900;
`,ot=e=>{let{pos:t}=e;return i.createElement(Ue,null,i.createElement(Qe,{pos:t},i.createElement(V,{start:-.5,end:0,pos:t,from:1,to:0},i.createElement(tt,{pos:t}))),i.createElement(Je,null,i.createElement(et,null,i.createElement(V,{start:0,end:.15,pos:t,from:1,to:0},"As the Bitcoin ecosystem grows with higher layers, base layer node architecture will increasingly need to reliably support ever-expanding, self-hosted, p2p apps, services, marketplaces, and income streams.")),i.createElement(et,null,i.createElement(V,{start:0,end:.15,pos:t,from:1,to:0},'Indeed, for some nodes, downtime already means loses. And if it\u2019s a Raspberry Pi node with a bricked hard drive, downtime means loses for weeks, or having to trust the infamous "Trusted Third Party", which will forever be a problem with'," ",i.createElement(at,{href:" https://medium.com/breez-technology/introducing-lightning-service-providers-fe9fb1665d5f"},"LSPs"),"."))),i.createElement(nt,{pos:t},i.createElement(et,null,i.createElement(V,{start:.15,end:.3,pos:t,from:0,to:1},i.createElement(V,{start:.55,end:.7,pos:t,from:1,to:0},"Honey \u20bfadger is getting thirsty..."))),i.createElement(et,null,i.createElement(V,{start:.3,end:.45,pos:t,from:0,to:1},i.createElement(V,{start:.55,end:.7,pos:t,from:1,to:0},"...and the wider tech industry has been spending the last few decades building, testing, and actively deploying, in defense of"," ",i.createElement("span",{style:{fontStyle:"italic"}},"trillions")," in value, the very solution to quench that thirst.")))),i.createElement(rt,{pos:t},i.createElement(V,{start:.7,end:.85,pos:t,from:0,to:1},i.createElement(it,null,"Your Bitcoin Node")),i.createElement(V,{start:.85,end:1,pos:t,from:0,to:1},i.createElement(it,null,"Highly Available"))))},lt=r.ZP.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: rgb(203, 34, 49);
  color: black;
`,st=r.ZP.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 1000px;
  margin: 5%;
  @media (max-width: 768px) {
    margin: 0;
  }
`,mt=r.ZP.h1`
  font-size: 1.9rem;
  line-height: 1.2;
  color: black;
  padding: 1rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
  @media (min-width: 850px) {
    font-size: 4rem;
  }
  @media (min-width: 1200px) {
    font-size: 5rem;
  }
  @media (pointer: coarse) and (orientation: landscape) {
    font-size: 1.9rem;
  }
  @media (max-height: 730px) and (pointer: fine) {
    font-size: 3rem;
    padding-top: 0;
  }
`,dt=r.ZP.div`
  font-size: 1.5rem;
  line-height: 2;
  margin: 1.2rem;
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1.2rem;
    line-height: 1.4;
    margin-top: 0;
  }
  @media (pointer: coarse) and (orientation: landscape) {
    font-size: 1.2rem;
    max-width: 100%;
    line-height: 1.4;
    margin-top: 0;
  }
  @media (max-height: 900px) and (pointer: fine) {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    font-size: 1.2rem;
    line-height: 1.4;
  }
  text-align: justify;
  hyphens: auto;
  word-break: break-word;
  text-indent: 1rem;
`,ct=r.ZP.div`
  position: relative;
  width: 12rem;
  height: 9rem;
  @media (max-width: 768px) {
    width: 4rem;
    height: 3rem;
  }
  @media (pointer: coarse) and (orientation: landscape) {
    width: 4rem;
    height: 3rem;
  }
  @media (max-height: 730px) and (pointer: fine) {
    width: 4rem;
    height: 3rem;
  }
`,ht=r.ZP.img`
  object-fit: contain;
  position: absolute;
  width: 100%;
  height: 100%;
`,pt=e=>{let{pos:t}=e;return i.createElement(lt,null,i.createElement(st,null,i.createElement(mt,null,"Hydra Option",i.createElement(ct,null,i.createElement(ht,{src:(0,h.Z)("/img/feature_hydra2.png")}))),i.createElement(dt,null,"A HAB node accounts for bizarre and/or unlikely attacks. Designed correctly, it is decomposable into individual, self-sufficeint nodes, making it trivial to change from one to many nodes, or to slice off one or many parts, without taking down the cluster."),i.createElement(dt,null,"Potential scenarios include: front-running supply chain collapse, diversifying location before foreseen kinetic attack, bootstrapping upon internet co-option, \u201cVersion\u201d signalling sybil attack resistance, etc.")))},gt=r.ZP.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: white;
  color: black;
`,ft=r.iv`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`,ut=r.ZP.div`
  ${ft};
  position: absolute;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`,wt=r.ZP.div`
  ${ft};
  position: relative;
`,xt=r.ZP.h1`
  font-size: 1.9rem;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
  @media (min-width: 850px) {
    font-size: 4rem;
  }
  @media (min-width: 1200px) {
    font-size: 5rem;
  }
  background: white;
  color: black;
  padding-left: 1rem;
  padding-right: 1rem;
`,vt=r.ZP.div`
  ${ft};
  position: absolute;
`,bt=r.iv`
  font-size: 1.5rem;
  line-height: 2;
  max-width: 35%;
  margin: 5%;
  @media (max-width: 1200px) {
    max-width: 50%;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0%;
  }
  @media (pointer: coarse) {
    max-width: 100%;
    margin: 0%;
    line-height: 1.6;
  }
  padding-left: 10px;
  padding-right: 10px;
`,yt=r.ZP.span`
  background: white;
  color: black;
  box-decoration-break: clone;
  box-shadow: 10px 0 0 white, -10px 0 0 white;
`,Et=r.ZP.div`
  ${bt};
  text-align: left;
`,Pt=r.ZP.div`
  ${ft};
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
`,kt=r.ZP.div`
  ${ft};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Zt=r.ZP.div`
  ${bt};
  text-align: right;
  @media (pointer: coarse) {
    text-align: left;
  }
  align-self: flex-end;
  @media (pointer: coarse) and (orientation: landscape) {
    transform: translate(0px, 30px);
  }
`,zt=r.ZP.div`
  text-align: center;
  font-size: 1.9rem;
  line-height: 3rem;
  background: black;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
`,$t=r.ZP.img``,jt=(0,r.ZP)($t)`
  object-fit: contain;
  @media (orientation: landscape) {
    object-fit: cover;
  }
`,Ht=e=>{let{pos:t}=e;return i.createElement(gt,null,i.createElement(ut,null,i.createElement(jt,{src:(0,h.Z)("/img/intro_reveal.png"),loading:"lazy"})),i.createElement(wt,null,i.createElement(ae,{start:0,end:.25,fromHorizontal:"0%",fromVertical:"0%",pos:t,toHorizontal:"0%",toVertical:"-100vh",key:t},i.createElement(xt,null,"No Average Node"))),i.createElement(vt,null,i.createElement(Et,null,i.createElement(ae,{start:0,end:.75,fromHorizontal:"0%",fromVertical:"110vh",pos:t,toHorizontal:"0%",toVertical:"-190vh"},i.createElement(yt,null,"This is a photographed-in-operation, Highly Available Bitcoin node. It represents the next phase of responsible node operation"," ",i.createElement("span",{style:{fontStyle:"italic"}},"for everyone"),". ",i.createElement("br",null)," ",i.createElement("br",null)," Incrementally built from almost any consumer-grade electronics and automation software, a HAB Node is increasingly easy to set up. And the orchestration brilliance of",i.createElement(jt,{style:{transform:"scale(.95) translate(7px, 17px)"},width:200,height:50,src:(0,h.Z)("/img/k8s.png"),loading:"lazy"})," ","means it stays up.")))),i.createElement(Pt,null,i.createElement(Zt,null,i.createElement(ae,{start:.25,end:1,fromHorizontal:"0%",fromVertical:"120vh",pos:t,toHorizontal:"0%",toVertical:"-180vh"},i.createElement(yt,null,"Only HAB Nodes can eliminate the most Single Points of Failure: hardware, software, internet provider, power source, and more. All while providing a litany of world class HA infrastructure, like improved privacy, security, and up-time.")))),i.createElement(kt,null,i.createElement(V,{start:.75,end:.9,pos:t,from:0,to:1},i.createElement(zt,null,"HAB Nodes are")),i.createElement(V,{start:.9,end:1,pos:t,from:0,to:1},i.createElement(zt,null,"Optionality"))))},At=r.ZP.div.attrs((e=>{let{from:t,to:n,start:i,end:r,pos:a,horizontal:o=!1}=e;if(a||0===a){const e=a-i,l=t-n,s=r-i;if(0===s)throw new Error(`Diff must not be 0: got ${l}`);const m=a<i?t:a<r?n+l-l*(e/s):n;return{style:{clipPath:`inset(${o?m:0} ${o?0:m}% ${o?m:0} ${o?0:m}%)`}}}return{style:{clipPath:`inset(0 ${t}% 0 ${t}%)`}}}))`
  will-change: auto;
`,Bt=i.memo(At),Ot=r.ZP.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: black;
  color: white;
`,Vt=r.ZP.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`,qt=r.ZP.div`
  ${Vt};
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
  @media (pointer: coarse) {
    justify-content: center;
  }
`,St=r.ZP.div`
  ${Vt};
  height: 100vh;
  width: 100vw;
  position: absolute;
`,Lt=r.ZP.div`
  max-width: 600px;

  font-size: 1.5rem;
  line-height: 2;
  margin: 1.2rem;
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1.2rem;
    line-height: 1.4;
  }
  @media (pointer: coarse) {
    font-size: 1.2rem;
    max-width: 100%;
    line-height: 1.4;
  }
  @media (pointer: coarse) and (orientation: landscape) {
    margin-bottom: 0;
    margin-top: 0;
  }
  @media (max-height: 730px) {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    font-size: 1.2rem;
    line-height: 1.4;
  }
  text-align: justify;
  hyphens: auto;
  word-break: break-word;
  text-indent: 1rem;
`,_t=r.ZP.div`
  height: 100vh;
  width: 100vw;
  background: ${e=>{let{pos:t}=e;return 0===t?"none":"white"}};
`,Nt=r.ZP.div`
  ${Vt};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
`,Tt=r.ZP.div`
  text-align: center;
  font-size: 1.9rem;
  line-height: 3rem;
  color: black;
  padding-left: 10px;
  padding-right: 10px;
`,Rt=r.ZP.div`
  ${Vt};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
`,It=r.ZP.div`
  place-self: center;
  display: grid;
  gap: 0 10px;
  width: 100%;
`,Ft=r.ZP.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`,Ct=r.ZP.div`
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  font-size: 1.9rem;
  line-height: 3rem;
  color: black;
`,Mt=r.ZP.div`
  ${Vt};
  height: 110vh;
  position: absolute;
`,Gt=r.ZP.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`,Dt=r.ZP.video`
  object-fit: cover;
  height: 100%;
  width: 100%;
`,Xt=(0,r.ZP)(Vt)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 0 10px;
  max-width: 640px;
  height: 100vh;
  color: black;
  z-index: 1000;
`,Yt=r.ZP.span`
  text-align: center;
  font-size: 1.9rem;
  line-height: 3rem;
`,Kt=r.F4`
from {
  text-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 8px #fff, 0 0 10px #f2a900, 0 0 15px #f2a900,
    0 0 25px #f2a900, 0 0 80px #f2a900;
  }
  to {
    text-shadow: 0 0 1px #fff, 0 0 3px #fff, 0 0 5px #f2a900, 0 0 10px #f2a900,
    0 0 20px #f2a900;
  }
`,Ut=r.ZP.span`
  display: inline-block;
  color: ${e=>{let{pos:t}=e;return t&&t>.535?"#f2a900":"black"}};
  ${e=>{let{pos:t}=e;return t&&t>.535?r.iv`
          animation: ${Kt} 2s ease-in-out infinite alternate;
        `:""}}
  text-indent: 0;
`,Wt=e=>{let{pos:t}=e;return i.createElement(Ot,null,i.createElement(qt,null,i.createElement(Lt,null,i.createElement(V,{start:0,end:.08,pos:t,from:1,to:0},"So, since when were Bitcoin Maximalists all about node minimalism?"))),i.createElement(Nt,null,i.createElement(Lt,null,i.createElement(V,{start:.08,end:.16,pos:t,from:0,to:1},"Since the block size wars, where it was revealed that any more liberal a stance than keeping block size as low as possible, for as long as possible while scaling Bitcoin, might be a centralizing force of evil.")),i.createElement(Lt,null,i.createElement(V,{start:.16,end:.24,pos:t,from:0,to:1},"Years on from winning these wars, and preserving zero-cost-to-entry node architecture\u2014upon which all Hydra enabled HAB Nodes are explicitly reliant\u2014node minimalism remains just as important today as it ever was to ensure the lights stay on for Bitcoin."))),i.createElement(St,null,i.createElement(V,{start:.24,end:.32,pos:t,from:0,to:1},i.createElement(_t,{pos:t}))),i.createElement(Xt,null,"But we are not here to merely keep the lights on, we are here to re-light civilization".split(" ").map(((e,n,r)=>i.createElement(V,{key:`${e}-${n}`,start:.1/r.length*n*2+.32,end:.1/r.length*(n+1)*2+.32,pos:t,from:0,to:1},i.createElement(V,{start:.54,end:.62,pos:t,from:1,to:0},"civilization"===e&&i.createElement(Yt,null,i.createElement(Ut,{pos:t},e)," "),"civilization"!==e&&i.createElement(Yt,null,e," ")))))),i.createElement(Rt,null,i.createElement(ie,{start:.75,end:1,pos:t,from:1,to:1.25},i.createElement(V,{start:.62,end:.7,pos:t,from:0,to:1},i.createElement(Tt,null,"Your Bitcoin Node")),i.createElement(It,null,"Composable Resilient Serene Distinguished Enduring Inimitable Tenacious Maximized Decentralized Fault-tolerant Highly_Available".split(" ").map(((e,n,r)=>i.createElement(Ft,{key:`${e}-${n}`},i.createElement(V,{key:`${e}-${n}`,start:.2/r.length*n+.7,end:.2/r.length*(n+1)+.7,pos:t,from:0,to:1},i.createElement(V,{start:.2/r.length*n+.2/r.length+.7,end:.2/r.length*(n+1)+.2/r.length+.7,pos:t,from:1,to:n===r.length-1?1:0},i.createElement(Ct,null,e.includes("_")?e.replace("_"," "):e))))))))),i.createElement(Mt,null,i.createElement(Bt,{start:.925,end:1,from:50,to:0,pos:t},i.createElement(Gt,null,i.createElement(Dt,{autoPlay:!0,loop:!0,muted:!0,playsinline:!0,preload:"none"},i.createElement("source",{src:"blue-node.mp4",type:"video/mp4"}))))))},Jt=r.ZP.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: #f2a900;
  color: black;
`,Qt=r.ZP.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  max-width: 1000px;
  margin: 5%;
  @media (max-width: 768px) {
    margin: 0;
  }
`,en=r.ZP.h1`
  font-size: 1.9rem;
  line-height: 1.2;
  color: black;
  padding: 1rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
  @media (min-width: 850px) {
    font-size: 4rem;
  }
  @media (min-width: 1200px) {
    font-size: 5rem;
  }
  @media (pointer: coarse) {
    font-size: 1.9rem;
    padding-top: 0;
  }
  @media (max-height: 730px) and (pointer: fine) {
    font-size: 3rem;
    padding-top: 0;
  }
`,tn=r.ZP.div`
  font-size: 1.5rem;
  line-height: 2;
  margin-bottom: 1.2rem;
  margin-left: 1.2rem;
  margin-right: 1.2rem;
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1.2rem;
    line-height: 1.4;
  }
  @media (pointer: coarse) {
    font-size: 1.2rem;
    line-height: 1.4;
  }
  @media (pointer: coarse) and (orientation: landscape) {
    margin-bottom: 0;
  }
  @media (max-height: 900px) and (pointer: fine) {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    font-size: 1.2rem;
    line-height: 1.4;
  }
  text-align: justify;
  hyphens: auto;
  word-break: break-word;
  text-indent: 1rem;
`,nn=r.ZP.div`
  position: relative;
  width: 12rem;
  height: 9rem;
  @media (max-width: 768px) {
    width: 4rem;
    height: 3rem;
  }
  @media (pointer: coarse) {
    width: 4rem;
    height: 3rem;
  }
  @media (max-height: 730px) and (pointer: fine) {
    width: 4rem;
    height: 3rem;
  }
`,rn=r.ZP.img`
  object-fit: contain;
  position: absolute;
  width: 100%;
  height: 100%;
`,an=e=>{let{pos:t}=e;return i.createElement(Jt,null,i.createElement(Qt,null,i.createElement(en,null,"Sovereign Option",i.createElement(nn,null,i.createElement(rn,{src:(0,h.Z)("/img/feature_soverign2.png")}))),i.createElement(tn,null,"Arbitrary services can be added to the cluster, including hooks, repository mirroring, and any other infrastructure. A HAB Node can thus operate as GitHub, Docker Hub, and a build server, hardening it against middle man failures from any of the above. All self-hosted and highly available."),i.createElement(tn,null,"Under such a setup, for instance, a node would be able to take full ownership of the entire Bitcoin code pipeline, every dependency, and all code needed to do this.")))},on=r.ZP.div`
  height: ${e=>{let{height:t}=e;return t}};
  position: relative;
`,ln=r.ZP.div`
  position: sticky;
  top: 0;
  height: 100vh;
`;function sn(e){let{refOuter:t,child:n,height:r="300vh",minPos:a=-1,maxPos:o=2}=e;const l=(0,i.useRef)(null),[s,m]=(0,i.useState)(null);function d(e){if(null!==l.current&&null!==e.target){const t=e.target.getBoundingClientRect(),n=l.current.getBoundingClientRect(),i=t.y-n.y,r=t.height,s=n.height-r,d=parseFloat((i/(s>0?s:r+(i<0?0:1))).toFixed(3));d>=a&&d<=o&&m(d)}}return(0,i.useEffect)((()=>(t&&t.current&&t.current.addEventListener("scroll",d),()=>{t&&t.current&&t.current.removeEventListener("scroll",d)})),[t]),i.createElement(on,{height:r,ref:l},i.createElement(ln,null,n({pos:s})))}const mn=i.memo(sn),dn=r.ZP.div`
  display: grid;
  height: 100vh;
`,cn=r.ZP.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`,hn=r.iv`
  display: flex;
  flex-wrap: wrap;
  gap: 0 10px;
`,pn=(0,r.ZP)(cn)`
  ${hn}
  z-index: 100;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,gn=(0,r.ZP)(cn)`
  ${hn}
  max-width: 800px;
  justify-content: center;
`,fn=(0,r.ZP)(cn)`
  ${hn}
  padding: 10%;
  text-align: center;
`,un=(0,r.ZP)(cn)`
  width: 100%;
  max-height: 100vh;
`,wn=r.ZP.div`
  width: 100vw;
  height: 100vh;
  background: #f2a900;
`,xn=r.ZP.div`
  width: 100vw;
  height: 100vh;
  background: white;
`,vn=r.ZP.div`
  width: 100vw;
  height: 100vh;
  background: rgb(203, 34, 49);
`,bn=r.ZP.span`
  text-align: center;
  font-size: 1.9rem;
  line-height: 3rem;
`,yn=r.F4`
from {
  text-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 8px #fff, 0 0 10px #f2a900, 0 0 15px #f2a900,
    0 0 25px #f2a900, 0 0 80px #f2a900;
  }
  to {
    text-shadow: 0 0 1px #fff, 0 0 3px #fff, 0 0 5px #f2a900, 0 0 10px #f2a900,
    0 0 20px #f2a900;
  }
`,En=r.ZP.span`
  display: inline-block;
  color: #f2a900;
  transform: rotate(14deg);
  animation: ${yn} 2s ease-in-out infinite alternate;
`,Pn=r.ZP.div`
  transform: translate(0, 40vh);
`,kn=e=>{let{pos:t}=e;const n=(0,i.useRef)(null),r=(0,i.useRef)(null),[a,o]=(0,i.useState)(0),[l,s]=(0,i.useState)(0),[m,d]=(0,i.useState)(0),[c,h]=(0,i.useState)(0),[p,g]=(0,i.useState)(!1),f=Math.round(t||0);return(0,i.useEffect)((()=>{const e=()=>{if(window.scrollTo(0,0),n.current){const e=n.current.getBoundingClientRect();o(e.left),s(e.top)}if(r.current){const e=r.current.getBoundingClientRect();d(e.left),h(e.top),g(!0)}};return window.addEventListener("resize",e),window.addEventListener("load",e),e(),()=>{window.removeEventListener("resize",e),window.removeEventListener("load",e)}}),[n]),(0,i.useEffect)((()=>{if(n.current&&f<1){const e=n.current.getBoundingClientRect();o(e.left),s(e.top)}if(r.current&&f<1&&!p){const e=r.current.getBoundingClientRect();d(e.left),h(e.top),g(!0)}}),[f]),i.createElement(dn,null,t<.66&&i.createElement(i.Fragment,null,i.createElement(pn,null,i.createElement(ae,{ref:r,start:0,end:.18,pos:t,fromHorizontal:"0px",fromVertical:"0px",toHorizontal:(a-m)/1+0+"px",toVertical:(l-c)/1-5+"px"},i.createElement(V,{start:.44,end:.5,pos:t,from:1,to:0},i.createElement(ie,{start:0,end:.18,pos:t,from:8,to:1},i.createElement(bn,null,i.createElement(En,null,"\u20bf"))))),i.createElement(Pn,null,i.createElement(V,{start:0,end:.025,pos:t,from:.5,to:0},"Scroll to Advance"))),i.createElement(gn,null,"Running a bare-bones full node is a minimum requirement to keep the lights on for bitcoin".split(" ").map(((e,r,a)=>i.createElement(V,{key:`${e}-${r}`,start:.1/a.length*r*2,end:.1/a.length*(r+1)*2,pos:t,from:0,to:1},i.createElement(V,{start:2*(.1/a.length*r+.1),end:2*(.1/a.length*(r+1)+.1),pos:t,from:1,to:0},"bitcoin"===e?i.createElement(bn,{ref:n},i.createElement(En,{style:{opacity:0}},"\u20bf"),"itcoin"):i.createElement(bn,null,e)))))),i.createElement(fn,null,i.createElement(V,{start:.5,end:.56,pos:t,from:0,to:1},i.createElement(V,{start:.66,end:.7,pos:t,from:1,to:0},i.createElement(bn,null,"Since when were maximalists all about minimums?"))))),t>.66&&i.createElement(un,null,i.createElement(ae,{start:.66,end:1,pos:t,fromHorizontal:"0px",fromVertical:"100%",toHorizontal:"0px",toVertical:"50%"},i.createElement(ae,{start:1,end:2,pos:t,fromHorizontal:"0px",fromVertical:"0%",toHorizontal:"0px",toVertical:"100%"},i.createElement(wn,null))),i.createElement(ae,{start:.78,end:1,pos:t,fromHorizontal:"0px",fromVertical:"0%",toHorizontal:"0px",toVertical:"-34%"},i.createElement(ae,{start:1,end:2.47,pos:t,fromHorizontal:"0px",fromVertical:"0%",toHorizontal:"0px",toVertical:"100%"},i.createElement(xn,null))),i.createElement(ae,{start:.9,end:1,pos:t,fromHorizontal:"0px",fromVertical:"-100%",toHorizontal:"0px",toVertical:"-118%"},i.createElement(ae,{start:1,end:3.78,pos:t,fromHorizontal:"0px",fromVertical:"0%",toHorizontal:"0px",toVertical:"100%"},i.createElement(vn,null)))))},Zn=r.ZP.section`
  /* padding-top: 1px; */
`,zn=r.ZP.section`
  overflow-y: scroll;
  height: 100vh; 
`;function $n(){const e=(0,i.useRef)(null),[t,n]=(0,i.useState)(!1),r=()=>{/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)&&!document.fullscreenElement&&document.documentElement&&document.documentElement.requestFullscreen&&(document.documentElement.requestFullscreen(),n(!0))};return(0,i.useLayoutEffect)((()=>(e&&e.current&&window.addEventListener("scroll",r),()=>{e&&e.current&&window.removeEventListener("scroll",r),document.exitFullscreen&&document.exitFullscreen(),n(!1)})),[e]),i.createElement(i.Fragment,null,i.createElement(d,null),i.createElement(Zn,null,i.createElement(f,null),i.createElement(zn,{ref:e},i.createElement(mn,{refOuter:e,child:kn,height:"300vh",minPos:0,maxPos:1.5}),i.createElement(mn,{refOuter:e,child:pe,height:"200vh",minPos:-1.5,maxPos:1.2}),i.createElement(mn,{refOuter:e,child:be,height:"200vh",maxPos:1.5}),i.createElement(mn,{refOuter:e,child:Ae,height:"150vh",minPos:0,maxPos:1}),i.createElement(mn,{refOuter:e,child:Ne,height:"200vh",minPos:-.5,maxPos:2}),i.createElement(mn,{refOuter:e,child:Ke,height:"200vh",minPos:-2,maxPos:1.5}),i.createElement(mn,{refOuter:e,child:ot,height:"300vh",minPos:-.5,maxPos:1}),i.createElement(mn,{refOuter:e,child:Ht,height:"500vh",minPos:0,maxPos:1}),i.createElement(mn,{refOuter:e,child:B,height:"100vh",minPos:0,maxPos:0}),i.createElement(mn,{refOuter:e,child:an,height:"100vh",minPos:0,maxPos:0}),i.createElement(mn,{refOuter:e,child:te,height:"100vh",minPos:0,maxPos:0}),i.createElement(mn,{refOuter:e,child:pt,height:"100vh",minPos:0,maxPos:0}),i.createElement(mn,{refOuter:e,child:k,height:"100vh",minPos:0,maxPos:0}),i.createElement(mn,{refOuter:e,child:Wt,height:"600vh",minPos:0,maxPos:1.2}),i.createElement(mn,{refOuter:e,child:X,height:"300vh",minPos:-.5,maxPos:1}))))}}}]);