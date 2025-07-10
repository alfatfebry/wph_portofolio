import React, { useState } from 'react';
import Styles from './Navbar.module.scss';
import NavIcon from '@/assets/nav_icon.svg';
import SMSIcon from '@/assets/Icon-message.svg';
import { Button } from '../Ui/Button';
import HamburgerIcon from '@/assets/icon-hamburger.svg';
import IconClose from '@/assets/icon-close.svg';
import clsx from 'clsx';

export const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  return (
    <header className={clsx(Styles.header, 'container')}>
      {/* Logo */}
      <div className={Styles.navIcon}>
        <NavIcon />
      </div>

      {/* Navbar */}
      <div className={clsx(Styles.navbar, { [Styles.open]: openMenu })}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>

        {/* Mobile Button Hire */}
        <Button as='a' href='' className={Styles.ctaBtnMobile}>
          <SMSIcon />
          <span>Hire me</span>
        </Button>
      </div>

      {/* Desktop Button Hire */}
      <div className={Styles.ctaDesktop}>
        <Button as='a' href='' className={Styles.ctaBtnHireMe}>
          <SMSIcon />
          <span>Hire me</span>
        </Button>
        <div
          className={clsx(Styles.toggleMenu, { [Styles.open]: openMenu })}
          onClick={toggleMenu}
          role='button'
          aria-label='Open menu'
        >
          <HamburgerIcon className={Styles.hamburgerIcon} />
          <IconClose className={Styles.closeMenu} />
        </div>
      </div>
    </header>
  );
};
