import { posts } from "#site/content";
import PostItem from "@/app/blog/_components/PostItem";
import Tag from "@/components/ui/Tag";
import { getAllTags, sortPostsByDate, sortTagsByCount } from "@/lib/utils";

interface BlogPageProps {
  searchParams: {
    tag: string;
  };
}

export default function Blog({ searchParams }: BlogPageProps) {
  const sortedPosts = sortPostsByDate(posts.filter((post) => post.published));
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  const { tag } = searchParams;
  const filteredPosts = tag
    ? sortedPosts.filter((post) => post.tags && post.tags.includes(tag))
    : sortedPosts;
  return (
    <div className='container max-w-screen-lg py-6 lg:py-10'>
      {/* <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-y-4'>
          <h1 className='inline-block font-black text-3xl lg:text-4xl'>Blog</h1>
          <p className='text-xl text-muted-foreground'>개발 블로그</p>
        </div>
      </div> */}
      <div className='flex flex-wrap gap-2'>
        {sortedTags?.map((tagItem) => (
          <Tag
            key={tagItem}
            tag={tagItem}
            count={tags[tagItem]}
            isActive={tag === tagItem}
          />
        ))}
      </div>
      <div className='mt-8' />
      {filteredPosts?.length > 0 ? (
        <ul className='flex flex-col gap-4'>
          {filteredPosts.map((post) => {
            const { slug, date, title, description, tags, thumbnail } = post;
            return (
              <li key={slug}>
                <PostItem
                  slug={slug}
                  date={date}
                  title={title}
                  description={description}
                  tags={tags}
                  thumbnail={thumbnail}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>게시글 없음</p>
      )}
    </div>
  );
}
