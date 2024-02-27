import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Componentes/Inicio";
import Proyectos from "./Componentes/Proyectos";
import Contacto from "./Componentes/Contacto";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route
            path="/"
            index
            element={
              <Inicio/>
            }
          ></Route>
            <Route
              path="proyectos"
              element={
                <Proyectos/>
              }
            />
            <Route
              path="contacto"
              element={
                <Contacto/>
              }
            />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
