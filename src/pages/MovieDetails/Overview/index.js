import React from 'react';

import { useLocation } from "react-router-dom";

import Synopsys from "../../../components/shared/Synopsys";
import Genre from "../Genre";
import Data from "../../../components/shared/Data";
import NotAvailable from "../../../components/shared/NotAvailable";
import ImageLink from "../../../components/shared/ImageLink";
import HeartButton from "../../../components/shared/userActivity/HeartButton";
import AddButton from "../../../components/shared/userActivity/AddButton";
import { useWindowSize } from "../../../hooks/useWindowSize";
import ImdbIcon from "../../../assets/images/imdb_logo.png";
import styles from './Overview.module.scss';

const Overview = ({
    context,
    synopsys,
    genres,
    imdbId,
    isLiked,
    isAddedToWatchlist,
    handleMovieLike,
    handleToggleWatchlist,
    ...rest
}) => {
    const location = useLocation();

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
            {location.pathname.includes('/movies') &&
                <div className={styles.overview__imdbLinkWrapper}>
                    <ImageLink
                        href={`https://imdb.com/title/${imdbId}`}
                        picture={ImdbIcon}
                    />
                    <HeartButton
                        onClick={handleMovieLike}
                        active={isLiked}
                    />
                    <AddButton
                        onClick={handleToggleWatchlist}
                        active={isAddedToWatchlist}
                    />
                </div>
            }
        </div>
    );
};

export default Overview;