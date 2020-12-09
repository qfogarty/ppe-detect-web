import React from 'react';
import Image from '../../components/Image';

const ImageDetection = (props) => {

    const { src, result } = props;

    const makePercentage = (num) => {
        return `${Math.round(num * 100)}%`;
    };

    let renderDetections;

    if (result) {
        renderDetections = result.detected.map((item, i) => {
            return item.where && (
                <div key={i} className={`absolute border-1 border-vivid-red`} style={{
                    width: makePercentage(item.where.width),
                    height: makePercentage(item.where.height),
                    top: makePercentage(item.where.top),
                    left: makePercentage(item.where.left)
                }}></div>
            );
        });
    }

    return (
        <div className={`relative mx-auto`}>
            <Image src={src} title={`Is there a mask?`} />
            {renderDetections}
        </div>
    );
};

export default ImageDetection;
