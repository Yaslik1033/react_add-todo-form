(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),s=a(6),r=a(2),o=a(1),c=a(0),l=function(e){var t=e.users,a=e.todos;return Object(c.jsx)("ul",{children:t.map((function(e){var t=a.filter((function(t){return t.userId===e.id}));return t.length?Object(c.jsxs)("li",{children:[Object(c.jsx)("h2",{children:e.name}),Object(c.jsx)("ul",{children:t.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("p",{className:e.completed?"completed-todo":"",children:e.title})},e.id)}))})]},e.name):null}))})},u=(a(13),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),d=[{userId:1,id:1,title:"delectus aut autem",completed:!0},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],m=function(){var e=Object(o.useState)("no-user"),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),m=Object(r.a)(i,2),h=m[0],b=m[1],p=Object(o.useState)(!1),j=Object(r.a)(p,2),g=j[0],y=j[1],O=Object(o.useState)(Object(s.a)(d)),S=Object(r.a)(O,2),x=S[0],f=S[1],v=Object(o.useState)(d[d.length-1].id+1),w=Object(r.a)(v,2),k=w[0],C=w[1],z=Object(o.useState)(!1),P=Object(r.a)(z,2),D=P[0],L=P[1],A=Object(o.useState)(""),K=Object(r.a)(A,2),M=K[0],R=K[1],I=function(e){var t=e.target,a=t.value,i=t.id;switch(L(!1),i){case"usersSelect":n(a);break;case"todoTitle":b(a);break;case"toDoStatus":y(!g)}},N=function(){n("no-user"),b(""),y(!1)};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=u.find((function(e){return e.name===a}));return"no-user"===a?(R("Please choose a user"),L(!0),null):""===h?(R("Please enter the title"),L(!0),null):void 0===t?(N(),null):(f([].concat(Object(s.a)(x),[{title:h,completed:g,id:k,userId:t.id}])),C(k+1),N(),null)},children:[Object(c.jsx)("input",{name:"todoTitle",id:"todoTitle",type:"text",placeholder:"Title",value:h,onChange:I}),Object(c.jsxs)("label",{htmlFor:"usersSelect",children:[Object(c.jsx)("span",{children:"Choose a user"}),Object(c.jsxs)("select",{name:"usersSelect",id:"usersSelect",value:a,onChange:I,children:[Object(c.jsx)("option",{value:"no-user",disabled:!0,children:"Choose a user"}),u.map((function(e){return Object(c.jsx)("option",{value:e.name,children:e.name},e.username)}))]})]}),Object(c.jsxs)("label",{htmlFor:"toDoStatus",children:[Object(c.jsx)("span",{children:"Is completed?"}),Object(c.jsx)("input",{type:"checkbox",id:"toDoStatus",checked:g,onChange:I})]}),Object(c.jsx)("button",{type:"submit",children:"Add"})]}),D&&Object(c.jsx)("div",{className:"error",children:Object(c.jsx)("p",{children:M})}),Object(c.jsx)(l,{users:u,todos:x})]})};i.a.render(Object(c.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.407027fc.chunk.js.map