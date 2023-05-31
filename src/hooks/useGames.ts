import { GameQuery } from "../App";
import { Game } from "../models/gameAPIResponse";
import useData from "./useData";

const useGames = (
  gameQuery: GameQuery
) => { 
  let platforms = null;
  if (gameQuery.platform?.id === 2)
    platforms = "187, 18, 16, 15, 27, 19, 17";
  else
    platforms = gameQuery.platform?.id;
  return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: platforms,
        ordering: gameQuery.sortOrder
      },
    },
    [gameQuery]
  );
};
export default useGames;
