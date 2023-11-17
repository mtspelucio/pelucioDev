import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Roboto', sans-serif;
    }

    :root{
        --primary: #0088ff;
        --gray: #828282;
        --gray-200: #2d2d2d;
        --white: #fff;
        --black: #000;

    }
`;

export default GlobalStyles;