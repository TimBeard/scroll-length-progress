"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var scroll = {
  // Compute max scroll height
  get maxScroll() {
    var scrollHeight = document.scrollingElement.scrollHeight;
    var _window = window,
        innerHeight = _window.innerHeight;
    return scrollHeight - innerHeight;
  },

  // Compute number of page (full screen height) scrolled
  get pages() {
    var _window2 = window,
        scrollY = _window2.scrollY,
        innerHeight = _window2.innerHeight;
    return scrollY / innerHeight;
  },

  // Compute scrolling progress
  get progress() {
    var maxScroll = scroll.maxScroll;

    if (maxScroll) {
      var _window3 = window,
          scrollY = _window3.scrollY;
      return scrollY / maxScroll * 100;
    }

    return 100;
  }

};
var _default = scroll;
exports.default = _default;
