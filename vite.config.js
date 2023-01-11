import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'; // svg-icons
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({

    plugins: [
        react(),
        // svg-icons
        createSvgIconsPlugin({
            // Specify the icon folder to be cached
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            // Specify symbolId format
            symbolId: 'icon-[dir]-[name]',
            /**
             * custom insert position
             * @default: body-last
             *
             * @option 'body-last' | 'body-first'
             */
            inject: 'body-last',

            /**
             * custom dom id
             * @default: __svg__icons__dom__
             */
            customDomId: '__svg__icons__dom__',
        }),
    ],
    server: {
        host: '0.0.0.0',
    },

    resolve: {
        // 別名
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
});
