// Import environment variables (you need to have these set in your .env file)
const API_URL = process.env.PURIFYSHIELD_SERVES; // Example: REACT_APP_API_URL=http://127.0.0.1:5000

const handleDownloadTestFile = () => {
  const link = document.createElement("a");
  link.href = require("../../assets/test.csv"); // Use the require function to get the URL

  // Validate file extension
  if (!link.href.endsWith(".csv")) {
    console.error("Invalid file type");
    return;
  }

  link.download = "demoDataToClean.csv"; // The filename that the file will be downloaded as
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const handleUploadAndClean = (file, setCleanedFile) => {
  // Client-side file validation
  if (!file.name.endsWith(".csv")) {
    console.error("Invalid file type");
    return;
  }
  if (file.size > 10485760) {
    // 10MB size limit
    console.error("File is too large");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  fetch(`${API_URL}/upload`, {
    // Use environment variable for API URL
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.blob();
    })
    .then((blob) => {
      setCleanedFile(blob);
    })
    .catch((error) => {
      console.error("There was an issue with the file upload:", error);
    });
};

const handleDownloadCleanedFile = (cleanedFile) => {
  if (cleanedFile) {
    const url = window.URL.createObjectURL(cleanedFile);
    const link = document.createElement("a");
    link.href = url;
    link.download = "cleanedFile.csv";
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
