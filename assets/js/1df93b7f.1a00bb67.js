"use strict";(self.webpackChunkhab_guide=self.webpackChunkhab_guide||[]).push([[3237],{1086:(e,t,n)=>{n.r(t),n.d(t,{default:()=>yn});var i=n(7294),r=n(9521),a=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},o=(0,r.iv)(s||(s=a(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"],["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"])));(0,r.vJ)(m||(m=a(["",""],["",""])),o);const l=o;var s,m;const d=({createGlobalStyle:r.vJ,...r.ZP}.createGlobalStyle)`

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
  * {
    box-sizing: border-box;
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
`,g=e=>i.createElement(p,{to:"/why"},i.createElement("img",{src:(0,h.Z)("/img/ionico.png")})),f=r.ZP.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: white;
  color: black;
`,u=r.ZP.div`
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
`,w=r.ZP.h1`
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
`,x=r.ZP.div`
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
`,v=r.ZP.div`
  flex: 1;
  position: relative;
  min-height: 45vh;
  margin-left: 1rem;
  margin-right: 1rem;
`,b=r.ZP.img`
  object-fit: contain;
  position: absolute;
  width: 100%;
  height: 100%;
`,y=r.ZP.img`
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
`,E=r.ZP.div`
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
`,Z=e=>{let{pos:t}=e;return i.createElement(f,null,i.createElement(u,null,i.createElement(w,null,"Aesthetic Option"),i.createElement(x,null,i.createElement(v,null,i.createElement(y,{src:(0,h.Z)("/img/feature_aesthetics_node.png")}),i.createElement(b,{src:(0,h.Z)("/img/feature_aesthetics.png")})),i.createElement(E,null,"A HAB Node could truly be an equivalent entrant in 24 Hour Le Mans. They are the best candidates for externally beautiful nodes, because they have the most robust internal enginering. HAB Nodes play the man."))))},k=r.ZP.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: black;
  color: white;
`,P=r.ZP.div`
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
`,z=r.ZP.h1`
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
`,$=r.ZP.div`
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
`,j=r.ZP.div`
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
`,H=r.ZP.img`
  object-fit: contain;
  position: absolute;
  width: 100%;
  height: 100%;
`,A=e=>{let{pos:t}=e;return i.createElement(k,null,i.createElement(P,null,i.createElement(z,null,"Induction Option",i.createElement(j,null,i.createElement(H,{src:(0,h.Z)("/img/feature_baptismal.png")}))),i.createElement($,null,"Today, K8s can still run on any entry-level consumer hardware which can run a modern linux distribution: RPis, SBCs, NUCs, etc. As such, it can allow a Bitcoin node to baptize nearly any idle compute or storage into the cluster, making all services more robust."),i.createElement($,null,"The grandfather of k8s was internally called \u201cBorg\u201d at Google, as it assimilated all. Inheriting this quality, HAB Nodes can scale budgets from 0 to anything and expand or contract compute and storage without downtime.")))},B=r.ZP.div.attrs((e=>{let{from:t,to:n,start:i,end:r,pos:a}=e;if(a||0===a){const e=n-t;if(0===e)return{style:{opacity:`${t}`}};const o=(a-i)/(r-i),l=e>=0?e*o:t-Math.abs(e*o);return{style:{opacity:`${a<i?t:a<r?l:n}`}}}return{style:{opacity:`${t}`}}}))`
  will-change: auto;
`,L=r.ZP.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  color: white;
  background: black;
`,T=r.iv`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`,O=r.iv`
  background: black;
  box-decoration-break: clone;
  box-shadow: 10px 0 0 black, -10px 0 0 black;
`,q=r.ZP.div`
  ${T};
  display: flex;
  justify-content: center;
  align-items: center;
`,_=r.ZP.div`
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
`,N=r.ZP.span`
  ${O};
`,S=r.ZP.div`
  ${T};
  display: flex;
  justify-content: left;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
`,I=r.ZP.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`,R=r.ZP.div`
  ${T};
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`,V=r.ZP.span`
  ${O};
  margin-bottom: 10px;
`,C=r.ZP.span`
  ${O};
  margin-bottom: 10px;
`,G=r.ZP.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 900;
  ${T}
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`,M=(0,r.ZP)(c.Z)`
  color: #f2a900;
`,F=e=>{let{pos:t}=e;return i.createElement(L,null,i.createElement(q,null,i.createElement(_,null,i.createElement(B,{start:0,end:.11,from:1,pos:t,to:0},i.createElement(N,null,"However...")))),i.createElement(S,null,i.createElement(B,{start:.11,end:.22,pos:t,from:0,to:1},i.createElement(B,{start:.22,end:.33,pos:t,from:1,to:0},i.createElement(G,null,i.createElement(I,{src:(0,h.Z)("/img/casestudy_white1.png")})))),i.createElement(B,{start:.22,end:.33,pos:t,from:0,to:1},i.createElement(B,{start:.33,end:.44,pos:t,from:1,to:0},i.createElement(G,null,i.createElement(I,{src:(0,h.Z)("/img/casestudy_orange.png")})))),i.createElement(B,{start:.33,end:.44,pos:t,from:0,to:1},i.createElement(B,{start:.44,end:.55,pos:t,from:1,to:0},i.createElement(G,null,i.createElement(I,{src:(0,h.Z)("/img/casestudy_blue.png")})))),i.createElement(B,{start:.44,end:.55,pos:t,from:0,to:1},i.createElement(B,{start:.55,end:.66,pos:t,from:1,to:0},i.createElement(G,null,i.createElement(I,{src:(0,h.Z)("/img/casestudy_yellow.png")})))),i.createElement(B,{start:.55,end:.66,pos:t,from:0,to:1},i.createElement(B,{start:.66,end:.77,pos:t,from:1,to:0},i.createElement(G,null,i.createElement(I,{src:(0,h.Z)("/img/casestudy_white2.png")})))),i.createElement(_,null,i.createElement(B,{start:.22,end:.33,from:0,pos:t,to:1},i.createElement(B,{start:.55,end:.66,pos:t,from:1,to:0},i.createElement(N,null,"No Highly Available Bitcoin Node will be the same.",i.createElement("br",null),i.createElement("br",null)," Each one is as individualized as its builder, modularized as its supply chain allows, and unique as its physical location.",i.createElement("br",null),i.createElement("br",null),"No other node will be like this proof of concept..."))))),i.createElement(R,null,i.createElement(G,null,i.createElement(B,{start:.66,end:.77,pos:t,from:0,to:1,style:{height:"100%",width:"100%"}},i.createElement(I,{src:(0,h.Z)("/img/fin_black.png")}))),i.createElement(_,null,i.createElement(B,{start:.77,end:.88,from:0,pos:t,to:1},i.createElement(V,null,"What will your HAB Node be like?")),i.createElement(B,{start:.88,end:1,from:0,pos:t,to:1},i.createElement(M,{to:"/why"},i.createElement(C,null,"\u27a4 A Case For HAB Nodes")),i.createElement(M,{to:"/how"},i.createElement("br",null),i.createElement(C,null,"\u27a4 How Does It Work?")),i.createElement(M,{to:"/poc"},i.createElement("br",null),i.createElement(C,null,"\u27a4 PoC Design and Specs")),i.createElement(M,{to:"docs/Introduction/intro"},i.createElement("br",null),i.createElement(C,null,"\u27a4 Build Your Own"))))))},D=r.ZP.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: white;
  color: black;
`,X=r.ZP.div`
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
`,Y=r.ZP.h1`
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
`,U=r.ZP.div`
  display: flex;
`,J=r.ZP.div`
  flex: 1;
  position: relative;
  min-height: 250px;
  display: flex;
  align-items: center;
`,K=r.ZP.img`
  object-fit: contain;
  position: absolute;
  width: 100%;
  height: 100%;
`,W=r.ZP.div`
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
`,Q=e=>{let{pos:t}=e;return i.createElement(D,null,i.createElement(X,null,i.createElement(Y,null,"H.A.L.X. Option"),i.createElement(U,null,i.createElement(J,null,i.createElement(K,{src:(0,h.Z)("/img/feature_HALX2.png")})),i.createElement(W,null,"Not only does high availability on layer 1 ensure layer X is more stable, HA at higher, self-hosted, p2p layers is predicated on highly available lower layers. Running multiple instances of Lightning from one Bitcoin instance, running on one computer, is not a HA Lightning Node. Only H.A.B.N. can enable H.A.L.X."))))},ee=r.ZP.div.attrs((e=>{let{from:t,to:n,start:i,end:r,pos:a}=e;if(a||0===a){const e=n-t;if(0===e)return{style:{transform:`scale(${t})`}};const o=(a-i)/(r-i),l=e>=0?t+e*o:t-Math.abs(e*o);return{style:{transform:`scale(${a<i?t:a<r?l:n})`}}}return{style:{transform:`scale(${t})`}}}))`
  will-change: auto;
`,te=r.ZP.div.attrs((e=>{let{fromHorizontal:t,fromVertical:n,toHorizontal:i,toVertical:r,start:a,end:o,pos:l}=e;if(l||0===l){const e=`calc(${t} - ${i})`,s=`calc(${n} - ${r})`,m=(l-a)/(o-a);return{style:{transform:`translate(${l<a?t:l<o?`calc(${i} + calc(${e} - calc(${e} * ${m})))`:i}, ${l<a?n:l<o?`calc(${r} + calc(${s} - calc(${s} * ${m})))`:r})`}}}return{style:{transform:`translate(${t}, ${n})`}}}))`
  will-change: auto;
`,ne=r.ZP.div`
  display: grid;
  height: 100vh;
`,ie=r.ZP.div`
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
`,re=r.ZP.div`
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
`,ae=r.ZP.div`
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
`,oe=r.ZP.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0px;
  top: 0px;
  box-shadow: inset 0px 0px 10px 10px white;
`,le=r.ZP.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vh;
`,se=r.ZP.img`
  object-fit: contain;
  position: absolute;
`,me=e=>{let{pos:t}=e;return i.createElement(ne,null,i.createElement(ie,null,i.createElement(re,null,"High Avalability (HA) is the process of eliminating as much downtime as possible in providing a remote service. The Bitcoin protocol is designed to be Highly Available:"),i.createElement(ae,null,i.createElement(te,{start:0,end:.33,fromHorizontal:"calc(-42px * .65)",fromVertical:"21vh",pos:t,toHorizontal:"0px",toVertical:"0px"},i.createElement(ee,{start:.33,end:.66,pos:t,from:.65,to:1.2},i.createElement(le,null,i.createElement(se,{src:(0,h.Z)("/img/white_paper2.png")})))),i.createElement(oe,null)),i.createElement(re,null,i.createElement(B,{start:.66,end:1,pos:t,from:0,to:1},"Although most nodes are not HA, meaning it is unlikely to persistently connect to one minimally run Bitcoin node, the incentives in Bitcoin as a whole ensure many nodes will always be available."))))},de=r.ZP.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: black;
  color: white;
`,ce=r.ZP.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`,he=r.ZP.div`
  ${ce};
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
`,pe=r.ZP.div`
  ${ce};
  height: 100vh;
  width: 100vw;
  position: absolute;
`,ge=r.ZP.div`
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
`,fe=r.ZP.div`
  height: 100vh;
  width: 100vw;
  background: ${e=>{let{pos:t}=e;return 0===t?"none":"white"}};
`,ue=e=>{let{pos:t}=e;return i.createElement(de,null,i.createElement(pe,null,i.createElement(B,{start:-1,end:0,pos:t,from:1,to:0},i.createElement(fe,{pos:t}))),i.createElement(he,null,i.createElement(ge,null,i.createElement(B,{start:.33,end:.66,pos:t,from:1,to:0},"And thank God the incentives work. Thermodynamics ensures creating HA services for any physical computing, including individual nodes, is a perennial problem.")),i.createElement(ge,null,i.createElement(B,{start:0,end:.33,pos:t,from:0,to:1},i.createElement(B,{start:.66,end:1,pos:t,from:1,to:0},"Over the decades, billions of dollars and millions of hours have been spent by nearly every major player in tech on research, development, and deployment of dually centralized and highly available computer systems."))),i.createElement(ge,null,i.createElement(B,{start:.33,end:.66,pos:t,from:0,to:1},"And yet computers still",i.createElement(te,{start:1.05,end:2.05,fromHorizontal:"0px",fromVertical:"0px",pos:t,toHorizontal:"0%",toVertical:"100vh",style:{display:"inline-block"}},i.createElement("div",{style:{display:"inline-block",marginLeft:"-10px",textIndent:"0"}},"fail"," ")," ")," ","all the time."))))},we=r.ZP.div`
  display: grid;
  height: 100vh;
`,xe=r.ZP.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`,ve=r.ZP.div`
  ${xe};
  height: 100vh;
  width: 100%;
  background: white;
  color: black;
  position: absolute;
  z-index: 10;
`,be=r.ZP.div`
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`,ye=r.ZP.img`
  height: 100%;
  width: 100%;

  object-fit: cover;
  position: absolute;
  object-position: center center;
`,Ee=r.ZP.div`
  ${xe};
  height: 100vh;
  width: 100%;
  color: white;
  z-index: 20;
  display: flex;
  justify-content: left;
  align-items: center;
  max-width: 60%;
  margin-left: 5%;
  @media (pointer: coarse) {
    max-width: 100%;
    margin-left: 0;
  }
`,Ze=r.ZP.div`
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
`,ke=r.ZP.span`
  background: white;
  color: black;
  box-decoration-break: clone;
  box-shadow: 10px 0 0 white, -10px 0 0 white;
`,Pe=(0,r.ZP)(c.Z)`
  color: #f2a900;
`,ze=e=>{let{pos:t}=e;return i.createElement(we,null,i.createElement(ve,null,i.createElement(be,null,i.createElement(ye,{src:(0,h.Z)("/img/google_prod_server.jpg")}))),i.createElement(Ee,null,i.createElement(Ze,null,i.createElement(B,{start:.3,end:1,pos:t,from:1,to:0},i.createElement(ke,null,"To solve this problem, in the late 90s, the prevailing wisdom was to only put critical infrastructure on top-of-the-line hardware. Google put this on its head by creating a software abstraction layer for server reliability, allowing their first production server,"," ",i.createElement(Pe,{to:"https://www.flickr.com/photos/jurvetson/157722937/"},"shown here"),", composed of cheap consumer hardware which was expected to fail, to be highly fault-tolerant.")))))},$e=r.ZP.div`
  display: grid;
  height: 100vh;
  width: 100vw;
`,je=r.ZP.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`,He=r.ZP.div`
  ${je};
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,Ae=r.ZP.div`
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
`,Be=r.ZP.div`
  ${je};
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
`,Te=e=>{let{pos:t}=e;return i.createElement($e,null,i.createElement(Be,null,i.createElement(B,{start:1,end:2,pos:t,from:0,to:1},i.createElement(Le,null))),i.createElement(He,null,i.createElement(Ae,null,i.createElement(B,{start:.5,end:1,pos:t,from:1,to:0},"Google continued to build upon this foundation, and did so in tandem with every one of its massive catalog of eligable products, providing them all, over the last 20+ years, as Highly Available.")),i.createElement(Ae,null,i.createElement(B,{start:0,end:.5,pos:t,from:0,to:1},i.createElement(B,{start:1.33,end:1.66,pos:t,from:1,to:0},"In the early twenty teens, wanting to integrate new container technology, and improve upon lessons learned, Google rebuilt this software as general purpose, and in 2015, released it as a free and open source project called Kubernetes, or k8s for short.")))))},Oe=r.ZP.div.attrs((e=>{let{fromLeft:t,fromTop:n,toLeft:i,toTop:r,start:a,end:o,pos:l}=e;if(l||0===l){const e=`calc(${t} - ${i})`,s=`calc(${n} - ${r})`,m=(l-a)/(o-a);return{style:{left:`${l<a?t:l<o?`calc(${i} + calc(${e} - calc(${e} * ${m})))`:i}`,top:`${l<a?n:l<o?`calc(${r} + calc(${s} - calc(${s} * ${m})))`:r}`}}}return{style:{top:n,left:t}}}))`
  will-change: auto;
  position: absolute;
`,qe=r.ZP.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: white;
  color: black;
`,_e=r.ZP.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`,Ne=r.ZP.div`
  ${_e};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
`,Se=r.ZP.div`
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
`,Ie=r.ZP.span`
  background: white;
  color: black;
  box-decoration-break: clone;
  box-shadow: 10px 0 0 white, -10px 0 0 white;
`,Re=r.ZP.div`
  ${_e};
  position: absolute;
  display: ${e=>{let{pos:t}=e;return t&&t<.35?"none":"flex"}};
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`,Ve=r.ZP.div`
  ${_e};
  height: 100vh;
  width: 100vw;
  position: absolute;
`,Ce=r.ZP.div`
  height: 20vh;
  width: 20vh;
  position: fixed;
  top: calc(15vh);
  left: calc(50% - 10vh);
`,Ge=r.ZP.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`,Me=r.ZP.div`
  font-family: "Ubuntu", sans-serif;
  width: 100vw;
  text-align: center;
  position: fixed;
  top: 25vh;
  left: 0;
  font-size: 5vh;
`,Fe=(0,r.ZP)(c.Z)`
  color: #f2a900;
`,De=e=>{let{pos:t}=e;return i.createElement(qe,null,i.createElement(Ve,null,i.createElement(B,{start:-1.5,end:-1,pos:t,from:0,to:1},i.createElement(Ce,null,i.createElement(ee,{start:-1,end:0,pos:t,from:1,to:.8,style:{height:"100%",width:"100%"}},i.createElement(Oe,{start:-1,end:0,fromLeft:"0px",fromTop:"0px",pos:t,toLeft:"0px",toTop:"-10vh",style:{height:"100%",width:"100%"}},i.createElement(Ge,{src:(0,h.Z)("/img/k8s_logo.png")}))))),i.createElement(B,{start:-.25,end:0,pos:t,from:0,to:1},i.createElement(Me,null,"kubernetes"))),i.createElement(Ne,null,i.createElement(Se,null,i.createElement(B,{start:0,end:.35,pos:t,from:1,to:0},i.createElement(Ie,null,"Over"," ",i.createElement(Fe,{to:"https://github.com/kubernetes/kubernetes"},"100,000 commits"),", thousands of contributors, and"," ",i.createElement(Fe,{to:"https://landscape.cncf.io/card-mode?grouping=no&sort=amount"},"billions")," ","in funding later, k8s can orchestrate the smallest IoT clusters to the biggest server farms on earth."," ",i.createElement(Fe,{to:"https://k8s.devstats.cncf.io/d/9/companies-table?orgId=1"},"And does"),". It is no stretch to assume everyone online, unknowingly, depends on it every day.")))),i.createElement(Re,{pos:t},i.createElement(Se,null,i.createElement(B,{start:.35,end:.7,pos:t,from:0,to:1},i.createElement(B,{start:.8,end:1,pos:t,from:1,to:0},i.createElement(Ie,null,"Today, k8s is the market leader for companies and institutions worldwide which rely on highly available infrastructure. It could easily be argued that it is the most important piece of engineering Google ever created, as it defends, in total,"," ",i.createElement(Fe,{to:"https://enlyft.com/tech/products/kubernetes"},"trillions in value"),"."))))))},Xe=r.ZP.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: black;
  color: white;
`,Ye=r.ZP.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`,Ue=r.ZP.div`
  ${Ye};
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
`,Je=r.ZP.div`
  ${Ye};
  height: 100vh;
  width: 100vw;
  position: absolute;
  display: ${e=>{let{pos:t}=e;return t&&t>0?"none":"block"}};
`,Ke=r.ZP.div`
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
`,We=r.ZP.div`
  height: 100vh;
  width: 100vw;
  background: ${e=>{let{pos:t}=e;return 0===t?"none":"white"}};
`,Qe=r.ZP.div`
  ${Ye};
  display: ${e=>{let{pos:t}=e;return t&&t<.15?"none":"flex"}};

  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
`,et=r.ZP.div`
  text-align: center;
  font-size: 1.9rem;
  line-height: 3rem;
  background: black;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
`,tt=r.ZP.div`
  ${Ye};
  display: ${e=>{let{pos:t}=e;return t&&t<.15?"none":"flex"}};

  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
`,nt=r.ZP.a`
  color: #f2a900;
`,it=e=>{let{pos:t}=e;return i.createElement(Xe,null,i.createElement(Je,{pos:t},i.createElement(B,{start:-.5,end:0,pos:t,from:1,to:0},i.createElement(We,{pos:t}))),i.createElement(Ue,null,i.createElement(Ke,null,i.createElement(B,{start:0,end:.15,pos:t,from:1,to:0},"As the Bitcoin ecosystem grows with higher layers, base layer node architecture will increasingly need to reliably support ever-expanding, self-hosted, p2p apps, services, marketplaces, and income streams.")),i.createElement(Ke,null,i.createElement(B,{start:0,end:.15,pos:t,from:1,to:0},'Indeed, for some nodes, downtime already means loses. And if it\u2019s a Raspberry Pi node with a bricked hard drive, downtime means loses for weeks, or having to trust the infamous "Trusted Third Party", which will forever be a problem with'," ",i.createElement(nt,{href:" https://medium.com/breez-technology/introducing-lightning-service-providers-fe9fb1665d5f"},"LSPs"),"."))),i.createElement(Qe,{pos:t},i.createElement(Ke,null,i.createElement(B,{start:.15,end:.3,pos:t,from:0,to:1},i.createElement(B,{start:.55,end:.7,pos:t,from:1,to:0},"Honey Badger is getting thirsty..."))),i.createElement(Ke,null,i.createElement(B,{start:.3,end:.45,pos:t,from:0,to:1},i.createElement(B,{start:.55,end:.7,pos:t,from:1,to:0},"...and the wider tech industry has been spending the last few decades building, testing, and actively deploying, in defense of trillions in value, the very solution to quench that thirst.")))),i.createElement(tt,{pos:t},i.createElement(B,{start:.7,end:.85,pos:t,from:0,to:1},i.createElement(et,null,"Your Bitcoin Node")),i.createElement(B,{start:.85,end:1,pos:t,from:0,to:1},i.createElement(et,null,"Highly Available"))))},rt=r.ZP.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: rgb(203, 34, 49);
  color: black;
`,at=r.ZP.div`
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
`,ot=r.ZP.h1`
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
`,lt=r.ZP.div`
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
`,st=r.ZP.div`
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
`,mt=r.ZP.img`
  object-fit: contain;
  position: absolute;
  width: 100%;
  height: 100%;
`,dt=e=>{let{pos:t}=e;return i.createElement(rt,null,i.createElement(at,null,i.createElement(ot,null,"Hydra Option",i.createElement(st,null,i.createElement(mt,{src:(0,h.Z)("/img/feature_hydra2.png")}))),i.createElement(lt,null,"A HAB node accounts for bizarre and/or unlikely attacks. Designed correctly, it is decomposable into individual, self-sufficeint nodes, making it trivial to change from one to many nodes, or to slice off one or many parts, without taking down the cluster."),i.createElement(lt,null,"Potential scenarios include: front-running supply chain collapse, diversifying location before foreseen kinetic attack, bootstrapping upon internet co-option, \u201cVersion\u201d signalling sybil attack resistance, etc.")))},ct=r.ZP.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: white;
  color: black;
`,ht=r.iv`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`,pt=r.ZP.div`
  ${ht};
  position: absolute;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`,gt=r.ZP.div`
  ${ht};
  position: relative;
`,ft=r.ZP.h1`
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
`,ut=r.ZP.div`
  ${ht};
  position: absolute;
`,wt=r.iv`
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
  }
  padding-left: 10px;
  padding-right: 10px;
`,xt=r.ZP.span`
  background: white;
  color: black;
  box-decoration-break: clone;
  box-shadow: 10px 0 0 white, -10px 0 0 white;
`,vt=r.ZP.div`
  ${wt};
  text-align: left;
`,bt=r.ZP.div`
  ${ht};
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
`,yt=r.ZP.div`
  ${ht};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
`,Et=r.ZP.div`
  ${wt};
  text-align: right;
  @media (pointer: coarse) {
    text-align: left;
  }
  align-self: flex-end;
  @media (pointer: coarse) and (orientation: landscape) {
    transform: translate(0px, 30px);
  }
`,Zt=r.ZP.div`
  text-align: center;
  font-size: 1.9rem;
  line-height: 3rem;
  background: black;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
`,kt=r.ZP.img``,Pt=(0,r.ZP)(kt)`
  object-fit: contain;
  @media (orientation: landscape) {
    object-fit: cover;
  }
`,zt=e=>{let{pos:t}=e;return i.createElement(ct,null,i.createElement(pt,null,i.createElement(Pt,{src:(0,h.Z)("/img/intro_reveal.png")})),i.createElement(gt,null,i.createElement(te,{start:0,end:.25,fromHorizontal:"0%",fromVertical:"0%",pos:t,toHorizontal:"0%",toVertical:"-100vh"},i.createElement(ft,null,"No Average Node"))),i.createElement(ut,null,i.createElement(vt,null,i.createElement(te,{start:0,end:.75,fromHorizontal:"0%",fromVertical:"110vh",pos:t,toHorizontal:"0%",toVertical:"-190vh"},i.createElement(xt,null,"This is a photographed-in-operation, Highly Available Bitcoin node. It represents the next phase of responsible node operation"," ",i.createElement("span",{style:{fontStyle:"italic"}},"for everyone"),". ",i.createElement("br",null)," ",i.createElement("br",null)," Incrementally built from almost any consumer-grade electronics and automation software, a HAB Node is increasingly easy to set up. And the orchestration brilliance of",i.createElement(Pt,{style:{transform:"scale(.95) translate(7px, 17px)"},width:200,height:50,src:(0,h.Z)("/img/k8s.png")})," ","means it stays up.")))),i.createElement(bt,null,i.createElement(Et,null,i.createElement(te,{start:.25,end:1,fromHorizontal:"0%",fromVertical:"120vh",pos:t,toHorizontal:"0%",toVertical:"-180vh"},i.createElement(xt,null,"Only HAB Nodes eliminate the most Single Points of Failure, removing hardware, supply chain, internet provider, power source, Bitcoin version, and geographic chokepoints. All while providing a litany of world class HA infrastructure, like improved privacy, security, and up-time.")))),i.createElement(yt,null,i.createElement(B,{start:.75,end:.9,pos:t,from:0,to:1},i.createElement(Zt,null,"HAB Nodes are")),i.createElement(B,{start:.9,end:1,pos:t,from:0,to:1},i.createElement(Zt,null,"Optionality"))))},$t=r.ZP.div.attrs((e=>{let{from:t,to:n,start:i,end:r,pos:a,horizontal:o=!1}=e;if(a||0===a){const e=t-n,l=a<i?t:a<r?n+e-e*((a-i)/(r-i)):n;return{style:{clipPath:`inset(${o?l:0} ${o?0:l}% ${o?l:0} ${o?0:l}%)`}}}return{style:{clipPath:`inset(0 ${t}% 0 ${t}%)`}}}))`
  will-change: auto;
`,jt=r.ZP.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: black;
  color: white;
`,Ht=r.ZP.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`,At=r.ZP.div`
  ${Ht};
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
`,Bt=r.ZP.div`
  ${Ht};
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
`,Tt=r.ZP.div`
  height: 100vh;
  width: 100vw;
  background: ${e=>{let{pos:t}=e;return 0===t?"none":"white"}};
`,Ot=r.ZP.div`
  ${Ht};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
`,qt=r.ZP.div`
  text-align: center;
  font-size: 1.9rem;
  line-height: 3rem;
  color: black;
  padding-left: 10px;
  padding-right: 10px;
`,_t=r.ZP.div`
  ${Ht};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
`,Nt=r.ZP.div`
  place-self: center;
  display: grid;
  gap: 0 10px;
  width: 100%;
`,St=r.ZP.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`,It=r.ZP.div`
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  font-size: 1.9rem;
  line-height: 3rem;
  color: black;
`,Rt=r.ZP.div`
  ${Ht};
  height: 110vh;
`,Vt=r.ZP.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`,Ct=r.ZP.video`
  object-fit: cover;
  height: 100%;
  width: 100%;
`,Gt=(0,r.ZP)(Ht)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0 10px;
  padding: 10%;
  max-width: 800px;
  position: absolute;
  color: black;
`,Mt=r.ZP.span`
  text-align: center;
  font-size: 1.9rem;
  line-height: 3rem;
`,Ft=r.F4`
from {
  text-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 8px #fff, 0 0 10px #f2a900, 0 0 15px #f2a900,
    0 0 25px #f2a900, 0 0 80px #f2a900;
  }
  to {
    text-shadow: 0 0 1px #fff, 0 0 3px #fff, 0 0 5px #f2a900, 0 0 10px #f2a900,
    0 0 20px #f2a900;
  }
`,Dt=r.ZP.span`
  display: inline-block;
  color: ${e=>{let{pos:t}=e;return t&&t>.535?"#f2a900":"black"}};
  ${e=>{let{pos:t}=e;return t&&t>.535?r.iv`
          animation: ${Ft} 2s ease-in-out infinite alternate;
        `:""}}
  text-indent: 0;
`,Xt=e=>{let{pos:t}=e;return i.createElement(jt,null,i.createElement(At,null,i.createElement(Lt,null,i.createElement(B,{start:0,end:.08,pos:t,from:1,to:0},"So, since when were maximalists all about node minimalism?"))),i.createElement(Ot,null,i.createElement(Lt,null,i.createElement(B,{start:.08,end:.16,pos:t,from:0,to:1},"Since the block size wars, where it was revealed that any more liberal a stance than keeping block size as low as possible, for as long as possible while scaling Bitcoin, might be a centralizing force of evil.")),i.createElement(Lt,null,i.createElement(B,{start:.16,end:.24,pos:t,from:0,to:1},"Years on from winning these wars, and preserving zero-cost-to-entry node architecture\u2014upon which all Hydra enabled HAB Nodes are explicitly reliant\u2014node minimalism remains just as important today as it ever was to ensure the lights stay on for Bitcoin."))),i.createElement(Bt,null,i.createElement(B,{start:.24,end:.32,pos:t,from:0,to:1},i.createElement(Tt,{pos:t}))),i.createElement(Gt,null,"But we are not here to merely keep the lights on, we are here to re-light civilization".split(" ").map(((e,n,r)=>i.createElement(B,{key:`${e}-${n}`,start:.1/r.length*n*2+.32,end:.1/r.length*(n+1)*2+.32,pos:t,from:0,to:1},i.createElement(B,{start:.54,end:.62,pos:t,from:1,to:0},"civilization"===e&&i.createElement(Mt,null,i.createElement(Dt,{pos:t},e)," "),"civilization"!==e&&i.createElement(Mt,null,e," ")))))),i.createElement(_t,null,i.createElement(ee,{start:.75,end:1,pos:t,from:1,to:1.25},i.createElement(B,{start:.62,end:.7,pos:t,from:0,to:1},i.createElement(qt,null,"Your Bitcoin Node")),i.createElement(Nt,null,"Composable Resilient Serene Distinguished Enduring Inimitable Tenacious Maximized Decentralized Fault-tolerant Highly_Available".split(" ").map(((e,n,r)=>i.createElement(St,{key:`${e}-${n}`},i.createElement(B,{key:`${e}-${n}`,start:.2/r.length*n+.7,end:.2/r.length*(n+1)+.7,pos:t,from:0,to:1},i.createElement(B,{start:.2/r.length*n+.2/r.length+.7,end:.2/r.length*(n+1)+.2/r.length+.7,pos:t,from:1,to:n===r.length-1?1:0},i.createElement(It,null,e.includes("_")?e.replace("_"," "):e))))))))),i.createElement(Rt,null,i.createElement($t,{start:.925,end:1,from:50,to:0,pos:t},i.createElement(Vt,null,i.createElement(Ct,{autoPlay:!0,loop:!0,muted:!0},i.createElement("source",{src:"blue-node.mp4",type:"video/mp4"}))))))},Yt=r.ZP.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: #f2a900;
  color: black;
`,Ut=r.ZP.div`
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
`,Jt=r.ZP.h1`
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
`,Kt=r.ZP.div`
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
`,Wt=r.ZP.div`
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
`,Qt=r.ZP.img`
  object-fit: contain;
  position: absolute;
  width: 100%;
  height: 100%;
`,en=e=>{let{pos:t}=e;return i.createElement(Yt,null,i.createElement(Ut,null,i.createElement(Jt,null,"Sovereign Option",i.createElement(Wt,null,i.createElement(Qt,{src:(0,h.Z)("/img/feature_soverign2.png")}))),i.createElement(Kt,null,"Arbitrary services can be added to the cluster, including hooks, repository mirroring, and any other infrastructure. A HAB Node can thus operate as GitHub, Docker Hub, and a build server, hardening it against middle man failures from any of the above. All self-hosted and highly available."),i.createElement(Kt,null,"Under such a setup, for instance, a node would be able to take full ownership of the entire Bitcoin code pipeline, every dependency, and all code needed to do this.")))},tn=r.ZP.div`
  height: ${e=>{let{height:t}=e;return t}};
  position: relative;
`,nn=r.ZP.div`
  position: sticky;
  top: 0;
  height: 100vh;
`;const rn=function(e){let{refOuter:t,child:n,height:r="300vh"}=e;const a=(0,i.useRef)(null),[o,l]=(0,i.useState)(null);function s(e){if(null!==a.current&&null!==e.target){const t=e.target.getBoundingClientRect(),n=a.current.getBoundingClientRect(),i=t.y-n.y,r=t.height,o=n.height-r;l(i/(o>0?o:r+(i<0?0:1)))}}return(0,i.useEffect)((()=>{const e=t?.current;return e?.addEventListener("scroll",s),()=>e?.removeEventListener("scroll",s)}),[t]),i.createElement(tn,{height:r,ref:a},i.createElement(nn,null,n({pos:o})))},an=r.ZP.div`
  display: grid;
  height: 100vh;
`,on=r.ZP.div`
  place-self: center;
  grid-column: 1;
  grid-row: 1;
`,ln=r.iv`
  display: flex;
  flex-wrap: wrap;
  gap: 0 10px;
`,sn=(0,r.ZP)(on)`
  ${ln}
  z-index: 100;
`,mn=(0,r.ZP)(on)`
  ${ln}
  padding: 10%;
  max-width: 800px;
  justify-content: center;
`,dn=(0,r.ZP)(on)`
  ${ln}
  padding: 10%;
  /* justify-content: center; */
  text-align: center;
`,cn=(0,r.ZP)(on)`
  width: 100%;
  height: 100%;
`,hn=r.ZP.div`
  width: 100vw;
  height: 100vh;
  background: #f2a900;
`,pn=r.ZP.div`
  width: 100vw;
  height: 100vh;
  background: white;
`,gn=r.ZP.div`
  width: 100vw;
  height: 100vh;
  background: rgb(203, 34, 49);
`,fn=r.ZP.span`
  text-align: center;
  font-size: 1.9rem;
  line-height: 3rem;
`,un=r.F4`
from {
  text-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 8px #fff, 0 0 10px #f2a900, 0 0 15px #f2a900,
    0 0 25px #f2a900, 0 0 80px #f2a900;
  }
  to {
    text-shadow: 0 0 1px #fff, 0 0 3px #fff, 0 0 5px #f2a900, 0 0 10px #f2a900,
    0 0 20px #f2a900;
  }
`,wn=r.ZP.span`
  display: inline-block;
  color: #f2a900;
  transform: rotate(14deg);
  animation: ${un} 2s ease-in-out infinite alternate;
`,xn=r.ZP.div`
  transform: translate(0, 40vh);
`,vn=e=>{let{pos:t}=e;const n=(0,i.useRef)(null),[r,a]=(0,i.useState)(0),[o,l]=(0,i.useState)(0),s=Math.round(t||0);return(0,i.useEffect)((()=>{const e=()=>{if(n.current){const e=n.current.getBoundingClientRect();a(e.left),l(e.top)}};return e(),window.addEventListener("resize",e),window.addEventListener("load",e),e(),()=>{window.removeEventListener("resize",e),window.removeEventListener("load",e)}}),[n]),(0,i.useEffect)((()=>{if(n.current&&s<1){const e=n.current.getBoundingClientRect();a(e.left),l(e.top)}}),[s]),i.createElement(an,null,i.createElement(sn,null,i.createElement(Oe,{start:0,end:.18,fromLeft:"49%",fromTop:"49%",pos:t,toLeft:r-1+"px",toTop:o-9+"px"},i.createElement(B,{start:.44,end:.5,pos:t,from:1,to:0},i.createElement(ee,{start:0,end:.18,pos:t,from:8,to:1},i.createElement(fn,null,i.createElement(wn,null,"\u20bf"))))),i.createElement(xn,null,i.createElement(B,{start:0,end:.025,pos:t,from:.5,to:0},"Scroll to Advance"))),i.createElement(mn,null,"Running a bare-bones full node is a minimum requirement to keep the lights on for bitcoin".split(" ").map(((e,r,a)=>i.createElement(B,{key:`${e}-${r}`,start:.1/a.length*r*2,end:.1/a.length*(r+1)*2,pos:t,from:0,to:1},i.createElement(B,{start:2*(.1/a.length*r+.1),end:2*(.1/a.length*(r+1)+.1),pos:t,from:1,to:0},"bitcoin"===e?i.createElement(fn,{ref:n},i.createElement(wn,{style:{opacity:0}},"\u20bf"),"itcoin"):i.createElement(fn,null,e)))))),i.createElement(dn,null,i.createElement(B,{start:.5,end:.56,pos:t,from:0,to:1},i.createElement(B,{start:.66,end:.7,pos:t,from:1,to:0},i.createElement(fn,null,"Since when were maximalists all about minimums?")))),i.createElement(cn,null,i.createElement(Oe,{start:.66,end:1,fromLeft:"0px",fromTop:"100%",pos:t,toLeft:"0px",toTop:"50%"},i.createElement(Oe,{start:1,end:2,fromLeft:"0px",fromTop:"0px",pos:t,toLeft:"0px",toTop:"100vh"},i.createElement(hn,null))),i.createElement(Oe,{start:.78,end:1,fromLeft:"0px",fromTop:"100%",pos:t,toLeft:"0px",toTop:"66%"},i.createElement(Oe,{start:1,end:2.47,fromLeft:"0px",fromTop:"0px",pos:t,toLeft:"0px",toTop:"100vh"},i.createElement(pn,null))),i.createElement(Oe,{start:.9,end:1,fromLeft:"0px",fromTop:"100%",pos:t,toLeft:"0px",toTop:"82%"},i.createElement(Oe,{start:1,end:3.78,fromLeft:"0px",fromTop:"0px",pos:t,toLeft:"0px",toTop:"100vh"},i.createElement(gn,null)))))},bn=r.ZP.section`
  overflow-y: scroll;
  height: 100vh;
`;function yn(){const e=(0,i.useRef)(null);return i.createElement(i.Fragment,null,i.createElement(d,null),i.createElement("div",null,i.createElement(g,null),i.createElement(bn,{ref:e},i.createElement(rn,{refOuter:e,child:vn,height:"300vh"}),i.createElement(rn,{refOuter:e,child:me,height:"200vh"}),i.createElement(rn,{refOuter:e,child:ue,height:"200vh"}),i.createElement(rn,{refOuter:e,child:ze,height:"150vh"}),i.createElement(rn,{refOuter:e,child:Te,height:"200vh"}),i.createElement(rn,{refOuter:e,child:De,height:"200vh"}),i.createElement(rn,{refOuter:e,child:it,height:"300vh"}),i.createElement(rn,{refOuter:e,child:zt,height:"500vh"}),i.createElement(rn,{refOuter:e,child:A,height:"100vh"}),i.createElement(rn,{refOuter:e,child:en,height:"100vh"}),i.createElement(rn,{refOuter:e,child:Q,height:"100vh"}),i.createElement(rn,{refOuter:e,child:dt,height:"100vh"}),i.createElement(rn,{refOuter:e,child:Z,height:"100vh"}),i.createElement(rn,{refOuter:e,child:Xt,height:"600vh"}),i.createElement(rn,{refOuter:e,child:F,height:"300vh"}))))}}}]);