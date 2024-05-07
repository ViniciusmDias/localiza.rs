import { Button, Heading, Text, TextInput } from "@pegasus-ui/react";
import { Container, Form, FormError, Header } from "./styles";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { api } from "../../lib/axios";
import { AxiosError } from "axios";
import { NextSeo } from "next-seo";

const registerFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome precisa ter pelo menos 3 letras." }),
  cpf: z
    .string()
    .min(3, { message: "O lado precisa ter pelo menos 3 letras." }),
  temporary_house: z
    .string()
    .min(3, { message: "O lado precisa ter pelo menos 3 letras." }),
});

type RegisterFormData = z.infer<typeof registerFormSchema>;

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });

  const router = useRouter();

  async function handleRegister(data: RegisterFormData) {
    try {
      await api.post("/person", {
        name: data.name,
        cpf: data.cpf,
        temporary_house: data.temporary_house,
      });

      await router.push("/");
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        alert(err.response.data.message);
        return;
      }
      console.log(err);
    }
  }

  return (
    <>
      <NextSeo title="Cadastre uma pessoa | Localiza.rs" />
      <Container>
        <Header>
          <Heading as="strong">Localiza.rs!</Heading>
          <Text>
            Uma corrente de solidariedade para localizar pessoas prejudicadas
            pelas enchentes no Rio Grande do Sul.
          </Text>
        </Header>
        <Form as="form" onSubmit={handleSubmit(handleRegister)}>
          <label>
            <Text size="sm">Nome</Text>
            <TextInput placeholder="Seu nome" {...register("name")} />
            {errors.name && (
              <FormError size="sm">{errors.name.message}</FormError>
            )}
          </label>
          <label>
            <Text size="sm">CPF (Não Obrigatório)</Text>
            <TextInput placeholder="CPF" {...register("cpf")} />
            {errors.name && (
              <FormError size="sm">{errors.name.message}</FormError>
            )}
          </label>
          <label>
            <Text size="sm">Abrigo temporário</Text>
            <TextInput
              placeholder="Nome do abrigo"
              {...register("temporary_house")}
            />
            {errors.name && (
              <FormError size="sm">{errors.name.message}</FormError>
            )}
          </label>
          <Button type="submit" disabled={isSubmitting}>
            Cadastrar <ArrowRight />
          </Button>
        </Form>
      </Container>
    </>
  );
}
