import { Box, Text, Flex, IconButton } from "@chakra-ui/react";
import { FaThumbsUp, FaThumbsDown, FaEdit, FaTrash } from "react-icons/fa";

interface Review {
  id: string;
  userId: string;
  review: string;
  upvotes: number;
  downvotes: number;
}

interface Props {
  reviews: Review[];
  currentUserId: string;
  onUpvote: (reviewId: string) => void;
  onDownvote: (reviewId: string) => void;
  onDelete: (reviewId: string) => void;
  onEdit: (review: Review) => void;
}

const Reviews = ({
  reviews,
  currentUserId,
  onUpvote,
  onDownvote,
  onDelete,
  onEdit,
}: Props) => {
  const isAuthor = (userId: string) => userId === currentUserId;

  return (
    <Box maxW="6xl" w="100%">
      {reviews.map((review, index) => (
        <Box key={index} mb={4} p={4} borderWidth="1px" borderRadius="lg">
          <Flex justifyContent="space-between">
            <Text fontWeight="bold">Anonymous</Text>
            {isAuthor(review.userId) && (
              <Flex>
                <IconButton
                  icon={<FaEdit />}
                  onClick={() => onEdit(review)}
                  mr={2}
                  aria-label="Edit Review"
                />
                <IconButton
                  icon={<FaTrash />}
                  onClick={() => onDelete(review.id)}
                  aria-label="Delete Review"
                />
              </Flex>
            )}
          </Flex>
          <Text mt={2}>{review.review}</Text>
          <Flex alignItems="center">
            <IconButton
              icon={<FaThumbsUp />}
              onClick={() => onUpvote(review.id)}
              mr={2}
              aria-label="Upvote"
            />
            <Text>{review.upvotes}</Text>
            <IconButton
              icon={<FaThumbsDown />}
              onClick={() => onDownvote(review.id)}
              ml={2}
              mr={2}
              aria-label="Downvote"
            />
            <Text>{review.downvotes}</Text>
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export default Reviews;
