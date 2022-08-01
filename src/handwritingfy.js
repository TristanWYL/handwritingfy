loadHeadLinks()
chrome.storage.sync.get(null, function ({ font, toggle: enabled }) {
    if (enabled) {
        applyFontForAll(font)
    }
});
