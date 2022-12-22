import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const navigation = useNavigate();
  const onSubmitUser = () => {
    if (username !== "" && password !== "") {
      const data: any = {
        username,
        password,
      };
      window.localStorage.setItem("user", JSON.stringify(username));
      console.log(data);

      navigation("/dashboard");
    } else {
      alert("Username? Parol?");
    }
  };
  return (
    <>
      <h1>Login</h1>
      <div className="form">
        <input
          type={"text"}
          autoComplete="off"
          value={username}
          onChange={(e: any) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type={"password"}
          autoComplete="off"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={onSubmitUser}>Login</button>
      </div>
    </>
  );
}

export default Login;
