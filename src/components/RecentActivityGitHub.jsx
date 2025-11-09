import { useState, useEffect } from 'react';

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
    switch(type) {
      case 'PushEvent': return '📝';
      case 'CreateEvent': return '🆕';
      case 'WatchEvent': return '⭐';
      case 'ForkEvent': return '🍴';
      case 'IssuesEvent': return '🐛';
      case 'PullRequestEvent': return '🔀';
      default: return '📌';
    }
  };

  if (loading) return <div className="text-center py-4">Cargando actividad...</div>;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold mb-6 text-center">🔄 Actividad Reciente</h3>
      
      <div className="space-y-4">
        {activity.slice(0, 5).map((event, index) => (
          <div key={index} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg">
            <span className="text-xl">{getActivityIcon(event.type)}</span>
            <div className="flex-1">
              <p className="text-gray-800">
                {event.type === 'PushEvent' && `Push a ${event.repo.name}`}
                {event.type === 'CreateEvent' && `Creó ${event.repo.name}`}
                {event.type === 'WatchEvent' && `Star a ${event.repo.name}`}
                {event.type === 'ForkEvent' && `Fork de ${event.repo.name}`}
                {event.type === 'IssuesEvent' && `Issue en ${event.repo.name}`}
                {event.type === 'PullRequestEvent' && `Pull Request en ${event.repo.name}`}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(event.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
