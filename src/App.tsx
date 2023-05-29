import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`,
    }}>
      <GridItem area="nav" bgColor="red">
        nav
      </GridItem>
      <Show above="lg">
      <GridItem area="aside" bgColor="yellow">
        aside
      </GridItem>
      </Show>
      <GridItem area="main" bgColor="gold">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
