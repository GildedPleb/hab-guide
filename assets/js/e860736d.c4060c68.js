"use strict";(self.webpackChunkhab_guide=self.webpackChunkhab_guide||[]).push([[3048],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=h(n),p=s,u=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:s,o[1]=r;for(var h=2;h<i;h++)o[h]=n[h];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var a=n(7462),s=(n(7294),n(3905));const i={sidebar_position:5},o="Ansible",r={unversionedId:"l1-hosts/ansible",id:"l1-hosts/ansible",title:"Ansible",description:'The word "ansible" comes from 1960s',source:"@site/docs/l1-hosts/ansible.md",sourceDirName:"l1-hosts",slug:"/l1-hosts/ansible",permalink:"/hab-guide/docs/l1-hosts/ansible",draft:!1,editUrl:"https://github.com/GildedPleb/hab-guide/edit/master/docs/l1-hosts/ansible.md",tags:[],version:"current",lastUpdatedBy:"GildedPleb",lastUpdatedAt:1674372782,formattedLastUpdatedAt:"Jan 22, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Host Naming",permalink:"/hab-guide/docs/l1-hosts/host-naming"},next:{title:"Stand-up Raw Hosts",permalink:"/hab-guide/docs/l1-hosts/networking"}},l={},h=[{value:"Ansible Config",id:"ansible-config",level:2},{value:"Visually Assert Config Is Correct",id:"visually-assert-config-is-correct",level:3},{value:"Alter Config",id:"alter-config",level:3},{value:"First Command",id:"first-command",level:2},{value:"Run It",id:"run-it",level:2},{value:"What is Ansible Doing Here?",id:"what-is-ansible-doing-here",level:2}],c={toc:h};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"ansible"},"Ansible"),(0,s.kt)("p",null,'The word "ansible" ',(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Ansible"},"comes from")," 1960s\nsci-fi for a device which can communicate faster than the speed of light over\nunlimited distances. Though Ansible, the software, certainly does not move at\nfaster than light speed, if you have ever provisioned multiple computers at the\nsame time, Ansible fully lives up to the namesake."),(0,s.kt)("p",null,"Ansible is a suite of open source software tools for configuring remote systems\nvia the\n",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Infrastructure_as_code"},"Infrastructure as Code"),'\nparadigm. Or, rather, this is a fancy way of saying "it\'s a program that runs\nscripts on other machines and offers certain guarantees when doing so". One of\nthe big guarantees is idempotence, which you just saw in\n',(0,s.kt)("a",{parentName:"p",href:"/docs/l1-hosts/control-prep#indempotent-ness"},"Control Prep"),". The basic upside\nof Ansible is that you can use code to define the state of a machine, and that\ncode can be applied to many machines. As such, you only need to execute one\ncommand one time, and it can completely change the state of multiple machines."),(0,s.kt)("p",null,"Generally speaking, Ansible works by ssh-ing into a remote host, and begins\nexecuting commands, such as, ",(0,s.kt)("inlineCode",{parentName:"p"},"copy a file to the host"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"create a new user"),",\n",(0,s.kt)("inlineCode",{parentName:"p"},"close this port"),", etc."),(0,s.kt)("admonition",{title:"Warning: READ THE CODE BEFORE EXECUTION",type:"warning"},(0,s.kt)("p",{parentName:"admonition"},"Ansible is capable of executing ",(0,s.kt)("strong",{parentName:"p"},"ANY")," arbitrary code on ",(0,s.kt)("strong",{parentName:"p"},"ANY")," host in your\nnetwork that it can log into. As such, one should ",(0,s.kt)("em",{parentName:"p"},"always")," read the code to be\nexecuted before running an Ansible command. Luckily for us, it is also a part of\nAnsible framework to explicitly describe, in English, every command to be\nexecuted, and print out that description when it is executing.")),(0,s.kt)("h2",{id:"ansible-config"},"Ansible Config"),(0,s.kt)("p",null,"Because of the above warning, before we run any command, we should be familiar\nwith the config file we will be using for Ansible. It is in the root directory\nof the ",(0,s.kt)("inlineCode",{parentName:"p"},"gildedpleb/hab-plays")," repo. Navigate to where you cloned that repo now.\nYou will need to be in the root of that directly for ALL Ansible commands in\nthis guide. If you simply cloned it earlier and have not moved directories in\nyour terminal, you should be able to get there with:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd hab-plays\n")),(0,s.kt)("p",null,"Let's take a look at the config, it should match this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="hab-plays/ansible.cfg"',title:'"hab-plays/ansible.cfg"'},"[defaults]\ninventory = ~/.HAB/inventory/hosts                    ; Location of the hosts file we will use\nhost_key_checking = False                             ; This affects ~.ssh/known_hosts and helps aleviate erronious warnings when on a LAN network with DNS resolved hosts\nvault_password_file = ~/.HAB/.ansible_vault_access    ; Location of the password file we created already\nforks = 7                                             ; The number of concurent threads that can run at the same time\n\ngathering = smart                                     ; Reduces the amount of fact gathering durring plays that contact the same host more than once\nfact_caching = jsonfile                               ; The file type of the fact gathering cache\nfact_caching_connection = ~/.HAB/.facts_cache         ; The location of that cache\n\n# two hours timeout\nfact_caching_timeout = 7200                           ; The expiration of that fact gathering cache\n")),(0,s.kt)("h3",{id:"visually-assert-config-is-correct"},"Visually Assert Config Is Correct"),(0,s.kt)("p",null,"To make sure everything is\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/latest/reference_appendices/config.html#avoiding-security-risks-with-ansible-cfg-in-the-current-directory"},"in working order"),",\nlet's ask Ansible to dump whatever it thinks the current config is, and it\nshould match the above:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-config dump --only-changed\n")),(0,s.kt)("p",null,"You should see the following, and it should match the above, no less and no\nmore:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"CACHE_PLUGIN(/Users/<YOU>/<PATH_TO>/hab-plays/ansible.cfg) = jsonfile\nCACHE_PLUGIN_CONNECTION(/Users/<YOU>/<PATH_TO>/hab-plays/ansible.cfg) = ~/.HAB/.facts_cache\nCACHE_PLUGIN_TIMEOUT(/Users/<YOU>/<PATH_TO>/hab-plays/ansible.cfg) = 7200\nDEFAULT_FORKS(/Users/<YOU>/<PATH_TO>/hab-plays/ansible.cfg) = 7\nDEFAULT_GATHERING(/Users/<YOU>/<PATH_TO>/hab-plays/ansible.cfg) = smart\nDEFAULT_HOST_LIST(/Users/<YOU>/<PATH_TO>/hab-plays/ansible.cfg) = ['/Users/<YOU>/.HAB/inventory/hosts']\nDEFAULT_VAULT_PASSWORD_FILE(/Users/<YOU>/<PATH_TO>/hab-plays/ansible.cfg) = /Users/<YOU>/.HAB/.ansible_vault_access\nHOST_KEY_CHECKING(/Users/<YOU>/<PATH_TO>/hab-plays/ansible.cfg) = False\n")),(0,s.kt)("h3",{id:"alter-config"},"Alter Config"),(0,s.kt)("p",null,"You should alter the config to meet your needs best. In particular, you should\nchange ",(0,s.kt)("inlineCode",{parentName:"p"},"forks")," to match the number of hosts you have. The PoC has 7 hosts, thus\n7 forks, so we can run the same plays at the same time on each host without\nwaiting for a previous host to finish first."),(0,s.kt)("admonition",{title:"the cache",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Be advised, the cache is a dump of system details about your hosts. After you\nrun commands, you can view it in plain text in the directory above."),(0,s.kt)("ol",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ol"},"You may want to disable the cash by commenting it out, so that it does not\nsave all this info to disk. This will cost you playback speed."),(0,s.kt)("li",{parentName:"ol"},"You may want to delete the cache from time to time, you can find it at the\nlocation listed above. Or run the delete command",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf ~/.HAB/.facts_cache\n"))))),(0,s.kt)("h2",{id:"first-command"},"First Command"),(0,s.kt)("p",null,"We will now execute our first Ansible command to check the validity of a\npotential host name."),(0,s.kt)("p",null,"Before we run the command, we are going to walk through everything it does, and\nthus, how to walk through all Ansible commands. Don't run it just yet, but the\ncommand we are going to run is this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'apb Hosts/validate-hostname.yml --extra-vars "hostName=test1"\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"apb")," is the alias for ",(0,s.kt)("inlineCode",{parentName:"p"},"ansible-playbook")," which we set earlier.\n",(0,s.kt)("inlineCode",{parentName:"p"},"ansible-playbook"),' is the executable for running multiple commands and threads\ncalled "playbooks".')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Hosts/validate-hostname.yml")," is the actual code that comprises the command.\nIt is this:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="hab-plays/Hosts/validate-hostname.yml"',title:'"hab-plays/Hosts/validate-hostname.yml"'},"- hosts: localhost\n  tasks:\n    - include_tasks: tasks/validate-host-name.yml\n")),(0,s.kt)("p",{parentName:"li"},"In the above code, we see two things:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"strong"},"hosts")),": where the command should run. In this case, on the machine we\nare running the command from, the localhost."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"strong"},"tasks")),": the tasks which are to run on that host. In this case, it is\nthe tasks located at ",(0,s.kt)("inlineCode",{parentName:"li"},"tasks/validate-host-name.yml"))),(0,s.kt)("p",{parentName:"li"},"Heading over to ",(0,s.kt)("inlineCode",{parentName:"p"},"tasks/validate-host-name.yml")," we see this code:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="hab-plays/Hosts/tasks/validate-host-name.yml"',title:'"hab-plays/Hosts/tasks/validate-host-name.yml"'},"- name:\n    Make sure all characters in hostnames are lowercase alphanumeric '-' or\n    '.'\n  assert:\n    that: hostName is match('^[a-z0-9][a-z0-9.-]{0,}[a-z0-9]$')\n    quiet: yes\n    fail_msg:\n      \"The node name '{{ hostName }}' either: 1. Starts or ends with something\n      other than alphanumeric, 2. Is not all lowercase, or 3. Includes an\n      invalid character\"\n- name: Make sure hostnames are less than 253 characters\n  assert:\n    that: hostName | length < 253\n    quiet: yes\n    fail_msg: \"The node name '{{ hostName }}' is longer than 253 characters\"\n")),(0,s.kt)("p",{parentName:"li"},"Spend a second trying to understand this code. It is fairly generic Ansible\nboilerplate for checking if a passed extra variable ",(0,s.kt)("inlineCode",{parentName:"p"},"hostName")," is up to snuff.\nIf the tests fail, the fail message is printed.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Lastly, in our original command, the ",(0,s.kt)("inlineCode",{parentName:"p"},'--extra-vars "hostName=test1"')," flag\ntells Ansible to set the variable ",(0,s.kt)("inlineCode",{parentName:"p"},"hostName"),' to the text "test1" and make it\navailable to our script.'))),(0,s.kt)("h2",{id:"run-it"},"Run It"),(0,s.kt)("p",null,'Replace "test1" with any potential name choice and give it a run. A successful\nrun should not be dissimilar to this:'),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Moving forward, we will be truncating ",(0,s.kt)("inlineCode",{parentName:"p"},"--extra-vars")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"-e"),", which is the short\nversion of that flag.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"% apb Hosts/validate-hostname.yml --extra-vars \"hostName=test1\"\nPLAY [localhost] ***********************************************************************************************\n\nTASK [Gathering Facts] *****************************************************************************************\nok: [localhost]\n\nTASK [include_tasks] *******************************************************************************************\nincluded: /Users/<YOU>/<PATH_TO>/hab-plays/Hosts/tasks/validate-host-name.yml for localhost\n\nTASK [Make sure all characters in hostnames are lowercase alphanumeric '-' or '.'] *****************************\nok: [localhost]\n\nTASK [Make sure hostnames are less than 253 characters] ********************************************************\nok: [localhost]\n\nPLAY RECAP *****************************************************************************************************\nlocalhost                  : ok=4    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0\n")),(0,s.kt)("p",null,"And a failure run might look like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'% apb Hosts/validate-hostname.yml --extra-vars "hostName=???"\nPLAY [localhost] ***********************************************************************************************\n\nTASK [include_tasks] *******************************************************************************************\nincluded: /Users/<YOU>/<PATH_TO>/hab-plays/Hosts/tasks/validate-host-name.yml for localhost\n\nTASK [Make sure all characters in hostnames are lowercase alphanumeric \'-\' or \'.\'] *****************************\nfatal: [localhost]: FAILED! => {"assertion": "hostName is match(\'^[a-z0-9][a-z0-9.-]{0,}[a-z0-9]$\')", "changed": false, "evaluated_to": false, "msg": "The node name \'???\' either: 1. Starts or ends with something other than alphanumeric, 2. Is not all lowercase, or 3. Includes an invalid character"}\n\nPLAY RECAP *****************************************************************************************************\nlocalhost                  : ok=1    changed=0    unreachable=0    failed=1    skipped=0    rescued=0    ignored=0\n')),(0,s.kt)("admonition",{title:"Yes, this is Overkill",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"In case you were wondering, yes, it is complete overkill to use Ansible to check\na words' validity when any human can read for these very easy checks, or a\nsimple command can do it. In our case, we need this check in Ansible for another\nscript, to fool-proof the system, so we might as well make use of it twice.")),(0,s.kt)("h2",{id:"what-is-ansible-doing-here"},"What is Ansible Doing Here?"),(0,s.kt)("p",null,"Right off the bat, you should notice that Ansible is following the directions\nexactly as specified in the ",(0,s.kt)("inlineCode",{parentName:"p"},".yml")," file and reporting everything it's doing.\nFirst, Ansible gets the list of hosts and gathers information about them. Then,\nit gets the tasks and begins execution. You will notice it did not do any fact\ngathering in the fail case above, that is thanks to the cache."),(0,s.kt)("p",null,"This trite example does not really show of the brilliance of Ansible, only once\nwe get into more complex Ansible commands, will we really see where Ansible\nshines."),(0,s.kt)("admonition",{title:"Atypical Ansible Structuring",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"If you are familiar with Ansible, you will immediately notice that we are not\nusing ",(0,s.kt)("inlineCode",{parentName:"p"},"roles"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"ansible-galaxy")," and a host of other best practices and community\nresources that Ansible scripts are typically designed around. This is\nintentional. For instance, the ",(0,s.kt)("inlineCode",{parentName:"p"},"role")," pattern, though undoubtedly useful in\ncommercial host provisioning with large experienced teams and thousands of\ncomputers, where an SRE might prefer to rely on the content of the command line\nargs and not the content of the code they map to is not useful here. Here we are\ntrying to read as much of the ",(0,s.kt)("em",{parentName:"p"},"code")," as possible, to understand what it is\ndoing. Relying on ",(0,s.kt)("inlineCode",{parentName:"p"},"roles")," here makes this process opaque to navigate and\ndisorienting to read. Having to open up multiple files and directories to find\n",(0,s.kt)("inlineCode",{parentName:"p"},"variables")," and figure out how they connect with other ",(0,s.kt)("inlineCode",{parentName:"p"},"tasks")," in yet other\nfiles and folders is indirection and does not make for readable or digestible\ncode, which is a first priority for this guide. We are using Ansible as a\nbeginner would use it and reason with it because the expectation is that the\naudience is indeed beginners.")),(0,s.kt)("p",null,"Now that we have some validated names, and a brief intro on Ansible, let's start\nnetworking our hosts together."))}d.isMDXComponent=!0}}]);