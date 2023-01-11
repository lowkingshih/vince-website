import { createContext } from 'react';

// pagination 給子層判斷 pagination 渲染與否
// table: table instance (react-table)
export const TableContext = createContext({
    pagination: false,
    table: null,
    headerCellProps: () => {},
    rowProps: () => {},
    cellProps: () => {},
});
