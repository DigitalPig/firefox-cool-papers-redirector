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

### Quick Install

1. **Download the latest release:**
   - Go to [Releases](https://github.com/DigitalPig/firefox-cool-papers-redirector/releases)
   - Download `cool-papers-redirector-v1.0.0.zip`

2. **Install in Firefox:**
   - Open Firefox → `about:debugging`
   - Click "This Firefox" → "Load Temporary Add-on"
   - Select the downloaded `.zip` file

### From Source (Development)

```bash
git clone https://github.com/DigitalPig/firefox-cool-papers-redirector.git
cd firefox-cool-papers-redirector
```

Then open Firefox → `about:debugging` → "This Firefox" → "Load Temporary Add-on" → Select `manifest.json`

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

## Repository

- **GitHub:** https://github.com/DigitalPig/firefox-cool-papers-redirector
- **Issues:** Report bugs or request features
- **Releases:** Download packaged extension files

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details