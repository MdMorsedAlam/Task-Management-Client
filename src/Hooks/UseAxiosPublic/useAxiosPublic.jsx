import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:1212",
});
// https://task-management-server-eta-liart.vercel.app
// http://localhost:1212
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
