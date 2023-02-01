import{n as ee}from"./VBtn.ddeb3513.js";import{p as X,X as E,b as a,r as P,Y as $,e as M,G as k,Z as te,W as D,U as oe,af as ne,ag as ae,J as se,a1 as ue}from"./index.c04da044.js";const O=Symbol.for("vuetify:layout"),W=Symbol.for("vuetify:layout-item"),N=1e3,ve=X({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),de=X({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function ye(){const s=E(O);if(!s)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:s.getLayoutItem,mainRect:s.mainRect,mainStyles:s.mainStyles}}function fe(s){var y;const l=E(O);if(!l)throw new Error("[Vuetify] Could not find injected layout");const d=(y=s.id)!=null?y:`layout-item-${oe()}`,i=k("useLayoutItem");D(W,{id:d});const n=P(!1);ne(()=>n.value=!0),ae(()=>n.value=!1);const{layoutItemStyles:r,layoutItemScrimStyles:c}=l.register(i,{...s,active:a(()=>n.value?!1:s.active.value),id:d});return se(()=>l.unregister(d)),{layoutItemStyles:r,layoutRect:l.layoutRect,layoutItemScrimStyles:c}}const le=(s,l,d,i)=>{let n={top:0,left:0,right:0,bottom:0};const r=[{id:"",layer:{...n}}];for(const c of s){const y=l.get(c),g=d.get(c),z=i.get(c);if(!y||!g||!z)continue;const h={...n,[y.value]:parseInt(n[y.value],10)+(z.value?parseInt(g.value,10):0)};r.push({id:c,layer:h}),n=h}return r};function pe(s){const l=E(O,null),d=a(()=>l?l.rootZIndex.value-100:N),i=P([]),n=$(new Map),r=$(new Map),c=$(new Map),y=$(new Map),g=$(new Map),{resizeRef:z,contentRect:h}=ee(),Y=a(()=>{var e;const t=new Map,u=(e=s.overlaps)!=null?e:[];for(const p of u.filter(o=>o.includes(":"))){const[o,v]=p.split(":");if(!i.value.includes(o)||!i.value.includes(v))continue;const m=n.get(o),S=n.get(v),w=r.get(o),R=r.get(v);!m||!S||!w||!R||(t.set(v,{position:m.value,amount:parseInt(w.value,10)}),t.set(o,{position:S.value,amount:-parseInt(R.value,10)}))}return t}),I=a(()=>{const t=[...new Set([...c.values()].map(e=>e.value))].sort((e,p)=>e-p),u=[];for(const e of t){const p=i.value.filter(o=>{var v;return((v=c.get(o))==null?void 0:v.value)===e});u.push(...p)}return le(u,n,r,y)}),H=a(()=>!Array.from(g.values()).some(t=>t.value)),b=a(()=>I.value[I.value.length-1].layer),_=a(()=>({"--v-layout-left":M(b.value.left),"--v-layout-right":M(b.value.right),"--v-layout-top":M(b.value.top),"--v-layout-bottom":M(b.value.bottom),...H.value?void 0:{transition:"none"}})),x=a(()=>I.value.slice(1).map((t,u)=>{let{id:e}=t;const{layer:p}=I.value[u],o=r.get(e),v=n.get(e);return{id:e,...p,size:Number(o.value),position:v.value}})),T=t=>x.value.find(u=>u.id===t),U=k("createLayout"),Z=P(!1);te(()=>{Z.value=!0}),D(O,{register:(t,u)=>{let{id:e,order:p,position:o,layoutSize:v,elementSize:m,active:S,disableTransitions:w,absolute:R}=u;c.set(e,p),n.set(e,o),r.set(e,v),y.set(e,S),w&&g.set(e,w);const j=ue(W,U==null?void 0:U.vnode).indexOf(t);j>-1?i.value.splice(j,0,e):i.value.push(e);const B=a(()=>x.value.findIndex(L=>L.id===e)),V=a(()=>d.value+I.value.length*2-B.value*2),G=a(()=>{const L=o.value==="left"||o.value==="right",A=o.value==="right",Q=o.value==="bottom",K={[o.value]:0,zIndex:V.value,transform:`translate${L?"X":"Y"}(${(S.value?0:-110)*(A||Q?-1:1)}%)`,position:R.value||d.value!==N?"absolute":"fixed",...H.value?void 0:{transition:"none"}};if(!Z.value)return K;const f=x.value[B.value];if(!f)throw new Error(`[Vuetify] Could not find layout item "${e}"`);const C=Y.value.get(e);return C&&(f[C.position]+=C.amount),{...K,height:L?`calc(100% - ${f.top}px - ${f.bottom}px)`:m.value?`${m.value}px`:void 0,left:A?void 0:`${f.left}px`,right:A?`${f.right}px`:void 0,top:o.value!=="bottom"?`${f.top}px`:void 0,bottom:o.value!=="top"?`${f.bottom}px`:void 0,width:L?m.value?`${m.value}px`:void 0:`calc(100% - ${f.left}px - ${f.right}px)`}}),J=a(()=>({zIndex:V.value-1}));return{layoutItemStyles:G,layoutItemScrimStyles:J,zIndex:V}},unregister:t=>{c.delete(t),n.delete(t),r.delete(t),y.delete(t),g.delete(t),i.value=i.value.filter(u=>u!==t)},mainRect:b,mainStyles:_,getLayoutItem:T,items:x,layoutRect:h,rootZIndex:d});const q=a(()=>["v-layout",{"v-layout--full-height":s.fullHeight}]),F=a(()=>({zIndex:d.value,position:l?"relative":void 0,overflow:l?"hidden":void 0}));return{layoutClasses:q,layoutStyles:F,getLayoutItem:T,items:x,layoutRect:h,layoutRef:z}}export{ye as a,ve as b,pe as c,de as m,fe as u};
