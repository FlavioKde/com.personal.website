import GitHubProjects from "./GitHubProjects";
import { vscodeStyles, cn } from '../utils/vscodeStyles';

const Projects = () => (
  <section className="my-12">
    <h2 className={cn('text-2xl font-bold mb-4', vscodeStyles.text.primary)}>Proyectos en GitHub</h2>
    <GitHubProjects />
  </section>
);

export default Projects;
