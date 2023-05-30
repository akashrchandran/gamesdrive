import { useEffect, useState } from "react"
import apiClient from '../services/apiHelper'
import { FetchGamesResponse, Game} from '../models/apiResponse'
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        apiClient.get<FetchGamesResponse>('/games')
        .then(res => setGames(res.data.results))
        .catch(err => setError(err.message))
    });
  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>
        
        {games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
    </>
  )
}

export default GameGrid