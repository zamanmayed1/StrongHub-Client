import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../Firebase/Firebase.init'
function RequireAuth({ children }) {
    const [user, loading] = useAuthState(auth)
    let location = useLocation();

    if (loading) {
        return <progress className="progress w-56 mx-auto mb-96"></progress>;
    }
    if (!user) {

        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;