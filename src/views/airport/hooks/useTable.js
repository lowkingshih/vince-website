import { useState, useEffect, useMemo, useReducer } from 'react';
import { fetchData } from '../config/faker';
import { useQuery } from 'react-query';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { columns as columnsJson } from '../config/columns';
import Columns from '@/components/Table/component/Columns';

export default function useTable() {
    // select 控制勾選與否
    const [rowSelection, setRowSelection] = useState({});
    useEffect(() => {
        console.log('rowSelection:', rowSelection);
    }, [rowSelection]);

    // pagination
    const [{ pageIndex, pageSize }, setPagination] = useState({
        pageSize: 50,
        pageIndex: 0,
    });
    const fetchDataOptions = {
        pageIndex,
        pageSize,
    };
    const dataQuery = useQuery(['fake', fetchDataOptions], () => fetchData(fetchDataOptions), {
        keepPreviousData: true,
    });
    console.log('dataQuery', { dataQuery });
    useEffect(() => {
        setData(dataQuery?.data?.rows);
    }, [dataQuery]);

    const [data, setData] = useState(dataQuery?.data?.rows);

    const pagination = useMemo(
        () => ({
            pageIndex,
            pageSize,
        }),
        [pageIndex, pageSize],
    );

    const table = useReactTable({
        columns: Columns(columnsJson),
        // data: dataQuery.data?.rows ?? [],
        data: data || [],
        pageCount: dataQuery.data?.pageCount ?? -1,
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        state: {
            pagination,
            total: dataQuery.data?.total ?? 0,
            rowSelection,
        },
        onPaginationChange: setPagination,
        // custom id
        getRowId: (row) => {
            return row.airportAdress + row.airportName;
        },
    });
    return table;
}
