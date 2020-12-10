import React from 'react';
import Image from '../../components/Image';
import Scanner from '../../components/Scanner';
import { motion } from 'framer-motion';

const ImageDetection = (props) => {

    const { src, result, scanning } = props;

    const makePercentage = (num) => {
        return `${Math.round(num * 100)}%`;
    };

    console.log(src)

    let renderDetections;

    if (result) {
        renderDetections = result.detected.map((item, i) => {
            return item.where && (

                <motion.div
                    key={i}
                    className={`absolute border-2 border-pastel-green-900 rounded-sm`}
                    style={{
                        width: makePercentage(item.where.width),
                        height: makePercentage(item.where.height),
                        top: makePercentage(item.where.top),
                        left: makePercentage(item.where.left)
                    }}
                    initial={{
                        opacity: 0, scale: 3
                    }}
                    animate={{
                        opacity: 1, scale: 1
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                        delay: i * 0.2,
                        delayChildren: 10.5,
                        scale: {
                            type: 'spring',
                            bounce: 0.5
                        }

                    }}>

                    <motion.svg
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        className={`absolute`} style={{ width:'20px', fill: '#8BFF9B', bottom: '-5px', right: '-5px' }} xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 191.667 191.667">
                        <path
                            d="M95.833 0C42.991 0 0 42.99 0 95.833s42.991 95.834 95.833 95.834 95.833-42.991 95.833-95.834S148.676 0 95.833 0zm55.029 79.646l-60.207 60.207a13.463 13.463 0 01-9.583 3.969c-3.62 0-7.023-1.409-9.583-3.969l-30.685-30.685a13.464 13.464 0 01-3.97-9.583c0-3.621 1.41-7.024 3.97-9.584a13.46 13.46 0 019.583-3.97c3.62 0 7.024 1.41 9.583 3.971l21.101 21.1 50.623-50.623a13.463 13.463 0 019.583-3.969c3.62 0 7.023 1.409 9.583 3.969 5.286 5.286 5.286 13.883.002 19.167z" />
                    </motion.svg>

                </motion.div>

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
