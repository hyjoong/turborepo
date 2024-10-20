import Link from "next/link";
import { cn, formatDate } from "@/lib/utils";
import Tag from "@/components/ui/Tag";
import { buttonVariants } from "@/components/ui/button";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: string[];
  thumbnail?: string;
}

const PostItem = ({
  slug,
  title,
  description,
  date,
  tags,
  thumbnail,
}: PostItemProps) => {
  return (
    <Link href={slug}>
      <article className='flex flex-col-reverse sm:flex-row justify-between gap-2 border p-4 rounded-md hover:border-primary transition-all duration-300 shadow-md'>
        <div className='flex flex-col justify-between'>
          <div>
            <div>
              <h2 className='text-xl sm:text-2xl font-bold'>{title}</h2>
            </div>
            <span className='max-w-none text-muted-foreground mt-1 text-xs sm:text-sm line-clamp-2 md:line-clamp-3'>
              {description}
            </span>
          </div>
          <div>
            <div className='flex gap-2 mt-2'>
              {tags?.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
            <div className='flex justify-between items-end'>
              <dl>
                <dd className='text-sm sm:text-base font-medium flex items-center gap-1'>
                  <span className='text-xs sm:text-sm'>{formatDate(date)}</span>
                </dd>
              </dl>
              <Link
                href={slug}
                className={cn(buttonVariants({ variant: "link" }), "py-0")}
              ></Link>
            </div>
          </div>
        </div>
        {thumbnail && ( // TODO: thumbnail이 없을 때 기본 이미지 표시
          <img
            src={thumbnail}
            className='sm:w-[170px] max-h-[240px] sm:h-[170px] sm:ml-2 rounded-md object-cover'
            alt='thumbnail'
          />
        )}
      </article>
    </Link>
  );
};

export default PostItem;
