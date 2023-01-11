// 顯示總頁數
import { Text } from '@chakra-ui/react';
import React from 'react';

const Total = ({ table }) => {
    const pageCount = table.getPageCount();
    const dataCount = table.getState().total;
    const pageSize = table.getState().pagination.pageSize;

    return (
        <Text fontSize={{ base: 'md' }}>
            共 {dataCount || 0} 筆資料, 共 {pageCount || 0} 頁
        </Text>
    );
};

export default Total;
