(this["webpackJsonpantd-demo-ts"]=this["webpackJsonpantd-demo-ts"]||[]).push([[0],{123:function(e,t,n){},124:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},198:function(e,t,n){},199:function(e,t,n){"use strict";n.r(t);var r=n(19),c=n.n(r),a=n(26),o=n(0),l=n.n(o),i=(n(123),n(205)),s=(n(124),n(7)),u=function(e){var t=e.initialSeconds,n=void 0===t?0:t,r=Object(o.useState)(n),c=Object(a.a)(r,2),l=c[0],i=c[1];return Object(o.useEffect)((function(){var e=setInterval((function(){return i(l+1)}),1e3);return function(){return clearInterval(e)}})),Object(s.jsxs)("div",{className:"Timer",children:[" \u041f\u0440\u043e\u0448\u043b\u043e - ",l," \u0441\u0435\u043a\u0443\u043d\u0434 "]})},d=n(43),j=n(206),b=n(210),O=n(204),h=function(e){var t=Object(o.useState)(e),n=Object(a.a)(t,2),r=n[0],c=n[1],l=Object(o.useState)(""),i=Object(a.a)(l,2),s=i[0],u=i[1];return{value:r,onChange:function(e){c(e.target.value)},onBlur:function(e){e.target.value?u(""):u("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435")},reset:function(){c(""),u("")},error:s}},x=function(e){var t=e.isModalVisible,n=e.handleOk,r=e.handleCancel,c=h(""),a=h("");return Object(s.jsx)(j.a,{afterClose:function(){c.reset(),a.reset()},title:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",visible:t,onOk:function(){return n(c.value,a.value)},onCancel:r,cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430",okText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:Object(s.jsxs)(b.b,{direction:"vertical",style:{width:"100%"},children:[Object(s.jsx)(O.a,{autoFocus:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430",value:c.value,onChange:c.onChange,onBlur:c.onBlur}),c.error&&Object(s.jsx)("div",{className:"error",children:c.error}),Object(s.jsx)(O.a,{type:"number",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u044f",value:a.value,onChange:a.onChange,onBlur:a.onBlur}),a.error&&Object(s.jsx)("div",{className:"error",children:a.error})]})})},f=(n(129),Object(o.createContext)({cardState:[],dispatchCard:function(){return null}})),p=function(e){return(16777215^Number("0x1".concat(e))).toString(16).substr(1).toUpperCase()},C=function(){var e=Object(o.useContext)(f).dispatchCard,t=Object(o.useState)(!1),n=Object(a.a)(t,2),r=n[0],c=n[1];return Object(s.jsxs)("div",{className:"ButtonAddCard",children:[Object(s.jsx)(d.a,{onClick:function(){return c(!0)},className:"animationPulse",type:"primary",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"}),Object(s.jsx)(x,{isModalVisible:r,handleOk:function(t,n){var r=Math.floor(16777215*Math.random()).toString(16);e({type:"add",payload:{city:t,population:n,backgroundColor:"#"+r,textColor:"#"+p(r)}}),c(!1)},handleCancel:function(){return c(!1)}})]})},v=l.a.memo(C),g=n(114),m=n(207);function y(e,t){switch(t.type){case"add":var n=t.payload,r=n.city,c=n.population,a=n.backgroundColor,o=n.textColor;return[].concat(Object(g.a)(e),[{id:Object(m.a)(),city:r,population:c,backgroundColor:a,textColor:o}]);case"delete":var l=t.payload.id;return e.filter((function(e){return e.id!==l}));default:return e}}var S=n(203),k=n(208),N=n(211),w=function(e){var t=e.handleOk,n=e.handleCancel,r=e.isModalVisible;return Object(s.jsx)(j.a,{destroyOnClose:!0,title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",visible:r,onOk:t,onCancel:n,cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430",okText:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",children:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443?"})},B=(n(130),function(e){var t=e.el,n=Object(o.useContext)(f).dispatchCard,r=Object(o.useState)(!1),c=Object(a.a)(r,2),l=c[0],i=c[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(S.a,{className:"CardItem",style:{background:t.backgroundColor,color:t.textColor,border:"none",borderRadius:"5px"},title:Object(s.jsx)("span",{style:{color:t.textColor},children:t.city}),extra:Object(s.jsx)(k.a,{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",children:Object(s.jsx)(d.a,{onClick:function(){return i(!0)},shape:"circle",type:"primary",style:{backgroundColor:t.textColor,borderColor:t.textColor},icon:Object(s.jsx)(N.a,{})})}),children:Object(s.jsxs)("p",{children:["\u0427\u0438\u0441\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c: ",t.population]})}),Object(s.jsx)(w,{isModalVisible:l,handleOk:function(){n({type:"delete",payload:{id:t.id}}),i(!1)},handleCancel:function(){return i(!1)}})]})}),I=n(59),M=n(31),T=n(209),E=(n(198),O.a.Search),F=function(e){var t=e.onSearch;return Object(s.jsx)("div",{className:"FilterCards",children:Object(s.jsx)(b.b,{direction:"horizontal",size:"large",children:Object(s.jsx)(E,{placeholder:"\u041f\u043e\u0438\u0441\u043a",onSearch:t,allowClear:!0,style:{width:"100%"},enterButton:!0})})})},J=function(){var e=Object(o.useContext)(f).cardState,t=Object(o.useState)(e),n=Object(a.a)(t,2),r=n[0],c=n[1],l=Object(o.useState)(""),i=Object(a.a)(l,2),u=i[0],d=i[1];return Object(o.useEffect)((function(){if(u){var t=e.filter((function(e){var t=e.city,n=e.population;return t.includes(u)||n.includes(u)}));c(t)}else c(e)}),[e,u]),Object(s.jsxs)(s.Fragment,{children:[e.length>1?Object(s.jsx)(F,{onSearch:function(e){d(e)}}):null,Object(s.jsxs)(I.a,{gutter:[10,10],justify:"center",children:[r.map((function(e){return Object(s.jsx)(M.a,{xs:24,sm:12,md:8,lg:6,xl:4,children:Object(s.jsx)(B,{el:e})},e.id)})),e.length?null:Object(s.jsx)(T.a,{message:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443 \u2191",type:"info",showIcon:!0}),!r.length&&e.length?Object(s.jsx)(T.a,{message:"\u041d\u0435\u0442 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0441\u0442\u0440\u043e\u043a\u0435 \u043f\u043e\u0438\u0441\u043a\u0430",type:"info",showIcon:!0}):null]})]})},V=i.a.Content,z=i.a.Header,P=localStorage.getItem("localState"),R=P?JSON.parse(P):[],A=function(){var e=Object(o.useReducer)(y,R),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(o.useEffect)((function(){localStorage.setItem("localState",JSON.stringify(n))}),[n]),Object(s.jsxs)(i.a,{children:[Object(s.jsx)(z,{children:Object(s.jsx)(u,{})}),Object(s.jsx)(V,{children:Object(s.jsxs)(f.Provider,{value:{cardState:n,dispatchCard:r},children:[Object(s.jsx)(v,{}),Object(s.jsx)(J,{})]})})]})};c.a.render(Object(s.jsx)(A,{}),document.getElementById("root"))}},[[199,1,2]]]);
//# sourceMappingURL=main.efb54014.chunk.js.map