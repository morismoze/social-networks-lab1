import React  from 'react';

import { AiOutlineSearch, AiOutlineClose } from "react-icons/all";
import classNames from "classnames";

import styles from './SearchButton.module.scss';

const SearchButton = ({
    isToggled,
    toggleSearch
}) => {
    return (
        <div className={styles.container}>
            {isToggled ? (
                <AiOutlineClose
                    onClick={toggleSearch}
                    size={25}
                    className={classNames(
                        styles.container__btn,
                        styles.container__closeBtn
                    )}
                />
            ) : (
                <AiOutlineSearch
                    onClick={toggleSearch}
                    size={25}
                    className={styles.container__btn}
                />
            )}
        </div>
    )
};

export default SearchButton;