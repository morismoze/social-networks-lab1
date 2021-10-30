import React, { useEffect, useState } from 'react';

const Image = ({
    src,
    fallback,
    ...rest
}) => {
    const [ imgSrc, setImgSrc ] = useState(src);

    const handleError = () => {
        setImgSrc(null);
    };

    useEffect(() => {
        setImgSrc(src);
    }, [src]);

    return (
        <img
            src={imgSrc ? imgSrc : fallback}
            onError={handleError}
            {...rest}
        />
    );
};

export default Image;