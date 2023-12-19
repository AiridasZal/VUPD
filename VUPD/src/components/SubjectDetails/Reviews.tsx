import { Box, Text, Flex, IconButton } from "@chakra-ui/react";
import {
  FaThumbsUp,
  FaThumbsDown,
  FaEdit,
  FaTrash,
  FaRegThumbsDown,
  FaRegThumbsUp,
} from "react-icons/fa";
import { Review } from "../../entities/review";
import { useAuth0 } from "@auth0/auth0-react";

interface Props {
  reviews: Review[];
  currentUserId: string;
  onUpvote: (reviewId: string) => void;
  onDownvote: (reviewId: string) => void;
  onDelete: (reviewId: string) => void;
  onEdit: (review: Review) => void;
  sortType: string;
}

const Reviews = ({
  reviews,
  currentUserId,
  onUpvote,
  onDownvote,
  onDelete,
  onEdit,
  sortType,
}: Props) => {
  const isAuthor = (userId: string) => userId === currentUserId;
  const { isAuthenticated } = useAuth0();
  const userHasUpvoted = (review: Review) =>
    review.upvotedBy.includes(currentUserId);
  const userHasDownvoted = (review: Review) =>
    review.downvotedBy.includes(currentUserId);

  const sortedReviews = () => {
    switch (sortType) {
      case "newest":
        return [...reviews].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case "oldest":
        return [...reviews].sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      case "highestUpvote":
        return [...reviews].sort((a, b) => b.upvotes - a.upvotes);
      case "highestDownvote":
        return [...reviews].sort((a, b) => b.downvotes - a.downvotes);
      default:
        return reviews;
    }
  };

  return (
    <Box maxW="6xl" w="100%">
      {sortedReviews().map((review, index) => (
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
              isDisabled={!isAuthenticated}
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
              isDisabled={!isAuthenticated}
            />
            <Text>{review.downvotes}</Text>
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export default Reviews;
