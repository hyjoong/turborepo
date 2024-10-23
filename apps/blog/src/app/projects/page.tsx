import { projects } from "#site/content";
import ProjectItem from "@/app/projects/_components/ProjectItem";

export default function Project() {
  const sortedProject = projects.filter((project) => project.published);

  return (
    <>
      <div className='easy-out divide-y divide-gray-200 transition-colors dark:divide-gray-700'>
        <div className='container py-12'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
            {sortedProject?.map((project) => (
              <ProjectItem
                key={project.title}
                title={project.title}
                description={project.description}
                slug={project.slug}
                thumbnail={project.thumbnail}
                tags={project.skills}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
