import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import Key from "./Key";

function Numpad({ handleKeySelect }) {
  const handleKeyPress = (e) => {
    console.log(e);
  };
  return (
    <Grid
      h="100%"
      w="100%"
      templateColumns="repeat(4, 1fr)"
      templateRows="repeat(5, 1fr)"
      gap="1rem"
    >
      <Key handleKeySelect={handleKeySelect} inscription={7} />
      <Key handleKeySelect={handleKeySelect} inscription={8} />
      <Key handleKeySelect={handleKeySelect} inscription={9} />
      <Key
        handleKeySelect={handleKeySelect}
        size="20px"
        color="secondary"
        textColor="secondary"
        inscription="DEL"
      />
      <Key handleKeySelect={handleKeySelect} inscription={4} />
      <Key handleKeySelect={handleKeySelect} inscription={5} />
      <Key handleKeySelect={handleKeySelect} inscription={6} />
      <Key handleKeySelect={handleKeySelect} inscription="+" />
      <Key handleKeySelect={handleKeySelect} inscription={1} />
      <Key handleKeySelect={handleKeySelect} inscription={2} />
      <Key handleKeySelect={handleKeySelect} inscription={3} />
      <Key handleKeySelect={handleKeySelect} inscription="-" />
      <Key handleKeySelect={handleKeySelect} inscription="." />
      <Key handleKeySelect={handleKeySelect} inscription={0} />
      <Key handleKeySelect={handleKeySelect} inscription="/" />
      <Key handleKeySelect={handleKeySelect} inscription="*" />
      <Key
        handleKeySelect={handleKeySelect}
        size="20px"
        color="secondary"
        textColor="secondary"
        colspan={2}
        inscription="RESET"
      />
      <Key
        handleKeySelect={handleKeySelect}
        color="tertiary"
        textColor="tertiary"
        colspan={2}
        inscription="="
      />
    </Grid>
  );
}

export default Numpad;
