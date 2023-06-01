import { Button, HStack, Text, useColorMode } from "@chakra-ui/react";
import { BsSun, BsMoon } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Button onClick={toggleColorMode} type="button">
        {colorMode === "dark" ? <BsSun />: <BsMoon /> }
      </Button>
      <Text whiteSpace="nowrap">
        {colorMode === "dark" ? "Dark" : "Light"} Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
