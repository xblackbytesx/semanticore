import{s as p}from"./index-d475d2ea.js";import{d as S}from"./index-356e4a49.js";import{B as _}from"./lit-element-18db1993.js";import{S as u,e as g,a as w}from"./index-e1f3a364.js";import"./_commonjsHelpers-725317a4.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=(e,r)=>r===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===r;var{window:C}=p;C.STORYBOOK_ENV="web-components";const{start:D}=__STORYBOOK_MODULE_PREVIEW_API__,{simulatePageLoad:f,simulateDOMContentLoaded:v}=__STORYBOOK_MODULE_PREVIEW_API__;var{Node:L}=p,X=(e,r)=>{let{id:t,component:o}=r;if(!o)throw new Error(`Unable to render story ${t} as the component annotation is missing from the default export`);let n=document.createElement(o);return Object.entries(e).forEach(([s,a])=>{n[s]=a}),n};function b({storyFn:e,kind:r,name:t,showMain:o,showError:n,forceRemount:s},a){let i=e();if(o(),M(i)){(s||!a.querySelector('[id="root-inner"]'))&&(a.innerHTML='<div id="root-inner"></div>');let l=a.querySelector('[id="root-inner"]');_(i,l),f(a)}else if(typeof i=="string")a.innerHTML=i,f(a);else if(i instanceof L){if(a.firstChild===i&&!s)return;a.innerHTML="",a.appendChild(i),v()}else n({title:`Expecting an HTML snippet or DOM node from the story: "${t}" of "${r}".`,description:S`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      `})}var c=D(b);c.forceReRender;c.clientApi.raw;function y(e){if(!e)return!1;if(typeof e=="string")return!0;throw new Error('Provided component needs to be a string. e.g. component: "my-element"')}function O(e){if(!e)return!1;if(e.tags&&Array.isArray(e.tags)||e.modules&&Array.isArray(e.modules))return!0;throw new Error(`You need to setup valid meta data in your config.js via setCustomElements().
    See the readme of addon-docs for web components for more details.`)}function m(){return p.__STORYBOOK_CUSTOM_ELEMENTS__||p.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__}var{window:A,EventSource:R}=p;module&&module.hot&&module.hot.decline&&(module.hot.decline(),new R("__webpack_hmr").addEventListener("message",function(e){try{let{action:r}=JSON.parse(e.data);r==="built"&&A.location.reload()}catch{}}));const{logger:h}=__STORYBOOK_MODULE_CLIENT_LOGGER__;function T(e,r){var o,n;let t=r==="properties"?{name:((o=e.type)==null?void 0:o.text)||e.type}:{name:"void"};return{name:e.name,required:!1,description:e.description,type:t,table:{category:r,type:{summary:((n=e.type)==null?void 0:n.text)||e.type},defaultValue:{summary:e.default!==void 0?e.default:e.defaultValue}}}}function I(e){let r=e.name.replace(/(-|_|:|\.|\s)+(.)?/g,(t,o,n)=>n?n.toUpperCase():"").replace(/^([A-Z])/,t=>t.toLowerCase());return r=`on${r.charAt(0).toUpperCase()+r.substr(1)}`,[{name:r,action:{name:e.name},table:{disable:!0}},T(e,"events")]}function d(e,r){return e&&e.filter(t=>t&&t.name).reduce((t,o)=>{if(o.kind==="method")return t;switch(r){case"events":I(o).forEach(n=>{t[n.name]=n});break;default:t[o.name]=T(o,r);break}return t},{})}var $=(e,r)=>{if(!y(e)||!O(r))return null;let t=r.tags.find(o=>o.name.toUpperCase()===e.toUpperCase());return t||h.warn(`Component not found in custom-elements.json: ${e}`),t},U=(e,r)=>{var o;if(!y(e)||!O(r))return null;let t;return(o=r==null?void 0:r.modules)==null||o.forEach(n=>{var s;(s=n==null?void 0:n.declarations)==null||s.forEach(a=>{a.tagName===e&&(t=a)})}),t||h.warn(`Component not found in custom-elements.json: ${e}`),t},E=(e,r)=>(r==null?void 0:r.version)==="experimental"?$(e,r):U(e,r),Y=(e,r)=>{let t=E(e,r);return t&&{...d(t.attributes,"attributes"),...d(t.members,"properties"),...d(t.properties,"properties"),...d(t.events,"events"),...d(t.slots,"slots"),...d(t.cssProperties,"css custom properties"),...d(t.cssParts,"css shadow parts")}},V=e=>{let r=m();return Y(e,r)},B=e=>{let r=E(e,m());return r&&r.description};const{addons:N,useEffect:P}=__STORYBOOK_MODULE_PREVIEW_API__;var K=/<!--\?lit\$[0-9]+\$-->|<!--\??-->/g;function H(e){var o;let r=(o=e==null?void 0:e.parameters.docs)==null?void 0:o.source,t=e==null?void 0:e.parameters.__isArgsStory;return(r==null?void 0:r.type)===u.DYNAMIC?!1:!t||(r==null?void 0:r.code)||(r==null?void 0:r.type)===u.CODE}function k(e,r){var s,a;let t=e(),o=(a=(s=r==null?void 0:r.parameters.docs)==null?void 0:s.source)!=null&&a.excludeDecorators?r.originalStoryFn(r.args,r):t,n;if(P(()=>{let{id:i,args:l}=r;n&&N.getChannel().emit(w,{id:i,source:n,args:l})}),!H(r)){let i=window.document.createElement("div");_(o,i),n=i.innerHTML.replace(K,"")}return t}var Z=[k],j={docs:{extractArgTypes:V,extractComponentDescription:B,story:{inline:!0},source:{type:u.DYNAMIC,language:"html"}}},z=[g],Q={renderer:"web-components",...j};export{z as argTypesEnhancers,Z as decorators,Q as parameters,X as render,b as renderToCanvas};
//# sourceMappingURL=config-847f3364.js.map
