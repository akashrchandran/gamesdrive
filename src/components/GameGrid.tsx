import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const skeletons = [1, 2, 3, 4, 5, 6];
  const { games, error, isLoading } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} padding={10} spacing='20px'>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {games.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
