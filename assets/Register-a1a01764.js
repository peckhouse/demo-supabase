import{d as c,f as g,u as b,r as f,o as w,c as h,e,b as n,w as s,v as r,g as i,F as y}from"./index-5f5b3c86.js";const _=["onSubmit"],x=e("h1",null,"Register",-1),V=e("button",null,"Register",-1),U=c({__name:"Register",setup(R){const u=g(),{register:m,loginWithSocialProvider:d}=b(),a=f({name:"",email:"",password:""}),p=async()=>{try{await m(a.value),u.push({name:"EmailConfirmation",query:{email:a.value.email}})}catch(o){console.log(o.message)}},v=async o=>{try{await d(o),u.push({name:"Me"})}catch(t){console.log(t.message)}};return(o,t)=>(w(),h(y,null,[e("form",{onSubmit:i(p,["prevent"])},[x,e("label",null,[n("Name "),s(e("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>a.value.name=l),type:"text"},null,512),[[r,a.value.name]])]),e("label",null,[n("Email "),s(e("input",{"onUpdate:modelValue":t[1]||(t[1]=l=>a.value.email=l),type:"email"},null,512),[[r,a.value.email]])]),e("label",null,[n("Password "),s(e("input",{"onUpdate:modelValue":t[2]||(t[2]=l=>a.value.password=l),type:"password"},null,512),[[r,a.value.password]])]),V],40,_),e("div",null,[e("button",{onClick:t[3]||(t[3]=i(l=>v("github"),["prevent"]))},"Github")])],64))}});export{U as default};
