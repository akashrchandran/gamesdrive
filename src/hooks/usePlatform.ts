import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-helper";


const apiClient = new APIClient('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h,
    initialData: { count: platforms.length, results: platforms }
  });

export default usePlatforms;
