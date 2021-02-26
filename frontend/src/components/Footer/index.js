//import formPayment from '../../../public/favicon.ico';

import {
  Container,
  ContainerPagamento,
  ContainerRedesSociais
} from './styled';

function Footer() {
  return (
    <Container>
      
      <ContainerPagamento>
        Formas de Pagamento
        <img src="pag.png"/>
      </ContainerPagamento>

      EXCLUSIVA JOIA

      <ContainerRedesSociais>
        Nos siga nas redes sociais
      </ContainerRedesSociais>

    </Container>
  );
}

export default Footer;