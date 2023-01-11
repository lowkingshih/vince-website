import { useEffect, useContext } from 'react';
import { Flex, Heading, Button, FormControl, FormLabel, FormErrorMessage, Box, HStack } from '@chakra-ui/react';

// asset
import logoPath from '@/assets/images/logoFull.png';
import { LOGIN } from './form.json';

// formik
import { useNavigate } from 'react-router-dom';
import { UserContext } from '@/contexts/userContext';

// component
import Form from '@/components/Form';
import SkeletonImage from '@/components/SkeletonImage';

// test component
import Input from '@/components/Form/component/Input';
import Select from '@/components/Form/component/Select';
import Radio from '@/components/Form/component/Radio';
import Date from '@/components/Form/component/Date';
// test hoc
import { compose } from '@/utils';
import addOptions from '@/components/Form/hoc/addOptions';
import addPlaceholder from '@/components/Form/hoc/addPlaceholder';
// test 整張表單
import TestComponent from '@/components/Form/testComponent/index.jsx';

const mock2 = addOptions('mock2');
console.log('mock2:', { mock2 });
const Select2 = mock2(Select);
console.log('Select2:', { Select2, Select });

const CoolSelect = compose(addOptions('mock2'), addPlaceholder('so coool!!'))(Select);

const Login = () => {
    const navigate = useNavigate();
    const { login, onLogin } = useContext(UserContext);

    const handleLogin = () => {
        console.log('submit in Login');
        onLogin(true);
    };

    // test
    const options = [
        {
            id: 'a',
            name: 'aName',
        },
        {
            id: 'b',
            name: 'bName',
        },
        {
            id: 'c',
            name: 'cName',
        },
    ];

    return (
        <>
            <Flex bgColor="gray.100" h="100vh" flexDirection="column" justifyContent={'center'} alignItems="center">
                {/* <Flex
                    mb={{ base: '5', lg: '16' }}
                    flexDirection={{ base: 'column', lg: 'row' }}
                    alignItems="center"
                    justifyContent="center"
                >
                    <SkeletonImage w={{ base: '120px', lg: '175px' }} src={logoPath} mr={{ lg: '4' }} alt="full logo" />
                    <Heading as="h1" color="blue.500" fontSize={{ base: '3xl', lg: '7xl' }}>
                        鳥擊防制資訊系統
                    </Heading>
                </Flex> */}
                {/* <Box bgColor="white" w="full" mb="3" p="3">
                    <TestComponent />
                </Box> */}
                <Box bgColor="white" p="12" rounded="2xl">
                    <Form config={LOGIN} submit={handleLogin} />
                </Box>
            </Flex>
        </>
    );
};

export default Login;
