"use strict";(self.webpackChunk_reui_docs=self.webpackChunk_reui_docs||[]).push([[1614],{7393:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>g});var r=t(7896),o=(t(2784),t(876)),a=t(9327),i=t(6187);const s={},c="TextField",l={unversionedId:"components/TextField/index",id:"components/TextField/index",title:"TextField",description:"",source:"@site/../components/src/components/TextField/index.mdx",sourceDirName:"components/TextField",slug:"/components/TextField/",permalink:"/components/components/TextField/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"components",previous:{title:"Switch",permalink:"/components/components/Switch/"},next:{title:"Context",permalink:"/components/context/"}},d={},g=[],w={toc:g};function p(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,r.Z)({},w,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"textfield"},"TextField"),(0,o.kt)(a.X,{mdxType:"Canvas"},(0,o.kt)("div",{className:"flex flex-col gap-4"},(0,o.kt)(i.n,{label:"This is a text field",mdxType:"TextField"}),(0,o.kt)(i.n,{label:"This is is required",isRequired:!0,mdxType:"TextField"}),(0,o.kt)(i.n,{label:"This is has a placeholder",placeholder:"I am a placeholder",mdxType:"TextField"}),(0,o.kt)(i.n,{label:"This is a text field",description:"With a helper/description because forms are confusing.",mdxType:"TextField"}),(0,o.kt)(i.n,{label:"This is a text field",errorMessage:"This field has an error that needs fixing.",mdxType:"TextField"}))))}p.isMDXComponent=!0},8347:(n,e,t)=>{t.d(e,{z:()=>c});var r=t(7896),o=t(2784),a=t(9627),i=t(6277);const s={primary:function(n){let{color:e="primary",...t}=n;const s=o.useRef(null),c=t.href?"a":"div",{buttonProps:l}=(0,a.U)({...t,type:"button",elementType:c},s);return o.createElement(c,(0,r.Z)({},l,{ref:s,className:(0,i.Z)("inline-flex cursor-pointer flex-row items-center gap-2 space-x-1 whitespace-nowrap rounded px-4 py-2 text-lg font-bold text-white shadow outline-none transition hover:shadow-md focus:shadow-xl focus:outline-none focus:ring-4 focus:ring-opacity-50",t.isDisabled?"cursor-not-allowed bg-gray-400":{"bg-primary-500 ring-primary-500 focus:bg-primary-400 focus:ring-primary-500 active:bg-primary-600":"primary"===e,"bg-red-500 ring-red-500 focus:bg-red-400 focus:ring-red-500 active:bg-red-600":"red"===e,"bg-green-500 ring-green-500 focus:bg-green-400 focus:ring-green-500 active:bg-green-600":"green"===e,"bg-gray-500 ring-gray-500 focus:bg-gray-400 focus:ring-primary-500 active:bg-gray-600":"gray"===e})}),t.children)},secondary:function(n){let{color:e="primary",...t}=n;const s=o.useRef(null),c=t.href?"a":"div",{buttonProps:l}=(0,a.U)({...t,type:"button",elementType:c},s);return o.createElement(c,(0,r.Z)({},l,{ref:s,className:(0,i.Z)("inline-flex cursor-pointer flex-row items-baseline gap-2 space-x-1 whitespace-nowrap rounded px-4 py-2 text-lg font-bold outline-none transition focus:outline-none focus:ring-4 focus:ring-opacity-50",t.isDisabled?"cursor-not-allowed border-2 border-gray-500 text-gray-500":{"border-2 border-primary-500 text-primary-500 hover:bg-primary-500/30 focus:ring-primary-500 active:bg-primary-500/30":"primary"===e,"border-2 border-red-500 text-red-500 hover:bg-red-500/30\tfocus:ring-red-500 active:bg-red-500/30":"red"===e,"border-2 border-green-500 text-green-500 hover:bg-green-500/30 focus:ring-green-500 active:bg-green-500/30":"green"===e,"border-2 border-gray-500 text-gray-500 hover:bg-gray-500/30 focus:ring-primary-500 active:bg-gray-500/30":"gray"===e})}),t.children)},plain:function(n){let{color:e="primary",...t}=n;const s=o.useRef(null),c=t.href?"a":"div",{buttonProps:l}=(0,a.U)({...t,type:"button",elementType:c},s);return o.createElement(c,(0,r.Z)({},l,{ref:s,className:(0,i.Z)("inline-flex cursor-pointer flex-row items-center gap-2 space-x-1 whitespace-nowrap rounded px-4 py-2 text-lg font-bold outline-none transition focus:outline-none focus:ring-4 focus:ring-opacity-50",t.isDisabled?"cursor-not-allowed text-gray-500":{"text-primary-500 hover:bg-primary-500/30 focus:ring-primary-500 active:bg-primary-500/30":"primary"===e,"text-red-500 hover:bg-red-500/30 focus:ring-red-500 active:bg-red-500/30":"red"===e,"text-green-500 hover:bg-green-500/30 focus:ring-green-500 active:bg-green-500/30":"green"===e,"text-gray-500 hover:bg-gray-500/30 focus:ring-primary-500 active:bg-gray-500/30":"gray"===e})}),t.children)}};function c(n){let{buttonStyle:e="primary",...t}=n;const r=s[e];return o.createElement(r,t)}},8846:(n,e,t)=>{t.d(e,{J:()=>u,C:()=>b});var r=t(7896),o=t(2784),a=t(6277),i=t(9318),s=t(4036),c=t(3300),l=t(4323),d=t(7211),g=t(5865),w=t(8391);const p=o.createContext(null);function b(n){let{children:e,...t}=n;const a=(0,i.$)(t),{groupProps:s,labelProps:l}=(0,c.u6)(t,a);return o.createElement("div",(0,r.Z)({},s,{className:"flex flex-col gap-2"}),o.createElement("span",l,t.label),o.createElement(p.Provider,{value:a},e))}function u(n){const e=o.useContext(p),t=(0,s.l)(n),{CheckIcon:i}=(0,w.y)(),b=o.useRef(null),{inputProps:u}=e?(0,c.a8)(n,e,b):(0,c.O)(n,t,b),{isFocusVisible:f,focusProps:m}=(0,l.Fx)(),h=(0,d.Me)(),y=(0,d.Me)(),x=(null==e?void 0:e.isDisabled)||n.isDisabled,v=e?e.isSelected(n.value):t.isSelected,{errorMessage:k,description:E}=n;return o.createElement("div",{className:"w-full"},o.createElement("label",{className:"flex w-full cursor-pointer items-center justify-center gap-2"},o.createElement(g.T,null,o.createElement("input",(0,r.Z)({},(0,d.dG)(u,m),{"aria-invalid":Boolean(k),"aria-describedby":k||E?`${k?h:""} ${E?y:""}`:void 0,className:"absolute left-48",ref:b}))),o.createElement("div",{className:(0,a.Z)("flex h-4 w-4 rounded-sm border-2 text-white transition-colors duration-150",f&&"ring-4 ring-primary-500 ring-opacity-50",x&&"border-gray-200 bg-gray-100",v?"border-primary-500 bg-primary-500 text-white":!x&&"border-gray-300 bg-white")},v?o.createElement(i,null):null),o.createElement("div",{className:(0,a.Z)("inline-flex flex-grow leading-3",x&&"text-gray-600")},n.children,n.isRequired?o.createElement("span",{"aria-hidden":"true",className:"text-red-600"},"*"):null)),E?o.createElement("div",{id:y,className:"pl-6 pt-1 text-xs"},E):null,k?o.createElement("div",{id:h,className:"pl-6 pt-1 text-sm text-red-600"},k):null)}},3142:(n,e,t)=>{t.d(e,{Y:()=>w,E:()=>g});var r=t(7896),o=t(2784),a=t(6277),i=t(9878),s=t(2489),c=t(4323),l=t(5865);const d=o.createContext(null);function g(n){let{children:e,...t}=n;const a=(0,i.w)(t),{radioGroupProps:c,labelProps:l}=(0,s.a)(t,a);return o.createElement("div",(0,r.Z)({},c,{className:"flex flex-col gap-2"}),o.createElement("span",l,t.label),o.createElement(d.Provider,{value:a},e))}function w(n){const e=o.useContext(d),t=o.useRef(null),{inputProps:i,isSelected:g}=(0,s.x)(n,e,t),{isFocusVisible:w,focusProps:p}=(0,c.Fx)();return o.createElement("label",{className:"flex w-full cursor-pointer items-center gap-2"},o.createElement("div",{className:"self-end"},o.createElement(l.T,null,o.createElement("input",(0,r.Z)({},i,p,{className:"absolute left-48",ref:t}))),o.createElement("div",{className:(0,a.Z)("flex h-4 w-4 items-center justify-center rounded-full border-2 transition-colors duration-150",w&&"ring-4 ring-primary-500 ring-opacity-50",g?"border-primary-500 bg-primary-500":"border-gray-300 bg-white shadow-inner")},g?o.createElement("div",{className:"h-1 w-1 rounded-full bg-white"}):null)),o.createElement("div",{className:"inline-flex flex-grow leading-3"},n.children))}},6187:(n,e,t)=>{t.d(e,{n:()=>c});var r=t(7896),o=t(2784),a=t(1486),i=t(1477),s=t(6277);function c(n){let{leadingIcon:e,trailingIcon:t,...c}=n;const l=o.useRef(null),{labelProps:d,inputProps:g,descriptionProps:w,errorMessageProps:p}=(0,a.E)({...c,onChange:function(n){m(!!n),c.onChange&&c.onChange(n)}},l),[b,u]=o.useState(!1),[f,m]=o.useState(!1),{focusProps:h}=(0,i.KK)({onFocus(){u(!0)},onBlur(){u(!1)}});return o.createElement("div",{className:"w-full"},o.createElement("div",{className:(0,s.Z)("flex h-14 items-center rounded border-2 border-gray-200 bg-white py-2 px-4",b&&"ring-4 ring-primary-500 ring-opacity-50",c.isDisabled&&"cursor-not-allowed opacity-70")},o.createElement("label",(0,r.Z)({},d,{className:"flex grow items-center space-x-2"}),e?o.createElement("div",{"aria-hidden":!0,className:"h-full w-10"},o.createElement(e,null)):null,o.createElement("div",{className:"relative flex grow items-center justify-items-stretch"},o.createElement("input",(0,r.Z)({},g,h,{ref:l,className:"mt-4 h-8 grow bg-transparent font-normal focus:outline-none focus:ring-0"})),o.createElement("div",{className:(0,s.Z)("absolute top-3 inline-flex transform gap-1 rounded bg-white transition-[font-size,color,transform] duration-100 ease-in-out",(b||f)&&"-translate-y-2 text-xs font-medium text-primary-700")},c.label,c.isRequired?o.createElement("span",{"aria-hidden":!0,className:"text-red-600"},"*"):null)),t?o.createElement("div",{"aria-hidden":!0,className:"h-10 w-10"},o.createElement(t,null)):null)),c.description?o.createElement("div",(0,r.Z)({},w,{className:"pl-3 pt-1 text-xs"}),c.description):null,c.errorMessage?o.createElement("div",(0,r.Z)({},p,{className:"pl-3 pt-1 text-sm text-red-600"}),c.errorMessage):null)}},8391:(n,e,t)=>{t.d(e,{j:()=>a,y:()=>i});var r=t(2784);const o=r.createContext({CheckIcon:function(){return r.createElement("svg",null)}}),a=o.Provider;function i(){return r.useContext(o)}},4397:(n,e,t)=>{t.d(e,{jS:()=>g.j,rs:()=>d});t(8347),t(8846),t(3142);var r=t(7896),o=t(2784),a=t(6277),i=t(7494),s=t(4323),c=t(5865),l=t(4036);function d(n){let{labelPosition:e="after",...t}=n;const d=o.useRef(null),g=(0,l.l)(t),{inputProps:w}=(0,i.h)(t,g,d),{focusProps:p,isFocusVisible:b}=(0,s.Fx)();return o.createElement("label",{className:"flex w-full cursor-pointer items-center gap-2"},o.createElement(c.T,null,o.createElement("input",(0,r.Z)({},w,p,{ref:d}))),t.children&&"before"===e?o.createElement("div",{className:"inline-flex flex-grow"},t.children):null,o.createElement("div",{className:"relative mr-1 h-5 w-8 self-center"},o.createElement("div",{className:(0,a.Z)("absolute top-1 h-3 w-full rounded-full shadow-inner",g.isSelected?"bg-primary-300":"bg-gray-300")}),o.createElement("div",{className:(0,a.Z)("absolute inset-y-0 left-0 h-5 w-5 rounded-full shadow-md ring-opacity-50 transition-all duration-150",b&&"ring-4 ring-primary-500",g.isSelected?"translate-x-full bg-primary-600":"-translate-x-2 bg-white")})),t.children&&"after"===e?o.createElement("div",{className:"inline-flex flex-grow leading-3"},t.children):null)}t(6187);var g=t(8391)},9327:(n,e,t)=>{t.d(e,{X:()=>l});var r=t(2784),o=t(6277),a=t(1831);var i=t(4397),s=t(4396),c=t(361);function l(n){let{children:e}=n;const{colorMode:t}=(0,c.I)();return r.createElement(a.ZP.div,null,r.createElement("div",{className:(0,o.Z)("dark"===t&&"dark")},r.createElement(i.jS,{value:{CheckIcon:s.Z}},r.createElement("div",{className:(0,o.Z)("rounded-md border border-gray-200 bg-white p-6 shadow-inner dark:bg-gray-900")},e))),r.createElement("style",null,'/*\n! tailwindcss v3.1.8 | MIT License | https://tailwindcss.com\n*/\n\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  /* 1 */\n  border-width: 0;\n  /* 2 */\n  border-style: solid;\n  /* 2 */\n  border-color: #d9dbdf;\n  /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  /* 3 */\n  tab-size: 4;\n  /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0;\n  /* 1 */\n  line-height: inherit;\n  /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  border-top-width: 1px;\n  /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0;\n  /* 1 */\n  border-color: inherit;\n  /* 2 */\n  border-collapse: collapse;\n  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  font-weight: inherit;\n  /* 1 */\n  line-height: inherit;\n  /* 1 */\n  color: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  padding: 0;\n  /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button;\n  /* 1 */\n  background-color: transparent;\n  /* 2 */\n  background-image: none;\n  /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #8f959f;\n  /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  /* 1 */\n  vertical-align: middle;\n  /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(33 115 230 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(33 115 230 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(33 115 230 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.relative {\n  position: relative;\n}\n\n.inset-y-0 {\n  top: 0px;\n  bottom: 0px;\n}\n\n.left-48 {\n  left: 12rem;\n}\n\n.top-1 {\n  top: 0.25rem;\n}\n\n.left-0 {\n  left: 0px;\n}\n\n.top-3 {\n  top: 0.75rem;\n}\n\n.mr-1 {\n  margin-right: 0.25rem;\n}\n\n.mt-4 {\n  margin-top: 1rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.inline-flex {\n  display: inline-flex;\n}\n\n.aspect-square {\n  aspect-ratio: 1 / 1;\n}\n\n.h-4 {\n  height: 1rem;\n}\n\n.h-1 {\n  height: 0.25rem;\n}\n\n.h-5 {\n  height: 1.25rem;\n}\n\n.h-3 {\n  height: 0.75rem;\n}\n\n.h-14 {\n  height: 3.5rem;\n}\n\n.h-full {\n  height: 100%;\n}\n\n.h-8 {\n  height: 2rem;\n}\n\n.h-10 {\n  height: 2.5rem;\n}\n\n.w-full {\n  width: 100%;\n}\n\n.w-4 {\n  width: 1rem;\n}\n\n.w-1 {\n  width: 0.25rem;\n}\n\n.w-8 {\n  width: 2rem;\n}\n\n.w-5 {\n  width: 1.25rem;\n}\n\n.w-10 {\n  width: 2.5rem;\n}\n\n.shrink {\n  flex-shrink: 1;\n}\n\n.flex-grow {\n  flex-grow: 1;\n}\n\n.grow {\n  flex-grow: 1;\n}\n\n.basis-1\\/12 {\n  flex-basis: 8.333333%;\n}\n\n.translate-x-full {\n  --tw-translate-x: 100%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-x-2 {\n  --tw-translate-x: -0.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-y-2 {\n  --tw-translate-y: -0.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.cursor-not-allowed {\n  cursor: not-allowed;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.items-end {\n  align-items: flex-end;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.items-baseline {\n  align-items: baseline;\n}\n\n.justify-end {\n  justify-content: flex-end;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.justify-items-stretch {\n  justify-items: stretch;\n}\n\n.gap-4 {\n  gap: 1rem;\n}\n\n.gap-2 {\n  gap: 0.5rem;\n}\n\n.gap-1 {\n  gap: 0.25rem;\n}\n\n.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.self-end {\n  align-self: flex-end;\n}\n\n.self-center {\n  align-self: center;\n}\n\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n\n.rounded-md {\n  border-radius: 0.375rem;\n}\n\n.rounded {\n  border-radius: 0.25rem;\n}\n\n.rounded-sm {\n  border-radius: 0.125rem;\n}\n\n.rounded-full {\n  border-radius: 9999px;\n}\n\n.border {\n  border-width: 1px;\n}\n\n.border-2 {\n  border-width: 2px;\n}\n\n.border-gray-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(217 219 223 / var(--tw-border-opacity));\n}\n\n.border-gray-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(110 117 130 / var(--tw-border-opacity));\n}\n\n.border-primary-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(13 130 141 / var(--tw-border-opacity));\n}\n\n.border-red-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(217 60 62 / var(--tw-border-opacity));\n}\n\n.border-green-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(16 136 53 / var(--tw-border-opacity));\n}\n\n.border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(183 187 194 / var(--tw-border-opacity));\n}\n\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n.bg-gray-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(143 149 159 / var(--tw-bg-opacity));\n}\n\n.bg-primary-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(13 130 141 / var(--tw-bg-opacity));\n}\n\n.bg-primary-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(5 104 116 / var(--tw-bg-opacity));\n}\n\n.bg-red-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(217 60 62 / var(--tw-bg-opacity));\n}\n\n.bg-red-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(189 14 15 / var(--tw-bg-opacity));\n}\n\n.bg-green-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(16 136 53 / var(--tw-bg-opacity));\n}\n\n.bg-green-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(1 109 0 / var(--tw-bg-opacity));\n}\n\n.bg-gray-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(110 117 130 / var(--tw-bg-opacity));\n}\n\n.bg-gray-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(85 94 110 / var(--tw-bg-opacity));\n}\n\n.bg-primary-500\\/30 {\n  background-color: rgb(13 130 141 / 0.3);\n}\n\n.bg-red-500\\/30 {\n  background-color: rgb(217 60 62 / 0.3);\n}\n\n.bg-green-500\\/30 {\n  background-color: rgb(16 136 53 / 0.3);\n}\n\n.bg-gray-500\\/30 {\n  background-color: rgb(110 117 130 / 0.3);\n}\n\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(240 241 243 / var(--tw-bg-opacity));\n}\n\n.bg-gray-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(183 187 194 / var(--tw-bg-opacity));\n}\n\n.bg-primary-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(105 200 206 / var(--tw-bg-opacity));\n}\n\n.bg-transparent {\n  background-color: transparent;\n}\n\n.p-6 {\n  padding: 1.5rem;\n}\n\n.p-2 {\n  padding: 0.5rem;\n}\n\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.pl-6 {\n  padding-left: 1.5rem;\n}\n\n.pt-1 {\n  padding-top: 0.25rem;\n}\n\n.pl-3 {\n  padding-left: 0.75rem;\n}\n\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.font-normal {\n  font-weight: 400;\n}\n\n.font-medium {\n  font-weight: 500;\n}\n\n.leading-3 {\n  line-height: .75rem;\n}\n\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(110 117 130 / var(--tw-text-opacity));\n}\n\n.text-primary-500 {\n  --tw-text-opacity: 1;\n  color: rgb(13 130 141 / var(--tw-text-opacity));\n}\n\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgb(217 60 62 / var(--tw-text-opacity));\n}\n\n.text-green-500 {\n  --tw-text-opacity: 1;\n  color: rgb(16 136 53 / var(--tw-text-opacity));\n}\n\n.text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgb(85 94 110 / var(--tw-text-opacity));\n}\n\n.text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgb(189 14 15 / var(--tw-text-opacity));\n}\n\n.text-primary-700 {\n  --tw-text-opacity: 1;\n  color: rgb(6 80 92 / var(--tw-text-opacity));\n}\n\n.opacity-70 {\n  opacity: 0.7;\n}\n\n.shadow-inner {\n  --tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.ring-4 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.ring-primary-500 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(13 130 141 / var(--tw-ring-opacity));\n}\n\n.ring-red-500 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(217 60 62 / var(--tw-ring-opacity));\n}\n\n.ring-green-500 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(16 136 53 / var(--tw-ring-opacity));\n}\n\n.ring-gray-500 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(110 117 130 / var(--tw-ring-opacity));\n}\n\n.ring-opacity-50 {\n  --tw-ring-opacity: 0.5;\n}\n\n.transition {\n  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-colors {\n  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-\\[font-size\\2c color\\2c transform\\] {\n  transition-property: font-size,color,transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.duration-150 {\n  transition-duration: 150ms;\n}\n\n.duration-100 {\n  transition-duration: 100ms;\n}\n\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.hover\\:bg-primary-500\\/30:hover {\n  background-color: rgb(13 130 141 / 0.3);\n}\n\n.hover\\:bg-red-500\\/30:hover {\n  background-color: rgb(217 60 62 / 0.3);\n}\n\n.hover\\:bg-green-500\\/30:hover {\n  background-color: rgb(16 136 53 / 0.3);\n}\n\n.hover\\:bg-gray-500\\/30:hover {\n  background-color: rgb(110 117 130 / 0.3);\n}\n\n.hover\\:shadow-md:hover {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.hover\\:ring-4:hover {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.hover\\:ring-primary-500\\/30:hover {\n  --tw-ring-color: rgb(13 130 141 / 0.3);\n}\n\n.focus\\:bg-primary-400:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(19 162 173 / var(--tw-bg-opacity));\n}\n\n.focus\\:bg-red-400:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 109 109 / var(--tw-bg-opacity));\n}\n\n.focus\\:bg-green-400:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(60 167 115 / var(--tw-bg-opacity));\n}\n\n.focus\\:bg-gray-400:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(143 149 159 / var(--tw-bg-opacity));\n}\n\n.focus\\:shadow-xl:focus {\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.focus\\:ring-4:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.focus\\:ring-0:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.focus\\:ring-primary-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(13 130 141 / var(--tw-ring-opacity));\n}\n\n.focus\\:ring-red-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(217 60 62 / var(--tw-ring-opacity));\n}\n\n.focus\\:ring-green-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(16 136 53 / var(--tw-ring-opacity));\n}\n\n.focus\\:ring-opacity-50:focus {\n  --tw-ring-opacity: 0.5;\n}\n\n.active\\:bg-primary-600:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(5 104 116 / var(--tw-bg-opacity));\n}\n\n.active\\:bg-red-600:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(189 14 15 / var(--tw-bg-opacity));\n}\n\n.active\\:bg-green-600:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(1 109 0 / var(--tw-bg-opacity));\n}\n\n.active\\:bg-gray-600:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(85 94 110 / var(--tw-bg-opacity));\n}\n\n.active\\:bg-primary-500\\/30:active {\n  background-color: rgb(13 130 141 / 0.3);\n}\n\n.active\\:bg-red-500\\/30:active {\n  background-color: rgb(217 60 62 / 0.3);\n}\n\n.active\\:bg-green-500\\/30:active {\n  background-color: rgb(16 136 53 / 0.3);\n}\n\n.active\\:bg-gray-500\\/30:active {\n  background-color: rgb(110 117 130 / 0.3);\n}\n\n.dark .dark\\:bg-gray-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(19 31 48 / var(--tw-bg-opacity));\n}\n'))}}}]);