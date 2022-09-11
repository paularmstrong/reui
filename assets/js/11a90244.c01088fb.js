"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5126],{8748:(n,t,r)=>{r.d(t,{X:()=>p});var o=r(7378),e=r(8944),a=r(3947);var i=r(615),s=r(2008),c=r(1147),d=r(1589),w=r(5463),l=r(5421);function p(n){let{children:t}=n;const{colorMode:r}=(0,l.I)();return o.createElement(a.ZP.div,null,o.createElement("div",{className:(0,e.Z)("dark"===r&&"dark")},o.createElement(i.j,{value:{CheckIcon:s.Z,ChevronDownIcon:c.Z,ChevronUpIcon:d.Z,ChevronUpDownIcon:w.Z}},o.createElement("div",{className:(0,e.Z)("rounded-md border border-gray-200 bg-white p-6 shadow-inner dark:bg-gray-900")},t))),o.createElement("style",null,'/*\n! tailwindcss v3.1.8 | MIT License | https://tailwindcss.com\n*/\n\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  /* 1 */\n  border-width: 0;\n  /* 2 */\n  border-style: solid;\n  /* 2 */\n  border-color: #dadee1;\n  /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  /* 3 */\n  tab-size: 4;\n  /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0;\n  /* 1 */\n  line-height: inherit;\n  /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  border-top-width: 1px;\n  /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0;\n  /* 1 */\n  border-color: inherit;\n  /* 2 */\n  border-collapse: collapse;\n  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  font-weight: inherit;\n  /* 1 */\n  line-height: inherit;\n  /* 1 */\n  color: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  padding: 0;\n  /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button;\n  /* 1 */\n  background-color: transparent;\n  /* 2 */\n  background-image: none;\n  /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #849497;\n  /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  /* 1 */\n  vertical-align: middle;\n  /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(79 112 220 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(79 112 220 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(79 112 220 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n.pointer-events-none {\n  pointer-events: none;\n}\n\n.pointer-events-auto {\n  pointer-events: auto;\n}\n\n.visible {\n  visibility: visible;\n}\n\n.fixed {\n  position: fixed;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.relative {\n  position: relative;\n}\n\n.inset-0 {\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n\n.inset-y-0 {\n  top: 0px;\n  bottom: 0px;\n}\n\n.left-48 {\n  left: 12rem;\n}\n\n.top-3 {\n  top: 0.75rem;\n}\n\n.top-1 {\n  top: 0.25rem;\n}\n\n.left-0 {\n  left: 0px;\n}\n\n.z-10 {\n  z-index: 10;\n}\n\n.z-0 {\n  z-index: 0;\n}\n\n.mx-3 {\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n}\n\n.mt-2 {\n  margin-top: 0.5rem;\n}\n\n.mt-4 {\n  margin-top: 1rem;\n}\n\n.mr-1 {\n  margin-right: 0.25rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.inline-flex {\n  display: inline-flex;\n}\n\n.aspect-square {\n  aspect-ratio: 1 / 1;\n}\n\n.h-6 {\n  height: 1.5rem;\n}\n\n.h-8 {\n  height: 2rem;\n}\n\n.h-4 {\n  height: 1rem;\n}\n\n.h-1 {\n  height: 0.25rem;\n}\n\n.h-14 {\n  height: 3.5rem;\n}\n\n.h-5 {\n  height: 1.25rem;\n}\n\n.h-3 {\n  height: 0.75rem;\n}\n\n.h-full {\n  height: 100%;\n}\n\n.w-6 {\n  width: 1.5rem;\n}\n\n.w-full {\n  width: 100%;\n}\n\n.w-8 {\n  width: 2rem;\n}\n\n.w-4 {\n  width: 1rem;\n}\n\n.w-1 {\n  width: 0.25rem;\n}\n\n.w-5 {\n  width: 1.25rem;\n}\n\n.shrink {\n  flex-shrink: 1;\n}\n\n.flex-grow {\n  flex-grow: 1;\n}\n\n.grow {\n  flex-grow: 1;\n}\n\n.basis-1\\/12 {\n  flex-basis: 8.333333%;\n}\n\n.-translate-y-2 {\n  --tw-translate-y: -0.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.translate-x-full {\n  --tw-translate-x: 100%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-x-2 {\n  --tw-translate-x: -0.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.animate-spin {\n  animation: spin 1s linear infinite;\n}\n\n@keyframes stroke {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -125;\n  }\n}\n\n.animate-stroke {\n  animation: stroke 1.5s ease-in-out infinite;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.cursor-not-allowed {\n  cursor: not-allowed;\n}\n\n.cursor-default {\n  cursor: default;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.items-start {\n  align-items: flex-start;\n}\n\n.items-end {\n  align-items: flex-end;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.items-baseline {\n  align-items: baseline;\n}\n\n.justify-start {\n  justify-content: flex-start;\n}\n\n.justify-end {\n  justify-content: flex-end;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.justify-items-stretch {\n  justify-items: stretch;\n}\n\n.gap-4 {\n  gap: 1rem;\n}\n\n.gap-2 {\n  gap: 0.5rem;\n}\n\n.gap-5 {\n  gap: 1.25rem;\n}\n\n.gap-1 {\n  gap: 0.25rem;\n}\n\n.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.self-end {\n  align-self: flex-end;\n}\n\n.self-center {\n  align-self: center;\n}\n\n.overflow-auto {\n  overflow: auto;\n}\n\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n\n.rounded-md {\n  border-radius: 0.375rem;\n}\n\n.rounded {\n  border-radius: 0.25rem;\n}\n\n.rounded-sm {\n  border-radius: 0.125rem;\n}\n\n.rounded-full {\n  border-radius: 9999px;\n}\n\n.border {\n  border-width: 1px;\n}\n\n.border-2 {\n  border-width: 2px;\n}\n\n.border-gray-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(218 222 225 / var(--tw-border-opacity));\n}\n\n.border-gray-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(102 115 114 / var(--tw-border-opacity));\n}\n\n.border-primary-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(61 125 145 / var(--tw-border-opacity));\n}\n\n.border-red-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(229 73 117 / var(--tw-border-opacity));\n}\n\n.border-green-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(50 135 80 / var(--tw-border-opacity));\n}\n\n.border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(179 188 192 / var(--tw-border-opacity));\n}\n\n.border-gray-100 {\n  --tw-border-opacity: 1;\n  border-color: rgb(238 241 242 / var(--tw-border-opacity));\n}\n\n.border-red-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(208 48 84 / var(--tw-border-opacity));\n}\n\n.border-primary-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(50 99 116 / var(--tw-border-opacity));\n}\n\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n.bg-gray-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(132 148 151 / var(--tw-bg-opacity));\n}\n\n.bg-primary-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(61 125 145 / var(--tw-bg-opacity));\n}\n\n.bg-red-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 73 117 / var(--tw-bg-opacity));\n}\n\n.bg-red-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(208 48 84 / var(--tw-bg-opacity));\n}\n\n.bg-green-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(50 135 80 / var(--tw-bg-opacity));\n}\n\n.bg-green-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(41 111 57 / var(--tw-bg-opacity));\n}\n\n.bg-gray-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(102 115 114 / var(--tw-bg-opacity));\n}\n\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(238 241 242 / var(--tw-bg-opacity));\n}\n\n.bg-primary-500\\/10 {\n  background-color: rgb(61 125 145 / 0.1);\n}\n\n.bg-transparent {\n  background-color: transparent;\n}\n\n.bg-gray-900\\/80 {\n  background-color: rgb(26 27 30 / 0.8);\n}\n\n.bg-gray-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(179 188 192 / var(--tw-bg-opacity));\n}\n\n.bg-primary-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(142 195 211 / var(--tw-bg-opacity));\n}\n\n.bg-primary-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(50 99 116 / var(--tw-bg-opacity));\n}\n\n.stroke-primary-600 {\n  stroke: #326374;\n}\n\n.stroke-\\[0\\.33rem\\] {\n  stroke-width: 0.33rem;\n}\n\n.p-6 {\n  padding: 1.5rem;\n}\n\n.p-2 {\n  padding: 0.5rem;\n}\n\n.p-1 {\n  padding: 0.25rem;\n}\n\n.p-4 {\n  padding: 1rem;\n}\n\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.pl-6 {\n  padding-left: 1.5rem;\n}\n\n.pt-1 {\n  padding-top: 0.25rem;\n}\n\n.pt-2 {\n  padding-top: 0.5rem;\n}\n\n.pl-3 {\n  padding-left: 0.75rem;\n}\n\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.font-medium {\n  font-weight: 500;\n}\n\n.font-normal {\n  font-weight: 400;\n}\n\n.uppercase {\n  text-transform: uppercase;\n}\n\n.leading-3 {\n  line-height: .75rem;\n}\n\n.text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgb(208 48 84 / var(--tw-text-opacity));\n}\n\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(102 115 114 / var(--tw-text-opacity));\n}\n\n.text-primary-500 {\n  --tw-text-opacity: 1;\n  color: rgb(61 125 145 / var(--tw-text-opacity));\n}\n\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgb(229 73 117 / var(--tw-text-opacity));\n}\n\n.text-red-400 {\n  --tw-text-opacity: 1;\n  color: rgb(239 109 149 / var(--tw-text-opacity));\n}\n\n.text-green-500 {\n  --tw-text-opacity: 1;\n  color: rgb(50 135 80 / var(--tw-text-opacity));\n}\n\n.text-green-400 {\n  --tw-text-opacity: 1;\n  color: rgb(71 165 121 / var(--tw-text-opacity));\n}\n\n.text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgb(82 88 86 / var(--tw-text-opacity));\n}\n\n.text-gray-800 {\n  --tw-text-opacity: 1;\n  color: rgb(43 45 46 / var(--tw-text-opacity));\n}\n\n.text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgb(63 66 65 / var(--tw-text-opacity));\n}\n\n.text-gray-300 {\n  --tw-text-opacity: 1;\n  color: rgb(179 188 192 / var(--tw-text-opacity));\n}\n\n.text-primary-600 {\n  --tw-text-opacity: 1;\n  color: rgb(50 99 116 / var(--tw-text-opacity));\n}\n\n.text-primary-400 {\n  --tw-text-opacity: 1;\n  color: rgb(83 158 178 / var(--tw-text-opacity));\n}\n\n.text-primary-700 {\n  --tw-text-opacity: 1;\n  color: rgb(41 74 88 / var(--tw-text-opacity));\n}\n\n.opacity-70 {\n  opacity: 0.7;\n}\n\n.shadow-inner {\n  --tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-xl {\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.ring-4 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.ring-primary-400\\/50 {\n  --tw-ring-color: rgb(83 158 178 / 0.5);\n}\n\n.ring-primary-500\\/50 {\n  --tw-ring-color: rgb(61 125 145 / 0.5);\n}\n\n.backdrop-blur {\n  --tw-backdrop-blur: blur(8px);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n\n.transition {\n  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-colors {\n  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-\\[font-size\\2c color\\2c transform\\] {\n  transition-property: font-size,color,transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.duration-150 {\n  transition-duration: 150ms;\n}\n\n.duration-100 {\n  transition-duration: 100ms;\n}\n\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.hover\\:bg-primary-500\\/10:hover {\n  background-color: rgb(61 125 145 / 0.1);\n}\n\n.hover\\:bg-red-500\\/10:hover {\n  background-color: rgb(229 73 117 / 0.1);\n}\n\n.hover\\:bg-green-500\\/10:hover {\n  background-color: rgb(50 135 80 / 0.1);\n}\n\n.hover\\:bg-gray-500\\/10:hover {\n  background-color: rgb(102 115 114 / 0.1);\n}\n\n.hover\\:shadow-md:hover {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.hover\\:ring-4:hover {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.hover\\:ring-primary-500\\/30:hover {\n  --tw-ring-color: rgb(61 125 145 / 0.3);\n}\n\n.focus\\:bg-primary-400:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(83 158 178 / var(--tw-bg-opacity));\n}\n\n.focus\\:bg-red-400:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 109 149 / var(--tw-bg-opacity));\n}\n\n.focus\\:bg-green-400:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(71 165 121 / var(--tw-bg-opacity));\n}\n\n.focus\\:bg-gray-400:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(132 148 151 / var(--tw-bg-opacity));\n}\n\n.focus\\:shadow-xl:focus {\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.focus\\:ring-4:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.focus\\:ring-0:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.focus\\:ring-primary-500\\/50:focus {\n  --tw-ring-color: rgb(61 125 145 / 0.5);\n}\n\n.focus\\:ring-red-500\\/50:focus {\n  --tw-ring-color: rgb(229 73 117 / 0.5);\n}\n\n.focus\\:ring-green-500\\/50:focus {\n  --tw-ring-color: rgb(50 135 80 / 0.5);\n}\n\n.active\\:bg-primary-600:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(50 99 116 / var(--tw-bg-opacity));\n}\n\n.active\\:bg-red-600:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(208 48 84 / var(--tw-bg-opacity));\n}\n\n.active\\:bg-green-600:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(41 111 57 / var(--tw-bg-opacity));\n}\n\n.active\\:bg-gray-600:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(82 88 86 / var(--tw-bg-opacity));\n}\n\n.active\\:bg-primary-500\\/10:active {\n  background-color: rgb(61 125 145 / 0.1);\n}\n\n.active\\:bg-red-500\\/10:active {\n  background-color: rgb(229 73 117 / 0.1);\n}\n\n.active\\:bg-green-500\\/10:active {\n  background-color: rgb(50 135 80 / 0.1);\n}\n\n.active\\:bg-gray-500\\/10:active {\n  background-color: rgb(102 115 114 / 0.1);\n}\n\n.dark .dark\\:border-primary-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(83 158 178 / var(--tw-border-opacity));\n}\n\n.dark .dark\\:border-red-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(239 109 149 / var(--tw-border-opacity));\n}\n\n.dark .dark\\:border-green-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(71 165 121 / var(--tw-border-opacity));\n}\n\n.dark .dark\\:border-gray-700 {\n  --tw-border-opacity: 1;\n  border-color: rgb(63 66 65 / var(--tw-border-opacity));\n}\n\n.dark .dark\\:border-gray-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(132 148 151 / var(--tw-border-opacity));\n}\n\n.dark .dark\\:border-gray-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(82 88 86 / var(--tw-border-opacity));\n}\n\n.dark .dark\\:border-gray-100 {\n  --tw-border-opacity: 1;\n  border-color: rgb(238 241 242 / var(--tw-border-opacity));\n}\n\n.dark .dark\\:bg-gray-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(26 27 30 / var(--tw-bg-opacity));\n}\n\n.dark .dark\\:bg-gray-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(82 88 86 / var(--tw-bg-opacity));\n}\n\n.dark .dark\\:bg-primary-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(83 158 178 / var(--tw-bg-opacity));\n}\n\n.dark .dark\\:bg-primary-500\\/40 {\n  background-color: rgb(61 125 145 / 0.4);\n}\n\n.dark .dark\\:bg-gray-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(43 45 46 / var(--tw-bg-opacity));\n}\n\n.dark .dark\\:bg-gray-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(102 115 114 / var(--tw-bg-opacity));\n}\n\n.dark .dark\\:bg-primary-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(41 74 88 / var(--tw-bg-opacity));\n}\n\n.dark .dark\\:stroke-primary-400 {\n  stroke: #539eb2;\n}\n\n.dark .dark\\:text-primary-400 {\n  --tw-text-opacity: 1;\n  color: rgb(83 158 178 / var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-red-400 {\n  --tw-text-opacity: 1;\n  color: rgb(239 109 149 / var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-green-400 {\n  --tw-text-opacity: 1;\n  color: rgb(71 165 121 / var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-gray-800 {\n  --tw-text-opacity: 1;\n  color: rgb(43 45 46 / var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(102 115 114 / var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-gray-300 {\n  --tw-text-opacity: 1;\n  color: rgb(179 188 192 / var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-primary-300 {\n  --tw-text-opacity: 1;\n  color: rgb(142 195 211 / var(--tw-text-opacity));\n}\n\n.dark .dark\\:ring-primary-400\\/50 {\n  --tw-ring-color: rgb(83 158 178 / 0.5);\n}\n\n@media (min-width: 768px) {\n  .md\\:p-8 {\n    padding: 2rem;\n  }\n}\n'))}},615:(n,t,r)=>{r.d(t,{j:()=>i,y:()=>s});var o=r(7378);function e(){return o.createElement("svg",null)}const a=o.createContext({CheckIcon:e,ChevronDownIcon:e,ChevronUpIcon:e,ChevronUpDownIcon:e}),i=a.Provider;function s(){return o.useContext(a)}},4546:(n,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>y,frontMatter:()=>w,metadata:()=>p,toc:()=>b});var o=r(5773),e=r(7378),a=r(5318),i=r(8748),s=r(8944),c=r(1410);function d(n){const t=(0,c.Me)();return e.createElement("div",{role:"progressbar",className:(0,s.Z)("flex flex-col items-center"),"aria-labelledby":n.children?t:void 0},e.createElement("svg",{viewBox:"0 0 50 50",className:"h-8 w-8 animate-spin"},e.createElement("circle",{cx:"25",cy:"25",r:"20",fill:"none",className:"animate-stroke stroke-primary-600 stroke-[0.33rem] dark:stroke-primary-400",strokeLinecap:"round"})),n.children?e.createElement("div",{id:t,className:"whitespace-nowrap"},n.children):null)}const w={},l="ActivityIndicator",p={unversionedId:"components/activity-indicator",id:"components/activity-indicator",title:"ActivityIndicator",description:"Loading\u2026",source:"@site/docs/components/activity-indicator.mdx",sourceDirName:"components",slug:"/components/activity-indicator",permalink:"/docs/components/activity-indicator",draft:!1,editUrl:"https://github.com/paularmstrong/reui/tree/main/docs/docs/components/activity-indicator.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Components",permalink:"/docs/components/"},next:{title:"Button",permalink:"/docs/components/button"}},g={},b=[],h={toc:b};function y(n){let{components:t,...r}=n;return(0,a.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"activityindicator"},"ActivityIndicator"),(0,a.kt)(i.X,{mdxType:"Canvas"},(0,a.kt)(d,{mdxType:"ActivityIndicator"}),(0,a.kt)(d,{mdxType:"ActivityIndicator"},"Loading\u2026")))}y.isMDXComponent=!0}}]);