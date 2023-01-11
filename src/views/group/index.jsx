import { useDispatch } from 'react-redux';
import { setLogin, setLogout } from '@/store/userSlice';
import { Button } from '@chakra-ui/react';
const Group = () => {
    const dispatch = useDispatch();
    const login = () => {
        dispatch(setLogin(true));
    };
    const logout = () => {
        dispatch(setLogout());
    };
    return (
        <>
            <div>Group</div>
            <Button onClick={login}>使用登入</Button>
            <Button onClick={logout}>使用登出</Button>
        </>
    );
};

export default Group;
