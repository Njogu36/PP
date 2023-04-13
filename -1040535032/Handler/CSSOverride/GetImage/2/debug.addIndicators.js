!function(e,r){"function"==typeof define&&define.amd?define(["ScrollMagic"],r):r("object"==typeof exports?require("scrollmagic"):e.ScrollMagic||e.jQuery&&e.jQuery.ScrollMagic)}(this,function(e){"use strict";var r="debug.addIndicators",t=window.console||{},i=Function.prototype.bind.call(t.error||t.log||function(){},t);e||i("("+r+") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");var o="0.85em",n="9999",s=15,d=e._util,a=0;e.Scene.extend(function(){var e,r=this;r.addIndicators=function(t){if(!e){var i={name:"",indent:0,parent:void 0,colorStart:"green",colorEnd:"red",colorTrigger:"blue"};t=d.extend({},i,t),a++,e=new g(r,t),r.on("add.plugin_addIndicators",e.add),r.on("remove.plugin_addIndicators",e.remove),r.on("destroy.plugin_addIndicators",r.removeIndicators),r.controller()&&e.add()}return r},r.removeIndicators=function(){return e&&(e.remove(),this.off("*.plugin_addIndicators"),e=void 0),r}}),e.Controller.addOption("addIndicators",!1),e.Controller.extend(function(){var t=this,i=t.info(),o=i.container,n=i.isDocument,a=i.vertical,g={groups:[]},l=function(){t._log&&(Array.prototype.splice.call(arguments,1,0,"("+r+")","->"),t._log.apply(this,arguments))};t._indicators&&l(2,"WARNING: Scene already has a property '_indicators', which will be overwritten by plugin."),this._indicators=g;var c=function(){g.updateBoundsPositions()},u=function(){g.updateTriggerGroupPositions()};return o.addEventListener("resize",u),n||(window.addEventListener("resize",u),window.addEventListener("scroll",u)),o.addEventListener("resize",c),o.addEventListener("scroll",c),this._indicators.updateBoundsPositions=function(e){for(var r,t,i,n=e?[d.extend({},e.triggerGroup,{members:[e]})]:g.groups,l=n.length,c={},u=a?"left":"top",p=a?"width":"height",f=a?d.get.scrollLeft(o)+d.get.width(o)-s:d.get.scrollTop(o)+d.get.height(o)-s;l--;)for(i=n[l],r=i.members.length,t=d.get[p](i.element.firstChild);r--;)c[u]=f-t,d.css(i.members[r].bounds,c)},this._indicators.updateTriggerGroupPositions=function(e){for(var r,i,l,c,u,p=e?[e]:g.groups,f=p.length,m=n?document.body:o,h=n?{top:0,left:0}:d.get.offset(m,!0),v=a?d.get.width(o)-s:d.get.height(o)-s,b=a?"width":"height",G=a?"Y":"X";f--;)r=p[f],i=r.element,l=r.triggerHook*t.info("size"),c=d.get[b](i.firstChild.firstChild),u=l>c?"translate"+G+"(-100%)":"",d.css(i,{top:h.top+(a?l:v-r.members[0].options.indent),left:h.left+(a?v-r.members[0].options.indent:l)}),d.css(i.firstChild.firstChild,{"-ms-transform":u,"-webkit-transform":u,transform:u})},this._indicators.updateTriggerGroupLabel=function(e){var r="trigger"+(e.members.length>1?"":" "+e.members[0].options.name),t=e.element.firstChild.firstChild,i=t.textContent!==r;i&&(t.textContent=r,a&&g.updateBoundsPositions())},this.addScene=function(r){this._options.addIndicators&&r instanceof e.Scene&&r.controller()===t&&r.addIndicators(),this.$super.addScene.apply(this,arguments)},this.destroy=function(){o.removeEventListener("resize",u),n||(window.removeEventListener("resize",u),window.removeEventListener("scroll",u)),o.removeEventListener("resize",c),o.removeEventListener("scroll",c),this.$super.destroy.apply(this,arguments)},t});var g=function(e,t){var i,o,n=this,s=l.bounds(),g=l.start(t.colorStart),c=l.end(t.colorEnd),u=t.parent&&d.get.elements(t.parent)[0],p=function(){e._log&&(Array.prototype.splice.call(arguments,1,0,"("+r+")","->"),e._log.apply(this,arguments))};t.name=t.name||a,g.firstChild.textContent+=" "+t.name,c.textContent+=" "+t.name,s.appendChild(g),s.appendChild(c),n.options=t,n.bounds=s,n.triggerGroup=void 0,this.add=function(){o=e.controller(),i=o.info("vertical");var r=o.info("isDocument");u||(u=r?document.body:o.info("container")),r||"static"!==d.css(u,"position")||d.css(u,{position:"relative"}),e.on("change.plugin_addIndicators",m),e.on("shift.plugin_addIndicators",f),_(),b(),setTimeout(function(){o._indicators.updateBoundsPositions(n)},0),p(3,"added indicators")},this.remove=function(){if(n.triggerGroup){if(e.off("change.plugin_addIndicators",m),e.off("shift.plugin_addIndicators",f),n.triggerGroup.members.length>1){var r=n.triggerGroup;r.members.splice(r.members.indexOf(n),1),o._indicators.updateTriggerGroupLabel(r),o._indicators.updateTriggerGroupPositions(r),n.triggerGroup=void 0}else w();v(),p(3,"removed indicators")}};var f=function(){b()},m=function(e){"triggerHook"===e.what&&_()},h=function(){var e=o.info("vertical");d.css(g.firstChild,{"border-bottom-width":e?1:0,"border-right-width":e?0:1,bottom:e?-1:t.indent,right:e?t.indent:-1,padding:e?"0 8px":"2px 4px"}),d.css(c,{"border-top-width":e?1:0,"border-left-width":e?0:1,top:e?"100%":"",right:e?t.indent:"",bottom:e?"":t.indent,left:e?"":"100%",padding:e?"0 8px":"2px 4px"}),u.appendChild(s)},v=function(){s.parentNode.removeChild(s)},b=function(){s.parentNode!==u&&h();var r={};r[i?"top":"left"]=e.triggerPosition(),r[i?"height":"width"]=e.duration(),d.css(s,r),d.css(c,{display:e.duration()>0?"":"none"})},G=function(){var r=l.trigger(t.colorTrigger),s={};s[i?"right":"bottom"]=0,s[i?"border-top-width":"border-left-width"]=1,d.css(r.firstChild,s),d.css(r.firstChild.firstChild,{padding:i?"0 8px 3px 8px":"3px 4px"}),document.body.appendChild(r);var a={triggerHook:e.triggerHook(),element:r,members:[n]};o._indicators.groups.push(a),n.triggerGroup=a,o._indicators.updateTriggerGroupLabel(a),o._indicators.updateTriggerGroupPositions(a)},w=function(){o._indicators.groups.splice(o._indicators.groups.indexOf(n.triggerGroup),1),n.triggerGroup.element.parentNode.removeChild(n.triggerGroup.element),n.triggerGroup=void 0},_=function(){var r=e.triggerHook(),t=1e-4;if(!(n.triggerGroup&&Math.abs(n.triggerGroup.triggerHook-r)<t)){for(var i,s=o._indicators.groups,d=s.length;d--;)if(i=s[d],Math.abs(i.triggerHook-r)<t)return n.triggerGroup&&(1===n.triggerGroup.members.length?w():(n.triggerGroup.members.splice(n.triggerGroup.members.indexOf(n),1),o._indicators.updateTriggerGroupLabel(n.triggerGroup),o._indicators.updateTriggerGroupPositions(n.triggerGroup))),i.members.push(n),n.triggerGroup=i,void o._indicators.updateTriggerGroupLabel(i);if(n.triggerGroup){if(1===n.triggerGroup.members.length)return n.triggerGroup.triggerHook=r,void o._indicators.updateTriggerGroupPositions(n.triggerGroup);n.triggerGroup.members.splice(n.triggerGroup.members.indexOf(n),1),o._indicators.updateTriggerGroupLabel(n.triggerGroup),o._indicators.updateTriggerGroupPositions(n.triggerGroup),n.triggerGroup=void 0}G()}}},l={start:function(e){var r=document.createElement("div");r.textContent="start",d.css(r,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e});var t=document.createElement("div");return d.css(t,{position:"absolute",overflow:"visible",width:0,height:0}),t.appendChild(r),t},end:function(e){var r=document.createElement("div");return r.textContent="end",d.css(r,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e}),r},bounds:function(){var e=document.createElement("div");return d.css(e,{position:"absolute",overflow:"visible","white-space":"nowrap","pointer-events":"none","font-size":o}),e.style.zIndex=n,e},trigger:function(e){var r=document.createElement("div");r.textContent="trigger",d.css(r,{position:"relative"});var t=document.createElement("div");d.css(t,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:e,"border-color":e}),t.appendChild(r);var i=document.createElement("div");return d.css(i,{position:"fixed",overflow:"visible","white-space":"nowrap","pointer-events":"none","font-size":o}),i.style.zIndex=n,i.appendChild(t),i}}});