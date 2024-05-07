import { Button, Heading, Text } from "@pegasus-ui/react";
import { NextSeo } from "next-seo";

import previewImage from "../../assets/app-preview.jpg";
import Image from "next/image";
import {
  Container,
  Hero,
  List,
  Preview,
  ListContainer,
  InputContainer,
  Input,
} from "./styles";
import { useRouter } from "next/router";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { Suspense, useState } from "react";

export default function Search({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const [people, setPeople] = useState<Person[]>([]);
  const [person, setPerson] = useState<Person>();

  const { data: allPeople } = useQuery<Person[]>([], async () => {
    const response = await api.get(`/person/people`);

    setPeople(response.data);
    return response.data;
  });

  function findPerson(typedValue: string) {
    const foundPerson = people.find((person) =>
      person.name.toLowerCase().includes(typedValue.toLowerCase())
    );

    console.log(foundPerson, "founded person");

    setPerson(foundPerson);
  }

  return (
    <>
      <NextSeo
        title="Encontre uma pessoa | Localiza.rs"
        description="Uma corrente de solidariedade para localizar pessoas prejudicadas
        pelas enchentes no Rio Grande do Sul."
      />

      <ListContainer>
        <Heading as="h2" size="3xl">
          Busque por alguém
        </Heading>
        <InputContainer>
          <Input
            type="text"
            onChange={(event) => findPerson(event.target.value)}
          />
        </InputContainer>
        <List>
          {person && (
            <Text key={person.name} size="xl">
              {person.cpf} - {person.name} - {person.temporary_house}
            </Text>
          )}
        </List>

        <Heading as="h2" size="3xl">
          Todas as pessoas cadastradas
        </Heading>
        <List>
          {allPeople &&
            allPeople.map((person, index) => {
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
