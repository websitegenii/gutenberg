"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[4333],{"./packages/components/src/base-control/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Xp:function(){return BaseControl}});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_visually_hidden__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/visually-hidden/component.tsx"),_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/base-control/styles/base-control-styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const BaseControl=_ref=>{let{__nextHasNoMarginBottom:__nextHasNoMarginBottom=!1,id:id,label:label,hideLabelFromVision:hideLabelFromVision=!1,help:help,className:className,children:children}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__.im,{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("components-base-control",className),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__.ob,{className:"components-base-control__field",__nextHasNoMarginBottom:__nextHasNoMarginBottom,children:[label&&id&&(hideLabelFromVision?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_visually_hidden__WEBPACK_IMPORTED_MODULE_3__.Z,{as:"label",htmlFor:id,children:label}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__.ar,{className:"components-base-control__label",htmlFor:id,children:label})),label&&!id&&(hideLabelFromVision?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_visually_hidden__WEBPACK_IMPORTED_MODULE_3__.Z,{as:"label",children:label}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BaseControl.VisualLabel,{children:label})),children]}),!!help&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__.vB,{id:id?id+"__help":void 0,className:"components-base-control__help",__nextHasNoMarginBottom:__nextHasNoMarginBottom,children:help})]})};BaseControl.displayName="BaseControl";const VisualLabel=_ref2=>{let{className:className,children:children,...props}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__.yF,{...props,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("components-base-control__label",className),children:children})};VisualLabel.displayName="VisualLabel",BaseControl.VisualLabel=VisualLabel,__webpack_exports__.ZP=BaseControl;try{useBaseControlProps.displayName="useBaseControlProps",useBaseControlProps.__docgenInfo={description:"Generate props for the `BaseControl` and the inner control itself.\n\nNamely, it takes care of generating a unique `id`, properly associating it with the `label` and `help` elements.",displayName:"useBaseControlProps",props:{label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The HTML `id` of the control element (passed in as a child to `BaseControl`) to which labels and help text are being generated.\nThis is necessary to accessibly associate the label with that element.\n\nThe recommended way is to use the `useBaseControlProps` hook, which takes care of generating a unique `id` for you.\nOtherwise, if you choose to pass an explicit `id` to this prop, you are responsible for ensuring the uniqueness of the `id`.",name:"id",required:!1,type:{name:"string"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional description for the control.\n\nIt is preferable to use plain text for `help`, as it can be accessibly associated with the control using `aria-describedby`.\nWhen the `help` contains links, or otherwise non-plain text content, it will be associated with the control using `aria-details`.",name:"help",required:!1,type:{name:"ReactNode"}},__nextHasNoMarginBottom:{defaultValue:{value:"false"},description:"Start opting into the new margin-free styles that will become the default in a future version.",name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/base-control/index.tsx#useBaseControlProps"]={docgenInfo:useBaseControlProps.__docgenInfo,name:"useBaseControlProps",path:"packages/components/src/base-control/index.tsx#useBaseControlProps"})}catch(__react_docgen_typescript_loader_error){}try{BaseControl.displayName="BaseControl",BaseControl.__docgenInfo={description:"`BaseControl` is a component used to generate labels and help text for components handling user inputs.\n\n```jsx\nimport { BaseControl, useBaseControlProps } from '@wordpress/components';\n\n// Render a `BaseControl` for a textarea input\nconst MyCustomTextareaControl = ({ children, ...baseProps }) => (\n\t// `useBaseControlProps` is a convenience hook to get the props for the `BaseControl`\n\t// and the inner control itself. Namely, it takes care of generating a unique `id`,\n\t// properly associating it with the `label` and `help` elements.\n\tconst { baseControlProps, controlProps } = useBaseControlProps( baseProps );\n\n\treturn (\n\t\t<BaseControl { ...baseControlProps } __nextHasNoMarginBottom={ true }>\n\t\t\t<textarea { ...controlProps }>\n\t\t\t  { children }\n\t\t\t</textarea>\n\t\t</BaseControl>\n\t);\n);\n```",displayName:"BaseControl",props:{__nextHasNoMarginBottom:{defaultValue:{value:"false"},description:"Start opting into the new margin-free styles that will become the default in a future version.",name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The HTML `id` of the control element (passed in as a child to `BaseControl`) to which labels and help text are being generated.\nThis is necessary to accessibly associate the label with that element.\n\nThe recommended way is to use the `useBaseControlProps` hook, which takes care of generating a unique `id` for you.\nOtherwise, if you choose to pass an explicit `id` to this prop, you are responsible for ensuring the uniqueness of the `id`.",name:"id",required:!1,type:{name:"string"}},help:{defaultValue:null,description:"Additional description for the control.\n\nIt is preferable to use plain text for `help`, as it can be accessibly associated with the control using `aria-describedby`.\nWhen the `help` contains links, or otherwise non-plain text content, it will be associated with the control using `aria-details`.",name:"help",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The content to be displayed within the `BaseControl`.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/base-control/index.tsx#BaseControl"]={docgenInfo:BaseControl.__docgenInfo,name:"BaseControl",path:"packages/components/src/base-control/index.tsx#BaseControl"})}catch(__react_docgen_typescript_loader_error){}try{BaseControl.VisualLabel.displayName="BaseControl.VisualLabel",BaseControl.VisualLabel.__docgenInfo={description:"`BaseControl.VisualLabel` is used to render a purely visual label inside a `BaseControl` component.\n\nIt should only be used in cases where the children being rendered inside `BaseControl` are already accessibly labeled,\ne.g., a button, but we want an additional visual label for that section equivalent to the labels `BaseControl` would\notherwise use if the `label` prop was passed.",displayName:"BaseControl.VisualLabel",props:{as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/base-control/index.tsx#BaseControl.VisualLabel"]={docgenInfo:BaseControl.VisualLabel.__docgenInfo,name:"BaseControl.VisualLabel",path:"packages/components/src/base-control/index.tsx#BaseControl.VisualLabel"})}catch(__react_docgen_typescript_loader_error){}try{VisualLabel.displayName="VisualLabel",VisualLabel.__docgenInfo={description:"`BaseControl.VisualLabel` is used to render a purely visual label inside a `BaseControl` component.\n\nIt should only be used in cases where the children being rendered inside `BaseControl` are already accessibly labeled,\ne.g., a button, but we want an additional visual label for that section equivalent to the labels `BaseControl` would\notherwise use if the `label` prop was passed.",displayName:"VisualLabel",props:{as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/base-control/index.tsx#VisualLabel"]={docgenInfo:VisualLabel.__docgenInfo,name:"VisualLabel",path:"packages/components/src/base-control/index.tsx#VisualLabel"})}catch(__react_docgen_typescript_loader_error){}try{basecontrol.displayName="basecontrol",basecontrol.__docgenInfo={description:"`BaseControl` is a component used to generate labels and help text for components handling user inputs.\n\n```jsx\nimport { BaseControl, useBaseControlProps } from '@wordpress/components';\n\n// Render a `BaseControl` for a textarea input\nconst MyCustomTextareaControl = ({ children, ...baseProps }) => (\n\t// `useBaseControlProps` is a convenience hook to get the props for the `BaseControl`\n\t// and the inner control itself. Namely, it takes care of generating a unique `id`,\n\t// properly associating it with the `label` and `help` elements.\n\tconst { baseControlProps, controlProps } = useBaseControlProps( baseProps );\n\n\treturn (\n\t\t<BaseControl { ...baseControlProps } __nextHasNoMarginBottom={ true }>\n\t\t\t<textarea { ...controlProps }>\n\t\t\t  { children }\n\t\t\t</textarea>\n\t\t</BaseControl>\n\t);\n);\n```",displayName:"basecontrol",props:{__nextHasNoMarginBottom:{defaultValue:{value:"false"},description:"Start opting into the new margin-free styles that will become the default in a future version.",name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The HTML `id` of the control element (passed in as a child to `BaseControl`) to which labels and help text are being generated.\nThis is necessary to accessibly associate the label with that element.\n\nThe recommended way is to use the `useBaseControlProps` hook, which takes care of generating a unique `id` for you.\nOtherwise, if you choose to pass an explicit `id` to this prop, you are responsible for ensuring the uniqueness of the `id`.",name:"id",required:!1,type:{name:"string"}},help:{defaultValue:null,description:"Additional description for the control.\n\nIt is preferable to use plain text for `help`, as it can be accessibly associated with the control using `aria-describedby`.\nWhen the `help` contains links, or otherwise non-plain text content, it will be associated with the control using `aria-details`.",name:"help",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The content to be displayed within the `BaseControl`.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/base-control/index.tsx#basecontrol"]={docgenInfo:basecontrol.__docgenInfo,name:"basecontrol",path:"packages/components/src/base-control/index.tsx#basecontrol"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/search-control/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./packages/compose/build-module/hooks/use-merge-refs/index.js"),_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/i18n/build-module/index.js"),_wordpress_icons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/icons/build-module/library/close-small.js"),_wordpress_icons__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/icons/build-module/icon/index.js"),_wordpress_icons__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/icons/build-module/library/search.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/src/button/index.js"),_base_control__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/components/src/base-control/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnforwardedSearchControl(_ref,forwardedRef){let{__nextHasNoMarginBottom:__nextHasNoMarginBottom,className:className,onChange:onChange,onKeyDown:onKeyDown,value:value,label:label,placeholder:placeholder=(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Search"),hideLabelFromVision:hideLabelFromVision=!0,help:help,onClose:onClose,...restProps}=_ref;const searchRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(),id=`components-search-control-${(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.Z)(SearchControl)}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_base_control__WEBPACK_IMPORTED_MODULE_9__.ZP,{__nextHasNoMarginBottom:__nextHasNoMarginBottom,label:label,id:id,hideLabelFromVision:hideLabelFromVision,help:help,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,"components-search-control"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"components-search-control__input-wrapper",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{...restProps,ref:(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__.Z)([searchRef,forwardedRef]),className:"components-search-control__input",id:id,type:"search",placeholder:placeholder,onChange:event=>onChange(event.target.value),onKeyDown:onKeyDown,autoComplete:"off",value:value||""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"components-search-control__icon",children:onClose?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_button__WEBPACK_IMPORTED_MODULE_5__.Z,{icon:_wordpress_icons__WEBPACK_IMPORTED_MODULE_6__.Z,label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Close search"),onClick:onClose}):value?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_button__WEBPACK_IMPORTED_MODULE_5__.Z,{icon:_wordpress_icons__WEBPACK_IMPORTED_MODULE_6__.Z,label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reset search"),onClick:()=>{var _searchRef$current;onChange(""),null===(_searchRef$current=searchRef.current)||void 0===_searchRef$current||_searchRef$current.focus()}}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_7__.Z,{icon:_wordpress_icons__WEBPACK_IMPORTED_MODULE_8__.Z})})]})})}UnforwardedSearchControl.displayName="UnforwardedSearchControl";const SearchControl=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(UnforwardedSearchControl);__webpack_exports__.Z=SearchControl;try{SearchControl.displayName="SearchControl",SearchControl.__docgenInfo={description:"SearchControl components let users display a search control.\n\n```jsx\nimport { SearchControl } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nfunction MySearchControl( { className, setState } ) {\n  const [ searchInput, setSearchInput ] = useState( '' );\n\n  return (\n    <SearchControl\n      value={ searchInput }\n      onChange={ setSearchInput }\n    />\n  );\n}\n```",displayName:"SearchControl",props:{label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"Additional description for the control.\n\nIt is preferable to use plain text for `help`, as it can be accessibly associated with the control using `aria-describedby`.\nWhen the `help` contains links, or otherwise non-plain text content, it will be associated with the control using `aria-details`.",name:"help",required:!1,type:{name:"ReactNode"}},__nextHasNoMarginBottom:{defaultValue:{value:"false"},description:"Start opting into the new margin-free styles that will become the default in a future version.",name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}},hideLabelFromVision:{defaultValue:{value:"true"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"A function that receives the value of the input when the value is changed.",name:"onChange",required:!0,type:{name:"(value: string) => void"}},onClose:{defaultValue:null,description:"When an `onClose` callback is provided, the search control will render a close button\nthat will trigger the given callback.\n\nUse this if you want the button to trigger your own logic to close the search field entirely,\nrather than just clearing the input value.",name:"onClose",required:!1,type:{name:"() => void"}},placeholder:{defaultValue:{value:"'Search'"},description:"A placeholder for the input.",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"The current value of the input.",name:"value",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/search-control/index.tsx#SearchControl"]={docgenInfo:SearchControl.__docgenInfo,name:"SearchControl",path:"packages/components/src/search-control/index.tsx#SearchControl"})}catch(__react_docgen_typescript_loader_error){}try{searchcontrol.displayName="searchcontrol",searchcontrol.__docgenInfo={description:"SearchControl components let users display a search control.\n\n```jsx\nimport { SearchControl } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nfunction MySearchControl( { className, setState } ) {\n  const [ searchInput, setSearchInput ] = useState( '' );\n\n  return (\n    <SearchControl\n      value={ searchInput }\n      onChange={ setSearchInput }\n    />\n  );\n}\n```",displayName:"searchcontrol",props:{label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},help:{defaultValue:null,description:"Additional description for the control.\n\nIt is preferable to use plain text for `help`, as it can be accessibly associated with the control using `aria-describedby`.\nWhen the `help` contains links, or otherwise non-plain text content, it will be associated with the control using `aria-details`.",name:"help",required:!1,type:{name:"ReactNode"}},__nextHasNoMarginBottom:{defaultValue:{value:"false"},description:"Start opting into the new margin-free styles that will become the default in a future version.",name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}},hideLabelFromVision:{defaultValue:{value:"true"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"A function that receives the value of the input when the value is changed.",name:"onChange",required:!0,type:{name:"(value: string) => void"}},onClose:{defaultValue:null,description:"When an `onClose` callback is provided, the search control will render a close button\nthat will trigger the given callback.\n\nUse this if you want the button to trigger your own logic to close the search field entirely,\nrather than just clearing the input value.",name:"onClose",required:!1,type:{name:"() => void"}},placeholder:{defaultValue:{value:"'Search'"},description:"A placeholder for the input.",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"The current value of the input.",name:"value",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/search-control/index.tsx#searchcontrol"]={docgenInfo:searchcontrol.__docgenInfo,name:"searchcontrol",path:"packages/components/src/search-control/index.tsx#searchcontrol"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/ui/utils/space.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{D:function(){return space}});function space(value){var _window$CSS,_window$CSS$supports;if(void 0===value)return;if(!value)return"0";const asInt="number"==typeof value?value:Number(value);return"undefined"!=typeof window&&null!==(_window$CSS=window.CSS)&&void 0!==_window$CSS&&null!==(_window$CSS$supports=_window$CSS.supports)&&void 0!==_window$CSS$supports&&_window$CSS$supports.call(_window$CSS,"margin",value.toString())||Number.isNaN(asInt)?value.toString():`calc(4px * ${value})`}},"./packages/icons/build-module/icon/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_exports__.Z=function Icon(_ref){let{icon:icon,size:size=24,...props}=_ref;return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon,{width:size,height:size,...props})}},"./packages/icons/build-module/library/close-small.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const closeSmall=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}));__webpack_exports__.Z=closeSmall},"./packages/icons/build-module/library/search.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const search=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1 1.1 3.4-2.9c1 .9 2.2 1.4 3.6 1.4 3 0 5.5-2.5 5.5-5.5C19 8.5 16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"}));__webpack_exports__.Z=search},"./packages/components/src/search-control/stories/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},WithOnClose:function(){return WithOnClose}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/search-control/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={title:"Components/SearchControl",component:___WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{onChange:{action:"onChange"}},parameters:{sourceLink:"packages/components/src/search-control",controls:{expanded:!0},docs:{source:{state:"open"}}}};__webpack_exports__.default=meta;const Template=_ref=>{let{onChange:onChange,...props}=_ref;const[value,setValue]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...props,value:value,onChange:function(){setValue(...arguments),onChange(...arguments)}})};Template.displayName="Template";const Default=Template.bind({});Default.args={label:"Label Text",help:"Help text to explain the input."};const WithOnClose=Template.bind({});WithOnClose.args={...Default.args},WithOnClose.argTypes={onClose:{action:"onClose"}},WithOnClose.parameters??={},WithOnClose.parameters.docs??={},WithOnClose.parameters.docs.description??={},WithOnClose.parameters.docs.description.story??="When an `onClose` callback is provided, the search control will render a close button\nthat will trigger the given callback.\n\nUse this if you want the button to trigger your own logic to close the search field entirely,\nrather than just clearing the input value.";try{ComponentMeta.displayName="ComponentMeta",ComponentMeta.__docgenInfo={description:"For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",displayName:"ComponentMeta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/search-control/stories/index.tsx#ComponentMeta"]={docgenInfo:ComponentMeta.__docgenInfo,name:"ComponentMeta",path:"packages/components/src/search-control/stories/index.tsx#ComponentMeta"})}catch(__react_docgen_typescript_loader_error){}try{WithOnClose.displayName="WithOnClose",WithOnClose.__docgenInfo={description:"When an `onClose` callback is provided, the search control will render a close button\nthat will trigger the given callback.\n\nUse this if you want the button to trigger your own logic to close the search field entirely,\nrather than just clearing the input value.",displayName:"WithOnClose",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/search-control/stories/index.tsx#WithOnClose"]={docgenInfo:WithOnClose.__docgenInfo,name:"WithOnClose",path:"packages/components/src/search-control/stories/index.tsx#WithOnClose"})}catch(__react_docgen_typescript_loader_error){}}}]);