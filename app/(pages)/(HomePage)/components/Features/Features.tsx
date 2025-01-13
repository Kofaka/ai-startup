import { ReactElement, SVGProps } from 'react';
// Icons
import GaugeIcon
  from '@/app/(pages)/(HomePage)/components/Features/images/gauge.svg';
import CheckListIcon
  from '@/app/(pages)/(HomePage)/components/Features/images/check-list.svg';
import MagicWandIcon
  from '@/app/(pages)/(HomePage)/components/Features/images/magic-wand.svg';
import ChartLineIcon
  from '@/app/(pages)/(HomePage)/components/Features/images/chart-line.svg';
import TargetIcon
  from '@/app/(pages)/(HomePage)/components/Features/images/target.svg';
import CursorClickIcon
  from '@/app/(pages)/(HomePage)/components/Features/images/cursor-click.svg';
import SparkleIcon
  from '@/app/(pages)/(HomePage)/components/Features/images/sparkle.svg';
import BellRingingIcon
  from '@/app/(pages)/(HomePage)/components/Features/images/bell-ringing.svg';
import FilesIcon
  from '@/app/(pages)/(HomePage)/components/Features/images/files.svg';
// Styles
import styles from './Features.module.scss';

type FeatureItem = {
  title: string;
  description: string;
  Icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
}

export const Features = () => {
  const items: FeatureItem[] = [
    {
      title: 'User-friendly dashboard',
      description: 'Perform complex SEO audits and optimizations with a single click.',
      Icon: GaugeIcon,
    },
    {
      title: 'Content evaluation',
      description: 'Simple corrections for immediate improvemens.',
      Icon: CheckListIcon,
    },
    {
      title: 'Link Optimization Wizard',
      description: 'Guides you through the process of creating and managing links.',
      Icon: MagicWandIcon,
    },
    {
      title: 'Visual reports',
      description: 'Visual insights into your site’s performance.',
      Icon: ChartLineIcon,
    },
    {
      title: 'SEO goal setting',
      description: 'Helps you set and achieve SEO goals with guided assistance.',
      Icon: TargetIcon,
    },
    {
      title: 'One-click optimization',
      description: 'Perform complex SEO audits and optimizations with a single click.',
      Icon: CursorClickIcon,
    },
    {
      title: 'Smart Keyword Generator',
      description: 'Automatic suggestions and the best keywords to target.',
      Icon: SparkleIcon,
    },
    {
      title: 'Automated alerts',
      description: 'Automatic notifications about your SEO health, including quick fixes.',
      Icon: BellRingingIcon,
    },
    {
      title: 'Competitor reports',
      description: 'Provides insights into competitors’ keyword strategies and ranking.',
      Icon: FilesIcon,
    },
  ];

  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>
          Elevate your SEO efforts.
        </h3>

        <ul className={styles.list}>
          {items.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <h4 className={styles.listItemTitle}>
                <item.Icon
                  className={styles.listItemIcon}
                  viewBox="0 0 16 17"
                  aria-hidden={true}
                />
                {item.title}
              </h4>

              <p className={styles.listItemDescription}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
