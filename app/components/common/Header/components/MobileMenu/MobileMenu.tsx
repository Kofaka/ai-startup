'use client';

import { useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useClickAway, useLockBodyScroll, useToggle } from 'react-use';
import clsx from 'clsx';
// Icons
import MenuIcon from '@/app/components/common/Header/components/MobileMenu/menu.svg';
import StartIcon from '@/app/components/common/Header/components/MobileMenu/stars.svg';
import RocketIcon from '@/app/components/common/Header/components/MobileMenu/rocket.svg';
// Components
import { NavItem } from '@/app/components/common/Header/types';
// Styles
import styles from './MobileMenu.module.scss';

type MobileMenuProps = {
  items: NavItem[],
};

export const MobileMenu = ({ items }: MobileMenuProps) => {
  const [windowScrollLocked, toggleWindowScrollLocked] = useToggle(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useLockBodyScroll(windowScrollLocked);

  useClickAway(ref, () => {
    setIsOpen(false);
    toggleWindowScrollLocked(false);
  });

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
    toggleWindowScrollLocked(!isOpen);
  }

  return <div ref={ref} className={styles.root}>
    <button
      className={clsx(styles.button, {
        [styles.open]: isOpen,
      })}
      onClick={handleMenuToggle}
    >
      <MenuIcon viewBox="0 0 32 32" />
    </button>

    <ul className={clsx(styles.menu, {
      [styles.open]: isOpen,
    })}>
      {items?.map(({ label, href, subItems }) => (
        <li key={label}>
          {href ? (
            <Link
              className={clsx(styles.menuItem, {
                [styles.active]: pathname === href,
              })}
              href={href}
              title={`Go to ${label} page`}
            >
              <StartIcon viewBox="0 0 24 24" className={styles.menuItemIcon} />

              {label}
            </Link>
          ) : (
            <>
              <span className={clsx(styles.menuItem, styles.withSubitems)}>
                <StartIcon viewBox="0 0 24 24" className={styles.menuItemIcon} />

                {label}
              </span>

              <ul className={styles.menuSubitemsList}>
                {subItems?.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      className={clsx(styles.menuItem, {
                        [styles.active]: href === pathname,
                      })}
                      href={href}
                      title={`Go to ${label} page`}
                    >
                      <RocketIcon viewBox="0 0 25 25" className={styles.menuItemIcon} />

                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </li>
      ))}
    </ul>
  </div>;
};

export default MobileMenu;
