import { extendTheme } from "@chakra-ui/react";
import { gameThemes } from "./colors";

const theme = extendTheme({
  colors: {
    brand: gameThemes.red,
  },
});

export default theme;