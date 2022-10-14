import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  let history = useHistory();
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("userInfo"))) {
      history.push("/login");
    }
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />;
      }}
    ></Route>
  );
}
