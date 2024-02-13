import Header from "./components/shared/Header";
import Descricao from "./components/shared/Descricao";
import FormularioCadastro from "./components/shared/FormularioCadastro";
import SelecaoEspecial from "./components/shared/SelecaoEspecial";
import Compartilhar from "./components/shared/Compartilhar";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <main>
          <Descricao></Descricao>
          <FormularioCadastro></FormularioCadastro>
          <SelecaoEspecial></SelecaoEspecial>
          <Compartilhar></Compartilhar>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App;
