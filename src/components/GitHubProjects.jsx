import { useEffect, useState } from "react";

const GitHubProjects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/FlavioKde/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(repo => !repo.fork && !repo.private);
        setRepos(filtered);
      });
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {repos.map((repo) => (
        <div key={repo.id} className="border p-4 rounded shadow">
          <h3 className="text-lg font-semibold">{repo.name}</h3>
          <p className="text-sm text-gray-600">{repo.description}</p>
          <p className="text-xs text-gray-400">Tech: {repo.language}</p>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline text-sm"
          >
            Ver en GitHub →
          </a>
        </div>
      ))}
    </div>
  );
};

export default GitHubProjects;
