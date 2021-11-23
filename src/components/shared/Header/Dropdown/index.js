import React from 'react';

import styles from './Dropdown.module.scss';
import Item from "./Item";

const Dropdown = ({
    isActive,
    items,
    onMouseOver,
    onMouseLeave,
    itemRef
}) => {
    if (!isActive || !items) {
        return null;
    }

    return (
        <div
            className={styles.dropdown}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            style={{ top: itemRef.current.offsetHeight - 5 }}
        >
            {items.map((item, index) => (
                <Item
                    id={item.id}
                    value={item.name}
                    onClick={onMouseLeave}
                    key={index}
                />
            ))}
        </div>
    );
};

export default Dropdown;