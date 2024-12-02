document.getElementById('downloadBtn').addEventListener('click', function() {
    // Path to the PDF file you want to allow the user to download
    var pdfUrl = 'https://www.dropbox.com/scl/fi/evhd6ebuh2n43p4h9aca5/Niraj-Certificate.pdf?rlkey=2sz7ed5b1icpiw3k7j14kjd2y&st=yje9e9v9&dl=1'; // Replace with your PDF file's URL

    // Trigger the download
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'course_certificate.pdf';  // Specify the default filename for download
    link.click();
});
