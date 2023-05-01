import{_ as c,r as p,o as n,c as o,a as e,b as Q,w as T,d as t,e as s}from"./app.9b2891ec.js";const y3=JSON.parse('{"title":"MaybeAsync","description":"","frontmatter":{},"headers":[{"level":2,"title":"MaybeAsync","slug":"maybeasync","link":"#maybeasync","children":[{"level":3,"title":"MaybeAsync.lift()","slug":"lift","link":"#lift","children":[]},{"level":3,"title":"MaybeAsync.is()","slug":"is","link":"#is","children":[]},{"level":3,"title":"MaybeAsync.isNothing()","slug":"isnothing","link":"#isnothing","children":[]},{"level":3,"title":"MaybeAsync.map()","slug":"map","link":"#map","children":[]},{"level":3,"title":"MaybeAsync.chain()","slug":"chain","link":"#chain","children":[]},{"level":3,"title":"MaybeAsync.fold()","slug":"fold","link":"#fold","children":[]}]},{"level":2,"title":"JustAsync()","slug":"just","link":"#just","children":[]},{"level":2,"title":"NothingAsync","slug":"Nothing","link":"#Nothing","children":[]}],"relativePath":"api/maybeAsync.md","lastUpdated":1682916197000}'),u={name:"api/maybeAsync.md"},g=s("",7),_={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},f={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.564ex"},xmlns:"http://www.w3.org/2000/svg",width:"33.707ex",height:"2.26ex",role:"img",focusable:"false",viewBox:"0 -749.5 14898.6 999","aria-hidden":"true"},y=s("",1),w=[y],L=e("h3",{id:"lift",tabindex:"-1"},[t("MaybeAsync.lift() "),e("a",{class:"header-anchor",href:"#lift","aria-hidden":"true"},"#")],-1),H={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},x={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"12.912ex",height:"2.084ex",role:"img",focusable:"false",viewBox:"0 -716 5707 921","aria-hidden":"true"},M=s("",1),D=[M],k=e("ul",null,[e("li",null,[e("strong",null,"Type")])],-1),A={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},Z={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"21.886ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 9673.6 899","aria-hidden":"true"},C=s("",1),b=[C],v=s("",3),F={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},V={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"12.912ex",height:"2.084ex",role:"img",focusable:"false",viewBox:"0 -716 5707 921","aria-hidden":"true"},S=s("",1),E=[S],P=e("ul",null,[e("li",null,[e("strong",null,"Type")])],-1),j={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},I={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"9.237ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 4082.6 705","aria-hidden":"true"},B=s("",1),N=[B],J=s("",3),R={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},G={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.708ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 2965 899","aria-hidden":"true"},z=s("",1),q=[z],W={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},$={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.443ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 3732 899","aria-hidden":"true"},O=s("",1),U=[O],K=e("ul",null,[e("li",null,[e("strong",null,"Type")])],-1),X={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},Y={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"22.78ex",height:"2.801ex",role:"img",focusable:"false",viewBox:"0 -1033 10068.6 1238","aria-hidden":"true"},Q1=s("",1),T1=[Q1],t1=s("",5),a1={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},e1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"43.608ex",height:"2.903ex",role:"img",focusable:"false",viewBox:"0 -1033 19274.7 1283","aria-hidden":"true"},l1=s("",1),s1=[l1],n1=s("",7),o1={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},d1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"38.83ex",height:"2.903ex",role:"img",focusable:"false",viewBox:"0 -1033 17162.7 1283","aria-hidden":"true"},r1=s("",1),i1=[r1],p1=s("",4),m1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},h1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"14.674ex",height:"2.084ex",role:"img",focusable:"false",viewBox:"0 -716 6486 921","aria-hidden":"true"},c1=s("",1),u1=[c1],g1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},_1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.023ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.197ex",height:"1.02ex",role:"img",focusable:"false",viewBox:"0 -441 529 451","aria-hidden":"true"},f1=e("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[e("g",{"data-mml-node":"math"},[e("g",{"data-mml-node":"mi"},[e("path",{"data-c":"1D44E",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",style:{"stroke-width":"3"}})])])],-1),y1=[f1],w1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},L1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.471ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 3744 899","aria-hidden":"true"},H1=s("",1),x1=[H1],M1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},D1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.443ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 3732 899","aria-hidden":"true"},k1=s("",1),A1=[k1],Z1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},C1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.708ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 2965 899","aria-hidden":"true"},b1=s("",1),v1=[b1],F1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},V1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.443ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 3732 899","aria-hidden":"true"},S1=s("",1),E1=[S1],P1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},j1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"14.674ex",height:"2.084ex",role:"img",focusable:"false",viewBox:"0 -716 6486 921","aria-hidden":"true"},I1=s("",1),B1=[I1],N1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},J1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.023ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.197ex",height:"1.02ex",role:"img",focusable:"false",viewBox:"0 -441 529 451","aria-hidden":"true"},R1=e("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[e("g",{"data-mml-node":"math"},[e("g",{"data-mml-node":"mi"},[e("path",{"data-c":"1D44E",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",style:{"stroke-width":"3"}})])])],-1),G1=[R1],z1=e("ul",null,[e("li",null,[e("strong",null,"Type")])],-1),q1={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},W1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"57.042ex",height:"2.903ex",role:"img",focusable:"false",viewBox:"0 -1033 25212.8 1283","aria-hidden":"true"},$1=s("",1),O1=[$1],U1=s("",3),K1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},X1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.708ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 2965 899","aria-hidden":"true"},Y1=s("",1),Q3=[Y1],T3=e("p",null,[t("实际同 "),e("a",{href:"#lift"},"MaybeAsync.lift"),t("。")],-1),t3=e("ul",null,[e("li",null,[e("strong",null,"Type")])],-1),a3={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},e3={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"19.39ex",height:"2.084ex",role:"img",focusable:"false",viewBox:"0 -716 8570.6 921","aria-hidden":"true"},l3=s("",1),s3=[l3],n3=s("",3),o3={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},d3={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.708ex",height:"2.034ex",role:"img",focusable:"false",viewBox:"0 -694 2965 899","aria-hidden":"true"},r3=s("",1),i3=[r3];function p3(m3,h3,c3,u3,g3,_3){const a=p("mi"),i=p("mtext"),l=p("mo"),d=p("math"),r=p("mjx-assistive-mml"),m=p("mrow"),h=p("mover");return n(),o("div",null,[g,e("mjx-container",_,[(n(),o("svg",f,w)),Q(r,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:T(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:T(()=>[Q(a,null,{default:T(()=>[t("D")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1}),Q(a,null,{default:T(()=>[t("t")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1}),Q(i,null,{default:T(()=>[t(" ")]),_:1}),Q(a,null,{default:T(()=>[t("M")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("b")]),_:1}),Q(a,null,{default:T(()=>[t("e")]),_:1}),Q(i,null,{default:T(()=>[t(" ")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1}),Q(l,null,{default:T(()=>[t("=")]),_:1}),Q(a,null,{default:T(()=>[t("J")]),_:1}),Q(a,null,{default:T(()=>[t("u")]),_:1}),Q(a,null,{default:T(()=>[t("s")]),_:1}),Q(a,null,{default:T(()=>[t("t")]),_:1}),Q(i,null,{default:T(()=>[t(" ")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1}),Q(i,null,{default:T(()=>[t(" ")]),_:1}),Q(l,{"data-mjx-texclass":"ORD",stretchy:"false"},{default:T(()=>[t("|")]),_:1}),Q(i,null,{default:T(()=>[t(" ")]),_:1}),Q(a,null,{default:T(()=>[t("N")]),_:1}),Q(a,null,{default:T(()=>[t("o")]),_:1}),Q(a,null,{default:T(()=>[t("t")]),_:1}),Q(a,null,{default:T(()=>[t("h")]),_:1}),Q(a,null,{default:T(()=>[t("i")]),_:1}),Q(a,null,{default:T(()=>[t("n")]),_:1}),Q(a,null,{default:T(()=>[t("g")]),_:1})]),_:1})]),_:1})]),L,e("p",null,[t("将一个 Promise 提升为 "),e("mjx-container",H,[(n(),o("svg",x,D)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:T(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:T(()=>[Q(a,null,{default:T(()=>[t("M")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("b")]),_:1}),Q(a,null,{default:T(()=>[t("e")]),_:1}),Q(a,null,{default:T(()=>[t("A")]),_:1}),Q(a,null,{default:T(()=>[t("s")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("n")]),_:1}),Q(a,null,{default:T(()=>[t("c")]),_:1})]),_:1})]),_:1})]),t(" 类型。")]),k,e("mjx-container",A,[(n(),o("svg",Z,b)),Q(r,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:T(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:T(()=>[Q(a,null,{default:T(()=>[t("P")]),_:1}),Q(a,null,{default:T(()=>[t("r")]),_:1}),Q(a,null,{default:T(()=>[t("o")]),_:1}),Q(a,null,{default:T(()=>[t("m")]),_:1}),Q(a,null,{default:T(()=>[t("i")]),_:1}),Q(a,null,{default:T(()=>[t("s")]),_:1}),Q(a,null,{default:T(()=>[t("e")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1}),Q(l,{stretchy:"false"},{default:T(()=>[t("→")]),_:1}),Q(a,null,{default:T(()=>[t("M")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("b")]),_:1}),Q(a,null,{default:T(()=>[t("e")]),_:1}),Q(i,null,{default:T(()=>[t(" ")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1})]),_:1})]),_:1})]),v,e("p",null,[t("判断一个值是否为 "),e("mjx-container",F,[(n(),o("svg",V,E)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:T(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:T(()=>[Q(a,null,{default:T(()=>[t("M")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("b")]),_:1}),Q(a,null,{default:T(()=>[t("e")]),_:1}),Q(a,null,{default:T(()=>[t("A")]),_:1}),Q(a,null,{default:T(()=>[t("s")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("n")]),_:1}),Q(a,null,{default:T(()=>[t("c")]),_:1})]),_:1})]),_:1})]),t(" 类型。")]),P,e("mjx-container",j,[(n(),o("svg",I,N)),Q(r,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:T(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:T(()=>[Q(l,null,{default:T(()=>[t("∗")]),_:1}),Q(l,{stretchy:"false"},{default:T(()=>[t("→")]),_:1}),Q(a,null,{default:T(()=>[t("B")]),_:1}),Q(a,null,{default:T(()=>[t("o")]),_:1}),Q(a,null,{default:T(()=>[t("o")]),_:1}),Q(a,null,{default:T(()=>[t("l")]),_:1})]),_:1})]),_:1})]),J,e("p",null,[t("判断该 "),e("mjx-container",R,[(n(),o("svg",G,q)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:T(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:T(()=>[Q(a,null,{default:T(()=>[t("M")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("b")]),_:1}),Q(a,null,{default:T(()=>[t("e")]),_:1})]),_:1})]),_:1})]),t(" 是否为 "),e("mjx-container",W,[(n(),o("svg",$,U)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:T(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:T(()=>[Q(a,null,{default:T(()=>[t("N")]),_:1}),Q(a,null,{default:T(()=>[t("o")]),_:1}),Q(a,null,{default:T(()=>[t("t")]),_:1}),Q(a,null,{default:T(()=>[t("h")]),_:1}),Q(a,null,{default:T(()=>[t("i")]),_:1}),Q(a,null,{default:T(()=>[t("n")]),_:1}),Q(a,null,{default:T(()=>[t("g")]),_:1})]),_:1})]),_:1})]),t("。")]),K,e("mjx-container",X,[(n(),o("svg",Y,T1)),Q(r,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:T(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:T(()=>[Q(h,null,{default:T(()=>[Q(m,null,{default:T(()=>[Q(a,null,{default:T(()=>[t("M")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("b")]),_:1}),Q(a,null,{default:T(()=>[t("e")]),_:1}),Q(a,null,{default:T(()=>[t("A")]),_:1}),Q(a,null,{default:T(()=>[t("s")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("n")]),_:1}),Q(a,null,{default:T(()=>[t("c")]),_:1}),Q(i,null,{default:T(()=>[t(" ")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1})]),_:1}),Q(l,{accent:"true"},{default:T(()=>[t("―")]),_:1})]),_:1}),Q(l,{stretchy:"false"},{default:T(()=>[t("→")]),_:1}),Q(a,null,{default:T(()=>[t("B")]),_:1}),Q(a,null,{default:T(()=>[t("o")]),_:1}),Q(a,null,{default:T(()=>[t("o")]),_:1}),Q(a,null,{default:T(()=>[t("l")]),_:1})]),_:1})]),_:1})]),t1,e("mjx-container",a1,[(n(),o("svg",e1,s1)),Q(r,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:T(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:T(()=>[Q(h,null,{default:T(()=>[Q(m,null,{default:T(()=>[Q(a,null,{default:T(()=>[t("M")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("b")]),_:1}),Q(a,null,{default:T(()=>[t("e")]),_:1}),Q(a,null,{default:T(()=>[t("A")]),_:1}),Q(a,null,{default:T(()=>[t("s")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("n")]),_:1}),Q(a,null,{default:T(()=>[t("c")]),_:1}),Q(i,null,{default:T(()=>[t(" ")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1})]),_:1}),Q(l,{accent:"true"},{default:T(()=>[t("―")]),_:1})]),_:1}),Q(l,{stretchy:"false"},{default:T(()=>[t("→")]),_:1}),Q(l,{stretchy:"false"},{default:T(()=>[t("(")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1}),Q(l,{stretchy:"false"},{default:T(()=>[t("→")]),_:1}),Q(a,null,{default:T(()=>[t("b")]),_:1}),Q(l,{stretchy:"false"},{default:T(()=>[t(")")]),_:1}),Q(l,{stretchy:"false"},{default:T(()=>[t("→")]),_:1}),Q(a,null,{default:T(()=>[t("M")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("b")]),_:1}),Q(a,null,{default:T(()=>[t("e")]),_:1}),Q(a,null,{default:T(()=>[t("A")]),_:1}),Q(a,null,{default:T(()=>[t("s")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("n")]),_:1}),Q(a,null,{default:T(()=>[t("c")]),_:1}),Q(i,null,{default:T(()=>[t(" ")]),_:1}),Q(a,null,{default:T(()=>[t("b")]),_:1})]),_:1})]),_:1})]),n1,e("mjx-container",o1,[(n(),o("svg",d1,i1)),Q(r,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:T(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:T(()=>[Q(h,null,{default:T(()=>[Q(m,null,{default:T(()=>[Q(a,null,{default:T(()=>[t("M")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("b")]),_:1}),Q(a,null,{default:T(()=>[t("e")]),_:1}),Q(a,null,{default:T(()=>[t("A")]),_:1}),Q(a,null,{default:T(()=>[t("s")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("n")]),_:1}),Q(a,null,{default:T(()=>[t("c")]),_:1}),Q(i,null,{default:T(()=>[t(" ")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1})]),_:1}),Q(l,{accent:"true"},{default:T(()=>[t("―")]),_:1})]),_:1}),Q(l,{stretchy:"false"},{default:T(()=>[t("→")]),_:1}),Q(l,{stretchy:"false"},{default:T(()=>[t("(")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1}),Q(l,{stretchy:"false"},{default:T(()=>[t("→")]),_:1}),Q(a,null,{default:T(()=>[t("b")]),_:1}),Q(l,{stretchy:"false"},{default:T(()=>[t(")")]),_:1}),Q(l,{stretchy:"false"},{default:T(()=>[t("→")]),_:1}),Q(a,null,{default:T(()=>[t("P")]),_:1}),Q(a,null,{default:T(()=>[t("r")]),_:1}),Q(a,null,{default:T(()=>[t("o")]),_:1}),Q(a,null,{default:T(()=>[t("m")]),_:1}),Q(a,null,{default:T(()=>[t("i")]),_:1}),Q(a,null,{default:T(()=>[t("s")]),_:1}),Q(a,null,{default:T(()=>[t("e")]),_:1}),Q(a,null,{default:T(()=>[t("b")]),_:1})]),_:1})]),_:1})]),p1,e("p",null,[t("将函数应用到 "),e("mjx-container",m1,[(n(),o("svg",h1,u1)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:T(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:T(()=>[Q(a,null,{default:T(()=>[t("M")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("b")]),_:1}),Q(a,null,{default:T(()=>[t("e")]),_:1}),Q(a,null,{default:T(()=>[t("A")]),_:1}),Q(a,null,{default:T(()=>[t("s")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("n")]),_:1}),Q(a,null,{default:T(()=>[t("c")]),_:1}),Q(i,null,{default:T(()=>[t(" ")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1})]),_:1})]),_:1})]),t(" 中的 "),e("mjx-container",g1,[(n(),o("svg",_1,y1)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:T(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:T(()=>[Q(a,null,{default:T(()=>[t("a")]),_:1})]),_:1})]),_:1})]),t("。")]),e("p",null,[t("传入两个单元函数参数，分别代表 "),e("mjx-container",w1,[(n(),o("svg",L1,x1)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:T(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:T(()=>[Q(a,null,{default:T(()=>[t("M")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("b")]),_:1}),Q(a,null,{default:T(()=>[t("e")]),_:1}),Q(i,null,{default:T(()=>[t(" ")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1})]),_:1})]),_:1})]),t(" 为 "),e("mjx-container",M1,[(n(),o("svg",D1,A1)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:T(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:T(()=>[Q(a,null,{default:T(()=>[t("N")]),_:1}),Q(a,null,{default:T(()=>[t("o")]),_:1}),Q(a,null,{default:T(()=>[t("t")]),_:1}),Q(a,null,{default:T(()=>[t("h")]),_:1}),Q(a,null,{default:T(()=>[t("i")]),_:1}),Q(a,null,{default:T(()=>[t("n")]),_:1}),Q(a,null,{default:T(()=>[t("g")]),_:1})]),_:1})]),_:1})]),t(" 与 "),e("mjx-container",Z1,[(n(),o("svg",C1,v1)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:T(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:T(()=>[Q(a,null,{default:T(()=>[t("M")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("b")]),_:1}),Q(a,null,{default:T(()=>[t("e")]),_:1})]),_:1})]),_:1})]),t(" 不为 "),e("mjx-container",F1,[(n(),o("svg",V1,E1)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:T(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:T(()=>[Q(a,null,{default:T(()=>[t("N")]),_:1}),Q(a,null,{default:T(()=>[t("o")]),_:1}),Q(a,null,{default:T(()=>[t("t")]),_:1}),Q(a,null,{default:T(()=>[t("h")]),_:1}),Q(a,null,{default:T(()=>[t("i")]),_:1}),Q(a,null,{default:T(()=>[t("n")]),_:1}),Q(a,null,{default:T(()=>[t("g")]),_:1})]),_:1})]),_:1})]),t(" 的处理情况。")]),e("p",null,[t("当匹配到 "),e("mjx-container",P1,[(n(),o("svg",j1,B1)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:T(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:T(()=>[Q(a,null,{default:T(()=>[t("M")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("b")]),_:1}),Q(a,null,{default:T(()=>[t("e")]),_:1}),Q(a,null,{default:T(()=>[t("A")]),_:1}),Q(a,null,{default:T(()=>[t("s")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("n")]),_:1}),Q(a,null,{default:T(()=>[t("c")]),_:1}),Q(i,null,{default:T(()=>[t(" ")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1})]),_:1})]),_:1})]),t(" 时，对应函数将会应用到 "),e("mjx-container",N1,[(n(),o("svg",J1,G1)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:T(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:T(()=>[Q(a,null,{default:T(()=>[t("a")]),_:1})]),_:1})]),_:1})]),t(" 上，其函数值将作为返回值。")]),z1,e("mjx-container",q1,[(n(),o("svg",W1,O1)),Q(r,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:T(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:T(()=>[Q(h,null,{default:T(()=>[Q(m,null,{default:T(()=>[Q(a,null,{default:T(()=>[t("M")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("b")]),_:1}),Q(a,null,{default:T(()=>[t("e")]),_:1}),Q(a,null,{default:T(()=>[t("A")]),_:1}),Q(a,null,{default:T(()=>[t("s")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("n")]),_:1}),Q(a,null,{default:T(()=>[t("c")]),_:1}),Q(i,null,{default:T(()=>[t(" ")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1})]),_:1}),Q(l,{accent:"true"},{default:T(()=>[t("―")]),_:1})]),_:1}),Q(l,{stretchy:"false"},{default:T(()=>[t("→")]),_:1}),Q(l,{stretchy:"false"},{default:T(()=>[t("(")]),_:1}),Q(a,null,{default:T(()=>[t("N")]),_:1}),Q(a,null,{default:T(()=>[t("o")]),_:1}),Q(a,null,{default:T(()=>[t("t")]),_:1}),Q(a,null,{default:T(()=>[t("h")]),_:1}),Q(a,null,{default:T(()=>[t("i")]),_:1}),Q(a,null,{default:T(()=>[t("n")]),_:1}),Q(a,null,{default:T(()=>[t("g")]),_:1}),Q(l,{stretchy:"false"},{default:T(()=>[t("→")]),_:1}),Q(a,null,{default:T(()=>[t("b")]),_:1}),Q(l,{stretchy:"false"},{default:T(()=>[t(")")]),_:1}),Q(l,{stretchy:"false"},{default:T(()=>[t("→")]),_:1}),Q(l,{stretchy:"false"},{default:T(()=>[t("(")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1}),Q(l,{stretchy:"false"},{default:T(()=>[t("→")]),_:1}),Q(a,null,{default:T(()=>[t("b")]),_:1}),Q(l,{stretchy:"false"},{default:T(()=>[t(")")]),_:1}),Q(l,{stretchy:"false"},{default:T(()=>[t("→")]),_:1}),Q(a,null,{default:T(()=>[t("P")]),_:1}),Q(a,null,{default:T(()=>[t("r")]),_:1}),Q(a,null,{default:T(()=>[t("o")]),_:1}),Q(a,null,{default:T(()=>[t("m")]),_:1}),Q(a,null,{default:T(()=>[t("i")]),_:1}),Q(a,null,{default:T(()=>[t("s")]),_:1}),Q(a,null,{default:T(()=>[t("e")]),_:1}),Q(a,null,{default:T(()=>[t("b")]),_:1})]),_:1})]),_:1})]),U1,e("p",null,[e("mjx-container",K1,[(n(),o("svg",X1,Q3)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:T(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:T(()=>[Q(a,null,{default:T(()=>[t("M")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("b")]),_:1}),Q(a,null,{default:T(()=>[t("e")]),_:1})]),_:1})]),_:1})]),t(" 类型的构造函数。")]),T3,t3,e("mjx-container",a3,[(n(),o("svg",e3,s3)),Q(r,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:T(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:T(()=>[Q(a,null,{default:T(()=>[t("a")]),_:1}),Q(l,{stretchy:"false"},{default:T(()=>[t("→")]),_:1}),Q(a,null,{default:T(()=>[t("M")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("b")]),_:1}),Q(a,null,{default:T(()=>[t("e")]),_:1}),Q(a,null,{default:T(()=>[t("A")]),_:1}),Q(a,null,{default:T(()=>[t("s")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("n")]),_:1}),Q(a,null,{default:T(()=>[t("c")]),_:1}),Q(i,null,{default:T(()=>[t(" ")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1})]),_:1})]),_:1})]),n3,e("p",null,[e("mjx-container",o3,[(n(),o("svg",d3,i3)),Q(r,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:T(()=>[Q(d,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:T(()=>[Q(a,null,{default:T(()=>[t("M")]),_:1}),Q(a,null,{default:T(()=>[t("a")]),_:1}),Q(a,null,{default:T(()=>[t("y")]),_:1}),Q(a,null,{default:T(()=>[t("b")]),_:1}),Q(a,null,{default:T(()=>[t("e")]),_:1})]),_:1})]),_:1})]),t(" 类型的构造函数。")])])}const w3=c(u,[["render",p3]]);export{y3 as __pageData,w3 as default};
