import { useState } from "react";
import { calculateRoute } from "../services/routeService";
import { getHistory } from "../services/historyService";


import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./MapPage.css";

function LocationMarker({ locations, setLocations }) {
  useMapEvents({
    click(e) {
      console.log("Latitude:", e.latlng.lat);
      console.log("Longitude:", e.latlng.lng);

      setLocations((prevLocations) => [
        ...prevLocations,
        [e.latlng.lat, e.latlng.lng],
      ]);
    },
  });

  return (
    <>
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={location}
        />
      ))}
    </>
  );
}

function MapPage() {
  const [locations, setLocations] = useState([]);
  const [routeResult, setRouteResult] = useState(null);
  const [history, setHistory] = useState([]);

  const handleCalculateRoute = async () => {
    try {
      const data = await calculateRoute();

      setRouteResult(data.result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetHistory = async () => {
    try {
      const data = await getHistory();

      setHistory(data.history);
    } catch (error) {
      console.error(error);
    }
  };

  const totalRoutes = history.length;

  const totalDistance = history.reduce(
    (sum, route) => sum + Number(route.distance),
    0
  );

  const latestRoute =
    history.length > 0 ? history[0] : null;

  return (
    <div className="map-page">
      <MapContainer
        className="map-container"
        center={[9.9252, 78.1198]}
        zoom={13}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker
          locations={locations}
          setLocations={setLocations}
        />
      </MapContainer>

      <h2>Selected Locations</h2>

      {locations.map((location, index) => (
        <div
          key={index}
          className="location-card"
        >
          Location {index + 1}:{" "}
          {location[0].toFixed(4)},{" "}
          {location[1].toFixed(4)}
        </div>
      ))}

      <button onClick={handleCalculateRoute}>
        Calculate Route
      </button>

      <button onClick={handleGetHistory}>
        View History
      </button>

      {routeResult && (
        <div className="result-card">
          <h2>Route Result</h2>

          <p>
            <strong>Distance:</strong>{" "}
            {routeResult.distance}
          </p>

          <p>
            <strong>Path:</strong>{" "}
            {routeResult.path.join(" → ")}
          </p>
        </div>
      )}

      {history.length > 0 && (
        <>
          <div className="analytics-card">
            <h2>Analytics</h2>

            <div className="analytics-grid">
              <div className="analytics-item">
                <h3>Total Routes</h3>
                <p>{totalRoutes}</p>
              </div>

              <div className="analytics-item">
                <h3>Total Distance</h3>
                <p>{totalDistance}</p>
              </div>

              {latestRoute && (
                <div className="analytics-item">
                  <h3>Latest Route</h3>
                  <p>
                    {latestRoute.start_location}
                    {" → "}
                    {latestRoute.end_location}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="history-card">
            <h2>Route History</h2>

            {history.map((route) => (
              <div
                key={route.id}
                className="history-item"
              >
                <p>
                  <strong>Start:</strong>{" "}
                  {route.start_location}
                </p>

                <p>
                  <strong>End:</strong>{" "}
                  {route.end_location}
                </p>

                <p>
                  <strong>Distance:</strong>{" "}
                  {route.distance}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default MapPage;