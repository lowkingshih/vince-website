import { createContext } from 'react';

// 控制 handle 觸發的 function
export const HandleContext = createContext({
    handle: ({ action, ...props }) => {
        console.log('handleContext root action:', action, props);
    },
});
