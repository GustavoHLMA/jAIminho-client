import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '../src/createEmotionCache';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => (
            <CacheProvider value={cache}>
              <App {...props} />
            </CacheProvider>
          )
        });

      const initialProps = await Document.getInitialProps(ctx);

      // Esta parte é onde extraímos os estilos críticos para injetá-los no HTML
      const emotionStyles = extractCriticalToChunks(initialProps.html);
      const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
          data-emotion={`${style.key} ${style.ids.join(' ')}`}
          key={style.key}
          dangerouslySetInnerHTML={{ __html: style.css }}
        />
      ));

      return {
        ...initialProps,
        styles: [
          ...React.Children.toArray(initialProps.styles),
          ...emotionStyleTags
        ]
      };
    } finally {
      // Nada a ser finalizado aqui com @emotion
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>{/* Coloque suas meta tags e links globais aqui */}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
