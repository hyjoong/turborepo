interface NotionUser {
  object: string;
  id: string;
}

interface NotionText {
  type: string;
  text: {
    content: string;
    link: string | null;
  };
  annotations: object;
  plain_text: string;
  href: string | null;
}

interface NotionSelect {
  id: string;
  name: string;
  color: string;
}

interface NotionProperty {
  id: string;
  type: string;
  rich_text?: NotionText[];
  title?: NotionText[];
  select?: NotionSelect;
}

export interface NotionPage {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: NotionUser;
  last_edited_by: NotionUser;
  cover: string | null;
  icon: string | null;
  parent: {
    type: string;
    database_id: string;
  };
  archived: boolean;
  in_trash: boolean;
  properties: {
    type: NotionProperty;
    company: NotionProperty;
    slug: NotionProperty;
    title: NotionProperty;
  };
  url: string;
  public_url: string;
}

export interface NotionResponse {
  results: NotionPage[];
}
