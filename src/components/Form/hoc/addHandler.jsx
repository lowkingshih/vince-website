// 加入 default props
import React from 'react';
import { isFunction } from '@/utils/is';
// 使之後加入的 handler 取得 field
const addHandler = (WrappedComponent) => {
    const AddHandler = (props) => {
        const { formContext, field } = props;
        const onChange = (event) => {};

        return <WrappedComponent {...props} />;
    };
    return AddHandler;
};

export default addHandler;
