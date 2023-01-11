import { extendTheme } from '@chakra-ui/react';
import foundations from './foundations';
import components from './components';
import semanticTokens from './semanticTokens'; // 語意化
import styles from './styles'; // 全域屬性
import textStyles from './textStyles'; // 自訂文字 h1, h2, p

const customTheme = {
    ...foundations,
    components,
    semanticTokens,
    styles,
    textStyles,
};

const theme = extendTheme(customTheme);

export default theme;
