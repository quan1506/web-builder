import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./iframe.css";

const Iframe = ({ children, title, ...props }) => {
  const [iframeRef, setIframeRef] = useState(null);
  const mountNode = iframeRef?.contentWindow?.document?.body;

  return (
    <iframe
      {...props}
      ref={setIframeRef}
      title={title}
      className="iframe-container"
    >
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
};

export default Iframe;
