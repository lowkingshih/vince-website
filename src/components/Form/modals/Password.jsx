// 驗證碼 & validate 等
import { FormControl, FormErrorMessage, FormLabel, Input, Text } from '@chakra-ui/react';
import { useField } from 'formik';

const Password = (props) => {
    const [field, meta, helper] = useField(props);
    // console.log('Password:', { field, meta, helper, props });

    return (
        <>
            <FormControl isRequired>
                <FormLabel>密碼</FormLabel>
                <Input isInvalid={meta.error && true} {...props} placeholder="輸入密碼" {...field} />
                <Text textStyle="errorMessage">{meta.touched && meta.error}</Text>
            </FormControl>
        </>
    );
};

export default Password;
