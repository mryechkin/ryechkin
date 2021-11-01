/* eslint-disable react/no-danger */
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { getCssText } from 'wtf-design-system';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
