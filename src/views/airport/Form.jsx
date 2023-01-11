import { FormControl, FormLabel, Box, Button, Divider, HStack, Flex, Input, Text } from '@chakra-ui/react';
import { Formik, Form as FormikForm, useFormikContext, FieldArray, useField } from 'formik';
import { lazy, Suspense, useEffect } from 'react';
import * as yup from 'yup';

// hoc
import { compose } from '@/utils';
import wrap from '@/components/Form/hoc/wrap';
import addProps from '@/components/Form/hoc/addProps';

// template
// import Input from '@/components/Form/component/Input';

const KeyWord = (props) => {
    const context = useFormikContext();
    console.log('KeyWord props:', props);
    const [field, meta] = useField(props);
    const [tField, tMeta] = useField('password');
    console.log('KeyWord Context:', context);

    return (
        <>
            <FormControl isRequired>
                <FormLabel>關鍵字</FormLabel>
                <Input isInvalid={meta.error && true} placeholder="請填寫" {...props} {...field} />
                {/* {console.log('account meta:', meta)} */}
                <Text textStyle="errorMessage">{meta.touched && meta.error}</Text>
            </FormControl>
        </>
    );
};
const Form = ({ config, submit, id, buttons, ...props }) => {
    // config 為 JSON 設定檔
    // TODO: 1.validationSchema 2. initialValue

    return (
        <Formik
            initialValues={{ keyWord: '' }}
            validationSchema={null}
            onSubmit={(values) => {
                console.warn('onSubmit', values);
                submit(values);
            }}
            mx="5"
        >
            <FormikForm style={{ width: '100%' }} id={id || 'test'} onChange={(event) => {}}>
                {/* TODO: 還沒思考到 RWD 變版的問題 */}
                <Flex mb="10" py="24px" px="16px" rounded="2xl" bgColor="white">
                    <KeyWord name="keyWord" />
                </Flex>
            </FormikForm>
        </Formik>
    );
};

export default Form;
