import { NOTION_API_KEY } from "@/constants/env";
import { Client } from "@notionhq/client";

const createNotionClientInstance = () => {
  return new Client({
    auth: NOTION_API_KEY,
    fetch: fetch,
  });
};

export const notionClientInstance = createNotionClientInstance();
