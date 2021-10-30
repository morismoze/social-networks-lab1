import React, { useEffect, useRef } from 'react';

import styles from './YoutubeEmbed.module.scss';

const YoutubeEmbed = ({
    info
}) => {
    const videoRef = useRef();

    useEffect(() => {
        /*
        * Cancel scroll-to-top bug when we exit full-screen on video
        * */
        const handleFullScreen = (event) => {
            if (!document.webkitIsFullScreen || !document.mozFullScreen || !document.msFullscreenElement) {
                window.scrollTo({ top: videoRef.current.offsetTop, behavior: 'instant' });
            }
        };

        document.addEventListener('fullscreenchange', handleFullScreen);

        return () => document.removeEventListener('fullscreenchange', handleFullScreen);
    }, []);

    return (
        <div
            ref={videoRef}
            className={styles.video}
        >
            <iframe
                src={`https://www.youtube.com/embed/${info.key}`}
                frameBorder='0'
                allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title={info.name}
                className={styles.video__embed}
            />
        </div>
    );
};

export default YoutubeEmbed;