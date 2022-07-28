import { Box, Button, Flex, Grid, GridItem, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { Input } from "../components/utils/Input";

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
            <Grid templateColumns={["1fr", "1fr 1fr"]} gap={1}>
                <GridItem>
                    <Stack spacing={8} ml={["4", ""]}>
                        <Box justifyContent="flex-start" >
                            <Heading as="span" >Subs</Heading>
                            <Heading color="blue.900" as="span" >criber</Heading>
                        </Box>
                        <Heading>Faça seu login na plataforma</Heading>
                    </Stack>
                </GridItem>
                <GridItem>
                    <Flex bg="gray.700" px="4" py="4" m={["2", ""]} flexDirection="column">
                        <Stack spacing="8">
                            <Stack spacing={4} >
                                <Input _placeholder={{ color: 'gray.400', fontSize: '14px' }} name="email" type="email" label="E-mail" placeholder="E-mail" />
                                <Input _placeholder={{ color: 'gray.400', fontSize: '14px' }} name="password" type="password" label="Senha" placeholder="Senha" />
                            </Stack>
                            <Button bg="blue.900" transition="filter 0.2s" _hover={{ filter: "brightness(0.9)" }} type="submit">Entrar</Button>
                        </Stack>
                    </Flex>
                </GridItem>
            </Grid>

        </Flex>
    );
}

