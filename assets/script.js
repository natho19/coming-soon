!(function (e) {
    "use strict";
    jQuery(window).on("load", function () {
        var t, a, n;
        e(".countdown").length && e(".countdown").countdown(), (n = {
            init: function () {
                e("dd").filter(":nth-child(n+1)").addClass("hide"),
                e("dt").on("click", this.show);
            },
            show: function () {
                t = e(this),
                a = t.next(),
                o = t.next().siblings("dd");
                t.addClass("active"),
                t.siblings("dt").removeClass("active"),
                a.slideDown(200),
                n.hide(o);
            },
            hide: function (e) {
                e.slideUp(200);
            },
        }).init();
    });
})(jQuery);
