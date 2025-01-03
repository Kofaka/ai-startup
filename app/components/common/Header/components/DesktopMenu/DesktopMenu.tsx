'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { useClickAway, useLockBodyScroll, useToggle } from 'react-use';
import clsx from 'clsx';
// Components
import {
  DropdownButton,
} from '@/app/components/common/Header/components/DesktopMenu/components';
import { NavItem } from '@/app/components/common/Header/types';
// Styles
import styles from './DesktopMenu.module.scss';

type DesktopMenuProps = {
  items: NavItem[],
};

export const DesktopMenu = ({ items }: DesktopMenuProps) => {
  const [windowScrollLocked, toggleWindowScrollLocked] = useToggle(false);
  const ref = useRef<HTMLUListElement>(null);
  const pathname = usePathname()

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useLockBodyScroll(windowScrollLocked);

  useClickAway(ref, () => {
    setOpenDropdown(null);
    toggleWindowScrollLocked(false);
  });

  useEffect(() => {
    setOpenDropdown(null);
    toggleWindowScrollLocked(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleDropdownClick = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return <nav className={styles.root}>
    <ul
      ref={ref}
      className={styles.menu}
    >
      {items.map(({ label, href, subItems }) => (
        <li key={label}>
          {href ? (
            <Link
              className={clsx(styles.menuItem, {
                [styles.active]: pathname === href,
              })}
              href={href}
              title={`Go to ${label} page`}
            >
              {label}
            </Link>
          ) : (
            <DropdownButton
              className={styles.menuItem}
              isOpen={openDropdown === label}
              action={() => handleDropdownClick(label)}
              label={label}
              items={subItems || []}
              activeItem={pathname}
            />
          )}
        </li>
      ))}
    </ul>
  </nav>;
};

export default DesktopMenu;
