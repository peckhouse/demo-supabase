import{d as r,u as l,o,c as t,a as e,b as i,t as d,e as c,F as _}from"./index-d4334620.js";const m=c("h1",null,"Homepage",-1),p={key:0},f={key:1},h=r({__name:"Home",setup(y){const{myUser:n,logout:s}=l();return(g,a)=>(o(),t(_,null,[m,e(n)?(o(),t("div",p,[i(" Successfuly connected!!! Hello "+d(e(n).email)+"!! ",1),c("button",{onClick:a[0]||(a[0]=(...u)=>e(s)&&e(s)(...u))},"Signout")])):(o(),t("div",f," You need to connect to your account "))],64))}});export{h as default};