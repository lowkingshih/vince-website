// 加入 default props
import React from 'react';

const addProps = (defaultProps) => (WrappedComponent) => {
    const AddProps = (props) => {
        return <WrappedComponent {...defaultProps} {...props} />;
    };
    return AddProps;
};

export default addProps;
