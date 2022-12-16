"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[4491],{"./packages/a11y/build-module/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{D:function(){return speak}});var build_module=__webpack_require__("./packages/i18n/build-module/index.js");function addContainer(){let ariaLive=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"polite";const container=document.createElement("div");container.id=`a11y-speak-${ariaLive}`,container.className="a11y-speak-region",container.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),container.setAttribute("aria-live",ariaLive),container.setAttribute("aria-relevant","additions text"),container.setAttribute("aria-atomic","true");const{body:body}=document;return body&&body.appendChild(container),container}let previousMessage="";function speak(message,ariaLive){!function clear(){const regions=document.getElementsByClassName("a11y-speak-region"),introText=document.getElementById("a11y-speak-intro-text");for(let i=0;i<regions.length;i++)regions[i].textContent="";introText&&introText.setAttribute("hidden","hidden")}(),message=function filterMessage(message){return message=message.replace(/<[^<>]+>/g," "),previousMessage===message&&(message+=" "),previousMessage=message,message}(message);const introText=document.getElementById("a11y-speak-intro-text"),containerAssertive=document.getElementById("a11y-speak-assertive"),containerPolite=document.getElementById("a11y-speak-polite");containerAssertive&&"assertive"===ariaLive?containerAssertive.textContent=message:containerPolite&&(containerPolite.textContent=message),introText&&introText.removeAttribute("hidden")}!function domReady(callback){"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",callback):callback())}((function setup(){const introText=document.getElementById("a11y-speak-intro-text"),containerAssertive=document.getElementById("a11y-speak-assertive"),containerPolite=document.getElementById("a11y-speak-polite");null===introText&&function addIntroText(){const introText=document.createElement("p");introText.id="a11y-speak-intro-text",introText.className="a11y-speak-intro-text",introText.textContent=(0,build_module.__)("Notifications"),introText.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),introText.setAttribute("hidden","hidden");const{body:body}=document;return body&&body.appendChild(introText),introText}(),null===containerAssertive&&addContainer("assertive"),null===containerPolite&&addContainer("polite")}))},"./packages/element/build-module/raw-html.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return RawHTML}});var _react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function RawHTML(_ref){let{children:children,...props}=_ref,rawHtml="";return _react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).forEach((child=>{"string"==typeof child&&""!==child.trim()&&(rawHtml+=child)})),(0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div",{dangerouslySetInnerHTML:{__html:rawHtml},...props})}},"./packages/element/build-module/serialize.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var is_plain_object__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/is-plain-object/dist/is-plain-object.mjs"),change_case__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/param-case/dist.es2015/index.js"),_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/escape-html/build-module/index.js"),_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_raw_html__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/element/build-module/raw-html.js");const{Provider:Provider,Consumer:Consumer}=(0,_react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),ForwardRef=(0,_react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((()=>null)),ATTRIBUTES_TYPES=new Set(["string","boolean","number"]),SELF_CLOSING_TAGS=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),BOOLEAN_ATTRIBUTES=new Set(["allowfullscreen","allowpaymentrequest","allowusermedia","async","autofocus","autoplay","checked","controls","default","defer","disabled","download","formnovalidate","hidden","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","typemustmatch"]),ENUMERATED_ATTRIBUTES=new Set(["autocapitalize","autocomplete","charset","contenteditable","crossorigin","decoding","dir","draggable","enctype","formenctype","formmethod","http-equiv","inputmode","kind","method","preload","scope","shape","spellcheck","translate","type","wrap"]),CSS_PROPERTIES_SUPPORTS_UNITLESS=new Set(["animation","animationIterationCount","baselineShift","borderImageOutset","borderImageSlice","borderImageWidth","columnCount","cx","cy","fillOpacity","flexGrow","flexShrink","floodOpacity","fontWeight","gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart","lineHeight","opacity","order","orphans","r","rx","ry","shapeImageThreshold","stopOpacity","strokeDasharray","strokeDashoffset","strokeMiterlimit","strokeOpacity","strokeWidth","tabSize","widows","x","y","zIndex","zoom"]);function hasPrefix(string,prefixes){return prefixes.some((prefix=>0===string.indexOf(prefix)))}function isInternalAttribute(attribute){return"key"===attribute||"children"===attribute}function getNormalAttributeValue(attribute,value){return"style"===attribute?function renderStyle(style){if(!(0,is_plain_object__WEBPACK_IMPORTED_MODULE_4__.P)(style))return style;let result;for(const property in style){const value=style[property];if(null==value)continue;result?result+=";":result="";result+=getNormalStylePropertyName(property)+":"+getNormalStylePropertyValue(property,value)}return result}(value):value}const SVG_ATTRIBUTE_WITH_DASHES_LIST=["accentHeight","alignmentBaseline","arabicForm","baselineShift","capHeight","clipPath","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","dominantBaseline","enableBackground","fillOpacity","fillRule","floodColor","floodOpacity","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","horizAdvX","horizOriginX","imageRendering","letterSpacing","lightingColor","markerEnd","markerMid","markerStart","overlinePosition","overlineThickness","paintOrder","panose1","pointerEvents","renderingIntent","shapeRendering","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","textAnchor","textDecoration","textRendering","underlinePosition","underlineThickness","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","vHanging","vIdeographic","vMathematical","vectorEffect","vertAdvY","vertOriginX","vertOriginY","wordSpacing","writingMode","xmlnsXlink","xHeight"].reduce(((map,attribute)=>(map[attribute.toLowerCase()]=attribute,map)),{}),CASE_SENSITIVE_SVG_ATTRIBUTES=["allowReorder","attributeName","attributeType","autoReverse","baseFrequency","baseProfile","calcMode","clipPathUnits","contentScriptType","contentStyleType","diffuseConstant","edgeMode","externalResourcesRequired","filterRes","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","suppressContentEditableWarning","suppressHydrationWarning","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector"].reduce(((map,attribute)=>(map[attribute.toLowerCase()]=attribute,map)),{}),SVG_ATTRIBUTES_WITH_COLONS=["xlink:actuate","xlink:arcrole","xlink:href","xlink:role","xlink:show","xlink:title","xlink:type","xml:base","xml:lang","xml:space","xmlns:xlink"].reduce(((map,attribute)=>(map[attribute.replace(":","").toLowerCase()]=attribute,map)),{});function getNormalAttributeName(attribute){switch(attribute){case"htmlFor":return"for";case"className":return"class"}const attributeLowerCase=attribute.toLowerCase();return CASE_SENSITIVE_SVG_ATTRIBUTES[attributeLowerCase]?CASE_SENSITIVE_SVG_ATTRIBUTES[attributeLowerCase]:SVG_ATTRIBUTE_WITH_DASHES_LIST[attributeLowerCase]?(0,change_case__WEBPACK_IMPORTED_MODULE_1__.o)(SVG_ATTRIBUTE_WITH_DASHES_LIST[attributeLowerCase]):SVG_ATTRIBUTES_WITH_COLONS[attributeLowerCase]?SVG_ATTRIBUTES_WITH_COLONS[attributeLowerCase]:attributeLowerCase}function getNormalStylePropertyName(property){return property.startsWith("--")?property:hasPrefix(property,["ms","O","Moz","Webkit"])?"-"+(0,change_case__WEBPACK_IMPORTED_MODULE_1__.o)(property):(0,change_case__WEBPACK_IMPORTED_MODULE_1__.o)(property)}function getNormalStylePropertyValue(property,value){return"number"!=typeof value||0===value||CSS_PROPERTIES_SUPPORTS_UNITLESS.has(property)?value:value+"px"}function renderElement(element,context){let legacyContext=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null==element||!1===element)return"";if(Array.isArray(element))return renderChildren(element,context,legacyContext);switch(typeof element){case"string":return(0,_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_2__.r)(element);case"number":return element.toString()}const{type:type,props:props}=element;switch(type){case _react__WEBPACK_IMPORTED_MODULE_0__.StrictMode:case _react__WEBPACK_IMPORTED_MODULE_0__.Fragment:return renderChildren(props.children,context,legacyContext);case _raw_html__WEBPACK_IMPORTED_MODULE_3__.Z:const{children:children,...wrapperProps}=props;return renderNativeComponent(Object.keys(wrapperProps).length?"div":null,{...wrapperProps,dangerouslySetInnerHTML:{__html:children}},context,legacyContext)}switch(typeof type){case"string":return renderNativeComponent(type,props,context,legacyContext);case"function":return type.prototype&&"function"==typeof type.prototype.render?renderComponent(type,props,context,legacyContext):renderElement(type(props,legacyContext),context,legacyContext)}switch(type&&type.$$typeof){case Provider.$$typeof:return renderChildren(props.children,props.value,legacyContext);case Consumer.$$typeof:return renderElement(props.children(context||type._currentValue),context,legacyContext);case ForwardRef.$$typeof:return renderElement(type.render(props),context,legacyContext)}return""}function renderNativeComponent(type,props,context){let legacyContext=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},content="";if("textarea"===type&&props.hasOwnProperty("value")){content=renderChildren(props.value,context,legacyContext);const{value:value,...restProps}=props;props=restProps}else props.dangerouslySetInnerHTML&&"string"==typeof props.dangerouslySetInnerHTML.__html?content=props.dangerouslySetInnerHTML.__html:void 0!==props.children&&(content=renderChildren(props.children,context,legacyContext));if(!type)return content;const attributes=renderAttributes(props);return SELF_CLOSING_TAGS.has(type)?"<"+type+attributes+"/>":"<"+type+attributes+">"+content+"</"+type+">"}function renderComponent(Component,props,context){let legacyContext=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const instance=new Component(props,legacyContext);"function"==typeof instance.getChildContext&&Object.assign(legacyContext,instance.getChildContext());const html=renderElement(instance.render(),context,legacyContext);return html}function renderChildren(children,context){let legacyContext=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},result="";children=Array.isArray(children)?children:[children];for(let i=0;i<children.length;i++){result+=renderElement(children[i],context,legacyContext)}return result}function renderAttributes(props){let result="";for(const key in props){const attribute=getNormalAttributeName(key);if(!(0,_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_2__.$b)(attribute))continue;let value=getNormalAttributeValue(key,props[key]);if(!ATTRIBUTES_TYPES.has(typeof value))continue;if(isInternalAttribute(key))continue;const isBooleanAttribute=BOOLEAN_ATTRIBUTES.has(attribute);if(isBooleanAttribute&&!1===value)continue;const isMeaningfulAttribute=isBooleanAttribute||hasPrefix(key,["data-","aria-"])||ENUMERATED_ATTRIBUTES.has(attribute);("boolean"!=typeof value||isMeaningfulAttribute)&&(result+=" "+attribute,isBooleanAttribute||("string"==typeof value&&(value=(0,_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_2__.kb)(value)),result+='="'+value+'"'))}return result}__webpack_exports__.ZP=renderElement},"./packages/escape-html/build-module/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{kb:function(){return escapeAttribute},N2:function(){return escapeEditableHTML},r:function(){return escapeHTML},$b:function(){return isValidAttributeName}});const REGEXP_INVALID_ATTRIBUTE_NAME=/[\u007F-\u009F "'>/="\uFDD0-\uFDEF]/;function escapeAmpersand(value){return value.replace(/&(?!([a-z0-9]+|#[0-9]+|#x[a-f0-9]+);)/gi,"&amp;")}function escapeLessThan(value){return value.replace(/</g,"&lt;")}function escapeAttribute(value){return function __unstableEscapeGreaterThan(value){return value.replace(/>/g,"&gt;")}(function escapeQuotationMark(value){return value.replace(/"/g,"&quot;")}(escapeAmpersand(value)))}function escapeHTML(value){return escapeLessThan(escapeAmpersand(value))}function escapeEditableHTML(value){return escapeLessThan(value.replace(/&/g,"&amp;"))}function isValidAttributeName(name){return!REGEXP_INVALID_ATTRIBUTE_NAME.test(name)}}}]);