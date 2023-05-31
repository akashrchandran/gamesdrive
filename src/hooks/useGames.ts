import { Game, Platform } from "../models/gameAPIResponse";
import { Genre } from "../models/genreAPIResponse";
import useData from "./useData";

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => { 
  let platforms = null;
  if (selectedPlatform?.id === 2)
    platforms = "187, 18, 16, 15, 27, 19, 17";
  else
    platforms = selectedPlatform?.id;
  return useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: platforms
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );
};
export default useGames;
