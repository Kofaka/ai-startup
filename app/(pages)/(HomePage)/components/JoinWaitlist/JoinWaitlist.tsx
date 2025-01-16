// Components
import {
  JoinWaitlistForm
} from '@/app/(pages)/(HomePage)/components/JoinWaitlist/components';
// Styles
import styles from './JoinWaitlist.module.scss';

export const JoinWaitlist = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>
        AI-driven SEO for everyone.
      </h2>

      <div className={styles.formWrapper}>
        <JoinWaitlistForm />
      </div>

      <p className={styles.notice}>
        No credit card required · 7-days free trial
      </p>
    </section>
  );
};

export default JoinWaitlist;
