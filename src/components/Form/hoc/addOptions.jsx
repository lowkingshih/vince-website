import React from 'react';
// 注入 options
// TODO: 這邊還要寫一個取得 api 的邏輯(要確認怎麼與寫死的 options 共存)
const mockOptions = {
    mock1: [
        {
            id: 'a',
            name: 'aName',
        },
        {
            id: 'b',
            name: 'bName',
        },
        {
            id: 'c',
            name: 'cName',
        },
    ],
    mock2: [
        {
            id: 'a2',
            name: 'aName2',
        },
        {
            id: 'b2',
            name: 'bName2',
        },
        {
            id: 'c2',
            name: 'cName2',
        },
    ],
};
const addOptions = (optionName) => (WrappedComponent) => {
    //
    const AddOptions = (props) => {
        return <WrappedComponent options={mockOptions[optionName] || null} {...props} />;
    };
    return AddOptions;
};

export default addOptions;
