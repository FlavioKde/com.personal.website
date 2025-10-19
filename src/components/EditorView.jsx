import './EditorView.css';

const EditorView = () => {
  return (
    <div className="editor-container">
      <div className="tab-bar">
        <div className="tab active">📄 about.js ✕</div>
      </div>

      <div className="editor-content">
        <div className="line-numbers">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>

        <div className="code-block">
          <p className="comment">// Hola, soy Flavio</p>
          <p className="comment">// Desarrollador backend especializado en soluciones modulares y seguras</p>
          <p>
            <span className="keyword">const</span> stack = <span className="string">['Java', 'Spring Boot', 'MongoDB', 'React', 'Docker']</span>;
          </p>
          <p>
            <span className="keyword">const</span> disponible = <span className="boolean">true</span>;
          </p>
          <p>
            <span className="keyword">const</span> contacto = <span className="string">'flaviokde@gmail.com'</span>;
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditorView;