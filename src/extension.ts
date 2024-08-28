// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "beautifySvg.prettierSvg",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showInformationMessage("No active editor!");
        return;
      }

      const selection = editor.selection;
      const text = editor.document.getText(selection);
      if (!text) {
        vscode.window.showInformationMessage("No text selected!");
        return;
      }

      // .replace(/id=".*?"/g, "")
      const newText = text
        .replace(/[\r\n]/g, "")
        .replace(/<\?xml.*\?>/, "")
        .replace(/<!--.*?-->/g, "")
        .replace(/<title>.*?<\/title>/g, "")
        .replace(/<desc>.*?<\/desc>/g, "")
        .replace(/id="[\u4e00-\u9fa5]+"/g, "")
        .replace(/<svg/, '<svg fill="currentColor"')
        .replace(/>\s+</g, "><");
      editor.edit((editBuilder) => {
        editBuilder.replace(selection, newText);
      });
      vscode.window.showInformationMessage("Prettier SVG success!");
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
