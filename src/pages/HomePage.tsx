import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import GenreList from '../components/GenreList'
import GameHeading from '../components/GameHeading'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'
import GameGrid from '../components/GameGrid'

const HomePage = () => {
    return (
        <Grid
            templateAreas={{
                base: `"main"`,
                lg: `"aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "250px 1fr",
            }}
        >
            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                    <GenreList />
                </GridItem>
            </Show>
            <GridItem area="main">
                <Box paddingLeft={10}>
                    <GameHeading />
                    <Flex marginBottom={5}>
                        <Box marginRight={5}>
                            <PlatformSelector />
                        </Box>
                        <SortSelector />
                    </Flex>
                </Box>
                <GameGrid />
            </GridItem>
        </Grid>
    )
}

export default HomePage