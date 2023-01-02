"use strict";(self.webpackChunkhab_guide=self.webpackChunkhab_guide||[]).push([[5323],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="Start Here",l={unversionedId:"Introduction/intro",id:"Introduction/intro",title:"Start Here",description:"As of December 31, 2022, our chosen load balancer, Metal LB, has changed their",source:"@site/docs/Introduction/intro.md",sourceDirName:"Introduction",slug:"/Introduction/intro",permalink:"/hab-guide/docs/Introduction/intro",draft:!1,editUrl:"https://github.com/GildedPleb/hab-guide/edit/master/website/docs/Introduction/intro.md",tags:[],version:"current",lastUpdatedBy:"GildedPleb",lastUpdatedAt:1672648459,formattedLastUpdatedAt:"Jan 2, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/hab-guide/docs/category/introduction"},next:{title:"Target Audience",permalink:"/hab-guide/docs/Introduction/who"}},s={},u=[{value:"Build Your Own HAB Node",id:"build-your-own-hab-node",level:2},{value:"What Is It?",id:"what-is-it",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"start-here"},"Start Here"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"As of December 31, 2022, our chosen load balancer, Metal LB, has changed their\nAPI. As such, the guide, as written, will fail when attempting to install Metal\nLB."),(0,o.kt)("p",{parentName:"admonition"},"You can still use the guide, but you will need to make changes accordingly. You\nhave two ways forward:"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"Edit the Ansible scripts to alter the Metal LB deployment and get it working\nmanually, either by targeting releases below ",(0,o.kt)("inlineCode",{parentName:"li"},"13")," or by adding new resource\ndefinitions."),(0,o.kt)("li",{parentName:"ol"},"Replace Metal LB with something else.")),(0,o.kt)("p",{parentName:"admonition"},"Investigating this problem has revealed that the implementation of our load\nbalancer was not actually HA. This is not a problem as the cluster is not made\nto host incoming traffic like web requests. But it does present an opportunity\nto make this infrastructure HA in case HA is needed here in the future. We will\nbe pursuing a ",(0,o.kt)("a",{parentName:"p",href:"https://kube-vip.io/docs/usage/k3s/?query=k3s"},"solution")," in the\ncoming weeks and release a fix.")),(0,o.kt)("h2",{id:"build-your-own-hab-node"},"Build Your Own HAB Node"),(0,o.kt)("p",null,"In this tutorial we will be bootstrapping, from raw hardware, a Highly Available\nBitcoin Node."),(0,o.kt)("p",null,"We intend to do this by providing the technical code and tutorial walk-throughs\nto empower any journeyman node operator to turn any three or more computers, be\nthey Raspberry Pis, NUCs, or any single home computers, into one Highly\nAvailable Bitcoin node."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This project is very new, raw, and not battle tested yet. Under no circumstance\nshould this project defend Private Keys for real Bitcoin. Many of the best\npractices are yet to been discovered. And there are undoubtedly many bugs."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"! PROCEED WITH CAUTION !"))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"As per the warning, we ",(0,o.kt)("em",{parentName:"p"},"highly")," recommend reading the entire guide before doing\nanything.")),(0,o.kt)("h2",{id:"what-is-it"},"What Is It?"),(0,o.kt)("p",null,"A Highly Available Bitcoin node is a node that\u2014like the Bitcoin network\nitself\u2014is extremely hard to kill. To accomplish this, we will be engineering\naway as many single-points-of-failure as we can, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hard drive failures"),(0,o.kt)("li",{parentName:"ul"},"RAM failures"),(0,o.kt)("li",{parentName:"ul"},"Motherboard/AUX electronics failures"),(0,o.kt)("li",{parentName:"ul"},"Software Zero-days"),(0,o.kt)("li",{parentName:"ul"},"Supply chain co-option"),(0,o.kt)("li",{parentName:"ul"},"Etc.")),(0,o.kt)("p",null,"At the moment, this guide covers how to do this at home, from consumer parts\nsourced anywhere computers are sold."),(0,o.kt)("p",null,"It's going to be a journey, so make sure you have eaten a steak recently."))}c.isMDXComponent=!0}}]);