// ==UserScript==
// @name        tb-seller-center-menu
// @description	淘宝卖家中心菜单
// @namespace   com.mzwu.www
// @include     http://*.taobao.com/*
// @require		http://code.jquery.com/jquery-1.7.2.min.js
// @version     1.0
// ==/UserScript==
(function () {
    var version = 1.0;
    try {
        if (typeof jQuery == "function") {
            setTimeout(function () {
                var menu = $(".seller-center .menu-bd-panel").eq(0);
                var str = "<div style=\"text-align:left\">" +
                    "<a href=\"http://trade.taobao.com/trade/itemlist/list_sold_items.htm\" target=\"_top\" rel=\"nofollow\">已卖出的宝贝</a><br/>" +                    
                    "<a href=\"http://sell.taobao.com/auction/goods/goods_on_sale.htm\" target=\"_top\" rel=\"nofollow\">出售中的宝贝</a><br/>" +
                    "<a href=\"http://gongxiao.tmall.com/distributor/order/order_list.htm\" target=\"_blank\" rel=\"nofollow\">分销采购单</a><br/>" +
                    "<hr>" +
                    "<a href=\"http://mai.taobao.com/seller_admin-610.htm\" target=\"_blank\" rel=\"nofollow\">促销管理</a><br/>" +
                    "<a href=\"http://rate.taobao.com/myRate.htm?banner=1\" target=\"_blank\" rel=\"nofollow\">评价管理</a><br/>" +
                    "<hr>" +
                    "<a href=\"http://design.taobao.com/shop/design.htm\" target=\"_blank\" rel=\"nofollow\">店铺装修</a><br/>" +
                    "<a href=\"http://store.taobao.com/shop/view_shop.htm\" target=\"_blank\" rel=\"nofollow\">查看淘宝店铺</a><br/>" +
                    "<a href=\"http://lz.taobao.com/?#recentvisitors/page:1\" target=\"_blank\" rel=\"nofollow\">量子统计</a><br/>" +
                    "</div>";
                if (!!menu) {
                    menu.empty();
                    menu.append(str);
                }
            }, 1000);
        }
    } catch (e) { document.title = e.description; }
})();