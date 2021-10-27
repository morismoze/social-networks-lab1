import React from 'react';

import Synopsys from "./Synopsys";
import Genre from "./Genre";
import Data from "./Data";
import styles from './Overview.module.scss';

const Overview = ({
    synopsys,
    genres,
    ...rest
}) => {
    return (
        <div className={styles.overview}>
            <Synopsys synopsys={synopsys}/>
            {Object.keys(rest).map(data => (
                <Data
                    title={data}
                    value={rest[data]}
                />
            ))}
            <div className={styles.overview__genresWrapper}>
                {genres.map((genre) => (
                    <Genre name={genre}/>
                ))}
            </div>
        </div>
    );
};

export default Overview;