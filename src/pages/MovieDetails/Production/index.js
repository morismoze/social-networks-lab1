import React from 'react';

import Data from "../../../components/shared/Data";
import styles from './Production.module.scss';

const Production = ({
    companies,
    countries
}) => {
    const companiesNames = companies.map((company) => company.name);

    const countriesNames = countries.map((country) => country.name);

    return (
        <div className={styles.production}>
            <Data
                title={'Companies'}
                value={companiesNames}
            />
            <Data
                title={'Countries'}
                value={countriesNames}
            />
        </div>
    );
};

export default Production;