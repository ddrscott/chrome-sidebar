chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));

chrome.tabs.onActivated.addListener(async ({ tabId }) => {
    await chrome.sidePanel.setOptions({
        tabId,
        path: 'panel.html',
        enabled: true
    });
});
