import { VOID_HTML_ELEMENTS } from "../config";
import usePageBuilderStore from "./usePageBuilderStore";
import styleObjectToCss from "react-style-object-to-css";

const useExportHtmlPage = () => {
  const toHtml = (elementId, pageDocument) => {
    const element = pageDocument[elementId];
    if (!element) {
      return "";
    }

    const isVoidElement = VOID_HTML_ELEMENTS.includes(element.tag);
    const style = `style="${styleObjectToCss(element.style || {})}"`;
    const attributes = Object.entries(element.attributes || {})
      .map(([key, value]) => `${key}="${value}"`)
      .join(" ");

    if (isVoidElement) {
      return `<${element.tag} ${style} ${attributes} />`;
    }

    let html = `<${element.tag} ${style} ${attributes}>`;
    if (element.value) {
      html += element.value;
    }
    if (element.children?.length > 0) {
      html += element.children
        .map((childId) => toHtml(childId, pageDocument))
        .join("");
    }
    html += `</${element.tag}>`;

    return html;
  };

  const exportHtmlPage = () => {
    const { rootElementId, document } = usePageBuilderStore.getState();
    const html = toHtml(rootElementId, document);

    const page = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body, html { margin: 0; padding: 0; height: 100%; width: 100%; overflow: hidden; }
          *, *::before, *::after { box-sizing: border-box; }
          h1, h2, h3, h4, h5, h6, p, img { margin: 0; padding: 0; }
        </style>
        <title>My Page</title>
      </head>
      <body>
        ${html}
      </body>
      </html>
    `;

    return page;
  };

  return exportHtmlPage;
};

export default useExportHtmlPage;
