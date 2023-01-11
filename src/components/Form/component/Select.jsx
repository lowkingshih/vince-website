import React from 'react';
import { InputGroup, InputLeftElement, Icon, Select as ChakraSelect } from '@chakra-ui/react';
import { Location, Calendar } from '@/assets/svg';

// icon
const IconCom = ({ icon }) => <Icon as={icon} color="#9B9B9B" boxSize="6" />;
const icons = {
    location: <IconCom icon={Location} />,
    calendar: <IconCom icon={Calendar} />,
};

const Select = ({ width, minWidth, maxWidth, iconName, value, setValue, ...props }) => {
    const hasIcon = Object.hasOwn(icons, iconName);

    return (
        // 借用 chakra input 的 element 加入 icon
        <InputGroup {...{ width, minWidth, maxWidth }}>
            {hasIcon && <InputLeftElement children={icons[iconName]} />}
            <ChakraSelect
                style={{ paddingLeft: hasIcon && '40px' }}
                value={value}
                onChange={setValue}
                borderWidth="2px"
                {...props}
            >
                {props?.options?.map(({ id, name }) => (
                    <option key={id} value={id}>
                        {name}
                    </option>
                ))}
            </ChakraSelect>
        </InputGroup>
    );
};

export default Select;
