import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        /** colors */
        --purple: #8D45E8;
        --purple-opacity: rgba(141, 69, 232, 0.1);
        --navy-opacity: rgba(0, 0, 50, 0.1);
        --purple-hover: #7c3ad0;
        --yellow: #FED14B;
        --green: #2EB672;
        --blue: #0000FF;
        --navy: #000080;
        --red: #E2574C;
        --white: #FFFFFF;
        --gray-1: #C4C4C4;
        --gray-2: #303030;
        --gray-3: #D0C9D6;

        --green-forest: #015249;
        --green-shrub: #0E8044;
        --green-marine: #B4DBC0;
        --green-feather: #77C9D4;
        
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
        font-family: 'Rubik', sans-serif;
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
