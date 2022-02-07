import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

type PrivateRouteProps = {
  children: React.ReactNode;
};

const PrivateRoute = (props: PrivateRouteProps) => {
  const { children } = props;

  const selectedDataConfirmed = useAppSelector(
    (state) => state.travelsForm.selectedDataConfirmed
  );

  return <>{selectedDataConfirmed ? children : <Navigate to="/" />}</>;
};

export default PrivateRoute;
