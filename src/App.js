import React, { useEffect, useState } from 'react';
import './App.css';
import Placeholder from './components/Placeholder';
import axios from 'axios';

function App() {
    const [ppeResponse, setPpeResponse] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [preview, setPreview] = useState();

    useEffect(() => {
        if (!selectedImage) {
            setPreview(undefined);
            return () => {};
        }

        const imageURL = URL.createObjectURL(selectedImage);
        setPreview(imageURL);

        handleFileUpload();

        return () => URL.revokeObjectURL(imageURL);
    }, [selectedImage]);

    const handleFileSelect = (event) => {
        //take the first file only
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedImage(undefined);
            return;
        }

        setSelectedImage(event.target.files[0]);

    };

    const handleFileUpload = () => {

        const formData = new FormData();
        formData.append('image', selectedImage, selectedImage.name);

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
            console.log(response.data);
            setPpeResponse(response.data);
        }).catch((error) => {
            console.error(error);
        });
    };

    return (
        <div className="App">


            <div className="grid grid-cols-6 gap-4 items-start mt-8 mx-auto px-8">

                <div className="col-span-6 sm:col-span-6 md:col-span-4 md:col-start-2 lg:col-span-4 lg:col-start-2 xl:col-start-3 xl:col-span-2">

                    <div className="bg-white shadow-lg rounded-lg mx-4 my-4 overflow-hidden pb-4">
                        <div className="flex items-center h-auto w-full bg-cover bg-off-yellow">
                            {selectedImage && preview ? (
                                <img src={preview} alt="Is there a mask?" className={`mx-auto`} />
                            ) : (
                                <Placeholder />
                            )}
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
