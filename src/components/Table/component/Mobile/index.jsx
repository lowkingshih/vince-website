import { useContext } from 'react';
import Row from './Row';
import Pagination from '@/components/Pagination/Pagination';
import { Box, FormLabel, FormControl, Text, VStack, Flex, HStack, Center } from '@chakra-ui/react';
import { flexRender } from '@tanstack/react-table';

// context
import { TableContext } from '@/contexts/tableContext';
import { HandleContext } from '@/contexts/handleContext';

// radio
const Radio = ({ cell, index }) => (
    <FormControl display="inline-flex" justifyContent="center" alignItems="center" ml={index ? '2' : 0}>
        <Center mr="2" mb="0">
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </Center>
        <FormLabel fontSize="xs" m="0">
            {cell.column.columnDef.header}
        </FormLabel>
    </FormControl>
);

const Mobile = () => {
    const { pagination, table } = useContext(TableContext);
    const { handle } = useContext(HandleContext);

    // 取得 headers 中 button 的 delete 及 view 是否存在
    const buttonActions = table.getColumn('button')?.columnDef?.meta?.types || [];
    const headerHasDelete = buttonActions.includes('delete');
    const headerHasView = buttonActions.includes('view');

    const paginationProps = {
        position: 'sticky',
        top: '0',
    };

    return (
        <>
            <Pagination table={table} {...paginationProps} />
            <VStack width="full">
                {table.getRowModel().rows.map((row) => {
                    // button 轉成右側按鈕(view)及長按按鈕(delete)
                    // row 沒有 delete, view 屬性 -> 預設顯示
                    // row 有 delete, view 屬性 -> 根據 value 決定開或關 (boolean)
                    const { delete: deleteValue, view: viewValue } = row.original;
                    const isDeleteOn = headerHasDelete && (deleteValue === undefined || deleteValue === true);
                    const isViewOn = headerHasView && (viewValue === undefined || viewValue === true);

                    // 取出 checkbox 放入手機版左側欄位
                    const selectCell = row
                        .getAllCells()
                        .filter((cell) => cell.column.id === 'select')
                        .at(0);
                    const SelectComponent = selectCell ? (
                        <FormLabel
                            h="100%"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            bgColor="white"
                            px="3"
                            m="0"
                        >
                            {flexRender(selectCell.column.columnDef.cell, selectCell.getContext())}
                        </FormLabel>
                    ) : null;

                    return (
                        <Row
                            key={row.id}
                            leftSide={SelectComponent}
                            // Mobile 只綁定 delete && view 這兩個 button 的事件
                            handleLongPress={
                                isDeleteOn &&
                                (() => {
                                    handle({ action: 'delete', content: row.original });
                                })
                            }
                            handleRightSide={
                                isViewOn &&
                                (() => {
                                    handle({ action: 'view', content: row.original });
                                })
                            }
                        >
                            {row
                                .getVisibleCells()
                                // 篩掉不渲染的 cell
                                .filter((cell) => {
                                    console.log('cell:', cell);

                                    const filterAccessorKey = ['index', 'button', 'select']; // 不渲染 button & index

                                    const isRadio = cell.id.includes('_radio_');

                                    return !filterAccessorKey.includes(cell.column.columnDef?.accessorKey) && !isRadio;
                                })
                                .map((cell, index, array) => (
                                    // TODO: 這裡要判斷是各種渲染結果，ex: radio, icon 等等
                                    // 目前是只渲染普通 icon 及
                                    <Box key={cell.id} width="100%" mb={index !== array.length - 1 ? '2' : 0}>
                                        <Text color="blue.500" fontSize="xs">
                                            {cell.column.columnDef.header}
                                        </Text>
                                        <Text noOfLines={1} fontSize="xs">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </Text>
                                    </Box>
                                ))}

                            {
                                // radio group
                                <Flex mt="2" onTouchStart={(event) => event.stopPropagation()}>
                                    {row
                                        .getVisibleCells()
                                        // 篩掉不渲染的 cell
                                        .filter((cell) => {
                                            const isRadio = cell.id.includes('_radio_');
                                            return isRadio;
                                        })
                                        .map((cell, index) => (
                                            <Radio cell={cell} index={index} />
                                        ))}
                                </Flex>
                            }
                        </Row>
                    );
                })}
                {/* <Card leftSide={<LeftSide />} rightSide={'安安'}></Card> */}
            </VStack>
        </>
    );
};

export default Mobile;
