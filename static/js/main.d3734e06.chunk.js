(this["webpackJsonpinfinity-scroll-example"]=this["webpackJsonpinfinity-scroll-example"]||[]).push([[0],{27:function(t,e,c){},46:function(t,e,c){},47:function(t,e,c){},48:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(1),s=c.n(a),o=c(17),i=c.n(o),r=(c(27),c(8)),l=c(21),u=c(18),j=c(7),p=c.n(j),d=c(19),b=c(20),h=c.n(b),O="http://jsonplaceholder.typicode.com",f=function(){var t=Object(d.a)(p.a.mark((function t(e){var c,n,a=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a.length>1&&void 0!==a[1]?a[1]:10,n="".concat(O,"/posts?_start=").concat(e,"&_limit=").concat(c),t.abrupt("return",h()(n));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=(c(46),function(t){var e=t.post,c=t.className,a=e.title,s=e.body;return Object(n.jsxs)("div",{className:"".concat(c," post"),children:[Object(n.jsx)("h3",{className:"post__title",children:a}),Object(n.jsx)("p",{className:"post__body",children:s})]})}),x=(c(47),c(3)),g="LOADING_START",v="LOADING_DONE",y="LOADING_FAIL",N=function(t,e){var c=e.type,n=e.payload;switch(c){case g:return Object(x.a)(Object(x.a)({},t),{},{loading:!0});case v:return Object(x.a)(Object(x.a)({},n),{},{loading:!1});case y:return Object(x.a)(Object(x.a)({},t),{},{loading:!1});default:return t}},_=function(){var t=Object(a.useReducer)(N,{total:1/0,posts:[],start:0,loading:!1}),e=Object(l.a)(t,2),c=e[0],s=e[1],o=c.start,i=c.posts,j=c.loading,p=c.total,d=Object(a.useCallback)((function(){s({type:g}),f(o,10).then((function(t){s({type:v,payload:{total:+t.headers["x-total-count"],posts:[].concat(Object(r.a)(i),Object(r.a)(t.data)),start:o+10}})})).catch((function(t){console.log(t),s({type:y})}))}),[o,i]),b=Object(a.useCallback)((function(t){var e=t.visible,c=t.directionY;console.log(e,c,p),!j&&e&&"up"===c&&d()}),[d,j,p]);return Object(a.useEffect)((function(){d()}),[]),Object(n.jsxs)("div",{className:"posts-list",children:[Object(n.jsx)("h2",{children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u043f\u0438\u0441\u043a\u0430 \u0441 \u043f\u043e\u0434\u0433\u0440\u0443\u0437\u043a\u043e\u0439 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e \u0441\u043a\u0440\u043e\u043b\u043b\u0443"}),Object(n.jsxs)("p",{children:["\u0414\u0430\u043d\u043d\u044b\u0435 \u0431\u0435\u0440\u0443\u0442\u0441\u044f \u0441 ",Object(n.jsx)("a",{href:"http://jsonplaceholder.typicode.com",children:"jsonplaceholder"})]}),Object(n.jsxs)("p",{children:["\u041f\u043e\u0434\u0433\u0440\u0443\u0437\u043a\u0430 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",Object(n.jsx)("a",{href:"https://github.com/behuamuh/react-visibility-detector",children:"\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"})]}),i.map((function(t){return Object(n.jsx)(m,{post:t,className:"posts-list__item"},t.id)})),j&&"...loading",p>i.length&&Object(n.jsx)(u.a,{onVisibilityChange:b})]})};var C=function(){return Object(n.jsx)("div",{className:"app",children:Object(n.jsx)(_,{})})},I=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,49)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,s=e.getLCP,o=e.getTTFB;c(t),n(t),a(t),s(t),o(t)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root")),I()}},[[48,1,2]]]);
//# sourceMappingURL=main.d3734e06.chunk.js.map