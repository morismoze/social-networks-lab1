import React from 'react';

import StyledTooltip from "../../../../components/shared/StyledTooltip";
import styles from './ShareIcon.module.scss';

const ShareIcon = ({
    src,
    alt,
    size
}) => {
    return (
        <StyledTooltip title={`Share this movie on ${alt}`}>
            <img
                src={src}
                alt={alt}
                style={{
                    width: size,
                    height: size
                }}
            />
        </StyledTooltip>
    );
};

export default ShareIcon;