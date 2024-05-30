import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./iframe.css";

const Iframe = ({ children, title, ...props }) => {
  const [iframeDocument, setIframeDocument] = useState(null);
  const iframeBody = iframeDocument?.body;

  useEffect(() => {
    if (!iframeDocument) {
      return;
    }

    const styleEl = document.createElement("style");
    styleEl.textContent =
      "body, html { margin: 0; padding: 0; height: 100%; width: 100%; overflow: hidden }, *, *::before, *::after { box-sizing: border-box; }";
    iframeDocument.head.appendChild(styleEl);
  }, [iframeDocument]);

  const handleIframeLoad = (event) => {
    setIframeDocument(event.target?.contentDocument);
  };

  return (
    <iframe
      {...props}
      src="about:blank"
      srcDoc="<!DOCTYPE html>"
      title={title}
      onLoad={handleIframeLoad}
      className="iframe-container"
    >
      {iframeBody &&
        createPortal(
          <div
            style={{
              margin: "0px -20px 0px 0px",
              height: "100%",
              overflowX: "hidden",
              overflowY: "auto",
            }}
          >
            {children}
          </div>,
          iframeBody
        )}
    </iframe>
  );
};

export default Iframe;
