import { useState, useEffect, useMemo, useCallback } from 'react';
import { FaReact, FaJava, FaNodeJs, FaDatabase, FaLock, FaStar, FaCodeBranch, FaCalendar } from 'react-icons/fa';
import GitHubStats from './GitHubStats';
import RecentActivity from './RecentActivityGitHub';

// Constantes para mejor mantenibilidad
const CATEGORIES = {
  ALL: 'all',
  FRONTEND: 'frontend',
  BACKEND: 'backend',
  BLOCKCHAIN: 'blockchain'
};

const FEATURED_REPOS = [
  'com.propydis.studio',
  'portfolio-vscode', 
  'api-rest-springboot',
  'react-dashboard',
  'mongo-crud-app',
  'blockchain-wallet'
];

const API_URL = 'https://api.github.com/users/FlavioKde/repos?sort=updated&per_page=100';

// Custom Hook para fetch de repos
const useGitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Error fetching repos');
        const data = await response.json();

        const processedRepos = data
          .filter(repo => !repo.fork && !repo.private)
          .map(repo => ({
            ...repo,
            category: getRepoCategory(repo),
            isFeatured: FEATURED_REPOS.includes(repo.name)
          }));

        setRepos(processedRepos);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching repos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return { repos, loading, error };
};

// Lógica de categorización mejorada
const getRepoCategory = (repo) => {
  const lang = repo.language?.toLowerCase() || '';
  const name = repo.name?.toLowerCase() || '';
  const description = repo.description?.toLowerCase() || '';
  const topics = repo.topics || [];

  // Priorizar topics si existen
  if (topics.some(topic => ['frontend', 'react', 'vue', 'angular'].includes(topic.toLowerCase()))) {
    return CATEGORIES.FRONTEND;
  }
  if (topics.some(topic => ['backend', 'api', 'server', 'spring', 'node'].includes(topic.toLowerCase()))) {
    return CATEGORIES.BACKEND;
  }
  if (topics.some(topic => ['blockchain', 'web3', 'solidity', 'smart-contract'].includes(topic.toLowerCase()))) {
    return CATEGORIES.BLOCKCHAIN;
  }

  // Fallback a detección automática
  if (lang.includes('javascript') || lang.includes('typescript') || 
      description.includes('react') || description.includes('vue')) {
    return CATEGORIES.FRONTEND;
  }
  if (lang.includes('java') || lang.includes('python') || lang.includes('go') ||
      name.includes('api') || name.includes('server') || description.includes('spring')) {
    return CATEGORIES.BACKEND;
  }
  if (lang.includes('solidity') || name.includes('blockchain') || description.includes('web3')) {
    return CATEGORIES.BLOCKCHAIN;
  }

  return 'other';
};

// Componente de Icono de Tecnología
const TechIcon = ({ repo }) => {
  const lang = repo.language?.toLowerCase() || '';
  const description = repo.description?.toLowerCase() || '';

  const iconConfig = {
    react: { icon: FaReact, color: 'text-cyan-400', title: 'React' },
    java: { icon: FaJava, color: 'text-red-500', title: 'Java' },
    javascript: { icon: FaNodeJs, color: 'text-green-500', title: 'JavaScript' },
    typescript: { icon: FaNodeJs, color: 'text-blue-500', title: 'TypeScript' },
    database: { icon: FaDatabase, color: 'text-yellow-400', title: 'Database' }
  };

  let iconKey = 'code';
  
  if (description.includes('react')) iconKey = 'react';
  else if (lang.includes('java')) iconKey = 'java';
  else if (lang.includes('javascript')) iconKey = 'javascript';
  else if (lang.includes('typescript')) iconKey = 'typescript';
  else if (description.includes('mongo') || lang.includes('sql')) iconKey = 'database';

  const IconComponent = iconConfig[iconKey]?.icon || FaLock;
  const color = iconConfig[iconKey]?.color || 'text-gray-500';
  const title = iconConfig[iconKey]?.title || 'Code';

  return <IconComponent className={color} title={title} />;
};

// Componente de Tarjeta de Proyecto
const ProjectCard = ({ repo, featured = false }) => {
  const hasDemo = Boolean(repo.homepage);
  
  return (
    <div className={`
      bg-neutral-800 rounded-lg shadow-md border transition-all duration-300 
      hover:scale-[1.02] hover:shadow-lg hover:border-cyan-400
      ${featured ? 'border-yellow-400' : 'border-neutral-700'}
    `}>
      {featured && (
        <div className="bg-yellow-400 text-yellow-900 px-3 py-1 text-sm font-semibold text-center">
          ⭐ Destacado
        </div>
      )}
      
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-white flex-1 mr-2 line-clamp-1" title={repo.name}>
            {repo.name}
          </h3>
          <TechIcon repo={repo} />
        </div>

        {/* Descripción */}
        <p className="text-neutral-400 text-sm mb-4 line-clamp-2" title={repo.description}>
          {repo.description || 'Sin descripción disponible'}
        </p>

        {/* Stats */}
        <div className="flex justify-between items-center text-xs text-neutral-500 mb-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1" title="Stars">
              <FaStar className="text-yellow-400" /> {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1" title="Forks">
              <FaCodeBranch className="text-blue-400" /> {repo.forks_count}
            </span>
          </div>
          <span className="flex items-center gap-1" title="Última actualización">
            <FaCalendar className="text-green-400" />
            {new Date(repo.updated_at).toLocaleDateString('es-ES')}
          </span>
        </div>

        {/* Botones */}
        <div className={`flex gap-3 ${hasDemo ? '' : 'flex-col'}`}>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center justify-center py-2 px-4 rounded transition-colors
              bg-cyan-600 hover:bg-cyan-500 text-white font-medium
              ${hasDemo ? 'flex-1' : 'w-full'}
            `}
          >
            Ver Código
          </a>
          {hasDemo && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-600 hover:bg-green-500 text-white text-center py-2 px-4 rounded transition-colors font-medium"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Componente de Filtros
const FilterButtons = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { key: CATEGORIES.ALL, label: 'Todos' },
    { key: CATEGORIES.FRONTEND, label: 'Frontend' },
    { key: CATEGORIES.BACKEND, label: 'Backend' },
    { key: CATEGORIES.BLOCKCHAIN, label: 'Blockchain' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {filters.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onFilterChange(key)}
          className={`
            px-4 py-2 rounded-lg transition-all duration-200 font-medium
            ${currentFilter === key
              ? 'bg-cyan-600 text-white shadow-lg'
              : 'bg-neutral-800 text-neutral-300 border border-neutral-600 hover:border-cyan-400 hover:text-cyan-300'
            }
          `}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

// Componente Principal
const GitHubProjects = () => {
  const [filter, setFilter] = useState(CATEGORIES.ALL);
  const { repos, loading, error } = useGitHubRepos();

  // Memoized filtered repos
  const filteredRepos = useMemo(() => 
    filter === CATEGORIES.ALL ? repos : repos.filter(repo => repo.category === filter),
    [repos, filter]
  );

  const featuredProjects = useMemo(() => 
    repos.filter(repo => repo.isFeatured).slice(0, 6),
    [repos]
  );

  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="text-cyan-400 text-lg">Cargando proyectos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-400">
        Error al cargar proyectos: {error}
      </div>
    );
  }

  return (
    <section className="py-12 bg-neutral-900 text-neutral-200 font-mono">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400">
          Mis Proyectos
        </h2>

        {/* Estadísticas */}
        <div className="mb-12 bg-neutral-800 p-6 rounded-lg shadow-md border border-neutral-700">
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">
            📊 Dashboard de GitHub
          </h3>
          <GitHubStats />
          <RecentActivity />
        </div>

        {/* Proyectos Destacados */}
        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-yellow-400 text-center">
              🌟 Proyectos Destacados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map(repo => (
                <ProjectCard key={repo.id} repo={repo} featured={true} />
              ))}
            </div>
          </div>
        )}

        {/* Filtros */}
        <FilterButtons currentFilter={filter} onFilterChange={handleFilterChange} />

        {/* Lista de Proyectos */}
        {filteredRepos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.map(repo => (
              <ProjectCard key={repo.id} repo={repo} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-neutral-400">
            No hay proyectos en esta categoría
          </div>
        )}
      </div>
    </section>
  );
};

export default GitHubProjects;