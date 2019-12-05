if (self.CavalryLogger) { CavalryLogger.start_js(["aW5FD"]); }

__d("CometDialogContextBlue",["BaseModal.react","React","ReactDOM"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c,d,e){var f=document.body,g=document.createElement("div");f!=null&&f.appendChild(g);f=function(){e!=null&&e.apply(void 0,arguments);var a=d==null?void 0:d.current;a!=null&&a.focus!=null&&a.focus();window.setTimeout(function(){b("ReactDOM").unmountComponentAtNode(g),g.remove()},0)};b("ReactDOM").render(b("React").jsx(b("BaseModal.react"),{children:b("React").jsx(a,babelHelpers["extends"]({},c,{onClose:f}))}),g)}c=b("React").createContext(a);e.exports=c}),null);
__d("HiddenSubtreeContextProvider.react",["HiddenSubtreeContext","HiddenSubtreePassiveContext","React","removeFromArray","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=(c=b("React")).useCallback,h=c.useContext,i=c.useEffect,j=c.useMemo,k=c.useRef;function a(a){__p&&__p();var c=a.children,d=a.ignoreParent,e=a.isHidden;a=h(b("HiddenSubtreeContext"));var f=h(b("HiddenSubtreePassiveContext")),l=k(e),m=k(null),n=k([]),o=g(function(){var a=l.current||d!==!0&&f.getCurrent();a!==m.current&&(m.current=a,n.current.forEach(function(b){b(a)}))},[d,f]);b("useLayoutEffect_SAFE_FOR_SSR")(function(){l.current=e,o()},[e,o]);i(function(){if(d!==!0){var a=f.subscribe(o);return function(){return a.remove()}}},[d,o,f]);var p=j(function(){return{getCurrent:function(){return l.current||d!==!0&&f.getCurrent()},subscribe:function(a){var c=n.current;c.push(a);return{remove:function(){b("removeFromArray")(c,a)}}}}},[f,d]);return b("React").jsx(b("HiddenSubtreeContext").Provider,{value:e||a&&!d,children:b("React").jsx(b("HiddenSubtreePassiveContext").Provider,{value:p,children:c})})}e.exports=a}),null);
__d("CometEventTimings",["performanceNavigationStart","performanceNow"],(function(a,b,c,d,e,f){"use strict";var g;a={getCurrentQueueTime:function(a){var c=(g||(g=b("performanceNow")))(),d=null,e=document.createEvent("MouseEvent").timeStamp<b("performanceNavigationStart")();e&&a!=null&&a<c&&(d=c-a,c=a);return[c,d]}};e.exports=a}),null);
__d("CometHeroInteractionWithDiv.react",["requireCond","cr:1011783","React"],(function(a,b,c,d,e,f){"use strict";a=function(a,c){var d=a.children,e=a.className;a=a.hidden;return b("React").jsx("div",{className:e,hidden:a,ref:c,children:d})};e.exports=(c=b("cr:1011783"))!=null?c:b("React").forwardRef(a)}),null);
__d("CometPrerenderer.react",["HiddenSubtreeContextProvider.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){var c=a.children;a=a.prerenderingProps;a=a===void 0?{}:a;var d=a.isVisible;d=d===void 0?!0:d;a=a.shouldPrerender;a=a===void 0?!1:a;return d||a?b("React").jsx(b("HiddenSubtreeContextProvider.react"),{isHidden:!d&&a,children:c({hidden:!d&&a})}):null}e.exports=a}),null);
__d("useCometPrerenderer",["requireCond","cr:956931"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:956931")}),null);
__d("BasePopoverTrigger.react",["BaseButtonPopoverContext","BaseContextualLayer.react","BaseScrollableAreaContext","CometErrorBoundary.react","CometEventTimings","CometHeroInteractionWithDiv.react","CometHeroLogging","CometHideLayerOnEscape.react","CometMenuContext","CometOnOutsideClick.react","CometPlaceholder.react","CometPrerenderer.react","React","gkx","useCometPrerenderer","useCometVisualChangeTracker","useContextualLayerRepositionOnScrollBehavior","useLayoutEffect_SAFE_FOR_SSR","useVisibilityObserver"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=(d=b("React")).useCallback,h=d.useContext,i=d.useEffect,j=d.useMemo,k=d.useRef,l=d.useState,m=b("gkx")("1162556");function c(c){__p&&__p();var d=c.children,e=c.fallback,f=c.interactionTracker,n=c.onVisibilityChange,o=c.popover,p=c.popoverPreloadResource,q=c.popoverProps,r=c.popoverType,s=r===void 0?"dialog":r,t=c.preloadTrigger;r=c.visibleOnLoad;var u=r===void 0?!1:r,v=babelHelpers.objectWithoutPropertiesLoose(c,["children","fallback","interactionTracker","onVisibilityChange","popover","popoverPreloadResource","popoverProps","popoverType","preloadTrigger","visibleOnLoad"]),w=k(!1);r=l(!1);var x=r[0],y=r[1];c=l(null);var z=c[0],A=c[1],B=k(null),C=g(function(a){var b=x;y(a);b!==a&&(n&&n(a))},[x,n]),D=g(function(){C(!1),A(null)},[C]),E=g(function(){m||B.current&&B.current.focus&&B.current.focus(),D()},[D]),F=g(function(a){if(!x)if(t==="tooltip"||f==null)C(!0);else{a=b("CometEventTimings").getCurrentQueueTime(a==null?void 0:a.timeStamp);var c=a[0];a=a[1];f(function(a){C(!0),A(b("CometHeroLogging").genCometHeroInteractionUUIDAndMarkStart(a.getTraceId()))},c,a)}},[x,t,f,C]),G=k(null);r=b("useCometPrerenderer")(t,x,p);c=r[0];var H=r[1],I=r[2];r=r[3];b("useLayoutEffect_SAFE_FOR_SSR")(function(){u===!0&&w.current===!1&&(w.current=!0,F())},[F,u]);b("useContextualLayerRepositionOnScrollBehavior")(G,x);var J=g(function(){G.current!=null&&G.current.reposition({autoflip:!0})},[]);i(function(){if(x){a.addEventListener("resize",J);return function(){a.removeEventListener("resize",J)}}},[x,J]);var K=h(b("BaseScrollableAreaContext")),L=b("useVisibilityObserver")({onHidden:g(function(){var a=K[K.length-1];a!=null&&D()},[D,K])}),M=j(function(){return{controls:"",expanded:x,haspopup:s}},[x,s]),N=b("useCometVisualChangeTracker")(),O=g(function(a){B.current=a,L(a)},[L]);return b("React").jsxs(b("React").Fragment,{children:[b("React").jsx(b("BaseButtonPopoverContext").Provider,{value:M,children:d(O,F,D,H,I,r)}),b("React").jsx(b("CometErrorBoundary.react"),{fallback:null,children:b("React").jsx(b("CometPrerenderer.react"),{prerenderingProps:c,children:function(a){return B.current==null?null:b("React").jsx(b("BaseContextualLayer.react"),babelHelpers["extends"]({},a,v,{containFocus:!0,context:B.current,layerRef:N,ref:G,children:b("React").jsx(b("CometHideLayerOnEscape.react"),{contextElement:B.current,onHide:E,children:b("React").jsx(b("CometMenuContext").Provider,{value:{onClose:E},children:b("React").jsx(b("CometOnOutsideClick.react"),{onOutsideClick:D,children:function(a){return b("React").jsx(b("CometHeroInteractionWithDiv.react"),{interactionDesc:"popover_"+(p!=null?p.getModuleId():"Unknown"),interactionUUID:z,ref:a,children:b("React").jsx(b("CometPlaceholder.react"),{fallback:(a=e)!=null?a:null,children:b("React").jsx(o,babelHelpers["extends"]({},q,{onClose:D}))})})}})})})}))}})})]})}e.exports=c}),null);
__d("CometProgressIndicator.react",["FocusWithinHandler.react","React","ariaGlimmerProps","stylex","useCometLoadingStateTracker","useSupportsAnimations"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h={animateDot:{animationDuration:"r7fvqmod",animationIterationCount:"ee40wjg4",animationName:"omtukq3v",animationTimingFunction:"q0a5ri7c",opacity:"lyadkbl6",transform:"d8domg9s"},animationDelay300:{animationDelay:"oeefd0zo"},animationDelay600:{animationDelay:"ftwn7utp"},hideOutline:{outline:"lzcic4wl"},root:{display:"j83agx80",flexDirection:"btwxx1t3"}},i={"default":{borderTopStartRadius:"jk6sbkaj",borderTopEndRadius:"kdgqqoy6",borderBottomEndRadius:"ihh4hy1g",borderBottomStartRadius:"qttc61fc",height:"t6na6p9t",marginEnd:"kady6ibp",marginStart:"dwxx2s2f",width:"c9rrlmt1"},small:{borderTopStartRadius:"s8bnoagg",borderTopEndRadius:"bn9qtmzc",borderBottomEndRadius:"hp05c5td",borderBottomStartRadius:"b6jg2yqc",height:"mw227v9j",marginEnd:"ditlmg2l",marginStart:"nvdbi5me",width:"loos5mxf"}},j={media:{backgroundColor:"q2y6ezfg"},primary:{backgroundColor:"rsyf18zc"}};function a(a){var c=a.novc,d=a.overrideBGColorContext;d=d===void 0?"primary":d;a=a.size;a=a===void 0?"default":a;var e=b("useSupportsAnimations")(),f=b("useCometLoadingStateTracker")(),k=f[0],l=f[1],m=[e&&h.animateDot,i[a],j[d]];return b("React").jsx(b("FocusWithinHandler.react"),{children:function(a,d){return b("React").jsxs("div",babelHelpers["extends"]({className:(g||(g=b("stylex")))(h.root,a&&!d?h.hideOutline:null),"data-novc":c,ref:l},b("ariaGlimmerProps"),k,{children:[b("React").jsx("div",{className:g(m)}),b("React").jsx("div",{className:g.apply(void 0,m.concat([h.animationDelay300]))}),b("React").jsx("div",{className:g.apply(void 0,m.concat([h.animationDelay600]))})]}))}})}e.exports=a}),null);
__d("CometPopoverLoadingState.react",["CometPopover.react","CometProgressIndicator.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=a.width;c=c===void 0?344:c;a=babelHelpers.objectWithoutPropertiesLoose(a,["width"]);return b("React").jsx(b("CometPopover.react"),babelHelpers["extends"]({},a,{children:b("React").jsx("div",{className:"taijpn5t lbh82i0l j83agx80 bp9cbjyn",style:{width:c},children:b("React").jsx(b("CometProgressIndicator.react"),{})})}))}e.exports=a}),null);
__d("CometPerfLogger",["QuickPerformanceLogger","VisibilityListener","performance","performanceNavigationStart"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("performanceNavigationStart")(),i=10;function j(a,c,d){d===void 0&&(d=0),b("QuickPerformanceLogger").annotateMarkerInt(a,"numReactCommit",c.size,d)}function k(a,c,d){d===void 0&&(d=0);for(var e in c.metadata){var f=c.metadata[e];typeof f==="string"?b("QuickPerformanceLogger").annotateMarkerString(a,e,f,d):typeof f==="number"&&b("QuickPerformanceLogger").annotateMarkerInt(a,e,f,d)}for(var g in c.tagSet){f=Array.from(c.tagSet[g]);b("QuickPerformanceLogger").annotateMarkerStringArray(a,g,f,d)}}function l(a,c,d){d===void 0&&(d=0);for(var e in c){var f=c[e],g=f.data,i=f.timestamp;f=f.type;if(f==="HeroTracing")continue;b("QuickPerformanceLogger").markerPoint(a,e,g&&Object.keys(g).length?JSON.stringify(g):void 0,d,i+h)}}function m(a,c,d){__p&&__p();d===void 0&&(d=0);for(var e in c)for(var f=0;f<c[e].length;f++){var g=c[e][f],j=g.data,k=g.end,l=g.start;g=g.type;if(g==="HeroTracing")continue;g=c[e].length===1?e:e+"_"+(f>=i?"MAX":f+1);b("QuickPerformanceLogger").markerPoint(a,g+"_start",void 0,d,l+h);b("QuickPerformanceLogger").markerPoint(a,g+"_end",Object.keys(j).length?JSON.stringify(j):void 0,d,k+h)}}a={copyVcQplMetrics:function(a,b){b.visuallyComplete>0&&(a.markerPoints.visuallyComplete={timestamp:b.visuallyComplete+b.startTime-h,type:"VisualCompletion"}),b.markerPoints.forEach(function(c,d){a.markerPoints[d]={data:c.data,timestamp:c.timestamp+b.startTime-h,type:d in a.markerPoints?a.markerPoints[d].type:"VisualCompletion"}}),b.annotations.forEach(function(b,c){a.metadata[c]=b}),a.hasVcMetrics=!0},initQPL:function(a,c,d){b("QuickPerformanceLogger").markerStart(a,d,c+h)},logQPL:function(a,c,d){__p&&__p();j(a,c.commitSet,d);k(a,c,d);l(a,c.markerPoints,d);m(a,c.subSpans,d);var e=b("VisibilityListener").getHiddenTime(c.start+h,c.completed+h);e=e!=null&&e>0?1:0;b("QuickPerformanceLogger").annotateMarkerInt(a,"hidden",e,d);e=c.wasCanceled?4:2;b("QuickPerformanceLogger").markerEnd(a,e,d,c.completed+h);return e},logServerTimings:function(a,c){__p&&__p();var d=typeof window.qpl_inl==="function"?window.qpl_inl():{};d=d[a+"-server"];if(d){a=((g||(g=b("performance")))==null?void 0:(g||(g=b("performance"))).timing)||{};var e=h;a.requestStart&&a.responseStart&&d.htmlStart&&(e=(a.requestStart+a.responseStart-d.htmlStart)/2);b("QuickPerformanceLogger").markerStart(29818883,0,e);k(29818883,c);a=0;for(var f in d)a=Math.max(a,d[f]),b("QuickPerformanceLogger").markerPoint(29818883,f,void 0,0,d[f]+e);b("QuickPerformanceLogger").markerEnd(29818883,2,0,a+e)}}};e.exports=a}),null);
__d("JSTraceListener",["CometInteractionTracingMetrics","ErrorGuard","removeFromArray"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=!1;function i(){if(h)return;h=!0;b("CometInteractionTracingMetrics").listen(l)}var j={};function k(a,c){h||i();Object.prototype.hasOwnProperty.call(j,a)||(j[a]=[]);j[a].push(c);return function(){j[a]&&(b("removeFromArray")(j[a],c),j[a].length||delete j[a])}}function l(a){if(Object.prototype.hasOwnProperty.call(j,a.name)){var c=a.name;c=j[c];c.length&&c.slice().forEach(function(c){(g||(g=b("ErrorGuard"))).applyWithGuard(c,null,[a],{name:"JSTraceListener"})})}}function a(a){__p&&__p();var c={onComplete:function(d){var e=b("CometInteractionTracingMetrics").get(a);if(e&&e.completed!=null){d(e.completed,e);return c}var f=k(a,function(a){a.__type==="complete"&&(d(a.timestamp,a.interaction),f())});return c}};return c}e.exports=a}),null);
__d("CometInteractionTracing",["CometInteractionTracingMetrics","CometPerfLogger","CometResourceDownloadLogger","CurrentLocale","JSScheduler","JSTraceListener","JSTracing","Run","SiteData","VisibilityListener","gkx","performanceNow","performanceNavigationStart","requireCond","uuid","cr:683059","cr:1075529","cr:942783"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("performanceNavigationStart")(),i=new Set(),j="comet.app",k=new Set(),l=1,m=null;if(b("gkx")("926112")&&window.location.href.contains("browserLabTag=")){a=new URLSearchParams(window.location.search);m=a.get("browserLabTag")}function n(a){if(typeof window.qpl_tag==="function"){a.tagSet.CometTags||(a.tagSet.CometTags=new Set());var c=a.type==="INITIAL_LOAD"||a.type==="NAVIGATION",d=a.tagSet.CometTags;a=window.qpl_tag();a&&a.length&&a.forEach(function(a){a&&a.length&&a.forEach(function(a){d.add(a),c&&b("cr:683059")&&b("cr:683059").addTag("CometTags",a)})})}}function o(a,c,d){__p&&__p();var e=c+h,f=d+h;c=b("VisibilityListener").getHiddenTimings(e,f);if(c!=null&&c.length>0){var g=[],i=null;c.filter(function(a){return a.key>=e&&a.key<=f}).forEach(function(a){a.value&&i==null?i=a.key:!a.value&&i!=null&&(g.push({end:a.key-h,start:i-h}),i=null)});i!=null&&g.push({end:d,start:i-h});b("CometInteractionTracingMetrics").addHiddenTiming(a,g);g.length>0&&b("CometInteractionTracingMetrics").addMarkerPoint(a,"backgrounded","AppTiming",g[0].start)}}function p(a,c){__p&&__p();var d;c.interactionClass&&a.addMetadata("interactionClass",c.interactionClass);m!=null&&m!==""&&a.addMetadataWithVC("browserLabTag",m);var e=c.start;d=(d=c.completed)!=null?d:(g||(g=b("performanceNow")))();var f=b("CometResourceDownloadLogger")(e,d);f.forEach(function(b,c){a.addMetadata(c,b)});o(c.traceId,e,d);a.addMetadataWithVC("locale",b("CurrentLocale").get());a.addMetadataWithVC("client_revision",b("SiteData").client_revision);b("SiteData").server_revision!=null&&a.addMetadataWithVC("server_revision",b("SiteData").server_revision)}c={checkAndMarkRevisit:function(a){if(a==null)return!1;var b=k.has(a);k.add(a);return b},trace:function(a){function b(b,c,d,e,f,g,h,i){return a.apply(this,arguments)}b.toString=function(){return a.toString()};return b}(function(a,c,d,e,f,h,k,m){__p&&__p();h===void 0&&(h=b("uuid")());k===void 0&&(k=(g||(g=b("performanceNow")))());m===void 0&&(m=null);var o=l++,q=f,r;q!=null&&b("cr:942783")&&(r=b("cr:942783").maybeStartTraceForInteraction(h,d,a,q,k));b("CometPerfLogger").initQPL(a,k,o);var s=[],t={addGlobalMetadataWithVC:function(a,c){b("CometInteractionTracingMetrics").addGlobalMetadataWithVC(h,a,c)},addMarkerPoint:function(a,c,d){d===void 0&&(d=(g||(g=b("performanceNow")))()),b("CometInteractionTracingMetrics").addMarkerPoint(h,a,c,d)},addMetadata:function(a,c){b("CometInteractionTracingMetrics").addMetadata(h,a,c)},addMetadataWithVC:function(a,c){b("CometInteractionTracingMetrics").addMetadataWithVC(h,a,c)},getTraceId:function(){return h},observeMutation:function(a){b("cr:1075529")&&b("cr:1075529").observeMutation(h,a)},onComplete:function(a){s.push(a)},setTracePolicy:function(c){q=c,b("cr:942783")&&r==null&&(r=b("cr:942783").maybeStartTraceForInteraction(h,d,a,q,k))},trackLoadingState:function(a){b("cr:1075529")&&b("cr:1075529").observeLoadingState(h,a)}},u=null;b("cr:683059")&&(u=b("cr:683059").addTracedInteraction(e,h,a));var v;b("JSTraceListener")(h).onComplete(function(c,d){__p&&__p();if(d==null)return;e!=="INITIAL_LOAD"&&e!=="NAVIGATION"&&i["delete"](h);b("JSScheduler").scheduleLoggingPriCallback(function(){__p&&__p();var c;t.addMetadata("tracePolicy",(c=q)!=null?c:j);t.addMetadata("interactionId",h);r!=null&&t.addMetadataWithVC("loomRefId",r);p(t,d);b("cr:683059")&&u!=null&&u();var e=function(){__p&&__p();n(d);s.forEach(function(a){a(d)});var c=function(){var c=b("CometPerfLogger").logQPL(a,d,o);v&&v.remove&&v.remove();b("cr:942783")&&r!=null&&b("cr:942783").endTraceForInteraction(h,(g||(g=b("performanceNow")))(),d.metadata,c)};d.vcTracker?(d.vcTracker.onComplete(function(){c()}),d.vcTracker&&d.vcTracker.resumeTrigger(h)):(d.type==="INITIAL_LOAD"||d.type==="NAVIGATION")&&b("cr:683059")&&!d.hasVcMetrics?(b("cr:683059").onComplete(function(a){a!=null&&b("CometPerfLogger").copyVcQplMetrics(d,a),c()}),b("cr:683059").resumeTrigger(h)):c()};d.type==="INITIAL_LOAD"&&document.readyState==="loading"?document.addEventListener("DOMContentLoaded",function(){e()}):e()})});b("JSTracing").trace(h,function(){__p&&__p();v=b("Run").onBeforeUnload(function(){__p&&__p();var c=b("CometInteractionTracingMetrics").get(h);if(c){var d;s.forEach(function(a){a(c)});t.addMetadata("tracePolicy",(d=q)!=null?d:j);p(t,c);n(c);c.vcTracker&&c.vcTracker.copyVCReport(c,!1);(c.type==="INITIAL_LOAD"||c.type==="NAVIGATION")&&b("cr:683059")&&!c.hasVcMetrics&&b("cr:683059").logIncompleteVC(c,"unload");t.addMetadata("cancelType","unload");c.wasCanceled=!0;c.completed==null&&(c.completed=(g||(g=b("performanceNow")))());b("CometPerfLogger").logQPL(a,c,o);v.remove()}},!1),e==="NAVIGATION"?i.forEach(function(a){a=b("CometInteractionTracingMetrics").get(a);a&&(a.wasCanceled=!0,a.metadata.cancelType="navigation")}):e!=="INITIAL_LOAD"&&i.add(h),b("CometInteractionTracingMetrics").setInteractionType(h,d,e,a),b("cr:1075529")&&b("cr:1075529").startVisualCompletionTrace(h),c(t)},k);if(m!=null){f=k;b("CometInteractionTracingMetrics").addSubspan(h,"EventQueued","DOMEventTiming",f,f+m,{})}})};e.exports=c}),null);
__d("useCometInteractionTracing",["CometInteractionTracing","React","useCometRouteTracePolicy","uuid"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useCallback;function a(a,c,d,e){var f=(e=e)!=null?e:b("useCometRouteTracePolicy")();return g(function(e,g,h){var i=b("uuid")();b("CometInteractionTracing").trace(a,function(a){var c=b("CometInteractionTracing").checkAndMarkRevisit(f);a.addMetadataWithVC("revisit",c?1:0);e(a)},c,d,f,i,g,h)},[a,c,d,f])}e.exports=a}),null);
__d("useCometPopoverInteractionTracing",["useCometInteractionTracing"],(function(a,b,c,d,e,f){"use strict";function a(){return b("useCometInteractionTracing")(30605361,"fluid","INTERACTION","comet.popover")}e.exports=a}),null);
__d("CometDeferredPopoverTrigger.react",["BasePopoverTrigger.react","CometPopoverLoadingState.react","React","deferredLoadComponent","useCometPopoverInteractionTracing"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=a.fallback;c=c===void 0?b("React").jsx(b("CometPopoverLoadingState.react"),{withArrow:!0}):c;var d=a.popoverResource,e=a.popoverProps,f=a.preloadTrigger;a=babelHelpers.objectWithoutPropertiesLoose(a,["fallback","popoverResource","popoverProps","preloadTrigger"]);var g=b("deferredLoadComponent")(d),h=b("useCometPopoverInteractionTracing")();return b("React").jsx(b("BasePopoverTrigger.react"),babelHelpers["extends"]({fallback:c,interactionTracker:h,popover:g,popoverPreloadResource:d,popoverProps:babelHelpers["extends"]({},e,{loadImmediately:!0}),preloadTrigger:f},a))}e.exports=a}),null);
__d("useCometPrerendererImpl",["React","clearTimeout","emptyFunction","setTimeout"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=(a=b("React")).useCallback,h=a.useEffect,i=a.useRef,j=a.useState,k=50;function l(a){a&&(typeof a==="function"?a():a.preload())}function m(a){return a.pointerType==="mouse"}c=function(a,c,d,e,f){__p&&__p();var n=j(!1),o=n[0],p=n[1],q=i(null);n=g(function(c){(a==="tooltip"||a==="button"&&d!=null)&&(q.current=b("setTimeout")(function(){a==="tooltip"?(p(!0),l(d),l(e)):a==="button"&&l(d)},k))},[a,d,e]);var r=g(function(){b("clearTimeout")(q.current),q.current=null,p(!1),f&&f()},[f]),s=g(function(b){if(!m(b))return;a==="button"&&(p(!0),l(e))},[a,e]);h(function(){return function(){b("clearTimeout")(q.current)}},[]);if(a==null)return[{isVisible:c,shouldPrerender:!1},b("emptyFunction"),b("emptyFunction"),b("emptyFunction")];c={isVisible:c,shouldPrerender:o};return[c,n,r,s]};e.exports=c}),null);
__d("CometFocusLayer_DEPRECATED.react",["BaseAccessibleElement.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useCallback,h=b("React").useEffect,i=b("React").useRef,j=function(a){if(a.tabIndex<0)return!1;if(a.tabIndex>0||a.tabIndex===0&&a.getAttribute("tabIndex")!==null)return!0;if(a instanceof HTMLAnchorElement)return!!a.href&&a.rel!=="ignore";if(a instanceof HTMLInputElement)return a.type!=="hidden"&&a.type!=="file"&&!a.disabled;return a instanceof HTMLButtonElement||a instanceof HTMLSelectElement||a instanceof HTMLTextAreaElement?!a.disabled:!1},k=function(a){a=a;while(window!=null&&a!=null&&a!==document){var b=window.getComputedStyle(a);if(b.visibility==="hidden"||b.display==="none")return!1;a=a.parentNode}return a===document},l=function(a){return j(a)&&k(a)},m=function(a){return Array.from(a.getElementsByTagName("*")).find(l)},n=function(a){return Array.from(a.getElementsByTagName("*")).reverse().find(l)},o=function(a){a=m(a);a&&a.focus()},p=function(a){a=n(a);a&&a.focus()};function a(a){var c=a.autoFocus,d=c===void 0?!1:c;c=a.children;var e=i(null),f=i(null),j=i(null);a=g(function(a){e.current!=null&&(f.current!=null&&f.current===a.relatedTarget?p(e.current):j.current!=null&&j.current===a.relatedTarget&&o(e.current))},[e,j,f]);h(function(){d&&e.current!=null&&!e.current.contains(document.activeElement)&&e.current.focus()},[d]);return b("React").jsxs(b("React").Fragment,{children:[b("React").jsx(b("BaseAccessibleElement.react"),{children:b("React").jsx("div",{ref:f,tabIndex:0})}),b("React").jsx("div",{className:"lzcic4wl",onBlurCapture:a,ref:e,tabIndex:-1,children:c}),b("React").jsx(b("BaseAccessibleElement.react"),{children:b("React").jsx("div",{ref:j,tabIndex:0})})]})}e.exports=a}),null);
__d("CometBackgroundImage.react",["BaseImage.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("React").jsx(b("BaseImage.react"),babelHelpers["extends"]({alt:a.alt,className:"k4urcfbm bixrwtb6 datstx6m",draggable:a.draggable},a.loading?{loading:a.loading}:{},{src:a.src}))}e.exports=a}),null);
__d("CometHeroInteractionIDContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext(null);e.exports=a}),null);
__d("useCometDisplayTimingTracker",["requireCond","cr:1075529","cr:683059","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useCallback,h=b("React").useRef;function a(a,c,d,e,f){var i=h(null);return g(function(g){i.current!==g&&(i.current=g,g&&(b("cr:683059")&&b("cr:683059").addRenderingInfo(g,a,c,d,e,f),b("cr:1075529")&&(b("cr:1075529").addRenderingInfo(g,a,c,"TAIL_LOAD"),b("cr:1075529").trackVisualCompletion(g,"TAIL_LOAD"))))},[a,c,d,e,f])}e.exports=a}),null);
__d("CometPageletImpl.react",["CometHeroInteractionContext","CometHeroInteractionIDContext","CometRelay","React","mergeRefs","performanceNow","useCometDisplayTimingTracker"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("CometRelay").ProfilerContext,i=b("React").useContext,j=b("React").useMemo;function k(a,b){return babelHelpers["extends"]({},a,{pageletStack:[].concat(a.pageletStack,[b])})}function a(a,c){__p&&__p();var d=a.children,e=a.name,f=a.pageletType;a=a.position;var l=i(b("CometHeroInteractionContext").Context),m=i(b("CometHeroInteractionIDContext")),n=a===void 0?e:e+"_"+a,o=j(function(){var a=k(l,n),b=a.getRelayProfilerContext(a.pageletStack);return[a,b]},[l,n]),p=o[0];o=o[1];var q=j(g||(g=b("performanceNow")),[p,m]),r=j(function(){return function(a,b,c){m!=null&&p.logPageletVC(m,q,a,b,p.pageletStack,n,c)}},[m,n,p,q]),s=b("useCometDisplayTimingTracker")(e,a,n,r,f);e=j(function(){return b("mergeRefs")(c,s)},[c,s]);return b("React").jsx(b("CometHeroInteractionContext").Context.Provider,{value:p,children:b("React").jsx(h.Provider,{value:o,children:d(e)})})}e.exports=b("React").forwardRef(a)}),null);
__d("CometHeroInteractionImpl.react",["Promise","requireCond","CometHeroInteractionContext","CometHeroInteractionIDContext","CometHeroLogging","CometInteractionTracingMetrics","CometPageletImpl.react","FBLogger","HiddenSubtreePassiveContext","PromiseAnnotate","React","cancelAnimationFrame","performanceNavigationStart","relay-experimental/ProfilerContext","relay-runtime","requestAnimationFrame","useLayoutEffect_SAFE_FOR_SSR","useStable","uuid","cr:683059"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=(c=b("React")).useCallback,h=c.useContext,i=c.useEffect,j=c.useMemo,k=c.useRef,l=b("relay-runtime").RelayProfiler,m="Interaction Start",n="root",o=[n],p=new WeakSet();function q(a,c){b("CometHeroLogging").markStart(a,c)}function r(a,c,d,e,f){b("CometHeroLogging").markEnd(a,c,[].concat(e),"PlaceholderWait","Placeholder Wait: "+f,d)}function s(a,c,d,e,f,g){b("CometHeroLogging").markEnd(a,c,f,"Relay","Relay("+e+(g?",Network":"")+")","Relay_"+d+"_"+e,{fetchedFromNetwork:g,queryName:e})}function t(a,c,d,e){b("CometHeroLogging").markStart(c,"Relay_"+d+"_"+e)}function u(a,c,d,e,f){if(f==null)return function(){};var g=b("CometHeroLogging").getSimpleUUID();t(a,c,g,f.queryName);return function(e){e=!f.usedCache&&!f.usedPrefetcher;e&&f!=null&&b("FBLogger")("comet_infra").addToCategoryKey(f.queryName).warn("Interaction Query '%s' is not using Relay EntryPoints leading to bad performance: https://fburl.com/wiki/3tudp9id",f.queryName);s(a,c,g,f.queryName,d,e)}}function v(a){if(!a)return"No placeholder";var c=a.name!=null?"@"+a.name:"";a=b("CometHeroLogging").createThenableDescription(a.thenables)||"No Promises";return a+c}function a(a,c){__p&&__p();var d=a.children,e=a.className,f=a.hidden,s=a.interactionDesc,t=a.interactionUUID,w=b("useStable")(b("uuid")),x=k(null),y=k(null),z=h(b("HiddenSubtreePassiveContext")),A=s!=null?s:"No Description",B=k({}),C=k({}),D=k(null),E=b("useStable")(b("CometInteractionTracingMetrics").currentInteractionLogger),F=g(function(a,c){y.current!==a&&x.current==null&&!z.getCurrent()&&Object.values(B.current).length===0&&(x.current=b("requestAnimationFrame")(function(){x.current=null,!z.getCurrent()&&y.current!==a&&Object.values(B.current).length===0&&(y.current=a,b("CometHeroLogging").markEnd(E,a,o,"Interaction","Interaction Done: "+c,m))}))},[z,E]),G=g(function(){var a=D.current;a!=null&&F(a.interactionUUID,a.interactionDesc)},[F]),H=g(function(a,c){__p&&__p();var d=D.current;d!=null&&y.current!==d.interactionUUID&&(d!==null&&Object.keys(B.current).forEach(function(a){var b=B.current[a];r(E,w,a,b.pageletStack,v(b))}),b("CometHeroLogging").markEnd(E,d.interactionUUID,o,"Interaction","Interaction Aborted ("+c+"): "+d.interactionDesc,m),a!==null&&d.interactionUUID===a.interactionUUID&&b("CometHeroLogging").markStart(a.interactionUUID,m));y.current=null;b("cancelAnimationFrame")(x.current);x.current=null;D.current=a;a!=null&&Object.keys(B.current).forEach(function(a){q(w,a)})},[w,E]);b("useLayoutEffect_SAFE_FOR_SSR")(function(){var a=null;t!=null&&(a={interactionDesc:A,interactionUUID:t});H(a,"New Interaction");t!=null&&F(t,A)},[A,t,H,F]);b("useLayoutEffect_SAFE_FOR_SSR")(function(){if(t!=null){var a=z.getCurrent(),b=z.subscribe(function(b){a!==b&&(a=b,b?H({interactionDesc:A,interactionUUID:t},"Hidden"):F(t,A))});return function(){return b.remove()}}},[z,t,A,H,F]);i(function(){return function(){H(null,"Unmount")}},[H]);var I=j(function(){__p&&__p();var a={getRelayProfilerContext:function(a){return{wrapPrepareQueryResource:function(b){var c=u.bind(null,E,w,a);l.attachProfileHandler("fetchRelayQuery",c);try{b=b();return b}finally{l.detachProfileHandler("fetchRelayQuery",c)}}}},hold:function(c){var d=b("CometHeroLogging").getSimpleUUID();a.registerPlaceholder(d,c);var e=new(b("Promise"))(function(){});b("PromiseAnnotate").setDisplayName(e,"Hold");a.suspenseCallback(d,c,new Set([e]));return d},logCometHero:function(a,c,d){y.current!==a&&b("CometHeroLogging").markEnd(E,a,[].concat(d),"HeroRendering","Hero Rendering: "+c,m,void 0)},logMetadata:function(a,b,c){var d;c=c[c.length-1];d=(d=C.current[c])!=null?d:Object.create(null);b!=null?d[a]=b:delete d[a];C.current[c]=d},logPageletVC:function(a,c,d,e,f,g,h){var i=f[f.length-1];i=C.current[i];i=i!=null?babelHelpers["extends"]({},i):void 0;e!=null&&(b("CometHeroLogging").measure(E,a,[].concat(f),"VCWithoutImage","VCWithoutImage: "+f[f.length-1],c,e,i),b("cr:683059")&&b("cr:683059").addMarkerPoint("pageletVC_"+g,e+b("performanceNavigationStart")(),h));d!=null&&b("CometHeroLogging").measure(E,a,[].concat(f),"VC","VC: "+f[f.length-1],c,d,i)},logReactRender:function(a,c,d,e,f,g,h){y.current!==a&&b("CometHeroLogging").measure(E,a,[].concat(h),"ReactRender","ReactRender: "+c,e,f,{baseDuration:g})},pageletStack:[],registerPlaceholder:function(a,c){var d=B.current[a]==null;if(!d)return;b("cancelAnimationFrame")(x.current);x.current=null;d=new Set();B.current[a]={pageletStack:c,thenables:d};q(w,a)},removePlaceholder:function(a){var b=B.current[a]!=null;if(!b)return;b=B.current[a];delete B.current[a];G();r(E,w,a,b.pageletStack,v(b))},suspenseCallback:function(a,c,d,e){__p&&__p();var f=B.current[a];B.current[a]==null&&q(w,a);B.current[a]={name:e,pageletStack:c,thenables:d};d.forEach(function(a){if(!p.has(a)){var d;p.add(a);var e=(d=b("PromiseAnnotate").getDisplayName(a))!=null?d:"Promise",f=b("CometHeroLogging").getSimpleUUID();b("CometHeroLogging").markStart(w,f);a.then(function(){b("CometHeroLogging").markEnd(E,w,c,"SuspensePromise","Promise: "+e,f)})}});e=v(f);d=v(B.current[a]);d!==e&&(r(E,w,a,c,d),q(w,a))},unhold:function(b){a.removePlaceholder(b)}};return a},[E,w,G]);a=j(function(){return I.getRelayProfilerContext(I.pageletStack)},[I]);return b("React").jsx(b("CometHeroInteractionContext").Context.Provider,{value:I,children:b("React").jsx(b("CometHeroInteractionIDContext").Provider,{value:t,children:b("React").jsx(b("relay-experimental/ProfilerContext").Provider,{value:a,children:b("React").jsx(b("CometPageletImpl.react"),{name:n,ref:c,children:function(a){return b("React").jsx("div",{className:e,hidden:f,ref:a,children:d})}})})})})}e.exports=c.forwardRef(a)}),null);
__d("WIGDropdownMenuPageDataContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext({pushPage:function(){},returnToPreviousPage:function(){},width:0,moveFocus:function(){},onClose:function(){}});e.exports=a}),null);
__d("WIGDropdownMenuPage.react",["React","WIGDropdownMenuPageDataContext","cometTestID","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useCallback,h=b("React").useMemo,i=b("React").useRef;function a(a){__p&&__p();var c=a.items,d=a.width,e=a.pushPage,f=a.returnToPreviousPage,j=a.onClose,k=i(null),l=g(function(a){var b=k.current;if(b!=null){b=Array.prototype.slice.call(b.querySelectorAll("li > div > div:not([aria-disabled=true]), li > div > a:not([aria-disabled=true])"));var c=b.indexOf(document.activeElement);c=c+(a?-1:1);b[(c+b.length)%b.length].focus()}},[]);a=h(function(){return{pushPage:e,returnToPreviousPage:f,width:d,moveFocus:l,onClose:j}},[e,f,d,l,j]);return b("React").jsx("ul",babelHelpers["extends"]({ref:k,className:"eimatuwp sgyxnsb9 m3p3afjb s9o98cno o4ucoh2i",style:{width:d}},b("cometTestID")("wig-dropdown-menu"),{role:"menu",children:b("React").jsx(b("WIGDropdownMenuPageDataContext").Provider,{value:a,children:c})}))}e.exports=a}),null);
__d("WIGProgressIndicator.react",["CometProgressIndicator.react","React"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("React").jsx(b("CometProgressIndicator.react"),babelHelpers["extends"]({},a))}e.exports=a}),null);