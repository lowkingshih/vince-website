/**axios封装
 * 請求攔截、錯誤統一處理
 */
import axios from 'axios';

const service = axios.create({
    baseURL: '',
    timeout: 30000,
});

// request 攔截器
service.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        switch (error.code) {
            default:
            // 跳出錯誤
            //  message.error(error.msg)
        }
        return Promise.reject(error);
    },
);

// response 響應攔截器
service.interceptors.response.use(
    (response) => {
        console.log(response);
        const { data, status } = response;
        if (typeof status === 'number') {
            switch (status) {
                case 200:
                    return Promise.resolve(data);
                default:
                    return Promise.resolve(data);
            }
        } else {
            return Promise.reject(data);
        }
    },
    // 非 200
    (error) => {
        console.log('axios error', { error });
        // do something
        switch (error.status) {
            case '500':
                alert('系統發生錯誤');
                break;
            default:
                break;
        }
        return Promise.reject(error.response.data);
    },
);
// 待切分常用請求 get, post, put, delete

export { service as axios };
