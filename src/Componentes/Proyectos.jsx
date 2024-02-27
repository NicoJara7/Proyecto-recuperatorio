import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import ProyectoStyle from '../Css/proyecto.module.css';

const Proyectos = () => {
  const [proyectoData, setProyectoData] = useState([]);
  const [nuevoNombreProyecto, setNuevoNombreProyecto] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  useEffect(() => {

    const fetchProyectosData = () => {
      const storageProyectos = JSON.parse(localStorage.getItem('proyectos')) || [];
      setProyectoData(storageProyectos);
    };


    fetchProyectosData();
  }, []);

  useEffect(() => {

    localStorage.setItem('proyectos', JSON.stringify(proyectoData));
  }, [proyectoData]);

  const agregarProyecto = () => {
    setMostrarFormulario(true);
  };

  const subirProyecto = () => {
    if (nuevoNombreProyecto.trim() === '') {
      toast.error('Por favor, ingrese un nombre para el proyecto');
      return;
    }

    const nuevoProyecto = { id: Date.now(), title: nuevoNombreProyecto };
    setProyectoData([...proyectoData, nuevoProyecto]);
    setNuevoNombreProyecto('');
    setMostrarFormulario(false);

    // Mostrar notificación
    toast.success('Proyecto agregado con éxito');
  };

  const eliminarProyecto = (proyectoId) => {

    const actualizarProyectos = proyectoData.filter((proyecto) => proyecto.id !== proyectoId);
    setProyectoData(actualizarProyectos);
  };

  return (
    <div className={ProyectoStyle.body}>
      <nav>
        <Link to="/">Ir a Home</Link>
      </nav>
      <h2 className={ProyectoStyle.h2proyecto}>Mis Proyectos</h2>
      {mostrarFormulario ? (
        <div className={ProyectoStyle.subirProyecto}>
          <input
            type="text"
            placeholder="Nombre del nuevo proyecto"
            value={nuevoNombreProyecto}
            onChange={(e) => setNuevoNombreProyecto(e.target.value)}
          />
          <button onClick={subirProyecto}>Subir Proyecto</button>
        </div>
      ) : (
        <div className={ProyectoStyle.lista}>
          {proyectoData.length > 0 ? (
            <ul>
              {proyectoData.map((proyecto) => (
                <li key={proyecto.id} >
                  <h3>{proyecto.title}</h3>
                  <button onClick={() => eliminarProyecto(proyecto.id)}>Eliminar Proyecto</button>
                </li>
              ))}
            </ul>
          ) : (
            <p className={ProyectoStyle.parrafo}>No hay proyectos disponibles</p>
          )}
          <button className={ProyectoStyle.agg} onClick={agregarProyecto}>Agregar Proyecto</button>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default Proyectos;