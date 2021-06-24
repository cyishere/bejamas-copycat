import Head from "next/head";

const SEO = () => {
  return (
    <Head>
      <title>Copycat of Bejamas</title>
      <meta
        name="description"
        content="A copycat of bejamas.io for demonstrating frontend dev."
      />
      <link rel="icon" href="/favicon.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Benne&family=Poppins:wght@300;500&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default SEO;
