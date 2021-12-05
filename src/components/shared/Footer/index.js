import React from 'react';

import Item from "./Item";
import { ReactComponent as TopFooter } from '../../../assets/images/top-footer.svg';
import { ReactComponent as LogoIcon } from '../../../assets/images/logo-icon.svg';
import { FOOTER_NAV_ITEMS } from "../../../constants/footer";
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <TopFooter className={styles.footer__upper}/>
            <div className={styles.footer__lower}>
                <div className={styles.footer__lowerNav}>
                    {FOOTER_NAV_ITEMS.map((item, index) => (
                        <Item
                            id={item.id}
                            path={item.path}
                            name={item.name}
                            key={index}
                        />
                    ))}
                </div>
                <div className={styles.footer__copyright}>
                    <LogoIcon className={styles.footer__logo}/>
                    <div className={styles.footer__rights}>
                        <span className={styles.footer__recommendMe}>recommend.me</span>
                        <span>&#169; 2021, All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;