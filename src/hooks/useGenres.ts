import useData from "./useData";
import { Genre } from "../models/genreAPIResponse";

const useGenres = () => useData<Genre>('/genres');

export default useGenres;