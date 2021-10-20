import{_ as a,c as n,o as s,e as t,b as e,d as p}from"./app.a7677cba.js";const o='{"title":"Installation","description":"","frontmatter":{"title":"Installation"},"headers":[{"level":2,"title":"Compatibility","slug":"compatibility"},{"level":3,"title":"Version","slug":"version"},{"level":2,"title":"Using Package Manager","slug":"using-package-manager"},{"level":2,"title":"Import in Browser","slug":"import-in-browser"},{"level":3,"title":"unpkg","slug":"unpkg"},{"level":3,"title":"jsDelivr","slug":"jsdelivr"},{"level":2,"title":"Hello World","slug":"hello-world"}],"relativePath":"es-ES/guide/installation.md","lastUpdated":1634699883324}',r={},l=[t('<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h1><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-hidden="true">#</a></h2><p>Element Plus can run on browsers that supports <a href="https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally" target="_blank" rel="noopener noreferrer">ES2018</a> and <a href="https://caniuse.com/resizeobserver" target="_blank" rel="noopener noreferrer">ResizeObserver</a>. If you really need to support outdated browsers, please add <a href="https://babeljs.io/" target="_blank" rel="noopener noreferrer">Babel</a> and Polyfill yourself.</p><p>Since Vue 3 no longer supports IE11, Element Plus does not support IE either.</p><table><thead><tr><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png" alt="IE"></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png" alt="Firefox"></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png" alt="Chrome"></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png" alt="Safari"></th></tr></thead><tbody><tr><td>Edge ≥ 79</td><td>Firefox ≥ 78</td><td>Chrome ≥ 64</td><td>Safari ≥ 12</td></tr></tbody></table><h3 id="version" tabindex="-1">Version <a class="header-anchor" href="#version" aria-hidden="true">#</a></h3><p>Element Plus is currently in a rapid development iteration.</p><p><a href="https://www.npmjs.org/package/element-plus" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/element-plus.svg?style=flat-square" alt="ElementPlus version badge"></a></p><h2 id="using-package-manager" tabindex="-1">Using Package Manager <a class="header-anchor" href="#using-package-manager" aria-hidden="true">#</a></h2><p><strong>We recommend using the package manager (NPM, <a href="https://classic.yarnpkg.com/lang/en/" target="_blank" rel="noopener noreferrer">Yarn</a>, <a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">pnpm</a>) to install Element Plus</strong>, so that you can utilize bundlers like <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a> and <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">webpack</a>.</p><div class="language-shell"><pre><code><span class="token comment"># Choose a package manager you like.</span>\n\n<span class="token comment"># NPM</span>\n$ <span class="token function">npm</span> <span class="token function">install</span> element-plus --save\n\n<span class="token comment"># Yarn</span>\n$ <span class="token function">yarn</span> <span class="token function">add</span> element-plus\n\n<span class="token comment"># pnpm</span>\n$ <span class="token function">pnpm</span> <span class="token function">install</span> element-plus\n</code></pre></div><p>If your network environment is not good, it is recommended to use a mirror registry <a href="https://github.com/cnpm/cnpm" target="_blank" rel="noopener noreferrer">cnpm</a> or <a href="https://registry.npm.taobao.org" target="_blank" rel="noopener noreferrer">Alibaba</a>.</p><h2 id="import-in-browser" tabindex="-1">Import in Browser <a class="header-anchor" href="#import-in-browser" aria-hidden="true">#</a></h2><p>Import Element Plus through browser HTML tags directly, and use global variable <code>ElementPlus</code>.</p><p>According to different CDN providers, there are different introduction methods. Here we use <a href="https://unpkg.com" target="_blank" rel="noopener noreferrer">unpkg</a> and <a href="https://jsdelivr.com" target="_blank" rel="noopener noreferrer">jsDelivr</a> as example. You can also use other CDN providers.</p><h3 id="unpkg" tabindex="-1">unpkg <a class="header-anchor" href="#unpkg" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- Import style --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/element-plus/dist/index.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token comment">&lt;!-- Import Vue 3 --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/vue@next<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- Import component library --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/element-plus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="jsdelivr" tabindex="-1">jsDelivr <a class="header-anchor" href="#jsdelivr" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- Import style --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n    <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/element-plus/dist/index.css<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n  <span class="token comment">&lt;!-- Import Vue 3 --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/vue@next<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- Import component library --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/element-plus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>We recommend using CDN to import Element Plus users to lock the version on the link address, so as not to be affected by incompatible updates when Element Plus is upgraded in the future. Please check <a href="https://unpkg.com" target="_blank" rel="noopener noreferrer">unpkg.com</a> for the method to lock the version.</p></div><h2 id="hello-world" tabindex="-1">Hello World <a class="header-anchor" href="#hello-world" aria-hidden="true">#</a></h2><p>With CDN, we can easily use Element Plus to write a Hello world page. <a href="https://codepen.io/iamkun/pen/YzWMaVr" target="_blank" rel="noopener noreferrer">Online Demo</a></p>',22),e("iframe",{height:"469",style:{width:"100%"},scrolling:"no",title:"YzWMaVr",src:"https://codepen.io/iamkun/embed/YzWMaVr?height=469&theme-id=light&default -tab=html,result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true",mark:"crwd-mark"},"\n  See the Pen <a href='https://codepen.io/iamkun/pen/YzWMaVr'>YzWMaVr</a> by iamkun\n  (<a href='https://codepen.io/iamkun'>@iamkun</a>) on <a href='https://codepen.io'>CodePen</a>.\n",-1),e("p",null,[p("If you are installing via package manager and want to use it with a packaging tool, please read the next section: "),e("a",{href:"/en-US/guide/quickstart.html"},"Quick Start"),p(".")],-1)];var c=a(r,[["render",function(a,t,e,p,o,r){return s(),n("div",null,l)}]]);export{o as __pageData,c as default};
