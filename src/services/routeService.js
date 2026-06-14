import axios from "axios";

export const calculateRoute = async () => {
  const response = await axios.post(
    "http://localhost:5000/api/routes/calculate-route"
  );

  return response.data;
};