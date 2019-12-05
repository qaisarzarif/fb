if (self.CavalryLogger) { CavalryLogger.start_js(["9+tUq"]); }

__d("AdsSimplePopover.react",["AdsInterfacesLogEvents","AdsInterfacesLogger","FDSSimplePopover.react","FDSText.react","React","URIInitDataUtil","cxMargin","performanceNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function h(a){return a.content}a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),h=0;h<e;h++)f[h]=arguments[h];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={timeShown:null},d.$1=function(a){d.props.onToggle!=null&&d.props.onToggle(a);if(a)d.setState({timeShown:(g||(g=b("performanceNow")))()});else{a=d.state.timeShown;a!=null&&b("AdsInterfacesLogger").log({eventCategory:b("AdsInterfacesLogEvents").EventCategory.USER_ACTION,eventName:"info_tip_shown",data:{tip_id:d.props.tipID,duration:(g||(g=b("performanceNow")))()-a}});d.setState({timeShown:null})}},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this.props,c=a.tipID,d=a.content;a=babelHelpers.objectWithoutPropertiesLoose(a,["tipID","content"]);return b("React").jsx(b("FDSSimplePopover.react"),babelHelpers["extends"]({},a,{content:b("React").jsx(h,{content:d,tipID:c}),onToggle:this.$1}))};d.componentWillUnmount=function(){this.$1(!1)};return c}(b("React").PureComponent);a.defaultProps=b("FDSSimplePopover.react").defaultProps;e.exports=a}),null);
__d("AdsLabeledField.react",["cx","fbt","AdsGeodesicAdoption","AdsSimplePopover.react","FDSFormInputLayout.react","React","SUIBusinessTheme","SUIText.react","isTruthy","joinClasses"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("AdsGeodesicAdoption").AdsGeodesicAdoptionContext;c=b("React").PropTypes;d=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this,c=this.props,d=c.label,e=c.labelSupplementaryContent,f=c.helpText;c.optionalText;c=babelHelpers.objectWithoutPropertiesLoose(c,["label","labelSupplementaryContent","helpText","optionalText"]);var g=this.props.tipID!=null?this.props.tipID:"unknown",h=this.context;return h?b("React").jsx(b("FDSFormInputLayout.react"),{isOptional:this.props.optional===!0,label:d,labelSupplementaryContent:e,popover:f!=null?b("React").jsx(b("AdsSimplePopover.react"),{content:f,position:"above",tipID:g}):null,children:function(){return b("React").jsx("div",{className:(d!=null&&!h?"_3bv-":"")+(h?" _21op":""),children:a.props.children})}}):b("React").jsxs("div",babelHelpers["extends"]({},c,{className:b("joinClasses")(this.props.className,"_3bvz"),children:[this.$1(),b("React").jsx("div",{className:d?"_3bv-":"",children:this.props.children})]}))};d.$2=function(){var a=null;this.props.optional===!0&&(a=b("React").jsx(b("SUIText.react"),{shade:"light",size:this.props.labelSize,theme:b("SUIBusinessTheme"),weight:"normal",children:this.props.optionalText}));return b("React").jsx("label",{className:(this.props.dakerLabelText?"":"_3759")+(this.props.dakerLabelText?" _7o1u":"")+" _3bv_"+(this.props.labelSize==="small"?" _3qwj":"")+(this.props.labelSize==="medium"?" _3qwk":"")+(this.props.htmlFor?"":" _3hy-")+" _11md",htmlFor:this.props.htmlFor,children:h._("{Part of label for an ads field must have a value.} {Part of label for a field that doesn't need a value}",[h._param("Part of label for an ads field must have a value.",this.props.label),h._param("Part of label for a field that doesn't need a value",a)])})};d.$1=function(){var a=this.props.helpText,c=this.props.tooltipWidth,d=this.$2(),e=this.props.tipID!=null?this.props.tipID:"unknown";return b("isTruthy")(a)?b("React").jsx(b("AdsSimplePopover.react"),{content:a,contentWidthUseSparingly:b("isTruthy")(c)?c:268,linger:this.props.helpLinger,tipID:e,children:d}):d};return c}(b("React").Component);d.propTypes={className:c.string,dakerLabelText:c.bool,helpLinger:c.number,helpText:c.node,htmlFor:c.string,label:c.node,labelSupplementaryContent:c.node,labelSize:c.oneOf(["small","medium"]),optional:c.bool,optionalText:c.node,tipID:c.string,tooltipWidth:c.number};d.defaultProps={label:null,labelSize:"small",optionalText:h._("(pilihan)")};d.contextType=a;e.exports=d}),null);
__d("AdsPopoverLink_DEPRECATED.react",["ix","cx","AdsFBIconDownsized.react","ContextualDialog.react","Image.react","LayerFadeOnHide","React","SUIBusinessTheme","SUICloseButton.react","UserAgent_DEPRECATED","asset","clearTimeout","joinClasses","setTimeout"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").Component;var i={imgNormal:g("403740"),imgHover:g("403741")};c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={showHelp:!!d.props.defaultVisible_DEPRECATED,dontShowLayer:!1},d.$3=function(){d.props.onHover&&d.props.onHover(),b("clearTimeout")(d.$1),d.$2(!0),d.setState({dontShowLayer:!1})},d.$4=function(){b("clearTimeout")(d.$1),d.state.dontShowLayer||d.$2(!0)},d.$5=function(){b("clearTimeout")(d.$1),d.props.onMouseLeave&&d.props.onMouseLeave(),d.props.linger?d.$1=b("setTimeout")(d.$2.bind(babelHelpers.assertThisInitialized(d),!1),d.props.linger):d.$2(!1)},d.showHelp=function(a){d.$2(!0),a&&(b("clearTimeout")(d.$1),d.$1=b("setTimeout")(d.$2.bind(babelHelpers.assertThisInitialized(d),!1),a))},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentWillUnmount=function(){b("clearTimeout")(this.$1)};d.$2=function(a){if(a===this.state.showHelp)return;a||this.setState({dontShowLayer:!0});this.setState({showHelp:a});!a&&b("UserAgent_DEPRECATED").webkit()&&(this.setState({showHelp:!a}),this.setState({showHelp:a}))};d.renderLayers=function(){var a=this;if(!this.state.showHelp||this.props.disabled_DEPRECATED)return null;var c=this.props.showCloseButton_DEPRECATED?b("React").jsx("div",{className:"_3wee",children:b("React").jsx(b("SUICloseButton.react"),{theme:b("SUIBusinessTheme"),onClick:this.$5})}):null,d=this.props.popover;this.props.autoWrapChildrenInPopover&&(d=b("React").Children.map(d,function(a,c){return!a?null:b("React").jsx("div",{className:"_1vor",children:a},c)}));return b("React").jsx(b("ContextualDialog.react"),{alignment:this.props.alignment||"left",behaviors:this.props.behaviors_DEPRECATED,causalElement:this.refs.tipIcon,contextRef:function(){return a.refs.tipIcon},focusContextOnHide:this.props.focusContextOnHide_DEPRECATED,insertParent:this.props.insertParent_DEPRECATED,offsetX:this.props.offsetX_DEPRECATED,offsetY:this.props.offsetY_DEPRECATED,position:this.props.position||"right",shown:this.state.showHelp,width:this.props.width,children:b("React").jsxs("div",{className:this.props.containerClassName,onMouseEnter:this.$4,onMouseLeave:this.$5,children:[c,d]})},"tipContextualLayer")};d.render=function(){var a=this.state.showHelp?this.props.imgHover||i.imgHover:this.props.imgNormal||i.imgNormal;a=this.props.showIcon?this.props.imgHover||this.props.imgNormal?b("React").jsx(b("AdsFBIconDownsized.react"),{className:b("joinClasses")(this.props.className,"_541d"),src:a}):b("React").jsx(b("Image.react"),{className:b("joinClasses")(this.props.className,"_541d"),src:a}):null;var c=this.state.showHelp&&this.props.childrenHover_DEPRECATED?this.props.childrenHover_DEPRECATED:this.props.children;return b("React").jsxs("span",{children:[b("React").jsxs("span",{className:b("joinClasses")("_3wef",this.props.linkContainerClassName),ref:"tipIcon",tabIndex:0,onMouseEnter:this.$3,onMouseLeave:this.$5,onMouseUp:this.props.onClick_DEPRECATED,children:[b("React").jsx("span",{className:"_3weg",children:c}),a]}),this.renderLayers()]})};return c}(a);c.defaultProps={autoWrapChildrenInPopover:!1,behaviors_DEPRECATED:{LayerFadeOnHide:b("LayerFadeOnHide")},containerClassName:"_3blz",focusContextOnHide_DEPRECATED:!0,linger:200,showCloseButton_DEPRECATED:!1,showIcon:!0,disabled_DEPRECATED:!1,defaultVisible_DEPRECATED:!1};e.exports=c}),null);
__d("AdsValidationIconFlyout.react",["cx","AdsValidationIconType","ContextualDialog","ContextualDialogArrow","ContextualLayerAutoFlip","LayerAutoFocus","LayerRefocusOnHide","LayerRemoveOnHide","ReactLayer"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=[b("ContextualLayerAutoFlip"),b("ContextualDialogArrow"),b("LayerRemoveOnHide")],i=[(a=b("AdsValidationIconType")).ERROR,a.ERROR_IMAGE,a.ERROR_WHITE,a.WARNING];c=b("ReactLayer").createClass({createLayer:function(a){var c=this.props.contextNode,d="_3hyi";this.props.isError||(d="_n2c");d={wrapperClassName:d,arrowDimensions:{offset:12,length:22}};c={addedBehaviors:h,alignment:this.props.alignment,context:c,position:this.props.position,theme:d};d=new(b("ContextualDialog"))(c,a);d.disableBehavior(b("LayerAutoFocus"));d.disableBehavior(b("LayerRefocusOnHide"));d.conditionShow(this.props.shown);return d},receiveProps:function(a){var b=this.props.contextNode;this.layer.setContext(b);this.layer.conditionShow(a.shown)}});c.isTypeSupported=function(a){return i.indexOf(a)>-1};e.exports=c}),null);
__d("AdsValidationIcon.react",["cssVar","cx","AdsPopoverLink_DEPRECATED.react","AdsValidationIconFlyout.react","AdsValidationIconType","DOMContainer.react","Image.react","React","ReactDOM","SUIBusinessTheme","SUIText.react","debounce","joinClasses"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={showFlyout:!1},c.$4=function(){c.$1&&c.$1.reset(),c.$3(!0)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentWillUnmount=function(){this.$1!=null&&this.$1.reset()};d.render=function(){__p&&__p();var a=this,c=this.props,d=c.listSymbol,e=c.messages,f=c.type,g=c.className;c=babelHelpers.objectWithoutPropertiesLoose(c,["listSymbol","messages","type","className"]);var h=b("joinClasses")(g,"_2kdf");e=this.$2(e,d);if(e.length===0)return b("React").jsx("span",babelHelpers["extends"]({},c,{className:h,children:b("React").jsx(b("Image.react"),{src:f})}));if(b("AdsValidationIconFlyout.react").isTypeSupported(f)){this.$1=b("debounce")(function(){a.$3(!1)},this.props.linger);d=null;this.state.showFlyout&&(d=b("React").jsx(b("AdsValidationIconFlyout.react"),babelHelpers["extends"]({},c,{alignment:this.props["data-tooltip-alignh"],contextNode:b("ReactDOM").findDOMNode(this),position:this.props["data-tooltip-position"],shown:!0,type:f,children:b("React").jsxs("span",{onMouseEnter:this.$4,onMouseLeave:this.$1,children:[this.$5(),e]})})));return b("React").jsxs("span",babelHelpers["extends"]({},c,{className:h,onMouseEnter:this.$4,onMouseLeave:this.$1,children:[b("React").jsx(b("Image.react"),{src:f}),d]}))}h=parseInt("334",10);return b("React").jsx("span",babelHelpers["extends"]({},c,{className:g,children:b("React").jsx(b("AdsPopoverLink_DEPRECATED.react"),{imgHover:f,imgNormal:f,popover:e,position:"above",width:h})}))};d.$5=function(){return this.props.title!=null?b("React").jsx(b("SUIText.react"),{className:"_2pim",display:"block",size:"meta1",theme:b("SUIBusinessTheme"),weight:"bold",children:this.props.title}):null};d.$3=function(a){a!==this.state.showFlyout&&this.setState({showFlyout:a})};d.$2=function(a,c){var d=this;if(a.length===0)return[];var e=a.length>1?c:null;return a.map(function(a,c){return d.props.forceCloneDocFragment&&a instanceof DocumentFragment?b("React").jsxs("div",{children:[e,b("React").jsx(b("DOMContainer.react"),{children:a.cloneNode(!0)})]},"error_"+c):b("React").jsxs("div",{children:[e,a]},"error_"+c)})};return c}(b("React").PureComponent);a.defaultProps={forceCloneDocFragment:!1,isError:!0,listSymbol:"",messages:[],type:b("AdsValidationIconType").SUCCESS,linger:200};e.exports=a}),null);
__d("AdsTextInput.react",["cx","fbt","invariant","AdsGeodesicAdoption","AdsLabeledField.react","AdsPathLink","AdsValidationIcon.react","AdsValidationIconType","DOM","FDSButton.react","FDSSpinner.react","FDSText.react","Image.react","Keys","React","ReactDOM","ReactInputSelection","XUIError.react","cxMargin","debounce","getObjectValues","joinClasses"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();c=b("AdsGeodesicAdoption").AdsGeodesicAdoptionContext;var j=b("AdsPathLink").Activatable;d=b("React").PropTypes;var k=16,l=750;f=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$7=function(){d.props.value!==d.state.displayValue&&(!d.props.onChange&&!d.props.onImmediateChange?d.setState({displayValue:d.props.value||""}):d.props.onChange&&d.props.onChange(d.state.displayValue))},d.state={focused:!1,debouncedDisplayValueMightChange:b("debounce")(d.$7,l,babelHelpers.assertThisInitialized(d)),displayValue:d.props.value||"",prevPropsValue:d.props.value},d.$10=function(a){d.focusInput(0,(a=d.props.value)==null?void 0:a.length)},d.$16=function(a){__p&&__p();if(!d.refs.shadowText)return;var c=d.state.displayValue;c&&(c=d.$18(c));var e;!c&&!d.state.focused&&(c=d.props.placeholder?d.props.placeholder.toString():"",e=!0);if(c===d.$5&&!a)return;d.$5=c;a=b("ReactDOM").findDOMNode(d.refs.shadowText);var f=b("ReactDOM").findDOMNode(d.refs.input);if(e)b("DOM").setContent(a,c);else if(c){var g=d.props.maxLength;typeof g!=="number"&&(g=Number.MAX_VALUE);c=n(c,g,d.props.badTextRules);g=p(f);a.style.direction=g?"rtl":"ltr";a.style.textAlign=g?"right":"left";a.innerHTML=c}g=d.props.textAreaMinHeight;g!=null||i(0,6027);d.props.isAutoSized&&(g=Math.max(a.offsetHeight,g,k));f.style.minHeight=g+"px";d.$3=g},d.$17=function(){d.setState({focused:!0}),d.$4&&window.clearInterval(d.$4),d.$4=window.setInterval(d.$16,150),d.$16(!0),d.props.onFocus&&d.props.onFocus()},d.$19=function(){window.clearInterval(d.$4),delete d.$4,d.$16(!0),d.setState({focused:!1},function(){d.$7(),d.state.debouncedDisplayValueMightChange.reset(),d.props.onBlur&&d.props.onBlur()})},d.$20=function(a){d.setState({displayValue:a.target.value},d.state.debouncedDisplayValueMightChange),d.props.onImmediateChange&&d.props.onImmediateChange(a.target.value)},d.$21=function(a){__p&&__p();var c,e=a.currentTarget;if(e.tagName==="TEXTAREA"){switch(a.keyCode){case b("Keys").RETURN:d.props.allowNewLines||(c=!0);d.$7();break;case b("Keys").SPACE:var f=b("ReactInputSelection").getSelection(e);c=q(e.value,f.start,f.end);break}c&&a.preventDefault()}d.props.onKeyDown&&d.props.onKeyDown(a)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this.context,c=this.state.focused,d=this.$8();Array.isArray(this.props.errors)?this.$1=this.props.errors:this.$1=this.props.errors?b("getObjectValues")(this.props.errors):[];this.$6=this.props.warnings?b("getObjectValues")(this.props.warnings):[];c=b("joinClasses")(this.props.className,"_2vl4"+(c?" _2vl5":"")+(this.props.multiline?" _2vl6":"")+(this.$1.length?" _2vl7":"")+(this.$1.length&&c?" _2vl8":"")+(this.$6.length&&!this.$1.length?" _5nkb":"")+(this.$6.length&&c&&!this.$1.length?" _5nki":"")+" _1h18"+(c?" _1h19":"")+(this.props.multiline?" _1h1a":"")+(this.$1.length?" _1h1c":"")+(this.$1.length&&c?" _1h1e":"")+(this.$6.length&&!this.$1.length?" _5nkl":"")+(this.$6.length&&c&&!this.$1.length?" _5nkm":"")+(this.props.disabled?" _2-om":""));var e={backgroundColor:this.props.backgroundColor};d=this.$9(d);return b("React").jsx(b("XUIError.react"),babelHelpers["extends"]({},this.props,{children:b("React").jsx(j,{onActivate:this.$10,children:b("React").jsxs("div",{className:c,children:[!a&&d,this.$11(d),b("React").jsx(m,{value:this.props.auxiliaryValue}),b("React").jsxs("div",{className:"_2vl9 _1h1f"+(this.props.textInputIndicator!==void 0?" _31wk":""),style:e,children:[b("React").jsxs("div",{className:"_2vla _1h1g",children:[this.$12(),this.$13()]}),this.$14()]}),this.$15()]})})}))};c.getDerivedStateFromProps=function(a,b){return a.value!==b.prevPropsValue?a.value!==b.displayValue&&!b.debouncedDisplayValueMightChange.isPending()?babelHelpers["extends"]({},b,{displayValue:a.value||"",prevPropsValue:a.value}):babelHelpers["extends"]({},b,{prevPropsValue:a.value}):null};d.componentDidMount=function(){var a=this;this.$2=!0;this.$16(!0);this.props.autoFocus&&window.setTimeout(function(){a.focusInput()},1)};d.componentWillUnmount=function(){this.$2=!1,this.$4&&window.clearInterval(this.$4),this.state.debouncedDisplayValueMightChange.reset(),delete this.$4,this.props.value!==this.state.displayValue&&this.props.onChange&&this.props.onChange(this.state.displayValue)};d.componentDidUpdate=function(){this.$16(!0)};d.focusInput=function(a,c){if(this.state.focused||!this.$2)return;var d=b("ReactDOM").findDOMNode(this.refs.input);d.focus&&d.offsetHeight&&(d.focus(),(a!==void 0||c!==void 0)&&b("ReactInputSelection").setSelection(d,{start:a,end:c}),this.$17())};d.scrollIntoView=function(){if(this.$2){var a=b("ReactDOM").findDOMNode(this.refs.input);a.scrollIntoView&&a.offsetHeight&&a.scrollIntoView()}};d.$11=function(a){if(this.props.label){var c=this.context;return b("React").jsx(b("AdsLabeledField.react"),{helpLinger:this.props.helpLinger,helpText:this.props.helpText,htmlFor:this.props.id,label:this.props.label,labelSupplementaryContent:c?a:null,optional:this.props.optional,tipID:this.props.tipID})}else if(this.props.maxLength&&!this.props.hideMaxLength)return b("React").jsx("i",{children:"\u200b"});return null};d.$15=function(){return!this.props.sublabel?null:b("React").jsx("div",{className:"_2vlf _1h1h",children:this.props.sublabel})};d.$12=function(){var a=this.$18(this.state.displayValue||""),c=null;this.$1.length?c=b("React").jsx(b("AdsValidationIcon.react"),{className:"_2vlg _1h25",listSymbol:"\u2022\u2002",messages:this.$1,type:b("AdsValidationIconType").ERROR}):this.$6.length&&(c=b("React").jsx(b("AdsValidationIcon.react"),{className:"_2vlg _1h25",isError:!1,listSymbol:"\u2022\u2002",messages:this.$6,type:b("AdsValidationIconType").WARNING}));var d=a||this.state.focused?null:this.props.isDefaultTextLoading?this.props.defaultTextLoadingPlaceholder:this.props.placeholder;if(d){var e;this.props.isDefaultTextLoading&&(e=b("React").jsx("span",{className:"_3-8_",children:b("React").jsx(b("FDSSpinner.react"),{shade:"dark"})}));d=b("React").jsxs("div",{className:"_2gtz",children:[e,d]})}return b("React").jsxs("div",{children:[d,b("React").jsx("textarea",{"aria-label":this.props["aria-label"],className:"_2vli _2vlj _1h26 _1h27"+(this.$1.length||this.$6.length?" _1bev":""),"data-testid":this.props["data-testid"],dir:"auto",disabled:this.props.disabled,id:this.props.id,maxLength:this.props.enforceMaxLength?this.props.maxLength:null,ref:"input",value:a,onBlur:this.$19,onChange:this.$20,onFocus:this.$17,onKeyDown:this.$21,onKeyUp:this.props.onKeyUp}),this.props.extra?b("React").jsx("div",{className:"_2vlg"+(c!=null?" _8l4d":""),children:this.props.extra}):null,c]})};d.$14=function(){return this.props.textInputIndicator!==void 0?b("React").jsx("div",{className:"_6yy-",children:b("React").jsx(b("FDSButton.react"),{icon:b("React").jsx(b("Image.react"),{src:this.props.textInputIndicator.icon}),isDisabled:this.props.textInputIndicator.isDisabled,label:"",size:"small",tooltip:this.props.textInputIndicator.tooltip,use:"flat",onClick:this.props.textInputIndicator.onClick})}):null};d.$13=function(){var a="_2vlk"+(this.state.displayValue?"":" _2vll")+(this.$1.length||this.$6.length?" _1bew":"");return b("React").jsx("div",{"aria-hidden":"true",className:a,ref:"shadowText"})};d.$9=function(a){if(a===Infinity||this.props.hideMaxLength)return null;var c="_2vln"+(a>=0&&a<15?" _2vlo":"")+(a<0?" _2vlp":"");return b("React").jsx("div",{className:c,children:a})};d.$8=function(){var a=this.props.maxLength;if(typeof a!=="number")return Infinity;var b=this.state.displayValue?this.state.displayValue.length:0;return a-b};d.$18=function(a){return typeof a!=="string"?a:a?a.replace(/[ \t]{3,}/g," "):""};return c}(b("React").Component);f.propTypes=babelHelpers["extends"]({"aria-label":d.oneOfType([d.node,d.string]),"data-testid":d.string,allowNewLines:d.bool,autoFocus:d.bool,auxiliaryValue:d.string,backgroundColor:d.string,badTextRules:d.array,defaultTextLoadingPlaceholder:d.oneOfType([d.node,d.string]),disabled:d.bool,enforceMaxLength:d.bool,errors:d.oneOfType([d.object,d.array]),extra:d.node,helpLinger:d.number,helpText:d.node,hideMaxLength:d.bool,id:d.string,isAutoSized:d.bool,isDefaultTextLoading:d.bool,label:d.oneOfType([d.string,d.node]),maxLength:d.number,multiline:d.bool,optional:d.bool,placeholder:d.oneOfType([d.string,d.node]),sublabel:d.string,textAreaMinHeight:d.number,textInputIndicator:d.object,tipID:d.string,value:d.string,warnings:d.object},b("XUIError.react").propTypes,{onChange:d.func,onBlur:d.func,onFocus:d.func,onKeyDown:d.func,onKeyUp:d.func,onImmediateChange:d.func});f.contextType=c;f.defaultProps={autoFocus:!1,backgroundColor:"#fff",defaultTextLoadingPlaceholder:h._("Teks lalai dimuatkan"),isAutoSized:!0,isDefaultTextLoading:!1,textAreaMinHeight:0,value:""};function m(a){if(a.value===null||a.value===void 0)return null;return a.value===""?b("React").jsx("i",{children:"\u200b"}):b("React").jsx("div",{className:"_6v4p",children:b("React").jsx(b("FDSText.react"),{color:"placeholder",size:"body3",children:a.value})})}function n(a,c,d){__p&&__p();a=String(a);var e=a.substr(0,c),f=a.substr(c)+"\n";a=a.replace(/\u200b/g,"");c="\u200b";var g=c+"_START_"+c,h=c+"_CLOSE_"+c;a=c+"_N_"+c;var i=c+"_S_"+c,j=/[\n]/g,k=/\s/g,l="_2vlb";l='<span className="'+l+'">';var m="</span>";Array.isArray(d)&&d.forEach(function(a){var b=function(a){return a==="\u200b"?a:g+a+h};e=e.replace(a,b);f=f.replace(a,b)});e=e.replace(j,a).replace(k,i);f=f.replace(j,a).replace(k,i);f===a&&(f="");d=b("DOM").create("div");d.appendChild(b("DOM").create("span",{className:"_2vlc"},e));d.appendChild(b("DOM").create("span",{className:"_2vld"},f));j=d.innerHTML;return j.split(a).join("<br />").split(i).join("<wbr /> ").split(g).join(l).split(h).join(m).concat(c)}function o(a){return a===" "||a==="\xa0"}function p(b){if(a.getComputedStyle)return a.getComputedStyle(b).direction==="rtl";else return!1}function q(a,b,c){__p&&__p();if(b===c){c=b>1?a.charAt(b-2):"\0";var d=b>0?a.charAt(b-1):"\0",e=a.charAt(b);a=b<a.length-1?a.charAt(b+1):"\0";b=o(e)&&o(a);a=o(d)&&o(e);e=o(d)&&o(c);return b||a||e}return!1}e.exports=f}),null);
__d("CometMapReportTypes",["fbt"],(function(a,b,c,d,e,f,g){"use strict";a={lineLabel:{hint:g._("Which road is incorrectly named? (optional)"),label:g._("Nama Jalan"),title:g._("Report Problem With Road Name")},line:{hint:g._("Jalan yang manakah tersilap bentuk? (opsyenal)"),label:g._("Bentuk Jalan"),title:g._("Laporkan Masalah dengan Bentuk Jalan")},lineMissing:{hint:g._("Jalan mana yang tiada? (opsyenal)"),label:g._("Jalan yang hilang"),title:g._("Laporkan Jalan Hilang")},polygon:{hint:g._("Which building, park, or body of water is incorrect? (optional)"),label:g._("Bentuk atau Nama Bangunan, Taman, atau Jisim Air"),title:g._("Lapor Masalah Dengan Bentuk atau Nama Bangunan, atau Sejisim Air")},border:{hint:g._("Sempadan manakah yang tersilap lukis? (opsyenal)"),label:g._("Negara, Negeri atau Sempadan Bandar"),title:g._("Laporkan Masalah dengan Sempadan")},administrative:{hint:g._("Nama manakah yang tak betul? (opsyenal)"),label:g._("Nama Bandar, Negeri atau Negara"),title:g._("Laporkan masalah dengan Negara, Negeri atau Nama Bandar")},other:{hint:g._("Apa silapnya peta ini? (opsyenal)"),label:g._("Lain-lain"),title:g._("Laporkan Masalah Peta")}};e.exports=a}),null);
__d("GridInputLabel.react",["cx","invariant","Grid.react","React","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=b("Grid.react").GridItem;a=b("React").PropTypes;var j=0;function k(){return"js_grid_input_label_"+j++}c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){this.props.children.length===2||h(0,143);var a=this.props.children[0],c=this.props.children[1],d=a.type==="input";a=b("React").cloneElement(a,{className:b("joinClasses")(a.props.className,"uiGridInputLabelInput"+(d&&a.props.type==="radio"?" uiInputLabelRadio":"")+(d&&a.props.type==="checkbox"?" uiInputLabelCheckbox":"")),id:a.props.id||k()});c=b("React").cloneElement(c,{className:b("joinClasses")(c.props.className,"uiInputLabelLabel"),htmlFor:a.props.id});d="uiInputLabel clearfix"+(this.props.display==="inline"?" inlineBlock":"")+(d?" uiInputLabelLegacy":"");return b("React").jsx("div",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,d),children:b("React").jsxs(b("Grid.react"),{cols:2,children:[b("React").jsx(i,{children:a}),b("React").jsx(i,{children:c})]})}))};return c}(b("React").Component);c.propTypes={display:a.oneOf(["block","inline"])};c.defaultProps={display:"block"};e.exports=c}),null);
__d("XUIRadioListItem.react",["cx","GridInputLabel.react","InputLabel.react","KeyStatus","React","VirtualCursorStatus","XUIRadioInput.react","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("KeyStatus").isKeyDown;a=b("React").PropTypes;var i=b("VirtualCursorStatus").isVirtualCursorTriggered;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={showFocusRing:!1},c.$1=function(){c.setState({showFocusRing:!1})},c.$2=function(){(h()||i())&&c.setState({showFocusRing:!0})},c.$3=function(a){c.props.onSelect&&c.props.onSelect(c.props.value)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=this.props.selectedValue===this.props.value,c=!!this.props.disabled,d=this.props.centered?b("GridInputLabel.react"):b("InputLabel.react");return b("React").jsx("li",{"aria-checked":a,"aria-disabled":c,className:b("joinClasses")(this.props.className,this.state.showFocusRing?"":"_1az7"),onBlur:this.$1,onFocus:this.$2,onKeyDown:this.props.onKeyDown,ref:this.props.setupRadioRef,role:"radio",tabIndex:this.props.tabIndex,children:b("React").jsxs(d,{"aria-label":this.props["aria-label"],"data-hover":this.props["data-hover"],"data-testid":this.props["data-testid"],"data-tooltip-content":this.props["data-tooltip-content"],"data-tooltip-position":this.props["data-tooltip-position"],display:"inline",children:[b("React").jsx(b("XUIRadioInput.react"),{checked:a,disabled:c,name:this.props.name,onChange:this.$3,tabIndex:-1,value:this.props.value,labelDataTestID:this.props.inputLabelTestID}),b("React").jsx("label",{children:this.props.children})]})})};return c}(b("React").Component);c.defaultProps={centered:!1,disabled:!1};c.propTypes={centered:a.bool,"data-testid":a.string,disabled:a.bool,inputLabelTestID:a.string,name:a.string,onKeyDown:a.func,onSelect:a.func,selectedValue:a.any,setupRadioRef:a.func,tabIndex:a.number,value:a.any};e.exports=c}),null);
__d("XUIRadioList.react",["Focus","React","RTLKeys","XUIRadioListItem.react"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=new Map(),d.$2=new Map(),d.$4=function(a){__p&&__p();return function(c){__p&&__p();switch(c.keyCode){case b("RTLKeys").UP:case b("RTLKeys").getLeft():c.preventDefault();d.$3(a-1);break;case b("RTLKeys").DOWN:case b("RTLKeys").getRight():c.preventDefault();d.$3(a+1);break;case b("RTLKeys").SPACE:c.preventDefault();d.$3(a);break}}},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$3=function(a){a=a;a>=this.$1.size?a=0:a<0&&(a=this.$1.size-1);var c=this.$1.get(a);a=this.$2.get(a);if(!c||!a)return;c.props.disabled||a.getElementsByTagName("input")[0].click();b("Focus").set(a)};d.render=function(){var a=this,c=b("React").Children.map(this.props.children,function(a){return a?a.props.value:null}).some(function(b){return b===a.props.selectedValue}),d=b("React").Children.map(this.props.children,function(a,d){var e=this;return a===null?null:b("React").cloneElement(a,{name:this.props.name,onKeyDown:this.$4(d),onSelect:this.props.onValueChange,ref:function(a){e.$1.set(d,a)},selectedValue:this.props.selectedValue,setupRadioRef:function(a){e.$2.set(d,a)},tabIndex:this.props.selectedValue===a.props.value||!c&&d===0?0:-1})},this),e=this.props.selectedValue!==void 0&&!this.props.onValueChange;return b("React").jsx("ul",babelHelpers["extends"]({},this.props,{"aria-readonly":e,name:null,role:"radiogroup",children:d}))};return c}(b("React").Component);a.Item=b("XUIRadioListItem.react");e.exports=a}),null);
__d("FBTilesReportDialogItems.react",["React","XUIRadioList.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("XUIRadioList.react").Item;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={selectedType:"other"},c.$1=function(a){c.setState({selectedType:a}),c.props.onSelected(a)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=this,c=[];Object.keys(this.props.types).forEach(function(d){c.push(b("React").jsx(g,{value:d,children:a.props.types[d].label},d))});return b("React").jsx(b("XUIRadioList.react"),{selectedValue:this.state.selectedType,onValueChange:this.$1,children:c})};return c}(b("React").Component);e.exports=a}),null);
__d("MapsReporterTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:MapsReporterLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:MapsReporterLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:MapsReporterLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setCategory=function(a){this.$1.category=a;return this};c.setMapURI=function(a){this.$1.map_uri=a;return this};c.setNelat=function(a){this.$1.nelat=a;return this};c.setNelon=function(a){this.$1.nelon=a;return this};c.setPassesGkMapsTileserviceOsmDefault=function(a){this.$1.passes_gk_maps_tileservice_osm_default=a;return this};c.setPassesGkOxygenMapNewStyle=function(a){this.$1.passes_gk_oxygen_map_new_style=a;return this};c.setStage=function(a){this.$1.stage=a;return this};c.setSwlat=function(a){this.$1.swlat=a;return this};c.setSwlon=function(a){this.$1.swlon=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setUserComment=function(a){this.$1.user_comment=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.setZoom=function(a){this.$1.zoom=a;return this};return a}();c={category:!0,map_uri:!0,nelat:!0,nelon:!0,passes_gk_maps_tileservice_osm_default:!0,passes_gk_oxygen_map_new_style:!0,stage:!0,swlat:!0,swlon:!0,time:!0,user_comment:!0,vc:!0,weight:!0,zoom:!0};e.exports=a}),null);
__d("XMapsAttributionTermsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/maps/attribution_terms/",{})}),null);
__d("FBMapInfoButton.react",["ix","cx","fbt","AdsTextInput.react","CometMapReportTypes","ContextualDialogArrow","FBTilesReportDialogItems.react","Image.react","Link.react","MapsReporterTypedLogger","PopoverMenu.react","React","ReactXUIMenu","SimpleXUIDialog","URI","XMapsAttributionTermsController","XUIDialogButton.react","XUIDialogCancelButton.react","XUIDialogCloseButton.react","asset","gkx","joinClasses"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k=(j||b("URI")).goURIOnNewWindow,l=b("ReactXUIMenu").Item;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={mapInfo:{mapUrl:null,mapBounds:null,zoom:null},selectedReportType:"other",reportedProblem:null},d.$1=function(){d.setState({mapInfo:d.props.fetchMapInfo()||{mapUrl:null,mapBounds:null,zoom:null}}),b("SimpleXUIDialog").showEx(b("React").jsx(b("FBTilesReportDialogItems.react"),{types:b("CometMapReportTypes"),onSelected:function(a){return d.setState({selectedReportType:a})}}),i._("Laporkan Masalah Peta Dengan"),b("React").jsxs("div",{children:[b("React").jsx(b("XUIDialogCancelButton.react"),{}),b("React").jsx(b("XUIDialogButton.react"),{action:"cancel",use:"confirm",label:i._("Continue"),onClick:d.$4})]}))},d.$4=function(){if(d.state.selectedReportType==null)return;var a=b("CometMapReportTypes")[d.state.selectedReportType];b("SimpleXUIDialog").showEx(b("React").jsx(b("AdsTextInput.react"),{multiline:!0,placeholder:a.hint,value:d.state.reportedProblem,onChange:function(a){return d.setState({reportedProblem:a})}}),a.title,b("React").jsxs("div",{children:[b("React").jsx(b("XUIDialogCancelButton.react"),{}),b("React").jsx(b("XUIDialogButton.react"),{action:"cancel",use:"confirm",label:i._("Send"),onClick:d.$5})]}))},d.$5=function(){var a=new(b("MapsReporterTypedLogger"))().setStage("submit_comment").setCategory(d.state.selectedReportType).setUserComment(d.state.reportedProblem).setMapURI(d.state.mapInfo.mapUrl||""),c=d.state.mapInfo,e=c.mapBounds;c=c.zoom;e!=null&&c!=null&&a.setNelon(e.getEast()).setNelat(e.getNorth()).setSwlon(e.getWest()).setSwlat(e.getSouth()).setZoom(""+c).setPassesGkMapsTileserviceOsmDefault(b("gkx")("678292")).setPassesGkOxygenMapNewStyle(!1);a.log();b("SimpleXUIDialog").showEx(i._("Maklum balas anda membantu kami membuat peta Facebook lebih baik bagi setiap orang."),i._("Terima kasih"),b("React").jsx(b("XUIDialogCloseButton.react"),{use:"confirm"}))},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a,c,d=b("XMapsAttributionTermsController").getURIBuilder(),e=(a=b("React")).jsxs(b("ReactXUIMenu"),{children:[a.jsx(l,{icon:a.jsx(c=b("Image.react"),{src:g("487800")}),onClick:function(){return k("https://www.openstreetmap.org/copyright/")},children:"OpenStreetMap"},"osm_direct_attribution"),a.jsx(l,{icon:a.jsx(c,{src:g("367566")}),onClick:function(){return k(d.getURI().setProtocol("https").setDomain("www.facebook.com"))},children:i._("Notis Perundangan Data Peta")},"title"),a.jsx(l,{icon:a.jsx(c,{src:g("408431")}),onClick:this.$1,children:i._("Laporkan masalah dengan peta tersebut")},"report")]});return a.jsx(b("PopoverMenu.react"),{alignh:this.$2(),position:this.$3(),menu:e,layerBehaviors:[b("ContextualDialogArrow")],children:a.jsx(b("Link.react"),{ref:"termsButton","aria-haspopup":"menu",className:b("joinClasses")("_6vtv",this.props.className),children:a.jsx("div",{className:"_6vtw",children:a.jsx(c,{src:g("360713"),"aria-label":i._("Maklumat")})})})})};d.$2=function(){var a;if(((a=this.props.popoverPosition)==null?void 0:a.horizontal)=="left")return"left";else return"right"};d.$3=function(){var a;if(((a=this.props.popoverPosition)==null?void 0:a.vertical)=="top")return"below";else return"above"};return c}(b("React").Component);e.exports=a}),null);
__d("FBTilesStaticInfoButton.react",["FBMapInfoButton.react","React"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this;return b("React").jsx(b("FBMapInfoButton.react"),{className:this.props.className,fetchMapInfo:function(){return a.props.mapInfo},surface:this.props.surface})};return c}(b("React").Component);e.exports=a}),null);
__d("PagesAboutSectionLogger",["Event","PagesEventObserver","Run"],(function(a,b,c,d,e,f){"use strict";a={registerLogEvent:function(a,c,d){var e=b("Event").listen(a,"click",function(){return b("PagesEventObserver").notify(c,d)});b("Run").onLeave(function(){e.remove()})}};e.exports=a}),null);
__d("useOnUpdateEffect",["React"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useEffect,h=b("React").useRef;function a(a,b){var c=h(!1);g(function(){if(c.current===!0)return a();else c.current=!0},b)}e.exports=a}),null);