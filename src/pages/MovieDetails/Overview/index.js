import React from 'react';

import { useWindowSize } from "../../../hooks/useWindowSize";

import Synopsys from "../../../components/shared/Synopsys";
import Genre from "../Genre";
import Data from "../../../components/shared/Data";
import NotAvailable from "../../../components/shared/NotAvailable";
import styles from './Overview.module.scss';
import ImdbIcon from "../../../assets/images/imdb_logo.png";
import ImageLink from "../../../components/shared/ImageLink";

const Overview = ({
    context,
    synopsys,
    genres,
    imdbId,
    ...rest
}) => {
    const { width } = useWindowSize();

    return (
        <div className={styles.overview}>
            <Synopsys
                synopsys={synopsys}
                context={context}
            />
            {Object.keys(rest).map((data, index) => (
                data === 'revenue' && width > 768 ? null : (
                    <Data
                        title={data}
                        value={rest[data]}
                        key={index}
                    />
                )
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
            <ImageLink
                href={`https://imdb.com/title/${imdbId}`}
                picture={ImdbIcon}
            />
        </div>
    );
};

export default Overview;