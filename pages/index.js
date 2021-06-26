import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

const FlipClock = dynamic(
  () => {
    return import("x-react-flipclock");
  },
  { ssr: false }
);

const gifts = [
  {
    src: "/plane.png",
    title: "Passagens",
    description: "Não vamos viajar de carro!",
    classname: "plane",
    price: "R$2500",
    chunk: "01/02",
    href: "https://www.izzigaming.com.br",
  },
  {
    src: "/honey.png",
    title: "Lua de Mel",
    description: "Praias paradisíacas do México!",
    classname: "honey",
    price: "R$1000",
    chunk: "01/10",
    href: "https://www.izzigaming.com.br",
  },
  {
    src: "/spa.png",
    title: "Dia no Spa",
    description: "Dia de relaxamento para os noivos!",
    classname: "spa",
    price: "R$500",
    chunk: "01/01",
    href: "https://www.izzigaming.com.br",
  },
  {
    src: "/boat.png",
    title: "Passeio de Barco",
    description: "Vamos navegar marujos!",
    classname: "boat",
    price: "R$250",
    chunk: "01/04",
    href: "https://www.izzigaming.com.br",
  },
  {
    src: "/dolphin.png",
    title: "Nadando com os Golfinhos",
    description: "Conhecendo Flipper e seus amigos!",
    classname: "dolphin",
    price: "R$150",
    chunk: "01/02",
    href: "https://www.izzigaming.com.br",
  },
  {
    src: "/fridge.png",
    title: "Geladeira",
    description: "Para armazenar nossas refeições!",
    classname: "fridge",
    price: "R$350",
    chunk: "01/15",
    href: "https://www.izzigaming.com.br",
  },
  {
    src: "/tv.png",
    title: "Televisão",
    description: "Para sofrer com o galão!",
    classname: "tv",
    price: "R$450",
    chunk: "01/10",
    href: "https://www.izzigaming.com.br",
  },
  {
    src: "/turbo.png",
    title: "Kit Turbo AP",
    description: "Apzão três kili e meiiiiiii!",
    classname: "turbo",
    price: "R$200",
    chunk: "01/15",
    href: "https://www.izzigaming.com.br",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fred e Roberta</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Casamento Fred e Roberta" />
        <meta property="og:image" content={"/ref.png"} />
      </Head>

      <main className={styles.main}>
        <section className={styles.header}>
          <img src="/ref-font.png" alt="ref font" />
        </section>
        <section className={styles["photo-ref"]}>
          <img src="/ref.png" alt="ref" />
        </section>
        <section className={styles.countdown}>
          <h1 className={styles.title}>Sejam bem-vindos ao nosso site!</h1>
          <h2 className={styles.subtitle}>
            A pandemia nos tirou a oportunidade de dividir com cada um de vocês
            esse momento da maneira que gostaríamos: Com uma super festa. Por
            isso, fizemos esse site, para compartilhar esse passo tão importante
            em nossas vidas.
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
        <section className={styles["photo-ref-full"]}>
          <img src="/ref-full.png" alt="ref full" />
        </section>
        <section className={styles.gifts}>
          <h1 className={styles.title}>Lista de Casamento Virtual</h1>
          <h2 className={styles.subtitle}>
            Optamos por fazer apenas o casamento civil, nesse momento. Assim que
            pudermos, vamos nos reunir para celebrar essa nova etapa de nossas
            vidas. A contagem regressiva começa, o frio na barriga e toda a
            ansiedade do dia mais esperado de nossas vidas nos enche de alegria.
            Vamos juntos nesse grande sonho, o dia em que uniremos nossas almas
            e corpos para sempre, o dia do nosso casamento. Mas, se vocês também
            quiserem nos presentear, ficaremos muito agradecidos. Com amor,
            Roberta e Frederico.
          </h2>
          <div className={styles.container}>
            {gifts.map(
              ({ src, title, description, price, chunk, classname, href }) => (
                <div className={styles.card}>
                  <div className={styles["card-header"]}>
                    <img src={src} alt={title} />
                  </div>
                  <div className={styles["card-body"]}>
                    <h4 className={styles.title}>{title}</h4>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.price}>{price}</p>
                    <p className={styles.chunk}>Cota {chunk}</p>
                    <div className={styles["button-wrapper"]}>
                      <a
                        className={`${styles.button} ${styles[classname]}`}
                        href={href}
                        target="_blank"
                      >
                        Comprar
                      </a>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
