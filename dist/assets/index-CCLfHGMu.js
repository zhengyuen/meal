import{q as O,s as T,r as C,b as V,e as x,d as F,u as z,k as E,f as L,o as b,c as h,a as e,n as g,t as o,x as r,p as l,F as v,g as f,m as R,h as $,w as I}from"./index-1kqY1LnQ.js";const U={class:"text-center"},A={class:"flex flex-col min-h-screen"},G={class:"font-bold text-lg pb-2"},H=e("i",{class:"fa-solid fa-phone mr-3"},null,-1),J=e("span",null,"07-722-6777",-1),K={class:"font-bold text-lg pb-2"},Q=e("i",{class:"fa-solid fa-pen-to-square"},null,-1),W=[Q],X={class:"font-bold pl-3"},Y={class:"font-bold text-lg pb-2"},Z=["src"],ee={class:"font-bold text-xl"},te={class:"font-bold text-xl"},oe={class:"text-slate-400"},se={class:"ml-2 text-slate-400"},le={class:"translate-y-6 translate-x-12"},ae={class:"font-bold text-lg pb-2"},re={class:"font-bold text-lg pb-2"},de={class:"font-bold text-lg pb-2"},ne={class:"h-10"},ie={__name:"index",setup(ce){const{t:d}=O(),N=["貨到付款","線上支付"],S=["自取","外送"],_=T(),m=C(_.token),q=V(),w=x(()=>_.formData),c=F(),a=C(Number(q.params.storeId)),n=x(()=>_.isDarkTheme),k=x(()=>c.stores.find(s=>s.id===a.value));console.log(Object.keys(c.cart).filter(s=>Number(s)!==a.value));const y=x(()=>{let s=0;for(const u of c.cart[a.value])s+=u.price*u.quantity;return s}),D=z(),p=s=>{D.push(s)},i=E({payMethod:"貨到付款",getMethod:"自取"}),P=s=>{c.setOrder({...c.order,[a.value]:[{orderId:`order${a.value}`,payMethod:i.payMethod,getMethod:i.getMethod,totalPrice:y,store:k.value.name,storeId:a,products:c.cart[a.value]}]}),R.success("您已成功下單"),p(`/result/${a.value}`)},j=()=>{m.value||(p("/login"),R.success("請登入會員")),m.value&&p("/personal")};return(s,u)=>{const M=L("a-button");return b(),h(v,null,[e("header",U,[e("i",{class:"fa-solid fa-chevron-left left-3 absolute",onClick:u[0]||(u[0]=t=>p("/cart"))}),g(" "+o(r(d)("order")),1)]),e("div",A,[e("div",{class:l(["flex-1 bg-slate-200",{"!bg-black text-white px-2":n.value}])},[e("div",{class:l(["shadow-md my-3 py-3 px-5 mt-3 rounded-lg bg-white text-blue-500 text-bold RwdModel",{"!bg-black text-white border-2 border-white border-solid":n.value}])},[e("p",G,o(k.value.name),1),H,J],2),e("div",{class:l(["shadow-md my-3 py-3 px-3 rounded-lg bg-white text-black RwdModel",{"!bg-black text-white border-2 border-white border-solid":n.value}])},[e("p",K,o(r(d)("order_info")),1),e("div",{class:"text-right",onClick:j},W),e("div",X,[e("p",null,o(r(d)("name"))+": "+o(w.value.name),1),e("p",null,o(r(d)("cellphone"))+": "+o(w.value.phone),1)])],2),e("div",{class:l(["bg-white py-3 px-3 text-black RwdModel",{"!bg-black text-white border-2 border-white border-solid":n.value}])},[e("p",Y,o(r(d)("product")),1),(b(!0),h(v,null,f(r(c).cart[a.value],t=>(b(),h("div",{class:l(["flex items-center my-3 py-3 rounded-lg bg-white mx-2 text-black",{"!bg-black text-white":n.value}]),key:t},[e("img",{src:t.image,alt:"image",class:l(["h-20",{"rounded-full mx-2 h-20 w-20 object-cover":n.value}])},null,10,Z),e("div",null,[e("p",ee,o(t.name),1),e("p",te,"$ "+o(t.price),1),e("span",oe,o(t.temperature),1),e("span",se,o(t.sweetness),1)]),e("div",le,[e("p",null,"x "+o(t.quantity),1)])],2))),128))],2),e("div",{class:l(["shadow-md my-3 py-3 px-3 rounded-lg bg-white text-black RwdModel",{"!bg-black text-white border-2 border-white border-solid":n.value}])},[e("p",ae,o(r(d)("pay_method")),1),(b(),h(v,null,f(N,t=>$(M,{class:l(["font-bold",["mr-2 last:mr-0",{"border-2 border-brown border-solid":t===i.payMethod}]]),key:t,value:t,onClick:B=>i.payMethod=t,focus:s.outline-0},{default:I(()=>[g(o(t),1)]),_:2},1032,["value","onClick","focus","class"])),64))],2),e("div",{class:l(["shadow-md my-3 py-3 px-3 rounded-lg bg-white text-black RwdModel",{"!bg-black text-white border-2 border-white border-solid":n.value}])},[e("p",re,o(r(d)("pickup_method")),1),(b(),h(v,null,f(S,t=>$(M,{class:l(["font-bold",["mr-2 last:mr-0",{"border-2 border-brown border-solid":t===i.getMethod}]]),key:t,focus:s.outline-0,value:t,onClick:B=>i.getMethod=t},{default:I(()=>[g(o(t),1)]),_:2},1032,["focus","value","onClick","class"])),64))],2),e("div",{class:l(["flex justify-between items-center shadow-md my-3 py-4 px-3 rounded-lg bg-white text-black RwdModel",{"!bg-black text-white border-2 border-white border-solid":n.value}])},[e("p",de,o(r(d)("total"))+" $ "+o(y.value),1),e("div",{class:"font-bold bg-brown text-white w-1/4 text-center rounded-lg text-md",onClick:u[1]||(u[1]=t=>P(a.value))},[e("button",ne,o(r(d)("submit")),1)])],2)],2)])],64)}}};export{ie as default};
