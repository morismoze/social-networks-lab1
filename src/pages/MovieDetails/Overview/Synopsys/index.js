import React from 'react';

import styles from './Synopsys.module.scss';

const Synopsys = ({
    synopsys
}) => {
    return (
        <p className={styles.synopsys}>{synopsys}</p>
    );
};

export default Synopsys;