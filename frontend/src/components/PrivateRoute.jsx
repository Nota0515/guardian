import { Navigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';

const PrivateRoute = ({children}) => {
    const token = localStorage.getItem('token');
    if (!token) return <Navigate to='/login' />;
    try {
        const decode = jwtDecode(token);
        const isExpired = decode.exp*1000 < Date.now();
        return isExpired ? 
            <Navigate to='/login' /> : children ;
    } catch (error) {
        return <Navigate to='/login' />;
    }
};

export default PrivateRoute ;