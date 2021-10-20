import{_ as a,a as t,b as s}from"./target.1abe4aa4.js";import{r as n,o as e,c as p,a as E,w as o,u as C,b as l,d as c,e as u}from"./app.a7677cba.js";const i=l("h1",{id:"affix-固钉",tabindex:"-1"},[c("Affix 固钉 "),l("a",{class:"header-anchor",href:"#affix-固钉","aria-hidden":"true"},"#")],-1),r=l("p",null,"将页面元素固定在特定可视区域。",-1),d=l("h2",{id:"基础用法",tabindex:"-1"},[c("基础用法 "),l("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),F=l("p",null,"固钉默认固定在页面顶部。",-1),D=l("p",null,"affix/basic",-1),f=l("h2",{id:"指定容器",tabindex:"-1"},[c("指定容器 "),l("a",{class:"header-anchor",href:"#指定容器","aria-hidden":"true"},"#")],-1),k=l("p",null,[c("通过设置 "),l("code",null,"target"),c(" 属性，让固钉始终保持在容器内，超过范围则隐藏。 如果超出范围，它将被隐藏。")],-1),A=l("p",null,"affix/target",-1),h=l("h2",{id:"固定位置",tabindex:"-1"},[c("固定位置 "),l("a",{class:"header-anchor",href:"#固定位置","aria-hidden":"true"},"#")],-1),m=l("p",null,[c("Affix 组件提供了两个固定位置："),l("code",null,"top"),c(" 和 "),l("code",null,"bottom"),c("。")],-1),g=l("p",null,"affix/fixed",-1),b=u('<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-hidden="true">#</a></h2><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>offset</td><td>偏移距离</td><td>number</td><td>—</td><td>0</td></tr><tr><td>position</td><td>固钉位置</td><td>string</td><td>top / bottom</td><td>top</td></tr><tr><td>target</td><td>指定容器（CSS 选择器）</td><td>string</td><td>—</td><td>—</td></tr><tr><td>z-index</td><td>固钉层级</td><td>number</td><td>—</td><td>100</td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-hidden="true">#</a></h2><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>固钉状态改变时触发的事件</td><td>(value: boolean)</td></tr><tr><td>scroll</td><td>滚动时触发的事件</td><td>scroll top and fixed state</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>update</td><td>手动更新固钉状态</td><td>—</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>customize default content</td></tr></tbody></table>',8),x='{"title":"Affix 固钉","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法"},{"level":2,"title":"指定容器","slug":"指定容器"},{"level":2,"title":"固定位置","slug":"固定位置"},{"level":2,"title":"属性","slug":"属性"},{"level":2,"title":"事件","slug":"事件"},{"level":2,"title":"Methods","slug":"methods"},{"level":2,"title":"Slots","slug":"slots"}],"relativePath":"zh-CN/component/affix.md","lastUpdated":1634699883484}',B={};const v=Object.assign(B,{setup:function(l){const c={"../../examples/affix/basic.vue":a,"../../examples/affix/fixed.vue":t,"../../examples/affix/target.vue":s};return(a,t)=>{const s=n("Demo");return e(),p("div",null,[i,r,d,F,E(s,{demos:C(c),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-affix%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aoffset%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E120%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eprimary%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EOffset%20top%20120px%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-affix%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"affix/basic",html:"%0A%20%20%3Cel-affix%20%3Aoffset%3D%22120%22%3E%0A%20%20%20%20%3Cel-button%20type%3D%22primary%22%3EOffset%20top%20120px%3C%2Fel-button%3E%0A%20%20%3C%2Fel-affix%3E%0A",js:"",css:"","css-pre-processor":"none","js-pre-processor":"none","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-affix%20%3Aoffset%3D%22120%22%3E%0A%20%20%20%20%3Cel-button%20type%3D%22primary%22%3EOffset%20top%20120px%3C%2Fel-button%3E%0A%20%20%3C%2Fel-affix%3E%0A%3C%2Ftemplate%3E%0A",description:"%3Cp%3E%E9%80%9A%E8%BF%87%E8%AE%BE%E7%BD%AE%20%3Ccode%3Eoffset%3C%2Fcode%3E%20%E5%B1%9E%E6%80%A7%E6%9D%A5%E6%94%B9%E5%8F%98%E5%90%B8%E9%A1%B6%E8%B7%9D%E7%A6%BB%EF%BC%8C%E9%BB%98%E8%AE%A4%E5%80%BC%E4%B8%BA%200%E3%80%82%3C%2Fp%3E%0A"},{default:o((()=>[D])),_:1},8,["demos"]),f,k,E(s,{demos:C(c),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eaffix-container%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-affix%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etarget%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E.affix-container%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aoffset%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E80%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eprimary%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3ETarget%20container%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-affix%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"affix/target",html:"%0A%20%20%3Cdiv%20class%3D%22affix-container%22%3E%0A%20%20%20%20%3Cel-affix%20target%3D%22.affix-container%22%20%3Aoffset%3D%2280%22%3E%0A%20%20%20%20%20%20%3Cel-button%20type%3D%22primary%22%3ETarget%20container%3C%2Fel-button%3E%0A%20%20%20%20%3C%2Fel-affix%3E%0A%20%20%3C%2Fdiv%3E%0A",js:"",css:"","css-pre-processor":"none","js-pre-processor":"none","raw-source":"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22affix-container%22%3E%0A%20%20%20%20%3Cel-affix%20target%3D%22.affix-container%22%20%3Aoffset%3D%2280%22%3E%0A%20%20%20%20%20%20%3Cel-button%20type%3D%22primary%22%3ETarget%20container%3C%2Fel-button%3E%0A%20%20%20%20%3C%2Fel-affix%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A",description:"%3Cp%3E%E8%AF%B7%E6%B3%A8%E6%84%8F%E5%AE%B9%E5%99%A8%E9%81%BF%E5%85%8D%E5%87%BA%E7%8E%B0%E6%BB%9A%E5%8A%A8%E6%9D%A1%E3%80%82%3C%2Fp%3E%0A"},{default:o((()=>[A])),_:1},8,["demos"]),h,m,E(s,{demos:C(c),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-affix%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eposition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ebottom%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aoffset%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E20%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eprimary%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EOffset%20bottom%2020px%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-affix%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"affix/fixed",html:"%0A%20%20%3Cel-affix%20position%3D%22bottom%22%20%3Aoffset%3D%2220%22%3E%0A%20%20%20%20%3Cel-button%20type%3D%22primary%22%3EOffset%20bottom%2020px%3C%2Fel-button%3E%0A%20%20%3C%2Fel-affix%3E%0A",js:"",css:"","css-pre-processor":"none","js-pre-processor":"none","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-affix%20position%3D%22bottom%22%20%3Aoffset%3D%2220%22%3E%0A%20%20%20%20%3Cel-button%20type%3D%22primary%22%3EOffset%20bottom%2020px%3C%2Fel-button%3E%0A%20%20%3C%2Fel-affix%3E%0A%3C%2Ftemplate%3E%0A",description:"%3Cp%3E%E9%80%9A%E8%BF%87%E8%AE%BE%E7%BD%AE%20%3Ccode%3Eposition%3C%2Fcode%3E%20%E5%B1%9E%E6%80%A7%E6%9D%A5%E6%94%B9%E5%8F%98%E5%9B%BA%E5%AE%9A%E4%BD%8D%E7%BD%AE%EF%BC%8C%E9%BB%98%E8%AE%A4%E5%80%BC%E4%B8%BA%20%3Ccode%3Etop%3C%2Fcode%3E%20%E3%80%82%3C%2Fp%3E%0A"},{default:o((()=>[g])),_:1},8,["demos"]),b])}}});export{x as __pageData,v as default};
