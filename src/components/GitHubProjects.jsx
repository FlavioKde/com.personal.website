import { useState, useEffect, useMemo, useCallback } from 'react';
import { FaReact, FaJava, FaNodeJs, FaDatabase, FaLock, FaStar, FaCodeBranch, FaCalendar, FaUsers } from 'react-icons/fa';
import GitHubStats from './GitHubStats';
import RecentActivity from './RecentActivityGitHub';

// Constantes para mejor mantenibilidad
const CATEGORIES = {
  ALL: 'all',
  FRONTEND: 'frontend',
  BACKEND: 'backend',
  BLOCKCHAIN: 'blockchain'
};

// Listas manuales de proyectos
const FEATURED_REPOS = [
  'com.propydis.studio',
  'com.chatbot.onbording', 
  's05t01n01-blackjack'
];

const NORMAL_REPOS = [
  's5.02.web_application',
  'mongo-crud-app',
  'blockchain-wallet',
  'otro-proyecto-4',
  'otro-proyecto-5',
  'otro-proyecto-6'
];

const COLLABORATION_REPOS = [
  'ita-challenges-frontend',
  'ita-challenges-backend',
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
const TechIcon = ({ repo, collaboration = false }) => {
  const lang = repo.language?.toLowerCase() || '';
  const description = repo.description?.toLowerCase() || '';

  const iconConfig = {
    react: { icon: FaReact, color: 'text-cyan-400', title: 'React' },
    java: { icon: FaJava, color: 'text-red-500', title: 'Java' },
    javascript: { icon: FaNodeJs, color: 'text-green-500', title: 'JavaScript' },
    typescript: { icon: FaNodeJs, color: 'text-blue-500', title: 'TypeScript' },
    database: { icon: FaDatabase, color: 'text-yellow-400', title: 'Database' },
    collaboration: { icon: FaUsers, color: 'text-purple-400', title: 'Colaboración' }
  };

  let iconKey = 'code';
  
  if (collaboration) iconKey = 'collaboration';
  else if (description.includes('react')) iconKey = 'react';
  else if (lang.includes('java')) iconKey = 'java';
  else if (lang.includes('javascript')) iconKey = 'javascript';
  else if (lang.includes('typescript')) iconKey = 'typescript';
  else if (description.includes('mongo') || lang.includes('sql')) iconKey = 'database';

  const IconComponent = iconConfig[iconKey]?.icon || FaLock;
  const color = iconConfig[iconKey]?.color || 'text-gray-500';
  const title = iconConfig[iconKey]?.title || 'Code';

  return <IconComponent className={color} title={title} />;
};

// Skeleton Loading
const ProjectCardSkeleton = () => (
  <div className="bg-neutral-800 rounded-lg border border-neutral-700 p-6 animate-pulse">
    <div className="flex justify-between mb-3">
      <div className="h-6 bg-neutral-700 rounded w-3/4"></div>
      <div className="h-6 w-6 bg-neutral-700 rounded-full"></div>
    </div>
    <div className="h-4 bg-neutral-700 rounded mb-2"></div>
    <div className="h-4 bg-neutral-700 rounded w-2/3"></div>
    <div className="flex justify-between mb-4 mt-3">
      <div className="h-4 bg-neutral-700 rounded w-1/4"></div>
      <div className="h-4 bg-neutral-700 rounded w-1/4"></div>
    </div>
    <div className="h-10 bg-neutral-700 rounded"></div>
  </div>
);

// Componente de Tarjeta de Proyecto
const ProjectCard = ({ repo, featured = false, collaboration = false }) => {
  const hasDemo = Boolean(repo.homepage);
  
  return (
    <div className={`
      bg-neutral-800 rounded-lg shadow-md border transition-all duration-300 
      hover:scale-[1.02] hover:shadow-lg hover:border-cyan-400
      ${featured ? 'border-yellow-400' : collaboration ? 'border-purple-400' : 'border-neutral-700'}
    `}>
      {(featured || collaboration) && (
        <div className={`px-3 py-1 text-sm font-semibold text-center ${
          featured ? 'bg-yellow-400 text-yellow-900' : 'bg-purple-400 text-purple-900'
        }`}>
          {featured ? '⭐ Destacado' : '🤝 Colaboración'}
        </div>
      )}
      
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-white flex-1 mr-2 line-clamp-1" title={repo.name}>
            {repo.name}
          </h3>
          <TechIcon repo={repo} collaboration={collaboration} />
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

  // Proyectos destacados (3 manuales)
  const featuredProjects = useMemo(() => 
    repos.filter(repo => FEATURED_REPOS.includes(repo.name)).slice(0, 3),
    [repos]
  );

  // Proyectos normales (6 manuales, excluyendo destacados)
  const normalProjects = useMemo(() => {
    const filtered = filter === CATEGORIES.ALL 
      ? repos 
      : repos.filter(repo => repo.category === filter);
    
    const featuredIds = featuredProjects.map(repo => repo.id);
    const nonFeatured = filtered.filter(repo => 
      !featuredIds.includes(repo.id) && NORMAL_REPOS.includes(repo.name)
    );
    
    return nonFeatured.slice(0, 6);
  }, [repos, filter, featuredProjects]);

  // Proyectos de colaboración (hasta 3)
  const collaborationProjects = useMemo(() => {
    return repos.filter(repo => 
      COLLABORATION_REPOS.includes(repo.name) || repo.fork
    ).slice(0, 3);
  }, [repos]);

  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
  }, []);

  // Loading State con Skeletons
  if (loading) {
    return (
      <section className="py-12 bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400">Mis Proyectos</h2>
          
          {/* Skeleton para destacados */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-yellow-400 text-center">
              🌟 Proyectos Destacados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <ProjectCardSkeleton key={i} />
              ))}
            </div>
          </div>

          {/* Skeleton para colaboraciones */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-purple-400 text-center">
              🤝 Colaboraciones
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <ProjectCardSkeleton key={i} />
              ))}
            </div>
          </div>

          {/* Skeleton para filtros */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-10 w-20 bg-neutral-800 rounded-lg animate-pulse"></div>
            ))}
          </div>
          
          {/* Skeleton para proyectos normales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
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

        {/* Colaboraciones */}
        {collaborationProjects.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-purple-400 text-center">
              🤝 Colaboraciones
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collaborationProjects.map(repo => (
                <ProjectCard key={repo.id} repo={repo} collaboration={true} />
              ))}
            </div>
          </div>
        )}

        {/* Filtros */}
        <FilterButtons currentFilter={filter} onFilterChange={handleFilterChange} />

        {/* Proyectos Normales */}
        {normalProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {normalProjects.map(repo => (
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