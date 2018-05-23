/*! Built with http://stenciljs.com */
App.loadBundle('animated-background-dip-on-scroll', ['exports'], function (exports) {
    var h = window.App.h;
    var AnimatedBackgroundDipOnScroll = /** @class */ (function () {
        function AnimatedBackgroundDipOnScroll() {
        }
        AnimatedBackgroundDipOnScroll.prototype.render = function () {
            return (h("div", null, "todo"));
        };
        Object.defineProperty(AnimatedBackgroundDipOnScroll, "is", {
            get: function () { return "animated-background-dip-on-scroll"; },
            enumerable: true,
            configurable: true
        });
        return AnimatedBackgroundDipOnScroll;
    }());
    exports.AnimatedBackgroundDipOnScroll = AnimatedBackgroundDipOnScroll;
    Object.defineProperty(exports, '__esModule', { value: true });
});
