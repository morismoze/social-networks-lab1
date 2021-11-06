import React from 'react';

import { ReactComponent as TopFooter } from '../../../assets/images/top-footer.svg';
import { FOOTER_NAV_ITEMS } from "../../../constants/footer";
import styles from './Footer.module.scss';
import Item from "./Item";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <TopFooter className={styles.footer__upper}/>
            <div className={styles.footer__lower}>
                <div className={styles.footer__lowerNav}>
                    {FOOTER_NAV_ITEMS.map((item, index) => (
                        <Item
                            id={item.id}
                            name={item.name}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;