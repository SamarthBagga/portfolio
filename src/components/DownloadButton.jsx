import React from 'react';
import file from './example.docx';
import { saveAs } from 'file-saver';

function downloadFile() {
  const fileBlob = new Blob([file], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
  saveAs(fileBlob, 'example.docx');
}

function DownloadButton() {
  return (
    <button onClick={downloadFile}>Download Word File</button>
  );
}

export default DownloadButton;
