import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Loader from "../common/Loader";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#030712" }}>
        <Loader />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}