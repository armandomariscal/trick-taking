import { Box, Text } from "@chakra-ui/react";
import type { Card } from "./types";

export default function CardItem({ card }: { card: Card }) {
  const getContent = () => {
    switch (card.type) {
      case "number":
        return `${card.value.toString().padStart(2, "0")} ${card.suit}`;
      case "devOps":
        return "DevOps 🔴";
      case "frontend":
        return card.name ? `Frontend (${card.name}) 🔵` : "Frontend 🔵";
      case "backend":
        return "Backend 🟢";
      case "core":
        return "Core 🟡";
    }
  };

  const getTextColor = () => {
    if (card.type === "devOps") return "black";
    if (card.type === "number" && card.suit === "white") return "black";
    return "white";
  };

  const getBg = () => {
    switch (card.type) {
      case "number":
        const suitColors = {
            orange: "orange.400",
            purple: "purple.500",
            white: "gray.300",
            black: "gray.800",
        };
        return suitColors[card.suit];
      case "devOps":
        return "white";
      case "frontend":
        return "purple.600";
      case "backend":
        return "teal.400";
      case "core":
        return "black";
    }
  };

  return (
    <Box
      bg={getBg()}
      color={getTextColor()}
      p={4}
      borderRadius="lg"
      boxShadow="lg"
      border="2px solid"
      borderColor="whiteAlpha.300"
      _hover={{ transform: "scale(1.05)" }}
      transition="0.2s"
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH="80px"
      cursor="pointer"
    >
      <Text>{getContent()}</Text>
    </Box>
  );
}