import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const login = () => {
    localStorage.setItem("login", true);
    navigate("/");
  };
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  });

  return (
    <>
      <h1>Login Page</h1>
      <input type="text" /> <br /> <br />
      <input type="text" /> <br /> <br />
      <button onClick={login}>Login</button>
    </>
  );
};
