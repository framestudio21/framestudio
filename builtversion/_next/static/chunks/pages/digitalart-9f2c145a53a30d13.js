(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[972],{9579:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/digitalart",function(){return n(7592)}])},7447:function(e,t){"use strict";t.Z={src:"/_next/static/media/frame-logo.e9257f5e.svg",height:108,width:527,blurWidth:0,blurHeight:0}},4600:function(e,t){"use strict";t.Z={src:"/_next/static/media/frame-studio-2.327f52d3.svg",height:211,width:527,blurWidth:0,blurHeight:0}},1276:function(e,t,n){"use strict";var i=n(5893),r=n(6465),s=n.n(r),a=n(7294),l=n(5675),o=n.n(l),c=n(2585),h=n(7447),u=n(4600),d=n(5152),m=n.n(d),f=n(1664),x=n.n(f);t.Z=m()(()=>Promise.resolve(g),{ssr:!1});let g=()=>{let[e,t]=(0,a.useState)("hideNav");return(0,i.jsx)("div",{children:(0,i.jsxs)("nav",{children:[(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("button",{className:"hamburger",onClick:()=>{"hideNav"==e?t("showNav"):t("hideNav")},children:(0,i.jsx)(c.vHB,{})}),(0,i.jsx)("div",{className:"logo",children:(0,i.jsx)(o(),{src:h.Z,className:"mainlogo",alt:"Logo",width:0,height:0,loading:"lazy"})})]}),(0,i.jsxs)("div",{id:e,className:"jsx-f1146e062441e60 navlist",children:[(0,i.jsx)("div",{className:"jsx-f1146e062441e60 navlogo",children:(0,i.jsx)(o(),{src:u.Z,alt:"Logo",width:220,height:100,loading:"lazy",unoptimized:!0})}),(0,i.jsxs)("ul",{className:"jsx-f1146e062441e60",children:[(0,i.jsx)(x(),{href:"/",rel:"follow",children:(0,i.jsx)("li",{className:"jsx-f1146e062441e60",children:"HOME"})}),(0,i.jsx)(x(),{href:"/graphic",rel:"follow",children:(0,i.jsx)("li",{className:"jsx-f1146e062441e60",children:"GRAPHICS DESIGN"})}),(0,i.jsx)(x(),{href:"/website",rel:"follow",children:(0,i.jsx)("li",{className:"jsx-f1146e062441e60",children:"WEB DESIGN"})}),(0,i.jsx)(x(),{href:"/digitalart",rel:"follow",children:(0,i.jsx)("li",{className:"jsx-f1146e062441e60",children:"DIGITAL ART"})}),(0,i.jsx)(x(),{href:"/aiart",rel:"follow",children:(0,i.jsx)("li",{className:"jsx-f1146e062441e60",children:"AI ART"})}),(0,i.jsx)(x(),{href:"/photography",rel:"follow",children:(0,i.jsx)("li",{className:"jsx-f1146e062441e60",children:"PHOTOGRAPHY"})}),(0,i.jsx)(x(),{href:"/about",rel:"follow",children:(0,i.jsx)("li",{className:"jsx-f1146e062441e60",children:"ABOUT"})}),(0,i.jsx)(x(),{href:"/contact",rel:"follow",children:(0,i.jsx)("li",{className:"jsx-f1146e062441e60",children:"CONTACT"})})]}),(0,i.jsx)(s(),{id:"f1146e062441e60",children:"#showNav.jsx-f1146e062441e60{display:block}#hideNav.jsx-f1146e062441e60{display:none}"})]})]})})}},7592:function(e,t,n){"use strict";n.r(t);var i=n(5893),r=n(1276),s=n(5152),a=n.n(s),l=n(7294),o=n(5675),c=n.n(o),h=n(9008),u=n.n(h),d=n(2337),m=n(1542),f=n.n(m),x=n(3750);t.default=a()(()=>Promise.resolve(g),{ssr:!1});let g=()=>{let[e,t]=(0,l.useState)({}),n=e=>{t(e)},[s,a]=(0,l.useState)([]);(0,l.useEffect)(()=>{fetch("https://anxious-calf-shoulder-pads.cyclic.app/digitalart").then(e=>e.json()).then(e=>a(e)).catch(()=>router.push("/404"))},[]);let o=()=>{t({})};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(u(),{children:[(0,i.jsx)("title",{children:"FRAME STUDIO - DigitlaArt"}),(0,i.jsx)("meta",{name:"description",content:"Varities of Digital Art Designs and order item."})]}),(0,i.jsx)(r.Z,{}),(0,i.jsxs)("div",{className:f().masonrymainbody,children:[e.thumbnail&&(0,i.jsxs)("div",{className:f().imagedisplaydiv,onClick:o,children:[(0,i.jsxs)("button",{name:"close",onClick:o,className:f().closebtn,children:[(0,i.jsx)(x.CBx,{className:f().leftarrow})," close"]}),(0,i.jsx)(c(),{src:e.thumbnail,className:f().image,width:e.width,height:e.height,alt:e.name}),e.author&&(0,i.jsx)("p",{className:f().imageauthor,children:item.author})]}),(0,i.jsx)(d.G,{columnsCountBreakPoints:{350:1,750:2,900:3},children:(0,i.jsx)(d.Z,{columnsCount:3,children:s.map(e=>(0,i.jsx)("div",{children:e.thumbnail&&(0,i.jsx)(c(),{src:e.thumbnail,alt:e.name,className:f().digitalartimage,width:0,height:e.height,onClick:()=>n(e),loading:"lazy",unoptimized:!0})},e._id))})})]})]})}},1542:function(e){e.exports={mainbody:"home_mainbody__cX9KS",image:"home_image__HmO_g",imagebody:"home_imagebody__heZ9A",text:"home_text__nRmWz",masonrymainbody:"home_masonrymainbody__x8uCb",imagedisplaydiv:"home_imagedisplaydiv__ukEqk",imageauthor:"home_imageauthor__pMmgG",closebtn:"home_closebtn__9BIO1",leftarrow:"home_leftarrow__FRMkS",photographyimage:"home_photographyimage__oQxmh",digitalartimage:"home_digitalartimage__53Tzq",aiartimage:"home_aiartimage__Spm9k"}},2337:function(e,t,n){"use strict";n.d(t,{G:function(){return u},Z:function(){return d}});var i=n(7294);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var a=function(e){function t(){return e.apply(this,arguments)||this}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,s(t,e);var n=t.prototype;return n.getColumns=function(){var e=this.props,t=e.children,n=e.columnsCount,r=Array.from({length:n},function(){return[]});return i.Children.forEach(t,function(e,t){e&&i.isValidElement(e)&&r[t%n].push(e)}),r},n.renderColumns=function(){var e=this.props.gutter;return this.getColumns().map(function(t,n){return i.createElement("div",{key:n,style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,gap:e}},t.map(function(e){return e}))})},n.render=function(){var e=this.props,t=e.gutter,n=e.className,s=e.style;return i.createElement("div",{style:r({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%",gap:t},s),className:n},this.renderColumns())},t}(i.Component);a.propTypes={},a.defaultProps={columnsCount:3,gutter:"0",className:null,style:{}};var l="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,o=function(){var e=(0,i.useState)(!1),t=e[0],n=e[1];return l(function(){n(!0)},[]),t},c=function(){var e=o(),t=(0,i.useState)(0),n=t[0],r=t[1],s=(0,i.useCallback)(function(){e&&r(window.innerWidth)},[e]);return l(function(){if(e)return window.addEventListener("resize",s),s(),function(){return window.removeEventListener("resize",s)}},[e,s]),n},h=function(e){var t=e.columnsCountBreakPoints,n=void 0===t?{350:1,750:2,900:3}:t,r=e.children,s=e.className,a=e.style,l=c(),o=(0,i.useMemo)(function(){var e=Object.keys(n).sort(function(e,t){return e-t}),t=e.length>0?n[e[0]]:1;return e.forEach(function(e){e<l&&(t=n[e])}),t},[l,n]);return i.createElement("div",{className:void 0===s?null:s,style:void 0===a?null:a},i.Children.map(r,function(e,t){return i.cloneElement(e,{key:t,columnsCount:o})}))};h.propTypes={};var u=h,d=a}},function(e){e.O(0,[980,13,462,523,774,888,179],function(){return e(e.s=9579)}),_N_E=e.O()}]);