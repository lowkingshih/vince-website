import { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import { HandleContext } from '@/contexts/handleContext';
import { isFunction } from '@/utils/is';

// button 點擊後觸發 handle
const ButtonComponent = ({ action, children, onClick, ...props }) => {
    const { handle } = useContext(HandleContext);

    return (
        <Button
            onClick={(event) => {
                isFunction(onClick) && onClick(event);
                action && handle({ action });
            }}
            {...props}
        >
            {children}
        </Button>
    );
};

export default ButtonComponent;
