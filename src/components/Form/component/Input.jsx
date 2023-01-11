import React from 'react';
import { Input as ChakraInput, InputGroup, InputLeftElement, Icon } from '@chakra-ui/react';
import { HiOutlineLocationMarker as Location } from 'react-icons/hi';
import { RiCalendarLine as Calendar } from 'react-icons/ri';

const IconCom = ({ icon }) => <Icon as={icon} color="#9B9B9B" boxSize="6" />;
const icons = {
    location: <IconCom icon={Location} />,
    calendar: <IconCom icon={Calendar} />,
};

const Input = ({ width, minWidth, maxWidth, iconName, ...props }) => {
    return (
        <InputGroup {...{ width, minWidth, maxWidth }}>
            {Object.hasOwn(icons, iconName) && <InputLeftElement children={icons[iconName]} />}
            <ChakraInput isInvalid={props?.meta?.error && true} borderWidth="2px" {...props} />
        </InputGroup>
    );
};

export default Input;
