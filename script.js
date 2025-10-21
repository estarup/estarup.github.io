window.focusWithoutScroll = function (element) {
    if (!element) return;
    const x = window.scrollX;
    const y = window.scrollY;
    element.focus({ preventScroll: true });
    window.scrollTo(x, y); // keep current scroll
};
