"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8550],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>y,useMDXComponents:()=>c,withMDXComponents:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),m=function(e){return function(t){var r=c(t.components);return o.createElement(e,a({},t,{components:r}))}},c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,d=m["".concat(i,".").concat(u)]||m[u]||f[u]||a;return r?o.createElement(d,s(s({ref:t},p),{},{components:r})):o.createElement(d,s({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},90902:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={sidebar_position:70,title:"Request MPS"},i=void 0,s={unversionedId:"ARK/mps/request_mps",id:"ARK/mps/request_mps",title:"Request MPS",description:"Please follow these steps to request MPS processing on your VRS files:",source:"@site/docs/ARK/mps/request_mps.mdx",sourceDirName:"ARK/mps",slug:"/ARK/mps/request_mps",permalink:"/projectaria_tools/docs/ARK/mps/request_mps",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/mps/request_mps.mdx",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70,title:"Request MPS"},sidebar:"tutorialSidebar",previous:{title:"Aria Machine Perception Services (MPS)",permalink:"/projectaria_tools/docs/ARK/mps/"},next:{title:"ARK Release Notes",permalink:"/projectaria_tools/docs/ARK/sw_release_notes"}},l={},p=[{value:"Status Types",id:"status-types",level:2}],m={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,n.mdx)(c,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,"Please follow these steps to request MPS processing on your VRS files:"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},"Go to the ",(0,n.mdx)("strong",{parentName:"li"},"Recordings")," section of the ",(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/desktop_companion_app"},"Desktop App")," then click on ",(0,n.mdx)("strong",{parentName:"li"},"VRS Tools"),"."),(0,n.mdx)("li",{parentName:"ol"},"Select ",(0,n.mdx)("strong",{parentName:"li"},"Request MPS")," in the Recordings toolbar."),(0,n.mdx)("li",{parentName:"ol"},"You will then need to select the VRS file from the native file explorer."),(0,n.mdx)("li",{parentName:"ol"},"You will then have the option to generate Trajectory (with online calibration, and optional point cloud), Eye Tracking or both."),(0,n.mdx)("li",{parentName:"ol"},"Once the MPS services are selected, click on ",(0,n.mdx)("strong",{parentName:"li"},"Upload"),"."),(0,n.mdx)("li",{parentName:"ol"},"Your file's progress and the downloadable MPS outputs will then be visible under Remote Uploads."),(0,n.mdx)("li",{parentName:"ol"},"It may take several minutes for your file to show in the Uploads tab, especially if it is large.")),(0,n.mdx)("p",null,"Once your data has been successfully processed, you can download the derived data zip file, from the ",(0,n.mdx)("strong",{parentName:"p"},"Recordings")," toolbar. Please refer to the ",(0,n.mdx)("a",{parentName:"p",href:"/docs/data_utilities/core_code_snippets/mps#load-mps-output"},"MPS Loader APIs")," on how to load the output in Python/C++ and ",(0,n.mdx)("a",{parentName:"p",href:"/docs/data_utilities/visualization_guide#mps-static-scene-visualizer"},"visualization guide")," on how to run the rich visualization tools to visualize all the MPS outputs."),(0,n.mdx)("h2",{id:"status-types"},"Status Types"),(0,n.mdx)("p",null,"How long it takes for a file to progress from one state to the next will depend on how big the file is and how many other requests are being processed at that time."),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"Unrequested")," : This type of derived data was not requested"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"Waiting")," : MPS request has been received and is in the queue for processing"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"Processing")," : This data is currently being processed"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"Complete")," : Data Processing is Complete, you can now download your files"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"Error"),":",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"VRS file did not have the data required for processing, please use a ",(0,n.mdx)("a",{parentName:"li",href:"/docs/tech_spec/#recording-profiles"},"Supported Recording Profile"),"."),(0,n.mdx)("li",{parentName:"ul"},"An error occurred while processing data with a supported recording profile.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"There are many variables that can impact MPS output. For Trajectory data you can download the summary.json file to get more information. See ",(0,n.mdx)("a",{parentName:"li",href:"/docs/data_formats/mps/mps_summary"},"MPS Trajectory Documentation")," for more information."),(0,n.mdx)("li",{parentName:"ul"},"If you've checked your recording profile and that is not the issue and you are unable to debug the issue using summary.json, please email",(0,n.mdx)("a",{parentName:"li",href:"mailto:AriaOps@meta.com"},"AriaOps@meta.com"),"with a bug report. Make sure you include the Transaction ID in your report and summary.json if you have one. Screenshots and screen recordings are always welcome.")))))))}u.isMDXComponent=!0}}]);