import {
    Drawer,
    DrawerOverlay,
    DrawerHeader,
    DrawerContent,
    DrawerBody,
    Show,
    Hide,
    Box,
    VStack,
} from '@chakra-ui/react';

import Logo from '@/components/logo';
import NavList from './component/NavList';

const Menu = ({ onClose, isOpen, setActive, menuList, ...rest }) => {
    return (
        <>
            <Hide above="lg">
                <Drawer placement="left" size={{ sm: 'xs', md: 'lg' }} onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent bgColor="blue.900">
                        <DrawerHeader p={0} borderBottomWidth="1px">
                            <Logo fontSize="2xl" />
                        </DrawerHeader>
                        <DrawerBody p={0}>
                            <NavList list={menuList} setActive={setActive} />
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Hide>

            <Show above="lg">
                <Box transition="3s ease" bg="blue.900" w="max" h="100vh" {...rest}>
                    <Logo fontSize="3xl" />
                    <VStack>
                        <NavList list={menuList} setActive={setActive} />
                    </VStack>
                </Box>
            </Show>
        </>
        /*
    Menu狀態: 
    當前頁面 -> 白底、黑點
    其他頁面 -> 
     */
    );
};
export default Menu;
