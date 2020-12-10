import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import ImageDetection from './containers/ImageDetection';

function App() {

    const initialResponse = {
        errors: [],
        detected: []
    };

    const [ppeResponse, setPpeResponse] = useState(initialResponse);
    const [selectedImage, setSelectedImage] = useState(null);
    const [scanning, setScanning] = useState(false);
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
        // reset
        if (ppeResponse.detected.length > 0) {
            setPpeResponse(initialResponse);
        }

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

        setScanning(true);

        axios.post(apiUrl, formData, {
            onUploadProgress: (progressEvent) => {
                console.log(
                    `Uploading ${Math.round(
                        (progressEvent.loaded / progressEvent.total) * 100
                    )}%`
                );
            }
        }).then((response) => {
            setPpeResponse(response.data);
            setScanning(false);
        }).catch((error) => {
            console.error(error);
            setScanning(false);
        });
    };


    const masks = ppeResponse.detected.filter(face => face.cover);
    const noMasks = ppeResponse.detected.filter(face => !face.cover);
    const plural = (n, single, plural) => n > 1 ? plural : single;

    return (
        <div className="App">


            <div className="grid grid-cols-6 gap-4 items-start mt-8 mx-auto px-8">

                <div className="col-span-6 sm:col-span-6 md:col-span-4 md:col-start-2 lg:col-span-4 lg:col-start-2 xl:col-start-3 xl:col-span-2">

                    <div className="bg-white shadow-lg rounded-lg mx-4 my-4 overflow-hidden pb-4">
                        <div className="flex items-center h-auto w-full bg-cover bg-off-yellow">

                            <ImageDetection src={preview} result={ppeResponse} scanning={scanning} />

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

                                { masks.length == 1 ? (
                                    <p className=''>Detected 1 person wearing a mask</p>
                                )  : null }

                                { masks.length > 1 ? (
                                    <p className=''>Detected {masks.length} people wearing masks</p>
                                )  : null }

                                { noMasks.length == 1 ? (
                                    <p className='bg-vivid-red-500 text-white'>Warning, detected 1 person not wearing a mask</p>
                                )  : null }

                                { noMasks.length > 1 ? (
                                    <p className='bg-vivid-red-500 text-white'>Warning, detected { noMasks.length } people not wearing masks</p>
                                )  : null }

                                {
                                    ppeResponse.errors.map((error, idx) => (
                                        <p className='bg-vivid-red-500 text-white' key={idx}>
                                            {error}
                                        </p>
                                    ))
                                }
                        </div>
                    </div>
                </div>)}
        </div>
    );
}

export default App;
