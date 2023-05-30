export interface FetchGamesResponse {
    count: number
    next: string
    previous: string
    results: Game[]
  }
  
  export interface Game {
    id: number
    slug: string
    name: string
    released: string
    tba: boolean
    background_image: string
    rating: number
    rating_top: number
    ratings_count: number
    reviews_text_count: string
    added: number
    metacritic: number
    playtime: number
    suggestions_count: number
    updated: string
    esrb_rating: EsrbRating
    platforms: Platform[]
  }
  
  export interface EsrbRating {
    id: number
    slug: string
    name: string
  }
  
  export interface Platform {
    platform: Platform2
    released_at: string
    requirements: Requirements
  }
  
  export interface Platform2 {
    id: number
    slug: string
    name: string
  }
  
  export interface Requirements {
    minimum: string
    recommended: string
  }
  