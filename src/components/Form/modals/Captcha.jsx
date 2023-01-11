// 驗證碼 & validate 等
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Text } from '@chakra-ui/react';
import { useField, useFormikContext } from 'formik';
import CaptchaComponent from '../component/Captcha';
import { useRef } from 'react';

// 驗證碼驗證有問題
const Captcha = (props) => {
    const [field, meta, helper] = useField(props);
    const context = useFormikContext();
    const captchaRef = useRef(null);
    // console.log('Captcha props + field:', props, field);
    const setCaptchaRef = (value) => {
        captchaRef.current = value;
        // console.log('captchaRef:', captchaRef.current);
    };

    return (
        <>
            <FormControl isRequired>
                <FormLabel>驗證碼</FormLabel>
                <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap">
                    <Input
                        minWidth="30px"
                        width="45%"
                        placeholder="輸入驗證碼"
                        isInvalid={meta.error && true}
                        {...props}
                        {...field}
                        onChange={(event) => {
                            // 驗證驗證碼
                            if (+event.target.value !== captchaRef.current) {
                                console.log(+event.target.value, captchaRef.current);
                                helper.setError('驗證碼填寫錯誤');
                            } else {
                                helper.setError(null);
                            }
                        }}
                    />
                    <Button
                        onClick={(event) => {
                            context.setFieldError('account', '我後來設置的', true);
                        }}
                    >
                        set Error
                    </Button>
                    <CaptchaComponent captchaFn={setCaptchaRef} />

                    <Text textStyle="errorMessage">{meta.touched && meta.error}</Text>
                </Box>
            </FormControl>
        </>
    );
};

export default Captcha;
