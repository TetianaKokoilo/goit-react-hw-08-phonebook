(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[100],{2436:function(e,r,t){"use strict";t.d(r,{B:function(){return v}});var n=t(9439),a=t(4554),o=t(1889),i=t(6172),u=t(6151),c=t(890),s=t(2791),l=t(9434),d=t(1087),f=t(9273),m=t(184),v=function(){var e=(0,l.I0)(),r=(0,s.useState)(""),t=(0,n.Z)(r,2),v=t[0],p=t[1],h=(0,s.useState)(""),Z=(0,n.Z)(h,2),g=Z[0],x=Z[1],b=(0,s.useState)(""),w=(0,n.Z)(b,2),j=w[0],y=w[1],S=function(e){var r=e.target,t=r.name,n=r.value;switch(t){case"name":return p(n);case"email":return x(n);case"password":return y(n);default:return}};return(0,m.jsxs)(a.Z,{component:"form",noValidate:!0,onSubmit:function(r){r.preventDefault(),e((0,f.z2)({name:v,email:g,password:j})),p(""),x(""),y("")},sx:{mt:3},children:[(0,m.jsxs)(o.ZP,{container:!0,spacing:2,children:[(0,m.jsx)(o.ZP,{item:!0,xs:12,children:(0,m.jsx)(i.Z,{autoComplete:"given-name",name:"name",required:!0,fullWidth:!0,id:"firstName",label:"Username",autoFocus:!0,type:"text",value:v,onChange:S})}),(0,m.jsx)(o.ZP,{item:!0,xs:12,children:(0,m.jsx)(i.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",type:"email",autoComplete:"email",value:g,onChange:S})}),(0,m.jsx)(o.ZP,{item:!0,xs:12,children:(0,m.jsx)(i.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password",value:j,onChange:S})})]}),(0,m.jsx)(u.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),(0,m.jsxs)(c.Z,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",(0,m.jsx)(d.rU,{color:"inherit",href:"#",children:"Tetiana Kokoilo"})," ",(new Date).getFullYear(),"."]})]})}},8100:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return _}});var n=t(7107),a=t(4507),o=t(9164),i=t(4554),u=t(9439),c=t(3366),s=t(7462),l=t(2791),d=t(8182),f=t(4419),m=t(6934),v=t(1402),p=t(9201),h=t(184),Z=(0,p.Z)((0,h.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),g=t(5878),x=t(1217);function b(e){return(0,x.Z)("MuiAvatar",e)}(0,g.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var w=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],j=(0,m.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})((function(e){var r=e.theme,t=e.ownerState;return(0,s.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(r.vars||r).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,s.Z)({color:(r.vars||r).palette.background.default},r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]}))})),y=(0,m.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,r){return r.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),S=(0,m.ZP)(Z,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,r){return r.fallback}})({width:"75%",height:"75%"});var k=l.forwardRef((function(e,r){var t=(0,v.Z)({props:e,name:"MuiAvatar"}),n=t.alt,a=t.children,o=t.className,i=t.component,m=void 0===i?"div":i,p=t.imgProps,Z=t.sizes,g=t.src,x=t.srcSet,k=t.variant,P=void 0===k?"circular":k,C=(0,c.Z)(t,w),M=null,_=function(e){var r=e.crossOrigin,t=e.referrerPolicy,n=e.src,a=e.srcSet,o=l.useState(!1),i=(0,u.Z)(o,2),c=i[0],s=i[1];return l.useEffect((function(){if(n||a){s(!1);var e=!0,o=new Image;return o.onload=function(){e&&s("loaded")},o.onerror=function(){e&&s("error")},o.crossOrigin=r,o.referrerPolicy=t,o.src=n,a&&(o.srcset=a),function(){e=!1}}}),[r,t,n,a]),c}((0,s.Z)({},p,{src:g,srcSet:x})),z=g||x,R=z&&"error"!==_,D=(0,s.Z)({},t,{colorDefault:!R,component:m,variant:P}),F=function(e){var r=e.classes,t={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,f.Z)(t,b,r)}(D);return M=R?(0,h.jsx)(y,(0,s.Z)({alt:n,src:g,srcSet:x,sizes:Z,ownerState:D,className:F.img},p)):null!=a?a:z&&n?n[0]:(0,h.jsx)(S,{ownerState:D,className:F.fallback}),(0,h.jsx)(j,(0,s.Z)({as:m,ownerState:D,className:(0,d.Z)(F.root,o),ref:r},C,{children:M}))})),P=t(890),C=t(2436),M=t(403),_=function(){var e=(0,n.Z)();return(0,h.jsx)(a.Z,{theme:e,children:(0,h.jsx)(o.Z,{component:"main",maxWidth:"xs",children:(0,h.jsxs)(i.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,h.jsx)(k,{sx:{m:1,bgcolor:"secondary.main"},children:(0,h.jsx)(M.Z,{})}),(0,h.jsx)(P.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,h.jsx)(C.B,{})]})})})}},403:function(e,r,t){"use strict";var n=t(4836);r.Z=void 0;var a=n(t(5649)),o=t(184),i=(0,a.default)((0,o.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");r.Z=i},5649:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=t(4454)},4454:function(e,r,t){"use strict";t.r(r),t.d(r,{capitalize:function(){return a.Z},createChainedFunction:function(){return o},createSvgIcon:function(){return i.Z},debounce:function(){return u.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return s.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return f},setRef:function(){return m},unstable_ClassNameGenerator:function(){return w},unstable_useEnhancedEffect:function(){return v.Z},unstable_useId:function(){return p},unsupportedProp:function(){return h},useControlled:function(){return Z.Z},useEventCallback:function(){return g.Z},useForkRef:function(){return x.Z},useIsFocusVisible:function(){return b.Z}});var n=t(5902),a=t(4036),o=t(8949).Z,i=t(9201),u=t(3199);var c=function(e,r){return function(){return null}},s=t(9103),l=t(8301),d=t(7602);t(7462);var f=function(e,r){return function(){return null}},m=t(2971).Z,v=t(162),p=t(6248).Z;var h=function(e,r,t,n,a){return null},Z=t(8744),g=t(9683),x=t(2071),b=t(3031),w={configure:function(e){n.Z.configure(e)}}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=100.aa50ffef.chunk.js.map