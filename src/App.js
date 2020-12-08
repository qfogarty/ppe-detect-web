import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Placeholder from './components/Placeholder';

function App() {
    const [ppeResponse, setPpeResponse] = useState(null);

    const handleFileSelect = (event) => {
        //take the first file
        if (!event.target.files[0]) {
            return false;
        }
        handleFileUpload(event.target.files[0]);

    };

    const handleFileUpload = (file) => {
        console.log(`uploading ${file.name}`);

        const formData = new FormData();
        formData.append('image', file, file.name);

        // TODO: Need an actual API
        const apiUrl = '/api';

        axios.post(apiUrl, formData, {
            onUploadProgress: (progressEvent) => {
                setPpeResponse(
                    `Uploading ${Math.round(
                        (progressEvent.loaded / progressEvent.total) * 100
                    )}%`
                );
            }
        }).then((response) => {
            setPpeResponse(response.data);
        }).catch((error) => {
            console.error(error);
        });
    };

    return (
        <div className="App">


            <div className="grid grid-cols-6 gap-4 items-start mt-8 mx-auto px-8">

                <div className="col-span-6 sm:col-span-6 md:col-span-4 md:col-start-2 lg:col-span-4 lg:col-start-2 xl:col-start-3 xl:col-span-2">
                    <div className="bg-white shadow-lg rounded-lg px-4 py-6 mx-4 my-4">
                        <div className="mx-auto rounded-md">
                            <Placeholder />
                        </div>
                        <h1 className={`font-bold text-2xl mt-8`}>Are you wearing a mask?</h1>
                        <div className="h-2 bg-gray-200 w-64 mt-2 block mx-auto rounded-sm"></div>
                        <div className="flex justify-center mt-4">
                            <label className="rounded-sm px-4 bg-gray-200 mr-2">
                                <span>Upload a photo</span>
                                <input type="file" className="hidden" onChange={handleFileSelect} />
                            </label>
                        </div>
                    </div>
                </div>


            </div>
            {ppeResponse && (
                <div className="grid grid-cols-6 gap-4 items-start mt-8 mx-auto px-8">
                    <div className="col-span-6 sm:col-span-6 md:col-span-4 md:col-start-2 lg:col-span-4 lg:col-start-2  xl:col-start-3 xl:col-span-2">
                        <div className="bg-white shadow-lg rounded-lg px-4 py-6 mx-4 my-4">
                    <pre>
                        {ppeResponse}
                    </pre>
                        </div>
                    </div>
                </div>)}
        </div>
    );
}

export default App;
