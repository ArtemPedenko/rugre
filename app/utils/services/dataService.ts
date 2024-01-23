async function getData(slug: string) {
  const res = await fetch(`/admin/api`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      url: `https://arthttp.ru/api/${slug}`,
    },
  });
  const data = await res.json();
  if (Array.isArray(data)) {
    return data;
  } else {
    throw new Error(data.message);
  }
}

async function deleteItem(id: string, slug: string) {
  await fetch(`/admin/api`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      url: `https://arthttp.ru/api/${slug}/${id}`,
    },
  });
}

export { getData, deleteItem };
