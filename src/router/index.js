import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    // history: createWebHistory(import.meta.env.DEV ? "/" : "/slopeMobile"),
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            alias: '/home',
            component: () => import('@/views/Home.vue'),
        },
        // product detail
        {
            path: '/MCB/product',
            name: 'MCB',
            component: () => import('@/views/products/MCB.vue'),
        },
        {
            path: '/AddOnBlock/product',
            name: 'AddOnBlock',
            component: () => import('@/views/products/AddOnBlock.vue'),
        },
        {
            path: '/HLF/product',
            name: 'HLF',
            component: () => import('@/views/products/HLF.vue'),
        },
        {
            path: '/Timer/product',
            name: 'Timer',
            component: () => import('@/views/products/Timer.vue'),
        },
        {
            path: '/Trunking/product',
            name: 'Trunking',
            component: () => import('@/views/products/Trunking.vue'),
        },
        {
            path: '/ROHS/certification',
            name: 'ROHS',
            component: () => import('@/views/ROHS.vue'),
        },
    ],
});

export default router;
