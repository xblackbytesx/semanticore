import{T as O,i as A,s as C,x as z}from"./lit-element-18db1993.js";import{e as p,a as P}from"./theme-995091af.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},w=r=>(...t)=>({_$litDirective$:r,values:t});let k=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,e){this._$Ct=t,this._$AM=o,this._$Ci=e}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=w(class extends k{constructor(r){var t;if(super(r),r.type!==j.ATTRIBUTE||r.name!=="style"||((t=r.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((t,o)=>{const e=r[o];return e==null?t:t+`${o=o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${e};`},"")}update(r,[t]){const{style:o}=r.element;if(this.vt===void 0){this.vt=new Set;for(const e in t)this.vt.add(e);return this.render(t)}this.vt.forEach(e=>{t[e]==null&&(this.vt.delete(e),e.includes("-")?o.removeProperty(e):o[e]="")});for(const e in t){const s=t[e];s!=null&&(this.vt.add(e),e.includes("-")?o.setProperty(e,s):o[e]=s)}return O}});var N=Object.defineProperty,R=Object.getOwnPropertyDescriptor,a=(r,t,o,e)=>{for(var s=e>1?void 0:e?R(t,o):t,d=r.length-1,m;d>=0;d--)(m=r[d])&&(s=(e?m(t,o,s):m(s))||s);return e&&s&&N(t,o,s),s};let n=class extends C{constructor(){super(...arguments),this.primary=!1,this.size="medium",this.label=""}render(){const r=this.primary?"sc-button--primary":"sc-button--secondary";return z`
      <button
        type="button"
        class=${["sc-button",`sc-button--${this.size}`,r].join(" ")}
        style=${L({backgroundColor:this.backgroundColor})}
        @click=${this.onClick}
      ><slot></slot>
        ${this.label}
      </button>
    `}};n.styles=A`
    .sc-button {
      font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-weight: 700;
      border: 0;
      border-radius: 3em;
      cursor: pointer;
      display: inline-block;
      line-height: 1;
    }

    .sc-button--primary {
      color: var(--btn-primary-color);
      background-color: var(--btn-primary-bg-color);
    }

    .sc-button--secondary {
      color: var(--btn-secondary-color);
      background-color: var(--btn-secondary-bg-color);;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    }

    .sc-button--small {
      font-size: 12px;
      padding: 10px 16px;
    }

    .sc-button--medium {
      font-size: 14px;
      padding: 11px 20px;
    }
    
    .sc-button--large {
      font-size: 16px;
      padding: 12px 24px;
    }
  `;a([p({type:Boolean})],n.prototype,"primary",2);a([p({type:String})],n.prototype,"backgroundColor",2);a([p({type:String})],n.prototype,"size",2);a([p({type:String})],n.prototype,"label",2);a([p({type:Function})],n.prototype,"onClick",2);n=a([P("sc-button")],n);const M={title:"Components/sc-button",component:"sc-button",tags:["autodocs"],argTypes:{primary:{control:"boolean"},backgroundColor:{control:"color"},size:{control:{type:"select"},options:["small","medium","large"]}}},b=r=>{const t=document.createElement("sc-button");return Object.assign(t,r),t},c=b.bind({});c.args={primary:!0,label:"ScButton"};const i=b.bind({});i.args={primary:!1,label:"ScButton"};const u=b.bind({});u.args={size:"large",label:"ScButton"};const l=b.bind({});l.args={size:"small",label:"ScButton"};var g,y,h;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const button = (document.createElement('sc-button') as ScButton);
  Object.assign(button, args);
  return button;
}`,...(h=(y=c.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,S,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const button = (document.createElement('sc-button') as ScButton);
  Object.assign(button, args);
  return button;
}`,...(f=(S=i.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var x,_,$;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const button = (document.createElement('sc-button') as ScButton);
  Object.assign(button, args);
  return button;
}`,...($=(_=u.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var E,T,B;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const button = (document.createElement('sc-button') as ScButton);
  Object.assign(button, args);
  return button;
}`,...(B=(T=l.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const H=["Primary","Secondary","Large","Small"];export{u as Large,c as Primary,i as Secondary,l as Small,H as __namedExportsOrder,M as default};
//# sourceMappingURL=ScButton.stories-9e609a63.js.map
