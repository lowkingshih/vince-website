import { Box, Button, Divider, HStack, Input } from '@chakra-ui/react';
import { Formik, Form as FormikForm, useFormikContext, FieldArray } from 'formik';
import { lazy, Suspense, useEffect } from 'react';
import validationSchemas from './validationSchemas';
import * as yup from 'yup';

const Modals = ({ modal, name, ...props }) => {
    // console.log({ modal, props });
    const ModalComponent = lazy(() => import(`./modals/${modal}`));
    console.log('Modals props:', props);
    return (
        <Suspense fallback={<></>}>
            <ModalComponent {...props} name={name} />
        </Suspense>
    );
};
// 有 input 旁設置 button 的需求咋辦，這個之後再想想

const ObserverForm = () => {
    const obj = useFormikContext();
    useEffect(() => {
        console.log('ObserverForm:', obj);
    }, []);
    return null;
};

const Form = ({ config, submit, id, buttons, ...props }) => {
    // config 為 JSON 設定檔
    // TODO: 1.validationSchema 2. initialValue
    const initialValue = config.reduce((cur, { initvalue, name }) => {
        if (initvalue) cur[name] = initvalue;
        return cur;
    }, {});
    const validationObject = config.reduce((cur, { modal, name }) => {
        if (Object.hasOwn(validationSchemas, modal)) {
            cur[name] = validationSchemas[modal];
        }
        return cur;
    }, {});

    const validationSchema = yup.object(validationObject);

    return (
        <Formik
            initialValues={initialValue || null}
            validationSchema={validationSchema || null}
            onSubmit={(values) => {
                console.warn('onSubmit', values);
                submit(values);
            }}
            mx="5"
        >
            <FormikForm
                id={id || null}
                onChange={(event) => {
                    // console.log('fomik:', event);
                    // console.log('input 相關的:', event.target.name, event.target.value);
                }}
            >
                {/* TODO: 還沒思考到 RWD 變版的問題 */}
                <Box mb="10">
                    {config.map(({ initvalue, ...props }) => {
                        console.log('map json:', { props });
                        return props.modal ? <Modals key={props.name} {...props} /> : <MultipleArray {...props} />;
                    })}

                    <ObserverForm />
                </Box>

                <HStack justifyContent="space-around">
                    {/* TODO: 不可能寫死在這，要拆 */}
                    <Button>忘記密碼</Button>
                    <Button type="submit">登入</Button>
                </HStack>
            </FormikForm>
        </Formik>
    );
};

export default Form;
