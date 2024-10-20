import { DATABASE_ID } from "@/constants/env";
import { notionClientInstance } from "@/lib/notionClient";
// import { NotionPage, NotionResponse } from "@/app/types/notion";
// import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const getDataByCategory = async (
  property: string,
  targetString: string
) => {
  const response = await notionClientInstance.databases.query({
    database_id: DATABASE_ID ?? "",
    filter: {
      select: {
        equals: targetString,
      },
      property: property,
    },
  });
  const { results } = response;
  return results;
};

// TODO: type 정의
const extractPlainText = (data: any[]) => {
  return data.map((item) => {
    const id = item.id;
    // const slugText = item.properties.slug.rich_text?.[0]?.plain_text || "";
    const slug = item.public_url;
    const titleText = item.properties.title.title?.[0]?.plain_text || "";
    return { id: id, slug: slug, title: titleText };
  });
};

export const getAndFormatNotionData = async (
  property: string,
  targetString: string
) => {
  const data = await getDataByCategory(property, targetString);
  return extractPlainText(data);
};
