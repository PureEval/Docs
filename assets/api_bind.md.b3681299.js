import{_ as i,D as l,o,c as n,z as Q,G as t,B as a,a as s,O as d}from"./chunks/framework.16663854.js";const E=JSON.parse('{"title":"Bind","description":"","frontmatter":{},"headers":[],"relativePath":"api/bind.md","filePath":"api/bind.md","lastUpdated":1687533828000}'),h={name:"api/bind.md"},_=Q("h1",{id:"bind-api",tabindex:"-1"},[s("Bind "),Q("a",{class:"header-anchor",href:"#bind-api","aria-label":'Permalink to "Bind {#bind-api}"'},"​")],-1),f=Q("h2",{id:"bind",tabindex:"-1"},[s("bind() "),Q("a",{class:"header-anchor",href:"#bind","aria-label":'Permalink to "bind() {#bind}"'},"​")],-1),y=Q("p",null,"将函数的某些参数提前绑定。",-1),g=Q("ul",null,[Q("li",null,[Q("strong",null,"Type")])],-1),u={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},D={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"50.338ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 22249.4 1000","aria-hidden":"true"},C=d('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mo"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(389,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1195.8,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(2473.6,0)"><path data-c="1D44F" d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(3180.3,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(4458.1,0)"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(5168.9,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(6168.9,0)"><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(6613.6,0)"><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(7058.2,0)"><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(7502.9,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(8780.7,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(9352.7,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(10019.4,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(11297.2,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(12104,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(13381.8,0)"><path data-c="1D44F" d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(14088.6,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(15366.3,0)"><g data-mml-node="mover"><g data-mml-node="mi"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(272.1,3) translate(-250 0)"><path data-c="AF" d="M69 544V590H430V544H69Z" style="stroke-width:3;"></path></g></g></g><g data-mml-node="mo" transform="translate(16077.1,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(17077.1,0)"><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(17521.8,0)"><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(17966.4,0)"><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(18411.1,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(19688.9,0)"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(20399.7,0)"><path data-c="2192" d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(21677.4,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g></g></g>',1),H=[C],w=d(`<ul><li><strong>Details</strong></li></ul><p>第一个参数传入一个函数，接下来传入的参数不超过该函数参数个数个参数。</p><p>对于每个参数，若传入的是一个确定的值，则将直接绑定在原函数上；若传入的是占位符 <a href="/api/placeholder.html#_">_</a>，则表明该位置仍然需要传入参数。</p><p>返回值即为对原函数按上述参数绑定值后的新函数。</p><ul><li><strong>Example</strong></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> foo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">c</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> c</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">bind</span><span style="color:#A6ACCD;">(foo</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> _</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)(</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//8</span></span></code></pre></div>`,6);function A(k,x,M,b,F,Z){const e=l("mo"),T=l("mi"),r=l("mover"),p=l("mrow"),m=l("math"),c=l("mjx-assistive-mml");return o(),n("div",null,[_,f,y,g,Q("mjx-container",u,[(o(),n("svg",D,H)),t(c,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:a(()=>[t(m,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:a(()=>[t(e,{stretchy:"false"},{default:a(()=>[s("(")]),_:1}),t(T,null,{default:a(()=>[s("a")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(T,null,{default:a(()=>[s("b")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(T,null,{default:a(()=>[s("c")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(e,null,{default:a(()=>[s(".")]),_:1}),t(e,null,{default:a(()=>[s(".")]),_:1}),t(e,null,{default:a(()=>[s(".")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(T,null,{default:a(()=>[s("x")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s(")")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(T,null,{default:a(()=>[s("a")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(T,null,{default:a(()=>[s("b")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(p,{"data-mjx-texclass":"ORD"},{default:a(()=>[t(r,null,{default:a(()=>[t(T,null,{default:a(()=>[s("c")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("¯")]),_:1})]),_:1})]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(e,null,{default:a(()=>[s(".")]),_:1}),t(e,null,{default:a(()=>[s(".")]),_:1}),t(e,null,{default:a(()=>[s(".")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(T,null,{default:a(()=>[s("c")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(T,null,{default:a(()=>[s("x")]),_:1})]),_:1})]),_:1})]),w])}const V=i(h,[["render",A]]);export{E as __pageData,V as default};
