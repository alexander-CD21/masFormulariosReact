
import './App.css';
import { useState } from 'react';
import Formularios from './Componentes/Formularios/Formularios';

function App() {
  const [datos,setDatos] =useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    comfirmPassword: ""
  });
  return (
    <div className="App">
     <Formularios data={datos} setData={setDatos} /> 
     <div>
       <h1>Resultados </h1>
       <p>FirstName: {datos.firstName}</p>
       <p>LastName: {datos.lastName}</p>
       <p>email: {datos.email}</p>
       <p>password: {datos.password}</p>
       <p>comfirmPassword: {datos.comfirmPassword}</p>
     </div>
    </div>

    
  );
}

export default App;
