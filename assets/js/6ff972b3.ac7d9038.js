"use strict";(self.webpackChunk_reui_docs=self.webpackChunk_reui_docs||[]).push([[3323],{9627:(n,t,r)=>{r.d(t,{U:()=>i});var e=r(7211),o=r(4323),a=r(1477);function i(n,t){let r,{elementType:i="button",isDisabled:s,onPress:c,onPressStart:d,onPressEnd:g,onPressChange:l,preventFocusOnPress:w,allowFocusWhenDisabled:b,onClick:p,href:u,target:y,rel:h,type:m="button"}=n;r="button"===i?{type:m,disabled:s}:{role:"button",tabIndex:s?void 0:0,href:"a"===i&&s?void 0:u,target:"a"===i?y:void 0,type:"input"===i?m:void 0,disabled:"input"===i?s:void 0,"aria-disabled":s&&"input"!==i?s:void 0,rel:"a"===i?h:void 0};let{pressProps:f,isPressed:v}=(0,a.r7)({onPressStart:d,onPressEnd:g,onPressChange:l,onPress:c,isDisabled:s,preventFocusOnPress:w,ref:t}),{focusableProps:x}=(0,o.kc)(n,t);b&&(x.tabIndex=s?-1:x.tabIndex);let k=(0,e.dG)(x,f,(0,e.zL)(n,{labelable:!0}));return{isPressed:v,buttonProps:(0,e.dG)(r,k,{"aria-haspopup":n["aria-haspopup"],"aria-expanded":n["aria-expanded"],"aria-controls":n["aria-controls"],"aria-pressed":n["aria-pressed"],onClick:n=>{p&&(p(n),console.warn("onClick is deprecated, please use onPress"))}})}}},9250:(n,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var e=r(7896),o=(r(2784),r(876)),a=r(9327),i=r(8347);const s={},c="Button",d={unversionedId:"components/Button/index",id:"components/Button/index",title:"Button",description:"Primary",source:"@site/../components/src/components/Button/index.mdx",sourceDirName:"components/Button",slug:"/components/Button/",permalink:"/components/components/Button/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"components",previous:{title:"Components",permalink:"/components/components/"},next:{title:"CheckBox",permalink:"/components/components/CheckBox/"}},g={},l=[{value:"Primary",id:"primary",level:2},{value:"Secondary",id:"secondary",level:2},{value:"Plain",id:"plain",level:2}],w={toc:l};function b(n){let{components:t,...r}=n;return(0,o.kt)("wrapper",(0,e.Z)({},w,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"button"},"Button"),(0,o.kt)("h2",{id:"primary"},"Primary"),(0,o.kt)(a.X,{mdxType:"Canvas"},(0,o.kt)("div",{class:"flex flex-row gap-4"},(0,o.kt)(i.z,{mdxType:"Button"},"Primary"),(0,o.kt)(i.z,{color:"red",mdxType:"Button"},"Danger"),(0,o.kt)(i.z,{color:"green",mdxType:"Button"},"Good stuff"),(0,o.kt)(i.z,{color:"gray",mdxType:"Button"},"Uncertain"),(0,o.kt)(i.z,{isDisabled:!0,mdxType:"Button"},"Disabled"))),(0,o.kt)("h2",{id:"secondary"},"Secondary"),(0,o.kt)(a.X,{mdxType:"Canvas"},(0,o.kt)("div",{class:"flex flex-row gap-4"},(0,o.kt)(i.z,{buttonStyle:"secondary",mdxType:"Button"},"Primary"),(0,o.kt)(i.z,{buttonStyle:"secondary",color:"red",mdxType:"Button"},"Danger"),(0,o.kt)(i.z,{buttonStyle:"secondary",color:"green",mdxType:"Button"},"Good stuff"),(0,o.kt)(i.z,{buttonStyle:"secondary",color:"gray",mdxType:"Button"},"Uncertain"),(0,o.kt)(i.z,{buttonStyle:"secondary",isDisabled:!0,mdxType:"Button"},"Disabled"))),(0,o.kt)("h2",{id:"plain"},"Plain"),(0,o.kt)(a.X,{mdxType:"Canvas"},(0,o.kt)("div",{class:"flex flex-row gap-4"},(0,o.kt)(i.z,{buttonStyle:"plain",mdxType:"Button"},"Primary"),(0,o.kt)(i.z,{buttonStyle:"plain",color:"red",mdxType:"Button"},"Danger"),(0,o.kt)(i.z,{buttonStyle:"plain",color:"green",mdxType:"Button"},"Good stuff"),(0,o.kt)(i.z,{buttonStyle:"plain",color:"gray",mdxType:"Button"},"Uncertain"),(0,o.kt)(i.z,{buttonStyle:"plain",isDisabled:!0,mdxType:"Button"},"Disabled"))))}b.isMDXComponent=!0},8347:(n,t,r)=>{r.d(t,{z:()=>c});var e=r(7896),o=r(2784),a=r(9627),i=r(6277);const s={primary:function(n){let{color:t="primary",...r}=n;const s=o.useRef(null),c=r.href?"a":"div",{buttonProps:d}=(0,a.U)({...r,type:"button",elementType:c},s);return o.createElement(c,(0,e.Z)({},d,{ref:s,className:(0,i.Z)("inline-flex cursor-pointer flex-row items-center gap-2 space-x-1 whitespace-nowrap rounded px-4 py-2 text-lg font-bold text-white shadow outline-none transition hover:shadow-md focus:shadow-xl focus:outline-none focus:ring-4 focus:ring-opacity-50",r.isDisabled?"cursor-not-allowed bg-gray-400":{"bg-primary-500 ring-primary-500 focus:bg-primary-400 focus:ring-primary-500 active:bg-primary-600":"primary"===t,"bg-red-500 ring-red-500 focus:bg-red-400 focus:ring-red-500 active:bg-red-600":"red"===t,"bg-green-500 ring-green-500 focus:bg-green-400 focus:ring-green-500 active:bg-green-600":"green"===t,"bg-gray-500 ring-gray-500 focus:bg-gray-400 focus:ring-primary-500 active:bg-gray-600":"gray"===t})}),r.children)},secondary:function(n){let{color:t="primary",...r}=n;const s=o.useRef(null),c=r.href?"a":"div",{buttonProps:d}=(0,a.U)({...r,type:"button",elementType:c},s);return o.createElement(c,(0,e.Z)({},d,{ref:s,className:(0,i.Z)("inline-flex cursor-pointer flex-row items-baseline gap-2 space-x-1 whitespace-nowrap rounded px-4 py-2 text-lg font-bold outline-none transition focus:outline-none focus:ring-4 focus:ring-opacity-50",r.isDisabled?"cursor-not-allowed border-2 border-gray-500 text-gray-500":{"border-2 border-primary-500 text-primary-500 hover:bg-primary-500/30 focus:ring-primary-500 active:bg-primary-500/30":"primary"===t,"border-2 border-red-500 text-red-500 hover:bg-red-500/30\tfocus:ring-red-500 active:bg-red-500/30":"red"===t,"border-2 border-green-500 text-green-500 hover:bg-green-500/30 focus:ring-green-500 active:bg-green-500/30":"green"===t,"border-2 border-gray-500 text-gray-500 hover:bg-gray-500/30 focus:ring-primary-500 active:bg-gray-500/30":"gray"===t})}),r.children)},plain:function(n){let{color:t="primary",...r}=n;const s=o.useRef(null),c=r.href?"a":"div",{buttonProps:d}=(0,a.U)({...r,type:"button",elementType:c},s);return o.createElement(c,(0,e.Z)({},d,{ref:s,className:(0,i.Z)("inline-flex cursor-pointer flex-row items-center gap-2 space-x-1 whitespace-nowrap rounded px-4 py-2 text-lg font-bold outline-none transition focus:outline-none focus:ring-4 focus:ring-opacity-50",r.isDisabled?"cursor-not-allowed text-gray-500":{"text-primary-500 hover:bg-primary-500/30 focus:ring-primary-500 active:bg-primary-500/30":"primary"===t,"text-red-500 hover:bg-red-500/30 focus:ring-red-500 active:bg-red-500/30":"red"===t,"text-green-500 hover:bg-green-500/30 focus:ring-green-500 active:bg-green-500/30":"green"===t,"text-gray-500 hover:bg-gray-500/30 focus:ring-primary-500 active:bg-gray-500/30":"gray"===t})}),r.children)}};function c(n){let{buttonStyle:t="primary",...r}=n;const e=s[t];return o.createElement(e,r)}},9327:(n,t,r)=>{r.d(t,{X:()=>a});var e=r(2784),o=r(1831);function a(n){let{children:t}=n;return e.createElement(o.ZP.div,null,e.createElement("div",{className:"rounded-md border border-gray-200 bg-white p-6 shadow-inner"},t),e.createElement("style",null,"/*\n! tailwindcss v3.1.8 | MIT License | https://tailwindcss.com\n*/\n\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n\t/* 1 */\n\tborder-width: 0;\n\t/* 2 */\n\tborder-style: solid;\n\t/* 2 */\n\tborder-color: #d9dbdf;\n\t/* 2 */\n}\n\n::before,\n::after {\n\t--tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n\tline-height: 1.5;\n\t/* 1 */\n\t-webkit-text-size-adjust: 100%;\n\t/* 2 */\n\t/* 3 */\n\ttab-size: 4;\n\t/* 3 */\n\tfont-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,\n\t\t'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n\t/* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n\tmargin: 0;\n\t/* 1 */\n\tline-height: inherit;\n\t/* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n\theight: 0;\n\t/* 1 */\n\tcolor: inherit;\n\t/* 2 */\n\tborder-top-width: 1px;\n\t/* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n\t-webkit-text-decoration: underline dotted;\n\ttext-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n\tfont-size: inherit;\n\tfont-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n\tcolor: inherit;\n\ttext-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;\n\t/* 1 */\n\tfont-size: 1em;\n\t/* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n\ttext-indent: 0;\n\t/* 1 */\n\tborder-color: inherit;\n\t/* 2 */\n\tborder-collapse: collapse;\n\t/* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit;\n\t/* 1 */\n\tfont-size: 100%;\n\t/* 1 */\n\tfont-weight: inherit;\n\t/* 1 */\n\tline-height: inherit;\n\t/* 1 */\n\tcolor: inherit;\n\t/* 1 */\n\tmargin: 0;\n\t/* 2 */\n\tpadding: 0;\n\t/* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n\ttext-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n\t/* 1 */\n\tbackground-color: transparent;\n\t/* 2 */\n\tbackground-image: none;\n\t/* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n\toutline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield;\n\t/* 1 */\n\toutline-offset: -2px;\n\t/* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button;\n\t/* 1 */\n\tfont: inherit;\n\t/* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n\tmargin: 0;\n}\n\nfieldset {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nlegend {\n\tpadding: 0;\n}\n\nol,\nul,\nmenu {\n\tlist-style: none;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n\tresize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n\topacity: 1;\n\t/* 1 */\n\tcolor: #8f959f;\n\t/* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role='button'] {\n\tcursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n\n:disabled {\n\tcursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n\tdisplay: block;\n\t/* 1 */\n\tvertical-align: middle;\n\t/* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n\tmax-width: 100%;\n\theight: auto;\n}\n\n*,\n::before,\n::after {\n\t--tw-border-spacing-x: 0;\n\t--tw-border-spacing-y: 0;\n\t--tw-translate-x: 0;\n\t--tw-translate-y: 0;\n\t--tw-rotate: 0;\n\t--tw-skew-x: 0;\n\t--tw-skew-y: 0;\n\t--tw-scale-x: 1;\n\t--tw-scale-y: 1;\n\t--tw-pan-x: ;\n\t--tw-pan-y: ;\n\t--tw-pinch-zoom: ;\n\t--tw-scroll-snap-strictness: proximity;\n\t--tw-ordinal: ;\n\t--tw-slashed-zero: ;\n\t--tw-numeric-figure: ;\n\t--tw-numeric-spacing: ;\n\t--tw-numeric-fraction: ;\n\t--tw-ring-inset: ;\n\t--tw-ring-offset-width: 0px;\n\t--tw-ring-offset-color: #fff;\n\t--tw-ring-color: rgb(33 115 230 / 0.5);\n\t--tw-ring-offset-shadow: 0 0 #0000;\n\t--tw-ring-shadow: 0 0 #0000;\n\t--tw-shadow: 0 0 #0000;\n\t--tw-shadow-colored: 0 0 #0000;\n\t--tw-blur: ;\n\t--tw-brightness: ;\n\t--tw-contrast: ;\n\t--tw-grayscale: ;\n\t--tw-hue-rotate: ;\n\t--tw-invert: ;\n\t--tw-saturate: ;\n\t--tw-sepia: ;\n\t--tw-drop-shadow: ;\n\t--tw-backdrop-blur: ;\n\t--tw-backdrop-brightness: ;\n\t--tw-backdrop-contrast: ;\n\t--tw-backdrop-grayscale: ;\n\t--tw-backdrop-hue-rotate: ;\n\t--tw-backdrop-invert: ;\n\t--tw-backdrop-opacity: ;\n\t--tw-backdrop-saturate: ;\n\t--tw-backdrop-sepia: ;\n}\n\n::-webkit-backdrop {\n\t--tw-border-spacing-x: 0;\n\t--tw-border-spacing-y: 0;\n\t--tw-translate-x: 0;\n\t--tw-translate-y: 0;\n\t--tw-rotate: 0;\n\t--tw-skew-x: 0;\n\t--tw-skew-y: 0;\n\t--tw-scale-x: 1;\n\t--tw-scale-y: 1;\n\t--tw-pan-x: ;\n\t--tw-pan-y: ;\n\t--tw-pinch-zoom: ;\n\t--tw-scroll-snap-strictness: proximity;\n\t--tw-ordinal: ;\n\t--tw-slashed-zero: ;\n\t--tw-numeric-figure: ;\n\t--tw-numeric-spacing: ;\n\t--tw-numeric-fraction: ;\n\t--tw-ring-inset: ;\n\t--tw-ring-offset-width: 0px;\n\t--tw-ring-offset-color: #fff;\n\t--tw-ring-color: rgb(33 115 230 / 0.5);\n\t--tw-ring-offset-shadow: 0 0 #0000;\n\t--tw-ring-shadow: 0 0 #0000;\n\t--tw-shadow: 0 0 #0000;\n\t--tw-shadow-colored: 0 0 #0000;\n\t--tw-blur: ;\n\t--tw-brightness: ;\n\t--tw-contrast: ;\n\t--tw-grayscale: ;\n\t--tw-hue-rotate: ;\n\t--tw-invert: ;\n\t--tw-saturate: ;\n\t--tw-sepia: ;\n\t--tw-drop-shadow: ;\n\t--tw-backdrop-blur: ;\n\t--tw-backdrop-brightness: ;\n\t--tw-backdrop-contrast: ;\n\t--tw-backdrop-grayscale: ;\n\t--tw-backdrop-hue-rotate: ;\n\t--tw-backdrop-invert: ;\n\t--tw-backdrop-opacity: ;\n\t--tw-backdrop-saturate: ;\n\t--tw-backdrop-sepia: ;\n}\n\n::backdrop {\n\t--tw-border-spacing-x: 0;\n\t--tw-border-spacing-y: 0;\n\t--tw-translate-x: 0;\n\t--tw-translate-y: 0;\n\t--tw-rotate: 0;\n\t--tw-skew-x: 0;\n\t--tw-skew-y: 0;\n\t--tw-scale-x: 1;\n\t--tw-scale-y: 1;\n\t--tw-pan-x: ;\n\t--tw-pan-y: ;\n\t--tw-pinch-zoom: ;\n\t--tw-scroll-snap-strictness: proximity;\n\t--tw-ordinal: ;\n\t--tw-slashed-zero: ;\n\t--tw-numeric-figure: ;\n\t--tw-numeric-spacing: ;\n\t--tw-numeric-fraction: ;\n\t--tw-ring-inset: ;\n\t--tw-ring-offset-width: 0px;\n\t--tw-ring-offset-color: #fff;\n\t--tw-ring-color: rgb(33 115 230 / 0.5);\n\t--tw-ring-offset-shadow: 0 0 #0000;\n\t--tw-ring-shadow: 0 0 #0000;\n\t--tw-shadow: 0 0 #0000;\n\t--tw-shadow-colored: 0 0 #0000;\n\t--tw-blur: ;\n\t--tw-brightness: ;\n\t--tw-contrast: ;\n\t--tw-grayscale: ;\n\t--tw-hue-rotate: ;\n\t--tw-invert: ;\n\t--tw-saturate: ;\n\t--tw-sepia: ;\n\t--tw-drop-shadow: ;\n\t--tw-backdrop-blur: ;\n\t--tw-backdrop-brightness: ;\n\t--tw-backdrop-contrast: ;\n\t--tw-backdrop-grayscale: ;\n\t--tw-backdrop-hue-rotate: ;\n\t--tw-backdrop-invert: ;\n\t--tw-backdrop-opacity: ;\n\t--tw-backdrop-saturate: ;\n\t--tw-backdrop-sepia: ;\n}\n\n.absolute {\n\tposition: absolute;\n}\n\n.relative {\n\tposition: relative;\n}\n\n.inset-y-0 {\n\ttop: 0px;\n\tbottom: 0px;\n}\n\n.left-48 {\n\tleft: 12rem;\n}\n\n.top-1 {\n\ttop: 0.25rem;\n}\n\n.left-0 {\n\tleft: 0px;\n}\n\n.top-3 {\n\ttop: 0.75rem;\n}\n\n.mr-1 {\n\tmargin-right: 0.25rem;\n}\n\n.mt-4 {\n\tmargin-top: 1rem;\n}\n\n.flex {\n\tdisplay: flex;\n}\n\n.inline-flex {\n\tdisplay: inline-flex;\n}\n\n.table {\n\tdisplay: table;\n}\n\n.aspect-square {\n\taspect-ratio: 1 / 1;\n}\n\n.h-4 {\n\theight: 1rem;\n}\n\n.h-1 {\n\theight: 0.25rem;\n}\n\n.h-5 {\n\theight: 1.25rem;\n}\n\n.h-3 {\n\theight: 0.75rem;\n}\n\n.h-14 {\n\theight: 3.5rem;\n}\n\n.h-full {\n\theight: 100%;\n}\n\n.h-8 {\n\theight: 2rem;\n}\n\n.h-10 {\n\theight: 2.5rem;\n}\n\n.h-6 {\n\theight: 1.5rem;\n}\n\n.w-full {\n\twidth: 100%;\n}\n\n.w-4 {\n\twidth: 1rem;\n}\n\n.w-1 {\n\twidth: 0.25rem;\n}\n\n.w-8 {\n\twidth: 2rem;\n}\n\n.w-5 {\n\twidth: 1.25rem;\n}\n\n.w-10 {\n\twidth: 2.5rem;\n}\n\n.shrink {\n\tflex-shrink: 1;\n}\n\n.flex-grow {\n\tflex-grow: 1;\n}\n\n.grow {\n\tflex-grow: 1;\n}\n\n.basis-1\\/12 {\n\tflex-basis: 8.333333%;\n}\n\n.translate-x-full {\n\t--tw-translate-x: 100%;\n\ttransform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\n\t\tskewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-x-2 {\n\t--tw-translate-x: -0.5rem;\n\ttransform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\n\t\tskewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-y-2 {\n\t--tw-translate-y: -0.5rem;\n\ttransform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\n\t\tskewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.transform {\n\ttransform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\n\t\tskewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.cursor-pointer {\n\tcursor: pointer;\n}\n\n.cursor-not-allowed {\n\tcursor: not-allowed;\n}\n\n.flex-row {\n\tflex-direction: row;\n}\n\n.flex-col {\n\tflex-direction: column;\n}\n\n.items-end {\n\talign-items: flex-end;\n}\n\n.items-center {\n\talign-items: center;\n}\n\n.items-baseline {\n\talign-items: baseline;\n}\n\n.justify-end {\n\tjustify-content: flex-end;\n}\n\n.justify-center {\n\tjustify-content: center;\n}\n\n.justify-between {\n\tjustify-content: space-between;\n}\n\n.justify-items-stretch {\n\tjustify-items: stretch;\n}\n\n.gap-4 {\n\tgap: 1rem;\n}\n\n.gap-2 {\n\tgap: 0.5rem;\n}\n\n.gap-1 {\n\tgap: 0.25rem;\n}\n\n.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-x-reverse: 0;\n\tmargin-right: calc(0.25rem * var(--tw-space-x-reverse));\n\tmargin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n\t--tw-space-x-reverse: 0;\n\tmargin-right: calc(0.5rem * var(--tw-space-x-reverse));\n\tmargin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.self-end {\n\talign-self: flex-end;\n}\n\n.self-center {\n\talign-self: center;\n}\n\n.whitespace-nowrap {\n\twhite-space: nowrap;\n}\n\n.rounded-md {\n\tborder-radius: 0.375rem;\n}\n\n.rounded {\n\tborder-radius: 0.25rem;\n}\n\n.rounded-sm {\n\tborder-radius: 0.125rem;\n}\n\n.rounded-full {\n\tborder-radius: 9999px;\n}\n\n.border {\n\tborder-width: 1px;\n}\n\n.border-2 {\n\tborder-width: 2px;\n}\n\n.border-gray-200 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgb(217 219 223 / var(--tw-border-opacity));\n}\n\n.border-gray-500 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgb(110 117 130 / var(--tw-border-opacity));\n}\n\n.border-primary-500 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgb(13 130 141 / var(--tw-border-opacity));\n}\n\n.border-red-500 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgb(217 60 62 / var(--tw-border-opacity));\n}\n\n.border-green-500 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgb(16 136 53 / var(--tw-border-opacity));\n}\n\n.border-gray-300 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgb(183 187 194 / var(--tw-border-opacity));\n}\n\n.bg-white {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n.bg-gray-400 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgb(143 149 159 / var(--tw-bg-opacity));\n}\n\n.bg-primary-500 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgb(13 130 141 / var(--tw-bg-opacity));\n}\n\n.bg-primary-600 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgb(5 104 116 / var(--tw-bg-opacity));\n}\n\n.bg-red-500 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgb(217 60 62 / var(--tw-bg-opacity));\n}\n\n.bg-red-600 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgb(189 14 15 / var(--tw-bg-opacity));\n}\n\n.bg-green-500 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgb(16 136 53 / var(--tw-bg-opacity));\n}\n\n.bg-green-600 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgb(1 109 0 / var(--tw-bg-opacity));\n}\n\n.bg-gray-500 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgb(110 117 130 / var(--tw-bg-opacity));\n}\n\n.bg-gray-600 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgb(85 94 110 / var(--tw-bg-opacity));\n}\n\n.bg-primary-500\\/30 {\n\tbackground-color: rgb(13 130 141 / 0.3);\n}\n\n.bg-red-500\\/30 {\n\tbackground-color: rgb(217 60 62 / 0.3);\n}\n\n.bg-green-500\\/30 {\n\tbackground-color: rgb(16 136 53 / 0.3);\n}\n\n.bg-gray-500\\/30 {\n\tbackground-color: rgb(110 117 130 / 0.3);\n}\n\n.bg-gray-100 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgb(240 241 243 / var(--tw-bg-opacity));\n}\n\n.bg-gray-300 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgb(183 187 194 / var(--tw-bg-opacity));\n}\n\n.bg-primary-300 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgb(105 200 206 / var(--tw-bg-opacity));\n}\n\n.bg-transparent {\n\tbackground-color: transparent;\n}\n\n.bg-gray-200 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgb(217 219 223 / var(--tw-bg-opacity));\n}\n\n.bg-\\[url\\(\\\"data\\:image\\/svg\\+xml\\;base64\\2c\n\tPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8\\+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K\\\"\\)\\] {\n\tbackground-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K');\n}\n\n.p-6 {\n\tpadding: 1.5rem;\n}\n\n.p-2 {\n\tpadding: 0.5rem;\n}\n\n.px-4 {\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n}\n\n.py-2 {\n\tpadding-top: 0.5rem;\n\tpadding-bottom: 0.5rem;\n}\n\n.py-1 {\n\tpadding-top: 0.25rem;\n\tpadding-bottom: 0.25rem;\n}\n\n.pl-3 {\n\tpadding-left: 0.75rem;\n}\n\n.pt-1 {\n\tpadding-top: 0.25rem;\n}\n\n.text-right {\n\ttext-align: right;\n}\n\n.text-lg {\n\tfont-size: 1.125rem;\n\tline-height: 1.75rem;\n}\n\n.text-xs {\n\tfont-size: 0.75rem;\n\tline-height: 1rem;\n}\n\n.text-sm {\n\tfont-size: 0.875rem;\n\tline-height: 1.25rem;\n}\n\n.font-bold {\n\tfont-weight: 700;\n}\n\n.font-normal {\n\tfont-weight: 400;\n}\n\n.font-medium {\n\tfont-weight: 500;\n}\n\n.leading-3 {\n\tline-height: 0.75rem;\n}\n\n.text-white {\n\t--tw-text-opacity: 1;\n\tcolor: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.text-gray-500 {\n\t--tw-text-opacity: 1;\n\tcolor: rgb(110 117 130 / var(--tw-text-opacity));\n}\n\n.text-primary-500 {\n\t--tw-text-opacity: 1;\n\tcolor: rgb(13 130 141 / var(--tw-text-opacity));\n}\n\n.text-red-500 {\n\t--tw-text-opacity: 1;\n\tcolor: rgb(217 60 62 / var(--tw-text-opacity));\n}\n\n.text-green-500 {\n\t--tw-text-opacity: 1;\n\tcolor: rgb(16 136 53 / var(--tw-text-opacity));\n}\n\n.text-gray-600 {\n\t--tw-text-opacity: 1;\n\tcolor: rgb(85 94 110 / var(--tw-text-opacity));\n}\n\n.text-primary-700 {\n\t--tw-text-opacity: 1;\n\tcolor: rgb(6 80 92 / var(--tw-text-opacity));\n}\n\n.text-red-600 {\n\t--tw-text-opacity: 1;\n\tcolor: rgb(189 14 15 / var(--tw-text-opacity));\n}\n\n.opacity-70 {\n\topacity: 0.7;\n}\n\n.shadow-inner {\n\t--tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);\n\t--tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow {\n\t--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n\t--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-md {\n\t--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n\t--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.outline-none {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n}\n\n.ring-4 {\n\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.ring-primary-500 {\n\t--tw-ring-opacity: 1;\n\t--tw-ring-color: rgb(13 130 141 / var(--tw-ring-opacity));\n}\n\n.ring-red-500 {\n\t--tw-ring-opacity: 1;\n\t--tw-ring-color: rgb(217 60 62 / var(--tw-ring-opacity));\n}\n\n.ring-green-500 {\n\t--tw-ring-opacity: 1;\n\t--tw-ring-color: rgb(16 136 53 / var(--tw-ring-opacity));\n}\n\n.ring-gray-500 {\n\t--tw-ring-opacity: 1;\n\t--tw-ring-color: rgb(110 117 130 / var(--tw-ring-opacity));\n}\n\n.ring-opacity-50 {\n\t--tw-ring-opacity: 0.5;\n}\n\n.transition {\n\ttransition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter,\n\t\t-webkit-text-decoration-color, -webkit-backdrop-filter;\n\ttransition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow,\n\t\ttransform, filter, backdrop-filter;\n\ttransition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow,\n\t\ttransform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\n\n.transition-colors {\n\ttransition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;\n\ttransition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n\ttransition-property: color, background-color, border-color, text-decoration-color, fill, stroke,\n\t\t-webkit-text-decoration-color;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\n\n.transition-all {\n\ttransition-property: all;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\n\n.transition-\\[font-size\\2c color\\2c transform\\] {\n\ttransition-property: font-size, color, transform;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\n\n.duration-150 {\n\ttransition-duration: 150ms;\n}\n\n.duration-100 {\n\ttransition-duration: 100ms;\n}\n\n.ease-in-out {\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.hover\\:bg-primary-500\\/30:hover {\n\tbackground-color: rgb(13 130 141 / 0.3);\n}\n\n.hover\\:bg-red-500\\/30:hover {\n\tbackground-color: rgb(217 60 62 / 0.3);\n}\n\n.hover\\:bg-green-500\\/30:hover {\n\tbackground-color: rgb(16 136 53 / 0.3);\n}\n\n.hover\\:bg-gray-500\\/30:hover {\n\tbackground-color: rgb(110 117 130 / 0.3);\n}\n\n.hover\\:shadow-md:hover {\n\t--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n\t--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.hover\\:ring-4:hover {\n\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.hover\\:ring-primary-500\\/30:hover {\n\t--tw-ring-color: rgb(13 130 141 / 0.3);\n}\n\n.focus\\:bg-primary-400:focus {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgb(19 162 173 / var(--tw-bg-opacity));\n}\n\n.focus\\:bg-red-400:focus {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgb(229 109 109 / var(--tw-bg-opacity));\n}\n\n.focus\\:bg-green-400:focus {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgb(60 167 115 / var(--tw-bg-opacity));\n}\n\n.focus\\:bg-gray-400:focus {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgb(143 149 159 / var(--tw-bg-opacity));\n}\n\n.focus\\:shadow-xl:focus {\n\t--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n\t--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.focus\\:outline-none:focus {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n}\n\n.focus\\:ring-4:focus {\n\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.focus\\:ring-0:focus {\n\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.focus\\:ring-primary-500:focus {\n\t--tw-ring-opacity: 1;\n\t--tw-ring-color: rgb(13 130 141 / var(--tw-ring-opacity));\n}\n\n.focus\\:ring-red-500:focus {\n\t--tw-ring-opacity: 1;\n\t--tw-ring-color: rgb(217 60 62 / var(--tw-ring-opacity));\n}\n\n.focus\\:ring-green-500:focus {\n\t--tw-ring-opacity: 1;\n\t--tw-ring-color: rgb(16 136 53 / var(--tw-ring-opacity));\n}\n\n.focus\\:ring-opacity-50:focus {\n\t--tw-ring-opacity: 0.5;\n}\n\n.active\\:bg-primary-600:active {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgb(5 104 116 / var(--tw-bg-opacity));\n}\n\n.active\\:bg-red-600:active {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgb(189 14 15 / var(--tw-bg-opacity));\n}\n\n.active\\:bg-green-600:active {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgb(1 109 0 / var(--tw-bg-opacity));\n}\n\n.active\\:bg-gray-600:active {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgb(85 94 110 / var(--tw-bg-opacity));\n}\n\n.active\\:bg-primary-500\\/30:active {\n\tbackground-color: rgb(13 130 141 / 0.3);\n}\n\n.active\\:bg-red-500\\/30:active {\n\tbackground-color: rgb(217 60 62 / 0.3);\n}\n\n.active\\:bg-green-500\\/30:active {\n\tbackground-color: rgb(16 136 53 / 0.3);\n}\n\n.active\\:bg-gray-500\\/30:active {\n\tbackground-color: rgb(110 117 130 / 0.3);\n}\n\n.group:hover .group-hover\\:font-semibold {\n\tfont-weight: 600;\n}\n\n.group:hover .group-hover\\:ring-4 {\n\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.group:hover .group-hover\\:ring-primary-500\\/30 {\n\t--tw-ring-color: rgb(13 130 141 / 0.3);\n}\n"))}}}]);