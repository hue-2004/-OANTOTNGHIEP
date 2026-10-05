import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");


  function login(e) {

    e.preventDefault();

    if (!email || !password) {
      alert(
        "Vui lòng nhập email và mật khẩu."
      );
      return;
    }

    localStorage.setItem(
      "japaneseAI_user",
      JSON.stringify({
        email,
      })
    );

    navigate("/dashboard");
  }


  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          日
        </div>

        <h1>
          JapaneseAI
        </h1>

        <p>
          Đăng nhập để học N5 – N4
        </p>


        <form onSubmit={login}>

          <label>
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="example@gmail.com"
          />


          <label>
            Mật khẩu
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            placeholder="Nhập mật khẩu"
          />


          <button className="primary-button full">
            Đăng nhập
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;