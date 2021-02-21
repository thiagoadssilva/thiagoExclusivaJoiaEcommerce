import { Form, Button, FormControl } from 'react-bootstrap';

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
        <ContainerSearch>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button style={{backgroundColor: (props) => props.theme.colors.button}}>Pesquisar</Button>
            <Button style={{backgroundColor: (props) => props.theme.colors.button}}>Pesquisar</Button>
          </Form>
        </ContainerSearch>
        <ContainerCartCall>Atendimento / minha sacola(0)</ContainerCartCall>
      </ContainerHeader>

      <ContainerMenus>MENUS</ContainerMenus>
    </Container>
  );
}

export default Header;