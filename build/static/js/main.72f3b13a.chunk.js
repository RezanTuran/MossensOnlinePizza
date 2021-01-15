(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{107:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),i=n.n(a),r=n(7),s=n.n(r),j=n(29),o=n(141),l=n(16),u=n(43),d=n(46),b=n(144),p=n(145),O=n(146),h=n(147),x=n(151),m=n(150),z=n(148),f=n(143),g=n(8),v=n(67),C=n.n(v),N=n(68),k=n.n(N),P=Object(o.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(u.a)({},e.breakpoints.down("xs"),{flexGrow:1}),headerOptions:{display:"flex",flex:1,justifyContent:"space-evenly"}}})),y=Object(g.f)((function(e){var t=e.history,n=P(),a=i.a.useState(null),r=Object(l.a)(a,2),s=r[0],j=r[1],o=Boolean(s),u=Object(d.a)(),g=Object(f.a)(u.breakpoints.down("xs")),v=function(e){t.push(e)};return Object(c.jsx)("div",{className:n.root,children:Object(c.jsx)(b.a,{position:"static",children:Object(c.jsxs)(p.a,{children:[Object(c.jsx)(O.a,{variant:"h6",className:n.title,onClick:function(){return v("/")},style:{cursor:"pointer"},children:"Mossens Pizzeria"}),g?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h.a,{edge:"start",className:n.menuButton,color:"inherit","aria-label":"menu",onClick:function(e){j(e.currentTarget)},children:Object(c.jsx)(C.a,{})}),Object(c.jsx)(m.a,{id:"menu-appbar",anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:o,onClose:function(){return j(null)},children:[{menuTitle:"Home",pageURL:"/"},{menuTitle:"Contact",pageURL:"/contact"},{menuTitle:"About",pageURL:"/about"},{menuTitle:"Menu",pageURL:"/menu"},{menuTitle:"Galery",pageURL:"/galery"},{menuTitle:"Cart",pageURL:"/cart"},{menuTitle:"Admin",pageURL:"/admin"}].map((function(e){var n=e.menuTitle,a=e.pageURL;return Object(c.jsx)(x.a,{onClick:function(){return function(e){t.push(e),j(null)}(a)},children:n})}))})]}):Object(c.jsxs)("div",{className:n.headerOptions,children:[Object(c.jsx)(z.a,{variant:"contained",onClick:function(){return v("/")},children:"HEM"}),Object(c.jsx)(z.a,{variant:"contained",onClick:function(){return v("/menu")},children:"MENY"}),Object(c.jsx)(z.a,{variant:"contained",onClick:function(){return v("/contact")},children:"KONTAKT"}),Object(c.jsx)(z.a,{variant:"contained",onClick:function(){return v("/about")},children:"OM OSS"}),Object(c.jsx)(z.a,{variant:"contained",onClick:function(){return v("/galery")},children:"GALERY"})]}),Object(c.jsx)(k.a,{variant:"contained",onClick:function(){return v("/cart")},style:{cursor:"pointer"}})]})})})})),S=n(22);var w=function(){return Object(c.jsx)("h1",{children:"Home"})};var I=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Kontakt"})})};var T=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"About Page"})})},F=n(48),B=(n(88),n.p+"static/media/pic-1.1f444357.jpeg");var R=function(e){var t=e.cart,n=e.removeFromCart;return Object(c.jsx)(c.Fragment,{children:t.map((function(e,t){return Object(c.jsxs)("div",{className:"food-items",children:[Object(c.jsx)("img",{src:B,alt:"BigCo Inc. logo"}),Object(c.jsxs)("div",{className:"details",children:[Object(c.jsxs)("div",{className:"details-sub",children:[Object(c.jsx)("h5",{children:e.pizzaName}),Object(c.jsxs)("h5",{className:"price",children:[e.pizzaPrice," :- \xa0 \xa0 ",Object(c.jsxs)("span",{children:[e.pizzaPriceF," :-"]})]})]}),Object(c.jsx)("p",{children:e.ingredients}),Object(c.jsx)("button",{onClick:function(){return n(e)},children:"Ta Bort"})]})]},t)}))})},U=n(26),L=n.n(U);var E=function(e){var t=e.addToCart,n=Object(a.useState)([]),i=Object(l.a)(n,2),r=i[0],s=i[1];return Object(a.useEffect)((function(){L.a.get("https://mossenspizzeria.herokuapp.com/api/get").then((function(e){s(e.data),console.log(e.data)}))}),[]),Object(c.jsx)(c.Fragment,{children:r.map((function(e,n){return Object(c.jsxs)("div",{className:"food-items",children:[Object(c.jsx)("img",{src:B,alt:"BigCo Inc. logo"}),Object(c.jsxs)("div",{className:"details",children:[Object(c.jsxs)("div",{className:"details-sub",children:[Object(c.jsx)("h5",{children:e.pizzaName}),Object(c.jsxs)("h5",{className:"price",children:[e.pizzaPrice," :- \xa0 \xa0 ",Object(c.jsxs)("span",{children:[e.pizzaPriceF," :-"]})]})]}),Object(c.jsx)("p",{children:e.ingredients}),Object(c.jsx)("button",{onClick:function(){return t(e)},children:"Best\xe4lla"})]})]},n)}))})},M="products",A="cart",G=JSON.parse(localStorage.getItem("cart")||"[]");var J=function(){var e=Object(a.useState)(G),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(M),s=Object(l.a)(r,2),j=s[0],o=s[1];Object(a.useEffect)((function(){localStorage.setItem("cart",JSON.stringify(n))}),[n]);var u=function(e){o(e)};return Object(c.jsxs)("div",{className:"menu",children:[Object(c.jsxs)("header",{children:[Object(c.jsxs)("button",{onClick:function(){return u(A)},children:["Kundkorg (",n.length,")"]}),Object(c.jsx)("button",{onClick:function(){return u(M)},children:"Visa Produkter"})]}),j===M&&Object(c.jsx)(E,{addToCart:function(e){i([].concat(Object(F.a)(n),[Object(S.a)({},e)]))}}),j===A&&Object(c.jsx)(R,{cart:n,removeFromCart:function(e){i(n.filter((function(t){return t!==e})))}})]})};var K=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Galery"})})};n(107);var H=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(""),s=Object(l.a)(r,2),j=s[0],o=s[1],u=Object(a.useState)(""),d=Object(l.a)(u,2),b=d[0],p=d[1],O=Object(a.useState)(""),h=Object(l.a)(O,2),x=h[0],m=h[1],z=Object(a.useState)([]),f=Object(l.a)(z,2),g=f[0],v=f[1],C=Object(a.useState)(""),N=Object(l.a)(C,2),k=N[0],P=N[1],y=Object(a.useState)(""),S=Object(l.a)(y,2),w=S[0],I=S[1];return Object(a.useEffect)((function(){L.a.get("https://mossenspizzeria.herokuapp.com/api/get").then((function(e){v(e.data)}))}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Mossens Pizzeria"}),Object(c.jsxs)("div",{className:"form",children:[Object(c.jsx)("label",{children:"Pizzanamn"}),Object(c.jsx)("input",{type:"text",name:"pizzaName",onChange:function(e){i(e.target.value)}}),Object(c.jsx)("label",{children:"Pizzapris"}),Object(c.jsx)("input",{type:"text",name:"pizzaPrice",onChange:function(e){o(e.target.value)}}),Object(c.jsx)("label",{children:"Pizzapris Familj"}),Object(c.jsx)("input",{type:"text",name:"pizzaPriceF",onChange:function(e){p(e.target.value)}}),Object(c.jsx)("label",{children:"Pizza ingredients"}),Object(c.jsx)("input",{type:"text",name:"ingredients",onChange:function(e){m(e.target.value)}}),Object(c.jsx)("button",{onClick:function(){L.a.post("https://mossenspizzeria.herokuapp.com/api/insert",{pizzaName:n,pizzaPrice:j,pizzaPriceF:b,ingredients:x}),v([].concat(Object(F.a)(g),[{pizzaName:n,pizzaPrice:j,pizzaPriceF:b,ingredients:x}])),window.location.reload()},children:"Spara"}),g.map((function(e){return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsxs)("p",{children:["Pizza ID: ",e.pizzaId]}),Object(c.jsxs)("p",{children:["Pizzanamn: ",e.pizzaName]}),Object(c.jsxs)("p",{children:["Pizza pris: ",e.pizzaPrice]}),Object(c.jsxs)("p",{children:["Pizza pris familj: ",e.pizzaPriceF]}),Object(c.jsxs)("p",{children:["ingredienser: ",e.ingredients]}),Object(c.jsx)("button",{className:"adminButton",onClick:function(){var t;t=e.pizzaId,L.a.delete("https://mossenspizzeria.herokuapp.com/api/delete/".concat(t)),window.location.reload()},children:"Delete"}),Object(c.jsx)("input",{type:"text",id:"updateInput",placeholder:"pris",onChange:function(e){P(e.target.value)}}),Object(c.jsx)("input",{type:"text",id:"updateInput",placeholder:"name",onChange:function(e){I(e.target.value)}}),Object(c.jsx)("button",{className:"adminButton",onClick:function(){var t;t=e.pizzaId,L.a.put("https://mossenspizzeria.herokuapp.com/api/updatePrice/",{pizzaId:t,pizzaPrice:k}),P(""),window.location.reload()},children:"Update Pizzaprice"}),Object(c.jsx)("button",{className:"adminButton",onClick:function(){var t;t=e.pizzaId,L.a.put("https://mossenspizzeria.herokuapp.com/api/updateName/",{pizzaId:t,pizzaName:w}),I(""),window.location.reload()},children:"Update Pizzaname"})]})}))]})]})};function D(){return Object(c.jsxs)(g.c,{children:[Object(c.jsx)(g.a,{exact:!0,from:"/",render:function(e){return Object(c.jsx)(w,Object(S.a)({},e))}}),Object(c.jsx)(g.a,{exact:!0,path:"/contact",render:function(e){return Object(c.jsx)(I,Object(S.a)({},e))}}),Object(c.jsx)(g.a,{exact:!0,path:"/about",render:function(e){return Object(c.jsx)(T,Object(S.a)({},e))}}),Object(c.jsx)(g.a,{exact:!0,path:"/menu",render:function(e){return Object(c.jsx)(J,Object(S.a)({},e))}}),Object(c.jsx)(g.a,{exact:!0,path:"/galery",render:function(e){return Object(c.jsx)(K,Object(S.a)({},e))}}),Object(c.jsx)(g.a,{exact:!0,path:"/cart",render:function(e){return Object(c.jsx)(R,Object(S.a)({},e))}}),Object(c.jsx)(g.a,{exact:!0,path:"/admin",render:function(e){return Object(c.jsx)(H,Object(S.a)({},e))}})]})}var Y=Object(o.a)({});function V(){var e=Y();return Object(c.jsxs)("div",{className:e.container,children:[Object(c.jsx)(y,{}),Object(c.jsx)(D,{})]})}var q=n(149);s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsxs)(j.a,{children:[Object(c.jsx)(q.a,{}),Object(c.jsx)(j.b,{children:Object(c.jsx)(V,{})})]})}),document.getElementById("root"))},88:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.72f3b13a.chunk.js.map