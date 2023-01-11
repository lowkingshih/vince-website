import { lazy } from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import Layout from '@/layout';
import NotFound from '@/components/ErrorPage/404.jsx';
import lazyLoad from '@/routers/utils/LazyLoad';

// 臨時的，之後再看怎麼懶加載
import Airport from '@/views/airport';
import Group from '@/views/group';
import Login from '@/views/login';
import Param from '@/views/param';
import User from '@/views/user';
import Log from '@/views/log';
import Setting from '@/views/setting';

import UserProvider from '@/providers/UserProvider';

const login = false;

const loader = () => {
    if (!login) {
        return redirect('/login');
    }
    return;
};
const router = createBrowserRouter([
    {
        errorElement: <NotFound />,
        path: '/',
        element: (
            <UserProvider>
                <Layout />
            </UserProvider>
        ),
        handle: {
            crumb: () => ({
                url: '/',
                name: '首頁',
            }),
        },
        children: [
            {
                errorElement: <NotFound />,
                children: [
                    {
                        index: true,
                        loader: () => {
                            return redirect('/airport');
                        },
                    },
                    {
                        path: 'airport',
                        element: <Airport />,
                    },
                    {
                        path: 'group',
                        element: <Group />,
                    },
                    {
                        path: 'param',
                        element: <Param />,
                        handle: {
                            crumb: () => ({
                                url: 'param',
                                name: '參數管理',
                            }),
                        },
                        // loader,
                    },
                    {
                        path: 'setting',
                        element: <Setting />,
                        handle: {
                            crumb: () => ({
                                url: 'setting',
                                name: '功能設定',
                            }),
                        },
                        // loader,
                    },
                    {
                        path: 'user',
                        element: <User />,
                        handle: {
                            crumb: () => ({
                                url: 'user',
                                name: '使用者管理',
                            }),
                        },
                        // loader,
                    },
                    {
                        path: 'log',
                        element: <Log />,
                        handle: {
                            crumb: () => ({
                                url: 'log',
                                name: '使用者操作紀錄',
                            }),
                        },
                        // loader,
                    },
                ],
            },
        ],
    },
    {
        path: '/login',
        element: (
            <UserProvider>
                <Login />
            </UserProvider>
        ),
        errorElement: <NotFound />,
    },
]);

export default router;
