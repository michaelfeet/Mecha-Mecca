(this["webpackJsonpjwt-boilerplate"]=this["webpackJsonpjwt-boilerplate"]||[]).push([[0],{118:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){},147:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(53),o=n.n(a),s=(n(142),n(143),n(11)),c=n(9),i=(n(144),n(124)),l=n(26),u=n(12),j=n.n(u),d=n(178),h=n(18),b=n(176),p=n(177),g=n(125),m=(n(147),n(1));function O(e){var t=e.loggedUser,n=e.handleLogout;return Object(m.jsxs)(b.a,{clearing:!0,children:[Object(m.jsxs)(p.a,{as:"h2",floated:"right",children:[Object(m.jsxs)(h.b,{to:"/".concat(null===t||void 0===t?void 0:t.username),children:[Object(m.jsx)(g.a,{src:null!==t&&void 0!==t&&t.photoUrl?null===t||void 0===t?void 0:t.photoUrl:"https://react.semantic-ui.com/images/wireframe/square-image.png",avatar:!0}),Object(m.jsx)("span",{className:"header-username",children:null===t||void 0===t?void 0:t.username})]}),Object(m.jsx)(h.b,{to:"",onClick:n,children:"Logout"})]}),Object(m.jsx)(p.a,{as:"h2",floated:"left",children:Object(m.jsxs)(h.b,{to:"/",children:[Object(m.jsx)(g.a,{src:"https://i.imgur.com/TAtWfEl.png",avatar:!0}),Object(m.jsx)("span",{children:"Home"})]})})]})}var x=n(171),f=n(175);function v(e){var t=Object(r.useState)({title:""}),n=Object(s.a)(t,2),a=n[0],o=n[1],c=Object(r.useState)(""),i=Object(s.a)(c,2),l=i[0],u=i[1];function j(t){t.preventDefault();var n=new FormData;n.append("photo",l),n.append("title",a.title),console.log(n.forEach((function(e){return console.log(e)}))),e.handleAddPost(n)}return Object(m.jsx)(b.a,{children:Object(m.jsxs)(x.a,{onSubmit:j,children:[Object(m.jsx)(x.a.Input,{className:"form-control",name:"title",value:a.title,placeholder:"Title",onChange:function(e){o({title:e.target.value})},required:!0}),Object(m.jsx)(x.a.Field,{children:Object(m.jsx)(x.a.Input,{type:"file",name:"photo",placeholder:"upload image",onChange:function(e){u(e.target.files[0])}})}),Object(m.jsx)(f.a,{type:"submit",className:"btn",color:"red",onClick:j,children:"Submit"})]})})}var w=n(172),k=n(173);function y(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var C={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:y,removeToken:function(){localStorage.removeItem("token")},getUserFromToken:function(){var e=y();return e?JSON.parse(atob(e.split(".")[1])).user:null}},S="/api/posts";function U(e){return fetch(S,{method:"POST",body:e,headers:{Authorization:"Bearer "+C.getToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error("Bad Credentials, Check server terminal for more info.")}))}))}function E(){return fetch(S,{headers:{Authorization:"Bearer "+C.getToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))}))}function P(e){return fetch(S+"/"+e,{headers:{Authorization:"Bearer "+C.getToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))}))}function T(e){return fetch(S+"/"+e,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+C.getToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))}))}function A(e){var t=e.post,n=e.isProfile,r=e.loggedUser,a=e.deletePost;return Object(m.jsxs)(w.a,{raised:!0,children:[n?"":Object(m.jsx)(w.a.Content,{textAlign:"left",children:Object(m.jsx)(w.a.Header,{children:Object(m.jsxs)(h.b,{to:"/".concat(t.user.username),children:[Object(m.jsx)(g.a,{size:"large",avatar:!0,src:t.user.photoUrl?t.user.photoUrl:"https://react.semantic-ui.com/images/wireframe/square-image.png"}),t.user.username]})})}),Object(m.jsx)(w.a.Content,{textAlign:"center",children:Object(m.jsx)(w.a.Description,{children:t.title})}),Object(m.jsx)(g.a,{src:"".concat(null===t||void 0===t?void 0:t.photoUrl),wrapped:!0,ui:!1}),Object(m.jsxs)(w.a.Content,{children:[Object(m.jsx)(h.b,{to:"/post/".concat(t._id),children:Object(m.jsx)(f.a,{children:"Details"})}),t.user.username===r.username?Object(m.jsx)(f.a,{onClick:function(){return a(t._id)},children:"Delete"}):""]})]},t._id)}var L=n(170);function I(){return Object(m.jsx)(L.a,{size:"small",active:!0})}function N(e){var t=e.posts,n=e.numPhotosCol,r=e.isProfile,a=e.loading,o=e.loggedUser,s=e.deletePost;return console.log(t),Object(m.jsxs)(w.a.Group,{itemsPerRow:n,stackable:!0,children:[a?Object(m.jsxs)(b.a,{children:[Object(m.jsx)(k.a,{active:!0,inverted:!0,children:Object(m.jsx)(I,{size:"small",children:"Loading"})}),Object(m.jsx)(g.a,{src:"https://react.semantic-ui.com/images/wireframe/short-paragraph.png"})]}):null,t.reverse().map((function(e){return Object(m.jsx)(A,{post:e,isProfile:r,loggedUser:o,deletePost:s},e._id)}))]})}var D=n(174);function F(e){return Object(m.jsx)(D.a,{negative:!0,children:Object(m.jsx)(D.a.Header,{children:e.error})})}function W(e){var t=e.loggedUser,n=e.handleLogout,a=Object(r.useState)([]),o=Object(s.a)(a,2),c=o[0],u=o[1],h=Object(r.useState)(!0),b=Object(s.a)(h,2),p=b[0],g=b[1],x=Object(r.useState)(""),f=Object(s.a)(x,2),w=f[0],k=f[1];function y(){return(y=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,U(t);case 4:e.sent,C(),g(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),k("Error creating post, please try again");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function C(){return S.apply(this,arguments)}function S(){return(S=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E();case 3:t=e.sent,u(Object(i.a)(t.data)),g(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message,"<<< This is the error"),g(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function P(){return(P=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,T(t);case 4:e.sent,C(),g(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),k("Error deleting posts, try again.");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){C()}),[]),w?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O,{loggedUser:t,handleLogout:n}),Object(m.jsx)(F,{error:w}),";"]}):p?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O,{loggedUser:t,handleLogout:n}),Object(m.jsx)(I,{})]}):Object(m.jsxs)(d.a,{centered:!0,children:[Object(m.jsx)(d.a.Row,{children:Object(m.jsx)(d.a.Column,{children:Object(m.jsx)(O,{loggedUser:t,handleLogout:n})})}),Object(m.jsx)(d.a.Row,{children:Object(m.jsx)(d.a.Column,{style:{maxWidth:450},children:Object(m.jsx)(v,{handleAddPost:function(e){return y.apply(this,arguments)}})})}),Object(m.jsx)(d.a.Row,{children:Object(m.jsx)(d.a.Column,{style:{maxWidth:450},children:Object(m.jsx)(N,{posts:c,numPhotosCol:1,isProfile:!1,loading:p,deletePost:function(e){return P.apply(this,arguments)},loggedUser:t})})})]})}var q=n(68),R=n(37),z="/api/users/";var B={signup:function(e){return fetch("/api/users/signup",{method:"POST",body:e}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))})).then((function(e){var t=e.token;return C.setToken(t)}))},logout:function(){C.removeToken()},login:function(e){return fetch("/api/users/login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))})).then((function(e){var t=e.token;return C.setToken(t)}))},getUser:function(){return C.getUserFromToken()},getProfile:function(e){return fetch(z+e,{headers:{Authorization:"Bearer "+C.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error("error from getProfile request. check the server terminal.")}))}};function J(e,t){return e===t}function H(e){var t=e.handleSignUpOrLogin,n=Object(r.useState)({message:"",passwordError:!1}),a=Object(s.a)(n,2),o=a[0],i=a[1],u=Object(r.useState)({username:"",email:"",password:"",passwordConf:""}),O=Object(s.a)(u,2),v=O[0],w=O[1],k=Object(r.useState)(""),y=Object(s.a)(k,2),C=y[0],S=y[1],U=Object(c.g)();function E(e){w(Object(R.a)(Object(R.a)({},v),{},Object(q.a)({},e.target.name,e.target.value)))}function P(){return(P=Object(l.a)(j.a.mark((function e(n){var r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),J(v.password,v.passwordConf)){e.next=3;break}return e.abrupt("return",i({message:"Passwords Do Not Match",passwordError:!0}));case 3:if(C){e.next=5;break}return e.abrupt("return",i({message:"Please Upload A Profile Image"}));case 5:for(a in i({message:"",passwordError:!1}),(r=new FormData).append("photo",C),v)r.append(a,v[a]);return console.log(r.forEach((function(e){return console.log(e,"<<< Each element in formData")}))),e.prev=10,e.next=13,B.signup(r);case 13:t(),U("/"),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(10),console.log(e.t0),i({message:e.t0.message,passwordError:!1});case 21:case"end":return e.stop()}}),e,null,[[10,17]])})))).apply(this,arguments)}return Object(m.jsx)(d.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle",children:Object(m.jsxs)(d.a.Column,{style:{maxWidth:450},children:[Object(m.jsxs)(p.a,{as:"h2",color:"red",textAlign:"center",children:[Object(m.jsx)(g.a,{src:"https://i.imgur.com/TAtWfEl.png"}),"Join Mecha Mecca"]}),Object(m.jsxs)(x.a,{onSubmit:function(e){return P.apply(this,arguments)},children:[Object(m.jsxs)(b.a,{stacked:!0,children:[Object(m.jsx)(x.a.Input,{name:"username",placeholder:"username",value:v.username,onChange:E,required:!0}),Object(m.jsx)(x.a.Input,{type:"email",name:"email",placeholder:"email",value:v.email,onChange:E,required:!0}),Object(m.jsx)(x.a.Input,{error:o.passwordError,name:"password",type:"password",placeholder:"password",value:v.password,onChange:E,required:!0}),Object(m.jsx)(x.a.Input,{error:o.passwordError,name:"passwordConf",type:"password",placeholder:"Confirm Password",value:v.passwordConf,onChange:E,required:!0}),Object(m.jsx)(x.a.Field,{children:Object(m.jsx)(x.a.Input,{type:"file",name:"photo",placeholder:"upload image",onChange:function(e){console.log(e.target.files,"<<< e.target.files"),S(e.target.files[0])}})}),Object(m.jsx)(f.a,{type:"submit",className:"btn",color:"red",children:"Join Now! "})]}),o.message?Object(m.jsx)(F,{error:o.message}):null]}),Object(m.jsxs)(D.a,{children:["Already have an account? ",Object(m.jsx)(h.b,{to:"/login",children:"Log In"})]})]})})}n(155);function _(e){var t=e.handleSignUpOrLogin,n=Object(r.useState)({email:"",password:""}),a=Object(s.a)(n,2),o=a[0],i=a[1],u=Object(r.useState)(""),O=Object(s.a)(u,2),v=O[0],w=O[1];function k(e){i(Object(R.a)(Object(R.a)({},o),{},Object(q.a)({},e.target.name,e.target.value)))}var y=Object(c.g)();function C(){return(C=Object(l.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,B.login(o);case 4:t(),y("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),w(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return Object(m.jsx)(d.a,{textAlign:"center",style:{height:"100vh",width:"100vw"},verticalAlign:"middle",children:Object(m.jsxs)(d.a.Column,{style:{maxWidth:450},children:[Object(m.jsxs)(p.a,{as:"h2",color:"red",textAlign:"center",children:[Object(m.jsx)(g.a,{src:"https://i.imgur.com/TAtWfEl.png"})," Log In"]}),Object(m.jsx)(x.a,{onSubmit:function(e){return C.apply(this,arguments)},children:Object(m.jsxs)(b.a,{stacked:!0,children:[Object(m.jsx)(x.a.Input,{type:"email",name:"email",placeholder:"email",value:o.email,onChange:k,required:!0}),Object(m.jsx)(x.a.Input,{name:"password",type:"password",placeholder:"password",value:o.password,onChange:k,required:!0}),Object(m.jsx)(f.a,{type:"submit",className:"btn",color:"red",children:"Login"})]})}),Object(m.jsxs)(D.a,{children:["New to us? ",Object(m.jsx)(h.b,{to:"/signup",children:"Sign Up"})]}),v?Object(m.jsx)(F,{error:v}):null]})})}var M=function(e){var t=e.user;return Object(m.jsx)(d.a,{textAlign:"center",columns:2,children:Object(m.jsxs)(d.a.Row,{children:[Object(m.jsx)(d.a.Column,{children:Object(m.jsx)(g.a,{src:"".concat(null!==t&&void 0!==t&&t.photoUrl?null===t||void 0===t?void 0:t.photoUrl:"https://react.semantic-ui.com/images/wireframe/square-image.png"," "),avatar:!0,size:"tiny"})}),Object(m.jsx)(d.a.Column,{textAlign:"left",style:{maxWidth:450},children:Object(m.jsx)(b.a,{vertical:!0,children:Object(m.jsx)("h3",{children:t.username})})})]})})};function G(e){var t=e.loggedUser,n=e.handleLogout,a=Object(r.useState)([]),o=Object(s.a)(a,2),i=o[0],u=o[1],h=Object(r.useState)({}),b=Object(s.a)(h,2),p=b[0],g=b[1],x=Object(r.useState)(!0),f=Object(s.a)(x,2),v=f[0],w=f[1],k=Object(r.useState)(""),y=Object(s.a)(k,2),C=y[0],S=y[1],U=Object(c.h)().username;function E(){return P.apply(this,arguments)}function P(){return(P=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.getProfile(U);case 3:t=e.sent,console.log(t,"<<<user's posts"),w(!1),g(t.data.user),u(t.data.posts),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message,"profile>profilePage()"),S("These are not the droids you're looking for. Profile not found.");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function A(){return(A=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,T(t);case 4:e.sent,E(),w(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),S("Error deleting posts, try again.");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){E()}),[U]),C?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O,{loggedUser:t,handleLogout:n}),Object(m.jsx)(F,{error:C})]}):v?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O,{loggedUser:t,handleLogout:n}),Object(m.jsx)(I,{})]}):Object(m.jsxs)(d.a,{children:[Object(m.jsx)(d.a.Row,{children:Object(m.jsx)(d.a.Column,{children:Object(m.jsx)(O,{loggedUser:t,handleLogout:n})})}),Object(m.jsx)(d.a.Row,{children:Object(m.jsx)(d.a.Column,{children:Object(m.jsx)(M,{user:p})})}),Object(m.jsx)(d.a.Row,{centered:!0,children:Object(m.jsx)(d.a.Column,{style:{maxWidth:750},children:Object(m.jsx)(N,{posts:i,numPhotosCol:3,isProfile:!0,loading:v,loggedUser:t,deletePost:function(e){return A.apply(this,arguments)}})})})]})}n(118);var $="/api/comments";function K(e){return console.log(e,"commentdata"),fetch($,{method:"POST",body:JSON.stringify(e),headers:new Headers({"Content-Type":"application/json",Authorization:"Bearer "+C.getToken()})}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error("Bad Credentials, Check server terminal for more info.")}))}))}function Q(e){var t=e.comments;return t?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{children:Object(m.jsx)("ul",{className:"list",children:t.map((function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("li",{className:"listItem",children:[Object(m.jsx)("span",{children:e.comment}),Object(m.jsxs)("span",{children:[" - ",e.user]})]})})}))})})}):null}var V=n(169);function X(e){var t=e.postId,n=e.handleAddComment,a=Object(r.useState)({comment:""}),o=Object(s.a)(a,2),c=o[0],i=o[1];function l(e){e.preventDefault(),n({comment:c.comment,postId:t})}return console.log(t),Object(m.jsx)(b.a,{children:Object(m.jsxs)(x.a,{onSubmit:l,children:[Object(m.jsx)(x.a.Field,{control:V.a,className:"form-control",name:"comment",value:c.comment,placeholder:"Add Comment",onChange:function(e){i(Object(R.a)(Object(R.a)({},c),{},{comment:e.target.value}))},required:!0}),Object(m.jsx)(f.a,{type:"submit",className:"btn",color:"red",onClick:l,children:"Submit"})]})})}function Y(e){var t=e.loggedUser,n=e.handleLogout,a=Object(r.useState)({}),o=Object(s.a)(a,2),i=o[0],u=o[1],h=Object(c.h)().id;function b(){return p.apply(this,arguments)}function p(){return(p=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P(h);case 3:t=e.sent,console.log(t,"<<<Data"),u(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message,"<<< This is the error");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function x(){return(x=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K(t);case 3:e.sent,b(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message,"error creating post");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){b()}),[]),Object(m.jsxs)(d.a,{textAlign:"center",columns:1,children:[Object(m.jsx)(d.a.Row,{children:Object(m.jsx)(d.a.Column,{children:Object(m.jsx)(O,{loggedUser:t,handleLogout:n})})}),Object(m.jsx)(d.a.Row,{children:Object(m.jsx)(d.a.Column,{children:Object(m.jsx)("h1",{children:i.title})})}),Object(m.jsx)(d.a.Row,{children:Object(m.jsx)(d.a.Column,{style:{maxWidth:450},children:Object(m.jsx)(g.a,{className:"image",src:i.photoUrl})})}),Object(m.jsxs)(d.a.Row,{children:[Object(m.jsx)(d.a.Column,{style:{maxWidth:450},children:Object(m.jsx)(X,{postId:i._id,handleAddComment:function(e){return x.apply(this,arguments)}})}),Object(m.jsx)(d.a.Column,{children:Object(m.jsx)(Q,{className:"list",comments:i.comments})})]})]})}var Z=function(){var e=Object(r.useState)(B.getUser()),t=Object(s.a)(e,2),n=t[0],a=t[1];function o(){a(B.getUser())}function i(){B.logout(),a(null)}return n?Object(m.jsxs)(c.d,{children:[Object(m.jsx)(c.b,{path:"/",element:Object(m.jsx)(W,{loggedUser:n,handleLogout:i})}),Object(m.jsx)(c.b,{path:"/login",element:Object(m.jsx)(_,{handleSignUpOrLogin:o})}),Object(m.jsx)(c.b,{path:"/signup",element:Object(m.jsx)(H,{handleSignUpOrLogin:o})}),Object(m.jsx)(c.b,{path:"/:username",element:Object(m.jsx)(G,{loggedUser:n,handleLogout:i})}),Object(m.jsx)(c.b,{path:"/post/:id",element:Object(m.jsx)(Y,{loggedUser:n,handleLogout:i})})]}):Object(m.jsxs)(c.d,{children:[Object(m.jsx)(c.b,{path:"/login",element:Object(m.jsx)(_,{handleSignUpOrLogin:o})}),Object(m.jsx)(c.b,{path:"/signup",element:Object(m.jsx)(H,{handleSignUpOrLogin:o})}),Object(m.jsx)(c.b,{path:"/*",element:Object(m.jsx)(c.a,{to:"/signup"})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(m.jsx)(h.a,{children:Object(m.jsx)(Z,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[156,1,2]]]);
//# sourceMappingURL=main.61b762e2.chunk.js.map