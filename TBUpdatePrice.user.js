// ==UserScript==
// @name        TBUpdatePrice
// @description	淘宝宝贝价格批量设置工具
// @namespace   com.mzwu.www
// @include     http://upload.taobao.com/auction/publish/edit.htm?*
// @require		http://code.jquery.com/jquery-1.7.2.min.js
// @version     1.1
// ==/UserScript==

(function(){
	try{
		if(typeof jQuery == "function"){
			setTimeout(function(){
				//$("div[data-caption='鞋码']").first().after("<div class=\"sku-group\" id=\"divPrice\"><label class=\"sku-label\">价格设置：</label><div class=\"sku-box\"><input type=\"text\" id=\"txtPrice\" name=\"txtPrice\" class=\"editbox text\"/><input type=\"button\" id=\"btnPrice\" name=\"btnPrice\" value=\"批量设置\"/></div></div>");
				$(".sku-mapwrapper").first().before("<div class=\"sku-group\" id=\"divPrice\"><label class=\"sku-label\">价格设置：</label><div class=\"sku-box\"><input type=\"text\" id=\"txtPrice\" name=\"txtPrice\" class=\"editbox text\"/><input type=\"button\" id=\"btnPrice\" name=\"btnPrice\" value=\"批量设置\"/></div></div>");
				$("#btnPrice").click(function(){
					var price = $("#txtPrice").val();
					$(".J_MapPrice").each(function(){
						$(this).val(price);
					});
				});
			},2000);
		}
	}catch(e){document.title=e.description;}
})();