import { Flex, Heading } from '@chakra-ui/react';
import SkeletonImage from '@/components/SkeletonImage';
import logoPath from '@/assets/images/logo.png';

const Logo = ({ fontSize, color, ...props }) => (
    <Flex h="20" alignItems="center" p="4" {...props}>
        <SkeletonImage src={logoPath} mr="1" />
        <Heading as="h1" textStyle="heading1" color={color || 'white'} fontSize={fontSize}>
            鳥擊防制系統後臺
        </Heading>
    </Flex>
);

export default Logo;
