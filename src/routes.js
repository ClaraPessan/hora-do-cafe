import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Cabecalho from "./componentes/Cabecalho";
import Login from "./pages/Login";
import Cardapio from "./pages/Cardapio";
import UsuarioProvider from "./contexts/Usuario";
import CarrinhoProvider from "./contexts/Carrinho";
import { PagamentoProvider } from "./contexts/Pagamento";
import Carrinho from "./pages/Carrinho";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho/>
      <UsuarioProvider>    
        <CarrinhoProvider>
          <PagamentoProvider>
            <Routes>
              <Route path="/" element={<Inicio/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/cardapio" element={<Cardapio/>} />
              <Route path="/carrinho" element={<Carrinho/>}/>
            </Routes>
          </PagamentoProvider>
        </CarrinhoProvider>    
      </UsuarioProvider> 
    </BrowserRouter>
  );
}

export default AppRoutes;
