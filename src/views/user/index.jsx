import { UserContext } from '@/contexts/userContext';
import { Button } from '@chakra-ui/react';
import { useContext } from 'react';

const User = () => {
    const { onLogout } = useContext(UserContext);

    return (
        <>
            <div>User</div>
            <Button onClick={onLogout}>logout with Context</Button>
        </>
    );
};

export default User;
