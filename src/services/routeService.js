import axios from "axios";

export const calculateRoute = async () => {
  const response = await axios.post(
    "https://pathfinder-backend-production-2606.up.railway.app/api/routes/calculate-route"
  );

  return response.data;
};