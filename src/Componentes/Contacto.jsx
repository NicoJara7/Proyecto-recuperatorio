import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import contactoStyle from "../Css/contacto.module.css"

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const cambiarData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const enviarData = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.mensaje) {
      toast.error('Todos los campos son obligatorios');
      return;
    }


    console.log('Formulario enviado:', formData);

    toast.success('Formulario enviado con éxito');

    setFormData({
      nombre: '',
      email: '',
      mensaje: '',
    });
  };

  return (
    <>
    <body>
      <nav className={contactoStyle.nav}>
      <Link to="/">Ir a Home</Link>
    </nav>
    <form onSubmit={enviarData} className={contactoStyle.formulario}>
      <section className={contactoStyle.seccion}>
        <h2 className={contactoStyle.tituloformulario}>Formulario de contacto</h2>
        <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={formData.nombre}
        onChange={cambiarData}
        required
      />
      <label htmlFor="email">Correo Electrónico:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={cambiarData}
        required
      />
      <label htmlFor="mensaje">Mensaje:</label>
      <textarea
        id="mensaje"
        name="mensaje"
        value={formData.mensaje}
        onChange={cambiarData}
        required
      />
      </section>
      
      <button className={contactoStyle.boton} type="submit">Enviar Mensaje</button>
    </form>
    <ToastContainer />
    <footer>
      <h2 className={contactoStyle.titulofooter}>Mis Redes Sociales</h2>
        <ul className={contactoStyle.lista}>
          <a href=""><i class="fa-brands fa-square-instagram"></i></a>
          <a href=""><i class="fa-brands fa-facebook"></i></a>
          <a href=""><i class="fa-brands fa-square-github"></i></a>
        </ul>
    </footer>
    </body>
    
    </>
    
  );
};

export default Contacto;