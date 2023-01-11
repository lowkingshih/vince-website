import http from '@/api';

// 登入請求
export const apiGetLogin = (param) => {
    return http.get(param);
};
