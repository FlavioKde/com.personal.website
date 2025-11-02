import CodeViewer from './CodeViewer';

const aboutContent = `
<span class="text-blue-400">const</span> <span class="text-white">About</span> <span class="text-blue-400">=</span> <span class="text-blue-400">()</span> <span class="text-blue-400">=&gt;</span> <span class="text-blue-400">{</span>
  <span class="text-green-400">return</span> (
    <div class="space-y-4 text-sm leading-relaxed text-neutral-300">
      <h2 class="text-lg font-semibold text-white">Presentación</h2>
      <p>
        ¡Hola! Soy Flavio, desarrollador web con enfoque técnico y visual. Me especializo en crear interfaces limpias, funcionales y adaptadas a cada contexto.
      </p>
      <p>
        Este portfolio está diseñado como un editor interactivo, donde podés explorar mis proyectos, descargar mi CV y contactarme directamente.
      </p>
      <p>
        Programo en inglés, pero el contenido está en castellano para facilitar la lectura y navegación en España.
      </p>
    </div>
  );
<span class="text-blue-400">};</span>

<span class="text-blue-400">export default</span> <span class="text-white">About;</span>
`;


export default function About() {
  return <CodeViewer content={aboutContent} />;
}
