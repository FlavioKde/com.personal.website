export default function CodeViewer({ content }) {
  const lines = content.split('\n');

  return (
    <div className="flex bg-neutral-900 text-white font-mono text-sm rounded overflow-hidden">
      {/* Números de línea */}
      <div className="bg-neutral-800 text-neutral-500 text-right pr-2 pl-1 py-2 select-none">
        {lines.map((_, i) => (
          <div key={i} className="h-5 leading-5">{i + 1}</div>
        ))}
      </div>

      {/* Contenido renderizado como HTML */}
      <div className="p-2">
        {lines.map((line, i) => (
          <div
            key={i}
            className="h-5 leading-5 whitespace-pre"
            dangerouslySetInnerHTML={{ __html: line }}
          />
        ))}
      </div>
    </div>
  );
}