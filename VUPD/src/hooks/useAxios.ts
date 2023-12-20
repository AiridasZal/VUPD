import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const useAxios = () => {
  const { getAccessTokenSilently } = useAuth0();

  const instance = axios.create({
    baseURL: "http://localhost:6060",
  });

  instance.interceptors.request.use(async (config) => {
    const accessToken = await getAccessTokenSilently();
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  });

  return instance;
};

export default useAxios;
