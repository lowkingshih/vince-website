// 測試用
import React from 'react';

const addPlaceholder = (placeholder) => (WrappedComponent) => {
    const AddPlaceholder = (props) => {
        return <WrappedComponent placeholder={placeholder} {...props} />;
    };
    return AddPlaceholder;
};

export default addPlaceholder;
