import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import readmeContent from '../files/README.md?raw';

export default function ReadmeViewer() {
  return (
    <div className="bg-[#0d1117] text-[#e6edf3] p-6 font-sans overflow-y-auto h-full">
      <div className="max-w-4xl mx-auto">
        <ReactMarkdown
          components={{
            // Styles for headings
            h1: ({ children }) => (
              <h1 className="text-2xl font-bold text-[#f0f6fc] border-b border-[#30363d] pb-2 mb-4 mt-6">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-xl font-semibold text-[#f0f6fc] border-b border-[#30363d] pb-2 mb-3 mt-5">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-lg font-semibold text-[#f0f6fc] mt-4 mb-2">
                {children}
              </h3>
            ),
            
            // Styles for lists
            ul: ({ children }) => (
              <ul className="my-3 pl-6 list-disc space-y-1">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="my-3 pl-6 list-decimal space-y-1">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="text-[#e6edf3]">
                {children}
              </li>
            ),
            
            // Styles for code blocks and inline code
            code: ({ children, className }) => {
              if (!className) {
                return (
                  <code className="bg-[#6e768166] text-[#e6edf3] px-1.5 py-0.5 rounded text-sm font-mono">
                    {children}
                  </code>
                );
              }
              
              // Styles for fenced code blocks
              const language = className.replace('language-', '');
              return (
                <SyntaxHighlighter
                  style={oneDark}
                  language={language}
                  PreTag="div"
                  className="rounded-md my-4 text-sm"
                  showLineNumbers={false}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              );
            },
            
            // Styles for paragraphs
            p: ({ children }) => (
              <p className="my-3 text-[#e6edf3] leading-relaxed">
                {children}
              </p>
            ),
            
            // Styles for links
            a: ({ href, children }) => (
              <a 
                href={href} 
                className="text-[#2f81f7] hover:text-[#58a6ff] hover:underline no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
            
            // Styles for blockquotes
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-[#30363d] pl-4 my-4 text-[#7d8590] italic">
                {children}
              </blockquote>
            ),
            
            // Styles for strong (bold) text
            strong: ({ children }) => (
              <strong className="font-semibold text-[#f0f6fc]">
                {children}
              </strong>
            ),
            
            // Styles for emphasized (italic) text
            em: ({ children }) => (
              <em className="italic text-[#e6edf3]">
                {children}
              </em>
            ),
          }}
        >
          {readmeContent}
        </ReactMarkdown>
      </div>
    </div>
  );
}