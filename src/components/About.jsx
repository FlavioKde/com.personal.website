import CodeViewer from './CodeViewer';

const aboutContent = `
<span class="text-blue-400">const</span> <span class="text-yellow-400">developer</span> <span class="text-blue-400">=</span> <span class="text-blue-400">()</span> <span class="text-blue-400">=&gt;</span> <span class="text-blue-400">{</span>
  <span class="text-purple-400">const</span> <span class="text-white">name</span> <span class="text-blue-400">=</span> <span class="text-green-400">"Flavio Augusto D'Avirro"</span><span class="text-blue-400">;</span>
  <span class="text-purple-400">const</span> <span class="text-white">role</span> <span class="text-blue-400">=</span> <span class="text-green-400">"Desarrollador Full Stack"</span><span class="text-blue-400">;</span>
  <span class="text-purple-400">const</span> <span class="text-white">focus</span> <span class="text-blue-400">=</span> <span class="text-green-400">"Enfoque técnico y visual"</span><span class="text-blue-400">;</span>
  
  <span class="text-gray-500">// Presentación</span>
  <span class="text-purple-400">console</span><span class="text-blue-400">.</span><span class="text-yellow-400">log</span><span class="text-blue-400">(</span><span class="text-green-400">\`¡Hola! Soy \${</span><span class="text-white">name</span><span class="text-green-400">}\`</span><span class="text-blue-400">)</span><span class="text-blue-400">;</span>
  <span class="text-purple-400">console</span><span class="text-blue-400">.</span><span class="text-yellow-400">log</span><span class="text-blue-400">(</span><span class="text-green-400">\`\${</span><span class="text-white">role</span><span class="text-green-400">} con \${</span><span class="text-white">focus</span><span class="text-green-400">}\`</span><span class="text-blue-400">)</span><span class="text-blue-400">;</span>
  
  <span class="text-gray-500">// Especialidades técnicas</span>
  <span class="text-purple-400">const</span> <span class="text-white">skills</span> <span class="text-blue-400">=</span> <span class="text-blue-400">{</span>
    <span class="text-yellow-400">frontend</span><span class="text-blue-400">:</span> <span class="text-green-400">"React, JavaScript, HTML, CSS"</span><span class="text-blue-400">,</span>
    <span class="text-yellow-400">backend</span><span class="text-blue-400">:</span> <span class="text-green-400">"Java, PHP, Bases de datos, APIs, frameworks"</span><span class="text-blue-400">,</span>
    <span class="text-yellow-400">herramientas</span><span class="text-blue-400">:</span> <span class="text-green-400">"Git, Docker, DevTools, Testing"</span><span class="text-blue-400">,</span>
    <span class="text-yellow-400">metodologías</span><span class="text-blue-400">:</span> <span class="text-green-400">"Scrum, Trabajo colaborativo, CI/CD"</span>
  <span class="text-blue-400">}</span><span class="text-blue-400">;</span>

  <span class="text-gray-500">// Procesos y enfoque de trabajo</span>
  <span class="text-purple-400">const</span> <span class="text-white">workflow</span> <span class="text-blue-400">=</span> <span class="text-blue-400">{</span>
    <span class="text-yellow-400">diseño</span><span class="text-blue-400">:</span> <span class="text-green-400">"Experiencias centradas en el usuario"</span><span class="text-blue-400">,</span>
    <span class="text-yellow-400">desarrollo</span><span class="text-blue-400">:</span> <span class="text-green-400">"Código limpio y mantenible"</span><span class="text-blue-400">,</span>
    <span class="text-yellow-400">documentación</span><span class="text-blue-400">:</span> <span class="text-green-400">"Procesos claros y documentados"</span><span class="text-blue-400">,</span>
    <span class="text-yellow-400">automatización</span><span class="text-blue-400">:</span> <span class="text-green-400">"Optimización de flujos de trabajo"</span>
  <span class="text-blue-400">}</span><span class="text-blue-400">;</span>

  <span class="text-gray-500">// Acerca de este portfolio</span>
  <span class="text-purple-400">const</span> <span class="text-white">portfolio</span> <span class="text-blue-400">=</span> <span class="text-blue-400">{</span>
    <span class="text-yellow-400">diseño</span><span class="text-blue-400">:</span> <span class="text-green-400">"Editor interactivo tipo VSCode"</span><span class="text-blue-400">,</span>
    <span class="text-yellow-400">contenido</span><span class="text-blue-400">:</span> <span class="text-green-400">"Proyectos, CV, contacto y más detalles"</span><span class="text-blue-400">,</span>
    <span class="text-yellow-400">invitación</span><span class="text-blue-400">:</span> <span class="text-green-400">"Explorar mi perfil completo"</span>
  <span class="text-blue-400">}</span><span class="text-blue-400">;</span>

  <span class="text-gray-500">// Mensaje final</span>
  <span class="text-purple-400">return</span> <span class="text-blue-400">{</span>
    <span class="text-yellow-400">mensaje</span><span class="text-blue-400">:</span> <span class="text-green-400">"Gracias por visitar. ¡Espero que disfrutes explorando mi trabajo!"</span><span class="text-blue-400">,</span>
    <span class="text-yellow-400">contacto</span><span class="text-blue-400">:</span> <span class="text-green-400">"No dudes en escribirme para consultas o proyectos"</span><span class="text-blue-400">,</span>
    <span class="text-yellow-400">disponible</span><span class="text-blue-400">:</span> <span class="text-green-400">"Ver perfil completo para más detalles"</span>
  <span class="text-blue-400">}</span><span class="text-blue-400">;</span>
<span class="text-blue-400">}</span><span class="text-blue-400">;</span>

<span class="text-purple-400">export default</span> <span class="text-white">developer</span><span class="text-blue-400">;</span>
`;

export default function About() {
  return <CodeViewer content={aboutContent} />;
}