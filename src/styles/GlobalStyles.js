import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        /** colors */
        --purple: #8D45E8;
        --purple-opacity: rgba(141, 69, 232, 0.1);
        --purple-hover: #7c3ad0;
        --yellow: #FED14B;
        --gree: #2EB672;
        --red: #E2574C;
        --white: #FFFFFF;
        --gray-1: #C4C4C4;
        --gray-2: #303030;
        --gray-3: #D0C9D6;
        
        /** typography */
        --heading-1: #303030;
        --body-1: #6D6D6D;

        /** other */
        --bg-1: #F8F8F8;
        --bg-2: #FFFFFF;
        --bg-3: #FAFAFC;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Poppins', sans-serif;
    }

    p, h1, h2, h3, h4 {
        margin: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    #root, html, body {
        height: 100%;
        overflow: none;
    }

    .sb-avatar__image {
        object-fit: cover !important;
    }
`;

export { GlobalStyles };
