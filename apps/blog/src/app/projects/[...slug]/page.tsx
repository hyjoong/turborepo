import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "#site/content";
import { Calendar, User } from "lucide-react";
import MDXContent from "@/components/common/mdx-component";
import Github from "@/components/Icons/Github";
import ProgressBar from "@/components/ui/ProgressBar";

interface ProjectPageProps {
  params: {
    slug: string[];
  };
}

const getProject = (params: ProjectPageProps["params"]) => {
  const slug = params?.slug.join("/");
  return projects.find((project) => project.slugAsParams === slug);
};

export const generateMetadata = async ({
  params,
}: ProjectPageProps): Promise<Metadata> => {
  const project = getProject(params);

  if (!project || !project.published) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: project.slug,
      images: [
        {
          url: `https://hyjoong.com/${project.thumbnail}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const project = await getProject(params);

  if (!project || !project.published) {
    notFound();
  }

  return (
    <div>
      <ProgressBar />
      <article className='container max-w-screen-lg pt-6 pb-20 prose dark:prose-invert'>
        <div>
          <h1 className='text-3xl sm:text-4xl font-extrabold text-center mb-4'>
            {project.title}
          </h1>
        </div>
        <hr className='my-7' />
        {project.thumbnail && (
          <div className='flex justify-center'>
            <Image
              src={`/${project.thumbnail}`}
              alt='thumbnail'
              width={400}
              height={400}
            />
          </div>
        )}
        <div className='flex flex-start items-center'>
          <User className='w-4 mr-2' />
          <span className='font-medium'>{project.team}</span>
        </div>
        <div className='flex flex-start items-center'>
          <Calendar className='w-4 mr-2' />
          <span className='font-medium'>{project.date}</span>
        </div>
        <div className='flex flex-start items-center'>
          <Github className='w-4 mr-2' />
          <Link href={project.repository} className='no-underline'>
            Github Repository
          </Link>
        </div>
        <MDXContent code={project.body} />
      </article>
    </div>
  );
};

export default ProjectPage;
