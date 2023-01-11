import { Image, Skeleton } from '@chakra-ui/react';

function SkeletonImage(props) {
    return <Image fallback={<Skeleton />} {...props} />;
}

export default SkeletonImage;
