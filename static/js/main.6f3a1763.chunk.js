(this.webpackJsonpquote_generator_react=this.webpackJsonpquote_generator_react||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),o=n(5),r=n.n(o),u=n(4),a=n.n(u),s=n(6),i=n(2),j=(n(12),n(13),n(0));var l=function(t){return Object(j.jsx)("div",{className:"quote-author",children:Object(j.jsx)("span",{children:t.quoteAuthor.author})})};n(15),n(16);var h=function(t){return Object(j.jsxs)("div",{className:"quote-text",children:[Object(j.jsx)("i",{class:"fas fa-quote-left"}),Object(j.jsxs)("span",{className:t.newClass,children:[" ",t.quoteText.quote]})]})},b=(n(17),function(t){var e=t.onClick,n=t.children;return Object(j.jsxs)("div",{className:"button-container",children:[Object(j.jsx)("button",{onClick:function(){var e="https://twitter.com/intent/tweet?text=".concat(t.quoteText.quote," - ").concat(t.quoteAuthor.author);window.open(e,"_blank"),console.log(t)},className:"twitter-button",title:"Tweet this",children:Object(j.jsx)("i",{className:"fab fa-twitter"})}),Object(j.jsx)("button",{className:"new-quote",onClick:e,children:n})]})});var x=function(t){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"quote-container",children:[Object(j.jsx)(h,{quoteText:t.quoteText,newClass:t.newClass}),Object(j.jsx)(l,{quoteAuthor:t.quoteAuthor}),Object(j.jsx)(b,{onClick:t.onClick,quoteText:t.quoteText,quoteAuthor:t.quoteAuthor,children:" New Quote "})]})})};n(18);var f=function(){return Object(j.jsx)("div",{className:"loader"})};var q=function(){var t=Object(c.useState)(""),e=Object(i.a)(t,2),n=e[0],o=e[1],r=Object(c.useState)(""),u=Object(i.a)(r,2),l=u[0],h=u[1],b=Object(c.useState)(""),q=Object(i.a)(b,2),O=q[0],d=q[1],p=Object(c.useState)(!1),v=Object(i.a)(p,2),m=v[0],w=v[1],k=function(){var t=Object(s.a)(a.a.mark((function t(){var e,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!0),t.prev=1,t.next=4,fetch("https://polar-everglades-12070.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json");case 4:return e=t.sent,t.next=7,e.json();case 7:n=t.sent,o(n.quoteText),""===n.quoteAuthor?h("Unknown"):h(n.quoteAuthor),n.quoteText.length>120?d("long-quote"):d(""),w(!1),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),k();case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){k()}),[]),Object(j.jsx)(j.Fragment,{children:m?Object(j.jsx)(f,{}):Object(j.jsx)(x,{newClass:O,quoteText:{quote:n},quoteAuthor:{author:l},onClick:function(t){return t.preventDefault(),k()}})})};r.a.render(Object(j.jsx)(q,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.6f3a1763.chunk.js.map