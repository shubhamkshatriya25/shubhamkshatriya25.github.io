(function(e){function t(t){for(var n,o,l=t[0],r=t[1],c=t[2],u=0,p=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,l=1;l<a.length;l++){var r=a[l];0!==i[r]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},i={app:0},s=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=r;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"25d4":function(e,t,a){},3103:function(e,t,a){},3802:function(e,t,a){},"490e":function(e,t,a){},"54b0":function(e,t,a){"use strict";a("7c15")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{staticClass:"app"},[a("Particles",{attrs:{id:"tsparticles",particlesInit:e.particlesInit,options:e.particlesOptions}}),a("v-main",[a("IndexScreen")],1)],1)},s=[],o=a("c7eb"),l=a("1da1"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"home-screen"},[a("div",{staticClass:"nav-tray"},[a("div",{staticClass:"nav-option",on:{click:function(t){return e.openCloseHome()}}},[e.isHomeOpen?a("folder-open"):a("folder-close"),a("p",{staticClass:"nav-title"},[e._v("Home")])],1),a("div",{staticClass:"nav-option",on:{click:function(t){return e.openCloseProjects()}}},[e.isProjectsOpen?a("folder-open"):a("folder-close"),a("p",{staticClass:"nav-title"},[e._v("Projects")])],1),a("div",{staticClass:"nav-option",on:{click:function(t){return e.openCloseExperience()}}},[e.isExperienceOpen?a("folder-open"):a("folder-close"),a("p",{staticClass:"nav-title"},[e._v("Experience")])],1),a("div",{staticClass:"nav-option",on:{click:function(t){return e.openCloseBlogs()}}},[e.isBlogsOpen?a("folder-open"):a("folder-close"),a("p",{staticClass:"nav-title"},[e._v("Blogs")])],1),a("div",{staticClass:"nav-option"},[a("a",{attrs:{href:this.publicPath+"files/resume.pdf",target:"_blank"}},[e._m(0)])])])]),e.isHomeOpen?a("HomeModal"):e._e(),e.isProjectsOpen?a("ProjectsModal"):e._e(),e.isExperienceOpen?a("ExperienceModal"):e._e(),e.isBlogsOpen?a("BlogsModal"):e._e()],1)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("img",{staticClass:"resume",attrs:{src:a("b9de"),alt:"pdf-icon"}}),n("p",{staticClass:"nav-title"},[e._v("Resume")])])}],d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal"},[a("div",{staticClass:"modal-header"},[a("span",{staticClass:"modal-icon close",on:{click:function(t){return e.closeHomeModal()}}},[a("v-icon",{staticClass:"close-icon"},[e._v("mdi-close")])],1),a("span",{staticClass:"modal-icon"}),a("span",{staticClass:"modal-icon"})]),a("div",{staticClass:"modal-body"},[a("h1",{staticStyle:{"text-align":"left"}},[e._v("Hello World, I'm Shubham!")]),e._m(0),a("p",[e._v(" In addition to my professional pursuits, I am an eternal student, constantly seeking to expand my knowledge and understanding of the world around me. I devour books like a hungry scholar, constantly seeking new insights and perspectives. And, like a mentor passing on their wisdom, I enjoy writing technical blogs to help and teach others in the community. ")]),a("p",[e._v(" My interests are as diverse as a colorful tapestry, from music and movies to anime, cricket and chess. I believe that it is important to be well-rounded and have a broad understanding of different fields. And, like a social butterfly, I am always on the lookout for new people to connect with and exchange ideas with. As the famous quote goes, 'The more that you read, the more things you will know. The more that you learn, the more places you'll go' - Dr. Seuss. I strive to go to as many places as I can, both physically and mentally, through the power of learning and connection. ")]),a("div",{staticClass:"social"},[a("p",[e._v("Find me on")]),a("a",{attrs:{href:"mailto:shubhamkshatriya521@gmail.com",target:"_blank"}},[a("v-icon",{staticClass:"social-icon gmail",staticStyle:{display:"block"}},[e._v("mdi-gmail")])],1),a("a",{attrs:{href:"https://www.linkedin.com/in/shubhamkshatriya25",target:"_blank"}},[a("v-icon",{staticClass:"social-icon linkedin",staticStyle:{display:"block"}},[e._v("mdi-linkedin")])],1),a("a",{attrs:{href:"https://www.instagram.com/s.h.u.b.h.a.m._25",target:"_blank"}},[a("v-icon",{staticClass:"social-icon instagram",staticStyle:{display:"block"}},[e._v("mdi-instagram")])],1),a("a",{attrs:{href:"https://twitter.com/shubhHAM_",target:"_blank"}},[a("v-icon",{staticClass:"social-icon twitter",staticStyle:{display:"block"}},[e._v("mdi-twitter")])],1),a("a",{attrs:{href:"https://github.com/shubhamkshatriya25",target:"_blank"}},[a("v-icon",{staticClass:"social-icon github",staticStyle:{display:"block"}},[e._v("mdi-github")])],1)])])])},u=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" As a software engineer at "),a("a",{staticClass:"company-link",attrs:{target:"_blank",href:"https://www.zeuslearning.com/"}},[e._v("Zeus Learning Pvt. Ltd.")]),e._v(", I am constantly striving to improve my skills and knowledge in the field of Information Technology. My journey in this field began in 2017, when I enrolled in the Bachelor of Engineering in Information Technology program at Sardar Vallabhbhai Patel Institute of Technology in Gujarat, India. Through hard work and dedication, I graduated with a CGPA of 9.71/10.0 in June 2021. ")])}],p={methods:{closeHomeModal:function(){this.$parent.$data.isHomeOpen=!1}}},m=p,h=(a("a778"),a("54b0"),a("2877")),f=a("6544"),v=a.n(f),b=a("132d"),g=Object(h["a"])(m,d,u,!1,null,"ac037c8c",null),y=g.exports;v()(g,{VIcon:b["a"]});var w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal"},[a("div",{staticClass:"modal-header"},[a("span",{staticClass:"modal-icon close",on:{click:function(t){return e.closeProjectsModal()}}},[a("v-icon",{staticClass:"close-icon"},[e._v("mdi-close")])],1),a("span",{staticClass:"modal-icon"}),a("span",{staticClass:"modal-icon"})]),a("div",{staticClass:"modal-body"},[a("h1",[e._v("Projects")]),a("div",{staticClass:"projects"},e._l(e.projects,(function(t,n){return a("div",{key:n,staticClass:"project-card"},[a("p",{staticClass:"project-timeline"},[e._v(e._s(t.timeline))]),a("details",[a("summary",{staticClass:"summaryroject-title"},[e._v(e._s(t.title))]),a("p",{staticClass:"project-description",domProps:{innerHTML:e._s(t.description)}})]),a("p",{staticClass:"project-stack"},[e._v(" Technology experience: "+e._s(t.stack)+" ")])])})),0)])])},k=[],C={name:"ProjectsModal",data:function(){return{projects:[{timeline:"Dec 2021 - Present",title:"Modolabs",stack:"Node.js, Express.js, TypeScript, PostgreSQL",description:"<ul>\n            <li>A cloud based application (SAAS) that provides services like streamline and coordinate bookings for work and study spaces</li>\n            <li>Developed database queries and their corresponding REST APIs</li>\n            <li>Optimized certain existing APIs to reduce the response time by 15% to 20%</li>\n          </ul>"},{timeline:"Feb 2021 - Nov 2021",title:"Beyond Labz",stack:"Vue.js, Pixi.js, Tailwind, X (aka Experience) API, Chart.js",description:"<ul>\n            <li>A web-based e-Learning application (LMS) that simulates virtual scientific labs</li>\n            <li>Implemented responsive sprite animations</li>\n            <li>Explored and integrated the X-API in the LMS to keep a track of each and every action performed by the students</li>\n            <li>Explored and created multiple charts to visualize real-time data, with support to zoom in and out on the chart</li>\n          </ul>"},{timeline:"Jun 2020 - Apr 2021",title:"Park ME: Your parking partner (Previously: Parkup)",stack:"Flutter, Firebase, RazorPay, Twilio, Figma",description:"<ul>\n            <li>A cross-platform mobile application for remote parking services at user's live location or at a specific place</li>\n            <li>Integrated Google Maps API and features like in-app payment gateway and SMS notifications</li>\n            <li>Created and integrated Firestore database and Firebase authentication</li>\n            <li>Designed the prototype of the application</li>\n          </ul>"},{timeline:"Feb 2020 - Aug 2020",title:"Legal WIZ",stack:"Python, Django, SQLite, Twilio, HTML, CSS, BootStrap, Vanilla JS",description:"<ul>\n            <li>Full stack web application (MIS) built at Smart India Hackathon 2020 (grand finale)</li>\n            <li>Designed the database architecture and built corresponding database queries</li>\n            <li>Created API endpoints and integrated them with the User Interface of the system</li>\n            <li>Led and managed the entire team right from the registration to the grand finale</li>\n          </ul>"},{timeline:"Nov 2019 - Jan 2020",title:"Spark",stack:"Kotlin, Firebase, Application development using Android",description:"<ul>\n            <li>A mobile application, and a website that provides fast, reliable and accurate sport event updates like live score and schedules, occuring in SVIT campus</li>\n            <li>Designed and developed the UI of the website</li>\n            <li>Developed the UI of the application</li>\n          </ul>"}]}},methods:{closeProjectsModal:function(){this.$parent.$data.isProjectsOpen=!1}}},_=C,x=(a("dd84"),a("fef4"),Object(h["a"])(_,w,k,!1,null,"394d8162",null)),j=x.exports;v()(x,{VIcon:b["a"]});var O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal"},[a("div",{staticClass:"modal-header"},[a("span",{staticClass:"modal-icon close",on:{click:function(t){return e.closeExperienceModal()}}},[a("v-icon",{staticClass:"close-icon"},[e._v("mdi-close")])],1),a("span",{staticClass:"modal-icon"}),a("span",{staticClass:"modal-icon"})]),a("div",{staticClass:"modal-body"},[a("h1",[e._v("Experience")]),a("div",{staticClass:"experience"},e._l(e.experiences,(function(t,n){return a("div",{key:n,staticClass:"experience-card"},[a("p",{staticClass:"experience-title"},[e._v(e._s(t.title))]),a("details",[a("summary",{staticClass:"company"},[e._v(e._s(t.company))]),a("p",{staticClass:"roles",domProps:{innerHTML:e._s(t.roles)}})]),a("p",{staticClass:"duration"},[e._v(e._s(t.duration))])])})),0)])])},S=[],P={name:"Experience",data:function(){return{experiences:[{duration:"Feb 2020 - Present",title:"Software Engineer",company:"Zeus Learning Pvt. Ltd.",roles:"<ul>\n            <li>Working on developing the backend of a SAAS using Node JS and PostgreSQL. Creating new REST APIs to serve the requirements as well as optimizing the existing ones</li>\n            <li>Worked on developing the user interface of a Learning Management System (LMS) using Pixi JS and Vue JS. Explored and integrated various APIs, made use of chart.js to visualize real-time data, and created sprite animations</li>\n            <li>Took the lead for the estimation and the development of the required features and delivered them whilst following proper code structure and validating lint and sonar qube errors</li>\n          </ul>"},{duration:"Jul 2019 - Jul 2022",title:"Co-founder and Managing Director",company:"Scudo Systems LLP",roles:"<ul>\n            <li>Innovated a low-cost two-wheeler security system that tracks the vehicle's location, captures the access points' GPS coordinates, and allows users to control their vehicles remotely</li>\n            <li>Selected in the Top 5 Startup out of 2,200 participants at the 2017 Start-Up India Yatra. Moreover, raised funds of approximately INR 8.60 lakhs to commercialize the invention</li>\n            <li>Worked on developing the prototype's technical design and coding solutions</li>\n            <li>Managed company's finance</li>\n          </ul>"},{duration:"Jul 2021 - Jun 2022",title:"Freelance Technical Content Writer",company:"Educative Inc",roles:'<ul>\n            <li>Wrote articles on popular frameworks and technologies, with an aim to make learning easy for developers around the world</li>\n            <li>My articles can be found at <a href="https://www.educative.io/profile/view/4908239310815232" target="_blank">here</a></li>\n          </ul>'},{duration:"Oct 2020 - Dec 2020",title:"Back End Developer Intern",company:"Piblitz",roles:"<ul>\n            <li>Worked on developing a robust file and folder uploader web app that allows a user to upload files of any size and folders of any hierarchy to a server chunk by chunk using AJAX and Django</li>\n            <li>Worked on developing a lazy image loader web app that retrieves data from the server in byte format and converts them into data-URI images using Web Workers and Django</li>\n            <li>Worked on developing a video-on-demand web app that streams a video to the user using AJAX and Django. The app supports features like play, pause and seek</li>\n            <li>Worked on optimizing the existing queries and cookies management</li>\n          </ul>"}]}},methods:{closeExperienceModal:function(){this.$parent.$data.isExperienceOpen=!1}}},M=P,I=(a("9b73"),a("dbb0"),Object(h["a"])(M,O,S,!1,null,"fea4ee04",null)),A=I.exports;v()(I,{VIcon:b["a"]});var E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal"},[a("div",{staticClass:"modal-header"},[a("span",{staticClass:"modal-icon close",on:{click:function(t){return e.closeBlogsModal()}}},[a("v-icon",{staticClass:"close-icon"},[e._v("mdi-close")])],1),a("span",{staticClass:"modal-icon"}),a("span",{staticClass:"modal-icon"})]),a("div",{staticClass:"modal-body"},[a("h1",[e._v("Blogs")]),a("div",{staticClass:"blogs"},e._l(e.blogs,(function(t,n){return a("div",{key:n,staticClass:"blog-card"},[a("small",[e._v(e._s(t.type))]),a("a",{attrs:{href:t.link,target:"_blank"}},[e._v(e._s(t.heading))]),a("p",[e._v(e._s(t.description))])])})),0)])])},H=[],V={name:"Blogs",data:function(){return{blogs:[{type:"Web Development",heading:"Upload a file in chunks using django and AJAX",link:"https://dev.to/shubhamkshatriya25/ajax-file-upload-in-chunks-using-django-with-a-progress-bar-4nhi",description:"\n            Imagine you are uploading a file whose size is 1GB to a server and until that file is completely uploaded you can't do anything. How painful! \n            The idea of uploading file as a whole turns out to be really painful while dealing with files whose sizes are in GBs. \n            There is a concept of uploading files in chunks which can be very handy. Let's see how can we upload a file in chunks to a django server using AJAX.\n          "},{type:"Web Development",heading:"Build a email newsletter subscriber using django and AJAX",link:"https://dev.to/shubhamkshatriya25/how-to-build-a-email-newsletter-subscriber-in-django-j2p",description:"\n            An email newsletter is an email that is sent out on a regular basis (e.g. weekly or monthly) to subscribed users. \n            As you’ll probably know by looking at your inboxes, email newsletters are a popular medium for businesses. \n            Let's see how to build an email newsletter subscriber using django and AJAX.\n          "},{type:"Exception Handling (JavaScript)",heading:"How does JavaScript handle Divide by Zero?",link:"https://www.educative.io/answers/how-does-javascript-handle-divide-by-zero",description:"\n          Divide by Zero is considered a special case by most programming languages. \n          Any number can never be divided by zero because its result is indeterminate. \n          But JavaScript never misses a chance to amaze everyone and handles a Divide by Zero in a different way. Let's see how!\n          "}]}},methods:{closeBlogsModal:function(){this.$parent.$data.isBlogsOpen=!1}}},z=V,B=(a("70ab"),a("a6c8"),Object(h["a"])(z,E,H,!1,null,"0ffb2f15",null)),T=B.exports;v()(B,{VIcon:b["a"]});var L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("svg",{staticClass:"folder-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 191 159"}},[a("defs"),a("g",{attrs:{id:"closed"}},[a("path",{staticClass:"folder-icon-outline",attrs:{d:"M159,30.5H82.5c-3,0-7-1-9-5s-4.67-6-8.83-6H31a12,12,0,0,0-12,12V127a12,12,0,0,0,12,12H159a12,12,0,0,0,12-12V42.5A12,12,0,0,0,159,30.5Z"}}),a("path",{staticClass:"folder-icon-bg",attrs:{d:"M159,30.5H82.5c-3,0-7-1-9-5s-4.67-6-8.83-6H31a12,12,0,0,0-12,12V127a12,12,0,0,0,12,12H159a12,12,0,0,0,12-12V42.5A12,12,0,0,0,159,30.5Z"}}),a("rect",{staticClass:"folder-icon-outline",attrs:{x:"19",y:"43",width:"152",height:"96",rx:"12",ry:"12"}}),a("rect",{staticClass:"folder-icon-fg",attrs:{x:"19",y:"43",width:"152",height:"96",rx:"12",ry:"12"}})])])},J=[],D=(a("f948"),{}),$=Object(h["a"])(D,L,J,!1,null,null,null),q=$.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("svg",{staticClass:"folder-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 191 159"}},[a("g",{attrs:{id:"open"}},[a("path",{staticClass:"folder-icon-outline",attrs:{d:"M159,30.5H82.5c-3,0-7-1-9-5s-4.67-6-8.83-6H31a12,12,0,0,0-12,12V127a12,12,0,0,0,12,12H159a12,12,0,0,0,12-12V42.5A12,12,0,0,0,159,30.5Z"}}),a("path",{staticClass:"folder-icon-bg",attrs:{d:"M159,30.5H82.5c-3,0-7-1-9-5s-4.67-6-8.83-6H31a12,12,0,0,0-12,12V127a12,12,0,0,0,12,12H159a12,12,0,0,0,12-12V42.5A12,12,0,0,0,159,30.5Z"}}),a("path",{staticClass:"folder-icon-outline",attrs:{d:"M172,43H44c-6.6,0-10.5,4.5-12,12s-12.5,65.5-13,72,5.4,12,12,12H159c6.6,0,10.5-3.5,12-12s11.5-64.5,13-72S178.6,43,172,43Z"}}),a("path",{staticClass:"folder-icon-fg",attrs:{d:"M172,43H44c-6.6,0-10.5,4.5-12,12s-12.5,65.5-13,72,5.4,12,12,12H159c6.6,0,10.5-3.5,12-12s11.5-64.5,13-72S178.6,43,172,43Z"}})])])},F=[],R={},Z=Object(h["a"])(R,W,F,!1,null,null,null),X=Z.exports,G={name:"IndexScreen",components:{HomeModal:y,ProjectsModal:j,ExperienceModal:A,BlogsModal:T,FolderClose:q,FolderOpen:X},data:function(){return{isHomeOpen:!0,isProjectsOpen:!1,isExperienceOpen:!1,isBlogsOpen:!1,publicPath:"/"}},methods:{openCloseHome:function(){this.closeOtherModals("Home"),this.isHomeOpen=!this.isHomeOpen},openCloseProjects:function(){this.closeOtherModals("Projects"),this.isProjectsOpen=!this.isProjectsOpen},openCloseExperience:function(){this.closeOtherModals("Experience"),this.isExperienceOpen=!this.isExperienceOpen},openCloseBlogs:function(){this.closeOtherModals("Blogs"),this.isBlogsOpen=!this.isBlogsOpen},closeOtherModals:function(e){"Home"!==e&&(this.isHomeOpen=!1),"Projects"!==e&&(this.isProjectsOpen=!1),"Experience"!==e&&(this.isExperienceOpen=!1),"Blogs"!==e&&(this.isBlogsOpen=!1)},downloadResume:function(){var e=document.createElement("a");e.setAttribute("download","Resume Shubham_Singh_Kshatriya"),e.href="".concat(this.publicPath,"files/resume.pdf"),document.body.appendChild(e),e.click(),e.remove()}}},U=G,N=(a("a80d"),Object(h["a"])(U,r,c,!1,null,"77025610",null)),Q=N.exports,K=a("01c8"),Y={autoPlay:!0,defaultThemes:{},delay:0,fullScreen:{enable:!0,zIndex:1},detectRetina:!0,duration:0,fpsLimit:120,interactivity:{detectsOn:"window",events:{onClick:{enable:!1},onDiv:{selectors:[],enable:!1,mode:[],type:"circle"},onHover:{enable:!0,mode:"bubble",parallax:{enable:!0,force:15,smooth:15}},resize:{delay:.5,enable:!0}},modes:{attract:{distance:200,duration:.4,easing:"ease-out-quad",factor:1,maxSpeed:50,speed:1},bounce:{distance:200},bubble:{distance:250,duration:2,mix:!1,opacity:0,size:0,divs:{distance:200,duration:.4,mix:!1,selectors:[]}},connect:{distance:80,links:{opacity:.5},radius:60},grab:{distance:400,links:{blink:!1,consent:!1,opacity:1}},push:{default:!0,groups:[],quantity:4},remove:{quantity:2},repulse:{distance:400,duration:.4,factor:100,speed:1,maxSpeed:50,easing:"ease-out-quad",divs:{distance:200,duration:.4,factor:100,speed:1,maxSpeed:50,easing:"ease-out-quad",selectors:[]}},slow:{factor:3,radius:200},trail:{delay:1,pauseOnStop:!1,quantity:1},light:{area:{gradient:{start:{value:"#ffffff"},stop:{value:"#000000"}},radius:1e3},shadow:{color:{value:"#000000"},length:2e3}}}},manualParticles:[],particles:{bounce:{horizontal:{random:{enable:!1,minimumValue:.1},value:1},vertical:{random:{enable:!1,minimumValue:.1},value:1}},collisions:{absorb:{speed:2},bounce:{horizontal:{random:{enable:!1,minimumValue:.1},value:1},vertical:{random:{enable:!1,minimumValue:.1},value:1}},enable:!1,mode:"bounce",overlap:{enable:!0,retries:0}},color:{value:"#ffffff",animation:{h:{count:0,enable:!1,offset:0,speed:1,decay:0,sync:!0},s:{count:0,enable:!1,offset:0,speed:1,decay:0,sync:!0},l:{count:0,enable:!1,offset:0,speed:1,decay:0,sync:!0}}},groups:{},move:{angle:{offset:0,value:90},attract:{distance:200,enable:!1,rotate:{x:600,y:600}},center:{x:50,y:50,mode:"percent",radius:0},decay:0,distance:{},direction:"none",drift:0,enable:!0,gravity:{acceleration:9.81,enable:!1,inverse:!1,maxSpeed:50},path:{clamp:!0,delay:{random:{enable:!1,minimumValue:0},value:0},enable:!1,options:{}},outModes:{default:"out",bottom:"out",left:"out",right:"out",top:"out"},random:!0,size:!1,speed:1,spin:{acceleration:0,enable:!1},straight:!1,trail:{enable:!1,length:10,fillColor:{value:"#000000"}},vibrate:!1,warp:!1},number:{density:{enable:!0,area:800,factor:1e3},limit:0,value:160},opacity:{random:{enable:!0,minimumValue:.1},value:{min:0,max:1},animation:{count:0,enable:!0,speed:1,decay:0,sync:!1,destroy:"none",startValue:"random",minimumValue:0}},reduceDuplicates:!1,shadow:{blur:0,color:{value:"#000"},enable:!1,offset:{x:0,y:0}},shape:{options:{},type:"circle"},size:{random:{enable:!0,minimumValue:1},value:{min:1,max:3},animation:{count:0,enable:!1,speed:4,decay:0,sync:!1,destroy:"none",startValue:"random",minimumValue:.3}},stroke:{width:0},zIndex:{random:{enable:!1,minimumValue:0},value:0,opacityRate:1,sizeRate:1,velocityRate:1},life:{count:0,delay:{random:{enable:!1,minimumValue:0},value:0,sync:!1},duration:{random:{enable:!1,minimumValue:1e-4},value:0,sync:!1}},rotate:{random:{enable:!1,minimumValue:0},value:0,animation:{enable:!1,speed:0,decay:0,sync:!1},direction:"clockwise",path:!1},destroy:{bounds:{},mode:"none",split:{count:1,factor:{random:{enable:!1,minimumValue:0},value:3},rate:{random:{enable:!1,minimumValue:0},value:{min:4,max:9}},sizeOffset:!0}},roll:{darken:{enable:!1,value:0},enable:!1,enlighten:{enable:!1,value:0},mode:"vertical",speed:25},tilt:{random:{enable:!1,minimumValue:0},value:0,animation:{enable:!1,speed:0,decay:0,sync:!1},direction:"clockwise",enable:!1},twinkle:{lines:{enable:!1,frequency:.05,opacity:1},particles:{enable:!1,frequency:.05,opacity:1}},wobble:{distance:5,enable:!1,speed:{angle:50,move:10}},orbit:{animation:{count:0,enable:!1,speed:1,decay:0,sync:!1},enable:!1,opacity:1,rotation:{random:{enable:!1,minimumValue:0},value:45},width:1},links:{blink:!1,color:{value:"#ffffff"},consent:!1,distance:150,enable:!1,frequency:1,opacity:.4,shadow:{blur:5,color:{value:"#000"},enable:!1},triangles:{enable:!1,frequency:1},width:1,warp:!1},repulse:{random:{enable:!1,minimumValue:0},value:0,enabled:!1,distance:1,duration:1,factor:1,speed:1}},pauseOnBlur:!0,pauseOnOutsideViewport:!0,responsive:[],smooth:!1,style:{},themes:[],zLayers:100},ee={name:"App",components:{IndexScreen:Q},data:function(){return{particlesOptions:Y}},methods:{particlesInit:function(){var e=Object(l["a"])(Object(o["a"])().mark((function e(t){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(K["a"])(t);case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),particlesLoaded:function(){var e=Object(l["a"])(Object(o["a"])().mark((function e(t){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("Particles container loaded",t);case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}},te=ee,ae=(a("5c0b"),a("7496")),ne=a("f6c4"),ie=Object(h["a"])(te,i,s,!1,null,null,null),se=ie.exports;v()(ie,{VApp:ae["a"],VMain:ne["a"]});var oe=a("f309");n["a"].use(oe["a"]);var le=new oe["a"]({theme:{disable:!0}}),re=a("bf15");n["a"].config.productionTip=!1,n["a"].use(re["a"]),new n["a"]({vuetify:le,render:function(e){return e(se)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"6f4b":function(e,t,a){},"70ab":function(e,t,a){"use strict";a("3802")},"7c15":function(e,t,a){},"98e0":function(e,t,a){},"9b73":function(e,t,a){"use strict";a("490e")},"9c0c":function(e,t,a){},a6c8:function(e,t,a){"use strict";a("6f4b")},a778:function(e,t,a){"use strict";a("25d4")},a80d:function(e,t,a){"use strict";a("cdf0")},af70:function(e,t,a){},b9de:function(e,t,a){e.exports=a.p+"img/pdf.3026ea74.png"},cdf0:function(e,t,a){},da46:function(e,t,a){},dbb0:function(e,t,a){"use strict";a("3103")},dd84:function(e,t,a){"use strict";a("98e0")},f948:function(e,t,a){"use strict";a("af70")},fef4:function(e,t,a){"use strict";a("da46")}});
//# sourceMappingURL=app.b70e4b53.js.map