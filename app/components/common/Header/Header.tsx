'use client';

import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
// Constants
import { ROUTES } from '@/app/constants';
// Ui
import { Button, ButtonColor, UIComponentSize } from '@/app/ui';
// Images
import LogoImage from '@/app/components/common/Header/logo.png';
// Components
import {
  DesktopMenu,
  MobileMenu,
} from '@/app/components/common/Header/components';
import { NavItem } from '@/app/components/common/Header/types';
// Styles
import styles from './Header.module.scss';

const navItems: NavItem[] = [
  {
    label: 'Features',
    subItems: [
      {
        label: 'OneClick',
        href: ROUTES.ONECLICK,
      },
      {
        label: 'Lifestyle Data',
        href: ROUTES.LIFESTYLE_DATA,
      },
      {
        label: 'Location Data',
        href: ROUTES.LOCATION_DATA,
      },
    ],
  },
  {
    label: 'Developers',
    href: ROUTES.DEVELOPERS,
  },
  {
    label: 'Company',
    subItems: [
      {
        label: 'About',
        href: ROUTES.ABOUT,
      },
      {
        label: 'Careers',
        href: ROUTES.CAREERS,
      },
      {
        label: 'Contact',
        href: ROUTES.CONTACT,
      },
    ],
  },
  {
    label: 'Blog',
    href: ROUTES.BLOG,
  },
  {
    label: 'Changelog',
    href: ROUTES.CHANGELOG,
  },
];

type HeaderProps = {
  className?: string;
};

export const Header = ({ className }: HeaderProps) => {
  const handleJoinWaitlistCtaClick = () => {
    console.log('Join waitlist clicked');
  }

  return <header className={clsx(styles.root, className)}>
    <div className={styles.wrapper}>
      <Link href={ROUTES.HOME} title="Go Home">
        <Image
          className={styles.logo}
          src={LogoImage}
          alt="AI startup logo"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,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"
        />
      </Link>

      <DesktopMenu items={navItems}/>

      <div className={styles.rightMenuWrapper}>
        <Button
          onClick={handleJoinWaitlistCtaClick}
          size={UIComponentSize.Small}
          color={ButtonColor.Purple}
          outerBorder
        >
          Join waitlist
        </Button>

        <MobileMenu items={navItems}/>
      </div>
    </div>
  </header>;
};

export default Header;
