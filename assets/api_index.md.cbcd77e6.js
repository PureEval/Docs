import{f as k,g as I,h as w,o as a,c as n,a as r,i as A,v as b,j as f,F as u,k as p,u as v,t as d,p as S,l as E,_ as N,b as P}from"./app.2ac3657f.js";const q=JSON.parse('[{"text":"Global API","anchor":"global-api","items":[{"text":"Currying","link":"/api/currying","headers":[{"text":"curry()","anchor":"curry"},{"text":"uncurry()","anchor":"uncurry"}]},{"text":"Transform","link":"/api/transform","headers":[{"text":"compose()","anchor":"compose"},{"text":"pipe()","anchor":"pipe"},{"text":"call()","anchor":"call"}]},{"text":"Logic","link":"/api/logic","headers":[{"text":"either()","anchor":"either"},{"text":"both()","anchor":"both"},{"text":"gt()","anchor":"gt"},{"text":"gte()","anchor":"gte"},{"text":"lt()","anchor":"lt"},{"text":"lte()","anchor":"lte"},{"text":"equal()","anchor":"equal"},{"text":"when()","anchor":"when"},{"text":"when_v()","anchor":"when_v"},{"text":"unless()","anchor":"unless"},{"text":"unless_v()","anchor":"unless_v"},{"text":"ifElse()","anchor":"ifElse"},{"text":"ifElse_v()","anchor":"ifElse_v"}]}]}]'),m=l=>(S("data-v-ffef465d"),l=l(),E(),l),C={id:"api-index"},V={class:"header"},B=m(()=>r("h1",null,"API Reference",-1)),D={class:"api-filter"},F=m(()=>r("label",{for:"api-filter"},"Filter",-1)),L=["id"],O={class:"api-groups"},R=["href"],j={key:1,class:"no-match"},G=k({__name:"ApiIndex",setup(l){const c=I(""),h=i=>i.toLowerCase().replace(/-/g," "),_=w(()=>{const i=h(c.value),s=e=>h(e).includes(i);return q.map(e=>{if(s(e.text))return e;const o=e.items.map(t=>{if(s(t.text)||i.includes("ssr")&&t.text.startsWith("Server"))return t;const x=t.headers.filter(({text:g,anchor:y})=>s(g)||s(y));return x.length?{text:t.text,link:t.link,headers:x}:null}).filter(t=>t);return o.length?{text:e.text,items:o}:null}).filter(e=>e)});return(i,s)=>(a(),n("div",C,[r("div",V,[B,r("div",D,[F,A(r("input",{type:"search",placeholder:"Enter keyword",id:"api-filter","onUpdate:modelValue":s[0]||(s[0]=e=>c.value=e)},null,512),[[b,c.value]])])]),f("",!0),(a(!0),n(u,null,p(v(_),e=>(a(),n("div",{key:e.text,class:"api-section"},[r("h2",{id:e.anchor},d(e.text),9,L),r("div",O,[(a(!0),n(u,null,p(e.items,o=>(a(),n("div",{key:o.text,class:"api-group"},[r("h3",null,d(o.text),1),r("ul",null,[(a(!0),n(u,null,p(o.headers,t=>(a(),n("li",{key:t.anchor},[r("a",{href:o.link+".html#"+t.anchor},d(t.text),9,R)]))),128))])]))),128))])]))),128)),v(_).length?f("",!0):(a(),n("div",j,' No API matching "'+d(c.value)+'" found. ',1))]))}});const J=N(G,[["__scopeId","data-v-ffef465d"]]),z=JSON.parse('{"title":"API Reference","description":"","frontmatter":{"title":"API Reference","layout":"page"},"headers":[],"relativePath":"api/index.md","lastUpdated":1671974123000}'),T={name:"api/index.md"},H=Object.assign(T,{setup(l){return(c,h)=>(a(),n("div",null,[P(J)]))}});export{z as __pageData,H as default};
