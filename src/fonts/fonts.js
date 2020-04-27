import { createGlobalStyle } from 'styled-components';

import CharterFont from './charter_regular-webfont.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'Charter';
        src: local('Charter'),
        url(${CharterFont}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
`;