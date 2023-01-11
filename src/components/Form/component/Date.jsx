import React, { useState, useEffect } from 'react';
import { Input as ChakraInput, InputGroup, InputLeftElement, Icon } from '@chakra-ui/react';

const DateComponent = (props) => {
    const [time, setTime] = useState('18:00:00');
    useEffect(() => {
        console.log('time:', time);
    }, [time]);

    return (
        <ChakraInput
            value="23:33"
            type="time"
            onChange={(event) => console.log('value:', event.target.value + ':00')}
        />
    );
};

export default DateComponent;
