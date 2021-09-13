import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from 'axios';

export default function Home() {
  const handleFetchClick = async () => {
    const result = await fetch("api/test", {
      method: "PUT",
    });
    console.log(result);
  };

  const handleAxiosClick = async () => {
    const result = await axios("api/test", {
      method: "PUT",
    });
    console.log(result);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <button onClick={handleFetchClick}>TEST FETCH</button>

        <button onClick={handleAxiosClick}>TEST AXIOS</button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
