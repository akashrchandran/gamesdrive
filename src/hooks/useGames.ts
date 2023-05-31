import { Game } from "../models/gameAPIResponse";
import useData from "./useData";


export interface Platform { 
  id: number;
  metacritic: number;
}

const useGames = () => useData<Game>('/games');

export default useGames;