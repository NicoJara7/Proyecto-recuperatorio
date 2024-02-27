import inicioStyle from "../Css/inicio.module.css"
import { Link, Outlet } from "react-router-dom";

const Inicio = () => {
  const personalInfo = {
    nombre: 'Nicolas',
    Profesion: 'Desarrollador Frontend',
    localidad: 'Ciudad, País',
    email: 'correo@example.com',
  };


  const proposito = `Soy un apasionado desarrollador frontend con experiencia en la creación de aplicaciones web 
                  modernas utilizando tecnologías como React. Mi objetivo es crear experiencias de usuario 
                  excepcionales y contribuir al mundo del desarrollo web.`;

  return (
    <>
    <header>
        <Link to="proyectos">proyectos</Link>
        <Link to="/contacto">Contactos</Link>
      </header>
      <Outlet />
      <section>
      <h1 className={inicioStyle.titulo}>Bienvenido a mi Portafolio</h1>
      <article>
        <h2 className={inicioStyle.nombre}>{personalInfo.nombre}</h2>
        <p className={inicioStyle.Profesion}>{personalInfo.Profesion}</p>
        <p className={inicioStyle.localidad}>{personalInfo.localidad}</p>
        <p className={inicioStyle.email}>Email: {personalInfo.email}</p>
      </article>
      <div>
        <h2 className={inicioStyle.titulo-proposito}>Mi Propósito</h2>
        <p className={inicioStyle.proposito}>{proposito}</p>
      </div>
    </section> 
    </>
    
  );
};

export default Inicio;