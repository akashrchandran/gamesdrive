import { useEffect, useState } from "react";
import apiClient from "../services/apiHelper";
import { FetchGamesResponse, Game } from "../models/apiResponse";


const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        apiClient.get<FetchGamesResponse>('/games')
        .then(res => setGames(res.data.results))
        .catch(err => setError(err.message))
    });
    
    return { games, error };
}

export default useGames