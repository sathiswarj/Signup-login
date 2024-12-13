import React from 'react';
import pdfFile from '../../assets/Digibizpay_INTENT.pdf';

const DownloadPDFButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile; 
    link.download = 'Digibizpay_INTENT.pdf';
    link.click();
  };

  return (
    <div>
      <h2>Download PDF Example</h2>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
};

export default DownloadPDFButton;

