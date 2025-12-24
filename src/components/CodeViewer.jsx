import { vscodeStyles, cn } from '../utils/vscodeStyles';

export default function CodeViewer({ content }) {
  const lines = content.split('\n');

  return (
    <div className={cn(vscodeStyles.components.codeViewer.container)}>
      {/* Numbers line - style VSCode */}
      <div className={cn(vscodeStyles.components.codeViewer.lineNumbers)}>
        {lines.map((_, i) => (
          <div 
            key={i} 
            className="h-[22px] leading-[22px] text-[13px]"
            style={{ fontFeatureSettings: '"tnum"' }} // Tab for monospaced numbers
          >
            {i + 1}
          </div>
        ))}
      </div>

      {/* Content rendered as HTML */}
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