import { Box, Flex, HStack, IconButton, useDisclosure } from "@chakra-ui/react"
import { useColorModeValue } from "./color-mode"
export function NavBar() {
  const navBg = useColorModeValue("gray.100", "gray.900");
  const { open, onOpen, onClose } = useDisclosure()
  return (
    <Box bg={navBg} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack gap={8} alignItems="center">
          <Box>Logo</Box>
          <HStack as="nav" gap={4} display={{ base: "none", md: "flex" }}>

          </HStack>
        </HStack>
      </Flex>
    </Box>
  )
}
