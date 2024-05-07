import { HeaderContainer, LinkTo } from "./styles";
import { Heading } from "@pegasus-ui/react";

export function Header() {
  return (
    <HeaderContainer>
      <LinkTo href="/">
        <Heading as="h3">Cadastrar alguém</Heading>
      </LinkTo>
      <LinkTo href="/search">
        <Heading as="h3">Localizar alguém</Heading>
      </LinkTo>
    </HeaderContainer>
  );
}
