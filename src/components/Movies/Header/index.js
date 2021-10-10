import React from 'react';

import Item from "./Item";
import User from "./User";
import { HEADER_MAV_ITEMS } from "../../../constants/header";
import logoIcon from '../../../assets/images/logo-icon.svg';
import styles from './Header.module.scss';

const Header = ({
    userName,
    userPictureLink
}) => {
    return (
      <header className={styles.header}>
          <div className={styles.header__logoWrapper}>
              <img
                  src={logoIcon}
                  alt={'Logo icon, movie ticket'}
                  className={styles.header__logoIcon}
              />
              <span className={styles.header__logoName}>
                  recommend.me
              </span>
          </div>
          <nav className={styles.header__nav}>
              <ul className={styles.header__navList}>
                  {HEADER_MAV_ITEMS.map((item, index) => (
                      <li
                          className={styles.header__navListItem}
                          key={index}
                      >
                          <Item
                              id={item.id}
                              name={item.name}
                              key={item.id}
                          />
                      </li>
                  ))}
              </ul>
          </nav>
          <div className={styles.header__user}>
              <User
                  name={userName}
                  pictureLink={userPictureLink}
              />
          </div>
      </header>
    );
};

export default Header;