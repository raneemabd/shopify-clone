import{E as e}from"./index.c04da044.js";const r=e("cart",{persist:!0,state:()=>({items:[]}),getters:{itemsNumber(t){return t.items.length}},actions:{addToCart(t){this.items.push(t)},removeItem(t){this.items.splice(t,1)}}});export{r as c};
