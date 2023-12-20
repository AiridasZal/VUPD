import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import {
  Box,
  Flex,
  IconButton,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { FaTrash, FaCheckCircle } from "react-icons/fa";
import useFetchReports from "../hooks/useFetchReports";
import PageLoader from "../components/PageLoader";

const DashboardPage = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const { data: reports, isLoading, isError, error } = useFetchReports();
  const toast = useToast();

  const handleApiResponse = (response) => {
    if (response.status === 200) {
      toast({
        title: "Success",
        description: "Operation successful",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleApiError = (error) => {
    toast({
      title: "Error",
      description: error.message || "Something went wrong",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleResolve = async (reportId) => {
    try {
      const token = await getAccessTokenSilently();
      const response = await axios.post(
        `http://localhost:6060/reports/resolve/${reportId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      handleApiResponse(response);
    } catch (error) {
      handleApiError(error);
    }
  };

  const handleDelete = async (reportId, reviewId) => {
    try {
      const token = await getAccessTokenSilently();
      const resolveResponse = await axios.post(
        `http://localhost:6060/reports/resolve/${reportId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      handleApiResponse(resolveResponse);

      const deleteResponse = await axios.delete(
        `http://localhost:6060/reviews/${reviewId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      handleApiResponse(deleteResponse);
    } catch (error) {
      handleApiError(error);
    }
  };

  if (isError) {
    toast({
      title: "Error",
      description: error.message || "Failed to fetch reports",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  }

  if (isLoading) {
    return <PageLoader />;
  }

  if (!user) {
    return <Box>Loading user authentication...</Box>;
  }

  return (
    <Flex justify="center">
      <VStack spacing={4} align="stretch" m={5} maxW="6xl" w="100%">
        <Text fontSize="2xl" fontWeight="bold">
          Admin Dashboard
        </Text>
        {reports && reports.length > 0 ? (
          reports
            .filter((report) => !report.report.resolved) // Filter out resolved reports
            .map((report) => (
              <Box key={report.id} p={4} borderWidth="1px" borderRadius="lg">
                <Flex justifyContent="space-between" alignItems="center">
                  <Box>
                    <Text fontWeight="bold">
                      Reason: {JSON.parse(report.report.reason).reason}
                    </Text>
                    <Text
                      fontSize="sm"
                      wordBreak="break-word"
                      overflowWrap="break-word"
                    >
                      Review: {report.review.review}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      Reported At: {report.report.reportedAt}
                    </Text>
                  </Box>
                  <Flex>
                    <IconButton
                      icon={<FaCheckCircle />}
                      onClick={() => handleResolve(report.report.id)}
                      aria-label="Resolve Report"
                      colorScheme="green"
                      mr={2}
                    />
                    <IconButton
                      icon={<FaTrash />}
                      onClick={() =>
                        handleDelete(report.report.id, report.report.reviewId)
                      }
                      aria-label="Delete Review"
                      colorScheme="red"
                    />
                  </Flex>
                </Flex>
              </Box>
            ))
        ) : (
          <Text>No reports to display.</Text>
        )}
      </VStack>
    </Flex>
  );
};

export default DashboardPage;
