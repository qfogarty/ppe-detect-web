import React from 'react';

const TextResult = (props) => {

    const { response, setAlert } = props;

    const unMaskedFaces = response.detected.filter((face) => !face.cover);
    const unMaskedTotal = unMaskedFaces.length || 0;

    if (unMaskedTotal > 0) {
        setAlert(true);
    }

    return response.detected.length > 0 && (
        <section>
            <p>
                {response.detected.length > 0 ? `${response.detected.length} faces` : `No faces`} found.
            </p>
            {unMaskedTotal > 0 && (
                <>
                    <h2 className={`text-2xl text-bold my-4`}>Warning</h2>
                    <p>{unMaskedTotal} {unMaskedTotal === 1 ? 'face is' : 'faces are'} unmasked.</p>
                </>
            )}
        </section>
    );
};

export default TextResult;
