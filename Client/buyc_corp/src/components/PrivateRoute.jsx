import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  let { isAuth, loading, error, name } = useSelector(
    (store) => store.authManager
  );
  let toast=useToast();
  let navigate = useNavigate();
  if (isAuth) {
    return <>{children}</>;
  } else {
    toast({
      title: `Please login to add data`,
      status: "info",
      isClosable: true,
    });
    return <Navigate to="/signin" />;
  }
}
