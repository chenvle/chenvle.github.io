import{d as o,l as a,a as n,m as c,t as f,n as u,v as m,x as r}from"./index-044a8b13.js";const i={name:"LayCol"},d=o({...i,props:{md:null,xs:null,sm:null,lg:null,mdOffset:null,xsOffset:null,smOffset:null,lgOffset:null},setup(l){const s=l,e=a(()=>[s.md?`layui-col-md${s.md}`:"",s.xs?`layui-col-xs${s.xs}`:"",s.sm?`layui-col-sm${s.sm}`:"",s.lg?`layui-col-lg${s.lg}`:"",s.mdOffset?`layui-col-md-offset${s.mdOffset}`:"",s.xsOffset?`layui-col-xs-offset${s.xsOffset}`:"",s.smOffset?`layui-col-sm-offset${s.smOffset}`:"",s.lgOffset?`layui-col-lg-offset${s.lgOffset}`:""]);return(t,p)=>(n(),c("div",{class:u(["layui-col",m(e)])},[f(t.$slots,"default")],2))}}),O=r(d),_={name:"LayRow"},$=o({..._,props:{space:null},setup(l){const s=l,e=a(()=>[s.space?`layui-col-space${s.space}`:""]);return(t,p)=>(n(),c("div",{class:u(["layui-row",m(e)])},[f(t.$slots,"default")],2))}}),x=r($);export{x as a,O as c};
