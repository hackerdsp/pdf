document.getElementById('subject').addEventListener('change', function () {
    const selectedPdf = this.value;
    const pdfIframe = document.getElementById('pdf-iframe');
  
    if (selectedPdf) {
      pdfIframe.src = `pdfs/${selectedPdf}`;
    } else {
      pdfIframe.src = ''; // Clear the iframe if no subject is selected
    }
  });
  document.getElementById('pdf-iframe').onload = function () {
    this.contentDocument.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });
  };