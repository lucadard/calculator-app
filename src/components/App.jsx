import { Box, Flex, Text } from "@chakra-ui/react";
import { useState, useCallback, useEffect } from "react";
import { evaluate } from "mathjs";

import ThemeToggler from "./ThemeToggler";
import Numpad from "./Numpad";

function App({ onThemeChange }) {
  const [output, setOutput] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  const handleKeySelect = (key) => {
    if (key === "DEL") return deleteLastDigit();
    if (key === "RESET") return cleanScreen();
    if (key === "=") return evaluateCurrExpression();
    if (key === "x" || key === "/" || key === "+" || key === "-")
      return insertOperando(key);
    return insertDigit(key);
  };

  const insertDigit = (key) => {
    if (isFinished) {
      setIsFinished(false);
      return typeof key === "number"
        ? setOutput(key)
        : setOutput(`${output}${key}`);
    }
    output === null
      ? typeof key === "number"
        ? setOutput(key)
        : setOutput(`0${key}`)
      : setOutput(`${output}${key}`);
  };

  const deleteLastDigit = () => {
    if (output === null) return;
    output.length > 1
      ? setOutput(output.slice(0, output.length - 1))
      : setOutput(null);
  };

  const cleanScreen = () => {
    setOutput(null);
  };

  const evaluateCurrExpression = () => {
    setOutput(`${evaluate(output)}`);
    setIsFinished(true);
  };

  const insertOperando = (key) => {
    if (output === null) return insertDigit(key);
    let lastDigit = null;
    if (output.toString().length === 1) lastDigit = output;
    else lastDigit = output.slice(-1);
    lastDigit === "x" ||
    lastDigit === "/" ||
    lastDigit === "+" ||
    lastDigit === "-"
      ? setOutput(`${output.slice(0, output.length - 1)}${key}`)
      : insertDigit(key);
  };

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);
  const escFunction = ({ key }) => {
    console.log(output)
    if (key === "Enter") handleKeySelect("=");
    // handleKeySelect(key);
  };

  return (
    <Flex h="100vh" bg="bg.main" justify="center">
      <Flex w={{ base: "90%", md: "50%" }} direction="column" mt="5">
        <Flex h="100" align="center" justify="space-between">
          <Text fontSize="5xl" color="text.logo">
            calc
          </Text>
          <ThemeToggler onThemeChange={onThemeChange} />
        </Flex>
        <Flex
          borderRadius="10"
          h="100"
          bg="bg.screen"
          mb="5"
          justify="end"
          p="5"
        >
          <Text
            display="flex"
            alignItems="center"
            color="text.screen"
            fontSize="5xl"
          >
            {output === null ? "0" : output}
          </Text>
        </Flex>
        <Box borderRadius="10" h="400" bg="bg.keypad" p="5">
          <Numpad handleKeySelect={handleKeySelect} />
        </Box>
      </Flex>
    </Flex>
  );
}

export default App;
