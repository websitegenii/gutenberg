"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[3909],{"./packages/components/src/border-control/stories/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},WithSlider:function(){return WithSlider},WithSliderCustomWidth:function(){return WithSliderCustomWidth},IsCompact:function(){return IsCompact},WithMultipleOrigins:function(){return WithMultipleOrigins},WithAlphaEnabled:function(){return WithAlphaEnabled}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/border-control/border-control/component.tsx"),_slot_fill__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/slot-fill/index.js"),_popover__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/popover/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={title:"Components (Experimental)/BorderControl",component:___WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{onChange:{action:"onChange"},width:{control:{type:"text"}},value:{control:{type:null}}},parameters:{sourceLink:"packages/components/src/border-control",controls:{expanded:!0},docs:{source:{state:"open"}}}};__webpack_exports__.default=meta;const Template=_ref=>{let{onChange:onChange,...props}=_ref;const[border,setBorder]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_slot_fill__WEBPACK_IMPORTED_MODULE_3__.zt,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{onChange:newBorder=>{setBorder(newBorder),onChange(newBorder)},value:border,...props}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_popover__WEBPACK_IMPORTED_MODULE_4__.Z.Slot,{})]})};Template.displayName="Template";const Default=Template.bind({});Default.args={colors:[{name:"Blue 20",color:"#72aee6"},{name:"Blue 40",color:"#3582c4"},{name:"Red 40",color:"#e65054"},{name:"Red 70",color:"#8a2424"},{name:"Yellow 10",color:"#f2d675"},{name:"Yellow 40",color:"#bd8600"}],label:"Border"};const WithSlider=Template.bind({});WithSlider.args={...Default.args,withSlider:!0};const WithSliderCustomWidth=Template.bind({});WithSliderCustomWidth.args={...Default.args,withSlider:!0,width:"150px"},WithSliderCustomWidth.storyName="With Slider (Custom Width)";const IsCompact=Template.bind({});IsCompact.args={...Default.args,isCompact:!0};const WithMultipleOrigins=Template.bind({});WithMultipleOrigins.args={...Default.args,colors:[{name:"Default",colors:[{name:"Gray 20",color:"#a7aaad"},{name:"Gray 70",color:"#3c434a"}]},{name:"Theme",colors:[{name:"Blue 20",color:"#72aee6"},{name:"Blue 40",color:"#3582c4"},{name:"Blue 70",color:"#0a4b78"}]},{name:"User",colors:[{name:"Green",color:"#00a32a"},{name:"Yellow",color:"#f2d675"}]}],__experimentalHasMultipleOrigins:!0};const WithAlphaEnabled=Template.bind({});WithAlphaEnabled.args={...Default.args,enableAlpha:!0},WithSlider.parameters??={},WithSlider.parameters.docs??={},WithSlider.parameters.docs.description??={},WithSlider.parameters.docs.description.story??="Render a slider beside the control.",WithSliderCustomWidth.parameters??={},WithSliderCustomWidth.parameters.docs??={},WithSliderCustomWidth.parameters.docs.description??={},WithSliderCustomWidth.parameters.docs.description.story??="When rendering with a slider, the `width` prop is useful to customize the width of the number input.",IsCompact.parameters??={},IsCompact.parameters.docs??={},IsCompact.parameters.docs.description??={},IsCompact.parameters.docs.description.story??="Restrict the width of the control and prevent it from expanding to take up additional space.\nWhen `true`, the `width` prop will be ignored.",WithMultipleOrigins.parameters??={},WithMultipleOrigins.parameters.docs??={},WithMultipleOrigins.parameters.docs.description??={},WithMultipleOrigins.parameters.docs.description.story??="The `colors` object can contain multiple origins.",WithAlphaEnabled.parameters??={},WithAlphaEnabled.parameters.docs??={},WithAlphaEnabled.parameters.docs.description??={},WithAlphaEnabled.parameters.docs.description.story??="Allow the alpha channel to be edited on each color.";try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/border-control/stories/index.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"packages/components/src/border-control/stories/index.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}try{WithSlider.displayName="WithSlider",WithSlider.__docgenInfo={description:"Render a slider beside the control.",displayName:"WithSlider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/border-control/stories/index.tsx#WithSlider"]={docgenInfo:WithSlider.__docgenInfo,name:"WithSlider",path:"packages/components/src/border-control/stories/index.tsx#WithSlider"})}catch(__react_docgen_typescript_loader_error){}try{WithSliderCustomWidth.displayName="WithSliderCustomWidth",WithSliderCustomWidth.__docgenInfo={description:"When rendering with a slider, the `width` prop is useful to customize the width of the number input.",displayName:"WithSliderCustomWidth",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/border-control/stories/index.tsx#WithSliderCustomWidth"]={docgenInfo:WithSliderCustomWidth.__docgenInfo,name:"WithSliderCustomWidth",path:"packages/components/src/border-control/stories/index.tsx#WithSliderCustomWidth"})}catch(__react_docgen_typescript_loader_error){}try{IsCompact.displayName="IsCompact",IsCompact.__docgenInfo={description:"Restrict the width of the control and prevent it from expanding to take up additional space.\nWhen `true`, the `width` prop will be ignored.",displayName:"IsCompact",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/border-control/stories/index.tsx#IsCompact"]={docgenInfo:IsCompact.__docgenInfo,name:"IsCompact",path:"packages/components/src/border-control/stories/index.tsx#IsCompact"})}catch(__react_docgen_typescript_loader_error){}try{WithMultipleOrigins.displayName="WithMultipleOrigins",WithMultipleOrigins.__docgenInfo={description:"The `colors` object can contain multiple origins.",displayName:"WithMultipleOrigins",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/border-control/stories/index.tsx#WithMultipleOrigins"]={docgenInfo:WithMultipleOrigins.__docgenInfo,name:"WithMultipleOrigins",path:"packages/components/src/border-control/stories/index.tsx#WithMultipleOrigins"})}catch(__react_docgen_typescript_loader_error){}try{WithAlphaEnabled.displayName="WithAlphaEnabled",WithAlphaEnabled.__docgenInfo={description:"Allow the alpha channel to be edited on each color.",displayName:"WithAlphaEnabled",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/border-control/stories/index.tsx#WithAlphaEnabled"]={docgenInfo:WithAlphaEnabled.__docgenInfo,name:"WithAlphaEnabled",path:"packages/components/src/border-control/stories/index.tsx#WithAlphaEnabled"})}catch(__react_docgen_typescript_loader_error){}}}]);