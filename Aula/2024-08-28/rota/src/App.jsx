import React from 'react';
import Contato from './Componentes/Contato/Contato';
import Index from './Componentes/Index/Index';
import SobreNos from './Componentes/SobreNos/SobreNos';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './Componentes/Menu/Menu';



function App() {
  return (
    // <BrouserRouter/> gerenciador de rotas abre e fecha a tag
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobreNos" element={<SobreNos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;