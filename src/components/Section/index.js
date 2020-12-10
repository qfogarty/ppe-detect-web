import React, { useEffect, useState } from 'react';

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
        'rounded-lg'
    ];

    const [classes, setClasses] = useState([]);

    useEffect(() => {

        if (flashing) {
            setClasses([...initialClasses, 'stripes--flashing']);
        } else {
            setClasses(initialClasses);
        }
        return () => {};

    }, [flashing]);

    return (
        <section className="grid grid-cols-8 gap-4 items-start mt-8 mx-auto px-8">

            <div
                className={classes.join(' ')}>
                <div className="bg-white rounded-lg mx-8 my-8 overflow-hidden pb-4">

                    {children}

                </div>
            </div>

        </section>
    );
};

export default Section;
