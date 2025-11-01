import ReactMarkdown from 'react-markdown';
import readmeContent from '../files/README.md?raw';
import './ReadmeViewer.css';


export default function ReadmeViewer() {
  return (
    <div className="markdown-container">
      <ReactMarkdown>{readmeContent}</ReactMarkdown>
    </div>
  );
}
