// 與 formik 上下文作連動

import React from 'react';
import { useField, useFormikContext } from 'formik';
import { useContext } from 'react';
// import { isFunction } from '@/utils/is';

const ø = Object.create(null);

const withFormik = (fieldName) => (WrappedComponent) => {
    const WithFormik = ({ onChange, ...props }) => {
        const [field, meta] = useField(fieldName);
        const { setFieldValue } = useFormikContext();

        // formik 驗證失敗
        const isInvalid = meta?.error && true;

        return (
            <WrappedComponent
                setValue={setFieldValue.bind(ø, fieldName)}
                isInvalid={isInvalid}
                field={field}
                meta={meta}
                {...props}
            />
        );
    };

    return WithFormik;
};

export default withFormik;
