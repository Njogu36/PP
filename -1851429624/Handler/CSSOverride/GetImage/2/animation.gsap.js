!function(e,n){"function"==typeof define&&define.amd?define(["ScrollMagic","TweenMax","TimelineMax"],n):"object"==typeof exports?(require("gsap"),n(require("scrollmagic"),TweenMax,TimelineMax)):n(e.ScrollMagic||e.jQuery&&e.jQuery.ScrollMagic,e.TweenMax||e.TweenLite,e.TimelineMax||e.TimelineLite)}(this,function(e,n,t){"use strict";var r="animation.gsap",o=window.console||{},i=Function.prototype.bind.call(o.error||o.log||function(){},o);e||i("("+r+") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."),n||i("("+r+") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs."),e.Scene.addOption("tweenChanges",!1,function(e){return!!e}),e.Scene.extend(function(){var e,o=this,i=function(){o._log&&(Array.prototype.splice.call(arguments,1,0,"("+r+")","->"),o._log.apply(this,arguments))};o.on("progress.plugin_gsap",function(){a()}),o.on("destroy.plugin_gsap",function(e){o.removeTween(e.reset)});var a=function(){if(e){var n=o.progress(),t=o.state();e.repeat&&-1===e.repeat()?"DURING"===t&&e.paused()?e.play():"DURING"===t||e.paused()||e.pause():n!=e.progress()&&(0===o.duration()?n>0?e.play():e.reverse():o.tweenChanges()&&e.tweenTo?e.tweenTo(n*e.duration()):e.progress(n).pause())}};o.setTween=function(r,s,l){var u;arguments.length>1&&(arguments.length<3&&(l=s,s=1),r=n.to(r,s,l));try{u=t?new t({smoothChildTiming:!0}).add(r):r,u.pause()}catch(c){return i(1,"ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"),o}if(e&&o.removeTween(),e=u,r.repeat&&-1===r.repeat()&&(e.repeat(-1),e.yoyo(r.yoyo())),o.tweenChanges()&&!e.tweenTo&&i(2,"WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."),e&&o.controller()&&o.triggerElement()&&o.loglevel()>=2){var g=n.getTweensOf(o.triggerElement()),d=o.controller().info("vertical");g.forEach(function(e,n){var t=e.vars.css||e.vars,r=d?void 0!==t.top||void 0!==t.bottom:void 0!==t.left||void 0!==t.right;return r?(i(2,"WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"),!1):void 0})}if(parseFloat(TweenLite.version)>=1.14)for(var p,w,f=e.getChildren?e.getChildren(!0,!0,!1):[e],h=function(){i(2,"WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another")},v=0;v<f.length;v++)p=f[v],w!==h&&(w=p.vars.onOverwrite,p.vars.onOverwrite=function(){w&&w.apply(this,arguments),h.apply(this,arguments)});return i(3,"added tween"),a(),o},o.removeTween=function(n){return e&&(n&&e.progress(0).pause(),e.kill(),e=void 0,i(3,"removed tween (reset: "+(n?"true":"false")+")")),o}})});