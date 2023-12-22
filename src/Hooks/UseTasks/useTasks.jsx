import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../UseAxiosPublic/useAxiosPublic";
import useAuth from "../UseAuth/useAuth";

const useTasks = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const {
    data: taskss = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["tasks",user?.email],
    queryFn: async () => {
      const res = await axiosPublic(`/tasks/${user.email}`, {email:"user?.email"} );
      return res.data;
    },
  });
  return [taskss, loading, refetch];
};

export default useTasks;
