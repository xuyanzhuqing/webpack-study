(()=>{var e={55:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(601),o=r.n(n),a=r(609),s=r.n(a)()(o());s.push([e.id,".red {\n  color: red;\n}",""]);const c=s},609:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:e=>{"use strict";e.exports=function(e){return e[1]}},524:e=>{e.exports=[["to","from","heading","body"],["Mary","John","Reminder","Call Cindy on Tuesday"],["Zoe","Bill","Reminder","Buy orange juice"],["Autumn","Lindsey","Letter","I miss you"]]},62:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},s=[],c=0;c<e.length;c++){var i=e[c],u=n.base?i[0]+n.base:i[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=r(d),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var v=o(f,n);n.byIndex=c,t.splice(c,0,{identifier:d,updater:v,references:1})}s.push(d)}return s}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var c=r(a[s]);t[c].references--}for(var i=n(e,o),u=0;u<a.length;u++){var l=r(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=i}}},793:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},173:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},892:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},877:e=>{"use strict";var t,r=(t=[],function(e,r){return t[e]=r,t.filter(Boolean).join("\n")});function n(e,t,n,o){var a;if(n)a="";else{a="",o.supports&&(a+="@supports (".concat(o.supports,") {")),o.media&&(a+="@media ".concat(o.media," {"));var s=void 0!==o.layer;s&&(a+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),a+=o.css,s&&(a+="}"),o.media&&(a+="}"),o.supports&&(a+="}")}if(e.styleSheet)e.styleSheet.cssText=r(t,a);else{var c=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(c,i[t]):e.appendChild(c)}}var o={singleton:null,singletonCounter:0};e.exports=function(e){var t=o.singletonCounter++,r=o.singleton||(o.singleton=e.insertStyleElement(e));return{update:function(e){n(r,t,!1,e)},remove:function(e){n(r,t,!0,e)}}}},588:e=>{e.exports={note:{to:["Mary"],from:["John"],heading:["Reminder"],body:["Call Cindy on Tuesday"]}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{"use strict";var e=Array.prototype.join;var t=r(62),n=r.n(t),o=r(877),a=r.n(o),s=r(793),c=r.n(s),i=r(892),u=r.n(i),l=r(173),d=r.n(l),p=r(55),f={};f.setAttributes=u(),f.insert=c().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;var v=r(588),m=r.n(v),y=r(524),h=r.n(y);const g=JSON.parse('{"T":"TOML Example","c":{"u2":"Tom Preston-Werner"}}'),x=JSON.parse('{"T":"YAML Example","c":{"u2":"Tom Preston-Werner"}}'),b=JSON.parse('{"T":"JSON5 Example","c":{"u2":"Tom Preston-Werner"}}');var T,C,M;console.info(m(),h()),console.log(g.T),console.log(g.c.u2),console.log(x.T),console.log(x.c.u2),console.log(b.T),console.log(b.c.u2),document.body.appendChild(((T=document.createElement("div")).innerHTML=(M=" ",null==(C=["Hello","webpack"])?"":e.call(C,M)),T.classList.add("red"),T))})()})();