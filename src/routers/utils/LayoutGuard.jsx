import React, { Suspense, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// 已棄用
/**
 * @description 路由懶加載
 * @param {Element} Component 懶加載的組件
 * @returns element
 */
const LayoutGuard = ({ Component }) => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    console.log({ user });
    useLayoutEffect(() => {
        if (!user.login) {
            console.log('有導向');
            navigate('/login');
        }
    }, [user.login]);

    return (
        <Suspense fallback={<div>loading...</div>}>
            <Component />
        </Suspense>
    );
};

export default LayoutGuard;
