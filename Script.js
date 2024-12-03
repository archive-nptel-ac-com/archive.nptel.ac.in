document.getElementById('downloadBtn').addEventListener('click', function() {
    // Path to the PDF file you want to allow the user to download
    //var pdfUrl = 'https://p-def4.pcloud.com/D4ZFfma0GZOEoC8h7ZZZpyyzXkZ2ZZKcJZkZArB0ZJRZJ4ZsYZLO105ZXsVCx2QiQzpqGKYGIeSUSVeFeL27/NPTEL24MG96S55180432203846331.pdf'; //Replace with your PDF file's URL
    var pdfUrl = 'https://3004.filemail.com/api/file/get?filekey=6DWjI1niij1SV7it834bLeJZKKflCSzeJu6iyeEwP99GQ4qndXVycgt63pm2XmmV6eLoOFasuojYHb9l9SsiCLpQQQ&pk_vid=a8d929088573d64a173320634096c326';
    // Trigger the download
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'course_certificate.pdf';  // Specify the default filename for download
    link.click();
});
