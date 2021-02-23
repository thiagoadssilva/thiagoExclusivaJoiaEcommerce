import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import {
  Container,
  ContainerHeader,
  ContainerMenus,
  ContainerTitle,
  ContainerSearch,
  ContainerCartCall,
  ContainerInput,
  ContainerSearchIcon,
  ContainerCall,
  ContainerCart,
  ContainerInputMobile,
  ContainerSearchMobile,
} from './styled';

function Header() {
  return (
    <Container>

      <ContainerHeader>

        <ContainerTitle>EXCLUSIVA JOIA</ContainerTitle>

        <ContainerSearch>
          <ContainerInput placeholder="O que você procura?" />
          <ContainerSearchIcon>
            <FontAwesomeIcon icon="search" />
          </ContainerSearchIcon>
        </ContainerSearch>

        <ContainerCartCall>
          <ContainerCall>
            <FontAwesomeIcon icon="envelope" /> Atendimento
          </ContainerCall>
          <ContainerCart>
            <FontAwesomeIcon icon="shopping-cart" /> Minha sacola (0)
          </ContainerCart>
        </ContainerCartCall>

        <ContainerSearchMobile>
          <ContainerInputMobile placeholder="O que você procura?" />
        </ContainerSearchMobile>

      </ContainerHeader>



      <ContainerMenus>
        todos os menus vai ser um componente?
      </ContainerMenus>
    </Container>
  );
}

export default Header;