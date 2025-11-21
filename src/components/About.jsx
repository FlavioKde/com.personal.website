import CodeViewer from './CodeViewer';

const aboutContent = `
<span class="text-blue-400">const</span> <span class="text-white">About</span> <span class="text-blue-400">=</span> <span class="text-blue-400">()</span> <span class="text-blue-400">=&gt;</span> <span class="text-blue-400">{</span>
  <span class="text-green-400">return</span> (
    <div class="space-y-4 text-sm leading-relaxed text-neutral-300">
      <h2 class="text-lg font-semibold text-white">Presentación</h2>
      <br/>
      <p>
  ¡Hola! Soy Flavio Augusto D'Avirro, desarrollador web en crecimiento con enfoque técnico y visual. 
   Actualmente me siento más cómodo trabajando en backend, aunque también desarrollo en frontend y 
    busco mejorar constantemente en ambos entornos.
</p>
<p>
  Este portfolio está diseñado como un editor interactivo, inspirado en entornos como VSCode.
   Acá podés explorar mis proyectos más representativos, descargar mi CV y contactarme directamente.
</p>
<p>
  Gracias por visitar. Espero que disfrutes navegando por mi trabajo, 
   y si tenés alguna consulta o proyecto en mente, no dudes en escribirme.
</p>

    </div>
  );
<span class="text-blue-400">};</span>

<span class="text-blue-400">export default</span> <span class="text-white">About;</span>
`;


export default function About() {
  return <CodeViewer content={aboutContent} />;
}
