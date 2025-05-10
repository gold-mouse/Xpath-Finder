const toggle = document.getElementById('toggle');

chrome.storage.sync.get(['xpathEnabled'], (result) => {
  toggle.checked = !!result.xpathEnabled;
});

toggle.addEventListener('change', () => {
  chrome.storage.sync.set({ xpathEnabled: toggle.checked });
});
