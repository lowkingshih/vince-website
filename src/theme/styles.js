// 全域設定
const styles = {
    global: {
        body: {
            fontFamily: 'body',
            color: 'bird-body-text',
            bg: {
                base: 'gray.100',
                lg: 'bird-body-bg',
            },
            transitionProperty: 'background-color',
            transitionDuration: 'normal',
            lineHeight: 'base',
        },
        '*::placeholder': {
            color: 'bird-placeholder-color',
        },
        '*, *::before, &::after': {
            borderColor: 'bird-border-color',
            wordWrap: 'break-word',
        },
    },
};

export default styles;
