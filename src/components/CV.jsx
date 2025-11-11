import { vscodeStyles, cn } from '../utils/vscodeStyles';

const CV = () => {
  return (
    <div className={cn('p-6 text-sm font-mono space-y-6', vscodeStyles.text.primary, vscodeStyles.bg.primary)}>
      {/* Encabezado */}
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

      {/* Perfil */}
      <section>
        <h2 className={cn('text-sm mb-2', vscodeStyles.ui.green)}>Perfil profesional</h2>
        <p className={cn('leading-relaxed', vscodeStyles.text.secondary)}>
          Profesional con una trayectoria amplia en sectores operativos, técnicos y digitales. Con capacidad de adaptación, resolución de problemas y compromiso con la calidad. He gestionado equipos, coordinado operaciones, trabajando en entornos exigentes como el sector aeroportuario y la logística. Me defino como una persona organizada, versátil y orientada a aportar valor en el sector IT.
        </p>
      </section>

      {/* Experiencia */}
      <section>
        <h2 className={cn('text-sm mb-2', vscodeStyles.ui.green)}>Experiencia laboral</h2>
        <ul className={cn('space-y-2', vscodeStyles.text.secondary)}>
          <li><strong>Desarrollador web Freelance (2025)</strong> – Desarrollo de App RroserPresent-video-art</li>
          <li><strong>Logística y Aeropuerto (2022–2025)</strong> – Aldi, Amazon, BCN. Atención al cliente, reparto, asistencia en tierra</li>
          <li><strong>Gerente general – La Popular (2013–2022)</strong> – Gestión integral, equipos, finanzas, fidelización</li>
          <li><strong>Supervisor de zona – Comess Group (2008–2012)</strong> – Gestión de franquicias en Cataluña, Baleares, Andorra, Zaragoza</li>
        </ul>
      </section>

      {/* Formación */}
      <section>
        <h2 className={cn('text-sm mb-2', vscodeStyles.ui.green)}>Formación</h2>
        <ul className={cn('space-y-1', vscodeStyles.text.secondary)}>
          <li>IT Academy – Fundamentos de programación Java Springboot (2025)</li>
          <li>CIFO Vallès – Laravel PHP Framework (2024)</li>
          <li>CIFO Vallès – Desarrollo web con tecnologías (2024)</li>
          <li>Foment – Confección y publicación de páginas web (2023)</li>
          <li>UBA – Comunicación Social (2 años cursados, en proceso de homologación)</li>
        </ul>
      </section>

      {/* Habilidades técnicas */}
      <section>
        <h2 className={cn('text-sm mb-2', vscodeStyles.ui.green)}>Habilidades técnicas</h2>
        <ul className={cn('grid grid-cols-2 gap-x-6', vscodeStyles.text.secondary)}>
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
        <h2 className={cn('text-sm mb-2', vscodeStyles.ui.green)}>Ejemplo de trabajo profesional</h2>
        <p className={vscodeStyles.text.secondary}>
          Aplicación web modular con arquitectura DDD, gestión de roles y seguridad con Spring Security. Persistencia con MongoDB y MySQL. Frontend con React-Vite. Documentación con Swagger. WIP: sistema de chat asíncrono con WebSockets.
        </p>
        <a href="https://github.com/FlavioKde/s5.02.web_application" className={cn('text-xs', vscodeStyles.ui.purple, vscodeStyles.uiHover.green)}>
          Ver repositorio en GitHub
        </a>
      </section>

      {/* Idiomas */}
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