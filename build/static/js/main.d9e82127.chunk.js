(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/logo.3dba69b4.png"},25:function(e,t,a){e.exports=a.p+"static/media/location.7df97da9.png"},26:function(e,t,a){e.exports=a.p+"static/media/phone.cea36efd.png"},27:function(e,t,a){e.exports=a.p+"static/media/email.3aba56da.png"},29:function(e,t,a){e.exports=a.p+"static/media/heroImage.85ad6dc5.png"},30:function(e,t,a){e.exports=a(69)},35:function(e,t,a){},36:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),i=a.n(c),o=(a(35),a(14));a(36);var l=function(e){return r.a.createElement("nav",{className:"navbar"+(e.color?" is-".concat(e.color):"")+(e.spaced?" is-spaced":"")},e.children)},s=a(22),m=a(9),u=a(6),d=a(11),p=a.n(d),h=a(2),f=a(8);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach(function(t){Object(s.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var v=Object(h.a)(),b=Object(n.createContext)(),w=Object(u.f)(function(e){var t=e.children,a=Object(m.a)(e,["children"]);return r.a.createElement(b.Provider,{history:v,value:a},t)});function N(e){var t=e.children;return r.a.createElement(u.b,{history:v},r.a.createElement(w,null,r.a.createElement(j,null),t))}function y(){var e=Object(n.useContext)(b);if(!e)throw new Error("useRouter may only be called within <Router />");return E({push:e.history.push,replace:e.history.replace,pathname:e.location.pathname,query:E({},p.a.parse(e.location.search),{},e.match.params)},e)}function j(){var e=y();return Object(n.useEffect)(function(){window.scrollTo(0,0)},[e.pathname]),null}var O=a(7),k=a.n(O),x=Object(n.createContext)();function _(e){var t=e.children,a=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(function(){var e=k.a.onChange(function(e){r(e)});return function(){return e()}},[]),{user:a,signin:function(e,t){return k.a.signin(e,t).then(function(e){return r(e),e})},signup:function(e,t){return k.a.signup(e,t).then(function(e){return r(e),e})},signout:function(){return k.a.signout().then(function(){r(!1)})},sendPasswordResetEmail:function(e){return k.a.sendPasswordResetEmail(e)},confirmPasswordReset:function(e,t){var a=t||z("code");return k.a.confirmPasswordReset(e,a)}}}();return r.a.createElement(x.Provider,{value:a},t)}var S=function(){return Object(n.useContext)(x)};var z=function(e){return p.a.parse(window.location.search)[e]};a(57);var P=function(e){var t=S(),a=Object(n.useState)(!1),c=Object(o.a)(a,2),i=c[0],s=c[1];return r.a.createElement(l,{spaced:e.spaced,color:e.color},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("div",null,r.a.createElement(f.a,{to:"/"},r.a.createElement("img",{className:"image",width:"200px",height:"50px",src:e.logo,alt:"Logo"}))),r.a.createElement("div",{className:"navbar-burger burger"+(i?" is-active":""),onClick:function(){return s(!i)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{className:"navbar-menu"+(i?" is-active":"")},r.a.createElement("div",{className:"navbar-end"},t.user&&r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement(f.a,{className:"navbar-link",to:"/"},"Account"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement(f.a,{className:"navbar-item",to:"/dashboard"},"Dashboard"),r.a.createElement(f.a,{className:"navbar-item",to:"/signout",onClick:function(e){e.preventDefault(),t.signout()}},"Sign out"))),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{className:"navbar-item",href:"#heroSection"},"Home"),r.a.createElement("a",{className:"navbar-item",href:"#featuresSection"},"Features"),r.a.createElement("a",{className:"navbar-item",href:"#contactSection"},"Contact"))))))};a(58);var C=function(e){return r.a.createElement("div",{className:"BackgroundImage",style:{"--image":"url(".concat(e.image,")"),"--opacity":e.opacity}})};a(59);var F=function(e){var t=e.color,a=e.size,n=e.backgroundImage,c=e.backgroundImageOpacity,i=(e.children,Object(m.a)(e,["color","size","backgroundImage","backgroundImageOpacity","children"]));return r.a.createElement("section",Object.assign({className:"SectionComponent hero section is-block is-relative"+(t?" is-".concat(t):"")+(a?" is-".concat(a):"")},i),n&&r.a.createElement(C,{image:n,opacity:c}),e.children)};a(60);var D=function(e){return r.a.createElement(r.a.Fragment,null,(e.title||e.subtitle)&&r.a.createElement("header",{className:"SectionHeader__header"+(e.centered?" is-centered":"")},e.title&&r.a.createElement("h1",{className:"title is-spaced has-text-weight-bold"+(e.size?" is-".concat(e.size):"")+(1===e.size?" is-size-2-mobile":"")},e.title),e.subtitle&&r.a.createElement("p",{className:"subtitle"+(e.size>4?" is-6":"")},e.subtitle)))};a(61);a(62);var H=function(e){return r.a.createElement(F,{color:e.color,size:e.size},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-vcentered is-desktop"},r.a.createElement("div",{className:"column is-5-desktop has-text-centered-touch"},r.a.createElement(D,{title:e.title,subtitle:e.subtitle,size:1})),r.a.createElement("div",{className:"column is-1"}),r.a.createElement("div",{className:"column"},r.a.createElement("figure",{className:"HeroSection__image image"},r.a.createElement("img",{src:e.image,alt:"Illustration"}))))))};a(63);var I=function(e){return r.a.createElement("div",{className:"Features"},e.items.map(function(e,t){return r.a.createElement("div",{className:"Features__columns columns is-variable is-8 is-vcentered has-text-centered-mobile",key:t},r.a.createElement("div",{className:"column is-half"},r.a.createElement("h3",{className:"Features__title title has-text-weight-bold is-spaced is-3"},e.title),r.a.createElement("p",{className:"subtitle"},e.description)),r.a.createElement("div",{className:"column"},r.a.createElement("figure",{className:"Features__image image"},r.a.createElement("img",{src:e.image,alt:e.title}))))}))};a(64);var W=function(e){return r.a.createElement(F,{color:e.color,size:e.size},r.a.createElement("div",{className:"container"},r.a.createElement(D,{title:"WHAT WE DO",centered:!0,size:3}),r.a.createElement(I,{items:[{title:"Strategy",description:"With data capabilities of a media agency coupled with the cultural analysis of a creative-driven research firm, we bring companies closer to their customers.",image:"https://uploads.divjoy.com/undraw-mind_map_cwng.svg"},{title:"Creative",description:"With so many writers, designers, photographers, editors and animators with one common goal: blowing business objectives (and minds) out of the water.",image:"https://uploads.divjoy.com/undraw-personal_settings_kihd.svg"},{title:"Product and Service Development",description:"With our diverse teams of professionals you'll see agile product development and business innovation for the now.",image:"https://uploads.divjoy.com/undraw-having_fun_iais.svg"},{title:"Business Design",description:"Enabling digital transformations we manage to drive growth and scale innovation.",image:"https://uploads.divjoy.com/undraw-balloons_vxx5.svg"}]})))},R=a(71),B=a(72),A=a(25),L=a.n(A),T=a(26),G=a.n(T),J=a(27),M=a.n(J);a(65);var q=function(e){return r.a.createElement(R.a,{style:{marginLeft:"10px",marginRight:"10px",paddingBottom:"30px"}},r.a.createElement(B.a,{className:"contactElem",md:4},r.a.createElement("img",{src:L.a,width:80}),r.a.createElement("h1",{className:"contactHeader"},"Address"),r.a.createElement("p",null,"Skopje, Macedonia 1000, MK")),r.a.createElement(B.a,{className:"contactElem",md:4},r.a.createElement("img",{src:G.a,width:80}),r.a.createElement("h1",{className:"contactHeader"},"Phone"),r.a.createElement("p",null,"+389 70 226 861")),r.a.createElement(B.a,{className:"contactElem",md:4},r.a.createElement("img",{src:M.a,width:80}),r.a.createElement("h1",{className:"contactHeader"},"Email"),r.a.createElement("p",null,"info@scg.mk")))},K=a(29),$=a.n(K);a(66);var Q=function(e){return y(),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"heroSection"},r.a.createElement(H,{color:"white",size:"medium",title:"Empowering those who can advance the world",subtitle:"We are a full-service agency that helps companies thrive in the digital landscape.",image:$.a})),r.a.createElement("div",{id:"featuresSection"},r.a.createElement(W,{color:"white",size:"medium",title:"Features",subtitle:"."})),r.a.createElement("div",{id:"contactSection"},r.a.createElement(q,null)))};a(67);var U=function(e){return r.a.createElement(F,{color:e.color,size:e.size},r.a.createElement("div",{className:"FooterComponent__container container"},r.a.createElement("div",{className:"brand left"},r.a.createElement(f.a,{to:"/"},r.a.createElement("img",{src:e.logo,width:"120px",height:"30px",alt:"Logo"}))),r.a.createElement("div",{className:"links right"},r.a.createElement("a",{href:"#heroSection"},"Home"),r.a.createElement("a",{href:"#featuresSection"},"Features"),r.a.createElement("a",{href:"#contactSection"},"Contact")),r.a.createElement("div",{className:"social right"},r.a.createElement("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-twitter"}))),r.a.createElement("a",{href:"https://www.facebook.com/Skopje-Consulting-Group-102594877783931/?modal=admin_todo_tour",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-facebook-f"}))),r.a.createElement("a",{href:"https://www.linkedin.com/company/skopje-consulting-group/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-linkedin"})))),r.a.createElement("div",{className:"copyright left"},e.copyright)))},V=a(18),X=a.n(V);a(68);var Y=function(e){return r.a.createElement(_,null,r.a.createElement(N,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{color:"white",spaced:!0,logo:X.a}),r.a.createElement(f.c,null,r.a.createElement(f.b,{exact:!0,path:"/",component:Q}),r.a.createElement(f.b,{component:function(e){var t=e.location;return r.a.createElement("div",{style:{padding:"50px",width:"100%",textAlign:"center"}},"The page ",r.a.createElement("code",null,t.pathname)," could not be found.")}})),r.a.createElement(U,{color:"light",size:"normal",logo:X.a,copyright:"\xa9 2019 Skopje Consulting Group"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.d9e82127.chunk.js.map