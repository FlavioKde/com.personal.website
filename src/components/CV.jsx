import { vscodeStyles, cn } from '../utils/vscodeStyles';

const CV = () => {
  return (
    <div className={cn('p-6 text-sm font-mono space-y-6', vscodeStyles.text.primary, vscodeStyles.bg.primary)}>
      {/* Heading */}
      <div className="space-y-1">
        <h1 className={cn('text-xl font-bold', vscodeStyles.ui.green)}>Flavio A. D'Avirro</h1>
        <p className={vscodeStyles.ui.purple}>Web Developer</p>
        <div className={cn('flex flex-wrap gap-4 text-xs', vscodeStyles.text.muted)}>
          <span>📞 680952590</span>
          <span>📧 flaviodavirro@gmail.com</span>
          <a href="https://www.linkedin.com/in/flavio-augusto-davirro" className={vscodeStyles.uiHover.green}>LinkedIn</a>
          <a href="https://github.com/FlavioKde" className={vscodeStyles.uiHover.green}>GitHub</a>
          <span>🎂 02-09-1974</span>
        </div>
      </div>

      {/* Profile */}
      <section>
        <h2 className={cn('text-sm mb-2', vscodeStyles.ui.green)}>Perfil profesional</h2>
        <p className={cn('leading-relaxed', vscodeStyles.text.secondary)}>
          Soy una persona comprometida con cada proyecto y motivada por los retos, incluso cuando generan vértigo al inicio. Disfruto analizar problemas, entenderlos a fondo y diseñar soluciones que aporten valor real. Me gusta trabajar con personas y construir equipos donde las diferencias suman, porque la diversidad potencia los resultados.
          Mi experiencia combina liderazgo, aprendizaje continuo y análisis, con un enfoque práctico y humano orientado a mejorar procesos, aprender constantemente y elevar la calidad del trabajo en equipo.

        </p>
      </section>

      {/* Experience */}
      <section>
        <h2 className={cn('text-sm mb-2', vscodeStyles.ui.green)}>Experiencia laboral</h2>
          <ul className={cn('space-y-2', vscodeStyles.text.secondary)}>
            <li><strong>Desarrollador Web Junior – IT Academy (2025)</strong> – Proyectos internos y colaborativos. Desarrollo backend y frontend.</li>
            <li><strong>Desarrollador Web Freelance (2025)</strong> – Desarrollo de la app RroserPresent-video-art.</li>
            <li><strong>Logística y Aeropuerto BCN (2022–2025)</strong> – Aldi, Amazon, Aeropuerto BCN. Atención al cliente, reparto y asistencia en tierra.</li>
            <li><strong>Gerente General – La Popular (2013–2022)</strong> – Gestión integral del negocio: equipos, operaciones, finanzas y fidelización.</li>
            <li><strong>Supervisor de Zona – Comess Group (2008–2012)</strong> – Gestión de franquicias en Cataluña, Baleares, Andorra y Zaragoza.</li>
          </ul>
      </section>

      {/* Training */}
      <section>
        <h2 className={cn('text-sm mb-2', vscodeStyles.ui.green)}>Formación</h2>
          <ul className={cn('space-y-1', vscodeStyles.text.secondary)}>
            <li>IT Academy – Java Spring Boot (2025) – 550 h</li>
            <li>CIFO Vallès – Laravel PHP Framework (2024) – 220 h</li>
            <li>CIFO Vallès – Desarrollo Web con Tecnologías (2024) – 600 h</li>
            <li>Foment – Confección y Publicación de Páginas Web (2023) – 600 h</li>
            <li>UBA – Comunicación Social (2 años cursados, en proceso de homologación)</li>
        </ul>
      </section>

      {/* Technical Skills */}
      <section>
         <h2 className={cn('text-sm mb-2', vscodeStyles.ui.green)}>Habilidades técnicas</h2>
           <ul className={cn('grid grid-cols-2 gap-x-6', vscodeStyles.text.secondary)}>
              <li><strong>Lenguajes:</strong> Java, JavaScript, PHP</li>
              <li><strong>Frameworks:</strong> Spring Boot, Laravel, React</li>
              <li><strong>Testing:</strong> JUnit</li>
              <li><strong>Herramientas:</strong> Git, GitHub, Docker, Maven, Gradle</li>
              <li><strong>Bases de datos:</strong> MySQL, MongoDB, H2</li>
              <li><strong>APIs:</strong> Swagger, Postman</li>
              <li><strong>CI/CD & Deploy:</strong> GitHub Actions, SonarCloud, Railway, SSH, FTP Deploy Action</li>
              <li><strong>Metodologías:</strong> Scrum, Kanban, Taiga</li>
          </ul>
      </section>

      {/* Featured Project */}
      <section>
        <h2 className={cn('text-sm mb-2', vscodeStyles.ui.green)}>Ejemplo de trabajo profesional</h2>
        <p className={vscodeStyles.text.secondary}>
          Aplicación web modular con arquitectura DDD, gestión de roles y seguridad con Spring Security. Persistencia con MongoDB y MySQL. Frontend con React-Vite. Documentación con Swagger. WIP: sistema de chat asíncrono con WebSockets.
        </p>
        <a href="https://github.com/FlavioKde/s5.02.web_application" className={cn('text-xs', vscodeStyles.ui.purple, vscodeStyles.uiHover.green)}>
          Ver repositorio en GitHub
        </a>
      </section>

      {/* Languages */}
      <section>
        <h2 className={cn('text-sm mb-2', vscodeStyles.ui.green)}>Idiomas</h2>
        <ul className={vscodeStyles.text.secondary}>
          <li>Castellano (nativo)</li>
          <li>Català (B2)</li>
          <li>Inglés (B1)</li>
        </ul>
        <a
          href="/Flavio_DAvirro_CV.pdf"
          download
          className={cn(
            'inline-block mt-6 px-4 py-2 text-xs font-semibold rounded transform hover:translate-x-1 transition-all duration-300',
            'bg-purple-400/20 text-purple-400 hover:bg-green-400/20 hover:text-green-400'
          )}
          >
          📄 Descargar CV en PDF
        </a>
      </section>
    </div>
    
  );
};

export default CV;