import React, { useState, useEffect } from "react";

const FileViewer = ({ fileName }) => {
  const [code, setCode] = useState("");

  useEffect(() => {
    fetch(fileName)
      .then((response) => response.text())
      .then((contents) => {
        setCode(contents);
      });
  }, [fileName]);

  return (
    <pre>
      <code>{code}</code>
    </pre>
  );
};

export default FileViewer;
