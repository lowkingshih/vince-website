import { cloneElement, useContext, useEffect, useRef } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import {
    Button,
    Icon,
    HStack,
    Radio,
    RadioGroup,
    Checkbox,
    FormControl,
    FormLabel,
    Center,
    Flex,
} from '@chakra-ui/react';
import { HiOutlineLocationMarker as location } from 'react-icons/hi';

// context
import { HandleContext } from '@/contexts/handleContext';

const columnHelper = createColumnHelper();

// icons -> table 要加上其他 icon 要先引進來
const icons = {
    location,
};
// buttons -> table 只會有這三顆，需要就再加，純粹樣式更改可以傳 props
const buttons = {
    delete: (
        <Button key="delete" variant="danger">
            刪除
        </Button>
    ),
    edit: (
        <Button key="edit" variant="info">
            編輯
        </Button>
    ),
    view: (
        <Button key="view" variant="primary">
            預覽
        </Button>
    ),
};
// checkbox
const IndeterminateCheckbox = ({ isIndeterminate, dispatch, isChecked, ...rest }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (typeof isIndeterminate === 'boolean') {
            ref.current.indeterminate = !isChecked && isIndeterminate;
        }
    }, [ref, isIndeterminate]);

    return <Checkbox ref={ref} isChecked={isChecked} {...rest} />;
};

// header width

// handle 該怎麼 emit 上來 -> context handle
// 將設定檔轉成設定好的 table 樣式
const Columns = (json) => {
    const { handle } = useContext(HandleContext);

    const columns = json.map(({ type, label, prop, meta, value }) => {
        switch (type) {
            case 'index':
                return columnHelper.accessor('index', {
                    cell: (info) => {
                        // 有用 pagination 的話 index 項目會往後疊加
                        const { pageIndex, pageSize } = info.table.getState()?.pagination || {};
                        if (pageIndex && pageSize) {
                            const initIndex = pageIndex * pageSize;

                            return initIndex + info.row.index + 1;
                        }
                        return info.row.index + 1;
                    },
                    header: label || '',
                    meta: {
                        lgProps: {
                            width: '20px',
                        },
                        ...meta,
                    },
                });
            case 'icon': {
                return columnHelper.accessor(prop, {
                    cell: (info) =>
                        meta.map(({ type: iconType, props }) => {
                            return Object.hasOwn(icons, iconType) ? (
                                <Icon
                                    as={icons[iconType]}
                                    mx="auto"
                                    boxSize="24px"
                                    cursor="pointer"
                                    _hover={{
                                        color: 'blue.400',
                                    }}
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        handle({ action: iconType, content: info.row.original });
                                    }}
                                    onTouchStart={(event) => {
                                        event.stopPropagation();
                                        handle({ action: iconType, content: info.row.original });
                                    }}
                                    {...props}
                                />
                            ) : (
                                <></>
                            );
                        }),
                    header: label,
                    meta: {
                        lgProps: {
                            width: '20px',
                        },
                    },
                });
            }
            case 'button':
                // button column prop 統一為 button
                // button handle 再依類型丟進 action
                return columnHelper.accessor('button', {
                    cell: (info) => (
                        <Flex justifyContent="flex-end">
                            {/* TODO: 可能需求 -> 需要依據 data 決定是否渲染這顆按鈕，遇到再說 */}
                            {meta.buttons.map(({ type, props, label }) =>
                                cloneElement(buttons[type], {
                                    ...props,
                                    ml: '3',
                                    onClick: (event) => {
                                        handle({ action: type, content: info.row.original });
                                    },
                                    key: type,
                                }),
                            )}
                        </Flex>
                    ),
                    header: label || '',
                    meta: {
                        ...meta,
                        types: meta.buttons.map(({ type }) => type),
                    },
                });
            case 'radio':
                // radio "不做分頁"，分頁的狀態修正不會儲存
                return columnHelper.accessor(`${type}_${value}`, {
                    cell: (info) => {
                        // 從 desktop 丟的參數
                        console.log('radio:', info);

                        return (
                            <Center>
                                <Radio />
                            </Center>
                        );
                    },
                    header: label,
                    meta: {
                        lgProps: {
                            width: '10px',
                        },
                    },
                });
            case 'select': {
                return columnHelper.accessor('select', {
                    header: ({ table }) => (
                        <IndeterminateCheckbox
                            {...{
                                isChecked: table.getIsAllRowsSelected(),
                                isIndeterminate: table.getIsSomeRowsSelected(),
                                onChange: table.getToggleAllRowsSelectedHandler(),
                            }}
                        />
                    ),
                    cell: ({ row, table }) => {
                        const { original, id } = row;
                        const { dispatchSelection } = table.getState();
                        // react-table native handler
                        const toggleSelectedHandler = row.getToggleSelectedHandler();

                        // const dispatch = (isCheck) => {
                        //     dispatchSelection({ id, content: original, isCheck });
                        // };

                        return (
                            <IndeterminateCheckbox
                                {...{
                                    isChecked: row.getIsSelected(),
                                    isIndeterminate: row.getIsSomeSelected(),
                                    onChange: toggleSelectedHandler,
                                }}
                            />
                        );
                    },
                    meta: {},
                });
            }
            default:
                return columnHelper.accessor(prop, {
                    cell: (info) => info.getValue(),
                    header: label,
                });
        }
    });

    return columns;
};

export default Columns;
