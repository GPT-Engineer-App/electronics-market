import { Box, Container, Flex, Heading, Text, VStack, HStack, Image, Link, SimpleGrid, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">ElectroShop</Heading>
        <HStack spacing={8}>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="lg" mb={6}>Your one-stop shop for the latest electronics</Text>
        <Button colorScheme="blue" size="lg">Shop Now</Button>
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={20}>
        <Heading size="xl" textAlign="center" mb={10}>Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 1" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 1</Heading>
              <Text mb={4}>Description of product 1</Text>
              <Button colorScheme="blue">View Details</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 2" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 2</Heading>
              <Text mb={4}>Description of product 2</Text>
              <Button colorScheme="blue">View Details</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 3" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 3</Heading>
              <Text mb={4}>Description of product 3</Text>
              <Button colorScheme="blue">View Details</Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10} textAlign="center">
        <VStack spacing={4}>
          <HStack spacing={8}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Contact Us</Link>
          </HStack>
          <HStack spacing={4}>
            <Link href="#"><FaFacebook size="24" /></Link>
            <Link href="#"><FaTwitter size="24" /></Link>
            <Link href="#"><FaInstagram size="24" /></Link>
          </HStack>
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;