import { useEffect, useState } from "react";
import apiClient from "../services/api-helper";
import { FetchGamesResponse, Game } from "../models/apiResponse";
import { CanceledError } from "axios";


const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal})
        .then(res => setGames(res.data.results))
        .catch(err => {
            if (err instanceof CanceledError) {
              return;
            }
            setError(err);
        })

        return () => controller.abort();
    }, []);
    
    return { games, error };
}

export default useGames