function downloadFile() {
  // Ask the user for confirmation
  var confirmation = confirm("Are you sure you want to download my CV ?");
  // If the user confirms, proceed with the download
  if (confirmation) {
    // Prevent the default behavior of the button click
    event.preventDefault();
    // Create a delay of 3 seconds (5000 milliseconds)
    setTimeout(function () {
      // Hard code the CV URL
      const cvUrl = "assets/mycv/Ahmad_Abubakar_CV.pdf";
      // Create a link element
      const link = document.createElement("a");
      // Set the link attributes
      link.href = cvUrl;
      link.download = "Ahmad_cv.pdf";
      link.target = "_blank";
      // Append the link to the document body
      document.body.appendChild(link);
      // Click the link
      link.click();
      // Remove the link from the document body
      document.body.removeChild(link);
    }, 3000);
  }
}
