var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function f(){return u(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t){return function(e){return e.preventDefault(),t.call(this,e)}}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.data!==e&&(t.data=e)}function g(t,e){t.value=null==e?"":e}function $(t,e,n){t.classList[n?"add":"remove"](e)}let v;function x(t){v=t}const y=[],b=[],w=[],_=[],S=Promise.resolve();let E=!1;function k(t){w.push(t)}let C=!1;const L=new Set;function q(){if(!C){C=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];x(e),N(e.$$)}for(y.length=0;b.length;)b.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];L.has(e)||(L.add(e),e())}w.length=0}while(y.length);for(;_.length;)_.pop()();E=!1,C=!1,L.clear()}}function N(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const j=new Set;function A(t,e){t&&t.i&&(j.delete(t),t.i(e))}function B(t,e,n,o){if(t&&t.o){if(j.has(t))return;j.add(t),(void 0).c.push(()=>{j.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function O(t){t&&t.c()}function P(t,n,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(n,r),k(()=>{const n=c.map(e).filter(s);i?i.push(...n):o(n),t.$$.on_mount=[]}),l.forEach(k)}function T(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(y.push(t),E||(E=!0,S.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(e,s,r,a,c,l,u=[-1]){const f=v;x(e);const d=s.props||{},p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:u};let h=!1;if(p.ctx=r?r(e,d,(t,n,...o)=>{const s=o.length?o[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=s)&&(p.bound[t]&&p.bound[t](s),h&&D(e,t)),n}):[],p.update(),h=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);p.fragment&&p.fragment.l(t),t.forEach(i)}else p.fragment&&p.fragment.c();s.intro&&A(e.$$.fragment),P(e,s.target,s.anchor),q()}x(f)}class M{$destroy(){T(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function V(e){let n,s,r,v,x,y,b,w,_,S,E,k,C,L,q,N,j,A,B,O,P,T,D,J,M,V,z,F=e[0]?"close":"Sign up/Login",G=e[1]?"Beta Login":"Beta Signup",H=e[1]?"Jack in":"Sign up!";return{c(){n=l("button"),s=u(F),r=f(),v=l("div"),x=l("form"),y=l("h1"),b=u(G),w=f(),_=l("button"),S=u(e[2]),E=f(),k=l("label"),k.textContent="Email address",C=f(),L=l("input"),q=f(),N=l("label"),N.textContent="Password",j=f(),A=l("input"),B=f(),O=l("label"),O.textContent="Name",P=f(),T=l("input"),D=f(),J=l("button"),M=u(H),h(n,"class","fixed-button svelte-7h3x20"),h(y,"class","headline-primary svelte-7h3x20"),h(_,"class","toggle-button svelte-7h3x20"),h(k,"for","email"),h(k,"class"," svelte-7h3x20"),h(L,"type","email"),h(L,"id","email"),h(L,"class"," svelte-7h3x20"),h(L,"placeholder","Email address"),L.required=!0,h(N,"for","password"),h(N,"class"," svelte-7h3x20"),h(A,"type","password"),h(A,"id","password"),h(A,"class"," svelte-7h3x20"),h(A,"placeholder","Password"),A.required=!0,h(O,"for","name"),h(O,"class"," svelte-7h3x20"),$(O,"fadeout",e[1]),h(T,"type","text"),h(T,"id","name"),h(T,"class"," svelte-7h3x20"),h(T,"placeholder","Name"),T.required=!0,$(T,"fadeout",e[1]),h(J,"class","button-signin svelte-7h3x20"),h(x,"class","form-signin svelte-7h3x20"),h(v,"class","form-container svelte-7h3x20"),$(v,"fadein",e[0])},m(t,o){c(t,n,o),a(n,s),c(t,r,o),c(t,v,o),a(v,x),a(x,y),a(y,b),a(x,w),a(x,_),a(_,S),a(x,E),a(x,k),a(x,C),a(x,L),g(L,e[3]),a(x,q),a(x,N),a(x,j),a(x,A),g(A,e[4]),a(x,B),a(x,O),a(x,P),a(x,T),g(T,e[5]),a(x,D),a(x,J),a(J,M),V||(z=[d(n,"click",p(e[8])),d(_,"click",e[9]),d(L,"input",e[10]),d(A,"input",e[11]),d(T,"input",e[12]),d(J,"click",p(e[13]))],V=!0)},p(t,[e]){1&e&&F!==(F=t[0]?"close":"Sign up/Login")&&m(s,F),2&e&&G!==(G=t[1]?"Beta Login":"Beta Signup")&&m(b,G),4&e&&m(S,t[2]),8&e&&L.value!==t[3]&&g(L,t[3]),16&e&&A.value!==t[4]&&g(A,t[4]),2&e&&$(O,"fadeout",t[1]),32&e&&T.value!==t[5]&&g(T,t[5]),2&e&&$(T,"fadeout",t[1]),2&e&&H!==(H=t[1]?"Jack in":"Sign up!")&&m(M,H),1&e&&$(v,"fadein",t[0])},i:t,o:t,d(t){t&&i(n),t&&i(r),t&&i(v),V=!1,o(z)}}}function z(t,e,n){let o,s=!1,r=!1,a="email@jim.com",c="dootdoot",i="asdasd";function l(){var t={email:a,password:c,name:i};fetch("/signup",{method:"POST",body:JSON.stringify(t)}).then(t=>console.log(t))}function u(){fetch("http://localhost:3000/login",{method:"POST",body:{email:a,password:c}}).then(t=>t.json()).then(t=>{console.log("Success:",t)}).catch(t=>{console.error("Error:",t)})}return t.$$.update=()=>{2&t.$$.dirty&&n(2,o=r?"Dont have an account?":"Already have an account?")},[s,r,o,a,c,i,l,u,()=>n(0,s=!s),()=>n(1,r=!r),function(){a=this.value,n(3,a)},function(){c=this.value,n(4,c)},function(){i=this.value,n(5,i)},()=>r?u():l()]}class F extends M{constructor(t){super(),J(this,t,z,V,r,{})}}function G(e){let n,o,s,r,u,d;const p=new F({});return{c(){n=l("div"),o=l("div"),o.textContent="Coming soon...Stay tuned!",s=f(),r=l("div"),r.textContent=":D",u=f(),O(p.$$.fragment),h(o,"class","announcement svelte-x5uduq"),h(r,"class","buddy"),h(n,"class","list-container svelte-x5uduq")},m(t,e){c(t,n,e),a(n,o),a(n,s),a(n,r),a(n,u),P(p,n,null),d=!0},p:t,i(t){d||(A(p.$$.fragment,t),d=!0)},o(t){B(p.$$.fragment,t),d=!1},d(t){t&&i(n),T(p)}}}class H extends M{constructor(t){super(),J(this,t,null,G,r,{})}}function I(e){let n,o,s,r,a,u;const d=new H({});return{c(){n=l("main"),O(d.$$.fragment),o=f(),s=l("link"),r=f(),a=l("meta"),h(n,"class","svelte-13lfj8d"),h(s,"href","https://fonts.googleapis.com/css2?family=VT323&display=swap"),h(s,"rel","stylesheet"),h(a,"name","viewport"),h(a,"content","width=device-width, initial-scale=1")},m(t,e){c(t,n,e),P(d,n,null),c(t,o,e),c(t,s,e),c(t,r,e),c(t,a,e),u=!0},p:t,i(t){u||(A(d.$$.fragment,t),u=!0)},o(t){B(d.$$.fragment,t),u=!1},d(t){t&&i(n),T(d),t&&i(o),t&&i(s),t&&i(r),t&&i(a)}}}return new class extends M{constructor(t){super(),J(this,t,null,I,r,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
