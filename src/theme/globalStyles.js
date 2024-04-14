import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        font-size: 16px;
        line-height: 1.5;
        font-family: 'Noto Sans KR', 'Malgun Gothic', '맑은 고딕', sans-serif;
        color: #222;
    }

    /* desktop */
    @media screen and (min-width: 1280px) {
        body {
            font-size: 16px;
        }
    }

    hr {
        display: none;
    }

    input[type='password'] {
        font-family: 'Malgun Gothic';
    }

    a {
        text-decoration: none;
    }

    /* 웹폰트 사용시 점이 안보임 - 기본 폰트 사용  */
    /* skipnavigation */
    #u-skip {
        position: relative;
        z-index: 3000;

        a {
            position: absolute;
            top: -35px;
            left: 0;
            right: 0;
            display: inline-block;
            padding: 7px 10px 5px;
            background: #333;
            color: #fff;
            text-decoration: none;
            text-align: center;
            opacity: 0;

            &:focus {
                top: 0;
                opacity: 1;
                z-index: 1000;
            }
        }
    }
    .blind, caption, legend {
        overflow: hidden;
        position: absolute;
        width: 0;
        height: 0;
        line-height: 0;
        text-indent: -9999px;
    }
`

export default GlobalStyle
