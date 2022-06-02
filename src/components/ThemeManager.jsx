import { useState } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import App from "./App";
import {
  baseThemeOverrides,
  secondThemeColors,
  thirdThemeColors,
} from "../theme";

const baseTheme = extendTheme(baseThemeOverrides);
const secondTheme = extendTheme({ colors: secondThemeColors }, baseTheme);
const thirdTheme = extendTheme({ colors: thirdThemeColors }, baseTheme);
const themes = [baseTheme, secondTheme, thirdTheme];

function ThemeManager() {
  const [currentTheme, setCurrentTheme] = useState(baseTheme);

  const onThemeChange = (selection) =>
    selection && setCurrentTheme(themes[selection - 1]);

  return (
    <ChakraProvider theme={currentTheme}>
      <App onThemeChange={onThemeChange} />
    </ChakraProvider>
  );
}

export default ThemeManager;
