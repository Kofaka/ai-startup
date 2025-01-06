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
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAABGCAMAAADb0dl7AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAMAUExURUdwTP///////////////y4oNf///////////////0QrXv///////////////////////ygnKf///yYlJ////////wAADP///////////////////ycmKP///////yEYKf///////104b////////////////////////////////z0qR////////////////////////yUaKf///////////////08zXP///////////////////////////zcpPyMjJCcbMv///ykbMy8iNf///////////////////0IsTWU5e1Y4ZUgtUyolMP///////////yIgJkgvVf///////yAXJishNygjLUMpVEAtSVM2YUctVkYuUi4kOy0mNS4kOkAsSi0kN////ywiNyQcLDcqQCYeLy4kOkctVUovVzAjOyUdLv///////wEBAgAAAAoFEAgDDAMCBgkEDgQCBwwFEwUDCBgJIQ4GFRUIHhEHGQUDCwIBBBQJICINLhEIHCsROxoKJC8RQS0QPRwLKA4HFw8PDx4NLx8MKxQHGyQOMhsMLCcPNSgQOBYKJBkLKCMjJDoXUz4YWBsZHCQPN1EjgRgXGRAHFkccZlYli9eh/yEONV0olDETRUEZXFsnj9We/zEVSzMTRzYVTSQQOkwdbCkSQVQkhisTRm0vrjgWT2QrnsyM/28uqYc51B8bIjUUStSb/x4OMkQaYWguqE0ifmAqmr5k/8aB/6FG+NKW/ycRPY86004henAxs2Uso8Z1/9il/3oytbJM/lMjg4Y3yrRh/3UyuXo0v8Jq/8uH/s6T/2YqlsB4/6dK/X82yJlB7qtR/yYbLJI+5DAXPSgUM1kmiYI1w5dA3xYWFnUwr7lp/7FY/1MgdadE9H8zups/5r1x/4483QsLC7pd/7hX/2ssn0MdbEogdhgPHUAcZNGP/1gifNum/zsaX9ip/x0RIsp//10lh6NB7pVNx6xG+4s/wrRl7jEWUqZS44Y8u9yp/7928ZtS0LBW9VL2SxUAAABudFJOUwAN+zsI9fgB/gQ06RcwnfTMRgbtuT8BawKj8KBw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"
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
