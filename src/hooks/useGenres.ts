import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-helper';
import genres from '../data/genres';
import Genre from '../models/genreAPIResponse';
import ms from 'ms';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres
  });

export default useGenres;