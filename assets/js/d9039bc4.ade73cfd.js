"use strict";(self.webpackChunkhab_guide=self.webpackChunkhab_guide||[]).push([[8339],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=l,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:l,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:1},o="Control Prep",s={unversionedId:"l2-k3s/control-prep",id:"l2-k3s/control-prep",title:"Control Prep",description:"As you can imagine, k8s can get outrageously complex. To deploy any application",source:"@site/docs/l2-k3s/control-prep.md",sourceDirName:"l2-k3s",slug:"/l2-k3s/control-prep",permalink:"/hab-guide/docs/l2-k3s/control-prep",draft:!1,editUrl:"https://github.com/GildedPleb/hab-guide/edit/master/website/docs/l2-k3s/control-prep.md",tags:[],version:"current",lastUpdatedBy:"GildedPleb",lastUpdatedAt:1672790655,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Layer 2 - K3s",permalink:"/hab-guide/docs/category/layer-2---k3s"},next:{title:"Stand-up Vanilla",permalink:"/hab-guide/docs/l2-k3s/standup-vanilla"}},i={},p=[{value:"Install Kubectl",id:"install-kubectl",level:2},{value:"Install Krew",id:"install-krew",level:2},{value:"Install Kube-ps1 (optional)",id:"install-kube-ps1-optional",level:2},{value:"Install Helm",id:"install-helm",level:2},{value:"What are <code>namespaces</code>?",id:"what-are-namespaces",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"control-prep"},"Control Prep"),(0,l.kt)("p",null,"As you can imagine, k8s can get outrageously complex. To deploy any application\non Kubernetes you may need a half dozen to a few hundred resource definitions,\nscripts, templates and all sorts of complication. This guide is not meant to be\na deep dive into Kubernetes\u2014heck, we've been working with it for years and at\ntimes only feel we have scratched the surface\u2014so we will be consolidating our\ninteractions with k3s as much as possible."),(0,l.kt)("p",null,"As such, to really make the most out of k3s, as novices, we need to have some\ntools installed first that will make our lives easier. Most importantly, we will\nbe using Helm\u2014the Kubernetes package manager\u2014to provide organization,\nseparations of concerns, and simplicity to Kubernetes. But, there are a handful\nof other tools that are must-haves."),(0,l.kt)("p",null,"We will now install all these tools on our local control computer, and get them\nset up appropriately."),(0,l.kt)("h2",{id:"install-kubectl"},"Install Kubectl"),(0,l.kt)("p",null,"Kubectl is how you control and interact with a Kubernetes cluster. Make sure you\nhave ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," installed on your local/control machine (it gets installed on the\nmaster node, but it's best to have locally, so you don't have to ssh into the\ncluster) ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/"},"Install"),"."),(0,l.kt)("p",null,"Once installed, its a great idea to enable\n",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/included/"},"bash/zsh completion")," though\nnot required."),(0,l.kt)("p",null,"You can make sure its working by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"% kubectl\nkubectl controls the Kubernetes cluster manager.\n\n Find more information at: https://kubernetes.io/docs/reference/kubectl/overview/\n\nBasic Commands (Beginner):\n  create        Create a resource from a file or from stdin\n...\n")),(0,l.kt)("h2",{id:"install-krew"},"Install Krew"),(0,l.kt)("p",null,"Krew is a plugin manager for Kubectl (yes, both Kubernetes and Kubectl have\ntheir ecosystem managers, did we mention that the Kubernetes landscape has ten\nof billions of funding behind it?). Krew makes life with Kubectl, and thus\nKubernetes, much better."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install Krew from\n",(0,l.kt)("a",{parentName:"p",href:"https://krew.sigs.k8s.io/docs/user-guide/setup/install/"},"here")," and make sure\nit's working by running:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'% kubectl krew\nkrew is the kubectl plugin manager.\nYou can invoke krew through kubectl: "kubectl krew [command]..."\n...\n')),(0,l.kt)("p",{parentName:"li"},"Once installed, poke around, you might find a plugin you find interesting.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"At this time, we only really recommend adding ",(0,l.kt)("inlineCode",{parentName:"p"},"ns")," which allows you to change\nnamespace via the command:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl ns bitcoin\n")),(0,l.kt)("p",{parentName:"li"},"This will deeply come in handy as without it, nearly every command will need\na namespace flag, which is cumbersome."),(0,l.kt)("p",{parentName:"li"},"To install:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl krew install ns\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Lastly, make sure you are good to go by running"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl krew update\n")))),(0,l.kt)("h2",{id:"install-kube-ps1-optional"},"Install Kube-ps1 (optional)"),(0,l.kt)("p",null,"Kube-ps1 puts your current namespace in the prompt of you terminal. When\ncombined with ",(0,l.kt)("inlineCode",{parentName:"p"},"ns")," installed above, it is the best way to use k8s (that we have\nseen, so far). Take it from us, being in the wrong namespace and/or context has\nkilled production websites in real time (and we know this, because we have\nmistakenly done it)."),(0,l.kt)("p",null,"Install from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jonmosco/kube-ps1"},"here")),(0,l.kt)("p",null,"You can edit it accordingly, but your command prompt should now look something\nlike this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"(\u2388|deafault:default) %\n")),(0,l.kt)("p",null,"The first ",(0,l.kt)("inlineCode",{parentName:"p"},"deafult")," is the context. If you had multiple clusters, like a test\ncluster and production cluster, that is where context comes in handy. We won't\nbe paying much attention to this at this time. The second ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," is the\nnamespace, which we will be utilizing, and which will affect where apps get\ninstalled."),(0,l.kt)("h2",{id:"install-helm"},"Install Helm"),(0,l.kt)("p",null,"Helm consolidates app deployments from a myriad of resources, definitions,\nvariables, and redundancies into single line install, update, and uninstall\nscripts. We will be using it to install and manage as much as we can.\n",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Install"),". Ansible will primarily use Helm\nat first, but we will use it directly once we get to Bitcoin."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"% helm\nThe Kubernetes package manager\n\nCommon actions for Helm:\n\n- helm search:    search for charts\n...\n")),(0,l.kt)("h2",{id:"what-are-namespaces"},"What are ",(0,l.kt)("inlineCode",{parentName:"h2"},"namespaces"),"?"),(0,l.kt)("p",null,"For a full definition, check out\n",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},"this article"),".\nFor our novice purposes, we can think of namespaces as folders which isolate\napps. Apps in k8s are generally not solitary programs, but a collection of\ncontainers, storage, pods, tasks and other resources, that all work together to\ndeliver a functional App. It is helpful to isolate these resources into\nnamespaces so that the cluster does not become overly cluttered with definitions\nand thus hard to navigate."),(0,l.kt)("p",null,"All set? Let's spin up K8s!"))}u.isMDXComponent=!0}}]);