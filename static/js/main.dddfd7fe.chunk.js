(this["webpackJsonplund-resume"]=this["webpackJsonplund-resume"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/profile.1443059b.png"},19:function(e,t,a){e.exports=a.p+"static/media/olst.a009cb44.png"},20:function(e,t,a){e.exports=a.p+"static/media/kimple.606d408d.png"},21:function(e,t,a){e.exports=a.p+"static/media/etix.1643d30a.jpg"},22:function(e,t,a){e.exports=a.p+"static/media/lundorg.41d4caaa.png"},23:function(e){e.exports=JSON.parse('[{"year":1993,"facts":[{"texts":["I\'m born. What a year !"]}]},{"year":2011,"facts":[{"texts":["Graduated in high school !","Science bachelor degree, option engineer science"]},{"texts":["Beginning of my college at {EPITECH}"]}]},{"year":2014,"facts":[{"texts":["Work at Etix Everywhere","Intern Fullstack Developper"],"workId":"etix"},{"texts":["Fourth year at {EPITECH}","This year is a year in a foreign partner school","Mine was in the Laval University, Quebec - Canada \ud83c\udf41"]}]},{"year":2015,"facts":[{"texts":["End of the year in Canada","IT certificate of Laval University"]},{"texts":["Work at Cassiop on the Kimple solution","Part Time Intern"],"workId":"kimple"}]},{"year":2016,"facts":[{"texts":["IT degree of {EPITECH}"]},{"texts":["Work at Cassiop on the Kimple solution","Lead Developper"],"workId":"kimple"}]},{"year":2017,"facts":[{"texts":["Work at Oliver\'store on Stores-Discount.com","Fullstack Developper"],"workId":"olst"}]},{"year":2020,"facts":[{"texts":["Working with you ?"]}]}]')},26:function(e,t,a){e.exports=a(39)},31:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"HOME_ROUTE",(function(){return u})),a.d(n,"ABOUT_ROUTE",(function(){return p})),a.d(n,"TIMELINE_ROUTE",(function(){return h})),a.d(n,"PROJECTS_ROUTE",(function(){return d})),a.d(n,"CONTACT_ROUTE",(function(){return E})),a.d(n,"mapping",(function(){return b}));var r=a(0),l=a.n(r),o=a(14),i=a.n(o),c=(a(31),a(3)),s=a(25),m=a(2),u="",p="about",h="timeline",d="projects",E="contact",b={HOME_ROUTE:"",ABOUT_ROUTE:"about",TIMELINE_ROUTE:"timeline",PROJECTS_ROUTE:"projects",CONTACT_ROUTE:"contact"},f=function(e){return Object.values(n).includes(e)?e:u},g=l.a.createContext({}),k=function(){return window.location.hash.replace("#/","")},v=function(e){return function(){e({currentRoute:f(k())})}},y=function(){return Object(r.useContext)(g)},w=function(e){var t=e.children,a=void 0===t?l.a.createElement("div",null):t,n=Object(r.useState)({currentRoute:f(k())}),o=Object(m.a)(n,2),i=o[0],c=o[1];Object(r.useEffect)((function(){return window.addEventListener("hashchange",v(c)),function(){window.removeEventListener("hashchange",v(c))}}),[]);var u={currentRoute:i.currentRoute,updateRoute:function(e){return c(Object(s.a)({},i,{currentRoute:e}))}};return l.a.createElement(g.Provider,{value:u},a)},O=function(e){var t=e.children,a=e.hoverColor;return l.a.createElement("div",{className:"animated-text"},l.a.createElement("div",{className:"baseTxt"},t),l.a.createElement("div",{className:"hoverTxt",style:{color:a}},t))},T=function(){var e=y().currentRoute,t=function(t){return e===t?"active":""};return l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"fixed-container"},l.a.createElement("ul",null,l.a.createElement("li",{className:t(u)},l.a.createElement(c.b,{to:""},l.a.createElement(O,{hoverColor:"#CC3333"},"Home"))),l.a.createElement("li",{className:t(p)},l.a.createElement(c.b,{to:"about"},l.a.createElement(O,{hoverColor:"#CC3333"},"About"))),l.a.createElement("li",{className:t(h)},l.a.createElement(c.b,{to:"timeline"},l.a.createElement(O,{hoverColor:"#CC3333"},"Timeline"))),l.a.createElement("li",{className:t(d)},l.a.createElement(c.b,{to:"projects"},l.a.createElement(O,{hoverColor:"#CC3333"},"Projects"))),l.a.createElement("li",{className:t(E)},l.a.createElement(c.b,{to:"contact"},l.a.createElement(O,{hoverColor:"#CC3333"},"Contact"))))))},C=a(7),j=function(e){var t=e.index,a=e.openSkillTab,n=e.children,r=e.isActive;return l.a.createElement("div",{className:"skill-line ".concat(r?"active":""),onMouseEnter:a(t)},n)},I=a(4),N=a(17),S=function(e){var t=e.rank,a=function(e){return Array.from(Array(e)).map((function(e,t){return l.a.createElement(I.a,{key:t,icon:N.a})}))};return l.a.createElement("div",{className:"skill-rank"},a(5),l.a.createElement("div",{className:"rank-stars"},a(t)))},x=function(){var e=Object(r.useState)(0),t=Object(m.a)(e,2),a=t[0],n=t[1],o=function(e){return function(){n(e)}};return l.a.createElement("div",{className:"skill-block"},l.a.createElement("div",{className:"skill-list"},C.map((function(e,t){return l.a.createElement(j,{key:t,index:t,openSkillTab:o,isActive:t===a},l.a.createElement("span",{className:"skill-name"},e.label),"undefined"!==typeof e.rank?l.a.createElement(S,{rank:e.rank}):null)}))),l.a.createElement("div",{className:"technos-container"},function(){if(null===a||"undefined"===typeof C[a].technos)return null;return l.a.createElement("div",{className:"techno-list"},C[a].technos.map((function(e,t){return l.a.createElement("p",{key:t},function(e){return e.link?l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.label):l.a.createElement("span",null,e.label)}(e))})))}()))},R=a(18),_=a.n(R),L=function(){return l.a.createElement("div",{className:"about-page"},l.a.createElement("div",{className:"profile-picture"},l.a.createElement("img",{src:_.a,alt:"",title:""})),l.a.createElement("div",{className:"profile-picture-subtitle text-centered"},l.a.createElement("i",null,"(it's me)")),l.a.createElement(x,null),l.a.createElement("hr",{className:"margin-top-50 margin-bot-50"}),l.a.createElement("h2",null,"Something else ?"),l.a.createElement("p",null,"Yeah, I can do and I like other things !"),l.a.createElement("ul",{className:"no-bullet"},l.a.createElement("li",null,l.a.createElement("span",{role:"img","aria-label":"love"},"\ud83d\udc9b"),l.a.createElement("span",null," Videogames")),l.a.createElement("li",null,l.a.createElement("span",{role:"img","aria-label":"camera emoji"},"\ud83d\udcf7"),l.a.createElement("span",null," Photography")),l.a.createElement("li",null,l.a.createElement("span",{role:"img","aria-label":"paintbrush emoji"},"\ud83d\udd8c\ufe0f"),l.a.createElement("span",null," Drawing")),l.a.createElement("li",null,l.a.createElement("span",{role:"img","aria-label":"music emoji"},"\ud83c\udfa7"),l.a.createElement("span",null," Music")),l.a.createElement("li",null,l.a.createElement("span",{role:"img","aria-label":"video emoji"},"\ud83c\udfac"),l.a.createElement("span",null," Series")),l.a.createElement("li",null,l.a.createElement("span",{role:"img","aria-label":"meat emoji"},"\ud83c\udf56"),l.a.createElement("span",null," Food"))))},P=function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Am I looking for a new job ?"),l.a.createElement("p",null,l.a.createElement("strong",null,"Yes")),l.a.createElement("p",null,l.a.createElement("br",null)),l.a.createElement("h3",null,"How can you contact me ?"),l.a.createElement("p",null,"By email ",l.a.createElement("a",{href:"mailto:recrutement.xplx@gmail.com"},"here")),l.a.createElement("p",null,l.a.createElement("br",null)),l.a.createElement("p",null,"I don't want to give my phone number because... well, I don't want it public and I don't want to be harrased"))},A=a(24),H=a(5),U=function(){var e=Object(r.useState)(Array.from(Array(6)).map((function(e){return{opacity:0}}))),t=Object(m.a)(e,2),a=t[0],n=t[1];return Object(r.useEffect)((function(){var e=a.findIndex((function(e){return 0===e.opacity}));setTimeout((function(){var t=Object(A.a)(a);-1!==e&&(t[e]={opacity:1},n(t))}),0===e?500:1800)}),[a]),l.a.createElement("div",{className:"home-page"},l.a.createElement("div",{className:"pre-title"},"Hi, my name is"),l.a.createElement("h1",{style:a[0]},"Florian Dewulf."),l.a.createElement("h2",{style:a[1]},"I type on a black screen and it makes beautiful things in your browser"),l.a.createElement("div",{className:"home-description"},l.a.createElement("p",{style:a[2]},l.a.createElement("span",null,"I'm a `Fullstack Web Developper` based in Lille "),l.a.createElement("span",{role:"img","aria-label":"umbrella emoji"},"\u2614")),l.a.createElement("p",{style:a[3]},l.a.createElement("span",null,"I "),l.a.createElement("span",{role:"img","aria-label":"love"},"\ud83d\udc99"),l.a.createElement("span",null," JS (node, React...), Docker "),l.a.createElement("span",{role:"img","aria-label":"whale emoji"},"\ud83d\udc33"),l.a.createElement("span",null,", Windows "),l.a.createElement("span",{role:"img","aria-label":"computer emoji"},"\ud83d\udcbb"),l.a.createElement("span",null,", AWS "),l.a.createElement("span",{role:"img","aria-label":"satellite dish emoji"},"\ud83d\udce1")),l.a.createElement("p",{style:a[3]},l.a.createElement("span",null,"I "),l.a.createElement("span",{role:"img","aria-label":"love"},"\ud83e\udde1"),l.a.createElement("span",null," videogames "),l.a.createElement("span",{role:"img","aria-label":"joystick emoji"},"\ud83c\udfae"),l.a.createElement("span",null,", music "),l.a.createElement("span",{role:"img","aria-label":"music emoji"},"\ud83c\udfbc"),l.a.createElement("span",null," and to travel "),l.a.createElement("span",{role:"img","aria-label":"coffee emoji"},"\u2708")),l.a.createElement("div",{className:"looking-for",style:a[4]},l.a.createElement("p",null,"I'm looking for a job in a modern Javascript Stack"),l.a.createElement("p",null,"I ",l.a.createElement("u",null,"hate")," Java, I like Ruby, I can use PHP but it's not what I prefer")),l.a.createElement("p",{style:a[5],className:"text-centered brand-links"},l.a.createElement("a",{href:"https://www.github.com/mystilund/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(I.a,{icon:H.a})),l.a.createElement("span",null," - "),l.a.createElement("a",{href:"https://www.linkedin.com/in/floriandewulf/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(I.a,{icon:H.c})),l.a.createElement("span",null," - "),l.a.createElement("a",{href:"https://twitter.com/LundProd",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(I.a,{icon:H.d})),l.a.createElement("span",null," - "),l.a.createElement("a",{href:"https://www.instagram.com/mystilund/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(I.a,{icon:H.b})))))},M=function(e){var t=e.img,a=e.title,n=e.children;return l.a.createElement("div",{className:"work-block"},l.a.createElement("div",null,l.a.createElement("div",{className:"img-work-block"},l.a.createElement("img",{src:t,alt:a,title:a}),l.a.createElement("div",{className:"work-title"},a))),l.a.createElement("div",{className:"work-description"},n))},J=a(19),W=a.n(J),V=a(20),D=a.n(V),B=a(21),z=a.n(B),F=a(22),Q=a.n(F),q=function(){return l.a.createElement("div",{className:"project-container"},l.a.createElement("h2",null,"Current work"),l.a.createElement(M,{title:"OliverStore",img:W.a},l.a.createElement("p",null,"Oliverstore is an e-commerce company. The main website is stores-discount.com"),l.a.createElement("p",null,"Because the business is based on custom product, a simple e-commerce solution like Magento is not possible, so everything was build based on modern technolgies"),l.a.createElement("p",null,"The IT stack is built thanks to Sylius (PHP)), microservices made with Hapi (Node), the front uses React and Vue, and everything is working on a SOA design, running on AWS (EC2, Beanstalk, RDS, ECR...)"),l.a.createElement("p",null,"I worked on the website (front or back) and the back microservices. Here is some examples of what I did :"),l.a.createElement("ul",null,l.a.createElement("li",null,"A lot on admin tools like the management of the categories, the advice pages, tools for promotions (Sylius, React)"),l.a.createElement("li",null,"The front of the user account (Vue, React)"),l.a.createElement("li",null,"I initiated the transition to the responsive design (HTML/CSS)"),l.a.createElement("li",null,"The payment microservice or the input help suggestion microservice (Hapi)"),l.a.createElement("li",null,"Some SEO optimization"),l.a.createElement("li",null,"...")),l.a.createElement("p",{className:"work-date"},"2017-2020")),l.a.createElement("hr",null),l.a.createElement("h2",null,"Previous work"),l.a.createElement(M,{title:"Cassiop",img:D.a},l.a.createElement("p",null,"Cassiop is a company which powered a solution named Kimple."),l.a.createElement("p",null,"Kimple is a platform where you can configure a contest to promote a product or to increase you audience."),l.a.createElement("p",null,"The IT stack is pretty simple, it is based on Laravel (PHP) and some JQuery for the front. When I left the company a transition to VueJS began to remove JQuery."),l.a.createElement("p",null,"Here are some examples of what I did there :"),l.a.createElement("ul",null,l.a.createElement("li",null,"Creation of some games (like a wheel of fortune or an advent calendar)"),l.a.createElement("li",null,"A lot of refactoring of old code to have a clean codebase"),l.a.createElement("li",null,"A system of advance statistics to give a global view of the audience based on each contest stats of the client"),l.a.createElement("li",null,"...")),l.a.createElement("p",{className:"work-date"},"2015-2017")),l.a.createElement(M,{title:"Etix Everywhere",img:z.a},l.a.createElement("p",null,"Etix Everywhere is an innovative datacenter company. The goal is to provide custom datacenters which can fit everywhere and which are ecologic"),l.a.createElement("p",null,"I was just an intern back in time when with 9 other interns we created a base for the IT service."),l.a.createElement("p",null,"The IT stack at that moment was a backoffice performed with Yii (PHP) and using AngularJS which was the first advance front framework. It was the base of the modern front framework like React, Vue and Angular."),l.a.createElement("p",null,"Here are some examples of what I did there :"),l.a.createElement("ul",null,l.a.createElement("li",null,"Creation of a calendar and a management of the physical datacenter accesses"),l.a.createElement("li",null,"Webapp to create modular and dynamic forms"),l.a.createElement("li",null,"...")),l.a.createElement("p",{className:"work-date"},"2014")),l.a.createElement("hr",null),l.a.createElement("h2",null,"Open Source projects"),l.a.createElement(M,{title:"Lund-Org",img:Q.a},l.a.createElement("p",null,"The ",l.a.createElement("a",{href:"https://github.com/Lund-Org",target:"_blank",rel:"noopener noreferrer"},"Lund-Org")," is a Github organization for open source projects."),l.a.createElement("p",null,"I'm mainly alone for now but there are some interesting projects :"),l.a.createElement("h3",null,l.a.createElement("a",{href:"https://github.com/Lund-Org/cherry",target:"_blank",rel:"noopener noreferrer"},"Cherry ",l.a.createElement("span",{role:"img","aria-label":"cherry emoji"},"\ud83c\udf52"))),l.a.createElement("p",null,"The main project, the most successful open source project I made, it is a node Framework I created from scratch. It is a very light framework which was built to match with every needs and where you can add plugins if you need more features. I didn't like the idea of some framework to provide a lot of tools but you don't it, and Cherry was made to solve this issue."),l.a.createElement("p",null,"As said, there are plugins you can add to Cherry, here are some basic features I provided :"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/Lund-Org/cherry-handlebars-connector",target:"_blank",rel:"noopener noreferrer"},"Cherry Handlebars Connector")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/Lund-Org/cherry-pug-connector",target:"_blank",rel:"noopener noreferrer"},"Cherry Pug Connector")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/Lund-Org/cherry-typeorm-connector",target:"_blank",rel:"noopener noreferrer"},"Cherry TypeORM Connector")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/Lund-Org/cherry-sequelize-connector",target:"_blank",rel:"noopener noreferrer"},"Cherry Sequelize Connector"))),l.a.createElement("p",null,"And of course a framework needs to come with a documentation which can be found ",l.a.createElement("a",{href:"https://github.com/Lund-Org/cherry-documentation",target:"_blank",rel:"noopener noreferrer"},"here")," (WIP)"),l.a.createElement("h3",null,l.a.createElement("a",{href:"https://github.com/Lund-Org/twitch-get-events",target:"_blank",rel:"noopener noreferrer"},"Twitch Get Events")),l.a.createElement("p",null,"This library was the first project of the organization made with another contributor. Back in time, Twitch had an event system that could be used to create a calendar. This feature has been removed, so this library can't be used anymore and the repository has been archived."),l.a.createElement("h3",null,"Livedeck"),l.a.createElement("p",null,"This project is separated in multiple apps. The idea behind it is to compete with the Streamdeck of Elgato with a free alternative solution."),l.a.createElement("p",null,"Everybody has a smartphone, so why not use it instead of the streamdeck to press buttons and interact with your stream ? So the idea was to have a ",l.a.createElement("a",{href:"https://github.com/Lund-Org/livedeck-remote-webapp",target:"_blank",rel:"noopener noreferrer"},"webapp")," on your smartphone which communicates with the ",l.a.createElement("a",{href:"https://github.com/Lund-Org/livedeck-server",target:"_blank",rel:"noopener noreferrer"},"livedeck server")," (with your presets and account). This server is linked to an ",l.a.createElement("a",{href:"https://github.com/Lund-Org/livedeck-software-webapp",target:"_blank",rel:"noopener noreferrer"},"electron app")," running on the stream computer."),l.a.createElement("p",null,"The project was never finished and is for now paused."),l.a.createElement("p",{className:"work-date"},"2018-2020")))},G=function(e){var t=e.timeline,a=Object(r.useState)(!1),n=Object(m.a)(a,2),o=n[0],i=n[1],c=Object(r.useState)({top:0}),s=Object(m.a)(c,2),u=s[0],p=s[1],h=Object(r.useState)(l.a.createRef()),d=Object(m.a)(h,1)[0];Object(r.useEffect)((function(){if(o){var e=window.getComputedStyle(d.current,null);p({top:"calc(50% - ".concat((parseInt(e.getPropertyValue("height"),10)+parseInt(e.getPropertyValue("padding-top"),10)+parseInt(e.getPropertyValue("padding-bottom"),10)+parseInt(e.getPropertyValue("margin-top"),10)+parseInt(e.getPropertyValue("margin-bottom"),10)+2*parseInt(e.getPropertyValue("border-width"),10))/2,"px)")})}}),[o,d]);return l.a.createElement("div",{className:"timeline-block"},l.a.createElement("div",{className:"bubble-container"},l.a.createElement("div",{className:"bubble",onClick:function(){i(!0)}})),l.a.createElement("div",{className:"right-side-timeline"},l.a.createElement("div",{className:"timeline-year"},t.year),l.a.createElement("div",{ref:d,style:u,className:"timeline-informations ".concat(o?"expanded":"")},t.facts.map((function(e,t){var a=e.texts.map((function(e,t){return l.a.createElement("p",{key:t},e)}));return l.a.createElement("div",{className:"fact-inset",key:t},a)})))))},K=a(23),Y={ABOUT_ROUTE:L,CONTACT_ROUTE:P,HOME_ROUTE:U,PROJECTS_ROUTE:q,TIMELINE_ROUTE:function(){return l.a.createElement("div",{className:"work-page"},K.map((function(e,t){return l.a.createElement(G,{timeline:e,key:t})})))}},X=function(e){for(var t in b)if(e===b[t])return t;return"HOME_ROUTE"},Z=function(){var e=y().currentRoute,t=Object(r.useState)(l.a.createElement(Y[X(e)])),a=Object(m.a)(t,2),n=a[0],o=a[1];return Object(r.useEffect)((function(){window.scrollTo(0,0),o(l.a.createElement(Y[X(e)]))}),[e]),n},$=function(){return l.a.createElement("div",{className:"app"},l.a.createElement(w,null,l.a.createElement(c.a,{basename:"/"},l.a.createElement(T,null),l.a.createElement("div",{className:"page-content"},l.a.createElement("div",{className:"page-container"},l.a.createElement(Z,null))))))};i.a.render(l.a.createElement($,null),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"label":"Javascript","rank":5,"technos":[{"label":"React","link":"https://reactjs.org/"},{"label":"Mocha (+ nyc)","link":"https://mochajs.org/"},{"label":"Hapi","link":"https://hapi.dev/"},{"label":"VueJS","link":"https://vuejs.org/"},{"label":"Express","link":"https://expressjs.com/"},{"label":"Yeoman","link":"https://yeoman.io/"}]},{"label":"Misc web technologies","rank":4,"technos":[{"label":"HTML/CSS","link":"https://developer.mozilla.org/fr/docs/Web/HTML"},{"label":"Haml","link":"http://haml.info/"},{"label":"Pug","link":"https://pugjs.org/api/getting-started.html"},{"label":"Handlebar","link":"https://handlebarsjs.com/"},{"label":"SASS","link":"https://sass-lang.com/"},{"label":"MySQL","link":"https://www.mysql.com/fr/"},{"label":"Responsive design","link":"https://fr.wikipedia.org/wiki/Site_web_r%C3%A9actif"},{"label":"And I love ergonomy and accessibility, to make a better web","link":null}]},{"label":"PHP","rank":4,"technos":[{"label":"Symfony","link":"https://symfony.com/"},{"label":"Laravel","link":"https://laravel.com/"},{"label":"Sylius","link":"https://sylius.com/"}]},{"label":"Ruby","rank":3,"technos":[{"label":"Rake","link":"https://github.com/ruby/rake"},{"label":"Ruby On Rails","link":"https://rubyonrails.org/"}]},{"label":"Sys\' admin & Cloud","rank":3,"technos":[{"label":"Docker","link":"https://www.docker.com/"},{"label":"AWS","link":"https://aws.amazon.com/fr/"},{"label":"Bash","link":"https://wiki.debian.org/fr/Bash"}]},{"label":"CI/CD/Automation","rank":3,"technos":[{"label":"Travis","link":"https://travis-ci.com/"},{"label":"Jenkins","link":"https://jenkins.io/"},{"label":"CodeClimate Quality","link":"https://codeclimate.com/quality/"}]},{"label":"Project management","rank":2,"technos":[{"label":"Technical analysis","link":null},{"label":"Task estimation","link":null},{"label":"Jira","link":"https://www.atlassian.com/fr/software/jira"},{"label":"UML","link":"https://en.wikipedia.org/wiki/Unified_Modeling_Language"}]},{"label":"Tools & OS","technos":[{"label":"VSCode","link":null},{"label":"Windows","link":null},{"label":"Unix (Debian, Ubuntu, Mint)","link":null},{"label":"Git","link":null},{"label":"Slack","link":null}]}]')}},[[26,1,2]]]);
//# sourceMappingURL=main.dddfd7fe.chunk.js.map