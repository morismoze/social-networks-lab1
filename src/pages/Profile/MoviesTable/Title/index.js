import React from 'react';

import styles from './Title.module.scss';

const Title = ({
    title
}) => {
    return (
        <span className={styles.tableTitle}>{title}</span>
    );
};

export default Title;