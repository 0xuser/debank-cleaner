function removeScamTransactions() {
  const elements = document.querySelectorAll('div.History_error__a-cJs');
  elements.forEach(element => {
    element.remove();
  });
}

chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes('https://debank.com/profile/')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: removeScamTransactions
    });
  }
});