import React from 'react';
import Image from '../../components/Image';
import Scanner from '../../components/Scanner';

const ImageDetection = (props) => {

    const { src, result, scanning } = props;

    const makePercentage = (num) => {
        return `${Math.round(num * 100)}%`;
    };

    let renderDetections;

    console.log({ scanning })

    if (result) {
        renderDetections = result.detected.map((item, i) => {
            return item.where && (
                <div key={i} className={`absolute border-2 border-vivid-red`} style={{
                    width: makePercentage(item.where.width),
                    height: makePercentage(item.where.height),
                    top: makePercentage(item.where.top),
                    left: makePercentage(item.where.left)
                }}></div>
            );
        });
    }

    return (
        <div className={`relative overflow-hidden mx-auto`}>
            <Image src={src} title={`Is there a mask?`} />
            {renderDetections}
            <Scanner show={scanning} />
        </div>
    );
};

export default ImageDetection;
