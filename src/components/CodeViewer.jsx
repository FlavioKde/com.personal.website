import { vscodeStyles, cn } from '../utils/vscodeStyles';

export default function CodeViewer({ content }) {
  const lines = content.split('\n');


  return (
    <div className="bg-[#1e1e1e] text-white font-mono text-sm rounded overflow-hidden">
      {lines.map((line, i) => (
        <div key={i} className="flex">
          
          {/* Número de línea */}
          <div 
            className="min-h-[22px] leading-[22px] text-[13px] text-neutral-600 pr-4 pl-4 border-r border-neutral-800 shrink-0 flex items-start"
            style={{ fontFeatureSettings: '"tnum"' }}
          >
            {i + 1}
          </div>

          {/* Contenido */}
          <div
            className="min-h-[22px] leading-[22px] text-[13px] whitespace-pre-wrap break-words px-4 py-0"
            dangerouslySetInnerHTML={{ __html: line }}
          />
        </div>
      ))}
    </div>
  );
}





//logica anterior con uso de vscodeStyles.js ver si la dejo o no

//  return (
//    <div className={cn(vscodeStyles.components.codeViewer.container)}>
//      {/* Numbers line - style VSCode */}
//      <div className={cn(vscodeStyles.components.codeViewer.lineNumbers)}>
//        {lines.map((_, i) => (
//          <div 
//            key={i} 
//            className="min-h-[22px] leading-[22px] text-[13px]"
//            style={{ fontFeatureSettings: '"tnum"' }} // Tab for monospaced numbers
//          >
//            {i + 1}
//          </div>
//        ))} 
//      </div>

//      {/* Content rendered as HTML */}
//      <div className={cn(vscodeStyles.components.codeViewer.content, 'flex-1')}>
//        {lines.map((line, i) => (
//          <div
//            key={i}
//            //añadir break-words para que las lineas largas hagan wrap "-wrap break-words"
//            className="min-h-[22px] leading-[22px] text-[13px] whitespace-pre-wrap break-words font-mono"
//            dangerouslySetInnerHTML={{ __html: line }}
//          />
//        ))}
//      </div>
//    </div>
//  );








