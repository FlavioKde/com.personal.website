import { vscodeStyles, cn } from '../utils/vscodeStyles';

export default function CodeViewer({ content }) {
  const lines = content.split('\n');

  return (
    <div className={cn(vscodeStyles.components.codeViewer.container)}>
      {/* Números de línea - estilo VSCode */}
      <div className={cn(vscodeStyles.components.codeViewer.lineNumbers)}>
        {lines.map((_, i) => (
          <div 
            key={i} 
            className="h-[22px] leading-[22px] text-[13px]"
            style={{ fontFeatureSettings: '"tnum"' }} // Números tabulares para mejor alineación
          >
            {i + 1}
          </div>
        ))}
      </div>

      {/* Contenido renderizado como HTML */}
      <div className={cn(vscodeStyles.components.codeViewer.content, 'flex-1')}>
        {lines.map((line, i) => (
          <div
            key={i}
            className="h-[22px] leading-[22px] text-[13px] whitespace-pre font-mono"
            dangerouslySetInnerHTML={{ __html: line }}
          />
        ))}
      </div>
    </div>
  );
}