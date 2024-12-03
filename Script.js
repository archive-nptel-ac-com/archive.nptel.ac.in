document.getElementById('downloadBtn').addEventListener('click', function() {
    // Path to the PDF file you want to allow the user to download
    var pdfUrl = 'https://3004.filemail.com/api/file/get?filekey=48GNjECG5ZRw5BFA4b4EcetxcRqqwcou4DQHzoN65ffq8auQwSv_c4O9XQTV_LoZDcVpTMF5QRTXp2MlqWXLHahD0g&pk_vid=2312c3fb86b2e947173320448196c326'; // Replace with your PDF file's URL

    // Trigger the download
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'course_certificate.pdf';  // Specify the default filename for download
    link.click();
});
