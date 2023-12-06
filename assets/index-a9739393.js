import{j as e,r as a,a as o}from"./index-a08c60c3.js";const d=()=>e.jsx(e.Fragment,{children:e.jsx("h2",{children:"Filter List"})}),_="_machineCard_1jqe0_1",h={machineCard:_},m=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:h.machineCard,children:[e.jsx("img",{className:"cardImage",href:"#",alt:"car"}),e.jsxs("div",{className:"cardContent",children:[e.jsx("h2",{className:"contentTitle",children:"Machine Name, year cost"}),e.jsx("p",{className:"contentData",children:"Kiev | Ukraine | Luxury Car Rentals | Enclave | Power liftgate..."})]}),e.jsx("button",{children:"Learn more"})]})}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"List of car cards"}),e.jsx(m,{})]}),j="_bg_window_1c0iy_1",g="_modal_1c0iy_12",u="_close_btn_1c0iy_27",f="_btn_icon_1c0iy_54",t={bg_window:j,modal:g,close_btn:u,btn_icon:f};function p({id:i,styles:n}){switch(i){case"close":return e.jsxs("svg",{className:n,version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14",fill:"#000",stroke:"#000",children:[e.jsx("path",{d:"M13 1L1 13",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M1 1L13 13",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]});case"heart":return e.jsx("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",children:e.jsx("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"2.6667",stroke:"#000",d:"M27.787 6.148c-1.327-1.328-3.161-2.149-5.187-2.149s-3.859 0.821-5.187 2.149l-1.413 1.413-1.413-1.413c-1.325-1.315-3.151-2.128-5.166-2.128-4.051 0-7.335 3.284-7.335 7.335 0 2.015 0.813 3.841 2.128 5.167l11.786 11.784 11.787-11.787c1.328-1.327 2.149-3.161 2.149-5.187s-0.821-3.859-2.149-5.187l-0-0z"})});default:return e.jsx("svg",{})}}const v="_containerImg_1a52r_2",I="_carImg_1a52r_12",N="_generalInfo_1a52r_16",w="_generalInfo__title_1a52r_19",b="_generalInfo__list_1a52r_25",k="_generalInfo__description_1a52r_49",C="_accesories_1a52r_56",L="_accesories__title_1a52r_59",y="_accesories__list_1a52r_66",E="_conditions_1a52r_88",M="_condition__header_1a52r_91",P="_condition__list_1a52r_98",S="_element_value_1a52r_118",F="_rent__button_1a52r_122",s={containerImg:v,carImg:I,generalInfo:N,generalInfo__title:w,generalInfo__list:b,generalInfo__description:k,accesories:C,accesories__title:L,accesories__list:y,conditions:E,condition__header:M,condition__list:P,element_value:S,rent__button:F},B=()=>e.jsxs("div",{className:"modalContent",children:[e.jsx("div",{className:s.containerImg,children:e.jsx("img",{className:s.carImg,src:"./src/img/car1.jpg",alt:"car1"})}),e.jsxs("div",{className:s.generalInfo,children:[e.jsxs("p",{className:s.generalInfo__title,children:["Buick",e.jsx("span",{children:e.jsx("a",{href:"#",children:" Enclave"})}),", 2008"]}),e.jsxs("ul",{className:s.generalInfo__list,children:[e.jsx("li",{children:"Kiev"}),e.jsx("li",{children:"Ukraine"}),e.jsx("li",{children:"Id: 9582"}),e.jsx("li",{children:"Year: 2008"}),e.jsx("li",{children:"Type: Suv"}),e.jsx("li",{children:"Fuel Consumption: 10.5"}),e.jsx("li",{children:"Engine Size: 3.6L V6"})]}),e.jsx("p",{className:s.generalInfo__description,children:"The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features."})]}),e.jsxs("div",{className:s.accesories,children:[e.jsx("p",{className:s.accesories__title,children:"Accessories and functionalities:"}),e.jsxs("ul",{className:s.accesories__list,children:[e.jsx("li",{children:"Leather seats"}),e.jsx("li",{children:"Panoramic sunroof"}),e.jsx("li",{children:"Power liftgate"}),e.jsx("li",{children:"Premium audio system"}),e.jsx("li",{children:"Remote start"}),e.jsx("li",{children:"Blind-spot monitoring"})]})]}),e.jsxs("div",{className:s.conditions,children:[e.jsx("p",{className:s.condition__header,children:"Rental Conditions: "}),e.jsxs("ul",{className:s.condition__list,children:[e.jsxs("li",{children:["Minimum age : ",e.jsx("span",{className:s.element_value,children:"25"})]}),e.jsx("li",{children:"Valid driver’s license"}),e.jsx("li",{children:"Security deposite required "}),e.jsxs("li",{children:["Mileage: ",e.jsx("span",{className:s.element_value,children:"5,858"})]}),e.jsxs("li",{children:["Price: ",e.jsx("span",{className:s.element_value,children:"40$"})]})]})]}),e.jsx("button",{className:s.rent__button,children:"Rental card"})]}),R=({isOpen:i,closeFunc:n})=>{if(!i)return null;const c=r=>{r.target.className===t.bg_window&&n()};return a.useEffect(()=>{const r=l=>{l.key==="Escape"&&n()};return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}}),o.createPortal(e.jsx("div",{className:t.bg_window,onClick:c,children:e.jsxs("div",{className:t.modal,children:[e.jsx("button",{className:t.close_btn,onClick:n,children:e.jsx("span",{children:e.jsx(p,{styles:t.btn_icon,id:"close"})})}),e.jsx(B,{})]})}),document.body)},V=()=>{const[i,n]=a.useState(!1),c=()=>{n(!i)};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Catalog Page"}),e.jsx("button",{onClick:c,children:"Open Modal"}),e.jsx(d,{}),e.jsx(x,{}),e.jsx(R,{isOpen:i,closeFunc:c})]})},K=V;export{K as default};
