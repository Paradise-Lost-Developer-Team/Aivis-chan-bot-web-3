import { Box, Button, Flex, Input, Stack } from "@chakra-ui/react"

export default function Login() {
    const handleClick = async () => {
        const credential = await navigator.credentials.get({
        })
    }
    return (
        <Flex justifyContent="center" alignItems="center" height="100vh" flexDirection="column" gap={8}>
            <Box>
                <Stack>
                    <Button colorScheme="teal" variant="solid" onClick={handleClick}>
                        Login
                    </Button>
                </Stack>
            </Box>
        </Flex>
    )
}