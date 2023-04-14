import{i as H,s as x,x as _}from"./lit-element-18db1993.js";import{e as b,a as y}from"./theme-995091af.js";const C=""+new URL("../semanticore.svg",import.meta.url).href;var w=Object.defineProperty,S=Object.getOwnPropertyDescriptor,m=(t,e,a,c)=>{for(var o=c>1?void 0:c?S(e,a):e,i=t.length-1,l;i>=0;i--)(l=t[i])&&(o=(c?l(e,a,o):l(o))||o);return c&&o&&w(e,a,o),o};let s=class extends x{constructor(){super(...arguments),this.docsHint="Click on the logo to learn more",this.count=0}render(){return _`
      <div>
        <a href="https://github.com/xblackbytesx/semanticore" target="_blank">
          <img src=${C} class="logo" alt="Semanticore logo" />
        </a>
      </div>
      <slot></slot>
      <div class="card">
        <sc-button primary @click=${this._onClick} part="button">
          count is ${this.count}
        </sc-button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
    `}_onClick(){this.count++}};s.styles=H`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .logo {
      height: 20em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }

    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }

    h1 {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }

    a:hover {
      color: #535bf2;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }

    button:hover {
      border-color: #646cff;
    }

    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      
      button {
        background-color: #f9f9f9;
      }
    }
  `;m([b()],s.prototype,"docsHint",2);m([b({type:Number})],s.prototype,"count",2);s=m([y("sc-hero")],s);const $={title:"Components/sc-hero",component:"sc-hero",tags:["autodocs"],argTypes:{count:{control:{type:"number"}},docsHint:{control:{type:"text"}}}},v=t=>{const e=document.createElement("sc-hero");return e.count=t.count,e.docsHint=t.docsHint,e},r=v.bind({});r.args={count:0,docsHint:"Click on the logo to learn more"};const n=v.bind({});n.args={count:5,docsHint:"Custom hint: Click on the logo to learn more"};var u,d,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const element = (document.createElement('sc-hero') as ScHero);
  element.count = args.count;
  element.docsHint = args.docsHint;
  return element;
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var h,g,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const element = (document.createElement('sc-hero') as ScHero);
  element.count = args.count;
  element.docsHint = args.docsHint;
  return element;
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const D=["Default","Custom"];export{n as Custom,r as Default,D as __namedExportsOrder,$ as default};
//# sourceMappingURL=ScHero.stories-e74b5a5b.js.map
