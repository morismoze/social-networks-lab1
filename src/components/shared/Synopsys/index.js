import React from 'react';

import NotAvailable from "../NotAvailable";
import styles from './Synopsys.module.scss';

const Synopsys = ({
    synopsys,
    context
}) => {
    if (!synopsys) {
        return (
            <NotAvailable itemNotAvailable={context}/>
        );
    }
    return (
        <p className={styles.synopsys}>{synopsys}</p>
    );
};

export default Synopsys;