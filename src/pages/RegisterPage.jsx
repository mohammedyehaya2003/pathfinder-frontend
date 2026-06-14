import { useState } from "react";
import { registerUser } from "../services/authService";
import "./RegisterPage.css";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await registerUser({
        name,
        email,
        password,
      });

      console.log(data);
      alert("Registration Successful!");

      navigate("/login");


    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register-page">
      <div className="register-left">
        <h1>Join PathFinder</h1>

        <p>
          Create your account and start
          optimizing routes with intelligent
          path analysis and route management.
        </p>
      </div>

      <div className="register-card">
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

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
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;