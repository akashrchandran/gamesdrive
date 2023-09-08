export interface FetchGamesResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}
export interface Platform {
  id: number;
  slug: string;
  name: string;
}
export interface Game {
  id: number;
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
