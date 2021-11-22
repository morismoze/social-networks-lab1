import React  from 'react';

import { Container } from "@mui/material";
import classNames from "classnames";

import Title from "../Section/Title";
import styles from './SectionLayoutWrapper.module.scss';

const SectionLayoutWrapper = ({
    children,
    title,
    mode = 'dark',
    className
}) => {
    return (
        <div className={classNames(
            styles.sectionWrapper,
            className,
            { [styles.light]: mode === 'light' }
        )}>
            <Container
                maxWidth='xl'
                className={styles.sectionWrapper__container}
            >
                <Title title={title} mode={mode === 'light' ? 'dark': 'light'}/>
                {children}
            </Container>
        </div>
    );
};

export default SectionLayoutWrapper;

