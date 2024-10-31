import { Client } from '@notionhq/client';

import { NOTION_API_KEY } from '@/constants/env';

const createNotionClientInstance = () => {
  return new Client({
    auth: NOTION_API_KEY,
    fetch: fetch,
  });
};

export const notionClientInstance = createNotionClientInstance();
