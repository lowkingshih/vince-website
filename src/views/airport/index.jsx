import { useState, useEffect, useContext } from 'react';
import { VStack, RadioGroup, Radio, Stack, Flex, useDisclosure, LinkBox, LinkOverlay, Heading, Text, Box, Link} from '@chakra-ui/react';


import Dialog from '@/components/Dialog';

import Form from './Form';

import useTable from './hooks/useTable';
import Table from '@/components/Table';

// context
import { HandleContext } from '@/contexts/handleContext';
import { TableContext } from '@/contexts/tableContext';
import Button from '../../components/common/Button';

const handle = (event) => {
    const { action, content } = event;
    console.log('handlebar in airport:', event);
};

const TestModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const buttons = [
        {
            variant: 'danger',
            children: '刪除',
            onClick: () => {
                handle('delete');
            },
        },
        {
            children: '關閉',
            onClick: onClose,
        },
    ];
    return (
        <>
            {/* <Button onClick={onOpen}>testDialog</Button> */}
            <Dialog buttons={buttons} isOpen={true}>
                這是我的內容你知道的
            </Dialog>
        </>
    );
};

const Airport = () => {
    // test modal
    const table = useTable();
    const tableContext = useContext(TableContext);

    return (
        <>
            <HandleContext.Provider value={{ handle }}>
                <VStack id="imAirportVStack" overflowY="auto" w="full" p={{ base: '1.5', lg: '5' }}>
                    <ul>
                        <li>
                        <Link href='/public/綜合目錄HAGER-MCB-BUSBAR-SPD-MMS.pdf' isExternal >
                    叔叔的型錄1- 綜合目錄HAGER-MCB-BUSBAR-SPD-MMS
                </Link>
                        </li>
                        <li>
                        <Link href='/public/HAGER TIMER計時器.pdf' isExternal>
                    叔叔的型錄2 - HAGER TIMER計時器
                </Link>
                        </li>
                    </ul>
               
             
                 </VStack>
            </HandleContext.Provider>
        </>
    );
};

export default Airport;
