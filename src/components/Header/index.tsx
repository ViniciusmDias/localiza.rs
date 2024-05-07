import { HeaderContainer, LinkTo } from './styles'
import logoImg from '../../assets/app-preview.jpg'
import Image from 'next/image'
import { Heading } from '@pegasus-ui/react'

export function Header() {
  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" width={56} height={56} />
      <LinkTo href="/">
        <Heading as="h3">Home</Heading>
      </LinkTo>
      <LinkTo href="/register">
        <Heading as="h3">Cadastrar jogador</Heading>
      </LinkTo>
      <LinkTo href="/online-stage">
        <Heading as="h3">Etapa atual</Heading>
      </LinkTo>
    </HeaderContainer>
  )
}
