(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),o=n.n(a),i=n(4),r=n.n(i),s=(n(10),n(2)),l=function(){var t=Object(a.useState)((function(){return window.localStorage.getItem("name")||"(ismini girmek i\xe7in t\u0131kla)"})),e=Object(s.a)(t,2),n=e[0],o=e[1];return Object(a.useEffect)((function(){document.title="".concat(n,"'s To Do List"),localStorage.setItem("name",n)})),Object(c.jsxs)("div",{children:[Object(c.jsxs)("span",{onClick:function(){o(prompt("Ad\u0131n ne \u015fekerlik?"))},children:["Merhaba, ",n,"."]}),function(){var t=new Date,e=t.toLocaleDateString("tr-TR"),n=t.toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}),c=t.toLocaleString("tr-TR",{weekday:"long"});return" ".concat(e," | ").concat(n," | ").concat(c)}()]})},j=function(){return Object(c.jsxs)("header",{children:[Object(c.jsx)("h1",{className:"title",children:"TO DO LIST"}),Object(c.jsx)("div",{className:"header-date",children:Object(c.jsx)("span",{className:"zaman",children:Object(c.jsx)(l,{})})})]})};var d=function(t){var e=Object(a.useState)(""),n=Object(s.a)(e,2),o=n[0],i=n[1];return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{className:"todo-form",onSubmit:function(t){t.preventDefault()},children:[Object(c.jsx)("input",{type:"text",name:"todo-input",className:"todo-input",placeholder:"S\xfct al",value:o,onChange:function(t){i(t.target.value)}}),Object(c.jsx)("button",{className:"todo-button",children:"+"})]})})};var u=function(){return Object(c.jsxs)("div",{className:"todo-app",children:[Object(c.jsx)(j,{}),Object(c.jsx)(d,{})]})};r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.805c2539.chunk.js.map