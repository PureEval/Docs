import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.2005b65d.js";const u=JSON.parse('{"title":"Match","description":"","frontmatter":{},"headers":[],"relativePath":"api/match.md","filePath":"api/match.md","lastUpdated":1695572245000}'),p={name:"api/match.md"},e=l(`<h1 id="match-api" tabindex="-1">Match <a class="header-anchor" href="#match-api" aria-label="Permalink to &quot;Match {#match-api}&quot;">​</a></h1><h2 id="match" tabindex="-1">match() <a class="header-anchor" href="#match" aria-label="Permalink to &quot;match() {#match}&quot;">​</a></h2><p>Performs pattern matching.</p><ul><li><strong>Details</strong></li></ul><p>Takes several pairs of arrays corresponding to each rule; each array contains two elements, referred to here as <code>checker</code> and <code>executer</code>.</p><p><code>match</code> will return a function that accepts a certain number of arguments. It will then sequentially evaluate each <code>checker</code> and, upon the first successful match, execute the corresponding <code>executer</code> and return its result.</p><p>Detailed matching rules for each <code>checker</code> are as follows:</p><table><thead><tr><th style="text-align:center;"><code>checker</code> Type</th><th style="text-align:center;">Number of Matching Parameters<sup>[2]</sup></th><th style="text-align:center;">Matching Rule</th></tr></thead><tbody><tr><td style="text-align:center;">Basic Literal Values (number/string/object/array<sup>[1]</sup>/<a href="/api/maybe.html#maybe">maybe</a>)</td><td style="text-align:center;">1</td><td style="text-align:center;">Compares the argument with the literal value for equality<sup>[3]</sup> to determine match success</td></tr><tr><td style="text-align:center;">Function (synchronous)</td><td style="text-align:center;">Any</td><td style="text-align:center;">Passes all matching values to the function and determines match success based on the function&#39;s <code>true/false</code> return value</td></tr><tr><td style="text-align:center;">Array</td><td style="text-align:center;">Length of Array</td><td style="text-align:center;">The array can contain the first two types of matchers. Each value is matched individually. All must succeed for the array to match.</td></tr><tr><td style="text-align:center;"><a href="/api/placeholder.html#otherwise">otherwise</a></td><td style="text-align:center;">Any</td><td style="text-align:center;">Always succeeds when used, suitable for handling &quot;other&quot; cases</td></tr></tbody></table><p>Execution rules for each <code>executer</code> are as follows:</p><table><thead><tr><th style="text-align:center;"><code>executer</code> Type</th><th style="text-align:center;">Execution Rule</th><th style="text-align:center;">Note</th></tr></thead><tbody><tr><td style="text-align:center;">Literal</td><td style="text-align:center;">Immediately returns this literal value when match succeeds</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">Function</td><td style="text-align:center;">Passes all matching values to the function and returns the function&#39;s result</td><td style="text-align:center;">Although the function is not explicitly marked as synchronous like <code>checker</code>, if it returns a Promise, the Promise will be returned as-is</td></tr></tbody></table><p>Notes:</p><p>[1]: Because <code>match</code>&#39;s design relies on arrays for classification, when you want to match an array literal, you should nest it inside another array (see examples below).</p><p>[2]: This column is for identification purposes only; the actual <code>length</code> property value of the function returned by <code>match</code> will be 0.</p><p>[3]: <code>match</code> uses the same equality rules for numbers/strings as <a href="/api/logic.html#equalstrict">equalStrict</a>, for objects/arrays as <a href="/api/logic.html#deepequal">deepEqual</a>, and for <code>maybe</code> as comparing the folded values using <a href="/api/logic.html#equalstrict">equalStrict</a>.</p><ul><li><strong>Example</strong></li></ul><h5 id="example-1" tabindex="-1">Example 1 <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example 1&quot;">​</a></h5><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">sort</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">match</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">	[[[]], []],</span></span>
<span class="line"><span style="color:#E1E4E8;">	[</span></span>
<span class="line"><span style="color:#E1E4E8;">		_,</span></span>
<span class="line"><span style="color:#E1E4E8;">		([</span><span style="color:#FFAB70;">x</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">xs</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">...</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">lte</span><span style="color:#E1E4E8;">(x), xs)),</span></span>
<span class="line"><span style="color:#E1E4E8;">			x,</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">...</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">gt</span><span style="color:#E1E4E8;">(x), xs))</span></span>
<span class="line"><span style="color:#E1E4E8;">		]</span></span>
<span class="line"><span style="color:#E1E4E8;">	]</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fib</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">match</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    [_, (</span><span style="color:#FFAB70;">v</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fib</span><span style="color:#E1E4E8;">(v </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fib</span><span style="color:#E1E4E8;">(v </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)]</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">sort</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">match</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">	[[[]], []],</span></span>
<span class="line"><span style="color:#24292E;">	[</span></span>
<span class="line"><span style="color:#24292E;">		_,</span></span>
<span class="line"><span style="color:#24292E;">		([</span><span style="color:#E36209;">x</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">...</span><span style="color:#E36209;">xs</span><span style="color:#24292E;">]) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">...</span><span style="color:#6F42C1;">sort</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">filter</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">lte</span><span style="color:#24292E;">(x), xs)),</span></span>
<span class="line"><span style="color:#24292E;">			x,</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">...</span><span style="color:#6F42C1;">sort</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">filter</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">gt</span><span style="color:#24292E;">(x), xs))</span></span>
<span class="line"><span style="color:#24292E;">		]</span></span>
<span class="line"><span style="color:#24292E;">	]</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fib</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">match</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    [_, (</span><span style="color:#E36209;">v</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fib</span><span style="color:#24292E;">(v </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fib</span><span style="color:#24292E;">(v </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)]</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre></div><h5 id="example-2" tabindex="-1">Example 2 <a class="header-anchor" href="#example-2" aria-label="Permalink to &quot;Example 2&quot;">​</a></h5><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Data Nat = Succ Nat | Zero</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Nat</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Data</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Succ m&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Zero&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">Object.</span><span style="color:#B392F0;">assign</span><span style="color:#E1E4E8;">(global, Nat.binder);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// instance Show Nat</span></span>
<span class="line"><span style="color:#E1E4E8;">Nat.</span><span style="color:#B392F0;">bindShow</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">match</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    [Zero.is, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    [Succ.is, ({ </span><span style="color:#FFAB70;">m</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> m.</span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// add :: Nat -&gt; Nat -&gt; Nat</span></span>
<span class="line"><span style="color:#6A737D;">// add n Zero = n</span></span>
<span class="line"><span style="color:#6A737D;">// add n (Succ m) = Succ (add n m)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">match</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">	[[_, </span><span style="color:#B392F0;">eqData</span><span style="color:#E1E4E8;">(Zero)], (</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> n],</span></span>
<span class="line"><span style="color:#E1E4E8;">	[[_, </span><span style="color:#B392F0;">eqData</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">Succ</span><span style="color:#E1E4E8;">(_))], (</span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">, { </span><span style="color:#FFAB70;">m</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Succ</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(n, m))]</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">Succ</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">Succ</span><span style="color:#E1E4E8;">(Zero)), </span><span style="color:#B392F0;">Succ</span><span style="color:#E1E4E8;">(Zero)).</span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">//3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Data Nat = Succ Nat | Zero</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Nat</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Data</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Succ m&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Zero&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">Object.</span><span style="color:#6F42C1;">assign</span><span style="color:#24292E;">(global, Nat.binder);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// instance Show Nat</span></span>
<span class="line"><span style="color:#24292E;">Nat.</span><span style="color:#6F42C1;">bindShow</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">match</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    [Zero.is, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    [Succ.is, ({ </span><span style="color:#E36209;">m</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> m.</span><span style="color:#6F42C1;">show</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// add :: Nat -&gt; Nat -&gt; Nat</span></span>
<span class="line"><span style="color:#6A737D;">// add n Zero = n</span></span>
<span class="line"><span style="color:#6A737D;">// add n (Succ m) = Succ (add n m)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">add</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">match</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">	[[_, </span><span style="color:#6F42C1;">eqData</span><span style="color:#24292E;">(Zero)], (</span><span style="color:#E36209;">n</span><span style="color:#24292E;">, </span><span style="color:#E36209;">_</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> n],</span></span>
<span class="line"><span style="color:#24292E;">	[[_, </span><span style="color:#6F42C1;">eqData</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">Succ</span><span style="color:#24292E;">(_))], (</span><span style="color:#E36209;">n</span><span style="color:#24292E;">, { </span><span style="color:#E36209;">m</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Succ</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(n, m))]</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">Succ</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">Succ</span><span style="color:#24292E;">(Zero)), </span><span style="color:#6F42C1;">Succ</span><span style="color:#24292E;">(Zero)).</span><span style="color:#6F42C1;">show</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">//3</span></span></code></pre></div>`,19),o=[e];function t(c,r,y,E,i,d){return a(),n("div",null,o)}const F=s(p,[["render",t]]);export{u as __pageData,F as default};