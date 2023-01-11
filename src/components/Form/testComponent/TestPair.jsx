import React from 'react';
import { Input, InputGroup, InputLeftElement, Icon, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { isFunction } from '@/utils/is';

const TestPair = ({ value, onChange, setValue, ...props }) => {
    const handleClick = () => {
        isFunction(setValue) && setValue('後來加上的');
    };
    return (
        <>
            <Input
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                }}
                {...props}
            />
            <Button onClick={handleClick} />
        </>
    );
};

export default TestPair;
