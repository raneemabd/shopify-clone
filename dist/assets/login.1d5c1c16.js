import{_ as m,l as d,q as u,al as p,c as e,x as s,o as f,aM as c,y as a,am as V}from"./index.c04da044.js";import{V as _}from"./VContainer.7e8558d9.js";import{V as b}from"./VRow.f0798004.js";import{V as g}from"./VCol.ad0103b3.js";import{V as h}from"./VForm.418dc4a4.js";import{V as l}from"./VTextField.40e39363.js";import{l as i}from"./VBtn.ddeb3513.js";/* empty css              */import"./forwardRefs.172560de.js";import"./transition.39c6114c.js";import"./easing.36b781ab.js";const w={data:()=>({username:"kminchelle",password:"0lelplR"}),methods:{...d(f,["login"]),submit(){this.login(this.username,this.password)}}},y={style:{"background-color":"#fcffe7",height:"100%"}},k=V("h1",{class:"font-weight-bold my-10 text-center pb-6",id:"font"}," Login or sign up to join us! ",-1);function C(o,t,v,x,B,n){return u(),p("section",y,[e(_,null,{default:s(()=>[k,e(b,{justify:"center"},{default:s(()=>[e(g,{cols:"12",sm:"12",md:"12",lg:"4",xl:"4"},{default:s(()=>[e(h,{onSubmit:c(n.submit,["prevent"])},{default:s(()=>[e(l,{label:"username",required:"",modelValue:o.username,"onUpdate:modelValue":t[0]||(t[0]=r=>o.username=r)},null,8,["modelValue"]),e(l,{label:"password",required:"",modelValue:o.password,"onUpdate:modelValue":t[1]||(t[1]=r=>o.password=r),type:"password"},null,8,["modelValue"]),e(i,{type:"submit",color:"primary",class:"mr-4",onClick:o.validate},{default:s(()=>[a(" Submit ")]),_:1},8,["onClick"]),e(i,{color:"error",class:"mr-4",onClick:o.reset},{default:s(()=>[a(" Reset Form ")]),_:1},8,["onClick"])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})])}const E=m(w,[["render",C]]);export{E as default};
