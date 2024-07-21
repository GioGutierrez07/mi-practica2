import React from 'react'; //imorta bibleoteca react para trabajar 
import Contador from './componentes/Contador'; //importa el componente contador desde la carpeta componentes 
import CambiarImagen from './componentes/CambiarImagen'; //importa cambiarimagen desde la carpeta componentes
import CambiarColorFondo from './componentes/CambiarColorFondo'; //importa cambiarfondo desde la carpeta 

function App() { //define un componente llamado app 
  return ( //Indica lo que el componente App debe renderizar
    // Envuelve todos los elementos del componente App.
    //muestra el titulo de la pantalla 
    <div>
      <h1>Ejemplo de useState y useEffect</h1>
      /**contador  Renderiza el componente */
      <Contador /> 
      /**Renderiza el componente cambiarimagen*/
      <CambiarImagen />
      /**Renderiza el componente CambiarColorFondo*/
      <CambiarColorFondo />
    </div>
  );
}
// Exporta el componente App como la predeterminada 
export default App;

