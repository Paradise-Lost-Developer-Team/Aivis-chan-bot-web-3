"use client"
import { Button, Flex, Box, Stack, Input } from "@chakra-ui/react"
import React from "react"
export default function Register() {
    const [username, setUsername] = React.useState("")
    const handleClick = async () => {
        const resp = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username })
        })
        const publicKey = await resp.json()
        
        publicKey.challenge = Uint8Array.from(Object.values(publicKey.challenge)).buffer
        publicKey.user.id = Uint8Array.from(Object.values(publicKey.user.id)).buffer
        const authResponse = await navigator.credentials.create({ publicKey })
        console.log(authResponse.id)
        const regResponse = await fetch("/api/users", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                id: authResponse.id,
                
            })
        })
    }
    return ( 
        <Flex height="100vh" alignItems="center" justifyContent="center" flexDirection="column" gap={8}>
            <Box>
                <Stack gap={4} direction="row" align="center">
                    <Input onKeyUp={(event) => setUsername(event.currentTarget.value)} placeholder="Username"/>
                    <Button colorScheme="teal" variant="solid" onClick={handleClick}>
                        Register
                    </Button>
                </Stack>
            </Box>
        </Flex>
    )
}