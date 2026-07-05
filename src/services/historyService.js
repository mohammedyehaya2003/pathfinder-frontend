import axios from "axios";

export const getHistory = async () => {
  const response = await axios.get(
    "https://pathfinder-backend-production-2606.up.railway.app/api/history"
  );

  return response.data;
};