import { Box, Center, Flex } from '@chakra-ui/react';
import React from 'react';

import PageSizeDrop from './PageSizeDrop';
import PaginationComponent from './Pagination';
import Total from './Total';

const Pagination = ({ table }) => {
    console.log('Pagination:', { table });
    return (
        <Flex p="5" justifyContent="space-between">
            <Center>
                <Total table={table} />
            </Center>
            <Box>
                <PaginationComponent table={table} />
            </Box>
            <Center>
                <PageSizeDrop table={table} />
            </Center>
        </Flex>
    );
};

export default Pagination;
