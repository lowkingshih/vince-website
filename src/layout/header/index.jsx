import { Box, IconButton, Hide, Show, Heading, Text, Icon, HStack, Flex, Spacer } from '@chakra-ui/react';
import { AiOutlineMenu, AiOutlineInfoCircle } from 'react-icons/ai';
import { FiBriefcase } from 'react-icons/fi';

const Header = (props) => {
    const { onOpen, user, unit } = props;
    return (
        <>
            {/* 手機版 */}
            <Hide above="lg">
                <Flex
                    w="100%"
                    bgColor={{ base: 'blue.900', lg: 'white' }}
                    p={{ base: '1', lg: '5' }}
                    pos="fixed"
                    zIndex="1"
                    top="0"
                >
                    <Box ml="auto">
                        <IconButton onClick={onOpen} aria-label="menu-toggle" icon={<AiOutlineMenu />} />
                    </Box>
                </Flex>
            </Hide>

            {/* 桌機版 */}
            <Show above="lg">
                <Flex w="100%" bgColor={{ base: 'blue.900', lg: 'white' }} p={{ base: '1', lg: '5' }}>
                    <Box>
                        <Heading as="h2" textStyle="heading2" fontSize="xl">
                            {/* 根據 menu 經常變動的部分挖空出去 */}
                            {props.children}
                        </Heading>
                    </Box>
                    <Spacer />
                    <HStack>
                        <HStack>
                            <Icon as={AiOutlineInfoCircle} />
                            <Text>{user ?? '趙靈兒'}</Text>
                        </HStack>
                        <HStack>
                            <Icon as={FiBriefcase} />
                            <Text>{unit ?? '臺北國際航空站'}</Text>
                        </HStack>
                    </HStack>
                </Flex>
            </Show>
        </>
    );
};
export default Header;
