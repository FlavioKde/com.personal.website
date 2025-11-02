import ReactMarkdown from 'react-markdown';
import readmeContent from '../files/README.md?raw';



export default function ReadmeViewer() {
  return (
    <div className="bg-neutral-900 text-neutral-200 p-4 sm:p-6 md:p-8 rounded-md font-mono overflow-y-auto h-full max-h-[80vh]">
        <div className="prose prose-invert prose-sm sm:prose-base max-w-none">
          <ReactMarkdown>{readmeContent}</ReactMarkdown>
        </div>
    </div>
  );
}