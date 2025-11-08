// GitHubProjects.jsx
import { useState, useEffect } from 'react';

const GitHubProjects = () => {
  const [repos, setRepos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  // Proyectos que querés destacar manualmente
  const featuredRepos = [
    'https://github.com/FlavioKde/com.propydis.studio',
    'nombre-de-tu-mejor-proyecto-2', 
    'nombre-de-tu-mejor-proyecto-3'
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/FlavioKde/repos?sort=updated&per_page=100');
        const data = await response.json();
        
        const filteredRepos = data.filter(repo => 
          !repo.fork && !repo.private
        );
        
        // Agregar categorías automáticamente
        const categorizedRepos = filteredRepos.map(repo => ({
          ...repo,
          category: getRepoCategory(repo),
          isFeatured: featuredRepos.includes(repo.name)
        }));
        
        setRepos(categorizedRepos);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repos:', error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Función para categorizar repos por tecnología
  const getRepoCategory = (repo) => {
    const lang = repo.language?.toLowerCase() || '';
    const name = repo.name?.toLowerCase() || '';
    const description = repo.description?.toLowerCase() || '';
    
    if (lang.includes('typescript') || lang.includes('javascript') || 
        name.includes('frontend') || description.includes('react')) {
      return 'frontend';
    }
    
    if (lang.includes('python') || lang.includes('java') || lang.includes('go') ||
        name.includes('backend') || name.includes('api')) {
      return 'backend';
    }
    
    if (lang.includes('solidity') || name.includes('blockchain') || 
        name.includes('smart-contract')) {
      return 'blockchain';
    }
    
    return 'other';
  };

  const filteredRepos = filter === 'all' 
    ? repos 
    : repos.filter(repo => repo.category === filter);

  const featuredProjects = repos.filter(repo => repo.isFeatured);

  if (loading) return <div className="text-center py-8">Cargando proyectos...</div>;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Mis Proyectos</h2>
        
        {/* Proyectos Destacados */}
        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">🌟 Proyectos Destacados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map(repo => (
                <ProjectCard key={repo.id} repo={repo} featured={true} />
              ))}
            </div>
          </div>
        )}

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg transition-all ${
              filter === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600'
            }`}
          >
            Todos
          </button>
          <button 
            onClick={() => setFilter('frontend')}
            className={`px-4 py-2 rounded-lg transition-all ${
              filter === 'frontend' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600'
            }`}
          >
            Frontend
          </button>
          <button 
            onClick={() => setFilter('backend')}
            className={`px-4 py-2 rounded-lg transition-all ${
              filter === 'backend' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600'
            }`}
          >
            Backend
          </button>
          <button 
            onClick={() => setFilter('blockchain')}
            className={`px-4 py-2 rounded-lg transition-all ${
              filter === 'blockchain' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600'
            }`}
          >
            Blockchain
          </button>
        </div>

        {/* Lista de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepos.map(repo => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente de Tarjeta de Proyecto
const ProjectCard = ({ repo, featured = false }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden border-2 transition-transform hover:scale-105 ${
      featured ? 'border-yellow-400 border-2' : 'border-gray-200'
    }`}>
      {featured && (
        <div className="bg-yellow-400 text-yellow-900 px-3 py-1 text-sm font-semibold">
          ⭐ Destacado
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800">{repo.name}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {repo.language || 'Code'}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {repo.description || 'Sin descripción'}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <span>⭐ {repo.stargazers_count}</span>
            <span>🍴 {repo.forks_count}</span>
          </div>
          <span>
            {new Date(repo.updated_at).toLocaleDateString()}
          </span>
        </div>
        
        <div className="flex space-x-3">
          <a 
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-800 text-white text-center py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Código
          </a>
          {repo.homepage && (
            <a 
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default GitHubProjects;