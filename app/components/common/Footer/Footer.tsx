import { useMemo, ReactElement, SVGProps } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
// Constants
import { ROUTES, RouteName } from '@/app/constants';
// Icons
import TwitterIcon from '@/app/components/common/Footer/twitter-icon.svg';
import YoutubeIcon from '@/app/components/common/Footer/youtube-icon.svg';
import InstagramIcon from '@/app/components/common/Footer/instagram-icon.svg';
// Images
import LogoWithTitle from '@/app/components/common/Footer/logo-with-title.png';
// Styles
import styles from './Footer.module.scss';

type InternalLink = {
  label: string;
  href: RouteName;
};

type InternalLinksList = {
  category: string;
  links: InternalLink[];
};

type SocialLink = {
  label: string;
  Icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
  href: string;
};

type FooterProps = {
  className?: string;
};

export const Footer = ({ className }: FooterProps) => {
  const internalLinks: InternalLinksList[] = useMemo(() => [
    {
      category: "Product",
      links: [
        { label: "Features", href: ROUTES.FEATURES },
        { label: "Integration", href: ROUTES.INTEGRATION },
        { label: "Updates", href: ROUTES.UPDATES },
        { label: "FAQ", href: ROUTES.FAQ },
        { label: "Pricing", href: ROUTES.PRICING },
      ],
    },
    {
      category: "Company",
      links: [
        { label: "About", href: ROUTES.ABOUT },
        { label: "Blog", href: ROUTES.BLOG },
        { label: "Careers", href: ROUTES.CAREERS },
        { label: "Manifesto", href: ROUTES.MANIFESTO },
        { label: "Press", href: ROUTES.PRESS },
        { label: "Contract", href: ROUTES.CONTRACT },
      ],
    },
    {
      category: "Resources",
      links: [
        { label: "Examples", href: ROUTES.EXAMPLES },
        { label: "Community", href: ROUTES.COMMUNITY },
        { label: "Guides", href: ROUTES.GUIDES },
        { label: "Docs", href: ROUTES.DOCS },
        { label: "Press", href: ROUTES.PRESS },
      ],
    },
    {
      category: "Legal",
      links: [
        { label: "Privacy", href: ROUTES.PRIVACY },
        { label: "Terms", href: ROUTES.TERMS },
        { label: "Security", href: ROUTES.SECURITY },
      ],
    },
  ], []);

  const socialLinks: SocialLink[] = useMemo(() => [
    {
      label: "Twitter",
      Icon: TwitterIcon,
      href: "https://twitter.com/"
    },
    {
      label: "Instagram",
      Icon: InstagramIcon,
      href: "https://www.instagram.com/"
    },
    {
      label: "Youtube",
      Icon: YoutubeIcon,
      href: "https://www.youtube.com/"
    },
  ], []);

  return (
    <footer className={clsx(styles.root, className)}>
      <div className={styles.homeLinkWrapper}>
        <Link
          href={ROUTES.HOME}
          title="Go Home"
          aria-label="Home link"
        >
          <Image
            className={styles.homeLinkLogo}
            src={LogoWithTitle}
            alt="AI startup Kit logo"
            width={127}
            height={35}
            loading="lazy"
          />
        </Link>
      </div>

      <ul className={styles.socialLinksList}>
        {socialLinks.map(({ label, Icon, href }) => (
          <li key={label}>
            <Link
              className={styles.socialLinksListItem}
              href={href}
              title={`Visit our page on ${label}`}
              aria-label={`Visit our page on ${label}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                className={styles.socialLinksListItemIcon}
                viewBox="0 0 24 25"
                aria-hidden={true}
              />
            </Link>
          </li>
        ))}
      </ul>

      <ul className={styles.internalLinksList}>
        {internalLinks.map(({ category, links }) => (
          <li key={category} className={styles.internalLinksListItem}>
            <p className={styles.internalLinksListItemTitle}>{category}</p>

            <ul className={styles.internalLinksListItemLinksList}>
              {links.map(({ label, href }) => (
                <li key={`${category}_${label}`}>
                  <Link
                    className={styles.internalLinksListItemLinksListItem}
                    href={href}
                    title={`Go to "${label}" page`}
                    aria-label={`Go to "${label}" page`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
