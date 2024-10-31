import { notFound } from 'next/navigation';

import { Calendar, Clock3 } from 'lucide-react';
import { Metadata } from 'next';
import readingTime from 'reading-time';

import { posts } from '#site/content';
import { BlogBreadCrumb } from '@/app/blog/[...slug]/_components/BlogBreadCrumb';
import Giscus from '@/components/common/Giscus';
import MDXContent from '@/components/common/mdx-component';
import ProgressBar from '@/components/ui/ProgressBar';
import Tag from '@/components/ui/Tag';
import { siteConfig } from '@/config/site';
import '@/styles/mdx.css';
import { formatDate } from '@/lib/utils';

interface PostPageProps {
  params: {
    slug: string[];
  };
}
const getPost = async (params: PostPageProps['params']) => {
  const slug = params?.slug.join('/');
  const post = posts.find((post) => post.slugAsParams === slug);
  return post;
};

export const generateMetadata = async ({
  params,
}: PostPageProps): Promise<Metadata> => {
  const post = await getPost(params);

  if (!post || !post.published) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set('title', post.title);
  ogSearchParams.set('description', post.description ?? '');

  const thumbnailUrl = post.thumbnail
    ? `https://hyjoong.com/${post.thumbnail}`
    : `api/og?${ogSearchParams.toString()}`;

  return {
    title: post.title,
    description: post.description,
    authors: {
      name: siteConfig.author,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: post.slug,
      images: [
        {
          url: thumbnailUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [thumbnailUrl],
    },
  };
};

const page = async ({ params }: PostPageProps) => {
  const post = await getPost(params);

  if (!post || !post.published) {
    notFound();
  }
  return (
    <>
      <ProgressBar />
      <div className='px-6'>
        <BlogBreadCrumb title={post.title} slug={post.slug} />
      </div>
      <article className='container max-w-screen-lg pt-6 pb-20 prose dark:prose-invert'>
        <div>
          <h1 className='text-3xl sm:text-4xl font-extrabold text-center mb-4'>
            {post.title}
          </h1>
          <div className='flex justify-center gap-2 mb-2'>
            {post.tags?.map((tag) => (
              <Tag tag={tag} key={tag} />
            ))}
          </div>
          <div className='flex justify-center items-center space-x-3 text-sm text-center'>
            <div className='flex items-center gap-1'>
              <Calendar className='w-3.5' />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className='flex items-center gap-1'>
              <Clock3 className='w-3.5' />
              <span>{Math.ceil(readingTime(post.body).minutes)}분</span>
            </div>
          </div>
        </div>
        <hr className='my-7' />
        <MDXContent code={post.body} />
        <Giscus />
      </article>
    </>
  );
};

export default page;
