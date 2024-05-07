import { Button, Heading, Text } from "@pegasus-ui/react";
import { NextSeo } from "next-seo";

import previewImage from "../../assets/app-preview.jpg";
import Image from "next/image";
import { Container, Hero, List, Preview, ListContainer } from "./styles";
import { useRouter } from "next/router";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export default function Search() {
  const router = useRouter();

  const { data: people } = useQuery<Person[]>([], async () => {
    const response = await api.get(`/person/people`);

    return response.data;
  });

  return (
    <>
      <NextSeo
        title="Encontre uma pessoa | Localiza.rs"
        description="Uma corrente de solidariedade para localizar pessoas prejudicadas
        pelas enchentes no Rio Grande do Sul."
      />

      <ListContainer>
        <Heading as="h2" size="3xl">
          Todas as pessoas
        </Heading>

        <List>
          {people &&
            people.map((person, index) => {
              return (
                <Text key={person.name} size="xl">
                  {person.cpf} - {person.name} - {person.temporary_house}
                </Text>
              );
            })}
        </List>
      </ListContainer>
    </>
  );
}
