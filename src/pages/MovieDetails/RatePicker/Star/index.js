import React from 'react';

import classnames from "classnames";
import styles from './Star.module.scss';

const Star = ({
    index,
    hoverIndex,
    selectedIndex,
    onMouseEnter,
    onMouseLeave,
    onClick
}) => {
    const isSelected = index <= selectedIndex;

    const inHoverRange = hoverIndex != null && index <= hoverIndex;

    const hoverActive = hoverIndex != null;

    const isHovered = hoverIndex === index;

    return (
        <i
            onClick={() => onClick(index)}
            onMouseEnter={() => onMouseEnter(index)}
            onMouseLeave={onMouseLeave}
            className={classnames(
                'ion-ios-star',
                styles.star,
                { [styles.star__isHovered]: isHovered },
                { [styles.star__isSelected]: isSelected },
                { [styles.star__addSelection]: hoverActive && !isSelected && inHoverRange },
                { [styles.star__removeSelection]: hoverActive && isSelected && !inHoverRange }
            )}
            style={{ direction: (index % 2 === 0) ? "ltr" : "rtl" }}
        >
            &#9733;
        </i>
    );
};

export default Star;