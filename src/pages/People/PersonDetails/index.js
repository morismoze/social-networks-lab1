import React, {useEffect, useState} from 'react';

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@mui/material";

import ParagraphLayoutWrapper from "../../../components/shared/ParagraphLayoutWrapper";
import ImageLink from "../../../components/shared/ImageLink";
import StickySidebar from "../../../components/shared/StickySidebar";
import Overview from "../../../components/shared/Overview";
import * as PersonSelectors from '../../../store/shared/movie/Person.selectors';
import { actions as personActions } from '../../../store/shared/movie/Person.actions';
import { personDetailsNavItems } from "../../../constants/personDetails";
import { getStyledDate } from "../../../util/string";
import ImdbIcon from "../../../assets/images/imdb_logo.png";
import styles from './PersonDetails.module.scss';

const PersonDetails = () => {
    const dispatch = useDispatch();

    const params = useParams();

    const [ gender, setGender ] = useState();

    const [ born, setBorn ] = useState();

    const personStatus = useSelector(PersonSelectors.status);
    const person = useSelector(PersonSelectors.activeIdDetails);

    useEffect(() => {
        dispatch(personActions.getPersonDetailsAndToggleLoader(params.id));
    }, []);

    useEffect(() => {
        if (person) {
            if (person.gender === 0) {
                setGender('Not specified');
            } else if (person.gender === 0) {
                setGender('Female');
            } else {
                setGender('Male');
            }

            setBorn(person.birthday ? [ getStyledDate(person.birthday), person.place_of_birth ] : null);
        }
    }, [person]);

    return (
        <>
            {personStatus === 'success' &&
                <Container
                    maxWidth='lg'
                    className={styles.person}
                >
                    <StickySidebar
                        poster={{
                            src: person.profile_path ? `https://image.tmdb.org/t/p/w300${person.profile_path}` : null,
                            width: 300,
                            height: 450,
                            alt: person.name
                        }}
                        navItems={personDetailsNavItems}
                    />
                    <div className={styles.person__data}>
                        <div className={styles.person__dataHeader}>
                            <span className={styles.person__name}>{person.name}</span>
                            <div className={styles.person__links}>
                                {person.imdb_id &&
                                    <ImageLink
                                        href={`https://imdb.com/name/${person.imdb_id}`}
                                        picture={ImdbIcon}
                                    />
                                }
                            </div>
                        </div>
                        <ParagraphLayoutWrapper title='Biography'>
                            <Overview
                                context='Biography'
                                synopsys={person.biography}
                                gender={gender}
                                born={born}
                                { ...(person.deathday && { died: person.deathday}) }
                                knownAs={person.also_known_as}
                                department={person.known_for_department}
                            />
                        </ParagraphLayoutWrapper>
                    </div>
                </Container>
            }
        </>
    );
};

export default PersonDetails;