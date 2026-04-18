import { SimpleGrid, Box } from "@chakra-ui/react";
import { createDeck } from "./deck";
import CardItem from "./CardItem";

const deck = createDeck();

export default function CardsGrid() {
  return (
    <Box p={6}>
      <SimpleGrid columns={[2, 4, 6, 8]} spacing={4}>
        {deck.map((card, index) => (
          <CardItem key={index} card={card} />
        ))}
      </SimpleGrid>
    </Box>
  );
}