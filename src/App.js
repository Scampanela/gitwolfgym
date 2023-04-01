import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ItemListContainer } from "./components/ItemListContainer/HomeView/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  
 

 
  
  return (
    <>
    <div> 
      <NavBar />
      {/* Primer metodo de props*/}
      <ItemListContainer greeting="Hola Mundo"/>
      
                      
    </div>
    </>
  );
}

export default App;
