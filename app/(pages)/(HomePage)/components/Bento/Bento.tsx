import { useMemo } from 'react';
import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';
// Images
import SeoIllustration from '@/app/(pages)/(HomePage)/components/Bento/images/seo-illustration.png';
import UserFriendlyIllustration from '@/app/(pages)/(HomePage)/components/Bento/images/user-friendly-illustration.png';
import VisualReportsIllustration from '@/app/(pages)/(HomePage)/components/Bento/images/visual-reports-illustration.png';
import SmartGeneratorIllustration from '@/app/(pages)/(HomePage)/components/Bento/images/smart-generator-illustration.png';
// Styles
import styles from './Bento.module.scss';

enum InfoItemKind {
  ThreeD = 'threeD',
  Dashboard = 'dashboard',
}

type InfoItem = {
  kind: InfoItemKind;
  title: string;
  description: string;
  illustration: StaticImageData;
};

export const Bento = () => {
  const infoItems: InfoItem[] = useMemo(() => [
    {
      kind: InfoItemKind.ThreeD,
      title: 'SEO goal setting',
      description: 'Helps you set and achieve SEO goals with guided assistance.',
      illustration: SeoIllustration,
    },
    {
      kind: InfoItemKind.Dashboard,
      title: 'User-friendly dashboard',
      description: 'Perform complex SEO audits and optimizations with a single click.',
      illustration: UserFriendlyIllustration,
    },
    {
      kind: InfoItemKind.Dashboard,
      title: 'Visual reports',
      description: 'Visual insights into your site’s performance.',
      illustration: VisualReportsIllustration
    },
    {
      kind: InfoItemKind.ThreeD,
      title: 'Smart Keyword Generator',
      description: 'Automatic suggestions and the best keywords to target.',
      illustration: SmartGeneratorIllustration,
    },
  ], []);

  const infoItemsList2: InfoItem[][] = useMemo(() => [
    infoItems.slice(0, 2),
    infoItems.slice(2),
  ], [infoItems]);

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>
        Harness the power of AI, making search engine optimization intuitive and
        effective for all skill levels.
      </h2>

      {infoItemsList2.map((infoItems, index) => (
        <ul key={index} className={styles.list}>
          {infoItems.map(({ title, description, kind, illustration }) => (
            <li key={title} className={clsx(styles.itemWrapper, styles[kind])}>
              <div className={styles.itemInfo}>
                <h3 className={styles.itemInfoTitle}>{title}</h3>

                <p className={styles.itemInfoDescription}>{description}</p>
              </div>

              <Image
                className={styles.itemIllustration}
                src={illustration}
                alt={title}
                loading="lazy"
                aria-hidden={true}
              />
            </li>
          ))}
        </ul>
      ))}
    </section>
  );
};

export default Bento;
