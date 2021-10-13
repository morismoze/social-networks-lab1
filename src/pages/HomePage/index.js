import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/Movies/Header";
import WithLayoutWrapper from "../../components/shared/withLayoutWrapper";
import FeaturedMovie from "../../components/Movies/FeaturedMovie";
import * as UserSelectors from '../../store/shared/user/User.selectors';
import * as NavigationSelectors from '../../store/shared/navigation/Navigation.selectors';
import * as MovieSelectors from '../../store/shared/movie/Movie.selectors';
import { getUserFbData } from "../../api/facebook";
import { storeUserInfo } from "../../store/shared/user/User.slice";
import { HEADER_NAV_ITEMS } from "../../constants/header";
import styles from './HomePage.module.scss';

const HomePage = () => {
    const dispatch = useDispatch();

    const userName = useSelector(UserSelectors.name);

    const activeTab = useSelector(NavigationSelectors.activeTab);

    const userPictureLink = useSelector(UserSelectors.pictureLink);

    const featuredMovies = useSelector(MovieSelectors.featuredMovies)

    const Children = () => (
        <>
            {HEADER_NAV_ITEMS[0].id === activeTab &&
                <div className={styles.featuredMoviesContainer}>
                    {featuredMovies.map((movie, index) => (
                        <FeaturedMovie
                            name={movie.name}
                            releaseDate={movie.releaseDate}
                            posterLink={movie.posterLink}
                            duration={movie.duration}
                            cast={movie.cast}
                            synopsys={movie.synopsys}
                            rating={movie.rating}
                            genres={movie.genres}
                            key={index}
                        />
                    ))}
                </div>
            }
        </>
    );

    const WithHomePageLayout = WithLayoutWrapper(Children);

    const fetchUserData = async () => {
        const callback = ({id, email, name, url}) => {
            dispatch(storeUserInfo({id, email, name, url}));
        };

        await getUserFbData(callback, false);
    };

    useEffect(() => {
        if(!userName) {
            fetchUserData();
        }
    }, []);

    return (
        <>
            <Header
                userName={userName}
                userPictureLink={userPictureLink}
            />
            <WithHomePageLayout/>
        </>
    );
};

export default HomePage;