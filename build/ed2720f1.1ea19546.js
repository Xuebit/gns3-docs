(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{211:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(9),o=(n(0),n(222)),i={id:"cisco-asa",title:"Cisco ASA",sidebar_label:"Cisco ASA"},c={id:"how-to/cisco-asa",isDocsHomePage:!1,title:"Cisco ASA",description:"ASA 8",source:"@site/docs/how-to/cisco-asa.md",permalink:"/gns3-docs/docs/how-to/cisco-asa",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/how-to/cisco-asa.md",sidebar_label:"Cisco ASA",sidebar:"someSidebar",previous:{title:"How to debug Web UI Guide",permalink:"/gns3-docs/docs/contribute/how-to-debug-web-ui-guide"},next:{title:"Importing vMX and vQFX into GNS3",permalink:"/gns3-docs/docs/how-to/importing-vmx-and-vqfx-into-gns3"}},s=[{value:"ASA 8",id:"asa-8",children:[]},{value:"ASAV",id:"asav",children:[{value:"ASAv with Qemu (RECOMMENDED)",id:"asav-with-qemu-recommended",children:[]},{value:"ASAv with VMware",id:"asav-with-vmware",children:[]}]}],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"asa-8"},"ASA 8"),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"ASA 8 IS NOT SUPPORTED"))),Object(o.b)("p",null,"You may find a lot of tutorials on the Internet explaining how to extract ASA 8 images from physical hardware devices and use them with GNS3. This method was the only way to get an ASA image in the past, but the results are random; and getting worse with modern computers and operating systems. For example Windows 10 has multiple issues running ASA 8."),Object(o.b)("p",null,"The problem with this way of doing things. is that you are using an image made for a bespoke hardware device from Cisco. Qemu can emulate part of the hardware, but some components specific to a physical ASA are missing. For example, the hardware clock on the hardware ASA appliance is missing. The ASA kernel can sometimes replace it, depending on the speed of your computer, but results will vary."),Object(o.b)("p",null,"You will also encounter issues when running multiple ASA instances simultaneously."),Object(o.b)("h2",{id:"asav"},"ASAV"),Object(o.b)("p",null,"ASAv is a version of ASA made by Cisco for using ASA, and was created with the express goal of it being run in virtualized environments. This the solution supported by Cisco and the GNS3 team."),Object(o.b)("h3",{id:"asav-with-qemu-recommended"},"ASAv with Qemu (RECOMMENDED)"),Object(o.b)("p",null,"Use the GNS3 appliance you will find all the instructions ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.gns3.com/appliances/cisco-asav.html"}),"here")," CHECKLINK."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Video: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=GM_VmmkCEag"}),"https://www.youtube.com/watch?v=GM_VmmkCEag"))),Object(o.b)("h3",{id:"asav-with-vmware"},"ASAv with VMware"),Object(o.b)("p",null,"You can run the ASAv OVA as a VMware VM. This will work, but is not recommended because it is harder to share the VM between projects or other GNS3 users."))}u.isMDXComponent=!0},222:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?r.a.createElement(b,c(c({ref:t},l),{},{components:n})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);