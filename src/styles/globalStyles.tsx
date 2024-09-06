/** GlobalStyles.tsx */
import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        /* Prevenir o zoom de duplo toque em dispositivos móveis */
        touch-action: manipulation;
      }

      html {
        font-size: 100%;
        overflow-x: hidden; /* Evita overflow horizontal na raiz */
      }

      html,
      body,
      #__next {
        height: 100%;
      }

      body {
        /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
      }
    `}
  />
);

export default GlobalStyles;
