import * as assert from "assert";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from "vscode";
// import * as myExtension from '../../extension';

suite("Extension Test Suite", () => {
  test("Test 1", () => {
    const text = `<?xml version="1.0" encoding="utf-8"?>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<title>icon</title>
						<desc>icon description</desc>
						<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-8h4v2h-4v-2z"/>
					</svg>`;
    const newText = text
      .replace(/[\r\n]/g, "")
      .replace(/<\?xml.*\?>/, "")
      .replace(/<!--.*?-->/g, "")
      .replace(/<title>.*?<\/title>/g, "")
      .replace(/<desc>.*?<\/desc>/g, "")
      .replace(/id=".*?"/g, "")
      .replace(/<svg/, '<svg fill="currentColor"')
      .replace(/>\s+</g, "><");
    assert.strictEqual(
      newText,
      '<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-8h4v2h-4v-2z"/></svg>'
    );
  });
});
