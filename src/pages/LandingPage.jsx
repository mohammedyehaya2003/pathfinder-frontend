import "./LandingPage.css";


function LandingPage() {
  const token = localStorage.getItem("token");

  return (
    <div className="landing-page">
      <div className="hero-section">
        <h1>PathFinder</h1>

        <h2>
          Intelligent Route Optimization Platform
        </h2>

        <p>
          Find the shortest routes, analyze
          travel distance, optimize paths, and
          manage route history using graph
          algorithms and real-time map
          interaction.
        </p>

        <div className="status-card">
          <h3>
            {token
              ? "User Logged In ✅"
              : "User Not Logged In ❌"}
          </h3>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Route Engine</h3>
            <p>
              Dijkstra-based shortest path
              calculation.
            </p>
          </div>

          <div className="feature-card">
            <h3>Interactive Maps</h3>
            <p>
              Select locations directly from the
              map.
            </p>
          </div>

          <div className="feature-card">
            <h3>Analytics</h3>
            <p>
              Track routes, distance, and
              optimization metrics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;