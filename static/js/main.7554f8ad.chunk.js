(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,t,r){e.exports={overlay:"Drawer_overlay__2xkiV",overlayVisible:"Drawer_overlayVisible__2yRaP",drawer:"Drawer_drawer__1boL2",cartBlock:"Drawer_cartBlock__3GpbZ",cartTotalBlock:"Drawer_cartTotalBlock__1rx95",cartItem:"Drawer_cartItem__1whul",cartImage:"Drawer_cartImage__Tmzfl"}},20:function(e,t,r){e.exports={card:"Card_card__4LeqH",plus:"Card_plus__35dsD",favorite:"Card_favorite__1TjIq"}},41:function(e,t,r){},68:function(e,t,r){"use strict";r.r(t);var a=r(0),c=r.n(a),n=r(33),s=r.n(n),i=(r(41),r(11)),d=r(14),o=r(5),l=r.n(o),b=r(12),j=r(4),u=r(13),x=c.a.createContext({}),m=function(){var e=c.a.useContext(x),t=e.onDrawerAdd,r=e.setOnDrawerAdd,a=t.reduce((function(e,t){return t.price+e}),0);return{onDrawerAdd:t,setOnDrawerAdd:r,totalPrice:a}},h=r(1);var p=function(e){var t=m().totalPrice;return Object(h.jsxs)("header",{className:" header d-flex justify-between  align-center p-40 clear",children:[Object(h.jsxs)("div",{className:"d-flex align-center ",children:[Object(h.jsx)(u.b,{to:" ",children:Object(h.jsx)("img",{widht:120,height:120,src:"img/logo6.jpg",alt:"logoImg"})}),Object(h.jsxs)("div",{className:"headerInfo",children:[Object(h.jsx)("h3",{className:"text-uppercase",children:" Turbo Sneackers "}),Object(h.jsxs)("p",{children:[e.text," "]})]})]}),Object(h.jsx)("div",{className:"leftCorner d-flex align-center justify-between",children:Object(h.jsxs)("ul",{className:"d-flex  align-start",children:[Object(h.jsxs)("li",{className:" mr-30 d-flex",children:[Object(h.jsx)("img",{className:"d-flex align-center justify-between cu-p",width:18,height:18,src:"img/drawerCard.png",id:"card",alt:"cartImg",onClick:e.addDrawer}),Object(h.jsxs)("span",{className:"align-center ",children:[t," \u0440\u0443\u0431."]})]}),Object(h.jsx)("li",{className:"button mr-30 ",children:Object(h.jsx)(u.b,{to:"sneakers/npfavorites",exact:"true",children:Object(h.jsx)("img",{className:"d-flex align-center justify-between",width:18,height:18,src:"img/favorite.png",alt:"Favorite"})})}),Object(h.jsx)("li",{className:" button mr-30 ",children:Object(h.jsx)(u.b,{to:"sneakers/orders",exact:"true",children:Object(h.jsx)("img",{width:18,height:18,src:"img/Union.png",alt:"User"})})})]})})]})},f=function(e){var t=e.title,r=e.description,a=e.image,n=(e.setOnDrawerAdd,c.a.useContext(x).setDrawerOpened);return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"emptyDrawer d-flex flex-column flex",children:Object(h.jsxs)("div",{className:"d-flex flex-column justify-between align-center",children:[Object(h.jsx)("img",{className:"mb-50 ",width:"150px",src:a,alt:"emty",id:"shopCart"}),Object(h.jsx)("h2",{children:t}),Object(h.jsx)("p",{className:"opacity-6",children:r}),Object(h.jsx)("button",{className:"greenButon ",onClick:function(){return n(!1)},children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]})})})},O=r(19),v=r.n(O),g=r(6),w=r.n(g);var k=function(e){var t=e.items,r=void 0===t?[]:t,a=e.onClickOpen,n=e.onRemove,s=e.opened,i=m(),d=i.onDrawerAdd,o=i.setOnDrawerAdd,u=i.totalPrice,x=function(e){return new Promise((function(t){return setTimeout(t,e)}))},p=c.a.useState(null),O=Object(j.a)(p,2),g=O[0],k=O[1],N=c.a.useState(!1),y=Object(j.a)(N,2),C=y[0],_=y[1],I=c.a.useState(!1),A=Object(j.a)(I,2),D=A[0],S=A[1],P=function(){var e=Object(b.a)(l.a.mark((function e(){var t,r,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S(!0),e.next=4,w.a.post("https://612bde9dab461c00178b5bb9.mockapi.io/orders",{items:d});case 4:t=e.sent,r=t.data,k(r.id),_(!0),o([]),a=0;case 10:if(!(a<d.length)){e.next=18;break}return c=d[a],e.next=14,w.a.delete("https://612bde9dab461c00178b5bb9.mockapi.io/drawer/".concat(c.id));case 14:x(2e3);case 15:a++,e.next=10;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 :(");case 23:S(!1),console.log(d);case 25:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"".concat(v.a.overlay," ").concat(s?v.a.overlayVisible:""," "),children:Object(h.jsxs)("div",{className:v.a.drawer,children:[Object(h.jsxs)("h2",{className:"mb-30 d-flex justify-between ",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Object(h.jsx)("img",{className:"removeBtn cu-p ",id:"but",onClick:a,src:"img/btn-remove.svg",alt:"remove"})]}),r.length>0?Object(h.jsxs)("div",{className:"d-flex flex-column flex ",children:[Object(h.jsx)("div",{className:"items flex",children:r.map((function(e){return Object(h.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(h.jsx)("div",{style:{backgroundImage:"url(".concat(e.cardImg,")")},className:"cartImage"}),Object(h.jsxs)("div",{className:"mr-20 flex",children:[Object(h.jsxs)("p",{className:" mb-5",children:[e.title,'"']}),Object(h.jsx)("b",{children:e.price})]}),Object(h.jsx)("img",{className:"removeBtn ",onClick:function(){return n(e.id)},src:"img/btn-remove.svg",alt:"remove"})]},e.id)}))}),Object(h.jsxs)("div",{className:"cartTotalBlock",children:[Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(h.jsx)("div",{}),Object(h.jsxs)("b",{children:[u," \u0440\u0443\u0431."]})]},"1"),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%:"}),Object(h.jsx)("div",{}),Object(h.jsxs)("b",{children:[Math.round(.05*u)," \u0440\u0443\u0431."]})]},"2")]}),Object(h.jsxs)("button",{disabled:D,onClick:P,className:"greenButon ",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 ",Object(h.jsx)("img",{src:"img/forCartButton.png",alt:"Arrow"})]})]})]}):Object(h.jsx)(f,{onClickOpen:a,title:C?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437  #".concat(g," \u043f\u0440\u0438\u043d\u044f\u0442"):"\u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430",image:C?".img/completeOrder.jpg":".img/cart1.jpg",description:C?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438":"\u0427\u0442\u043e\u0431\u044b \u043e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0442\u043e\u0432\u0430\u0440"})]})})},N=r(2),y=r(20),C=r.n(y),_=r(36);var I=function(e){var t=e.id,r=e.cardImg,a=e.price,n=e.title,s=e.onPlus,i=e.onAddFavorite,d=e.favorited,o=void 0!==d&&d,l=e.loading,b=void 0!==l&&l,u=c.a.useContext(x).isItemAdded,m=c.a.useState(o),p=Object(j.a)(m,2),f=p[0],O=p[1],v={id:t,parentId:t,cardImg:r,price:a,title:n};return Object(h.jsx)("div",{className:C.a.card,children:b?Object(h.jsxs)(_.a,{speed:2,width:180,height:200,viewBox:"0 0 180 210",backgroundColor:"#e8e8e8",foregroundColor:"#ecebeb",children:[Object(h.jsx)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"150",height:"120"}),Object(h.jsx)("rect",{x:"0",y:"160",rx:"3",ry:"3",width:"87",height:"15"}),Object(h.jsx)("rect",{x:"119",y:"176",rx:"8",ry:"8",width:"32",height:"32"}),Object(h.jsx)("rect",{x:"0",y:"140",rx:"3",ry:"3",width:"150",height:"15"}),Object(h.jsx)("rect",{x:"0",y:"190",rx:"3",ry:"3",width:"5ki7",height:"15"}),Object(h.jsx)("rect",{x:"0",y:"186",rx:"3",ry:"3",width:"87",height:"20"})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:C.a.favorite,children:i&&Object(h.jsx)("img",{onClick:function(){i(v),O(!f)},src:f?"img/heartlike.svg":"img/heartUnlike.svg",alt:"heartImg"})}),Object(h.jsx)("img",{width:145,height:112,src:r,alt:"itemImg"}),Object(h.jsx)("h5",{children:n}),Object(h.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(h.jsxs)("div",{className:"d-flex flex-column",children:[Object(h.jsx)("span",{children:"\u0426\u0435\u043d\u0430 :"}),Object(h.jsxs)("b",{children:[a," \u0440\u0443\u0431."]})]}),s&&Object(h.jsx)("img",{className:C.a.plus,onClick:function(){s(v)},src:u(t)?"img/Group 95.svg":"img/plusimg.png",alt:"Plus",loading:"true"})]})]})})};var A=function(e){var t=e.items,r=e.inputChanged,a=e.onInputChanged,c=e.setInputChanged,n=e.onClickAddToCart,s=e.onAddToFavorite,o=(e.onDrawerAdd,e.isLoading);return Object(h.jsxs)("div",{className:"content p-40",children:[Object(h.jsxs)("div",{className:"d-flex justify-between  align-center mb-40",children:[Object(h.jsx)("h1",{className:"cross",children:r?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "'.concat(r,'"'):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(h.jsxs)("div",{className:"search d-flex align-center justy",children:[Object(h.jsx)("img",{width:18,height:18,src:"img/search.png",alt:"Search"}),Object(h.jsx)("input",{onChange:a,value:r,placeholder:"\u041f\u043e\u0438\u0441\u043a...",maxLength:"20"}),r&&Object(h.jsx)("img",{onClick:function(){c("")},className:"clear-s cu-p ",id:"but",src:"img/btn-remove.svg",alt:"removeSearch"})]})]}),Object(h.jsx)("div",{className:"itemsPage d-flex  flex-wrap",children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(r.toLowerCase())}));return(o?Object(d.a)(Array(12)):e).map((function(e,t){return Object(h.jsx)(I,Object(i.a)({onPlus:function(e){return n(e)},onAddFavorite:function(e){return s(e)},loading:o},e),t)}))}()})]})};var D=function(){var e=c.a.useContext(x),t=e.onFavorite,r=e.onAddToFavorite;return console.log(t),Object(h.jsxs)("div",{className:"content p-40",children:[Object(h.jsx)(N.a,{path:"sneakers/favorites",children:Object(h.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(h.jsx)("div",{className:"itemsPage d-flex  flex-wrap",children:t.map((function(e,t){return Object(h.jsx)(I,Object(i.a)({title:e.title,onAddFavorite:function(e){return r(e)},favorited:!0},e),t)}))})]})};var S=function(){var e=c.a.useState([]),t=Object(j.a)(e,2),r=t[0],a=t[1],n=c.a.useState(!0),s=Object(j.a)(n,2),o=s[0],u=s[1];return c.a.useEffect((function(){Object(b.a)(l.a.mark((function e(){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("https://612bde9dab461c00178b5bb9.mockapi.io/orders");case 3:t=e.sent,r=t.data,a(r.map((function(e){return e.items}),[]).flat()),u(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0444\u043e\u0440\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"),console.error("ERROR ORDERS");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(h.jsxs)("div",{className:"content p-40",children:[Object(h.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"}),Object(h.jsx)("div",{className:"itemsPage d-flex  flex-wrap",children:(o?Object(d.a)(Array(12)):r).map((function(e,t){return Object(h.jsx)(I,Object(i.a)({items:r,loading:o},e),t)}))})]})};var P=function(){var e=c.a.useState([]),t=Object(j.a)(e,2),r=t[0],a=t[1],n=c.a.useState([]),s=Object(j.a)(n,2),o=s[0],u=s[1],m=c.a.useState(!1),f=Object(j.a)(m,2),O=f[0],v=f[1],g=c.a.useState(""),y=Object(j.a)(g,2),C=y[0],_=y[1],I=c.a.useState([]),P=Object(j.a)(I,2),T=P[0],B=P[1],F=c.a.useState(!1),L=Object(j.a)(F,2),R=L[0],E=L[1];c.a.useEffect((function(){function e(){return(e=Object(b.a)(l.a.mark((function e(){var t,r,c,n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([w.a.get("https://612bde9dab461c00178b5bb9.mockapi.io/drawer"),w.a.get("https://612bde9dab461c00178b5bb9.mockapi.io/favorites"),w.a.get("https://612bde9dab461c00178b5bb9.mockapi.io/items")]);case 3:t=e.sent,r=Object(j.a)(t,3),c=r[0],n=r[1],s=r[2],E(!0),E(!1),B(n.data),u(c.data),a(s.data),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 ");case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var V=function(){var e=Object(b.a)(l.a.mark((function e(t){var r,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(r=o.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return u((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,w.a.delete("https://612bde9dab461c00178b5bb9.mockapi.io/drawer/".concat(r.id));case 6:e.next=14;break;case 8:return u((function(e){return[].concat(Object(d.a)(e),[t])})),e.next=11,w.a.post("https://612bde9dab461c00178b5bb9.mockapi.io/drawer",t);case 11:a=e.sent,c=a.data,u((function(e){return e.map((function(e){return e.parentId===c.parentId?Object(i.a)(Object(i.a)({},e),{},{id:c.id}):e}))}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443 ;("),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(b.a)(l.a.mark((function e(t){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!T.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=7;break}return B((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=5,w.a.delete("https://612bde9dab461c00178b5bb9.mockapi.io/favorites/".concat(t.id));case 5:e.next=12;break;case 7:return e.next=9,w.a.post("https://612bde9dab461c00178b5bb9.mockapi.io/favorites",t);case 9:r=e.sent,a=r.data,B((function(e){return[].concat(Object(d.a)(e),[a])}));case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{w.a.delete("https://612bde9dab461c00178b5bb9.mockapi.io/drawer/".concat(t)),u((function(e){return e.filter((function(e){return Number(e.id)!==Number(t)}))})),console.log(t)}catch(r){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0442\u043e\u0432\u0430\u0440\u0430 ;("),console.error(r)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(x.Provider,{value:{items:r,onFavorite:T,onClickAddToCart:V,onDrawerAdd:o,isItemAdded:function(e){return o.some((function(t){return Number(t.parentId)===Number(e)}))},onAddToFavorite:U,isLoading:R,setDrawerOpened:v,setOnDrawerAdd:u},children:Object(h.jsxs)("div",{className:" wrapper align-center clear",id:"itemsPage",children:[Object(h.jsx)(k,{items:o,onRemove:q,onClickOpen:function(){v(!1)},opened:O}),Object(h.jsx)(p,{addDrawer:function(){v(!0)},text:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"}),Object(h.jsx)(N.a,{path:"",exact:!0,children:Object(h.jsx)(A,{items:r,inputChanged:C,onInputChanged:function(e){return[_(e.target.value)]},setInputChanged:_,onClickAddToCart:V,onAddToFavorite:U,onDrawerAdd:o,isLoading:R})}),Object(h.jsx)(N.a,{path:"sneakers/favorites",exact:!0,children:Object(h.jsx)(D,{})}),Object(h.jsx)(N.a,{path:"sneakers/orders",exact:!0,children:Object(h.jsx)(S,{})})]})})};r(67);s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(u.a,{children:Object(h.jsx)(P,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.7554f8ad.chunk.js.map