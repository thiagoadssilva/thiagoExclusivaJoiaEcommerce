
import {
  Container,
  ContainerHeader,
  ContainerMenus,
  ContainerTitle,
  ContainerSearch,
  ContainerCartCall
} from './styled';

function Header() {
  return (
    <Container>
      
      <ContainerHeader>
        <ContainerTitle>EXCLUSIVA JOIA</ContainerTitle>
        <ContainerSearch>search</ContainerSearch>
        <ContainerCartCall>Atendimento / minha sacola(0)</ContainerCartCall>
      </ContainerHeader>

      <ContainerMenus>MENUS</ContainerMenus>
    </Container>
  );
}

export default Header;