"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[405],{9044:function(n,t,e){e.d(t,{Z:function(){return o}});var r,c=e(168),u=e(955).ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),a=e(6082),i=e(184),o=function(){return(0,i.jsx)(u,{children:(0,i.jsx)(a.Z,{})})}},4405:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(885),c=e(2791),u=e(6871),a=e(4668),i=e(9044),o=e(6140),s=e(184);var f=function(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],f=t[1],p=(0,u.UO)().moviesId,h=(0,c.useState)(!1),l=(0,r.Z)(h,2),d=l[0],m=l[1];return(0,c.useEffect)((function(){m(!0),(0,a.Hx)(p).then((function(n){var t=n.data.results;if(f(t),0===t.length)return o.Am.error("There is no information about the reviews...")})).catch((function(n){return console.log("Whoops, something went wrong...",n),o.Am.error("There is no information about the reviews...")})).finally((function(){setTimeout((function(){m(!1)}),1e3)}))}),[p]),(0,s.jsxs)(s.Fragment,{children:[d&&(0,s.jsx)(i.Z,{}),e&&(0,s.jsx)("ul",{children:e.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h4",{children:["Author: ",e]}),(0,s.jsx)("p",{children:r})]},t)}))})]})}},4668:function(n,t,e){e.d(t,{qw:function(){return f},Md:function(){return h},Mc:function(){return d},xc:function(){return v},Hx:function(){return w}});var r=e(5861),c=e(7757),u=e.n(c),a=e(4569),i=e.n(a),o="3b94c1b54af7d429587ecf26a37007c0",s="https://api.themoviedb.org/3";function f(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s,"/trending/movie/day?api_key=").concat(o));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(t,"&include_adult=false"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s,"/movie/").concat(t,"?api_key=").concat(o));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(o));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=405.cfb2b744.chunk.js.map