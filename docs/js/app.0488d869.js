(function(t){function e(e){for(var n,a,c=e[0],l=e[1],i=e[2],f=0,d=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,c=1;c<r.length;c++){var l=r[c];0!==o[l]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={app:0},s=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/web_vue_lab_first/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"0dcc":function(t,e,r){"use strict";r("d724")},"11ac":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("circles",{attrs:{go_count:t.count}}),1===t.count?r("first_form"):t._e(),2===t.count?r("second_form"):t._e(),3===t.count?r("third_form"):t._e(),r("br"),r("br"),r("br"),r("br"),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){t.count>2?t.count=1:t.count+=1}}},[t._v("Press me")])],1)},s=[],a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"col-lg-6 offset-lg-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Email address")]),r("input",{staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"}}),r("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("We'll never share your email with anyone else.")])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Password")]),r("input",{staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password"}})])])}],l={name:"first_form"},i=l,u=(r("66f9"),r("2877")),f=Object(u["a"])(i,a,c,!1,null,"48cd6038",null),d=f.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"col-lg-6 offset-lg-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"firstName"}},[t._v("First name")]),r("input",{staticClass:"form-control",attrs:{type:"text",id:"firstName",placeholder:"Enter first name"}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"secondName"}},[t._v("Second name")]),r("input",{staticClass:"form-control",attrs:{type:"text",id:"secondName",placeholder:"Enter second name"}})])])}],_={name:"second_form"},v=_,b=(r("fd0f"),Object(u["a"])(v,p,m,!1,null,"54748f07",null)),h=b.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"col-lg-6 offset-lg-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"exampleFormControlTextarea1"}},[t._v("Tell us something about you")]),r("textarea",{staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"2"}})]),r("div",{staticClass:"form-check"},[r("input",{staticClass:"form-check-input",attrs:{type:"checkbox",name:"first_check",id:"first_check",value:"option1",checked:""}}),r("label",{staticClass:"form-check-label",attrs:{for:"first_check"}},[t._v(" I agree with your policy ")])]),r("div",{staticClass:"form-check"},[r("input",{staticClass:"form-check-input",attrs:{type:"checkbox",name:"second_check",id:"second_check",value:"option2"}}),r("label",{staticClass:"form-check-label",attrs:{for:"second_check"}},[t._v(" Send me email notifications ")])])])}],g={name:"third_component"},C=g,w=(r("0dcc"),Object(u["a"])(C,x,y,!1,null,"6c188827",null)),k=w.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",{class:{active:1===t.go_count}},[t._v(t._s(t.todos[0].text))]),r("li",{class:{active:2===t.go_count},attrs:{id:"middle"}},[t._v(t._s(t.todos[1].text))]),r("li",{class:{active:3===t.go_count}},[t._v(t._s(t.todos[2].text))])])},j=[],E={name:"circles",props:["go_count"],data:function(){return{todos:[{text:"1"},{text:"2"},{text:"3"}],isActive:!0}}},P=E,$=(r("d0e5"),Object(u["a"])(P,O,j,!1,null,"1978dfd0",null)),S=$.exports,I={name:"App",components:{circles:S,first_form:d,second_form:h,third_form:k},data:function(){return{count:1}}},T=I,M=(r("034f"),Object(u["a"])(T,o,s,!1,null,null,null)),N=M.exports,F=r("5f5b"),A=r("b1e0");r("f9e3"),r("2dd8");n["default"].use(F["a"]),n["default"].use(A["a"]),new n["default"]({render:function(t){return t(N)}}).$mount("#app")},"66f9":function(t,e,r){"use strict";r("11ac")},"85ec":function(t,e,r){},d0e5:function(t,e,r){"use strict";r("e00d")},d724:function(t,e,r){},dcf8:function(t,e,r){},e00d:function(t,e,r){},fd0f:function(t,e,r){"use strict";r("dcf8")}});
//# sourceMappingURL=app.0488d869.js.map