import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        name: '', // 名字
        unit: '', // 單位
    },
    login: false, // 登入狀態
};
const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setLogin(state, action) {
            console.log({ state, action });
            state.login = action.payload;
        },
        setLogout(state, action) {
            console.log({ state, action });
            state.login = false;
        },
    },
});

export const { setLogin, setLogout } = userSlice.actions;
export default userSlice.reducer;
