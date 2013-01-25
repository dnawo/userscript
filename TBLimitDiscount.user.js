// ==UserScript==
// @name        TBLimitDiscount
// @namespace   com.mzwu.www
// @description 淘宝限时打折辅助工具
// @include     http://ecrm.taobao.com/limitdiscountpromotion/setLimitDiscountPromotion.htm
// @require		http://code.jquery.com/jquery-1.7.2.min.js
// @version     1.1
// ==/UserScript==

(function(){
	try{
		if(typeof jQuery == "function"){
			//分析宝贝
			var products;			
			function parseProducts(str)
			{
				var arr1, arr2;
				arr1 = str.split(",");
				products = new Array();
				for(var i=0;i<arr1.length;i++){
					var arr2 = arr1[i].split(":");
					products[i] = new Array();
					products[i][0] = arr2[0];
					products[i][1] = arr2[1];
				}
			}
			//查找宝贝
			function findProduct(id)
			{
				for(var i=0;i<products.length;i++){
					if(parseInt(products[i][0]) == parseInt(id)){
						return true;
					}
				}
				return false;
			}
			//获取折扣
			function getDiscount(id){
				for(var i=0;i<products.length;i++){
					if(parseInt(products[i][0]) == parseInt(id)){
						return products[i][1];
					}
				}
				return 9;
			}
			//增强功能
			setTimeout(function(){
				//选择宝贝
				$(".combo-filter").first().before("<div class=\"combo-filter\"><strong>宝贝列表:&nbsp;</strong><input type=\"text\" id=\"txtFilter\" name=\"txtFilter\" class=\"input-text\" style=\"width:600px\" size=\"60\" /><button id=\"btnFilter\" name=\"btnFilter\" type=\"button\" class=\"small-btn\">选定</button></div>");
				$("#btnFilter").click(function(){
					parseProducts($("#txtFilter").val());
					//version 1.0
					/*
					$("#J_TBL_Step2nd").find("tr").each(function(){
						if(findProduct($(this).find(".J_Item").first().val())){
							$(this).find(".J_Activate").first().click();
						}
					});
					*/
					//version 1.1
					$('#J_PromoCounter').val(products.length);
					for(var i=0;i<products.length;i++){
						$('#J_PromoAddItem').val($('#J_PromoAddItem').val()+products[i][0]+(i<products.length-1?",":""));
					}
					$(".J_SubmitStep").eq(1).click();
					$("#txtDiscount").val($("#txtFilter").val());
				});
				//设置限时打折
				$(".combo-batch").first().before("<div class=\"combo-batch\"><strong>宝贝列表:&nbsp;</strong><input type=\"text\" id=\"txtDiscount\" name=\"txtDiscount\" class=\"inputtext\" style=\"width:600px\" size=\"60\" /><button id=\"btnDiscount\" name=\"btnDiscount\" type=\"button\" class=\"small-btn\">设置</button></div>");
				$("#btnDiscount").click(function(){
					parseProducts($("#txtDiscount").val());
					$("#J_TBL_Step3rd").find("tr").each(function(){
						$(this).find(".J_DiscountAdjust").first().val(getDiscount($(this).find(".J_Item").first().val()));
					});
					$("#txtDiscount").val($("#txtFilter").val());
				});
			},2000);
		}
	}catch(e){document.title=e.description;}
})();