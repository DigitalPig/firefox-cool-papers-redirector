// Context menu ID
const MENU_ID = "redirect-to-papers-cool";

// Create context menu when extension is installed
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: MENU_ID,
    title: "Redirect to papers.cool...",
    contexts: ["page"],
    documentUrlPatterns: ["*://arxiv.org/*"]
  });
});

// Extract paper ID from arXiv URL
function extractPaperID(url) {
  // Match various arXiv URL patterns:
  // https://arxiv.org/abs/2507.18583
  // https://arxiv.org/pdf/2507.18583
  // https://arxiv.org/html/2507.18583
  // https://arxiv.org/abs/2507.18583v1 (with version)
  // https://arxiv.org/abs/cs/0506078 (legacy format)
  
  const patterns = [
    // Standard format: abs/pdf/html with paper ID
    /https:\/\/arxiv\.org\/(abs|pdf|html)\/([^\/\s?#]+)/,
    // Legacy format with category
    /https:\/\/arxiv\.org\/(abs|pdf|html)\/([a-z-]+\/\d+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      let paperID = match[2];
      // Remove version suffix if present (e.g., v1, v2)
      paperID = paperID.replace(/v\d+$/, '');
      return paperID;
    }
  }
  
  return null;
}

// Handle context menu click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === MENU_ID) {
    const paperID = extractPaperID(tab.url);
    
    if (paperID) {
      const papersCoolURL = `https://papers.cool/arxiv/${paperID}`;
      
      // Open papers.cool URL in the current tab
      chrome.tabs.update(tab.id, {
        url: papersCoolURL
      });
    } else {
      console.error("Could not extract paper ID from URL:", tab.url);
    }
  }
});