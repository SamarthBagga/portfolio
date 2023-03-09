import file from './resume.docx';
import { saveAs } from 'file-saver';

function downloadFile() {
  const fileBlob = new Blob([file], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
  saveAs(fileBlob, 'resume.docx');
}

function DownloadButton() {
  return (
    <button onClick={downloadFile}>Download Word File</button>
  );
}

export default DownloadButton;
