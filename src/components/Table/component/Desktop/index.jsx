import { useContext, cloneElement, useEffect } from 'react';
import { flexRender } from '@tanstack/react-table';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
// pagination
import Pagination from '@/components/Pagination';

// context
import { TableContext } from '@/contexts/tableContext';

const DesktopTable = () => {
    const { pagination, table, headerCellProps, rowProps, cellProps } = useContext(TableContext);
    console.log('DesktopTable:', { pagination, table });

    return (
        <TableContainer width="full">
            <Table>
                <Thead bgColor="blue.900">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <Tr key={headerGroup.id}>
                            {headerGroup.headers.map((header, headerIndex, array) => {
                                console.log('header:', header);
                                return (
                                    <Th
                                        key={header.id}
                                        borderLeftRadius={headerIndex === 0 ? '3xl' : null}
                                        borderRightRadius={headerIndex === array.length - 1 ? '3xl' : null}
                                        p="5"
                                        fontSize="md"
                                        color="white"
                                        fontWeight="bold"
                                        border="none"
                                        whiteSpace="nowrap"
                                        pos="sticky"
                                        top="0"
                                        bgColor="blue.900"
                                        {...header.column.columnDef?.meta?.lgProps}
                                        {...headerCellProps({ columnIndex: headerIndex, column: header })}
                                    >
                                        {console.log('header console:', header, {
                                            ...header.column.columnDef?.meta?.lgProps,
                                        })}
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext())}
                                    </Th>
                                );
                            })}
                        </Tr>
                    ))}
                </Thead>
                <Tbody>
                    {/* 有用到 pagination 才開啟 */}
                    {pagination && (
                        <Tr>
                            <Td pos="sticky" top="48px" colSpan={table.options.columns.length} p="0" border="none">
                                <Pagination table={table} mx="auto" />
                            </Td>
                        </Tr>
                    )}
                    {table.getRowModel().rows.map((row, rowIndex) => {
                        // console.log('Table Rows:', row);
                        return (
                            <Tr
                                key={row.id}
                                bgColor="white"
                                ml="2.5"
                                borderColor="bird-body-bg"
                                borderBottomWidth="5px"
                                {...rowProps({ row, rowIndex })}
                            >
                                {row.getVisibleCells().map((cell, cellIndex, array) => {
                                    console.log('Tr:', cell);
                                    const Cell = flexRender(cell.column.columnDef.cell, cell.getContext());
                                    return (
                                        <Td
                                            key={cell.id}
                                            borderLeftRadius={cellIndex === 0 ? '3xl' : null}
                                            borderRightRadius={cellIndex === array.length - 1 ? '3xl' : null}
                                            border="none"
                                            {...cellProps({ row, rowIndex, cell, cellIndex })}
                                        >
                                            {Cell}
                                        </Td>
                                    );
                                })}
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default DesktopTable;
