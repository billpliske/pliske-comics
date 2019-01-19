import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "raleway";
    font-style: normal;
    font-weight: 100;
    src: url(/fonts/raleway-thin-webfont.woff2) format("woff2");
}

@font-face {
    font-family: "raleway";
    font-style: italic;
    font-weight: 100;
    src: url(/fonts/raleway-thinitalic-webfont.woff2) format("woff2");
}

@font-face {
    font-family: "raleway";
    font-style: normal;
    font-weight: 200;
    src: url(/fonts/raleway-extralight-webfont.woff2) format("woff2");
}

@font-face {
    font-family: "raleway";
    font-style: italic;
    font-weight: 200;
    src: url(/fonts/raleway-extralightitalic-webfont.woff2) format("woff2");
}

@font-face {
    font-family: "raleway";
    font-style: normal;
    font-weight: 300;
    src: url(/fonts/raleway-light-webfont.woff2) format("woff2");
}

@font-face {
    font-family: "raleway";
    font-style: italic;
    font-weight: 300;
    src: url(/fonts/raleway-lightitalic-webfont.woff2) format("woff2");
}

@font-face {
    font-family: "raleway";
    font-style: normal;
    font-weight: 500;
    src: url(/fonts/raleway-regular-webfont.woff2) format("woff2");
}

@font-face {
    font-family: "raleway";
    font-style: italic;
    font-weight: 500;
    src: url(/fonts/raleway-italic-webfont.woff2) format("woff2");
}

@font-face {
    font-family: "raleway";
    font-style: normal;
    font-weight: 600;
    src: url(/fonts/raleway-bold-webfont.woff2) format("woff2");
}

@font-face {
    font-family: "raleway";
    font-style: italic;
    font-weight: 600;
    src: url(/fonts/raleway-bolditalic-webfont.woff2) format("woff2");
}

@font-face {
    font-family: "raleway";
    font-style: normal;
    font-weight: 700;
    src: url(/fonts/raleway-extrabold-webfont.woff2) format("woff2");
}

@font-face {
    font-family: "raleway";
    font-style: italic;
    font-weight: 700;
    src: url(/fonts/raleway-extrabolditalic-webfont.woff2) format("woff2");
}

@font-face {
    font-family: "raleway";
    font-style: normal;
    font-weight: 800;
    src: url(/fonts/raleway-black-webfont.woff2) format("woff2");
}

@font-face {
    font-family: "raleway";
    font-style: italic;
    font-weight: 800;
    src: url(/fonts/raleway-blackitalic-webfont.woff2) format("woff2");
}



html, body {
    height: 100%;
}

body > #root {
    height: 100%;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a:-webkit-any-link {
    text-decoration: none;
    color: var(--text-link);
}

.fade-enter {
  opacity: 0;
  z-index: 1;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 250ms ease-in;
}

:root {
    /**** MAIN ****/
    --very-dark-blue: #201E2E;
    --cornflower: #6D76FF;

    /**** COLORS ****/
    --light-purple: #AB73F4;
    --greenish-teal: #35C5A4;

    --dark-blue-base: 38, 49, 95; /* #26315F */
    --purple-base: 74, 40, 108; /* #4a286c */
    --dark-green-blue-base: 24, 91, 72; /* #185B48 */

    --dark-blue: rgb(var(--dark-blue-base));
    --purple: rgb(var(--purple-base));
    --dark-green-blue: rgb(var(--dark-green-blue-base));

    --dark-blue-overlay: rgba(var(--dark-blue-base), .75);
    --purple-overlay: rgba(var(--purple-base), .75);
    --dark-green-blue-overlay: rgba(var(--dark-green-blue-base), .75);

    /**** NEUTRALS ****/
    --white: #FFFFFF;
    --white-90: rgba(255, 255, 255, .9);
    --white-10: rgba(255, 255, 255, .1);
    --white-stripe: rgba(255, 255, 255, .015);
    --lightest-gray: #EEEEEE;
    --light-gray: #DEDEDE;
    --med-gray: #AAAAAA;
    --med-dark-gray: #777777;
    --dark-gray: #444444;
    --very-dark-gray: #222222;

    /**** USAGE ****/
    --main-bg: var(--very-dark-blue);
    --bg-stripe: var(--white-stripe);

    --text: var(--very-dark-gray);
    --text-heading: var(--very-dark-blue);
    --text-secondary: var(--dark-gray);
    --text-link: var(--cornflower);
    --text-label: var(--cornflower);
    --text-light: var(--white);

    --icon-light: var(--white);
    --icon-dark: var(--dark-gray);
    --icon-car: var(--very-dark-blue);
    --icon-color: var(--cornflower);

    --card-bg: var(--white-90);
    --card-border: var(--white);

    --carousel-text: var(--white);

    --carousel-article-bg: var(--dark-blue);
    --carousel-article-border: var(--cornflower);
    --carousel-article-overlay: var(--dark-blue-overlay);
    --carousel-article-icon: var(--dark-blue);

    --carousel-video-bg: var(--purple);
    --carousel-video-border: var(--light-purple);
    --carousel-video-overlay: var(--purple-overlay);
    --carousel-video-icon: var(--purple);

    --carousel-gallery-bg: var(--dark-green-blue);
    --carousel-gallery-border: var(--greenish-teal);
    --carousel-gallery-overlay: var(--dark-green-blue-overlay);
    --carousel-gallery-icon: var(--dark-green-blue);

    --button-bg: var(--cornflower);
    --button-text: var(--white);

    --menu-button-bg: var(--very-dark-blue);
    --menu-button-border: var(--cornflower);
    --menu-button-text: var(--white);
    --menu-button-icon: var(--white);

    --menu-button-active-bg: var(--white);
    --menu-button-active-border: var(--white);
    --menu-button-active-text: var(--dark-gray);
    --menu-button-active-icon: var(--cornflower);

    --rule: var(--med-gray);
    --rule-strikethrough: var(--white-10);

    --author-swipe-bg: var(--light-gray);
    --author-social-card-bg: var(--lightest-gray);
`;
