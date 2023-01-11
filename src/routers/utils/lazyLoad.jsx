import { Spinner } from '@chakra-ui/react';
import React, { Suspense } from 'react';

/**
 * @description 路由懶加載
 * @param {Element} Component 懶加載的組件
 * @returns element
 */
const lazyLoad = (Component) => {
    return (
        <Suspense fallback={<Spinner />}>
            <Component />
        </Suspense>
    );
};

export default lazyLoad;
