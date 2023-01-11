import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
    // define the part you're going to style
    overlay: {
        bg: 'blackAlpha.700', //change the background
    },
    dialog: {
        rounded: '10px',
    },
    header: {
        bgColor: 'blue.900',
        fontSize: 'xl',
        color: 'white',
        borderTopRadius: '10px',
    },
    closeButton: {
        color: 'white',
    },
});

export default defineMultiStyleConfig({
    baseStyle,
});
