const API_URL: any = process.env.WP_URL;

async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getLatestPosts() {
  const data = await fetchAPI(
    `
      query FavoitePosts {
         posts {
    nodes {
      title
      id
      editorBlocks {
        ... on CoreParagraph {
          attributes {
            content
          }
        }
        ... on CoreImage {
          attributes {
            src
          }
        }
        ... on CoreFile {
          attributes {
            href
          }
        }
      }
    }
  }
      }
      `,
  );

  return data?.posts.nodes;
}

export const revalidate = 3;
