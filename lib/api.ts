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
        posts(first: 10) {
          nodes {
            slug
            title
            content
          }
        }
      }
      `
	);

	return data?.posts;
}

export const revalidate = 3;
