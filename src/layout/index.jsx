import { Outlet } from 'react-router-dom';
import { useDisclosure, HStack, Box, VStack, Flex } from '@chakra-ui/react';

// component
import Header from './header';
import Menu from './menu';
import { useState, useMemo } from 'react';

// protect component
import ProtectRoute from '@/routers/component/ProtectRoute';

const Layout = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const menuList = useMemo(
        () => [
            { label: '機場管理', to: 'airport' },
            { label: '使用者管理', to: 'user' },
            { label: '群組設置', to: 'group' },
            { label: '參數管理', to: 'param' },
            { label: '使用者操作紀錄', to: 'log' },
            { label: '功能設定', to: 'setting' },
        ],
        [],
    );
    const [activeName, setActiveName] = useState('航空管理站');

    return (
        <>
            <ProtectRoute>
                {/* padding-top 將 mobile menu 的空間往下推 */}
                <Flex width="100vw" height="100vh" overflow="hidden" boxSizing="border-box">
                    <VStack>
                        <Menu isOpen={isOpen} onClose={onClose} menuList={menuList} setActive={setActiveName} />
                    </VStack>

                    <VStack flexGrow={1} width="100%" height="100vh">
                        <Header onOpen={onOpen}>{activeName}</Header>
                        <Box
                            pt={{ base: '48px', lg: '0' }}
                            width={{ base: '100%', lg: 'calc(100vw - 290px)' }}
                            overflow="auto"
                        >
                            <Outlet />
                        </Box>
                    </VStack>
                </Flex>
            </ProtectRoute>
        </>
    );
};

export default Layout;
