import{d as g,r as w,p as D,w as e,q as T,h as i,o as n,b as r,a as o,j as _,F as u,e as m,t as s}from"./index-7f04ea4f.js";const f={class:"common-txt"},y=r("button",{class:"common-btn small"},"购买",-1),B=g({__name:"medicineList",setup(h){const c=T(),t=w({arr:Array()});return c.query.type&&c.query.type==="mp"?t.arr=[{id:new Date().getTime(),name:"回春汤",price:50},{id:new Date().getTime(),name:"花蜜酒",price:60},{id:new Date().getTime(),name:"清泉酒",price:70},{id:new Date().getTime(),name:"菖蒲酒",price:80},{id:new Date().getTime(),name:"苦艾酒",price:200},{id:new Date().getTime(),name:"花雕酒",price:300},{id:new Date().getTime(),name:"杜康酒",price:400},{id:new Date().getTime(),name:"虎骨酒",price:600},{id:new Date().getTime(),name:"雄黄酒",price:800},{id:new Date().getTime(),name:"强生酒",price:900},{id:new Date().getTime(),name:"万古酒",price:1e3},{id:new Date().getTime(),name:"云香露",price:500},{id:new Date().getTime(),name:"镇魂露",price:1e3},{id:new Date().getTime(),name:"玄冰露",price:1500}]:t.arr=[{id:new Date().getTime(),name:"跌打药",price:50},{id:new Date().getTime(),name:"止血药",price:60},{id:new Date().getTime(),name:"金疮药",price:70},{id:new Date().getTime(),name:"麻沸散",price:80},{id:new Date().getTime(),name:"聚和散",price:200},{id:new Date().getTime(),name:"断续膏",price:300},{id:new Date().getTime(),name:"三黄丸",price:400},{id:new Date().getTime(),name:"百花丸",price:600},{id:new Date().getTime(),name:"熊胆丸",price:800},{id:new Date().getTime(),name:"首乌丸",price:900},{id:new Date().getTime(),name:"雪参丸",price:1e3},{id:new Date().getTime(),name:"小还丹",price:500},{id:new Date().getTime(),name:"大还丹",price:1e3},{id:new Date().getTime(),name:"回天丹",price:1500}],(b,k)=>{const p=i("el-col"),d=i("el-row"),l=i("common-page");return n(),D(l,{title:"补气血药品"},{default:e(()=>[r("ul",null,[(n(!0),o(u,null,_(t.arr,a=>(n(),o("li",{key:a.id},[m(d,null,{default:e(()=>[m(p,{span:15,offset:1},{default:e(()=>[r("label",f,s(a.name)+" （"+s(a.price)+"）",1)]),_:2},1024),m(p,{span:8},{default:e(()=>[y]),_:1})]),_:2},1024)]))),128))])]),_:1})}}});export{B as default};
