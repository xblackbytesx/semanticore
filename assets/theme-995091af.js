/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=i=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:o,elements:r}=n;return{kind:o,elements:r,finisher(l){customElements.define(t,l)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}};function a(i){return(e,t)=>t!==void 0?((n,o,r)=>{o.constructor.createProperty(r,n)})(i,e,t):d(i,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s;((s=window.HTMLSlotElement)===null||s===void 0?void 0:s.prototype.assignedElements)!=null;export{c as a,a as e};
//# sourceMappingURL=theme-995091af.js.map
