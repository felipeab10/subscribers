import { Box, Button, Flex, Grid, GridItem, Heading, Stack, Text, Link, HStack } from "@chakra-ui/react";
import { Input } from "../components/utils/Input";
import { Link as ReactLink } from 'react-router-dom';

export function SingIn() {
    return (
        <Flex
            w="100vw"
            maxWidth={1100}
            justify="center"
            align="center"
            mx="auto"
            height="100vh"
        >
            <Grid templateColumns={["1fr", "1fr 1fr"]} >
                <GridItem>
                    <Flex height="100%" align='center'>
                        <Stack spacing={8} ml={["4", ""]}  >
                            <Box  >
                                <Heading as="span" >Subs</Heading>
                                <Heading color="blue.900" as="span" >criber</Heading>
                            </Box>
                            <Heading>Faça seu login na plataforma</Heading>
                        </Stack>
                    </Flex>
                </GridItem>
                <GridItem w="100%" maxWidth={480}>
                    <Flex bg="gray.700" m={["2", ""]} py="10" flexDirection="column">
                        <Stack spacing="8">
                            <Stack spacing={4} w="22rem" mx="auto" >
                                <Input _placeholder={{ color: 'gray.400', fontSize: '14px' }} name="email" type="email" label="E-mail" />
                                <Input _placeholder={{ color: 'gray.400', fontSize: '14px' }} name="password" type="password" label="Senha" />
                            </Stack>
                            <Flex  >
                                <Stack spacing={4} w="100%" justify="center" align="center">
                                    <Button w="22rem" bg="blue.900" transition="filter 0.2s" _hover={{ filter: "brightness(0.9)" }} type="submit">Entrar</Button>
                                    <HStack >
                                        <Text fontWeight="light">Não tem uma conta?</Text>
                                        <Link transition="filter 0.2s" color="blue.900" fontSize="lg" fontWeight="bold" _hover={{ textDecoration: 'none', filter: "brightness(0.9)" }} as={ReactLink} to="/register">Registre-se</Link>
                                    </HStack>
                                </Stack>
                            </Flex>
                        </Stack>
                    </Flex>
                </GridItem>
            </Grid>

        </Flex>
    );
}

