import { Navigate } from "react-router";
import { getCurrentUser } from "../services/authService";

function ProtectedRoute({ isLoggedIn, children }) {
    if (isLoggedIn) {
        return children;
    } else {
        return <Navigate to="/login" replace />;
    }
}

export default ProtectedRoute;