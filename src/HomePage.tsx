
import React, { useState } from 'react';


import { Box, Heading, Text, Button, Editable, EditablePreview, EditableInput, Flex, Grid, GridItem,
} from "@chakra-ui/react";

import {Bloque} from "./models/Bloque.tsx";
import {BloqueComponent} from "./Componentes/BloqueComponent.tsx";

export default function HomePage(){
    
    const [bloques, setBloques] = useState<Bloque[]>([])

    return(
            <Flex direction={'column'} gap={8}>
                <Flex direction={'row'} gap={5}>
                    <Text as={'h1'}> Song Name: </Text>
                    <Editable defaultValue='Click Here' as={'h1'}>
                        <EditablePreview />
                        <EditableInput />
                    </Editable>
                </Flex>
                <Flex gap={5}>
                    <Text as={'h2'} fontSize="2xl" fontWeight="bold" > Author or Singer</Text>
                    <Editable defaultValue='Click Here' as={'h2'}>
                        <EditablePreview fontSize="2xl" fontWeight="bold"/>
                        <EditableInput fontSize="2xl" fontWeight="bold"/>
                    </Editable>
                </Flex>

                <Button colorScheme="teal" size="lg">
                    Add Block
                </Button>

                <Grid templateColumns='repeat(5, 1fr)' gap={6} >
                    <GridItem w='100%' h='10'  >
                        <Heading> X </Heading>
                    </GridItem>
                    <GridItem w='100%' h='10' >
                        <BloqueComponent/>
                    </GridItem>
                </Grid>
            </Flex>
    );
}

//export default HomePage;