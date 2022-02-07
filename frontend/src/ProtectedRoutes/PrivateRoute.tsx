import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  children: React.ReactNode;
  condition: boolean;
  rediractingPath: string;
};

const PrivateRoute = (props: PrivateRouteProps) => {
  const { children, condition, rediractingPath } = props;

  return <>{condition ? children : <Navigate to={rediractingPath} />}</>;
};

export default PrivateRoute;
