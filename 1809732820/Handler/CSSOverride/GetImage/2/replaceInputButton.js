(function(){$(document).ready(function(){var inputButtons=[$(".productvariantsavequotebutton"),$("#applydiscountcouponcode"),$(".editaddressbutton"),$(".continueshoppingbutton"),$(".removediscountbutton"),$(".deleteaddressbutton"),];$(inputButtons).each(function(index,elements){$(elements).each(function(index,item){(function(){var button=$("<button>");$(item).each(function(){$.each(this.attributes,function(){if(this.specified){button.attr(this.name,this.value);}});});button[0].innerHTML=$(item).val();button.insertAfter($(item));button.click(function(){$(item).click();});$(item).hide();$(button).show();})();});});});})();