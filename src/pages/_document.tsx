import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

export default function Document() {
  return (
    <Html lang="en">
      <title>Tokopedia</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Tokopedia" />
      <meta name="keywords" content="tokopedia" />
      <meta name="author" content="tokopedia" />
      <meta name="robots" content="index, follow" />
      <link rel="icon" type="image/svg+xml" href="/wpalogo.png" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
