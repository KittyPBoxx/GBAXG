/*!
 * swiped-events.js - v1.1.7
 * Pure JavaScript swipe events
 * https://github.com/john-doherty/swiped-events
 * @inspiration https://stackoverflow.com/questions/16348031/disable-scrolling-when-touch-moving-certain-element
 * @author John Doherty <www.johndoherty.info>
 * @license MIT
 */
!function(t,e){"use strict";"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(t,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var a=e.createEvent("CustomEvent");return a.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),a},t.CustomEvent.prototype=t.Event.prototype),e.addEventListener("touchstart",(function(t){"true"!==t.target.getAttribute("data-swipe-ignore")&&(o=t.target,l=Date.now(),n=t.touches[0].clientX,a=t.touches[0].clientY,u=0,i=0)}),!1),e.addEventListener("touchmove",(function(t){if(n&&a){var e=t.touches[0].clientX,l=t.touches[0].clientY;u=n-e,i=a-l}}),!1),e.addEventListener("touchend",(function(t){if(o===t.target){var c=parseInt(s(o,"data-swipe-threshold","20"),10),r=s(o,"data-swipe-unit","px"),d=parseInt(s(o,"data-swipe-timeout","500"),10),p=Date.now()-l,h="",v=t.changedTouches||t.touches||[];if("vh"===r&&(c=Math.round(c/100*e.documentElement.clientHeight)),"vw"===r&&(c=Math.round(c/100*e.documentElement.clientWidth)),Math.abs(u)>Math.abs(i)?Math.abs(u)>c&&p<d&&(h=u>0?"swiped-left":"swiped-right"):Math.abs(i)>c&&p<d&&(h=i>0?"swiped-up":"swiped-down"),""!==h){var b={dir:h.replace(/swiped-/,""),touchType:(v[0]||{}).touchType||"direct",xStart:parseInt(n,10),xEnd:parseInt((v[0]||{}).clientX||-1,10),yStart:parseInt(a,10),yEnd:parseInt((v[0]||{}).clientY||-1,10)};o.dispatchEvent(new CustomEvent("swiped",{bubbles:!0,cancelable:!0,detail:b})),o.dispatchEvent(new CustomEvent(h,{bubbles:!0,cancelable:!0,detail:b}))}n=null,a=null,l=null}}),!1);var n=null,a=null,u=null,i=null,l=null,o=null;function s(t,n,a){for(;t&&t!==e.documentElement;){var u=t.getAttribute(n);if(u)return u;t=t.parentNode}return a}}(window,document);
//# sourceMappingURL=index.1a8e77ed.js.map
