(this["webpackJsonpwatch-app"]=this["webpackJsonpwatch-app"]||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),s=n(15),o=n.n(s),r=(n(22),n(23),n(10)),i=n(2),j=n(7),l=(n(24),n(1)),u=function(){var t=Object(c.useState)(),e=Object(j.a)(t,2),n=e[0],a=e[1];return Object(c.useEffect)((function(){setInterval((function(){var t=new Date;a(t.toLocaleTimeString())}),1e3)}),[]),Object(l.jsx)("div",{className:"digital-clock",children:Object(l.jsx)("h2",{children:n})})},b=(n(26),function(){var t=Object(c.useState)(0),e=Object(j.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)(!1),o=Object(j.a)(s,2),r=o[0],i=o[1];return Object(c.useEffect)((function(){var t=null;return r?t=setInterval((function(){a((function(t){return t+10}))}),10):clearInterval(t),function(){return clearInterval(t)}}),[r]),Object(l.jsxs)("div",{className:"stopwatch",children:[Object(l.jsxs)("h2",{children:[Object(l.jsxs)("span",{children:[("0"+Math.floor(n/6e4%60)).slice(-2),":"]}),Object(l.jsxs)("span",{children:[("0"+Math.floor(n/1e3%60)).slice(-2),":"]}),Object(l.jsx)("span",{children:("0"+n/10%100).slice(-2)})]}),Object(l.jsxs)("div",{id:"buttons",children:[!r&&0===n&&Object(l.jsx)("button",{className:"buttons",onClick:function(){return i(!0)},children:"Start"}),r&&Object(l.jsx)("button",{className:"buttons",onClick:function(){return i(!1)},children:"Stop"}),!r&&n>0&&Object(l.jsx)("button",{className:"buttons",onClick:function(){return a(0)},children:"Reset"}),!r&&n>0&&Object(l.jsx)("button",{className:"buttons",onClick:function(){return i(!0)},children:"Resume"})]})]})}),h=(n(27),function(){var t=Object(c.useState)(""),e=Object(j.a)(t,2),n=e[0],a=e[1];return Object(c.useEffect)((function(){var t=new Date("2021/12/3").getTime(),e=setInterval((function(){var n=(new Date).getTime(),c=t-n,s=Math.floor(c/864e5),o=Math.floor(c%864e5/36e5),r=Math.floor(c%36e5/6e4),i=Math.floor(c%6e4/1e3);a(s+"d "+o+"h "+r+"m "+i+"s "),c<0&&(clearInterval(e),a("COUNTDOWN FINISHED"))}),1e3)}),[]),Object(l.jsx)("div",{className:"countdown",children:Object(l.jsx)("h2",{children:n})})}),d=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)("div",{className:"title",children:" WATCHES APP "}),Object(l.jsxs)("header",{className:"navbar",children:[Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)("button",{className:"navbar-button",children:"DigitalClock"})}),Object(l.jsx)(r.b,{to:"/Stopwatch",children:Object(l.jsx)("button",{className:"navbar-button",children:"Stopwatch"})}),Object(l.jsxs)(r.b,{to:"/Countdown",children:[Object(l.jsx)("button",{className:"navbar-button",children:"Countdown"}),Object(l.jsx)("div",{className:"photo"})]})]}),Object(l.jsx)("div",{className:"hour",children:Object(l.jsxs)("main",{children:[Object(l.jsx)(i.a,{exact:!0,path:"/",component:u}),Object(l.jsx)(i.a,{path:"/Stopwatch",component:b}),Object(l.jsx)(i.a,{path:"/Countdown",component:h})]})})]})})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),s(t),o(t)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),O()}},[[33,1,2]]]);
//# sourceMappingURL=main.c4b26e0d.chunk.js.map