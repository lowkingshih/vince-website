import { useContext } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import { useReactTable, getCoreRowModel } from '@tanstack/react-table';

// context

// table component
import Desktop from './component/Desktop';
import Mobile from './component/Mobile';

const Table = () => {
    const [isLargeThan1024] = useMediaQuery('(min-width: 1024px)');

    return <>{isLargeThan1024 ? <Desktop /> : <Mobile />}</>;
};

export default Table;
