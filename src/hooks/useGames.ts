import { useEffect, useState } from "react";
import apiClient from "../services/api-helper";
import { FetchGamesResponse, Game } from "../models/apiResponse";
import { CanceledError } from "axios";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          return;
        }
        setError(err);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
