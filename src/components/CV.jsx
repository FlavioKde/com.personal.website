const CV = () => {
  return (
    <div className="p-6 text-sm font-mono text-white bg-black space-y-6">
      {/* Encabezado */}
      <div className="space-y-1">
        <h1 className="text-xl font-bold text-green-400">Flavio A. D’Avirro</h1>
        <p className="text-purple-400">Web Developer</p>
        <div className="flex flex-wrap gap-4 text-xs text-neutral-400">
          <span>📞 680952590</span>
          <span>📧 flaviodavirro@gmail.com</span>
          <a href="https://www.linkedin.com/in/flavio-augusto-davirro" className="hover:text-green-400">LinkedIn</a>
          <a href="https://github.com/FlavioKde" className="hover:text-green-400">GitHub</a>
          <span>🎂 02-09-1974</span>
        </div>
      </div>

      {/* Perfil */}
      <section>
        <h2 className="text-green-400 text-sm mb-2">Perfil profesional</h2>
        <p className="text-neutral-300 leading-relaxed">
          Profesional con una trayectoria amplia en sectores operativos, técnicos y digitales. Con capacidad de adaptación, resolución de problemas y compromiso con la calidad. He gestionado equipos, coordinado operaciones, trabajando en entornos exigentes como el sector aeroportuario y la logística. Me defino como una persona organizada, versátil y orientada a aportar valor en el sector IT.
        </p>
      </section>

      {/* Experiencia */}
      <section>
        <h2 className="text-green-400 text-sm mb-2">Experiencia laboral</h2>
        <ul className="space-y-2 text-neutral-300">
          <li><strong>Desarrollador web Freelance (2025)</strong> – Desarrollo de App RroserPresent-video-art</li>
          <li><strong>Logística y Aeropuerto (2022–2025)</strong> – Aldi, Amazon, BCN. Atención al cliente, reparto, asistencia en tierra</li>
          <li><strong>Gerente general – La Popular (2013–2022)</strong> – Gestión integral, equipos, finanzas, fidelización</li>
          <li><strong>Supervisor de zona – Comess Group (2008–2012)</strong> – Gestión de franquicias en Cataluña, Baleares, Andorra, Zaragoza</li>
        </ul>
      </section>

      {/* Formación */}
      <section>
        <h2 className="text-green-400 text-sm mb-2">Formación</h2>
        <ul className="space-y-1 text-neutral-300">
          <li>IT Academy – Fundamentos de programación Java Springboot (2025)</li>
          <li>CIFO Vallès – Laravel PHP Framework (2024)</li>
          <li>CIFO Vallès – Desarrollo web con tecnologías (2024)</li>
          <li>Foment – Confección y publicación de páginas web (2023)</li>
          <li>UBA – Comunicación Social (2 años cursados, en proceso de homologación)</li>
        </ul>
      </section>

      {/* Habilidades técnicas */}
      <section>
        <h2 className="text-green-400 text-sm mb-2">Habilidades técnicas</h2>
        <ul className="grid grid-cols-2 gap-x-6 text-neutral-300">
          <li>Java, JavaScript, PHP</li>
          <li>Postman, Swagger</li>
          <li>Agile (Scrum/Kanban)</li>
          <li>HTML, CSS</li>
          <li>Springboot, Laravel</li>
          <li>MySQL, MongoDB, H2</li>
        </ul>
      </section>

      {/* Proyecto destacado */}
      <section>
        <h2 className="text-green-400 text-sm mb-2">Ejemplo de trabajo profesional</h2>
        <p className="text-neutral-300">
          Aplicación web modular con arquitectura DDD, gestión de roles y seguridad con Spring Security. Persistencia con MongoDB y MySQL. Frontend con React-Vite. Documentación con Swagger. WIP: sistema de chat asíncrono con WebSockets.
        </p>
        <a href="https://github.com/FlavioKde/s5.02.web_application" className="text-purple-400 hover:text-green-400 text-xs">
          Ver repositorio en GitHub
        </a>
      </section>

      {/* Idiomas */}
      <section>
        <h2 className="text-green-400 text-sm mb-2">Idiomas</h2>
        <ul className="text-neutral-300">
          <li>Castellano (nativo)</li>
          <li>Català (B2)</li>
          <li>Inglés (B1)</li>
        </ul>
        <a
          href="/Flavio_DAvirro_CV.pdf"
          download
          className="inline-block mt-6 px-4 py-2 bg-purple-700 text-white text-xs font-semibold rounded hover:bg-green-600 transform hover:translate-x-1 transition-all duration-300"
          >
          📄 Descargar CV en PDF
        </a>
      </section>
    </div>
    
  );
};

export default CV;