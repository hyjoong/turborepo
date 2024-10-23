import Tag from "@/components/ui/Tag";
import Image from "next/image";
import Link from "next/link";

interface ProjectItemProps {
  title: string;
  description: string;
  slug: string;
  thumbnail?: string;
  tags?: string[];
}

const ProjectItem = ({
  title,
  description,
  slug,
  thumbnail,
  tags,
}: ProjectItemProps) => {
  return (
    <div>
      <div>
        <Link href={`/${slug}`}>
          <Image
            src={`/${thumbnail}` || ""}
            width={500}
            height={400}
            className='object-cover object-center w-full h-56 sm:h-40 lg:h-60'
            alt={`${title} image`}
          />
          <div className='flex flex-col gap-1 pt-2'>
            <h2 className='text-lg font-bold'>{title}</h2>
            <p className='text-tertiary text-sm' aria-hidden='true'>
              {description}
            </p>
            {tags && (
              <ul className='mt-2 flex flex-wrap gap-1.5'>
                {tags.map((tag) => (
                  <Tag key={tag} tag={tag} />
                ))}
              </ul>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
