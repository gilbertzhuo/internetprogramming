import React, { useEffect } from "react";
import Auth from "../../components/Auth";
import { useHistory } from "react-router-dom";

export default function Login() {
  const currentUser = "";
  let history = useHistory();
  useEffect(() => {
    if (currentUser) {
      history.push("/");
    }
  }, [currentUser]);
  return <Auth />;
}
