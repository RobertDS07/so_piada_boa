import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta name="description" content="{{description}}" />
      </Head>

      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
