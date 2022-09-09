"use strict";(self.webpackChunk_reui_docs=self.webpackChunk_reui_docs||[]).push([[5476],{876:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(t),f=o,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||c;return t?r.createElement(d,a(a({ref:n},l),{},{components:t})):r.createElement(d,a({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2159:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var r=t(7896),o=(t(2784),t(876));const c={},a="IconProvider",i={unversionedId:"context/Icon/index",id:"context/Icon/index",title:"IconProvider",description:"This context wrapper provides icons for various necessary UI elements across the components.",source:"@site/../components/src/context/Icon/index.mdx",sourceDirName:"context/Icon",slug:"/context/Icon/",permalink:"/components/context/Icon/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"components",previous:{title:"Context",permalink:"/components/context/"},next:{title:"SnackProvider",permalink:"/components/context/Snack/"}},p={},s=[],l={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"iconprovider"},"IconProvider"),(0,o.kt)("p",null,"This context wrapper provides icons for various necessary UI elements across the components."),(0,o.kt)("p",null,"Icons should all be JSX components that return ",(0,o.kt)("inlineCode",{parentName:"p"},"<svg />")," elements and accept all SVG props, eg: ",(0,o.kt)("inlineCode",{parentName:"p"},"React.ComponentType<React.ComponentProps<'svg'>>"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IconProvider } from '@reui/components';\nimport { CheckIcon } from '@heroicons/react/24/solid';\n\nexport function App() {\n    return <IconProvider value={{ CheckIcon }}>{/* rest of the app */}</IconProvider>;\n}\n")))}u.isMDXComponent=!0}}]);