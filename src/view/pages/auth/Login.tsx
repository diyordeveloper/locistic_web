import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const navigation = useNavigate();
  const onSubmitUser = () => {
    if (username == "admin" && password == "1212") {
      navigation("/dashboard");
    } else {
      alert("Error...");
    }
  };
  return (
    <>
      <strong>Login</strong>
      <h1>
        username: <strong>admin</strong>
      </h1>
      <h1>
        parol: <strong>1212</strong>
      </h1>
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
