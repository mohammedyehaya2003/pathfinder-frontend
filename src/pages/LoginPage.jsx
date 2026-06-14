import { loginUser } from "../services/authService";
import { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser({
        email,
        password,
      });

      localStorage.setItem(
        "token",
        data.token
      );

      console.log(
        "Token Stored Successfully"
      );

      console.log(data);
      navigate("/map");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Welcome Back</h1>

        <p>
          Login to access your route
          optimization dashboard.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;