import{d as z,P as D,y as F,r as w,l as $,B as C,a as o,m as v,f as y,z as t,v as s,s as h,t as j,e as b,n as V,F as f,H as S,$ as x,a0 as K,a1 as R,a2 as U,x as E}from"./index-044a8b13.js";const H={class:"layui-laypage layui-laypage-default"},q={style:{display:"none"}},A={key:0,class:"layui-laypage-count"},G=y("a",{class:"layui-laypage-spr"},"...",-1),J={key:0,class:"layui-laypage-curr"},O=["onClick"],Q=y("a",{class:"layui-laypage-spr"},"...",-1),W={key:2,class:"layui-laypage-limits"},X=["value"],Y=y("i",{class:"layui-icon layui-icon-refresh"},null,-1),Z=[Y],_={key:4,class:"layui-laypage-skip"},ee=["disabled"],ae={name:"LayPage"},le=z({...ae,props:{total:null,limit:{default:10},theme:null,showPage:{type:Boolean,default:!1},showSkip:{type:Boolean,default:!1},showCount:{type:Boolean,default:!1},showLimit:{type:Boolean,default:!0},showInput:{type:Boolean,default:!1},showRefresh:{type:Boolean,default:!1},pages:{default:10},limits:{default:()=>[10,20,30,40,50]},modelValue:{default:1}},emits:["update:modelValue","update:limit","change"],setup(n,{emit:g}){const r=n,{t:p}=D();F();const u=w(0),M=w(r.limits),k=$(()=>Math.floor(r.pages/2)),e=w(r.modelValue),d=w(e.value),c=w(r.limit);C(()=>r.limit,()=>{c.value=r.limit});const m=$(()=>{u.value=Math.ceil(r.total/c.value);let i=[],l=u.value<=r.pages?1:e.value>k.value?u.value-e.value+1<k.value?e.value-(k.value+(k.value-(u.value-e.value+1))):e.value-k.value:1;for(let a=l;!(i.length>=r.pages||a>u.value);a++)i.push(a);return i}),L=()=>{e.value!==1&&(e.value--,g("change",{current:e.value,limit:c.value}))},I=()=>{e.value===u.value||u.value===0||(e.value++,g("change",{current:e.value,limit:c.value}))},B=i=>{e.value=i,g("change",{current:e.value,limit:c.value})},P=()=>{e.value=d.value,g("change",{current:e.value,limit:c.value})},N=()=>{const i=Math.ceil(r.total/c.value);e.value>i&&(e.value=i),g("change",{current:e.value,limit:c.value})},T=()=>{g("change",{current:e.value,limit:c.value})};return C(c,()=>{g("update:limit",c.value)}),C(e,()=>{const i=m.value[0],l=m.value[m.value.length-1];e.value>l&&(e.value=l),e.value<i&&(e.value=i),d.value=e.value,g("update:modelValue",e.value)}),C(()=>r.modelValue,()=>{e.value=r.modelValue,d.value=e.value}),(i,l)=>(o(),v("div",H,[y("div",q,t(s(m)),1),n.showCount?(o(),v("span",A,t(s(p)("page.total"))+" "+t(n.total)+" "+t(s(p)("page.item"))+" "+t(u.value)+" "+t(s(p)("page.page")),1)):h("",!0),y("a",{href:"javascript:;",class:V(["layui-laypage-prev",[e.value===1?"layui-disabled":"",n.theme&&e.value!==1?"layui-laypage-a-"+n.theme:""]]),onClick:l[0]||(l[0]=a=>L())},[j(i.$slots,"prev",{},()=>[b(t(s(p)("page.previous")),1)])],2),n.showPage?(o(),v(f,{key:1},[s(m)[0]!=1?(o(),v(f,{key:0},[y("a",{href:"javascript:;",class:"layui-laypage-first",onClick:l[1]||(l[1]=a=>B(1))}," 1 "),G],64)):h("",!0),(o(!0),v(f,null,S(s(m),a=>(o(),v(f,{key:a},[a===e.value?(o(),v("span",J,[y("em",{class:V(["layui-laypage-em",[n.theme?"layui-bg-"+n.theme:""]])},null,2),y("em",null,t(a),1)])):(o(),v("a",{key:1,href:"javascript:;",onClick:te=>B(a),class:V([n.theme?"layui-laypage-a-"+n.theme:""])},t(a),11,O))],64))),128)),s(m)[s(m).length-1]!=u.value?(o(),v(f,{key:1},[Q,y("a",{href:"javascript:;",class:"layui-laypage-last",onClick:l[2]||(l[2]=a=>B(u.value))},t(u.value),1)],64)):h("",!0)],64)):h("",!0),y("a",{href:"javascript:;",class:V(["layui-laypage-next",[e.value===u.value||u.value===0?"layui-disabled":"",n.theme&&e.value!==u.value&&u.value!==0?"layui-laypage-a-"+n.theme:""]]),onClick:l[3]||(l[3]=a=>I())},[j(i.$slots,"next",{},()=>[b(t(s(p)("page.next")),1)])],2),n.showLimit?(o(),v("span",W,[x(y("select",{"onUpdate:modelValue":l[4]||(l[4]=a=>c.value=a),onChange:N},[(o(!0),v(f,null,S(M.value,a=>(o(),v("option",{key:a,value:a},t(a)+" "+t(s(p)("page.item"))+"/"+t(s(p)("page.page")),9,X))),128))],544),[[K,c.value]])])):h("",!0),n.showRefresh?(o(),v("a",{key:3,href:"javascript:;",onClick:T,class:"layui-laypage-refresh"},Z)):h("",!0),r.showSkip?(o(),v("span",_,[b(t(s(p)("page.goTo"))+" ",1),x(y("input",{"onUpdate:modelValue":l[5]||(l[5]=a=>d.value=a),onKeypress:l[6]||(l[6]=U(a=>P(),["enter"])),type:"number",class:"layui-input layui-input-number"},null,544),[[R,d.value]]),b(t(s(p)("page.page"))+" ",1),y("button",{type:"button",class:"layui-laypage-btn",onClick:l[7]||(l[7]=a=>P()),disabled:d.value>u.value||d.value==e.value},t(s(p)("page.confirm")),9,ee)])):h("",!0)]))}}),se=E(le);export{le as _,se as c};
