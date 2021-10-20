import{r as n,o as a,c as s,a as t,w as p,b as e,u as o,x as c,S as l,D as u,L as i,y as k,q as r,e as g,d}from"./app.a7677cba.js";const h=g('<h1 id="icon-图标" tabindex="-1">Icon 图标 <a class="header-anchor" href="#icon-图标" aria-hidden="true">#</a></h1><p>提供了一套常用的图标集合。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Element Plus 团队正在将原有组件内的 <strong>Font Icon</strong> 向 <strong>SVG Icon</strong> 迁移，请多多留意 <a href="/#/zh-CN/component/changelog">ChangeLog</a>, 及时获取到更新信息，<strong>Font Icon</strong> 将会在第一个正式发布被废弃，请尽快迁移</p></div><h2 id="使用svg图标" tabindex="-1">使用SVG图标 <a class="header-anchor" href="#使用svg图标" aria-hidden="true">#</a></h2><ul><li><p>如果你想像用例一样<strong>直接使用</strong>，你需要<a href="https://v3.vuejs.org/guide/component-registration.html#global-registration" target="_blank" rel="noopener noreferrer">全局注册组件</a>，才能够直接在项目里使用。</p></li><li><p>若想查看所有的组件，请访问 <a href="https://unpkg.com/browse/@element-plus/icons@latest/lib/" target="_blank" rel="noopener noreferrer">@element-plus/icons</a> 和源代码 <a href="https://github.com/element-plus/element-plus-icons" target="_blank" rel="noopener noreferrer">Github/ElementPlus/icons</a>，或者 <a href="/#/zh-CN/component/icon#svg-tu-biao-ji-he">SVG 图标集合</a></p></li></ul><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h2><p>当前的图标只适用于 <a href="https://v3.vuejs.org" target="_blank" rel="noopener noreferrer">Vue3</a>。</p><h2 id="使用包管理器" tabindex="-1">使用包管理器 <a class="header-anchor" href="#使用包管理器" aria-hidden="true">#</a></h2><div class="language-shell"><pre><code>$ <span class="token function">yarn</span> <span class="token function">add</span> @element-plus/icons\n<span class="token comment"># or</span>\n$ <span class="token function">npm</span> <span class="token function">install</span> @element-plus/icons\n</code></pre></div><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>因为HTML标准已经定义了一个标签，名为 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu" target="_blank" rel="noopener noreferrer">menu</a>, 因此您需要使用别名来渲染图标， 如果您注册 <code>menu</code> 将无法正常工作。</p></div><div class="language-vue"><pre><code><span class="token comment">&lt;!-- Use el-icon to provide attributes to SVG icon --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>size<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>edit</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>edit</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!-- Or use it independently without derive attributes from parent --&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>edit</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>edit</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',12),m=g('<h2 id="结合-el-icon-使用" tabindex="-1">结合 <code>el-icon</code> 使用 <a class="header-anchor" href="#结合-el-icon-使用" aria-hidden="true">#</a></h2><p><code>el-icon</code> 提供了原始的 SVG 图标的额外属性。欲了解更多详情，请阅读到结尾。</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\n    with extra class <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>is-loading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>, your icon is able to rotate 360 deg in 2\n    seconds, you can also override this\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>edit</span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#409EFC<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no-inherit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>share</span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>delete</span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>is-loading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>loading</span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>search</span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span> Search <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',3),v=e("p",null,[d(" 在额外类 "),e("b",null,"is-loading"),d("的情况下，您的图标能够在 2 秒内旋转 360 度。您也可以通过 CSS 覆盖这个设置。 ")],-1),b={style:{display:"flex","align-items":"center","justify-content":"space-between",width:"100%"}},_=e("span",{style:{"vertical-align":"middle"}}," Search ",-1),f=g('<h2 id="直接使用-svg-icon" tabindex="-1">直接使用 SVG icon <a class="header-anchor" href="#直接使用-svg-icon" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!-- Since svg icons do not carry any attributes by default --&gt;</span>\n    <span class="token comment">&lt;!-- You need to provide attributes directly --&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>edit</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>share</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>delete</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>search</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',2),y={style:{"font-size":"20px"}},q={id:"svg图标集合-适用于1-0-2-beta-66及以后的版本",tabindex:"-1"},S=d("SVG图标集合 "),T=d("适用于1.0.2-beta.66及以后的版本"),x=d(),I=e("a",{class:"header-anchor",href:"#svg图标集合-适用于1-0-2-beta-66及以后的版本","aria-hidden":"true"},"#",-1),V=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,"**你可以在任意版本里使用 SVG icon **，只要你安装了 @element-plus/icons"),e("p",null,[e("strong",null,"您可以点击图标复制它的代码。")])],-1),A=g('<h3 id="icon-attributes" tabindex="-1">Icon Attributes <a class="header-anchor" href="#icon-attributes" aria-hidden="true">#</a></h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Acceptable Value</th><th>Default</th></tr></thead><tbody><tr><td>color</td><td>svg 的 fill 颜色</td><td>Pick&lt;CSSProperties, &#39;color&#39;&gt;</td><td>-</td><td>inherit from color</td></tr><tr><td>size</td><td>svg 图标的大小, size x size</td><td>number</td><td>-</td><td>inherit from font size</td></tr></tbody></table><h2 id="icon-slots" tabindex="-1">Icon Slots <a class="header-anchor" href="#icon-slots" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>customize default content</td></tr></tbody></table>',4),w='{"title":"Icon 图标","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用SVG图标","slug":"使用svg图标"},{"level":2,"title":"安装","slug":"安装"},{"level":2,"title":"使用包管理器","slug":"使用包管理器"},{"level":2,"title":"基础用法","slug":"基础用法"},{"level":2,"title":"结合 el-icon 使用","slug":"结合-el-icon-使用"},{"level":2,"title":"直接使用 SVG icon","slug":"直接使用-svg-icon"},{"level":3,"title":"SVG图标集合","slug":"svg图标集合-适用于1-0-2-beta-66及以后的版本"},{"level":3,"title":"Icon Attributes","slug":"icon-attributes"},{"level":2,"title":"Icon Slots","slug":"icon-slots"}],"relativePath":"zh-CN/component/icon.md","lastUpdated":1634699883500}',z={};const C=Object.assign(z,{setup:function(g){return(g,d)=>{const w=n("ElIcon"),z=n("ElRow"),C=n("ElButton"),G=n("ElTag"),P=n("IconList");return a(),s("div",null,[h,t(z,null,{default:p((()=>[e("div",null,[t(w,{size:30},{default:p((()=>[t(o(c))])),_:1}),t(o(c))])])),_:1}),m,t(z,null,{default:p((()=>[v,e("div",b,[t(w,{size:20},{default:p((()=>[t(o(c))])),_:1}),t(w,{color:"#409EFC",class:"no-inherit"},{default:p((()=>[t(o(l))])),_:1}),t(w,null,{default:p((()=>[t(o(u))])),_:1}),t(w,{class:"is-loading"},{default:p((()=>[t(o(i))])),_:1}),t(C,{type:"primary"},{default:p((()=>[t(w,{style:{"vertical-align":"middle",color:"#fff"}},{default:p((()=>[t(o(k))])),_:1}),_])),_:1})])])),_:1}),f,t(z,null,{default:p((()=>[e("div",y,[r(" Since svg icons do not carry any attributes by default "),r(" You need to provide attributes directly "),t(o(c),{style:{width:"1em",height:"1em","margin-right":"8px"}}),t(o(l),{style:{width:"1em",height:"1em","margin-right":"8px"}}),t(o(u),{style:{width:"1em",height:"1em","margin-right":"8px"}}),t(o(k),{style:{width:"1em",height:"1em","margin-right":"8px"}})])])),_:1}),e("h3",q,[S,t(G,null,{default:p((()=>[T])),_:1}),x,I]),V,t(P),r(' <ul class="icon-list">\n  <li\n    v-for="component in $svgIcons"\n    :key="component"\n    @click="$copySvgIcon(component)">\n    <span class="demo-svg-icon">\n      <el-icon color="#000">\n        <component :is="component" />\n      </el-icon>\n      <span class="icon-name">{{component}}</span>\n    </span>\n  </li>\n</ul> '),A])}}});export{w as __pageData,C as default};
