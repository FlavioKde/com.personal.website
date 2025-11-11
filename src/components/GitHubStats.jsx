import { useState, useEffect } from 'react';
import { vscodeStyles, cn } from '../utils/vscodeStyles';

const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('https://api.github.com/users/FlavioKde');
        const userData = await response.json();
        
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

  if (loading) {
    return (
      <div className={cn('text-center py-4', vscodeStyles.text.muted)}>
        Cargando estadísticas...
      </div>
    );
  }

  const yearsOnGitHub = new Date().getFullYear() - new Date(stats.createdAt).getFullYear();

  return (
    <div className={cn('h-full flex flex-col', vscodeStyles.bg.tertiary, 'rounded border border-[#454545] p-4')}>
      {/* Estadísticas en vertical - estilo VSCode */}
      <div className="flex flex-col gap-2 h-full">
        <div className={cn('flex items-center justify-between p-3 rounded border border-[#454545]', vscodeStyles.bg.secondary)}>
          <div className={cn('text-sm', vscodeStyles.text.muted)}>Repositorios</div>
          <div className={cn('text-xl font-bold', vscodeStyles.ui.blue)}>{stats.publicRepos}</div>
        </div>
        
        <div className={cn('flex items-center justify-between p-3 rounded border border-[#454545]', vscodeStyles.bg.secondary)}>
          <div className={cn('text-sm', vscodeStyles.text.muted)}>Seguidores</div>
          <div className={cn('text-xl font-bold', vscodeStyles.ui.green)}>{stats.followers}</div>
        </div>
        
        <div className={cn('flex items-center justify-between p-3 rounded border border-[#454545]', vscodeStyles.bg.secondary)}>
          <div className={cn('text-sm', vscodeStyles.text.muted)}>Siguiendo</div>
          <div className={cn('text-xl font-bold', vscodeStyles.ui.purple)}>{stats.following}</div>
        </div>
        
        <div className={cn('flex items-center justify-between p-3 rounded border border-[#454545]', vscodeStyles.bg.secondary)}>
          <div className={cn('text-sm', vscodeStyles.text.muted)}>Años en GitHub</div>
          <div className={cn('text-xl font-bold', vscodeStyles.ui.orange)}>{yearsOnGitHub}</div>
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
