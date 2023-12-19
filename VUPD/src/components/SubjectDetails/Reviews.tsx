import { Box, Text, Flex, IconButton } from "@chakra-ui/react";
import {
  FaThumbsUp,
  FaThumbsDown,
  FaEdit,
  FaTrash,
  FaRegThumbsDown,
  FaRegThumbsUp,
} from "react-icons/fa";

interface Review {
  id: string;
  userId: string;
  review: string;
  upvotes: number;
  downvotes: number;
  upvotedBy: string[];
  downvotedBy: string[];
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

  const userHasUpvoted = (review: Review) =>
    review.upvotedBy.includes(currentUserId);
  const userHasDownvoted = (review: Review) =>
    review.downvotedBy.includes(currentUserId);

  return (
    <Box maxW="6xl" w="100%">
      {reviews.map((review, index) => (
        <Box key={index} mb={4} p={4} borderWidth="1px" borderRadius="lg">
          <Flex justifyContent="space-between" mb={2}>
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
          <Text my={2}>{review.review}</Text>
          <Flex justifyContent="flex-end" mt={2} align="center">
            <IconButton
              icon={userHasUpvoted(review) ? <FaThumbsUp /> : <FaRegThumbsUp />}
              onClick={() => onUpvote(review.id)}
              mr={2}
              aria-label="Upvote"
            />
            <Text mr={2}>{review.upvotes}</Text>
            <IconButton
              icon={
                userHasDownvoted(review) ? (
                  <FaThumbsDown />
                ) : (
                  <FaRegThumbsDown />
                )
              }
              onClick={() => onDownvote(review.id)}
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
