import React from 'react';

import Gauge from "../../../components/shared/Gauge";
import NotAvailable from "../NotAvailable";
import Imdb from '../../../assets/images/imdb_logo.png';
import RottenTomatoes from '../../../assets/images/rotten-tomatoes-logo.png';
import MetaCritic from '../../../assets/images/metacritic-logo.png';
import colors from '../../../styles/colors.module.scss';
import styles from './SocialRatings.module.scss';

const SocialRatings = ({
    socialsRatings
}) => {
    if (socialsRatings.length === 0) {
        return (
            <NotAvailable itemNotAvailable={'Social networks ratings'}/>
        )
    }

    const getMeta = (source, value) => {
        switch (source) {
            case 'Internet Movie Database': {
                const split = value.split('/');
                return {
                    value: Number(split[0]) / Number(split[1]),
                    icon: Imdb,
                    color: colors.yellow
                }
            }
            case 'Metacritic': {
                const split = value.split('/');
                return {
                    value: Number(split[0]) / Number(split[1]),
                    icon: MetaCritic,
                    color: colors.darkBlue
                }
            }
            case 'Rotten Tomatoes': {
                const split = value.split('%');
                return {
                    value: Number(split[0]) / 100,
                    icon: RottenTomatoes,
                    color: colors.red
                }
            }
            default:
                return;
        }
    };

    return (
        <div className={styles.socialRatings}>
            {socialsRatings.map((rating, index) => {
                const meta = getMeta(rating.Source, rating.Value);

                return <div className={styles.socialRatings__wrapper}>
                    <Gauge
                        percentage={meta.value}
                        size={70}
                        icon={{
                            src: meta.icon,
                            alt: rating.Source,
                            title: rating.Source
                        }}
                        color={meta.color}
                    />
                    <span className={styles.socialRatings__value}>
                        {(meta.value * 10).toFixed(1)}
                    </span>
                </div>
            })}
        </div>
    );
};

export default SocialRatings;