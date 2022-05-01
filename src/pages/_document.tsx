import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        <meta
          name="description"
          content="O lugar para você encontrar piada para todos os gostos"
        />
        <meta
          name="keywords"
          content="Risada, Só piada boa, Rir, Sorrir, Gargalhar, Piada, Várias piadas, Melhores piadas"
        />
      </Head>

      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
