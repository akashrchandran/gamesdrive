import { Button, HStack, useColorMode } from "@chakra-ui/react";
import { BsSun, BsMoon } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Button onClick={toggleColorMode} type="button">
        {colorMode === "dark" ? <BsSun /> : <BsMoon />}
      </Button>
    </HStack>
  );
};

export default ColorModeSwitch;
