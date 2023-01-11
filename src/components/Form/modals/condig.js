const config = {
    account: {
        template: 'Input',
        placeholder: '請輸入帳號密碼',
        isRequired: true,
        onChange: (event, context) => {
            console.log('account:', { event, context });
        },
        color: 'blue.300',
    },
    password: {
        template: 'Input',
        placeholder: '請輸入帳號密碼',
        type: 'password',
        isRequired: true,
        onChange: (event, context) => {
            console.log('password:', { event, context });
        },
    },
};

export default config;
