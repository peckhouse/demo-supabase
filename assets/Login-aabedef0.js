import{d as p,u as w,r as c,h as g,o as v,c as _,e,b as a,w as i,v as r,i as f,j as b}from"./index-d4334620.js";const h={class:"max-w-lg m-auto"},x=e("h1",null,"Login",-1),k=e("button",null,"Login",-1),C=p({__name:"Login",setup(V){const{login:u,loginWithSocialProvider:d}=w(),t=c({email:"",password:""}),n=async(s=null)=>{try{s?await d(s):await u(t.value)}catch(o){console.log(o.message)}};return(s,o)=>{const m=g("router-link");return v(),_("div",h,[e("form",{onSubmit:o[2]||(o[2]=()=>n)},[x,e("label",null,[a("Email "),i(e("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>t.value.email=l),type:"email"},null,512),[[r,t.value.email]])]),e("label",null,[a("Password "),i(e("input",{"onUpdate:modelValue":o[1]||(o[1]=l=>t.value.password=l),type:"password"},null,512),[[r,t.value.password]])]),k,f(m,{to:"/forgotPassword"},{default:b(()=>[a("Forgot Password?")]),_:1})],32),e("div",null,[e("button",{onClick:o[3]||(o[3]=l=>n("github"))},"Github")])])}}});export{C as default};