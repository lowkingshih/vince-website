import { UserContext } from '@/contexts/userContext';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectRoute = ({ children }) => {
    const { login } = useContext(UserContext);
    const location = useLocation();

    if (!login) {
        // from 給 login 看的，登入成功後就會導回 children 這頁
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return children;
};

export default ProtectRoute;
