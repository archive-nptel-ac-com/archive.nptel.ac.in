document.getElementById('downloadBtn').addEventListener('click', function() {
    // Path to the PDF file you want to allow the user to download
    var pdfUrl = 'https://p-def5.pcloud.com/D4ZfEpaVGZNdkULh7ZZZQsEHXkZ2ZZNsHZkZxQU0Z08ZDYZXQZ5Ns05ZCQUz3eCnHChki46tTAtuuhjIwJOy/Niraj%20Certificate.pdf'; // Replace with your PDF file's URL

    // Trigger the download
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'course_certificate.pdf';  // Specify the default filename for download
    link.click();
});
