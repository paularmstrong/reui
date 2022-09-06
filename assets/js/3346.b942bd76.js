"use strict";(self.webpackChunk_reui_docs=self.webpackChunk_reui_docs||[]).push([[3346],{9627:(e,a,n)=>{n.d(a,{U:()=>t});var i=n(7211),s=n(4323),o=n(1477);function t(e,a){let n,{elementType:t="button",isDisabled:r,onPress:l,onPressStart:d,onPressEnd:u,onPressChange:p,preventFocusOnPress:c,allowFocusWhenDisabled:b,onClick:v,href:P,target:h,rel:f,type:m="button"}=e;n="button"===t?{type:m,disabled:r}:{role:"button",tabIndex:r?void 0:0,href:"a"===t&&r?void 0:P,target:"a"===t?h:void 0,type:"input"===t?m:void 0,disabled:"input"===t?r:void 0,"aria-disabled":r&&"input"!==t?r:void 0,rel:"a"===t?f:void 0};let{pressProps:y,isPressed:g}=(0,o.r7)({onPressStart:d,onPressEnd:u,onPressChange:p,onPress:l,isDisabled:r,preventFocusOnPress:c,ref:a}),{focusableProps:C}=(0,s.kc)(e,a);b&&(C.tabIndex=r?-1:C.tabIndex);let O=(0,i.dG)(C,y,(0,i.zL)(e,{labelable:!0}));return{isPressed:g,buttonProps:(0,i.dG)(n,O,{"aria-haspopup":e["aria-haspopup"],"aria-expanded":e["aria-expanded"],"aria-controls":e["aria-controls"],"aria-pressed":e["aria-pressed"],onClick:e=>{v&&(v(e),console.warn("onClick is deprecated, please use onPress"))}})}}},3300:(e,a,n)=>{n.d(a,{O:()=>l,a8:()=>p,u6:()=>u});var i=n(2784),s=n(8738),o=n(7211),t=n(5486),r=n(4036);function l(e,a,n){let{inputProps:o}=(0,s.O)(e,a,n),{isSelected:t}=a,{isIndeterminate:r}=e;return(0,i.useEffect)((()=>{n.current&&(n.current.indeterminate=r)})),{inputProps:{...o,checked:t,"aria-checked":r?"mixed":t}}}const d=new WeakMap;function u(e,a){let{isDisabled:n,name:i}=e,{labelProps:s,fieldProps:r}=(0,t.N)({...e,labelElementType:"span"}),l=(0,o.zL)(e,{labelable:!0});return d.set(a,i),{groupProps:(0,o.dG)(l,{role:"group","aria-disabled":n||void 0,...r}),labelProps:s}}function p(e,a,n){const i=(0,r.l)({isReadOnly:e.isReadOnly||a.isReadOnly,isSelected:a.isSelected(e.value),onChange(n){n?a.addValue(e.value):a.removeValue(e.value),e.onChange&&e.onChange(n)}});let{inputProps:s}=l({...e,isReadOnly:e.isReadOnly||a.isReadOnly,isDisabled:e.isDisabled||a.isDisabled,name:e.name||d.get(a)},i,n);return{inputProps:s}}},7494:(e,a,n)=>{n.d(a,{h:()=>s});var i=n(8738);function s(e,a,n){let{inputProps:s}=(0,i.O)(e,a,n),{isSelected:o}=a;return{inputProps:{...s,role:"switch",checked:o,"aria-checked":o}}}},1486:(e,a,n)=>{n.d(a,{E:()=>t});var i=n(7211),s=n(5486),o=n(4323);n(2784);function t(e,a){let{inputElementType:n="input",isDisabled:t=!1,isRequired:r=!1,isReadOnly:l=!1,validationState:d,type:u="text",onChange:p=(()=>{})}=e,{focusableProps:c}=(0,o.kc)(e,a),{labelProps:b,fieldProps:v,descriptionProps:P,errorMessageProps:h}=(0,s.U)(e),f=(0,i.zL)(e,{labelable:!0});const m={type:u,pattern:e.pattern};return{labelProps:b,inputProps:(0,i.dG)(f,"input"===n&&m,{disabled:t,readOnly:l,"aria-required":r||void 0,"aria-invalid":"invalid"===d||void 0,"aria-errormessage":e["aria-errormessage"],"aria-activedescendant":e["aria-activedescendant"],"aria-autocomplete":e["aria-autocomplete"],"aria-haspopup":e["aria-haspopup"],value:e.value,defaultValue:e.value?void 0:e.defaultValue,onChange:e=>p(e.target.value),autoComplete:e.autoComplete,maxLength:e.maxLength,minLength:e.minLength,name:e.name,placeholder:e.placeholder,inputMode:e.inputMode,onCopy:e.onCopy,onCut:e.onCut,onPaste:e.onPaste,onCompositionEnd:e.onCompositionEnd,onCompositionStart:e.onCompositionStart,onCompositionUpdate:e.onCompositionUpdate,onSelect:e.onSelect,onBeforeInput:e.onBeforeInput,onInput:e.onInput,...c,...v}),descriptionProps:P,errorMessageProps:h}}},8738:(e,a,n)=>{n.d(a,{O:()=>t});var i=n(7211),s=n(4323),o=n(1477);function t(e,a,n){let{isDisabled:t=!1,isRequired:r,isReadOnly:l,value:d,name:u,children:p,"aria-label":c,"aria-labelledby":b,validationState:v="valid"}=e;null!=p||(null!=c||null!=b)||console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:P}=(0,o.r7)({isDisabled:t}),{focusableProps:h}=(0,s.kc)(e,n),f=(0,i.dG)(P,h),m=(0,i.zL)(e,{labelable:!0});return{inputProps:(0,i.dG)(m,{"aria-invalid":"invalid"===v||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":l||void 0,"aria-required":r||void 0,onChange:e=>{e.stopPropagation(),a.setSelected(e.target.checked)},disabled:t,value:d,name:u,type:"checkbox",...f})}}},9318:(e,a,n)=>{n.d(a,{$:()=>s});var i=n(4097);function s(e={}){let[a,n]=(0,i.zk)(e.value,e.defaultValue||[],e.onChange);return{value:a,setValue(a){e.isReadOnly||e.isDisabled||n(a)},isDisabled:e.isDisabled||!1,isReadOnly:e.isReadOnly||!1,isSelected:e=>a.includes(e),addValue(i){e.isReadOnly||e.isDisabled||a.includes(i)||n(a.concat(i))},removeValue(i){e.isReadOnly||e.isDisabled||a.includes(i)&&n(a.filter((e=>e!==i)))},toggleValue(i){e.isReadOnly||e.isDisabled||(a.includes(i)?n(a.filter((e=>e!==i))):n(a.concat(i)))}}}},4036:(e,a,n)=>{n.d(a,{l:()=>s});var i=n(4097);function s(e={}){let{isReadOnly:a}=e,[n,s]=(0,i.zk)(e.isSelected,e.defaultSelected||!1,e.onChange);return{isSelected:n,setSelected:function(e){a||s(e)},toggle:function(){a||s(!n)}}}}}]);