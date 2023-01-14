import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// 解決 vite dynamic import 時無法讀取含有下底線的檔案
const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

// https://vitejs.dev/config/
export default defineConfig({
    base: process.env.NODE_ENV === 'production' ? '/' : '/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'), // 路径别名
        },
    },
    server: {
        host: '0.0.0.0',
    },
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@use "src/assets/scss/index.scss" as *;',
            },
        },
    },
    build: {
        rollupOptions: {
            output: {
                // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
                sanitizeFileName(fileName) {
                    const match = DRIVE_LETTER_REGEX.exec(fileName);
                    const driveLetter = match ? match[0] : '';
                    return driveLetter + fileName.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '');
                },
            },
        },
    },
});
