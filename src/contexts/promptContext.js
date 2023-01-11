import { createContext } from 'react';

// 控制 handle 觸發的 function
export const PromptContext = createContext({
    isOpen: false,
    onOpen: () => {},
    onClose: () => {},
});
