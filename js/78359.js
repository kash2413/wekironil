/*!
* jQuery UI Touch Punch 0.2.3
*
* Copyright 2011–2014, Dave Furfero
* Dual licensed under the MIT or GPL Version 2 licenses.
*
* Depends:
* jquery.ui.widget.js
* jquery.ui.mouse.js
*/!function(t){function o(o,e){if(!(o.originalEvent.touches.length>1)){var u=o.originalEvent.changedTouches[0],n=document.createEvent("MouseEvents");t(u.target).is("input")||t(u.target).is("textarea")?o.stopPropagation():o.preventDefault(),n.initMouseEvent(e,!0,!0,window,1,u.screenX,u.screenY,u.clientX,u.clientY,!1,!1,!1,!1,0,null),o.target.dispatchEvent(n)}}if(t.support.touch="ontouchend"in document,t.support.touch){var e,u=t.ui.mouse.prototype,n=u._mouseInit,c=u._mouseDestroy;u._touchStart=function(t){var u=this;!e&&u._mouseCapture(t.originalEvent.changedTouches[0])&&(e=!0,u._touchMoved=!1,o(t,"mouseover"),o(t,"mousemove"),o(t,"mousedown"))},u._touchMove=function(t){e&&(this._touchMoved=!0,o(t,"mousemove"))},u._touchEnd=function(t){e&&(o(t,"mouseup"),o(t,"mouseout"),this._touchMoved||o(t,"click"),e=!1)},u._mouseInit=function(){var o=this;o.element.bind({touchstart:t.proxy(o,"_touchStart"),touchmove:t.proxy(o,"_touchMove"),touchend:t.proxy(o,"_touchEnd")}),n.call(o)},u._mouseDestroy=function(){var o=this;o.element.unbind({touchstart:t.proxy(o,"_touchStart"),touchmove:t.proxy(o,"_touchMove"),touchend:t.proxy(o,"_touchEnd")}),c.call(o)}}}(jQuery);;