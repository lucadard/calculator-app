import React from "react";
import {
  Flex,
  Text,
  Slider,
  SliderTrack,
  Box,
  SliderThumb,
} from "@chakra-ui/react";

function ThemeToggler({ onThemeChange }) {
  return (
    <Flex fontSize="20px" mr="1rem" mt='-1.5rem' gap="3rem" align="end">
      <Text mt=".15rem" color="text.logo">
        THEME
      </Text>
      <Flex direction="column">
        <Flex ml="-.25rem" color="text.logo" justify="space-between" gap="1rem">
          <Text>1</Text>
          <Text>2</Text>
          <Text>3</Text>
        </Flex>
        <Slider
          onChange={(selection) => onThemeChange(selection)}
          h="2rem"
          w="3rem"
          defaultValue={1}
          min={1}
          max={3}
        >
          <SliderTrack w="100%" h="100%" bg="" />
          <Box
            top="0"
            left="50%"
            transform="translate(-50%, 0)"
            position="absolute"
            w="170%"
            h="100%"
            bg="bg.keypad"
            borderRadius="1rem"
          />
          <SliderThumb
            _focus={{ boxShadow: "none" }}
            boxSize={5}
            bg="key.tertiary"
          />
        </Slider>
      </Flex>
    </Flex>
  );
}

export default ThemeToggler;
