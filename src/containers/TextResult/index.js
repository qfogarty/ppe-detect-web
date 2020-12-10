import React from 'react';

const TextResult = (props) => {

    const { response, setAlert } = props;

    const masks = response.detected.filter(face => face.cover);
    const noMasks = response.detected.filter(face => !face.cover);
    const plural = (n, single, plural) => n > 1 ? plural : single;

    if (noMasks.length > 0) {
        setAlert(true);
    }

    return response.detected.length > 0 && (
        <section className={`p-2`}>
            {masks.length == 1 ? (
                <p className=''>Detected 1 person wearing a mask</p>
            ) : null}

            {masks.length > 1 ? (
                <p className=''>Detected {masks.length} people wearing masks</p>
            ) : null}

            {noMasks.length == 1 ? (
                <p className='bg-vivid-red-500 text-white rounded-sm'>Warning, detected 1 person not wearing a mask</p>
            ) : null}

            {noMasks.length > 1 ? (
                <p className='bg-vivid-red-500 text-white rounded-sm'>Warning, detected {noMasks.length} people not wearing masks</p>
            ) : null}

            {
                response.errors.map((error, idx) => (
                    <p className='bg-vivid-red-500 text-white rounded-sm' key={idx}>
                        {error}
                    </p>
                ))
            }
        </section>
    );
};

export default TextResult;
