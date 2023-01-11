// 驗證碼 & validate 等
import { Text, FormControl, FormErrorMessage, FormLabel, Input, Button } from '@chakra-ui/react';
import { useField, useFormikContext } from 'formik';
import { isFunction } from '@/utils/is';

const Account = (props) => {
    const context = useFormikContext();
    console.log('Account props:', props);
    const [field, meta] = useField(props);
    const [tField, tMeta] = useField('password');
    console.log('Account field, meta', { field, meta, tField, tMeta });
    console.log('Form Context:', context);

    return (
        <>
            <FormControl isRequired>
                <FormLabel>帳號</FormLabel>
                <Input
                    isInvalid={meta.error && true}
                    placeholder="輸入Email"
                    {...props}
                    {...field}
                    onChange={(e) => {
                        field.onChange(e.target.value);
                        console.log('context:', context);
                    }}
                />
                {/* {console.log('account meta:', meta)} */}
                <Text textStyle="errorMessage">{meta.touched && meta.error}</Text>
                <Button
                    onClick={() => {
                        context.setFieldValue('account', 'setFieldValue');
                    }}
                >
                    setAccount
                </Button>
            </FormControl>
        </>
    );
};

export default Account;
