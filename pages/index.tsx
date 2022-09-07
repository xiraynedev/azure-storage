import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Streaming</title>
      </Head>
      <div className={styles.container}>
        <h1 className={`${styles.fontLight} ${styles.fontLarge}`}>
          Next Streaming
        </h1>
      </div>
    </div>
  );
}
