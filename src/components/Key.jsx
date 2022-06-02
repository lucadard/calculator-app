import React from "react";
import { GridItem, Box, Text } from "@chakra-ui/react";

function Key({
  inscription,
  colspan = 1,
  color = "main",
  textColor = "main",
  size = "",
  handleKeySelect,
}) {
  return (
    <GridItem colSpan={colspan}>
      <Box bg={`key.${color}_shadow`} borderRadius="10" h="100%">
        <Text
          h="90%"
          w="100%"
          borderRadius="10"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color={`text.${textColor}`}
          fontSize={size}
          bg={`key.${color}`}
          cursor="pointer"
          _active={{
            bg: `key.${color}_shadow`,
            mt: "2px",
          }}
          onClick={() => handleKeySelect(inscription)}
        >
          {inscription}
        </Text>
      </Box>
    </GridItem>
  );
}

export default Key;
