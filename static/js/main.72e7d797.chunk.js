(this["webpackJsonplidemy-students-blog"]=this["webpackJsonplidemy-students-blog"]||[]).push([[0],{35:function(n,t,e){},36:function(n,t,e){"use strict";e.r(t);var r=e(0),c=e(1),o=e.n(c),a=e(20),i=e.n(a),u=e(4),s=e(2),l=e(5),j=e(6),b=e(3),d=Object(c.createContext)(null),f="token",h=function(n){localStorage.setItem(f,n)},O=function(){return localStorage.getItem(f)},m=O(),p="https://student-json-api.lidemy.me",x="application/json",g="createdAt",v="desc",w=function(n){return fetch("".concat(p,"/posts/").concat(n,"?_expand=user")).then((function(n){return n.json()}))},y=function(){var n=O();return fetch("".concat(p,"/me"),{headers:{authorization:"Bearer ".concat(n)}}).then((function(n){return n.json()}))};function C(){var n=Object(s.a)(["\n  text-align: center;\n  font-size: 1rem;\n  font-weight: bold;\n"]);return C=function(){return n},n}function S(){var n=Object(s.a)(["\n  padding: 1rem 0 2rem;\n"]);return S=function(){return n},n}var k=b.a.footer(S()),E=b.a.p(C());var L=function(){return Object(r.jsx)(k,{children:Object(r.jsx)(E,{children:"\xa9 2021 Christopher Chu"})})};function z(){var n=Object(s.a)(["\n  flex-grow: 1;\n  width: 100%;\n  max-width: 44rem;\n  margin: 0 auto 2.5rem;\n"]);return z=function(){return n},n}var P=b.a.main(z());function F(){var n=Object(s.a)(["\n  display: inline-block;\n  max-width: 10rem;\n  padding: 0 !important;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n\n  &:hover {\n    color: #8FBCBB;\n  }\n"]);return F=function(){return n},n}function B(){var n=Object(s.a)(["\n  display: inline-flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n"]);return B=function(){return n},n}function D(){var n=Object(s.a)(["\n  color: #5E81AC;\n  font-size: 2rem;\n  white-space: nowrap;\n"]);return D=function(){return n},n}function I(){var n=Object(s.a)(["\n  margin: 0 0.5rem;\n  white-space: nowrap;\n\n  @media (max-width: 32em) {\n    margin-bottom: 1rem;\n  }\n\n  &:first-of-type {\n    flex-grow: 1;\n\n    @media (max-width: 32em) {\n      flex-basis: 100%;\n    }\n  }\n\n  a {\n    padding: 0.5rem;\n\n    &:hover {\n      opacity: 0.875;\n    }\n  }\n"]);return I=function(){return n},n}function A(){var n=Object(s.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  margin: 0 -1rem;\n"]);return A=function(){return n},n}function M(){var n=Object(s.a)(["\n  margin: 0 auto 2.5rem;\n  padding: 2rem 0;\n  max-width: 100rem;\n  width: 100%;\n  font-size: 1.25rem;\n  font-weight: bold;\n"]);return M=function(){return n},n}var T=b.a.nav(M()),_=b.a.ul(A()),U=b.a.li(I()),H=b.a.h1(D()),J=Object(b.a)(U)(B()),N=Object(b.a)(l.c)(F());var Z=function(){var n=Object(j.h)(),t=Object(j.g)(),e=Object(c.useContext)(d),o=e.user,a=e.setUser;return Object(r.jsx)(T,{children:Object(r.jsxs)(_,{children:[Object(r.jsx)(U,{children:Object(r.jsx)(H,{children:Object(r.jsx)(l.c,{to:"/",replace:!0,children:"Blog"})})}),Object(r.jsx)(U,{children:Object(r.jsx)(l.c,{to:"/articles",activeStyle:{color:"#88C0D0"},children:"Articles"})}),o?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(U,{children:Object(r.jsx)(l.c,{to:"/new-post",activeStyle:{color:"#88C0D0"},replace:!0,children:"New Post"})}),Object(r.jsxs)(J,{children:[Object(r.jsx)(N,{to:"/authors/".concat(o.id),replace:!0,children:o.nickname}),", ",Object(r.jsx)(l.c,{to:"/",onClick:function(){h(""),a(null),"/"!==n.pathname&&t.push("/")},replace:!0,children:"Log out"})]})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(U,{children:Object(r.jsx)(l.c,{to:"/signup",activeStyle:{color:"#88C0D0"},replace:!0,children:"Sign Up"})}),Object(r.jsx)(U,{children:Object(r.jsx)(l.c,{to:"/login",activeStyle:{color:"#88C0D0"},replace:!0,children:"Log In"})})]})]})})};function V(){var n=Object(s.a)(["\n  background: #D8DEE9;\n  border-color: #D8DEE9;\n  color: #4C566A;\n\n  &:focus,\n  &:hover {\n    background: none;\n    color: #D8DEE9;\n  }\n"]);return V=function(){return n},n}function R(){var n=Object(s.a)(["\n  border: 1px solid;\n  border-radius: 64rem;\n  padding: 1rem 2rem;\n  font-size: 1.125rem;\n  font-weight: bold;\n  transition: all 0.4s ease;\n"]);return R=function(){return n},n}var X=b.a.button(R()),q=Object(b.a)(X)(V());function G(){var n=Object(s.a)(["\n  position: absolute;\n  top: 2.5rem;\n  right: 0.75rem;\n  border: none;\n  padding: 0.25rem;\n"]);return G=function(){return n},n}function K(){var n=Object(s.a)(["\n  margin-bottom: 1rem;\n  color: #BF616A;\n"]);return K=function(){return n},n}function Q(){var n=Object(s.a)(["\n  margin: 0 auto;\n"]);return Q=function(){return n},n}function W(){var n=Object(s.a)(["\n  padding: 1rem 0;\n  text-align: center;\n"]);return W=function(){return n},n}function Y(){var n=Object(s.a)(["\n  border: 1px solid #D8DEE9;\n  border-radius: 0.5rem;\n  padding: 0.75rem 1rem;\n  width: 100%;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 1px;\n"]);return Y=function(){return n},n}function $(){var n=Object(s.a)(["\n  display: block;\n  margin-bottom: 0.75rem;\n  font-size: 1.25rem;\n  font-weight: 600;\n"]);return $=function(){return n},n}function nn(){var n=Object(s.a)(["\n  position: relative;\n  margin-bottom: 2.5rem;\n"]);return nn=function(){return n},n}function tn(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-width: 32rem;\n  margin: 0 auto 2.5rem;\n"]);return tn=function(){return n},n}var en=b.a.form(tn()),rn=b.a.div(nn()),cn=b.a.label($()),on=b.a.input(Y()),an=b.a.div(W()),un=Object(b.a)(q)(Q()),sn=b.a.p(K()),ln=b.a.button(G());function jn(){var n=Object(s.a)([""]);return jn=function(){return n},n}function bn(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 1.5rem;\n"]);return bn=function(){return n},n}function dn(){var n=Object(s.a)(["\n  appearance: none;\n  background: transparent;\n  flex-grow: 1;\n  margin-bottom: auto;\n  border: none;\n  width: 100%;\n  height: 100%;\n  font-size: 1.125rem;\n  line-height: 2;\n  resize: none;\n\n  &:focus {\n    outline: none;\n  }\n"]);return dn=function(){return n},n}function fn(){var n=Object(s.a)(["\n  margin-bottom: 2.5rem;\n  border: none;\n  padding: 0;\n  font-size: 2.5rem;\n  font-weight: bold;\n\n  &:focus {\n    outline: none;\n  }\n"]);return fn=function(){return n},n}function hn(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-width: 50rem;\n  margin: 0 auto;\n"]);return hn=function(){return n},n}function On(){var n=Object(s.a)(["\n  flex-grow: 1;\n  margin-bottom: 2.5rem;\n"]);return On=function(){return n},n}var mn=b.a.main(On()),pn=b.a.div(hn()),xn=b.a.input(fn()),gn=b.a.textarea(dn()),vn=b.a.div(bn()),wn=Object(b.a)(q)(jn());var yn=function(n){var t=n.title,e=n.setTitle,c=n.body,o=n.setBody,a=n.onPost,i=n.submitButtonValue;return Object(r.jsx)(mn,{children:Object(r.jsxs)(pn,{children:[Object(r.jsx)(xn,{placeholder:"Title",defaultValue:t,onChange:function(n){return e(n.target.value)}}),Object(r.jsx)(gn,{placeholder:"Tell your story",defaultValue:c,onChange:function(n){return o(n.target.value)}}),Object(r.jsx)(vn,{children:Object(r.jsx)(wn,{onClick:a,children:i})})]})})};function Cn(){var n=Object(s.a)(["\n  color: rgba(171, 185, 207, 0.75);\n  font-size: 1rem;\n"]);return Cn=function(){return n},n}function Sn(){var n=Object(s.a)(["\n  margin-bottom: 1rem;\n  color: #81A1C1;\n  font-size: 1.25rem;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  white-space: pre-wrap;\n\n  a:hover {\n    text-decoration: underline;\n  }\n"]);return Sn=function(){return n},n}function kn(){var n=Object(s.a)(["\n  margin-bottom: 0.5rem;\n  font-size: 1.75rem;\n  line-height: 1.5;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  white-space: pre-wrap;\n\n  a:hover {\n    color: rgba(236, 239, 244, 0.75);\n  }\n"]);return kn=function(){return n},n}function En(){var n=Object(s.a)(["\n  margin-bottom: 3.5rem;\n"]);return En=function(){return n},n}var Ln=b.a.article(En()),zn=b.a.h2(kn()),Pn=b.a.h3(Sn()),Fn=b.a.time(Cn());var Bn=function(n){var t=n.post,e=n.author;return Object(r.jsxs)(Ln,{children:[Object(r.jsx)(zn,{children:Object(r.jsx)(l.b,{to:"/posts/".concat(t.id),children:t.title})}),Object(r.jsx)(Pn,{children:Object(r.jsx)(l.b,{to:"/authors/".concat(t.userId),replace:!0,children:e})}),Object(r.jsx)(Fn,{children:new Date(t.createdAt).toDateString()})]})};function Dn(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid rgba(171, 185, 207, 0.75);\n  border-radius: 32rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  font-weight: 500;\n\n  &:focus,\n  &:hover {\n    background-color: #4C566A;\n  }\n"]);return Dn=function(){return n},n}function In(){var n=Object(s.a)(["\n  margin: 0.25rem;\n"]);return In=function(){return n},n}function An(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n"]);return An=function(){return n},n}function Mn(){var n=Object(s.a)([""]);return Mn=function(){return n},n}function Tn(){var n=Object(s.a)(["\n  margin-bottom: 4.5rem;\n"]);return Tn=function(){return n},n}var _n=b.a.section(Tn()),Un=b.a.nav(Mn()),Hn=b.a.ul(An()),Jn=b.a.li(In()),Nn=Object(b.a)(l.c)(Dn());var Zn=function(){var n=Object(j.i)().page,t=Object(c.useState)([]),e=Object(u.a)(t,2),o=e[0],a=e[1],i=Object(c.useState)(),s=Object(u.a)(i,2),l=s[0],b=s[1],d=Object(c.useState)([]),f=Object(u.a)(d,2),h=f[0],O=f[1];return Object(c.useEffect)((function(){(function(n){return fetch("".concat(p,"/posts?_expand=user&_sort=").concat(g,"&_order=").concat(v,"&_page=").concat(n,"&_limit=").concat(5))})(n).then((function(n){return b(n.headers.get("X-Total-Count")),O(Array.from({length:Math.ceil(l/5)},(function(n,t){return t+1}))),n.json()})).then((function(n){return a(n)}))}),[n,l]),Object(r.jsxs)(P,{children:[Object(r.jsx)(_n,{children:o.map((function(n){return Object(r.jsx)(Bn,{post:n,author:n.user.nickname},n.id)}))}),Object(r.jsx)(Un,{"aria-label":"pagination",children:Object(r.jsx)(Hn,{children:h.map((function(n){return Object(r.jsx)(Jn,{children:Object(r.jsx)(Nn,{to:"/articles/".concat(n),activeStyle:{background:"#ECEFF4",color:"#2E3440"},children:n})},n)}))})})]})};var Vn=function(){var n=Object(j.g)(),t=Object(j.i)().id,e=Object(c.useState)(""),o=Object(u.a)(e,2),a=o[0],i=o[1],s=Object(c.useState)(""),l=Object(u.a)(s,2),b=l[0],d=l[1];return Object(c.useEffect)((function(){w(t).then((function(n){i(n.title),d(n.body)}))}),[t]),Object(r.jsx)(yn,{title:a,setTitle:i,body:b,setBody:d,onPost:function(){a.trim()&&b.trim()&&function(n,t){return fetch("".concat(p,"/posts/").concat(n),{method:"PATCH",headers:{authorization:"Bearer ".concat(m),"content-type":x},body:JSON.stringify(t)}).then((function(n){return n.json()}))}(t,{title:a,body:b}).then((function(t){t.id&&n.push("/posts/".concat(t.id))}))},submitButtonValue:"Update"})};var Rn=function(){var n=Object(c.useState)([]),t=Object(u.a)(n,2),e=t[0],o=t[1];return Object(c.useEffect)((function(){fetch("".concat(p,"/posts?_expand=user&_sort=").concat(g,"&_order=").concat(v)).then((function(n){return n.json()})).then((function(n){return o(n)}))}),[]),Object(r.jsx)(P,{children:e.map((function(n){return Object(r.jsx)(Bn,{post:n,author:n.user.nickname},n.id)}))})};function Xn(){return(Xn=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function qn(n,t){if(null==n)return{};var e,r,c=function(n,t){if(null==n)return{};var e,r,c={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(c[e]=n[e]);return c}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(c[e]=n[e])}return c}var Gn=c.createElement("path",{d:"M19.97 21.385L16.614 18.029C15.1661 18.6882 13.5908 19.0204 12 19.002C10.3599 19.0224 8.73671 18.6684 7.254 17.967C6.10468 17.4063 5.07264 16.6318 4.213 15.685C3.30049 14.7069 2.5833 13.5634 2.1 12.316L2 12.002L2.105 11.686C2.82781 9.84231 4.04426 8.23318 5.621 7.03501L3 4.41401L4.413 3.00201L21.382 19.971L19.972 21.385H19.97ZM7.036 8.45101C5.75792 9.34693 4.74865 10.5747 4.117 12.002C5.47142 15.1269 8.59587 17.1087 12 17.002C13.0498 17.0106 14.0936 16.8416 15.087 16.502L13.287 14.702C12.8863 14.8984 12.4462 15.001 12 15.002C10.3475 14.9916 9.01037 13.6546 9 12.002C9.00048 11.5548 9.10309 11.1136 9.3 10.712L7.036 8.45101ZM19.852 15.612L18.46 14.221C19.0456 13.5589 19.5256 12.8105 19.883 12.002C18.5304 8.87559 15.4047 6.89309 12 7.00201C11.753 7.00201 11.505 7.01101 11.265 7.02801L9.5 5.26101C10.3216 5.08525 11.1598 4.99841 12 5.00201C13.6401 4.98166 15.2633 5.33564 16.746 6.03701C17.8953 6.59775 18.9274 7.37221 19.787 8.31901C20.6991 9.29598 21.4163 10.4381 21.9 11.684L22 12.002L21.895 12.318C21.4268 13.5361 20.7342 14.6555 19.853 15.618L19.852 15.612Z",fill:"#ECEFF4"});function Kn(n,t){var e=n.title,r=n.titleId,o=qn(n,["title","titleId"]);return c.createElement("svg",Xn({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},o),e?c.createElement("title",{id:r},e):null,Gn)}var Qn=c.forwardRef(Kn);e.p;function Wn(){return(Wn=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function Yn(n,t){if(null==n)return{};var e,r,c=function(n,t){if(null==n)return{};var e,r,c={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(c[e]=n[e]);return c}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(c[e]=n[e])}return c}var $n=c.createElement("path",{d:"M12 19C10.3599 19.0204 8.7367 18.6664 7.254 17.965C6.10469 17.4042 5.07265 16.6297 4.213 15.683C3.30243 14.7041 2.58547 13.5616 2.1 12.316L2 12L2.105 11.684C2.59082 10.4394 3.30624 9.29725 4.214 8.31698C5.07334 7.37029 6.10504 6.59584 7.254 6.03498C8.73671 5.33357 10.3599 4.97959 12 4.99998C13.6401 4.97963 15.2633 5.3336 16.746 6.03498C17.8953 6.59571 18.9274 7.37017 19.787 8.31698C20.6993 9.29453 21.4165 10.4373 21.9 11.684L22 12L21.895 12.316C20.3262 16.3998 16.3742 19.0693 12 19ZM12 6.99998C8.59587 6.89331 5.47142 8.87507 4.117 12C5.4712 15.1251 8.59579 17.1069 12 17C15.4041 17.1064 18.5284 15.1247 19.883 12C18.5304 8.87356 15.4047 6.89106 12 6.99998ZM12 15C10.5573 15.0095 9.30937 13.9973 9.02097 12.5838C8.73256 11.1702 9.48427 9.75 10.8154 9.19364C12.1465 8.63728 13.6852 9.10011 14.4885 10.2985C15.2919 11.4969 15.1354 13.0961 14.115 14.116C13.5563 14.6812 12.7948 14.9995 12 15Z",fill:"#ECEFF4"});function nt(n,t){var e=n.title,r=n.titleId,o=Yn(n,["title","titleId"]);return c.createElement("svg",Wn({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},o),e?c.createElement("title",{id:r},e):null,$n)}var tt=c.forwardRef(nt);e.p;function et(){var n=Object(s.a)(["\n  flex-grow: 1;\n"]);return et=function(){return n},n}var rt=b.a.main(et());var ct=function(){var n=Object(j.g)(),t=Object(c.useContext)(d).setUser,e=Object(c.useState)(""),o=Object(u.a)(e,2),a=o[0],i=o[1],s=Object(c.useState)("Lidemy"),l=Object(u.a)(s,2),b=l[0],f=l[1],O=Object(c.useState)(!1),m=Object(u.a)(O,2),g=m[0],v=m[1],w=Object(c.useState)("password"),C=Object(u.a)(w,2),S=C[0],k=C[1],E=Object(c.useState)(),L=Object(u.a)(E,2),z=L[0],P=L[1];return Object(r.jsx)(rt,{children:Object(r.jsxs)(en,{onSubmit:function(e){e.preventDefault(),P(null),function(n){var t=n.username,e=n.password;return fetch("".concat(p,"/login"),{method:"POST",headers:{"content-type":x},body:JSON.stringify({username:t,password:e})}).then((function(n){return n.json()}))}({username:a,password:b}).then((function(e){if(1!==e.ok)return P(e.message);h(e.token),y().then((function(e){if(1!==e.ok)return h(null),P(e.toString());t(e.data),n.push("/")}))}))},children:[Object(r.jsxs)(rn,{children:[Object(r.jsx)(cn,{htmlFor:"username",children:"Username"}),Object(r.jsx)(on,{name:"username",id:"username",value:a,maxLength:32,onChange:function(n){return i(n.target.value)}})]}),Object(r.jsxs)(rn,{children:[Object(r.jsx)(cn,{htmlFor:"password",children:"Password"}),Object(r.jsx)(on,{type:S,name:"password",id:"password",value:b,onChange:function(n){return f(n.target.value)}}),Object(r.jsx)(ln,{type:"button","aria-label":"Show/Hide Password",title:"Show/Hide Password",onClick:function(){k("password"===S?"text":"password"),v(!g)},children:g?Object(r.jsx)(tt,{}):Object(r.jsx)(Qn,{})})]}),z&&Object(r.jsx)(sn,{children:z}),Object(r.jsx)(an,{children:Object(r.jsx)(un,{children:"Log In"})})]})})};var ot=function(){var n=Object(j.g)(),t=Object(c.useState)(""),e=Object(u.a)(t,2),o=e[0],a=e[1],i=Object(c.useState)(""),s=Object(u.a)(i,2),l=s[0],b=s[1];return Object(r.jsx)(yn,{title:o,setTitle:a,body:l,setBody:b,onPost:function(){o.trim()&&l.trim()&&function(n){var t=O();return fetch("".concat(p,"/posts"),{method:"POST",headers:{authorization:"Bearer ".concat(t),"content-type":x},body:JSON.stringify(n)}).then((function(n){return n.json()}))}({title:o,body:l}).then((function(t){t.id&&n.push("/posts/".concat(t.id))}))},submitButtonValue:"Post"})};function at(){var n=Object(s.a)(["\n  flex-grow: 1;\n"]);return at=function(){return n},n}var it=b.a.main(at());var ut=function(){var n=Object(j.g)(),t=Object(c.useContext)(d).setUser,e=Object(c.useState)(""),o=Object(u.a)(e,2),a=o[0],i=o[1],s=Object(c.useState)(""),l=Object(u.a)(s,2),b=l[0],f=l[1],O=Object(c.useState)("Lidemy"),m=Object(u.a)(O,2),g=m[0],v=m[1],w=Object(c.useState)(!1),C=Object(u.a)(w,2),S=C[0],k=C[1],E=Object(c.useState)("password"),L=Object(u.a)(E,2),z=L[0],P=L[1],F=Object(c.useState)(),B=Object(u.a)(F,2),D=B[0],I=B[1];return Object(r.jsx)(it,{children:Object(r.jsxs)(en,{onSubmit:function(e){e.preventDefault(),I(null),function(n){var t=n.nickname,e=n.username,r=n.password;return fetch("".concat(p,"/register"),{method:"POST",headers:{"content-type":x},body:JSON.stringify({nickname:t,username:e,password:r})}).then((function(n){return n.json()}))}({nickname:a,username:b,password:g}).then((function(e){if(1!==e.ok)return I(e.message);h(e.token),y().then((function(e){if(1!==e.ok)return h(null),I(e.toString());t(e.data),n.push("/")}))}))},children:[Object(r.jsxs)(rn,{children:[Object(r.jsx)(cn,{htmlFor:"nickname",children:"Nickname"}),Object(r.jsx)(on,{name:"nickname",id:"nickname",value:a,maxLength:32,onChange:function(n){return i(n.target.value)}})]}),Object(r.jsxs)(rn,{children:[Object(r.jsx)(cn,{htmlFor:"username",children:"Username"}),Object(r.jsx)(on,{name:"username",id:"username",value:b,maxLength:32,onChange:function(n){return f(n.target.value)}})]}),Object(r.jsxs)(rn,{children:[Object(r.jsx)(cn,{htmlFor:"password",children:"Password"}),Object(r.jsx)(on,{type:z,name:"password",id:"password",value:g,onChange:function(n){return v(n.target.value)}}),Object(r.jsx)(ln,{type:"button","aria-label":"Show/Hide Password",title:"Show/Hide Password",onClick:function(){P("password"===z?"text":"password"),k(!S)},children:S?Object(r.jsx)(tt,{}):Object(r.jsx)(Qn,{})})]}),D&&Object(r.jsx)(sn,{children:D}),Object(r.jsx)(an,{children:Object(r.jsx)(un,{children:"Sign Up"})})]})})};function st(){return(st=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function lt(n,t){if(null==n)return{};var e,r,c=function(n,t){if(null==n)return{};var e,r,c={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(c[e]=n[e]);return c}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(c[e]=n[e])}return c}var jt=c.createElement("path",{d:"M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z",fillRule:"evenodd"});function bt(n,t){var e=n.title,r=n.titleId,o=lt(n,["title","titleId"]);return c.createElement("svg",st({width:25,height:25,ref:t,"aria-labelledby":r},o),e?c.createElement("title",{id:r},e):null,jt)}var dt=c.forwardRef(bt);e.p;function ft(){var n=Object(s.a)(["\n  border: none;\n  padding: 0.5rem 1.5rem;\n  width: 100%;\n  font-size: 1rem;\n  font-weight: 500;\n\n  &:focus,\n  &:hover {\n    background-color: #ECEFF4;\n    color: #2E3440;\n  }\n"]);return ft=function(){return n},n}function ht(){var n=Object(s.a)([""]);return ht=function(){return n},n}function Ot(){var n=Object(s.a)(["\n  padding: 0.5rem 0;\n"]);return Ot=function(){return n},n}function mt(){var n=Object(s.a)(["\n  position: absolute;\n  top: 2rem;\n  right: 0;\n  border: 1px solid #ECEFF4;\n  border-radius: 0.5rem;\n  background: #2E3440;\n  box-shadow: 0px 1px 0.5rem #2E3440;\n"]);return mt=function(){return n},n}function pt(){var n=Object(s.a)(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n"]);return pt=function(){return n},n}function xt(){var n=Object(s.a)(["\n  fill: #ECEFF4;\n"]);return xt=function(){return n},n}function gt(){var n=Object(s.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  border: none;\n  padding: 0.25rem;\n"]);return gt=function(){return n},n}function vt(){var n=Object(s.a)(["\n  font-size: 1.125rem;\n  line-height: 2;\n"]);return vt=function(){return n},n}function wt(){var n=Object(s.a)(["\n  font-size: 1rem;\n  color: rgba(171, 185, 207, 0.75);\n"]);return wt=function(){return n},n}function yt(){var n=Object(s.a)(["\n  margin-bottom: 1rem;\n  padding-right: 2rem;\n  color: #81A1C1;\n  font-size: 1.25rem;\n\n  a:hover {\n    text-decoration: underline;\n  }\n"]);return yt=function(){return n},n}function Ct(){var n=Object(s.a)(["\n  position: relative;\n  margin-bottom: 2rem;\n"]);return Ct=function(){return n},n}function St(){var n=Object(s.a)(["\n  margin-bottom: 1.5rem;\n  font-size: 2.5rem;\n  line-height: 1.5;\n"]);return St=function(){return n},n}function kt(){var n=Object(s.a)(["\n  height: 100%;\n  max-width: 50rem;\n  margin: 0 auto;\n"]);return kt=function(){return n},n}function Et(){var n=Object(s.a)(["\n  flex-grow: 1;\n  margin-bottom: 4rem;\n"]);return Et=function(){return n},n}var Lt=b.a.main(Et()),zt=b.a.article(kt()),Pt=b.a.h1(St()),Ft=b.a.header(Ct()),Bt=b.a.h3(yt()),Dt=b.a.time(wt()),It=b.a.p(vt()),At=b.a.button(gt()),Mt=Object(b.a)(dt)(xt()),Tt=b.a.div(pt()),_t=b.a.div(mt()),Ut=b.a.ul(Ot()),Ht=b.a.li(ht()),Jt=b.a.button(ft());function Nt(n){var t=n.post,e=n.user,o=n.onDelete,a=Object(c.useState)(!1),i=Object(u.a)(a,2),s=i[0],j=i[1];return t?Object(r.jsxs)(zt,{children:[Object(r.jsx)(Pt,{children:t.title}),Object(r.jsxs)(Ft,{children:[Object(r.jsx)(Bt,{children:Object(r.jsx)(l.b,{to:"/authors/".concat(t.userId),replace:!0,children:t.user.nickname})}),Object(r.jsx)(Dt,{children:new Date(t.createdAt).toLocaleString()}),e&&e.id===t.user.id&&Object(r.jsx)(At,{"aria-label":"More options",title:"More options",onClick:function(){j(!s)},children:Object(r.jsx)(Mt,{})}),s&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Tt,{onClick:function(){j(!1)}}),Object(r.jsx)(_t,{children:Object(r.jsxs)(Ut,{children:[Object(r.jsx)(Ht,{children:Object(r.jsx)(l.b,{to:"/posts/".concat(t.id,"/edit"),children:Object(r.jsx)(Jt,{children:"Edit"})})}),Object(r.jsx)(Ht,{children:Object(r.jsx)(Jt,{onClick:o,children:"Delete"})})]})})]})]}),Object(r.jsx)(It,{children:t.body})]}):null}var Zt=function(){var n=Object(j.g)(),t=Object(j.i)().id,e=Object(c.useContext)(d).user,o=Object(c.useState)(),a=Object(u.a)(o,2),i=a[0],s=a[1];return Object(c.useEffect)((function(){w(t).then((function(n){return s(n)}))}),[t]),Object(r.jsx)(Lt,{children:Object(r.jsx)(Nt,{post:i,user:e,onDelete:function(){(function(n){return fetch("".concat(p,"/posts/").concat(n),{method:"DELETE",headers:{authorization:"Bearer ".concat(m),"content-type":x}}).then((function(n){return n.json()}))})(t).then((function(){n.push("/articles")}))}})})};function Vt(){var n=Object(s.a)(["\n  margin-bottom: 3.5rem;\n  color: #8FBCBB;\n  font-size: 2.5rem;\n  line-height: 1.5;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  white-space: pre-wrap;\n"]);return Vt=function(){return n},n}var Rt=b.a.h1(Vt());var Xt=function(){var n=Object(j.i)().userId,t=Object(c.useState)([]),e=Object(u.a)(t,2),o=e[0],a=e[1],i=Object(c.useState)(),s=Object(u.a)(i,2),l=s[0],b=s[1];return Object(c.useEffect)((function(){(function(n){return fetch("".concat(p,"/users/").concat(n,"?_embed=posts")).then((function(n){return n.json()}))})(n).then((function(n){a(n.posts.sort((function(n,t){return t.createdAt-n.createdAt}))),b(n.nickname)}))}),[n]),Object(r.jsxs)(P,{children:[Object(r.jsx)(Rt,{children:l}),o.map((function(n){return Object(r.jsx)(Bn,{post:n,author:l},n.id)}))]})};function qt(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 2rem;\n  height: 100%;\n"]);return qt=function(){return n},n}var Gt=b.a.div(qt());var Kt=function(){var n=Object(c.useState)(null),t=Object(u.a)(n,2),e=t[0],o=t[1];return Object(c.useEffect)((function(){O()&&y().then((function(n){if(1!==n.ok)return h(null);o(n.data)}))}),[]),Object(r.jsx)(d.Provider,{value:{user:e,setUser:o},children:Object(r.jsx)(Gt,{children:Object(r.jsxs)(l.a,{children:[Object(r.jsx)(Z,{}),Object(r.jsxs)(j.d,{children:[Object(r.jsx)(j.b,{exact:!0,path:"/",component:Rn}),Object(r.jsx)(j.b,{exact:!0,path:"/posts/:id",component:Zt}),Object(r.jsx)(j.b,{exact:!0,path:"/articles/:page",component:Zn}),Object(r.jsx)(j.b,{exact:!0,path:"/authors/:userId",component:Xt}),Object(r.jsx)(j.b,{exact:!0,path:"/new-post",component:ot}),Object(r.jsx)(j.b,{exact:!0,path:"/posts/:id/edit",component:Vn}),Object(r.jsx)(j.b,{exact:!0,path:"/signup",component:ut}),Object(r.jsx)(j.b,{exact:!0,path:"/login",component:ct}),Object(r.jsx)(j.b,{exact:!0,path:"/articles",children:Object(r.jsx)(j.a,{to:"/articles/1"})})]}),Object(r.jsx)(L,{})]})})})};e(35);i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(Kt,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.72e7d797.chunk.js.map