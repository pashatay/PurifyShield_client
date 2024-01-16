const handleDownloadTestFile = () => {
  const link = document.createElement("a");
  link.href = require("../../assets/test.csv"); // Use the require function to get the URL
  link.download = "demoDataToClean.csv"; // The filename that the file will be downloaded as
  document.body.appendChild(link); // Append to the body
  link.click(); // Simulate a click to trigger the download
  document.body.removeChild(link); // Clean up and remove the link element
};

const handleUploadAndClean = (
  file, // file to be uploaded
  setCleanedFile // function to set 'cleanedFile' state
) => {
  if (file) {
    const formData = new FormData();
    formData.append("file", file);

    fetch("http://127.0.0.1:5000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.blob(); // assuming the response is a file
      })
      .then((blob) => {
        setCleanedFile(blob); // set the cleaned file
      })
      .catch((error) => {
        console.error("There was an issue with the file upload:", error);
      });
  }
};

const handleDownloadCleanedFile = (cleanedFile) => {
  if (cleanedFile) {
    const url = window.URL.createObjectURL(cleanedFile);
    const link = document.createElement("a");
    link.href = url;
    link.download = "cleanedFile.csv"; // You can set a dynamic name based on your requirements
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }
};

export {
  handleDownloadTestFile,
  handleUploadAndClean,
  handleDownloadCleanedFile,
};
