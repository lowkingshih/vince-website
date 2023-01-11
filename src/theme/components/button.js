// btn active
const _disabled = {
    opacity: 0.4,
    cursor: 'not-allowed',
    boxShadow: 'none',
};
// btn hover
// hover 與 disable 會互衝，目前先想到一個醜解
const _hover = {
    boxShadow: 'btn-hover',
};
const button = {
    baseStyle: {
        display: 'flex',
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: '1.5',
        rounded: 'lg',
        fontSize: '14px',
        fontFamily: 'body',
    },
    sizes: {
        sm: {
            px: '10px',
            py: '0px',
        },
        md: {
            px: '24px',
            py: '8px',
        },
        lg: {
            px: '48px',
            py: '8px',
        },
    },
    variants: {
        // 藍
        primary: {
            bgColor: 'blue.500',
            _active: {
                bgColor: 'blue.600',
            },
            _hover: {
                ..._hover,
                _disabled: {
                    ..._disabled,
                    bgColor: 'blue.500',
                },
            },
            _disabled: {
                ..._disabled,
                _hover: _disabled,
            },
        },
        // 灰
        secondary: {
            bgColor: 'gray.500',
            _active: {
                bgColor: 'gray.600',
            },
            _hover: {
                ..._hover,
                _disabled: {
                    ..._disabled,
                    bgColor: 'gray.500',
                },
            },
        },
        // 紅
        danger: {
            bgColor: 'red.500',
            _active: {
                bgColor: 'red.600',
            },
            _hover: {
                ..._hover,
                _disabled: {
                    ..._disabled,
                    bgColor: 'red.500',
                },
            },
        },
        //
        info: {
            bgColor: 'orange.500',
            _active: {
                bgColor: 'orange.600',
            },
            _hover: {
                ..._hover,
                _disabled: {
                    ..._disabled,
                    bgColor: 'orange.500',
                },
            },
        },
        'primary-outline': {
            color: 'blue.500',
            borderColor: 'blue.500',
            borderWidth: '1px',
            bgColor: 'white',
            _active: {
                bgColor: 'gray.300',
            },
            _hover: {
                ..._hover,
            },
        },
    },
    // 6. We can overwrite defaultProps
    defaultProps: {
        size: 'md', // default is md
        variant: 'primary', // default is solid
    },
};

export default button;
