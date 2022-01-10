import { useEffect } from "react";

const useScrollToTop = (location) => {
    useEffect(() => {
        document.documentElement.style = 'scroll-behavior: auto !important';
        window.scrollTo(0, 0);

        return () => {
            document.documentElement.style = 'scroll-behavior: unset';
        }
    }, [location]);
};

export default useScrollToTop;