import { useMemo } from 'react';
import Image, { StaticImageData } from 'next/image';
// Images
import AcmeLogo from '@/app/(pages)/(HomePage)/components/Companies/images/acme-logo.png';
import EchoValleyLogo from '@/app/(pages)/(HomePage)/components/Companies/images/echo-valley-logo.png';
import QuantumLogo from '@/app/(pages)/(HomePage)/components/Companies/images/quantum-logo.png';
import PulseLogo from '@/app/(pages)/(HomePage)/components/Companies/images/pulse-logo.png';
import OutsideLogo from '@/app/(pages)/(HomePage)/components/Companies/images/outside-logo.png';
import ApexLogo from '@/app/(pages)/(HomePage)/components/Companies/images/apex-logo.png';
import CelestalLogo from '@/app/(pages)/(HomePage)/components/Companies/images/celestal-logo.png';
import TwoTwiceLogo from '@/app/(pages)/(HomePage)/components/Companies/images/2twice-logo.png';
// Styles
import styles from './Companies.module.scss';

type Company = {
  label: string;
  image: StaticImageData;
}

export const Companies = () => {
  const companies: Company[] = useMemo(() => [
    { label: 'Acme', image: AcmeLogo },
    { label: 'Echo Valey', image: EchoValleyLogo },
    { label: 'Quantum', image: QuantumLogo },
    { label: 'Pulse', image: PulseLogo },
    { label: 'Outside', image: OutsideLogo },
    { label: 'Apex', image: ApexLogo },
    { label: 'Celestal', image: CelestalLogo },
    { label: '2Twice', image: TwoTwiceLogo },
  ], []);

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>
        Trusted by the world’s most innovative teams
      </h2>

      <ul className={styles.list}>
        {companies.map(({ label, image }) => (
          <li key={label} className={styles.listItemWrapper}>
            <Image
              className={styles.listItem}
              src={image}
              alt={label}
              width={155}
              height={34}
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Companies;
