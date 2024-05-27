import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./iframe.css";

const Iframe = ({ children, title, ...props }) => {
  const [iframeRef, setContentRef] = useState(null);
  const mountNode = iframeRef?.contentWindow?.document?.body;

  useEffect(() => {
    if (!iframeRef) {
      return;
    }
    const iframeDocument =
      iframeRef.contentDocument || iframeRef.contentWindow.document;

    const styleEl = document.createElement("style");
    styleEl.textContent =
      "body { margin: 0; }, *, *::before, *::after { box-sizing: border-box; }";
    iframeDocument.head.appendChild(styleEl);
  }, [iframeRef]);

  return (
    <iframe
      {...props}
      ref={setContentRef}
      title={title}
      className="iframe-container"
    >
      {mountNode &&
        createPortal(
          <div
            style={{
              margin: "0px -20px 0px 0px",
              height: "100%",
              overflowX: "hidden",
              overflowY: "auto",
            }}
          >
            <div style={{ padding: "12px 0", minHeight: "100%" }}>
              {children}
            </div>
          </div>,
          mountNode
        )}
    </iframe>
  );
};

export default Iframe;
