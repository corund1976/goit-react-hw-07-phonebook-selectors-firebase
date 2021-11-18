(this["webpackJsonpgoit-react-hw-07-phonebook-selectors-firebase"]=this["webpackJsonpgoit-react-hw-07-phonebook-selectors-firebase"]||[]).push([[0],{18:function(t,e,n){t.exports={label:"Filter_label__Mfmxg",input:"Filter_input__BokJI"}},19:function(t,e,n){t.exports={contactList:"ContactList_contactList__2kptz",contactItem:"ContactList_contactItem__3n5L2"}},20:function(t,e,n){t.exports={contact:"Contact_contact__3ghDz",btn:"Contact_btn__2f3-y"}},31:function(t,e,n){t.exports={container:"Container_container__39nsi"}},32:function(t,e,n){t.exports={section:"Section_section__111F9",title:"Section_title__15925"}},44:function(t,e,n){},45:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(14),o=n.n(r),s=n(3),u=(n(44),n(45),n(31)),i=n.n(u),b=n(1);var l=function(t){var e=t.children;return Object(b.jsx)("div",{className:i.a.container,children:e})},j=n(32),f=n.n(j);var p=function(t){var e=t.children;return Object(b.jsx)("section",{className:f.a.section,children:e})},d=n(21),m=n(9),O=n.n(m),h=n(4),v=n.n(h),x=n(8),_=n(2),C=Object(_.b)("contacts/getContactsRequest"),y=Object(_.b)("contacts/getContactsSuccess"),w=Object(_.b)("contacts/getContactsError"),k=Object(_.b)("contacts/addContactRequest"),g=Object(_.b)("contacts/addContactSuccess"),N=Object(_.b)("contacts/addContactError"),F=Object(_.b)("contacts/deleteContactRequest"),L=Object(_.b)("contacts/deleteContactSuccess"),S=Object(_.b)("contacts/deleteContactError"),z=Object(_.b)("contacts/ChangeFilter"),A=n(11),q=n.n(A);function E(){return I.apply(this,arguments)}function I(){return(I=Object(x.a)(v.a.mark((function t(){var e,n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q.a.get("/contacts.json");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(t){return J.apply(this,arguments)}function J(){return(J=Object(x.a)(v.a.mark((function t(e){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q.a.post("/contacts.json",e);case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Z(t){return B.apply(this,arguments)}function B(){return(B=Object(x.a)(v.a.mark((function t(e){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q.a.delete("/contacts/"+e+".json");case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}q.a.defaults.baseURL="https://goit-react-hw-07-phonebo-3e645-default-rtdb.europe-west1.firebasedatabase.app/";var D=function(t){return t.contacts.items},M=function(t){return t.contacts.filter},P=function(t){var e=D(t),n=M(t),c=n.trim().toLowerCase();return e.filter((function(t){var e=t.name,a=t.number;return e.toLowerCase().includes(c)||a.includes(n.trim())}))};var T=function(){var t=Object(c.useState)(""),e=Object(d.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),o=Object(d.a)(r,2),u=o[0],i=o[1],l=Object(s.c)(D),j=Object(s.b)(),f=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":a(c);break;case"number":i(c);break;default:return}},p=function(){a(""),i("")};return Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=n.toLowerCase();l.some((function(t){return t.name.toLowerCase()===e||t.number===u}))?alert("".concat(n," is already in contacts.")):j(function(t){var e=t.name,n=t.number;return function(){var t=Object(x.a)(v.a.mark((function t(c){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(k()),t.prev=1,a={name:e,number:n},t.next=5,R(a);case 5:c(g(a)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),c(N(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}({name:n,number:u})),p()},className:O.a.form,autoComplete:"off",children:[Object(b.jsxs)("label",{className:O.a.label,children:["Name",Object(b.jsx)("input",{name:"name",type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:f,className:O.a.input})]}),Object(b.jsxs)("label",{className:O.a.label,children:["Number",Object(b.jsx)("input",{name:"number",type:"tel",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:u,onChange:f,className:O.a.input})]}),Object(b.jsx)("button",{type:"submit",className:O.a.btn,children:"Add contact"})]})},U=n(18),V=n.n(U);var X=function(){var t=Object(s.c)(M),e=Object(s.b)();return Object(b.jsxs)("label",{className:V.a.label,children:["Find contacts by name / number",Object(b.jsx)("input",{type:"text",value:t,onChange:function(t){var n=t.target.value;return e(z(n))},className:V.a.input})]})},$=n(19),G=n.n($),H=n(20),K=n.n(H);var Q=function(t){var e=t.name,n=t.number,c=t.id,a=Object(s.b)(),r=function(t){return a(function(t){return function(){var e=Object(x.a)(v.a.mark((function e(n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(F()),e.prev=1,e.next=4,Z(t);case 4:n(L(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(S(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}(t))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{className:K.a.contact,children:["\u2022 ",e,": ",n]}),Object(b.jsx)("button",{className:K.a.btn,onClick:function(){return r(c)},children:"Delete"})]})};var W=function(){var t=Object(s.c)(P);return Object(b.jsx)("ul",{className:G.a.contactList,children:t.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(b.jsx)("li",{className:G.a.contactItem,children:Object(b.jsx)(Q,{name:n,number:c,id:e})},e)}))})};var Y,tt,et=function(){var t=Object(s.b)();return Object(c.useEffect)((function(){t(function(){var t=Object(x.a)(v.a.mark((function t(e){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(C()),t.prev=1,t.next=4,E();case 4:n=t.sent,e(y(n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(w(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}())}),[t]),Object(b.jsxs)(l,{children:[Object(b.jsxs)(p,{children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(T,{})]}),Object(b.jsxs)(p,{children:[Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(X,{}),Object(b.jsx)(W,{})]})]})},nt=n(7),ct=n(33),at=n(6),rt={items:[],filter:""},ot=Object(_.c)(rt.items,(Y={},Object(nt.a)(Y,y,(function(t,e){return e.payload})),Object(nt.a)(Y,g,(function(t,e){var n=e.payload;return[].concat(Object(ct.a)(t),[n])})),Object(nt.a)(Y,L,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Y)),st=Object(_.c)(rt.filter,Object(nt.a)({},z,(function(t,e){return e.payload}))),ut=Object(_.c)(null,(tt={},Object(nt.a)(tt,w,(function(t,e){return e.payload})),Object(nt.a)(tt,C,(function(){return null})),Object(nt.a)(tt,N,(function(t,e){return e.payload})),Object(nt.a)(tt,k,(function(){return null})),Object(nt.a)(tt,S,(function(t,e){return e.payload})),Object(nt.a)(tt,F,(function(){return null})),tt)),it=Object(at.b)({items:ot,filter:st,error:ut}),bt=Object(_.a)({reducer:{contacts:it},devTools:!1});o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(s.a,{store:bt,children:Object(b.jsx)(et,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={form:"ContactForm_form__30PF_",label:"ContactForm_label__1tXFV",input:"ContactForm_input__3PRf-",btn:"ContactForm_btn__2ZFcF"}}},[[66,1,2]]]);
//# sourceMappingURL=main.c5145b17.chunk.js.map