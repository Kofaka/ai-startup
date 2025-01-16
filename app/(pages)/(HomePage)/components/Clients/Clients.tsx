import Image from 'next/image';
// Images
import AvatarImage
  from '@/app/(pages)/(HomePage)/components/Clients/images/avatar.png';
// Styles
import styles from './Clients.module.scss';

export const Clients = () => {
  return (
    <section className={styles.root}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Our clients
        </h2>

        <p className={styles.description}>
          Hear firsthand how our solutions have boosted online success for users
          like you.
        </p>
      </div>

      <div className={styles.feedbackWrapper}>
        <div className={styles.feedbackAvatarHorizontalWrapper}>
          <div className={styles.feedbackAvatarVerticalWrapper}>
            <Image
              className={styles.feedbackAvatar}
              src={AvatarImage}
              alt="Avatar"
              loading="lazy"
            />
          </div>
        </div>

        <div className={styles.feedbackContent}>
          <p className={styles.feedbackText}>
            ”This product has completely transformed how I manage my projects
            and deadlines”
          </p>

          <div>
            <p className={styles.feedbackAuthorName}>
              Talia Taylor
            </p>
            <p className={styles.feedbackAuthorPosition}>
              Digital Marketing Director @ Quantum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
