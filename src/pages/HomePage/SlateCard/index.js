import React from 'react';

import { Link } from "react-router-dom";
import { AiOutlineFire } from "react-icons/all";

import LazyLoadedImage from "../../../components/shared/LazyLoadedImage";
import Fallback from '../../../assets/images/movie-card-fallback.png'
import styles from './SlateCard.module.scss';
import StyledTooltip from "../../../components/shared/StyledTooltip";

const SlateCard = ({
    movie
}) => {
    return (
        <Link
            to={`/${movie.id}/details`}
            className={styles.slateCard}
        >
            <StyledTooltip
                title={`No. of visits: ${movie.visit_counter}`}
                placement='top'
            >
                <div className={styles.slateCard__visitWrapper}>
                    <AiOutlineFire
                        size={20}
                        className={styles.slateCard__detailsIcon}
                    />
                    <span className={styles.slateCard__visitCount}>{movie.visit_counter}</span>
                </div>
            </StyledTooltip>
            <div className={styles.slateCard__imgWrapper}>
                <LazyLoadedImage
                    src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                    fallback={Fallback}
                    alt={movie.title}
                    width={300}
                    height={170}
                />
            </div>
            <span className={styles.slateCard__title}>{movie.title}</span>
        </Link>
    );
};

export default SlateCard;