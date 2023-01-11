import { Box, Button, Divider, HStack, Input } from '@chakra-ui/react';
import { Formik, Form as FormikForm, useFormikContext, FieldArray, useField } from 'formik';
import { lazy, Suspense, useEffect, useState } from 'react';
import * as yup from 'yup';
import { compose } from '@/utils';

// component
import TestPair from './TestPair';
import TwoInput from './TwoInput';

// hoc
import wrap from '@/components/Form/hoc/wrap';
import withFormik from '@/components/Form/hoc/withFormik';

// 渲染
const config = [
    {
        fieldName: 'testPair',
        label: '測試 Label',
        isRequired: true,
        component: TestPair,
    },
    {
        fieldName: 'TwoInput',
        label: '測試 Label2',
        isRequired: true,
        component: TwoInput,
    },
];

// formControl

const Form = ({ submit, id, buttons, ...props }) => {
    return (
        <Formik
            initialValues={{ testPair: 'testPair' }}
            // validationSchema={validationSchema || null}
            onSubmit={(values) => {
                console.warn('onSubmit', values);
                submit(values);
            }}
            mx="5"
        >
            <FormikForm
                id={id || null}
                onChange={(event) => {
                    console.log('formik change:', event);
                }}
            >
                {/* TODO: 還沒思考到 RWD 變版的問題 */}
                <Box>
                    {config.map(({ component, fieldName, ...props }) => {
                        const Component = compose(withFormik(fieldName), wrap(props))(component);
                        return <Component />;
                    })}

                    <Button type="submit">送出</Button>
                </Box>
            </FormikForm>
        </Formik>
    );
};

export default Form;
