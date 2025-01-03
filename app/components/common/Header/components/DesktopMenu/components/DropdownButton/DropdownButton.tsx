'use client';

import { useEffect, ReactElement } from 'react';
import Link from 'next/link';
import { useHover } from 'react-use';
import clsx from 'clsx';
// Icons
import ArrowIcon from '@/app/components/common/Header/components/DesktopMenu/components/DropdownButton/arrow.svg';
// Components
import { NavSubItem } from '@/app/components/common/Header/types';
// Styles
import styles from './DropdownButton.module.scss';

type DropdownButtonProps = {
  isOpen: boolean,
  action: () => void,
  label: string,
  items: NavSubItem[],
  activeItem: string,
  className?: string,
}

export const DropdownButton = ({
  isOpen,
  action,
  label,
  items,
  activeItem,
  className
}: DropdownButtonProps) => {
  const toggleButton = (): ReactElement => (
    <button
      className={clsx(styles.button, {
        [styles.open]: isOpen,
      }, className)}
      onClick={action}
    >
      <span>{label}</span>

      <ArrowIcon className={styles.buttonIcon} viewBox="0 0 14 14"/>
    </button>);

  const [hoverToggleButton, hovered] = useHover(toggleButton);

  useEffect(() => {
    if (hovered && !isOpen) {
      action();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovered]);

  return (
    <div className={styles.root}>
      {hoverToggleButton}

      <ul className={clsx(styles.menu, {
        [styles.open]: isOpen,
      })}>
        {items?.map(({ label, href }) => (
          <li key={label}>
            <Link
              className={clsx(styles.menuItem, {
                [styles.active]: href === activeItem
              })}
              href={href}
              title={`Go to ${label} page`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownButton;
