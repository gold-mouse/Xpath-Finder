let xpathEnabled = false;

chrome.storage.sync.get(['xpathEnabled'], (result) => {
  xpathEnabled = !!result.xpathEnabled;
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.xpathEnabled) {
    xpathEnabled = changes.xpathEnabled.newValue;
  }
});

document.addEventListener('click', function(event) {
  if (!xpathEnabled) return;

  event.preventDefault();
  event.stopPropagation();

  const el = event.target;
  const xpath = getXPath(el);
  console.log("XPath:", xpath);
  alert("XPath:\n" + xpath);
}, true);

function getXPath(element) {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) return '';

  if (element === document.documentElement) return '/html[1]';

  const parent = element.parentNode;
  const tagName = element.tagName.toLowerCase();

  let index = 1;
  for (let sibling = element.previousElementSibling; sibling; sibling = sibling.previousElementSibling) {
    if (sibling.tagName.toLowerCase() === tagName) {
      index++;
    }
  }

  return getXPath(parent) + '/' + tagName + '[' + index + ']';
}
