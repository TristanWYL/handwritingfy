loadHeadLinks()
chrome.storage.sync.get(null, function ({ font, toggleTextStyle, toggleSvgStyle }) {
    if (toggleTextStyle ?? true) {
        applyFontForAll(font)
    }
    if (toggleSvgStyle ?? true) {
        handwritingfySVG()
    }
});
