(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[188],{4600:function(e,s){"use strict";s.Z={src:"/_next/static/media/frame-studio-2.327f52d3.svg",height:211,width:527,blurWidth:0,blurHeight:0}},1276:function(e,s,a){"use strict";var i=a(5893),l=a(6465),n=a.n(l),t=a(7294),c=a(5675),o=a.n(c),r=a(2585),d=a(7447),m=a(4600),p=a(5152),h=a.n(p),x=a(1664),u=a.n(x);s.Z=h()(()=>Promise.resolve(b),{ssr:!1});let b=()=>{let[e,s]=(0,t.useState)("hideNav");return(0,i.jsx)("div",{children:(0,i.jsxs)("nav",{children:[(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("button",{className:"hamburger",onClick:()=>{"hideNav"==e?s("showNav"):s("hideNav")},children:(0,i.jsx)(r.vHB,{})}),(0,i.jsx)("div",{className:"logo",children:(0,i.jsx)(o(),{src:d.Z,className:"mainlogo",alt:"Logo",width:0,height:0,loading:"lazy"})})]}),(0,i.jsxs)("div",{id:e,className:"jsx-f1146e062441e60 navlist",children:[(0,i.jsx)("div",{className:"jsx-f1146e062441e60 navlogo",children:(0,i.jsx)(o(),{src:m.Z,alt:"Logo",width:220,height:100,loading:"lazy",unoptimized:!0})}),(0,i.jsxs)("ul",{className:"jsx-f1146e062441e60",children:[(0,i.jsx)(u(),{href:"/",rel:"follow",children:(0,i.jsx)("li",{className:"jsx-f1146e062441e60",children:"HOME"})}),(0,i.jsx)(u(),{href:"/graphic",rel:"follow",children:(0,i.jsx)("li",{className:"jsx-f1146e062441e60",children:"GRAPHICS DESIGN"})}),(0,i.jsx)(u(),{href:"/website",rel:"follow",children:(0,i.jsx)("li",{className:"jsx-f1146e062441e60",children:"WEB DESIGN"})}),(0,i.jsx)(u(),{href:"/digitalart",rel:"follow",children:(0,i.jsx)("li",{className:"jsx-f1146e062441e60",children:"DIGITAL ART"})}),(0,i.jsx)(u(),{href:"/aiart",rel:"follow",children:(0,i.jsx)("li",{className:"jsx-f1146e062441e60",children:"AI ART"})}),(0,i.jsx)(u(),{href:"/photography",rel:"follow",children:(0,i.jsx)("li",{className:"jsx-f1146e062441e60",children:"PHOTOGRAPHY"})}),(0,i.jsx)(u(),{href:"/about",rel:"follow",children:(0,i.jsx)("li",{className:"jsx-f1146e062441e60",children:"ABOUT"})}),(0,i.jsx)(u(),{href:"/contact",rel:"follow",children:(0,i.jsx)("li",{className:"jsx-f1146e062441e60",children:"CONTACT"})})]}),(0,i.jsx)(n(),{id:"f1146e062441e60",children:"#showNav.jsx-f1146e062441e60{display:block}#hideNav.jsx-f1146e062441e60{display:none}"})]})]})})}},7152:function(e,s,a){"use strict";a.d(s,{Z:function(){return t}});var i=a(5893);a(7294);var l=a(7427),n=a.n(l);function t(e){return(0,i.jsx)(i.Fragment,{children:e.text&&(0,i.jsx)("div",{className:n().modal,children:e.text})})}},2188:function(e,s,a){"use strict";a.r(s);var i=a(5893),l=a(6465),n=a.n(l),t=a(7294),c=a(5152),o=a.n(c),r=a(1163),d=a(9008),m=a.n(d),p=a(3750),h=a(1276),x=a(7152),u=a(7016),b=a.n(u);s.default=o()(()=>Promise.resolve(f),{ssr:!1});let f=()=>{let e=(0,r.useRouter)();(0,t.useEffect)(()=>{let e=document.getElementById("input-select"),s=document.getElementById("graphic-input-div"),a=document.getElementById("web-input-div");e.addEventListener("change",e=>{"graphic"===e.target.value?(s.style.display="block",a.style.display="none"):"web"===e.target.value?(a.style.display="block",s.style.display="none"):(s.style.display="none",a.style.display="none")})});let[s,a]=(0,t.useState)({}),[l,c]=(0,t.useState)(),o=document.referrer;function d(e){let{name:s,value:i}=e.target;a(e=>({...e,[s]:i}))}async function u(e){e.preventDefault();let{name:i,email:l,imagereference:n,subject:t,designtype:o,designfor:r,description:d}=s;i&&l&&o&&r&&d?(await fetch("https://anxious-calf-shoulder-pads.cyclic.app/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:i,email:l,imagereference:n,subject:t,designtype:o,designfor:r,description:d})}),c("Thank you for giving us pleasure with a new project"),a({})):c("fill all the field"),setTimeout(()=>c(),3e3)}return console.log(o),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(m(),{children:[(0,i.jsx)("title",{children:"FRAME STUDIO - CONTACT"}),(0,i.jsx)("meta",{name:"description",content:"Contact with the Frame Studio Team to make design for varities items in matter of Graphic Design, Website Design, Digital Art, Ai Art etc."})]}),(0,i.jsx)(h.Z,{}),(0,i.jsxs)("div",{className:b().mainbody,children:[(0,i.jsxs)("button",{onClick:()=>e.back(),className:b().closebtn,children:[(0,i.jsx)(p.CBx,{className:b().leftarrow})," back"]}),(0,i.jsxs)("div",{className:b().contactbody,children:[(0,i.jsx)("div",{className:b().popupbox,children:(0,i.jsx)(x.Z,{text:l})}),(0,i.jsxs)("div",{className:b().contactform,children:[(0,i.jsxs)("div",{className:b().title,children:["contact.com",(0,i.jsx)("p",{children:"get in touch with us"})]}),(0,i.jsx)("div",{className:b().form,children:(0,i.jsxs)("form",{method:"POST",children:[(0,i.jsxs)("div",{className:b().inputfield,children:[(0,i.jsxs)("label",{className:b().formlabel,children:["Name :",(0,i.jsx)("span",{children:"*"})]}),(0,i.jsx)("input",{className:b().formfield,name:"name",type:"text",value:s.name||"",onChange:d,required:!0})]}),(0,i.jsxs)("div",{className:b().inputfield,children:[(0,i.jsxs)("label",{className:b().formlabel,children:["Email :",(0,i.jsx)("span",{children:"*"})]}),(0,i.jsx)("input",{className:b().formfield,type:"email",name:"email",value:s.email||"",onChange:d,required:!0})]}),(0,i.jsxs)("div",{className:b().inputfield,children:[(0,i.jsx)("label",{className:b().formlabel,children:"Image Reference :"}),(0,i.jsx)("input",{className:b().formfield,type:"text",name:"imagereference",value:s.imagereference||"",onChange:d})]}),(0,i.jsxs)("div",{className:b().inputfield,children:[(0,i.jsxs)("label",{htmlFor:"input-select",className:b().formlabel,children:["Choose design :",(0,i.jsx)("span",{children:"*"})]}),(0,i.jsxs)("select",{className:b().formfield,id:"input-select",name:"designtype",value:s.designtype||"",onChange:d,required:!0,children:[(0,i.jsx)("option",{value:"",children:"Select an option"}),(0,i.jsx)("option",{value:"graphic",children:"Graphic desing"}),(0,i.jsx)("option",{value:"web",children:"web developing"})]})]}),(0,i.jsxs)("div",{id:"graphic-input-div",className:"jsx-1c2eb993e88f8a0 "+(b().inputfield||""),children:[(0,i.jsx)("label",{htmlFor:"graphic-input",className:"jsx-1c2eb993e88f8a0 "+(b().formlabel||""),children:"Graphics Design for : *"}),(0,i.jsxs)("select",{name:"designfor",id:"graphic-input",value:s.designfor||"",onChange:d,className:"jsx-1c2eb993e88f8a0 "+(b().formfield||""),children:[(0,i.jsx)("option",{value:"",className:"jsx-1c2eb993e88f8a0",children:"Select an option"}),(0,i.jsx)("option",{value:"logo",className:"jsx-1c2eb993e88f8a0",children:"Logo Design"}),(0,i.jsx)("option",{value:"Visual identity graphic design",className:"jsx-1c2eb993e88f8a0",children:"Visual identity graphic design"}),(0,i.jsx)("option",{value:"Marketing & advertising graphic design",className:"jsx-1c2eb993e88f8a0",children:"Marketing & advertising graphic design"}),(0,i.jsx)("option",{value:"Publication graphic design",className:"jsx-1c2eb993e88f8a0",children:"Publication graphic design"}),(0,i.jsx)("option",{value:"Packaging graphic design (Branding)",className:"jsx-1c2eb993e88f8a0",children:"Packaging graphic design (Branding)"}),(0,i.jsx)("option",{value:"Motion graphic design",className:"jsx-1c2eb993e88f8a0",children:"Motion graphic design"}),(0,i.jsx)("option",{value:"Environmental graphic design",className:"jsx-1c2eb993e88f8a0",children:"Environmental graphic design"}),(0,i.jsx)("option",{value:"Any other Matter",className:"jsx-1c2eb993e88f8a0",children:"Any other Matter"})]}),(0,i.jsx)(n(),{id:"1c2eb993e88f8a0",children:"#graphic-input-div.jsx-1c2eb993e88f8a0{display:none}"})]}),(0,i.jsxs)("div",{id:"web-input-div",className:"jsx-a49420bca55b7e24 "+(b().inputfield||""),children:[(0,i.jsx)("label",{htmlFor:"web-input",className:"jsx-a49420bca55b7e24 "+(b().formlabel||""),children:"Web Design for : *"}),(0,i.jsxs)("select",{name:"designfor",id:"web-input",value:s.designfor||"",onChange:d,className:"jsx-a49420bca55b7e24 "+(b().formfield||""),children:[(0,i.jsx)("option",{value:"",className:"jsx-a49420bca55b7e24",children:"Select an option"}),(0,i.jsx)("option",{value:"E-commerce Site",className:"jsx-a49420bca55b7e24",children:"E-commerce Site"}),(0,i.jsx)("option",{value:"Business Site",className:"jsx-a49420bca55b7e24",children:"Business Site"}),(0,i.jsx)("option",{value:"Blog Website",className:"jsx-a49420bca55b7e24",children:"Blog Website"}),(0,i.jsx)("option",{value:"Portfolio Site",className:"jsx-a49420bca55b7e24",children:"Portfolio Site"}),(0,i.jsx)("option",{value:"Personal WebSite",className:"jsx-a49420bca55b7e24",children:"Personal WebSite"}),(0,i.jsx)("option",{value:"Event WebSite",className:"jsx-a49420bca55b7e24",children:"Event WebSite"}),(0,i.jsx)("option",{value:"NonProfit Website",className:"jsx-a49420bca55b7e24",children:"NonProfit Website"}),(0,i.jsx)("option",{value:"Informational WebSite",className:"jsx-a49420bca55b7e24",children:"Informational WebSite"}),(0,i.jsx)("option",{value:"Membership WebSite",className:"jsx-a49420bca55b7e24",children:"Membership WebSite"}),(0,i.jsx)("option",{value:"Online Forum",className:"jsx-a49420bca55b7e24",children:"Online Forum"}),(0,i.jsx)("option",{value:"Any Other Matter",className:"jsx-a49420bca55b7e24",children:"Any Other Matter"})]}),(0,i.jsx)(n(),{id:"a49420bca55b7e24",children:"#web-input-div.jsx-a49420bca55b7e24{display:none}"})]}),(0,i.jsxs)("div",{className:b().inputfield,children:[(0,i.jsx)("label",{className:b().formlabel,children:"Describe : *"}),(0,i.jsx)("textarea",{className:b().formfield,name:"description",value:s.description||"",onChange:d,required:!0})]}),(0,i.jsxs)("div",{className:b().formbutton,children:[(0,i.jsx)("input",{className:b().submit,type:"submit",value:"Submit",onClick:u}),(0,i.jsx)("input",{className:b().reset,type:"reset",value:"reset",onClick:()=>{a({})}})]})]})})]})]})]})]})}},7016:function(e){e.exports={mainbody:"contact_mainbody__ljsmg",closebtn:"contact_closebtn__ARXI_",leftarrow:"contact_leftarrow__PnyEc",contactbody:"contact_contactbody__BD99I",contactform:"contact_contactform__kAltP",title:"contact_title__BEhZA",form:"contact_form__rUkgk",inputfield:"contact_inputfield__Jmm_7",formfield:"contact_formfield__0a7d_",formlabel:"contact_formlabel__e3rEB",submit:"contact_submit__l0A7_",reset:"contact_reset__mxc2z",formbutton:"contact_formbutton__4gTSb",top:"contact_top__cMqQ8",popupbox:"contact_popupbox__TOBGR"}},7427:function(e){e.exports={advertisementbody:"popup_advertisementbody__3SFcV",body:"popup_body___kx77",imagebody:"popup_imagebody__rAEAG",closebutton:"popup_closebutton__jJSgX",orderbox:"popup_orderbox__RaOv3",feedbackpopupbody:"popup_feedbackpopupbody__4H16C",feedbacktop:"popup_feedbacktop__Q99dI",image:"popup_image__iCAv_",feedbackbottom:"popup_feedbackbottom__37yHd",feedbackmiddle:"popup_feedbackmiddle__Vfe8M",middle1:"popup_middle1__8rGDE",middle2:"popup_middle2__9BUse",middle3:"popup_middle3__WifQs",modal:"popup_modal__mWa__"}}}]);