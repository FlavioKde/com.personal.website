import { useState, useEffect } from 'react';
import { vscodeStyles, cn } from '../utils/vscodeStyles';

const RecentActivity = () => {
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const response = await fetch('https://api.github.com/users/FlavioKde/events?per_page=10');
        const data = await response.json();
        setActivity(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching activity:', error);
        setLoading(false);
      }
    };

    fetchActivity();
  }, []);

  const getActivityIcon = (type) => {
    switch (type) {
      case 'PushEvent': return '📝';
      case 'CreateEvent': return '🆕';
      case 'WatchEvent': return '⭐';
      case 'ForkEvent': return '🍴';
      case 'IssuesEvent': return '🐛';
      case 'PullRequestEvent': return '🔀';
      default: return '📌';
    }
  };

  if (loading) {
    return (
      <div className={cn('text-center py-4', vscodeStyles.text.muted)}>
        Cargando actividad...
      </div>
    );
  }

  return (
    <div className={cn('h-full flex flex-col rounded border border-[#454545] p-4', vscodeStyles.bg.tertiary)}>
      <h3 className={cn('text-sm font-semibold mb-4', vscodeStyles.text.secondary)}>
        🔄 Actividad Reciente
      </h3>

      <div className="space-y-2 flex-1">
        {activity.slice(0, 5).map((event, index) => (
          <div
            key={index}
            className={cn(
              'flex items-start gap-2 p-1.5 rounded border border-[#454545]',
              vscodeStyles.bg.secondary,
              'hover:bg-[#37373d] transition-colors'
            )}
          >
            <span className="text-xs">{getActivityIcon(event.type)}</span>
            <div className="flex-1 min-w-0">
              <p className={cn('text-[11px]', vscodeStyles.text.primary)}>
                {event.type === 'PushEvent' && `Push a ${event.repo.name}`}
                {event.type === 'CreateEvent' && `Creó ${event.repo.name}`}
                {event.type === 'WatchEvent' && `Star a ${event.repo.name}`}
                {event.type === 'ForkEvent' && `Fork de ${event.repo.name}`}
                {event.type === 'IssuesEvent' && `Issue en ${event.repo.name}`}
                {event.type === 'PullRequestEvent' && `Pull Request en ${event.repo.name}`}
              </p>
              <p className={cn('text-[9px] mt-0.5', vscodeStyles.text.muted)}>
                {new Date(event.created_at).toLocaleDateString('es-ES')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
