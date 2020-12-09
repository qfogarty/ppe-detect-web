import React from 'react';
import Placeholder from '../Placeholder';

const Image = (props) => {

    const { src, title, classes } = props;

    return src ? <img src={src} alt={title} className={classes} /> : <Placeholder />;
};

export default Image;
