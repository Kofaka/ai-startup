// Styles
import styles from './HomePage.module.scss';

export default function Home() {
  return (
    <main className={styles.root}>
      <h1 className={styles.title}>Boost your rankings with AI.</h1>

      <p className={styles.description}>
        Elevate your site’s visibility effortlessly with AI, where smart
        technology meets user-friendly SEO tools.
      </p>

      <div className={styles.ctaWrapper}>
        <button className={styles.cta}>
          Start for free
        </button>
      </div>
    </main>
  );
}
