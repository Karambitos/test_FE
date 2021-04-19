"use strict";

jQuery(document).ready(function () {
    // Variables
    var clickedTab = jQuery(".tabs > .active");
    var tabWrapper = jQuery(".tab__content");
    var activeTab = tabWrapper.find(".active");

    jQuery(window).resize(function () {
        // update new active tab
        activeTab = jQuery(".tab__content > .active");
    });

    jQuery(".tabs > li").on("click", function () {
        // Remove class from active tab
        jQuery(".tabs > li").removeClass("active");
        // Add class active to clicked tab
        jQuery(this).addClass("active");
        // Update clickedTab variable
        clickedTab = jQuery(".tabs .active");

        // fade out active tab        
        activeTab.fadeOut(400, function () {
            // Remove active class all tabs
            jQuery(".tab__content > li").removeClass("active");
            // Get index of clicked tab
            var clickedTabIndex = clickedTab.index();
            // Add class active to corresponding tab
            jQuery(".tab__content > li").eq(clickedTabIndex).addClass("active");
            // update new active tab
            activeTab = jQuery(".tab__content > .active");
            // Fade in active tab
            activeTab.delay(200).fadeIn(400);
        });
    });
});