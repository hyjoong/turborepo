import { getAndFormatNotionData, getDataByCategory } from "@/lib/notion";
import Link from "next/link";
import React from "react";

interface ContentSectionProps {
  title: string;
  category: "troubleshooting" | "retrospective";
}

const ContentSection = async ({ title, category }: ContentSectionProps) => {
  const notionData = await getAndFormatNotionData("type", category);
  // TODO: 데이터 없을경우 처리
  if (notionData.length === 0) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <section className='p-6 rounded-md shadow-md'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <p className='font-bold'>({notionData.length})</p>
      </div>
      <ul className='flex flex-col gap-2'>
        {notionData.map((item) => (
          <li key={item.id} className='truncate'>
            <Link href={item.slug} target='_blank'>
              <span className='text-base font-medium group-hover:text-primary transition-colors'>
                {item.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContentSection;
