import{l as B,_ as x,q as n,al as y,c as e,x as r,h as A,y as i,A as u,V as q,w as T,v as L,am as l,B as w,S as C,au as N,s as p,an as D,ao as E,ap as j}from"./index.c04da044.js";import{c as F}from"./cart.72eded05.js";import{V as R}from"./VHover.fbe459d5.js";import{V as P,a as U,c as V,b as O}from"./VCard.5df90731.js";import{V as z}from"./VImg.db9e1be2.js";import{V as _}from"./VDivider.9b45470d.js";import{l as c,k as S}from"./VBtn.ddeb3513.js";import{V as G}from"./VOverlay.1522ac65.js";import{V as I}from"./lazy.dbf9fbe5.js";import{V as v}from"./VContainer.7e8558d9.js";import{f as M}from"./footerSection.f8f24f46.js";import{V as g}from"./VRow.f0798004.js";import{V as b}from"./VCol.ad0103b3.js";import{V as W}from"./VRating.6a8c208c.js";import{V as Y}from"./VTextField.40e39363.js";import"./delay.59992000.js";import"./transition.39c6114c.js";import"./easing.36b781ab.js";/* empty css              */import"./layout.7ef3864f.js";import"./forwardRefs.172560de.js";const $={data:()=>({url:"",show:!1}),created(){this.url=`/product-details/${this.id}`},props:{id:{type:Number,required:!0},title:{required:!0},price:{type:Number,required:!0},category:{required:!0},description:{required:!0},image:{required:!0}},methods:{...B(F,["addToCart"])}},H=l("b",null,"Price: ",-1);function J(t,a,o,k,m,f){return n(),y("section",null,[e(v,null,{default:r(()=>[e(R,{"open-delay":"200"},{default:r(({isHovering:d,props:h})=>[e(P,A({elevation:d?16:2,class:[{"on-hover":d},"mx-auto"],"max-width":"350"},h),{default:r(()=>[e(z,{src:o.image,height:"200px",cover:""},null,8,["src"]),e(U,null,{default:r(()=>[i(u(o.title),1)]),_:1}),e(V,null,{default:r(()=>[i(u(o.category),1)]),_:1}),e(_),e(V,null,{default:r(()=>[H,i(" "+u(o.price)+" $",1)]),_:1}),e(O,null,{default:r(()=>[e(c,{variant:"tonal",color:"#5F8D3E",onClick:a[0]||(a[0]=s=>t.addToCart({id:o.id,title:o.title,price:o.price,image:o.image,category:o.category}))},{default:r(()=>[i("Add To "),e(S,{class:"ml-2"},{default:r(()=>[i(" mdi-cart ")]),_:1}),e(G,{activator:"parent","location-strategy":"connected","scroll-strategy":"reposition"},{default:r(()=>[e(P,{class:"pa-2",color:"primary"},{default:r(()=>[i(" Successfuly Added , Lets Add More ! ")]),_:1})]),_:1})]),_:1}),e(c,{variant:"tonal",color:"#ff0000",to:t.url},{default:r(()=>[i(" Details ")]),_:1},8,["to"]),e(I),e(c,{to:"/likes"},{default:r(()=>[e(S,{color:"red"},{default:r(()=>[i(" mdi-heart ")]),_:1})]),_:1}),e(c,{icon:t.show?"mdi-chevron-up":"mdi-chevron-down",onClick:a[1]||(a[1]=s=>t.show=!t.show)},null,8,["icon"])]),_:1}),e(q,null,{default:r(()=>[T(l("div",null,[e(_),e(V,null,{default:r(()=>[i(u(o.description),1)]),_:1})],512),[[L,t.show]])]),_:1})]),_:2},1040,["elevation","class"])]),_:1})]),_:1})])}const K=x($,[["render",J]]),Q={components:{singleProduct:K,FooterSection:M},data(){return{url:"",isLoading:!0,products:[],searchValue:""}},computed:{filterProductsBySearchValue(){return this.searchValue.trim().length>0?this.products.filter(t=>t.title.toLowerCase().includes(this.searchValue.trim().toLowerCase())):this.products}},created(){this.url=window.location.pathname.split("/")[2],this.loadApiProducts()},methods:{loadApiProducts(){fetch("https://fakestoreapi.com/products").then(t=>t.json()).then(t=>this.products=t.filter(a=>this.url==="men"?a.category=="men's clothing":this.url=="women"?a.category=="women's clothing":a))},filteredList(){return this.products.filter(t=>this.searchValue==="men"?t.category=="men's clothing":this.searchValue=="women"?t.category=="women's clothing":t)}}},X={style:{"background-color":"#fcffe7"}},Z=l("h1",{class:"text-center py-8",style:{color:"#603e1b"}},"Wear Good, Be Good!",-1),ee=l("p",{class:"text-center text-warning"},[l("i",null,"There are no products match this...")],-1),te={class:"text-center"},re=l("h1",{style:{color:"#603e1b"}},"To be better, Together!",-1),ae={class:"text-center"};function oe(t,a,o,k,m,f){const d=w("singleProduct"),h=w("v-data-table");return n(),y(C,null,[l("section",X,[Z,e(g,{class:"d-flex flex-row justify-center align-center py-10"},{default:r(()=>[e(b,{class:"d-flex flex-row justify-center align-center",style:{"border-color":"red"}},{default:r(()=>[T(l("input",{type:"search",placeholder:"Search ","onUpdate:modelValue":a[0]||(a[0]=s=>m.searchValue=s)},null,512),[[N,m.searchValue]])]),_:1})]),_:1}),e(v,null,{default:r(()=>[f.filterProductsBySearchValue.length>0?(n(),p(g,{key:0},{default:r(()=>[(n(!0),y(C,null,D(f.filterProductsBySearchValue,s=>(n(),p(b,{cols:"12",sm:"6",md:"6",lg:"4",xl:"3",key:s.id},{default:r(()=>[e(d,E(j(s)),null,16)]),_:2},1024))),128))]),_:1})):(n(),p(g,{key:1,"data-aos":"zoom-in","data-aos-duration":"1000",class:"d-flex flex-row justify-center align-center"},{default:r(()=>[ee]),_:1}))]),_:1})]),e(_),l("section",null,[e(v,null,{default:r(()=>[l("div",te,[re,l("div",ae,[e(W,{modelValue:t.rating,"onUpdate:modelValue":a[1]||(a[1]=s=>t.rating=s),readonly:""},null,8,["modelValue"])])])]),_:1})]),e(h,{"custom-filter":t.filterOnlyCapsText,headers:t.headers,items:t.desserts,search:t.search,class:"elevation-1","item-value":"name"},{top:r(()=>[e(Y,{modelValue:t.search,"onUpdate:modelValue":a[2]||(a[2]=s=>t.search=s),label:"Search (UPPER CASE ONLY)",class:"pa-4"},null,8,["modelValue"])]),_:1},8,["custom-filter","headers","items","search"])],64)}const xe=x(Q,[["render",oe]]);export{xe as default};
