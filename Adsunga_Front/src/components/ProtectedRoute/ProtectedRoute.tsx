import { JSX, useEffect } from "react";
import { useUserContext } from "../../contexts/userContext";
import { Loader } from "../../components/Loader/Loader";
import { useNavigate } from "react-router";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isLoggedIn, isLoading } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      navigate("/login", { replace: true });
    }
  }, [isLoading, isLoggedIn, navigate]);

  if (isLoading) return <Loader />;
  if (!isLoggedIn) return null;

  return children;
};

export default ProtectedRoute;
