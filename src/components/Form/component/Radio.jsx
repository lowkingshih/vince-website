import React from 'react';
import { RadioGroup, Radio, Flex } from '@chakra-ui/react';

const RadioComponent = ({ options, ...props }) => {
    return (
        <RadioGroup {...props}>
            <Flex {...props}>
                {options?.map(({ id, name }) => (
                    <Radio key={id} value={id}>
                        {name}
                    </Radio>
                ))}
            </Flex>
        </RadioGroup>
    );
};

export default RadioComponent;
