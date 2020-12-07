import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    //take the first file
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    console.log(`uploading ${selectedFile.name}`);

    const formData = new FormData();
    formData.append("image", selectedFile, selectedFile.name);

    // TODO: Need an actual API
    const apiUrl = "/api";

    axios
      .post(apiUrl, formData, {
        onUploadProgress: (progressEvent) => {
          console.log(
            `Uploading ${Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            )}%`
          );
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <h1 className={`font-bold text-2xl mt-32`}>Are you wearing a mask?</h1>

      <div
        className={`container mx-auto flex flex-col space-x-4 items-center mt-8`}
      >
        <div className={`flex-1`}>
          <label className="w-64 flex flex-col items-center border-solid border-2 border-night px-6 mt-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92">
              <path d="M88 11H4c-2.2 0-4 1.8-4 4v62c0 2.2 1.8 4 4 4h84c2.2 0 4-1.8 4-4V15c0-2.2-1.8-4-4-4zm-4 8v33.5l-6.7-5.6c-1.5-1.2-3.6-1.2-5.1 0l-10.8 9-25.1-21.8c-1.5-1.3-3.6-1.3-5.1-.1L8 52.7V19h76zM8 73V63l25.6-20.7 25.1 21.8c1.5 1.3 3.7 1.3 5.2.1l10.8-9L84 63v10H8zm44.1-40.4c0-4 3.3-7.3 7.4-7.3 4.1 0 7.4 3.3 7.4 7.3s-3.3 7.3-7.4 7.3c-4.1 0-7.4-3.3-7.4-7.3z" />
            </svg>
            <span>Choose your image</span>
            <input type="file" className="hidden" onChange={handleFileSelect} />
          </label>

          <button
            onClick={handleFileUpload}
            className={`border-solid border-4 border-night rounded-full py-3 px-6 mt-10`}
          >
            Upload
          </button>
        </div>
        <div className={`flex-1`}>{/*<h2>Result</h2>*/}</div>
      </div>

      <div className="container mx-auto px-4"></div>
    </div>
  );
}

export default App;
