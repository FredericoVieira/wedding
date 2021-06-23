import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

const FlipClock = dynamic(
  () => {
    return import("x-react-flipclock");
  },
  { ssr: false }
);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fred e Roberta</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Casamento Fred e Roberta" />
        <meta property="og:image" content="/fer.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
      </Head>

      <main className={styles.main}>
        <section className={styles.header}>
          <img src="/fer-font.png" alt="fer font" />
        </section>
        <section className={styles["photo-fer"]}>
          <img src="/fer.png" alt="fer" />
        </section>
        <section className={styles.countdown}>
          <h1 className={styles.title}>Sejam bem-vindos ao nosso site!</h1>
          <h2 className={styles.subtitle}>
            A melhor forma de compartilhar esse momento com vocês é vivendo
            juntos esse sonho!
          </h2>
          <hr className={styles.divider} />
          <p className={styles["countdown-text"]}>
            Contagem regressiva para o grande dia:
          </p>
          <div className={styles["countdown-clock"]}>
            <FlipClock
              type="countdown"
              count_to="2021-09-08 00:00:00"
              units={[
                {
                  sep: "",
                  type: "days",
                  title: "dias",
                },
                {
                  sep: "",
                  type: "hours",
                  title: "horas",
                },
                {
                  sep: "",
                  type: "minutes",
                  title: "minutos",
                },
                {
                  sep: "",
                  type: "seconds",
                  title: "segundos",
                },
              ]}
            />
          </div>
        </section>
        <section className={styles["photo-fer-full"]}>
          <img src="/fer-full.png" alt="fer full" />
        </section>
        <section className={styles.gifts}>
          <h1>Vai nos ajudar com o que?</h1>
        </section>
      </main>
    </div>
  );
}
