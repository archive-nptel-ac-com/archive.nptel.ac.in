document.getElementById('downloadBtn').addEventListener('click', function() {
    // Path to the PDF file you want to allow the user to download
    var pdfUrl = 'https://3007.filemail.com/api/file/get?filekey=zheRXlm40fnxf_LBk6l6NlwkQJiFDyevuZ_m13GVaVlwwAgPcIsmc9rwOhqFcGUqy2cbfZegyw&pk_vid=2312c3fb86b2e947173315417796c326'; // Replace with your PDF file's URL

    // Trigger the download
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'course_certificate.pdf';  // Specify the default filename for download
    link.click();
});
