// Components
import {
  Heroshot,
  Companies,
  Bento,
  Features,
  Clients,
  Pricing
} from '@/app/(pages)/(HomePage)/components';
// Styles
import styles from './HomePage.module.scss';

export default function Home() {
  return (
    <div className={styles.root}>
      <Heroshot />
      <Companies />
      <Bento />
      <Features />
      <Clients />
      <Pricing/>
    </div>
  );
}
