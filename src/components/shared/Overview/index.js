import React from 'react';

import Synopsys from "../Synopsys";
import Genre from "../../../pages/MovieDetails/Genre";
import Data from "../Data";
import NotAvailable from "../NotAvailable";
import styles from './Overview.module.scss';

const Overview = ({
    context,
    synopsys,
    genres,
    ...rest
}) => {
    return (
        <div className={styles.overview}>
            <Synopsys
                synopsys={synopsys}
                context={context}
            />
            {Object.keys(rest).map((data, index) => (
                <Data
                    title={data}
                    value={rest[data]}
                    key={index}
                />
            ))}
            {genres &&
                <div className={styles.overview__genresWrapper}>
                    {genres.length > 0 ? (
                        genres.map((genre, index) => (
                            <Genre name={genre} key={index}/>
                        ))
                    ) : (
                        <NotAvailable itemNotAvailable='Genres'/>
                    )}
                </div>
            }
        </div>
    );
};

export default Overview;