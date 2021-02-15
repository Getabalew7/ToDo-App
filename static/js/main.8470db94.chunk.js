(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{17:function(t,e,c){t.exports={item:"TodoItem_item__3aq2p",checkbox:"TodoItem_checkbox__35PrK",textInput:"TodoItem_textInput__3klQz"}},38:function(t,e,c){},39:function(t,e,c){"use strict";c.r(e);var n=c(1),o=c.n(n),a=c(24),i=c.n(a),s=c(8),r=c(11),l=c(22),d=c(9),u=c(16),j=c(17),b=c.n(j),h=c(2),p=function(t){var e=Object(n.useState)(!1),c=Object(d.a)(e,2),o=c[0],a=c[1],i={},s={};o?s.display="none":i.display="none";var r=t.todo,l=r.completed,j=r.id,p=r.title;return Object(n.useEffect)((function(){return function(){console.log("cleaning some memory")}}),[]),Object(h.jsxs)("li",{className:b.a.item,children:[Object(h.jsxs)("div",{onDoubleClick:function(){a(!0)},style:s,children:[Object(h.jsx)("input",{type:"checkbox",className:b.a.checkbox,checked:t.todo.completed,onChange:function(){return t.handleChangeprobs(j)}}),Object(h.jsx)("button",{onClick:function(){return t.deleteTodoProbs(j)},children:Object(h.jsx)(u.b,{style:{color:"orangered",fontSize:"16px"}})}),Object(h.jsx)("span",{style:l?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:p})]}),Object(h.jsx)("input",{type:"text",value:p,style:i,className:b.a.textInput,onChange:function(e){t.setUpdate(e.target.value,j)},onKeyDown:function(t){"Enter"===t.key&&a(!1)}})]})},x=function(t){return Object(h.jsx)("ul",{children:t.todos.map((function(e){return Object(h.jsx)(p,{todo:e,handleChangeprobs:t.handleChangeprobs,deleteTodoProbs:t.deleteTodoProbs,setUpdate:t.setUpdate},e.id)}))})},O=function(){return Object(h.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(h.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"Todos"})})},m=c(14),f=function(t){var e=Object(n.useState)({title:""}),c=Object(d.a)(e,2),o=c[0],a=c[1];return Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o.title.trim()?(t.addTodoProbs(o.title),a({title:""})):alert("Please enter title")},className:"form-container",children:[Object(h.jsx)("input",{type:"text",value:o.title,className:"input-text",placeholder:"Add todo...",name:"title",onChange:function(t){a(Object(r.a)(Object(r.a)({},o),{},Object(m.a)({},t.target.name,t.target.value)))}}),Object(h.jsx)("button",{className:"input-submit",children:Object(h.jsx)(u.a,{style:{color:"darkcyan",fontSize:"20px",marginTop:"2px"}})})]})},g=c(41),y=c(3),v=function(){var t=Object(y.f)().slug,e=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This app was developed by Getabalew A., self-tought from the web you can contact me on amtate21@gmail.com"}].find((function(e){return e.slug===t})),c=e.title,n=e.description;return Object(h.jsxs)("div",{className:"main_content",children:[Object(h.jsx)("h1",{children:c}),Object(h.jsx)("p",{children:n})]})},N=function(){var t=Object(y.g)(),e=t.url,c=t.path;return Object(h.jsxs)("div",{className:"about_content",children:[Object(h.jsxs)("ul",{className:"about_list",children:[Object(h.jsx)("li",{children:Object(h.jsx)(s.b,{to:"".concat(e,"/about-app"),children:"About App"})}),Object(h.jsx)("li",{children:Object(h.jsx)(s.b,{to:"".concat(e,"/about-author"),children:"About Author"})})]}),Object(h.jsx)(y.a,{path:"".concat(c,"/:slug"),children:Object(h.jsx)(v,{})})]})},k=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h3",{children:"Not match for this page"})})},S=c(26),T=c(27),w=function(){var t=Object(n.useState)(!1),e=Object(d.a)(t,2),c=e[0],o=e[1];return Object(h.jsxs)("nav",{className:"navBar",children:[Object(h.jsx)("button",{onClick:function(){o(!c)},children:c?Object(h.jsx)(S.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(h.jsx)(T.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})}),Object(h.jsx)("ul",{className:"menuNav ".concat(c?"showMenu":""),children:[{id:1,path:"/",text:"Home"},{id:2,path:"/about",text:"About"}].map((function(t){return Object(h.jsx)("li",{children:Object(h.jsx)(s.c,{to:t.path,activeClassName:"active-link",exact:!0,onClick:function(){o(!1)},children:t.text})},t.id)}))})]})};var A=function(){var t=Object(n.useState)(function(){var t=localStorage.getItem("todos");return JSON.parse(t)||[]}()),e=Object(d.a)(t,2),c=e[0],o=e[1];return Object(n.useEffect)((function(){var t=JSON.stringify(c);localStorage.setItem("todos",t)}),[c]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(w,{}),Object(h.jsxs)(y.c,{children:[Object(h.jsx)(y.a,{exact:!0,path:"/",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"inner",children:[Object(h.jsx)(O,{}),Object(h.jsx)(f,{addTodoProbs:function(t){var e={id:Object(g.a)(),title:t,completed:!1};o([].concat(Object(l.a)(c),[e]))}}),Object(h.jsx)(x,{todos:c,handleChangeprobs:function(t){o((function(e){return e.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{completed:!e.completed}):e}))}))},deleteTodoProbs:function(t){o(Object(l.a)(c.filter((function(e){return e.id!==t}))))},setUpdate:function(t,e){o(c.map((function(c){return c.id===e&&(c.title=t),c})))}})]})})}),Object(h.jsx)(y.a,{path:"/about",children:Object(h.jsx)(N,{})}),Object(h.jsx)(y.a,{exact:!0,path:"*",children:Object(h.jsx)(k,{})})]})]})};c(38);i.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(s.a,{children:Object(h.jsx)(A,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.8470db94.chunk.js.map