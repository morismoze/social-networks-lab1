import React from 'react';

import { AiOutlineCalendar } from "react-icons/all";

import StyledTooltip from "../../StyledTooltip";
import { extractYearFromReleaseDate } from "../../../../util/timeAndDate";
import styles from './MovieCardReleaseDate.module.scss';

const MovieCardReleaseDate = ({
    releaseDate
}) => {
    const releaseYear = extractYearFromReleaseDate(releaseDate);

    if (!releaseYear) {
        return null;
    }

    return (
        <StyledTooltip
            title={releaseDate}
            placement='top'
        >
            <div className={styles.movieCardRelease}>
                <AiOutlineCalendar
                    size={15}
                    className={styles.movieCardRelease__yearIcon}
                />
                <span className={styles.movieCardRelease__year}>
                {releaseYear}
            </span>
            </div>
        </StyledTooltip>
    );
};

export default MovieCardReleaseDate