import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageDetection from './containers/ImageDetection';
import Section from './components/Section';
import TextResult from './containers/TextResult';

function App() {

    const initialResponse = {
        errors: [],
        detected: []
    };

    const [ppeResponse, setPpeResponse] = useState(initialResponse);
    const [selectedImage, setSelectedImage] = useState(null);
    const [scanning, setScanning] = useState(false);
    const [preview, setPreview] = useState(null);
    const [alert, setAlert] = useState(false);

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
            resetApp()
        }

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

        }).catch(() => {

            setScanning(false);

        });
    };

    const resetApp = () => {
        setPpeResponse(initialResponse);
        setAlert(false);
        setPreview(null)
    };

    return (
        <div className="App">

            {/*<h1 className={`font-bold text-4xl my-8`}>Mask detection</h1>*/}

            <Section flashing={alert}>

                <div className="flex items-center h-auto w-full">
                    <ImageDetection src={preview} result={ppeResponse} scanning={scanning} />
                </div>

                <div className="flex justify-center mt-4">

                    {ppeResponse.detected.length > 0 ? (
                        <>
                            <TextResult response={ppeResponse} setAlert={setAlert} />

                            <button className={`my-4`}  onClick={() => resetApp()}>Reset</button>
                        </>

                    ) : (
                        <label className="rounded-sm px-4 bg-gray-200 mr-2">
                            <span>Upload a photo</span>
                            <input type="file" className="hidden" onChange={handleFileSelect} />
                        </label>
                    )}


                </div>

            </Section>


        </div>
    );
}

export default App;
