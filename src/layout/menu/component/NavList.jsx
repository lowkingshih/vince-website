import { NavLink } from 'react-router-dom';
import { Flex, Text, Icon, Link } from '@chakra-ui/react';
import { VscCircleLargeFilled } from 'react-icons/vsc';

const NavList = ({ list, setActive }) => {
    const handleClick = (label) => {
        setActive(label);
    };

    return (
        <>
            {list.map(({ label, to }) => (
                <Link
                    style={{ marginTop: '0' }}
                    key={to}
                    as={NavLink}
                    to={to}
                    w="full"
                    display="flex"
                    borderBottom="1px"
                    borderBottomColor="gray.500"
                    p="2.5"
                    _hover={{ textDecoration: 'none' }}
                    _focus={{ outline: 'none' }}
                    onClick={() => {
                        handleClick(label);
                    }}
                    // _activeLink={{ color: '#666' }}
                >
                    {({ isActive, isPending }) => (
                        <Flex
                            w="full"
                            justifyContent="space-between"
                            alignItems="center"
                            bgColor={isActive ? 'white' : 'blue.900'}
                            h="full"
                            p="2.5"
                            rounded="lg"
                        >
                            <Text
                                color={isActive ? 'blue.900' : 'white'}
                                fontWeight="700"
                                fontSize={{ base: 'md', lg: 'xl' }}
                            >
                                {label}
                            </Text>
                            <Icon
                                display={isActive ? 'inline-block' : 'none'}
                                as={VscCircleLargeFilled}
                                boxSize={6}
                                color="blue.900"
                            />
                        </Flex>
                    )}
                </Link>
            ))}
        </>
    );
};

export default NavList;
