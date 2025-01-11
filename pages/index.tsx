import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Bilal Shahid | Frontend Developer</title>
        <link rel="shortcut icon" href="/favicon_io/favicon.ico" />
        <meta name="description" content="Bilal Shahid | Frontend Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Bilal Shahid | Frontend Developer" />
        <meta
          name="description"
          content="Hey! I'm Bilal Shahid, and I'm a Bachelor of Science in Software Engineering graduate."
        />

        <meta property="og:title" content="Bilal Shahid | Frontend Developer" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://.com/" />
        <meta property="og:image" content="https://.com/screenshot.png" />
        <meta
          property="og:description"
          content="Hey! I'm Bilal Shahid, and I'm a Bachelor of Science in Software Engineering graduate."
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@bilalshahid929" />
        <meta
          name="twitter:title"
          content="Bilal Shahid | Frontend Developer"
        />
        <meta
          name="twitter:description"
          content="Hey! I'm Bilal Shahid, and I'm a Bachelor of Science in Software Engineering graduate."
        />
        <meta name="twitter:creator" content="@bilalshahid929" />
        <meta name="twitter:image" content="https://.com/screenshot.png" />

        {/* <meta itemprop="name" content="Bilal Shahid | Frontend Developer"/>
        <meta itemprop="description" content="Hey! I'm Bilal Shahid, and I'm a Bachelor of Science in Software Engineering graduate."/>
        <meta itemprop="image" content="https://.com/screenshot.png"/> */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </Head>
      <Home />
    </>
  );
}
