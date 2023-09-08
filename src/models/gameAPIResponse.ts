import Genre from "./genreAPIResponse";
import Publisher from "./publisherAPIResponse";
import Platform from "./paltformAPIResponse";

export default interface Game {
  id: number;
  genres: Genre[];
  publishers: Publisher[];
  slug: string;
  description_raw: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  platforms: Platform[];
  parent_platforms: { platform: Platform }[];
}
