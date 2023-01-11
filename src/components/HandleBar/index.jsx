import { Flex, Button } from '@chakra-ui/react';
import React from 'react';
import { isArray } from '@/utils/is';

const Handlebar = ({ buttons, spacing, name, ...props }) => {
    if (!isArray(buttons)) return null;

    const DEFAULT_SPACING = '2';
    return (
        <Flex w="full" {...props}>
            {buttons.map(({ action, children, ...buttonProps }, buttonIndex) => (
                <Button
                    key={action}
                    ml={buttonIndex ? spacing || DEFAULT_SPACING : null}
                    // 有給 groupName，handlebar 就改接 groupName_action
                    action={name ? `${name}_${action}` : action}
                    {...buttonProps}
                >
                    {children}
                </Button>
            ))}
        </Flex>
    );
};

export default Handlebar;
