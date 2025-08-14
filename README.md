# Cool Papers Redirector - Firefox Extension

A Firefox extension that adds a context menu option to redirect from arXiv paper pages to their corresponding papers.cool URLs.

## Features

- Right-click context menu option "Redirect to papers.cool..." appears only on arxiv.org pages
- Supports all arXiv URL formats:
  - Abstract pages: `https://arxiv.org/abs/2507.18583`
  - PDF pages: `https://arxiv.org/pdf/2507.18583`  
  - HTML pages: `https://arxiv.org/html/2507.18583`
  - Versioned papers: `https://arxiv.org/abs/2507.18583v1`
  - Legacy format: `https://arxiv.org/abs/cs/0506078`

## Installation

### From Source (Development)

1. Clone or download this repository
2. Add placeholder icons to the `icons/` directory:
   - `icon-16.png` (16x16 pixels)
   - `icon-48.png` (48x48 pixels) 
   - `icon-128.png` (128x128 pixels)
3. Open Firefox and navigate to `about:debugging`
4. Click "This Firefox" in the left sidebar
5. Click "Load Temporary Add-on"
6. Select the `manifest.json` file from this directory

The extension will be loaded temporarily and will remain active until you restart Firefox.

### For Permanent Installation

To make the extension permanent, you would need to:
1. Create proper icon files
2. Package as a .xpi file
3. Sign with Mozilla (for distribution outside of development)

## Usage

1. Navigate to any arXiv paper page (abs, pdf, or html view)
2. Right-click anywhere on the page
3. Select "Redirect to papers.cool..." from the context menu
4. You'll be redirected to the corresponding papers.cool URL

## Example

- From: `https://arxiv.org/abs/2507.18583`
- To: `https://papers.cool/arxiv/2507.18583`

## Files

- `manifest.json` - Extension manifest with permissions and metadata
- `background.js` - Background script handling context menu and URL redirection
- `icons/` - Directory for extension icons (placeholder files needed)
- `README.md` - This documentation file

## Note

This extension currently uses placeholder icon references. You'll need to add actual icon files to the `icons/` directory for proper functionality.