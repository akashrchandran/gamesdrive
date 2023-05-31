import { Game } from "../models/gameAPIResponse";
import { Genre } from "../models/genreAPIResponse";
import useData from "./useData";


export interface Platform { 
  id: number;
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;