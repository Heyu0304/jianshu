import { createGlobalStyle } from 'styled-components';

export const IconFont = createGlobalStyle`
      @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1539932742204'); /* IE9*/
    src: url('./iconfont.eot?t=1539932742204#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1539932742204') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1539932742204#iconfont') format('svg'); /* iOS 4.1- */
  }
  
  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

