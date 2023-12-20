import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchReports = async (token) => {
  const response = await axios.get("http://localhost:6060/reports/all", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const useFetchReports = () => {
  const { getAccessTokenSilently } = useAuth0();

  return useQuery({
    queryKey: "reports",
    queryFn: async () => {
      const token = await getAccessTokenSilently();
      return fetchReports(token);
    },
  });
};

export default useFetchReports;
