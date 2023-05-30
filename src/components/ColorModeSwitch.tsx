import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode == 'dark'} onChange={toggleColorMode}></Switch>
      <Text>{colorMode.charAt(0).toUpperCase() + colorMode.slice(1)} Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
