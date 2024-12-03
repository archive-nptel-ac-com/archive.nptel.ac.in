document.getElementById('downloadBtn').addEventListener('click', function() {
    // Path to the PDF file you want to allow the user to download
    //var pdfUrl = 'https://p-def4.pcloud.com/D4ZFfma0GZOEoC8h7ZZZpyyzXkZ2ZZKcJZkZArB0ZJRZJ4ZsYZLO105ZXsVCx2QiQzpqGKYGIeSUSVeFeL27/NPTEL24MG96S55180432203846331.pdf'; //Replace with your PDF file's URL
    var pdfUrl = 'https://3004.filemail.com/api/file/get?filekey=XNFTbd-JiqkfTNiNMZIsxCn_GNQjiU1InOwayhQ15Ycp5aCdTN4dxT2n_u_4U70MuiRtzQpdAyGtRxd4PPun5lOjQQ&amp;pk_vid=a8d929088573d64a173320854296c326';
    // Trigger the download
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'course_certificate.pdf';  // Specify the default filename for download
    link.click();
});
