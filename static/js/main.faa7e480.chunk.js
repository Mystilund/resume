(this["webpackJsonplund-resume"]=this["webpackJsonplund-resume"]||[]).push([[0],{182:function(e,a,t){e.exports=t.p+"static/media/profile.1443059b.png"},183:function(e,a,t){e.exports=t.p+"static/media/olst.a009cb44.png"},184:function(e,a,t){e.exports=t.p+"static/media/kimple.606d408d.png"},185:function(e,a,t){e.exports=t.p+"static/media/etix.1643d30a.jpg"},186:function(e,a,t){e.exports=t.p+"static/media/simplifield.f43729db.jpg"},187:function(e,a,t){e.exports=t.p+"static/media/lundorg.41d4caaa.png"},189:function(e){e.exports=JSON.parse('[{"year":1993,"facts":[{"texts":["I\'m born. What a year !"]}]},{"year":2011,"facts":[{"texts":["Graduated in high school !","Science bachelor degree, option engineer science"]},{"texts":["Beginning of my college at {EPITECH}"]}]},{"year":2014,"facts":[{"texts":["Work at Etix Everywhere","Intern Fullstack Developper"]},{"texts":["Fourth year at {EPITECH}","This year is a year in a foreign partner school","Mine was in the Laval University, Quebec - Canada \ud83c\udf41"]}]},{"year":2015,"facts":[{"texts":["End of the year in Canada","IT certificate of Laval University"]},{"texts":["Work at Cassiop on the Kimple solution","Part Time Intern"]}]},{"year":2016,"facts":[{"texts":["IT degree of {EPITECH}"]},{"texts":["Work at Cassiop on the Kimple solution","Lead Developper"]}]},{"year":2017,"facts":[{"texts":["Work at Oliver\'store on Stores-Discount.com","Fullstack Developper"]}]},{"year":2020,"facts":[{"texts":["Work at Simplifield","Fullstack Developper"]}]}]')},192:function(e,a,t){e.exports=t(394)},386:function(e,a,t){},394:function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"HOME_ROUTE",(function(){return u})),t.d(n,"ABOUT_ROUTE",(function(){return h})),t.d(n,"TIMELINE_ROUTE",(function(){return p})),t.d(n,"PROJECTS_ROUTE",(function(){return d})),t.d(n,"CONTACT_ROUTE",(function(){return E})),t.d(n,"mapping",(function(){return b}));t(193),t(202);var l=t(0),r=t.n(l),o=t(82),i=t.n(o),c=(t(386),t(32)),s=t(39),m=t(191),u="",h="about",p="timeline",d="projects",E="contact",b={HOME_ROUTE:"",ABOUT_ROUTE:"about",TIMELINE_ROUTE:"timeline",PROJECTS_ROUTE:"projects",CONTACT_ROUTE:"contact"},f=function(e){return Object.values(n).includes(e)?e:u},g=r.a.createContext({}),k=function(){return window.location.hash.replace("#/","")},v=function(e){return function(){e({currentRoute:f(k())})}},w=function(){return Object(l.useContext)(g)},y=function(e){var a=e.children,t=void 0===a?r.a.createElement("div",null):a,n=Object(l.useState)({currentRoute:f(k())}),o=Object(c.a)(n,2),i=o[0],s=o[1];Object(l.useEffect)((function(){return window.addEventListener("hashchange",v(s)),function(){window.removeEventListener("hashchange",v(s))}}),[]);var u={currentRoute:i.currentRoute,updateRoute:function(e){return s(Object(m.a)({},i,{currentRoute:e}))}};return r.a.createElement(g.Provider,{value:u},t)},T=function(e){var a=e.children,t=e.hoverColor;return r.a.createElement("div",{className:"animated-text"},r.a.createElement("div",{className:"baseTxt"},a),r.a.createElement("div",{className:"hoverTxt",style:{color:t}},a))},O=function(){var e=w().currentRoute,a=Object(l.useState)(!1),t=Object(c.a)(a,2),n=t[0],o=t[1],i=function(a){return e===a?"active":""};return r.a.createElement("nav",{className:"navbar ".concat(n?"active":"")},r.a.createElement("div",{className:"burger-menu",onClick:function(){o(!n)}},r.a.createElement("div",{className:"burger-line-top"}),r.a.createElement("div",{className:"burger-line-middle"}),r.a.createElement("div",{className:"burger-line-bottom"})),r.a.createElement("div",{className:"fixed-container"},r.a.createElement("ul",null,r.a.createElement("li",{className:i(u)},r.a.createElement(s.b,{to:""},r.a.createElement(T,{hoverColor:"#CC3333"},"Home"))),r.a.createElement("li",{className:i(h)},r.a.createElement(s.b,{to:"about"},r.a.createElement(T,{hoverColor:"#CC3333"},"About"))),r.a.createElement("li",{className:i(p)},r.a.createElement(s.b,{to:"timeline"},r.a.createElement(T,{hoverColor:"#CC3333"},"Timeline"))),r.a.createElement("li",{className:i(d)},r.a.createElement(s.b,{to:"projects"},r.a.createElement(T,{hoverColor:"#CC3333"},"Projects"))),r.a.createElement("li",{className:i(E)},r.a.createElement(s.b,{to:"contact"},r.a.createElement(T,{hoverColor:"#CC3333"},"Contact"))))))},C=t(83),N=function(e){var a=e.index,t=e.openSkillTab,n=e.children,l=e.isActive;return r.a.createElement("div",{className:"skill-line ".concat(l?"active":""),onMouseEnter:t(a)},n)},I=t(46),j=t(181),S=function(e){var a=e.rank,t=function(e){return Array.from(Array(e)).map((function(e,a){return r.a.createElement(I.a,{key:a,icon:j.a})}))};return r.a.createElement("div",{className:"skill-rank"},t(5),r.a.createElement("div",{className:"rank-stars"},t(a)))},x=function(){var e=Object(l.useState)(0),a=Object(c.a)(e,2),t=a[0],n=a[1],o=function(e){return function(){n(e)}};return r.a.createElement("div",{className:"skill-block"},r.a.createElement("div",{className:"skill-list"},C.map((function(e,a){return r.a.createElement(N,{key:a,index:a,openSkillTab:o,isActive:a===t},r.a.createElement("span",{className:"skill-name"},e.label),"undefined"!==typeof e.rank?r.a.createElement(S,{rank:e.rank}):null)}))),r.a.createElement("div",{className:"technos-container"},function(){if(null===t||"undefined"===typeof C[t].technos)return null;return r.a.createElement("div",{className:"techno-list"},C[t].technos.map((function(e,a){return r.a.createElement("p",{key:a},function(e){return e.link?r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.label):r.a.createElement("span",null,e.label)}(e))})))}()))},R=t(182),_=t.n(R),A=function(){return r.a.createElement("div",{className:"about-page"},r.a.createElement("div",{className:"profile-picture"},r.a.createElement("img",{src:_.a,alt:"",title:""})),r.a.createElement("div",{className:"profile-picture-subtitle text-centered"},r.a.createElement("i",null,"(it's me)")),r.a.createElement(x,null),r.a.createElement("hr",{className:"margin-top-50 margin-bot-50"}),r.a.createElement("h2",null,"Something else ?"),r.a.createElement("p",null,"Yeah, I can do and I like other things !"),r.a.createElement("ul",{className:"no-bullet"},r.a.createElement("li",null,r.a.createElement("span",{role:"img","aria-label":"love"},"\ud83d\udc9b"),r.a.createElement("span",null," Videogames")),r.a.createElement("li",null,r.a.createElement("span",{role:"img","aria-label":"camera emoji"},"\ud83d\udcf7"),r.a.createElement("span",null," Photography")),r.a.createElement("li",null,r.a.createElement("span",{role:"img","aria-label":"paintbrush emoji"},"\ud83d\udd8c\ufe0f"),r.a.createElement("span",null," Drawing")),r.a.createElement("li",null,r.a.createElement("span",{role:"img","aria-label":"music emoji"},"\ud83c\udfa7"),r.a.createElement("span",null," Music")),r.a.createElement("li",null,r.a.createElement("span",{role:"img","aria-label":"video emoji"},"\ud83c\udfac"),r.a.createElement("span",null," Series")),r.a.createElement("li",null,r.a.createElement("span",{role:"img","aria-label":"meat emoji"},"\ud83c\udf56"),r.a.createElement("span",null," Food"))))},L=function(){return r.a.createElement("div",{className:"contact-page"},r.a.createElement("h3",null,"Am I looking for a new job ?"),r.a.createElement("p",{className:"job-answer"},"Nope"),r.a.createElement("h3",null,"How can you contact me ?"),r.a.createElement("p",{className:"contact-answer"},r.a.createElement("span",{role:"img","aria-label":"envelope emoji"},"\u2709\ufe0f "),r.a.createElement("span",null,"By email "),r.a.createElement("a",{href:"mailto:recrutement.xplx@gmail.com"},"here")),r.a.createElement("p",{className:"resume-link"},"My resume as PDF can be found ",r.a.createElement("a",{href:"https://drive.google.com/open?id=1wnW7URLW7460oOhbuFxjOJtkacSayIZQ",target:"_blank",rel:"noopener noreferrer"},"here")),r.a.createElement("p",{className:"phone-disclaimer"},r.a.createElement("small",null,"I don't want to give my phone number because... well, I don't want it public and I don't want to be harrased")))},H=t(190),P=t(67),U=function(){var e=Object(l.useState)(Array.from(Array(6)).map((function(e){return{opacity:0}}))),a=Object(c.a)(e,2),t=a[0],n=a[1];return Object(l.useEffect)((function(){var e=t.findIndex((function(e){return 0===e.opacity}));setTimeout((function(){var a=Object(H.a)(t);-1!==e&&(a[e]={opacity:1},n(a))}),0===e?500:1800)}),[t]),r.a.createElement("div",{className:"home-page"},r.a.createElement("div",{className:"pre-title"},"Hi, my name is"),r.a.createElement("h1",{style:t[0]},"Florian Dewulf."),r.a.createElement("h2",{style:t[1]},"I type on a black screen and it makes beautiful things in your browser"),r.a.createElement("div",{className:"home-description"},r.a.createElement("p",{style:t[2]},r.a.createElement("span",null,"I'm a `Fullstack Web Developper` based in Lille "),r.a.createElement("span",{role:"img","aria-label":"umbrella emoji"},"\u2614")),r.a.createElement("p",{style:t[3]},r.a.createElement("span",null,"I "),r.a.createElement("span",{role:"img","aria-label":"love"},"\ud83d\udc99"),r.a.createElement("span",null," JS (node, React...), Docker "),r.a.createElement("span",{role:"img","aria-label":"whale emoji"},"\ud83d\udc33"),r.a.createElement("span",null,", Windows "),r.a.createElement("span",{role:"img","aria-label":"computer emoji"},"\ud83d\udcbb"),r.a.createElement("span",null,", AWS "),r.a.createElement("span",{role:"img","aria-label":"satellite dish emoji"},"\ud83d\udce1")),r.a.createElement("p",{style:t[3]},r.a.createElement("span",null,"I "),r.a.createElement("span",{role:"img","aria-label":"love"},"\ud83e\udde1"),r.a.createElement("span",null," videogames "),r.a.createElement("span",{role:"img","aria-label":"joystick emoji"},"\ud83c\udfae"),r.a.createElement("span",null,", music "),r.a.createElement("span",{role:"img","aria-label":"music emoji"},"\ud83c\udfbc"),r.a.createElement("span",null," and to travel "),r.a.createElement("span",{role:"img","aria-label":"coffee emoji"},"\u2708")),r.a.createElement("div",{className:"looking-for",style:t[4]},r.a.createElement("p",null,"I'm ",r.a.createElement("strong",null,"not")," looking for a job anymore"),r.a.createElement("p",null,"I love modern Javascript, I ",r.a.createElement("u",null,"hate")," Java, I like Ruby, I can use PHP but it's not what I prefer")),r.a.createElement("p",{style:t[5],className:"text-centered brand-links"},r.a.createElement("a",{href:"https://www.github.com/mystilund/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(I.a,{icon:P.a})),r.a.createElement("span",null," - "),r.a.createElement("a",{href:"https://www.linkedin.com/in/floriandewulf/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(I.a,{icon:P.c})),r.a.createElement("span",null," - "),r.a.createElement("a",{href:"https://twitter.com/LundProd",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(I.a,{icon:P.d})),r.a.createElement("span",null," - "),r.a.createElement("a",{href:"https://www.instagram.com/mystilund/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(I.a,{icon:P.b})))))},M=function(e){var a=e.img,t=e.title,n=e.children;return r.a.createElement("div",{className:"work-block"},r.a.createElement("div",null,r.a.createElement("div",{className:"img-work-block"},r.a.createElement("img",{src:a,alt:t,title:t}),r.a.createElement("div",{className:"work-title"},t))),r.a.createElement("div",{className:"work-description"},n))},J=t(183),W=t.n(J),D=t(184),B=t.n(D),F=t(185),V=t.n(F),z=t(186),Q=t.n(z),G=t(187),q=t.n(G),K=function(){return r.a.createElement("div",{className:"project-container"},r.a.createElement("h2",null,"Current work"),r.a.createElement(M,{title:"Simplifield",img:Q.a},r.a.createElement("h4",null,"Currently working in Simplifield"),r.a.createElement("p",null,"Simplifield is a solution for the retail companies helping communicating, automating workflows and allows to analyze performances."),r.a.createElement("p",null,"The IT stack is entirely made with Javascript. The solution is built using AngularJS, Express and IonicV1."),r.a.createElement("p",null,"I worked on all parts of the solution : The backoffice which is available for the admins and analysts and the mobile app for field contributor."),r.a.createElement("ul",null,r.a.createElement("li",null,"I worked on a statistic module with a dashboard "),r.a.createElement("li",null,"The core system of the mission has been entirely remade and is now more dynamic"),r.a.createElement("li",null,"A translation system has been created to allow the display of the forms in several languages"),r.a.createElement("li",null,"...")),r.a.createElement("p",{className:"work-date"},"2020 - now")),r.a.createElement("hr",null),r.a.createElement("h2",null,"Previous work"),r.a.createElement(M,{title:"OliverStore",img:W.a},r.a.createElement("p",null,"Oliverstore is an e-commerce company. The main website is stores-discount.com"),r.a.createElement("p",null,"Because the business is based on custom product, a simple e-commerce solution like Magento is not possible, so everything was build based on modern technolgies"),r.a.createElement("p",null,"The IT stack is built thanks to Sylius (PHP)), microservices made with Hapi (Node), the front uses React and Vue, and everything is working on a SOA design, running on AWS (EC2, Beanstalk, RDS, ECR...)"),r.a.createElement("p",null,"I worked on the website (front or back) and the back microservices. Here is some examples of what I did :"),r.a.createElement("ul",null,r.a.createElement("li",null,"A lot on admin tools like the management of the categories, the advice pages, tools for promotions (Sylius, React)"),r.a.createElement("li",null,"The front of the user account (Vue, React)"),r.a.createElement("li",null,"I initiated the transition to the responsive design (HTML/CSS)"),r.a.createElement("li",null,"The payment microservice or the input help suggestion microservice (Hapi)"),r.a.createElement("li",null,"Some SEO optimization"),r.a.createElement("li",null,"...")),r.a.createElement("p",{className:"work-date"},"2017-2020")),r.a.createElement(M,{title:"Cassiop",img:B.a},r.a.createElement("p",null,"Cassiop is a company which powered a solution named Kimple."),r.a.createElement("p",null,"Kimple is a platform where you can configure a contest to promote a product or to increase you audience."),r.a.createElement("p",null,"The IT stack is pretty simple, it is based on Laravel (PHP) and some JQuery for the front. When I left the company a transition to VueJS began to remove JQuery."),r.a.createElement("p",null,"Here are some examples of what I did there :"),r.a.createElement("ul",null,r.a.createElement("li",null,"Creation of some games (like a wheel of fortune or an advent calendar)"),r.a.createElement("li",null,"A lot of refactoring of old code to have a clean codebase"),r.a.createElement("li",null,"A system of advance statistics to give a global view of the audience based on each contest stats of the client"),r.a.createElement("li",null,"...")),r.a.createElement("p",{className:"work-date"},"2015-2017")),r.a.createElement(M,{title:"Etix Everywhere",img:V.a},r.a.createElement("p",null,"Etix Everywhere is an innovative datacenter company. The goal is to provide custom datacenters which can fit everywhere and which are ecologic"),r.a.createElement("p",null,"I was just an intern back in time when with 9 other interns we created a base for the IT service."),r.a.createElement("p",null,"The IT stack at that moment was a backoffice performed with Yii (PHP) and using AngularJS which was the first advance front framework. It was the base of the modern front framework like React, Vue and Angular."),r.a.createElement("p",null,"Here are some examples of what I did there :"),r.a.createElement("ul",null,r.a.createElement("li",null,"Creation of a calendar and a management of the physical datacenter accesses"),r.a.createElement("li",null,"Webapp to create modular and dynamic forms"),r.a.createElement("li",null,"...")),r.a.createElement("p",{className:"work-date"},"2014")),r.a.createElement("hr",null),r.a.createElement("h2",null,"Open Source projects"),r.a.createElement(M,{title:"Lund-Org",img:q.a},r.a.createElement("p",null,"The ",r.a.createElement("a",{href:"https://github.com/Lund-Org",target:"_blank",rel:"noopener noreferrer"},"Lund-Org")," is a Github organization for open source projects."),r.a.createElement("h3",null,r.a.createElement("a",{href:"https://github.com/Lund-Org/discord-bot",target:"_blank",rel:"noopener noreferrer"},"Discord Bot")),r.a.createElement("p",null,"I needed a discord bot, so I created one. At the same time, I had to learn Typescript, so it was the right moment to do it."),r.a.createElement("p",null,"This discord bot also includes a text based gacha game with cards and a Twitch link to retrieve Twitch rewards."),r.a.createElement("h3",null,r.a.createElement("a",{href:"https://github.com/Lund-Org/cherry",target:"_blank",rel:"noopener noreferrer"},"Cherry ",r.a.createElement("span",{role:"img","aria-label":"cherry emoji"},"\ud83c\udf52"))),r.a.createElement("p",null,"I made a node Framework from scratch. It is a very light framework which was built to match with every needs and where you can add plugins if you need more features. I didn't like the idea of some framework to provide a lot of tools but you don't it, and Cherry was made to solve this issue."),r.a.createElement("p",null,"As said, there are plugins you can add to Cherry, here are some basic features I provided :"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/Lund-Org/cherry-handlebars-connector",target:"_blank",rel:"noopener noreferrer"},"Cherry Handlebars Connector")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/Lund-Org/cherry-pug-connector",target:"_blank",rel:"noopener noreferrer"},"Cherry Pug Connector")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/Lund-Org/cherry-typeorm-connector",target:"_blank",rel:"noopener noreferrer"},"Cherry TypeORM Connector")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/Lund-Org/cherry-sequelize-connector",target:"_blank",rel:"noopener noreferrer"},"Cherry Sequelize Connector"))),r.a.createElement("p",null,"And of course a framework needs to come with a documentation which can be found ",r.a.createElement("a",{href:"https://github.com/Lund-Org/cherry-documentation",target:"_blank",rel:"noopener noreferrer"},"here")),r.a.createElement("p",null,"The project has been archived, it was mainly something made to learn than being used for real."),r.a.createElement("h3",null,r.a.createElement("a",{href:"https://github.com/Lund-Org/twitch-get-events",target:"_blank",rel:"noopener noreferrer"},"Twitch Get Events")),r.a.createElement("p",null,"This library was the first project of the organization made with another contributor. Back in time, Twitch had an event system that could be used to create a calendar. This feature has been removed, so this library can't be used anymore and the repository has been archived."),r.a.createElement("h3",null,"Livedeck"),r.a.createElement("p",null,"This project is separated in multiple apps. The idea behind it is to compete with the Streamdeck of Elgato with a free alternative solution."),r.a.createElement("p",null,"Everybody has a smartphone, so why not use it instead of the streamdeck to press buttons and interact with your stream ?"),r.a.createElement("p",null,"The project was never finished and has been cancelled because the solution already exists : ",r.a.createElement("a",{href:"https://www.touch-portal.com/",target:"_blank",rel:"noopener noreferrer"},"Touch Portal"),"."),r.a.createElement("p",{className:"work-date"},"2018-2020")))},Y=t(188),Z=t(189),X={ABOUT_ROUTE:A,CONTACT_ROUTE:L,HOME_ROUTE:U,PROJECTS_ROUTE:K,TIMELINE_ROUTE:function(){var e=Z.reduce((function(e,a){return a.facts.forEach((function(t){e.push({title:a.year,cardDetailedText:t.texts.map((function(e){return r.a.createElement(r.a.Fragment,null,e,r.a.createElement("br",null))}))})})),e}),[]);return r.a.createElement("div",null,r.a.createElement(Y.a,{items:e,mode:"VERTICAL_ALTERNATING",hideControls:!0,useReadMore:!1}))}},$=function(e){for(var a in b)if(e===b[a])return a;return"HOME_ROUTE"},ee=function(){var e=w().currentRoute,a=Object(l.useState)(r.a.createElement(X[$(e)])),t=Object(c.a)(a,2),n=t[0],o=t[1];return Object(l.useEffect)((function(){window.scrollTo(0,0),o(r.a.createElement(X[$(e)]))}),[e]),n},ae=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(y,null,r.a.createElement(s.a,{basename:"/"},r.a.createElement(O,null),r.a.createElement("div",{className:"page-content"},r.a.createElement("div",{className:"page-container"},r.a.createElement(ee,null))))))};i.a.render(r.a.createElement(ae,null),document.getElementById("root"))},83:function(e){e.exports=JSON.parse('[{"label":"Javascript","rank":5,"technos":[{"label":"React","link":"https://reactjs.org/"},{"label":"Mocha (+ nyc)","link":"https://mochajs.org/"},{"label":"Hapi","link":"https://hapi.dev/"},{"label":"VueJS","link":"https://vuejs.org/"},{"label":"Express","link":"https://expressjs.com/"},{"label":"Yeoman","link":"https://yeoman.io/"},{"label":"Typescript","link":"https://www.typescriptlang.org/"}]},{"label":"Misc web technologies","rank":4,"technos":[{"label":"HTML/CSS","link":"https://developer.mozilla.org/fr/docs/Web/HTML"},{"label":"Haml","link":"http://haml.info/"},{"label":"Pug","link":"https://pugjs.org/api/getting-started.html"},{"label":"Handlebar","link":"https://handlebarsjs.com/"},{"label":"SASS","link":"https://sass-lang.com/"},{"label":"MySQL","link":"https://www.mysql.com/fr/"},{"label":"Responsive design","link":"https://fr.wikipedia.org/wiki/Site_web_r%C3%A9actif"},{"label":"And I love ergonomy and accessibility, to make a better web","link":null}]},{"label":"PHP","rank":4,"technos":[{"label":"Symfony","link":"https://symfony.com/"},{"label":"Laravel","link":"https://laravel.com/"},{"label":"Sylius","link":"https://sylius.com/"}]},{"label":"Ruby","rank":3,"technos":[{"label":"Rake","link":"https://github.com/ruby/rake"},{"label":"Ruby On Rails","link":"https://rubyonrails.org/"}]},{"label":"Sys\' admin & Cloud","rank":3,"technos":[{"label":"Docker","link":"https://www.docker.com/"},{"label":"AWS","link":"https://aws.amazon.com/fr/"},{"label":"Bash","link":"https://wiki.debian.org/fr/Bash"}]},{"label":"CI/CD/Automation","rank":3,"technos":[{"label":"Travis","link":"https://travis-ci.com/"},{"label":"Jenkins","link":"https://jenkins.io/"},{"label":"CodeClimate Quality","link":"https://codeclimate.com/quality/"}]},{"label":"Project management","rank":2,"technos":[{"label":"Technical analysis","link":null},{"label":"Task estimation","link":null},{"label":"Jira","link":"https://www.atlassian.com/fr/software/jira"},{"label":"UML","link":"https://en.wikipedia.org/wiki/Unified_Modeling_Language"}]},{"label":"Tools & OS","technos":[{"label":"VSCode","link":null},{"label":"Windows","link":null},{"label":"Unix (Debian, Ubuntu, Mint)","link":null},{"label":"Git","link":null},{"label":"Slack","link":null}]}]')}},[[192,1,2]]]);
//# sourceMappingURL=main.faa7e480.chunk.js.map