import { useState, useEffect } from 'react';

const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('https://api.github.com/users/FlavioKde');
        const userData = await response.json();
        
        // Podés agregar más endpoints aquí para obtener más datos
        setStats({
          publicRepos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          createdAt: userData.created_at,
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching stats:', error);
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <div className="text-center py-4">Cargando estadísticas...</div>;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h3 className="text-2xl font-bold mb-6 text-center">📊 Estadísticas de GitHub</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <div className="text-3xl font-bold text-blue-600">{stats.publicRepos}</div>
          <div className="text-gray-600">Repositorios</div>
        </div>
        
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-3xl font-bold text-green-600">{stats.followers}</div>
          <div className="text-gray-600">Seguidores</div>
        </div>
        
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <div className="text-3xl font-bold text-purple-600">{stats.following}</div>
          <div className="text-gray-600">Siguiendo</div>
        </div>
        
        <div className="text-center p-4 bg-orange-50 rounded-lg">
          <div className="text-3xl font-bold text-orange-600">
            {new Date().getFullYear() - new Date(stats.createdAt).getFullYear()}
          </div>
          <div className="text-gray-600">Años en GitHub</div>
        </div>
      </div>
      
      {/* Gráfico de contribuciones (placeholder) */}
      <div className="mt-6 text-center">
        <img 
          src={`https://ghchart.rshah.org/FlavioKde`} 
          alt="GitHub Contributions Chart" 
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default GitHubStats;
