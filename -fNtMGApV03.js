if (self.CavalryLogger) { CavalryLogger.start_js(["YU8+l"]); }

__d("MessengerMQTTGating",[],(function(a,b,c,d,e,f){"use strict";var g={_forcedOff:!1,isEnabled:function(){return!g._forcedOff},turnOff:function(){g._forcedOff=!0}};e.exports=g}),null);
__d("isAdsExcelAddinURI",[],(function(a,b,c,d,e,f){var g=new RegExp("(^|\\.)fbaddins\\.com$","i"),h=["https"];function a(a){if(a.isEmpty()&&a.toString()!=="#")return!1;return!a.getDomain()&&!a.getProtocol()?!1:h.indexOf(a.getProtocol())!==-1&&g.test(a.getDomain())}e.exports=a}),null);
__d("isValidURI",[],(function(a,b,c,d,e,f){var g=new RegExp("((^|\\.)instagram\\.com$)|((^|\\.)wit\\.ai$)|((^|\\.)accountkit\\.com$)","i"),h=["https"];function a(a){if(a.isEmpty()&&a.toString()!=="#")return!1;return!a.getDomain()&&!a.getProtocol()?!1:h.includes(a.getProtocol())&&g.test(a.getDomain())}e.exports=a}),null);
__d("AsyncSignal",["Promise","ErrorGuard","QueryString","Run","TimeSlice","TrackingConfig","URI","ZeroRewrites","getAsyncParams","isAdsExcelAddinURI","isFacebookURI","isMessengerDotComURI","isValidURI","isWorkplaceDotComURI","memoize","promiseDone"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i;function a(a,c){this.data=c||{},this.uri=a.toString(),b("TrackingConfig").domain&&this.uri.charAt(0)=="/"&&(this.uri=b("TrackingConfig").domain+this.uri)}a.prototype.setHandler=function(a){this.handler=a;return this};a.prototype.setTimeout=function(a){this.timeout=a;return this};a.prototype.send=function(){b("TimeSlice").guard(this._send.bind(this),"AsyncSignal send",{propagationType:b("TimeSlice").PropagationType.ORPHAN})()};a.prototype._send=function(){__p&&__p();var a=this.handler,c=this.data;c.asyncSignal=(Math.random()*1e4|0)+1;var d=b("ZeroRewrites").rewriteURI(new(g||(g=b("URI")))(this.uri));d=b("isFacebookURI")(d)||b("isMessengerDotComURI")(d)||b("isAdsExcelAddinURI")(d)||b("isWorkplaceDotComURI")(d)||b("isValidURI")(d);if(d)Object.assign(c,b("getAsyncParams")("POST"));else throw new Error("'"+this.uri+"' is an external URL, you should not send async signals to offsite links.");var e=b("QueryString").appendToUrl(this.uri,c);i||(i=new(b("Promise"))(function(a){b("Run").onAfterLoad(a)}));d=i.then(function(){return new(b("Promise"))(function(a,b){var c=new Image();c.onload=a;c.onerror=c.onabort=b;c.src=e})});if(a){var f=!1,j=b("memoize")(function(){(h||(h=b("ErrorGuard"))).applyWithGuard(a,null,[f])});b("promiseDone")(d.then(function(){f=!0,j()},j));this.timeout&&setTimeout(j,this.timeout)}return this};e.exports=a}),null);
__d("DocumentTitle",["Arbiter"],(function(a,b,c,d,e,f){__p&&__p();var g=1500,h=null,i=!1,j=0,k=[],l=null,m=document.title;function n(){k.length>0?!i?(o(k[j].title),j=++j%k.length):p():(clearInterval(h),h=null,p())}function o(a){document.title=a,i=!0}function p(){q.set(l||m,!0),i=!1}var q=function(){"use strict";__p&&__p();function a(a){this.$1=a}a.get=function(){return m};a.set=function(a,c){var d=a.toString();document.title=d;!c?(m=d,l=null,b("Arbiter").inform("update_title",a)):l=d};a.blink=function(b){b={title:b.toString()};k.push(b);h===null&&(h=setInterval(n,g));return new a(b)};var c=a.prototype;c.stop=function(){var a=k.indexOf(this.$1);a>=0&&(k.splice(a,1),j>a?j--:j==a&&j==k.length&&(j=0))};a.badge=function(c){var d=a.get();d=c?"("+c+") "+d:d;a.set(d,!0);b("Arbiter").inform("update_title_badge",c,"state")};return a}();e.exports=q}),null);
__d("BadgeHelper",["cx","fbt","DOM","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i={xsmall:"_5dzz",small:"_5dz-",medium:"_5dz_",large:"_5d-0",xlarge:"_5d-1"},j={bot:"_64nf",verified:"_56_f",trending:"_1gop",topcommenter:"_59t2",page_gray_check:"_5n3t",page_gray_check_solid:"_6w81",work:"_5d62",game_blue:"_59c6",work_non_coworker:"_2ad7",work_official_badge:"_8b0y",work_official_badge_gray:"_8b-m",interest_community:"_3qcr",subscription:"_4fvy",inactive_user:"_7xv0"};c=h._("Official Group");var k={bot:h._("Bot"),work_non_coworker:h._("Not part of your company"),work_official_badge:c,work_official_badge_gray:c};function l(a,c){return b("joinClasses")(i[a],j[c],"_5dzy")}function m(a){return k[a]}function a(a,c){a=l(a,c);if(a){c=m(c);return b("DOM").create("span",{className:a},c?b("DOM").create("span",{className:"accessible_elem"},c):null)}}e.exports={getClasses:l,getAlt:m,renderBadge:a,sizes:Object.keys(i),types:Object.keys(j)}}),null);
__d("Badge.react",["BadgeHelper","React"],(function(a,b,c,d,e,f){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("BadgeHelper").getAlt(this.props.type);a=a?b("React").jsx("span",{className:"accessible_elem",children:a}):null;return b("React").jsx("span",{className:b("BadgeHelper").getClasses(this.props.size,this.props.type),children:a})};return c}(b("React").Component);c.propTypes={size:a.oneOf(b("BadgeHelper").sizes),type:a.oneOf(b("BadgeHelper").types)};c.defaultProps={size:"xsmall",type:"verified"};e.exports=c}),null);
__d("ContextualLayerUpdateOnScroll",["Event"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscriptions=[this._layer.subscribe("show",this._attachScrollListener.bind(this)),this._layer.subscribe("hide",this._removeScrollListener.bind(this))]};c.disable=function(){while(this._subscriptions.length)this._subscriptions.pop().unsubscribe()};c._attachScrollListener=function(){var a=this,c=this._layer.getContextScrollParent(),d=this._layer.getInsertScrollParent();if(this._listener!=null||c===d)return;this._listener=b("Event").listen(c,"scroll",function(){a._layer.updatePosition()})};c._removeScrollListener=function(){this._listener&&this._listener.remove(),this._listener=null};return a}();Object.assign(a.prototype,{_subscriptions:[]});e.exports=a}),null);
__d("ContextualDialogXUITheme",["cx"],(function(a,b,c,d,e,f,g){a={wrapperClassName:"_53ii",arrowDimensions:{offset:12,length:16}};e.exports=a}),null);
__d("WorkplaceChatHelper",["ChannelConstants","CurrentUser","PresenceViewerCapabilities"],(function(a,b,c,d,e,f){"use strict";a={isDesktopChatApp:function(){return window.workchat!==void 0},getAppID:function(){return window.workchat.appId},showWindow:function(){window.workchat.showWindow()},getScreenSharingSourceID:function(){return window.workchat.getScreenSharingSourceID()},stopScreenSharing:function(){return window.workchat.stopScreenSharing()},suppressChatIfActiveOnDesktop:function(){return b("CurrentUser").isWorkUser()&&(b("PresenceViewerCapabilities").get()&b("ChannelConstants").CAPABILITY_ACTIVE_ON_DESKTOP_APP)==b("ChannelConstants").CAPABILITY_ACTIVE_ON_DESKTOP_APP}};e.exports=a}),null);
__d("areJSONRepresentationsEqual",[],(function(a,b,c,d,e,f){function a(a,b){return JSON.stringify(a)==JSON.stringify(b)}e.exports=a}),null);
__d("once",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){var b=g(a);for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b}function g(a){__p&&__p();var b=a,c;a=function(){if(b){for(var a=arguments.length,d=new Array(a),e=0;e<a;e++)d[e]=arguments[e];c=b.apply(this,d);b=null}return c};return a}e.exports=a}),null);
__d("objectValues",[],(function(a,b,c,d,e,f){"use strict";function a(a){return Object.values(a)}e.exports=a}),null);
__d("ImmutableValue",["invariant","isNode"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="_DONT_EVER_TYPE_THIS_SECRET_KEY";a=function(){__p&&__p();function a(b){b===a[h]||g(0,5608)}a.mergeAllPropertiesInto=function(a,b){var c=b.length;for(var d=0;d<c;d++)Object.assign(a,b[d])};a.deepFreezeRootNode=function(c){if(b("isNode")(c))return;Object.freeze(c);for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&a.recurseDeepFreeze(c[d]);Object.seal(c)};a.recurseDeepFreeze=function(c){if(b("isNode")(c)||!a.shouldRecurseFreeze(c))return;Object.freeze(c);for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&a.recurseDeepFreeze(c[d]);Object.seal(c)};a.shouldRecurseFreeze=function(b){return typeof b==="object"&&!(b instanceof a)&&b!==null};return a}();a._DONT_EVER_TYPE_THIS_SECRET_KEY=Math.random();e.exports=a}),null);
__d("mergeHelpers",["invariant","FbtResultBase"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=36,i=function(a){return typeof a!=="object"||a instanceof Date||a===null||a instanceof b("FbtResultBase")},j={MAX_MERGE_DEPTH:h,isTerminal:i,normalizeMergeArg:function(a){return a==null?{}:a},checkMergeArrayArgs:function(a,b){Array.isArray(a)&&Array.isArray(b)||g(0,3714,a,b)},checkMergeObjectArgs:function(a,b){j.checkMergeObjectArg(a),j.checkMergeObjectArg(b)},checkMergeObjectArg:function(a){!i(a)&&!Array.isArray(a)||g(0,3715,a)},checkMergeIntoObjectArg:function(a){(!i(a)||typeof a==="function")&&!Array.isArray(a)||g(0,3716,a)},checkMergeLevel:function(a){a<h||g(0,3717)},checkArrayStrategy:function(a){a==null||a in j.ArrayStrategies||g(0,3718)},ArrayStrategies:{Clobber:"Clobber",Concat:"Concat",IndexByIndex:"IndexByIndex"}};e.exports=j}),null);
__d("ImmutableObject",["invariant","ImmutableValue","mergeHelpers"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("mergeHelpers").checkMergeObjectArgs,i=b("mergeHelpers").isTerminal,j="_DONT_EVER_TYPE_THIS_SECRET_KEY";function k(a){a instanceof b("ImmutableValue")||g(0,3884)}var l=function(c){__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){var a;a=c.call(this,b("ImmutableValue")[j])||this;b("ImmutableValue").mergeAllPropertiesInto(babelHelpers.assertThisInitialized(a),arguments);return a}a.create=function(){var b=Object.create(a.prototype);a.apply(b,arguments);return b};a.set=function(b,c){k(b);typeof c==="object"&&c!==void 0&&!Array.isArray(c)||g(0,3885);return new a(b,c)};a.setProperty=function(b,c,d){var e={};e[c]=d;return a.set(b,e)};a.deleteProperty=function(b,c){var d={};for(var e in b)e!==c&&Object.prototype.hasOwnProperty.call(b,e)&&(d[e]=b[e]);return new a(d)};a.setDeep=function(a,b){k(a);return m(a,b)};a.values=function(a){return Object.keys(a).map(function(b){return a[b]})};return a}(b("ImmutableValue"));function m(a,c){__p&&__p();h(a,c);var d={},e=Object.keys(a);for(var f=0;f<e.length;f++){var g=e[f];!Object.prototype.hasOwnProperty.call(c,g)?d[g]=a[g]:i(a[g])||i(c[g])?d[g]=c[g]:d[g]=m(a[g],c[g])}g=Object.keys(c);for(f=0;f<g.length;f++){e=g[f];if(Object.prototype.hasOwnProperty.call(a,e))continue;d[e]=c[e]}return a instanceof b("ImmutableValue")?new l(d):c instanceof b("ImmutableValue")?new l(d):d}e.exports=l}),null);
__d("formatNumber",["fbt","intlNumUtils"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a,c){return b("intlNumUtils").formatNumber(a,c)}function h(a,c){c=g._({"*":"{number}+"},[g._param("number",b("intlNumUtils").formatNumberWithThousandDelimiters(a,c),[0,a])]);return c.toString()}function i(a,c){c=g._({"*":"\u003C{number}"},[g._param("number",b("intlNumUtils").formatNumberWithThousandDelimiters(a,c),[0,a])]);return c.toString()}function c(a,c,d){return a>c?h(c,d):b("intlNumUtils").formatNumberWithThousandDelimiters(a,d)}function d(a,c,d){return a<c?i(c,d):b("intlNumUtils").formatNumberWithThousandDelimiters(a,d)}a.withThousandDelimiters=b("intlNumUtils").formatNumberWithThousandDelimiters;a.withMaxLimit=c;a.withMinLimit=d;e.exports=a}),null);
__d("ServerHTML.react",["React"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.blob;a=babelHelpers.objectWithoutPropertiesLoose(a,["blob"]);return typeof c==="string"?b("React").jsx("div",babelHelpers["extends"]({},a,{children:c})):b("React").jsx("div",babelHelpers["extends"]({},a,{dangerouslySetInnerHTML:c}))};return c}(b("React").Component);e.exports=a}),null);
__d("fbjs/lib/CSSCore",["CSSCore"],(function(a,b,c,d,e,f){"use strict";e.exports=b("CSSCore")}),null);
__d("PerfXSharedFields",[],(function(a,b,c,d,e,f){var g={addCommonValues:function(a){navigator&&navigator.hardwareConcurrency!==void 0&&(a.num_cores=navigator.hardwareConcurrency);navigator&&navigator.deviceMemory&&(a.ram_gb=navigator.deviceMemory);navigator&&navigator.connection&&(typeof navigator.connection.downlink==="number"&&(a.downlink_megabits=navigator.connection.downlink),typeof navigator.connection.effectiveType==="string"&&(a.effective_connection_type=navigator.connection.effectiveType),typeof navigator.connection.rtt==="number"&&(a.rtt_ms=navigator.connection.rtt));return a},getCommonData:function(){var a={};g.addCommonValues(a);return a}};e.exports=g}),null);
__d("renderSubtreeIntoContainer_DO_NOT_USE",["ReactDOM-fb"],(function(a,b,c,d,e,f){"use strict";e.exports=b("ReactDOM-fb").unstable_renderSubtreeIntoContainer}),null);
__d("ScrollBoundaryContain",["Event","Scroll","UserAgent"],(function(a,b,c,d,e,f){__p&&__p();var g=function(a,c){c.deliberateSync=!0;if(c.axis!==void 0&&c.axis===c.HORIZONTAL_AXIS||c.wheelDeltaX&&!c.wheelDeltaY||c.deltaX&&!c.deltaY)return;var d=c.wheelDelta||-c.deltaY||-c.detail,e=a.scrollHeight,f=a.clientHeight;if(e>f){c.stopPropagation();a=b("Scroll").getTop(a);(d>0&&a===0||d<0&&a>=e-f-1)&&c.preventDefault()}},h=void 0,i=function(){if(h)return h;h=b("UserAgent").isBrowser("Firefox")?"WheelEvent"in window?"wheel":"DOMMouseScroll":"mousewheel";return h},j=function(a){__p&&__p();var c=g.bind(null,a),d=i(),e,f=b("Event").listen(a,"mouseenter",function(){e==null&&(e=b("Event").listen(a,d,c))}),h=b("Event").listen(a,"mouseleave",function(){e&&(e.remove(),e=null)}),j=!1;return{remove:function(){if(j)return;e&&(e.remove(),e=null);f.remove();h.remove();j=!0}}},k=function(a){a.deliberateSync=!0,this.scrollHeight>this.clientHeight&&a.stopPropagation()},l=function(a){var c=b("Event").listen(a,i(),k,null,{passive:!0}),d=!1;return{remove:function(){if(d)return;c.remove();d=!0}}};a={applyToElem:function(a){if("overscrollBehavior"in a.style){a.style.overscrollBehavior="contain";return l(a)}else{a.style.msScrollChaining!==void 0&&(a.style.msScrollChaining="none");return j(a)}}};e.exports=a}),null);
__d("getByPath",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,b,c){a=a;for(var d=0;d<b.length;d++){var e=b[d];if(a&&typeof a!=="string"&&typeof a!=="number"&&e in a)a=a[e];else return c}return a}e.exports=a}),null);