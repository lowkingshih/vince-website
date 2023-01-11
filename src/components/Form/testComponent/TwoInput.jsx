import React from 'react';
import { InputGroup, InputLeftElement, Icon, Button } from '@chakra-ui/react';
import { useState } from 'react';
import Select from '@/components/Form/component/Select';
import Input from '@/components/Form/component/Input';
import { compose } from '@/utils';
import { useContext } from 'react';

const options = [
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
];

const TestPair = ({ aProps, bProps, ...props }) => {
    return (
        <>
            <Input placeholder="基本 UI 設定" />
            <Select value />
        </>
    );
};

export default TestPair;
