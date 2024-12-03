document.getElementById('downloadBtn').addEventListener('click', function() {
    // Path to the PDF file you want to allow the user to download
    var pdfUrl = 'https://p-def4.pcloud.com/D4ZFfma0GZOEoC8h7ZZZpyyzXkZ2ZZKcJZkZArB0ZJRZJ4ZsYZLO105ZXsVCx2QiQzpqGKYGIeSUSVeFeL27/NPTEL24MG96S55180432203846331.pdf'; // Replace with your PDF file's URL

    // Trigger the download
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'course_certificate.pdf';  // Specify the default filename for download
    link.click();
});
