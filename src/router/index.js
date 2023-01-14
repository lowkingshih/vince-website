import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    // history: createWebHistory(import.meta.env.DEV ? "/" : "/slopeMobile"),
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            alias: '/home',
            component: () => import('/src/views/Home.vue'),
        },
        // product detail
        {
            path: '/MCB/product',
            name: 'MCB',
            component: () => import('/src/views/products/MCB.vue'),
        },
        {
            path: '/AddOnBlock/product',
            name: 'AddOnBlock',
            component: () => import('/src/views/products/AddOnBlock.vue'),
        },
        {
            path: '/HLF/product',
            name: 'HLF',
            component: () => import('/src/views/products/HLF.vue'),
        },
        {
            path: '/Timer/product',
            name: 'Timer',
            component: () => import('/src/views/products/Timer.vue'),
        },
        {
            path: '/Trunking/product',
            name: 'Trunking',
            component: () => import('/src/views/products/Trunking.vue'),
        },
        // certification
        {
            path: '/ROHS/certification',
            name: 'ROHS',
            component: () => import('/src/views/ROHS.vue'),
        },
    ],
});

export default router;
