// 頁數下拉選單
import React from 'react';
import { Select } from '@chakra-ui/react';
import { useEffect } from 'react';

const PageSizeDrop = ({ table }) => {
    const pageSizeOptions = [50, 100];
    const pageSize = table.getState().pagination.pageSize;

    useEffect(() => {
        if (!pageSizeOptions.includes(pageSize)) {
            table.setPageSize(pageSizeOptions[0]);
        }
    }, []);

    return (
        <Select
            width="150px"
            color="gray.500"
            size={{ base: 'md', lg: 'md ' }}
            borderColor="blue.500"
            borderWidth="2"
            value={pageSize}
            onChange={(event) => {
                table.setPageSize(Number(event.target.value));
            }}
        >
            {pageSizeOptions.map((value) => {
                return (
                    <option key={value} value={value}>
                        顯示{value}筆
                    </option>
                );
            })}
        </Select>
    );
};

export default PageSizeDrop;
