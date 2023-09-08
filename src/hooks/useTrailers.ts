import { useQuery } from '@tanstack/react-query';
import Trailer from '../models/trailerAPIResponse';
import APIClient from '../services/api-helper';

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(
    `/games/${gameId}/movies`
  );

  return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;