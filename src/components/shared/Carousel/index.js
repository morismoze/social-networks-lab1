import React, { useEffect, useState, useRef } from 'react';

import Content from "./Content";
import Arrow from "./Arrow";
import Dots from "./Dots";
import { useWindowSize } from "../../../hooks/useWindowSize";
import styles from './Carousel.module.scss';

const Carousel = ({
    data,
    autoplay = false,
    autoplayDelay = 5000
}) => {
    const firstSlide = data[0];
    const secondSlide = data[1];
    const lastSlide = data[data.length - 1];

    const { width } = useWindowSize();

    const [ activeSlide, setActiveSlide ] = useState(0);

    const [ translate, setTranslate ] = useState(width);

    const [ transition, setTransition ] = useState(0.6);

    const [ slides, setSlides ] = useState([
        lastSlide,
        firstSlide,
        secondSlide
    ]);

    const autoplayRef = useRef();

    const resizeRef = useRef();

    const transitionRef = useRef();

    const setSmoothTransition = () => {
        let _slides = [];

        if (activeSlide === data.length - 1) {
            _slides = [data[data.length - 2], lastSlide, firstSlide];
        } else if (activeSlide === 0) {
            _slides = [lastSlide, firstSlide, secondSlide];
        } else {
            _slides = data.slice(activeSlide - 1, activeSlide + 2);
        }

        setTranslate(width);
        setSlides(_slides);
        setTransition(0);
    };

    const goToPrevSlide = () => {
        if (activeSlide === 0) {
            setActiveSlide(data.length - 1);
        } else {
            setActiveSlide(activeSlide - 1);
        }
        setTranslate(translate - width);
    };

    const goToNextSlide = () => {
        if (activeSlide === data.length - 1) {
            setActiveSlide(0);
        } else {
            setActiveSlide(activeSlide + 1);
        }
        setTranslate(translate + width);
    };

    const handleResize = () => {
        setTranslate(width);
    };

    /*
    * Using this useEffect because lower useEffect captures activeIndex state from the first render
    * and because of that the closure in setInterval always references the activeIndex from the first render
    * and activeIndex + 1 is always 1.
    * */

    useEffect(() => {
        autoplayRef.current = goToNextSlide;
        resizeRef.current = handleResize;
        transitionRef.current = setSmoothTransition;
    });

    /*
    * Using this useEffect because we want to setInterval only once, not on every state change.
    * When we run clearInterval and setInterval, their timing shifts. If we re-render and
    * re-apply effects too often, the interval never gets a chance to fire!
    * The magic happens with useRef hook because we save a callback to its current property
    * and that property is mutable and SHARED BETWEEN RENDERS!!! (this means that we can always
    * read the callback that we set after the last render).
    * */

    useEffect(() => {
        let interval = null;

        const onAutoplay = () => autoplayRef.current();

        const onResize = () => resizeRef.current();

        const onTransitionEnd = (event) => {
            if (event.target.className.includes('Content_content')) {
                transitionRef.current();
            }
        };

        window.addEventListener('resize', onResize);
        window.addEventListener('transitionend', onTransitionEnd);

        if (autoplay) {
            interval = setInterval(onAutoplay, autoplayDelay);
        }

        return () => {
            if (autoplay) {
                clearInterval(interval);
            }
            window.removeEventListener('resize', onResize);
            window.removeEventListener('transitionend', onTransitionEnd);
        };
    },[]);

    useEffect(() => {
        if (transition === 0) {
            setTransition(0.45);
        }
    }, [transition]);

    return (
        <div className={styles.carousel}>
            <Content
                slides={slides}
                translate={translate}
                transition={transition}
                width={width * slides.length}
            />
            <Arrow
                direction='left'
                handleClick={goToPrevSlide}
            />
            <Arrow handleClick={goToNextSlide}/>
            <div className={styles.carousel__dotsWrapper}>
                <Dots
                    images={data}
                    activeSlide={activeSlide}
                />
            </div>
        </div>
    );
};

export default Carousel;