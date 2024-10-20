import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Post } from "#site/content";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (input: string | number) => {
  const date = new Date(input);
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const sortPostsByDate = (posts: Post[]) => {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
};

export const getAllTags = (posts: Post[]) => {
  const tags: Record<string, number> = {};
  posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tags[tag] = (tags[tag] ?? 0) + 1;
    });
  });
  return tags;
};

export const sortTagsByCount = (tags: Record<string, number>) => {
  return Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
};
