import Header from '../Header';
import Footer from '../Footer';

import {
  ContainerContent
} from './styled';

function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <ContainerContent>{children}</ContainerContent>
      <Footer></Footer>
    </>
  );
}

export default Layout;