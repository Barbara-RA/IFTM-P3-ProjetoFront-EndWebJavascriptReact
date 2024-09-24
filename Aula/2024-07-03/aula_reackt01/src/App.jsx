import React from 'react';
import Apresentacao from './componentes/Apresentacao';
import Box from './componentes/Box';


// componete principal da página
function App() {
  // // 1° componente
  // const msg = React.createElement("h1",null,"Hello World!");
  // // parametro 1: tipo de elemento, parametro 2: propriedades, parametro 3: conteúdo
  // const nome = React.createElement("p",null,"Bárbara Ramos Alves");


  return (
    // coloca os <> </> para retornar um elemento pois ele precisa ter um pai para ser renderizado
    // sempre que quiser retornar uma variável dentro do return precisa colocar entre {}
    <>
    {/*msg*/}
    {/*nome*/}
    {/* <h1>Hello World!</h1>
    <p>Bárbara Ramos Alves</p> */}
    <Apresentacao/>
    <Box/>
    <Apresentacao/>
    <Box/>
    
    </>
   
  )
}

export default App
