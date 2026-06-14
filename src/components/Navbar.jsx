import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    alert("Logged Out Successfully!");

    navigate("/");
  };

  const token = localStorage.getItem("token");

  return (
    <nav className="navbar">
      <div className="logo">
        PathFinder
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>

        {!token && (
          <>
            <Link to="/register">
              Register
            </Link>

            <Link to="/login">
              Login
            </Link>
          </>
        )}

        <Link to="/map">
          Dashboard
        </Link>

        {token && (
          <button
            onClick={handleLogout}
            className="logout-btn"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;