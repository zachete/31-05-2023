import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        margin: 0;
        height: 100%;
        font-size: 16px;
        line-height: 1.4;
        font-family: Arial;
        background: #000;
    }
`;
