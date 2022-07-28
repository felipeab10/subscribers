import { Box, Button, Flex, Grid, GridItem, Heading, Stack } from "@chakra-ui/react";
import { Input } from "../components/utils/Input";

export function Register() {
    return (
        <Flex
            w="100vw"
            maxWidth={1100}
            height="100vh"
            justify="center"
            align="center"
            mx="auto"
        >
            <Grid templateColumns={["1fr", "1fr 1fr"]} >
                <GridItem>
                    <Flex bg="gray.800" w="100%" maxWidth={480} px="4" py="6" flexDirection="column">
                        <Stack spacing={4} w="100%">
                            <Input name="" label="Nome" isRequired type="text" />
                            <Input name="" label="E-mail" isRequired type="email" />
                            <Input name="" label="Senha" isRequired type="password" />
                        </Stack>
                        <Flex justify="center" mt="8">
                            <Button transition="filter 0.2s" bg="blue.900" width={300} _hover={{ filter: "brightness(0.9)" }} type="submit">Cadastrar</Button>
                        </Flex>
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex height="100%" align='center' mt={["4", ""]}>
                        <Stack spacing={8} ml={["4", ""]}  >
                            <Box  >
                                <Heading as="span" >Subs</Heading>
                                <Heading color="blue.900" as="span" >criber</Heading>
                            </Box>
                            <Heading fontSize="2xl">Cadastra-se é rápido e fácil</Heading>
                        </Stack>
                    </Flex>
                </GridItem>
            </Grid>


        </Flex>
    )
}