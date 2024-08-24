
import { Box, Heading, Text, Button
} from "@chakra-ui/react";

export default function HomePage(){
    
    return(
        <Box p={5}>
            <Heading as="h1" size="2xl" mb={4}>
                Welcome to My Page
            </Heading>
            <Text fontSize="xl" mb={4}>
                This is a simple home page using Chakra UI components.
            </Text>
            <Button colorScheme="teal" size="lg">
                Get Started
            </Button>
        </Box>
    );
}

//export default HomePage;