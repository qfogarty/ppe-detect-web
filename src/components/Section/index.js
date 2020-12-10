import React from 'react';
import { motion } from 'framer-motion';

const Section = (props) => {

    const { children, flashing } = props;

    const initialClasses = [
        'col-span-8',
        'sm:col-span-8',
        'md:col-span-6',
        'md:col-start-2',
        'lg:col-span-6',
        'lg:col-start-2',
        'xl:col-start-3',
        'xl:col-span-4',
        'stripes',
        'shadow-lg',
        'rounded-lg',
        'border-4'
    ];

    const backgroundVariants = {

        warn: {
            borderColor: ['#FFFDFB', '#FFFC8B', '#FFFDFB'],
            transition: {
                duration: 3,
                yoyo: Infinity
            }
        },
        ok: {
            borderColor: '#FFFDFB'
        }
    };

    return (
        <section className="grid grid-cols-8 gap-4 items-start mx-auto px-4">

            <motion.div
                variants={backgroundVariants}
                initial="ok"
                animate={flashing ? 'warn' : 'ok'}
                className={initialClasses.join(' ')}>
                <div className="bg-white rounded-lg mx-8 my-8 overflow-hidden pb-4">

                    {children}

                </div>
            </motion.div>

        </section>
    );
};

export default Section;
