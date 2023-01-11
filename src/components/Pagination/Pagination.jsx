// pagination
import { Box, HStack, Icon, NumberInput, NumberInputField, Flex } from '@chakra-ui/react';
import React from 'react';
import { useState, useEffect } from 'react';
import { BiChevronsRight, BiChevronRight, BiChevronLeft, BiChevronsLeft } from 'react-icons/bi';
import { debounce } from '@/utils';

// TODO: 換算 offset, limit -> 看要不要做在 api 那端

const iconSize = { base: '5', lg: '7' };
const iconColor = 'blue.500';

const Pagination = ({ table, ...props }) => {
    console.log('還是有吧！', table);
    if (!table) return <></>;
    console.log('table:', table);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = table.getState().pagination.pageSize;
    const pageIndex = table.getState().pagination.pageIndex;
    const pageCount = table.getPageCount();

    // 各種狀態
    const isMinPage = currentPage === 1;
    const isMaxPage = currentPage === pageCount;

    useEffect(() => {
        if (currentPage < 1) setCurrentPage(1);
        else if (currentPage > pageCount) setCurrentPage(pageCount);
        else {
            debounce(() => {
                table.setPageIndex(currentPage - 1);
            }, 200);
        }
    }, [currentPage]);

    // pageSize 改變會影響 pageIndex
    useEffect(() => {
        setCurrentPage(pageIndex + 1);
        console.warn('useEffect', { pageIndex, pageSize });
    }, [pageSize]);

    return (
        <HStack {...props}>
            <Icon
                cursor={isMinPage ? 'not-allowed' : 'pointer'}
                m="0"
                boxSize={iconSize}
                color={iconColor}
                as={BiChevronsLeft}
                onClick={() => {
                    // table.setPageIndex(0);
                    setCurrentPage(1);
                }}
                _disabled={!table.getCanPreviousPage()}
                style={{ margin: 0 }}
            />
            <Icon
                cursor={isMinPage ? 'not-allowed' : 'pointer'}
                m="0"
                boxSize={iconSize}
                color={iconColor}
                as={BiChevronLeft}
                onClick={() => {
                    if (currentPage === 1) return;
                    setCurrentPage((prevVal) => prevVal - 1);
                }}
                style={{ margin: 0 }}
            />
            <Flex alignItems="center">
                <Box width="70px">
                    <NumberInput
                        onChange={(value) => {
                            setCurrentPage(value);
                        }}
                        value={currentPage}
                        min={1}
                        max={pageCount || 1}
                        px="0"
                        mr="2"
                    >
                        <NumberInputField
                            bgColor="white"
                            overflow="hidden"
                            textAlign="center"
                            px="2"
                            pr="2"
                            height="35px"
                        />
                    </NumberInput>
                </Box>

                <Box>/ {pageCount}</Box>
            </Flex>
            <Icon
                ml="0"
                cursor={isMaxPage ? 'not-allowed' : 'pointer'}
                boxSize={iconSize}
                color={iconColor}
                as={BiChevronRight}
                onClick={() => {
                    // table.nextPage();
                    // updateCurrentPage();
                    if (isMaxPage) return;
                    if (table.getCanNextPage()) {
                        setCurrentPage((prevVal) => prevVal + 1);
                    }
                }}
                _disabled={!table.getCanNextPage()}
                style={{ margin: 0 }}
            />
            <Icon
                cursor={isMaxPage ? 'not-allowed' : 'pointer'}
                ml="0"
                boxSize={iconSize}
                color={iconColor}
                as={BiChevronsRight}
                onClick={() => {
                    if (isMaxPage) return;
                    setCurrentPage(pageCount);
                }}
                _disabled={!table.getCanNextPage()}
                style={{ margin: 0 }}
            />
        </HStack>
    );
};

export default Pagination;
