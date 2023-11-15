import { useState } from "react";
import { Box, Stack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

interface StarRatingProps {
  totalStars?: number;
  defaultRating?: number;
  onRating?: (rating: number) => void;
}

const StarRating = ({
  totalStars = 5,
  defaultRating = 0,
  onRating,
}: StarRatingProps) => {
  const [rating, setRating] = useState(defaultRating);

  const handleRating = (rate: number) => {
    setRating(rate);
    if (onRating) {
      onRating(rate);
    }
  };

  return (
    <Stack direction="row">
      {[...Array(totalStars)].map((_, index) => (
        <Box as="button" key={index} onClick={() => handleRating(index + 1)}>
          <StarIcon color={index < rating ? "yellow.400" : "gray.300"} />
        </Box>
      ))}
    </Stack>
  );
};

export default StarRating;
