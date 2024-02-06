interface Data {
  level?: number;
  text?: string;
  url?: string;
}

interface Block {
  data: Data;
  id: string;
  type: string;
}

interface Content {
  blocks: Block[];
}

interface Post {
  date: string;
  id: string;
  content: Content;
}

export type { Post, Data, Content, Block };
