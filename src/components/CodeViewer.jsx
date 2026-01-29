import { vscodeStyles, cn } from '../utils/vscodeStyles';

export default function CodeViewer({ content }) {
  const lines = content.split('\n');


return (
    <div className={cn(vscodeStyles.components.codeEditor.container)}>
      {lines.map((line, i) => (
        <div key={i} className="flex">
          
          {/* Numbers line - style VSCode */}
          <div 
            className={cn(vscodeStyles.components.codeEditor.lineNumbers)}
            style={{ fontFeatureSettings: '"tnum"' }}
          >
            {i + 1}
          </div>

          {/* Content rendered as HTML */}
          <div
            className={cn(vscodeStyles.components.codeEditor.content)}
            dangerouslySetInnerHTML={{ __html: line }}
          />
        </div>
      ))}
    </div>
  );
}








