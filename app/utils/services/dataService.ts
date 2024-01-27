async function getAllData(slug: string) {
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

async function getOneData(slug: string[]) {
  const res = await fetch("/admin/api", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      url: `https://arthttp.ru/api/${slug[0]}/${slug[1]}`,
    },
  });
  return await res.json();
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

async function uploadData(body: any) {
  const res = await fetch("/admin/api", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      url: "https://arthttp.ru/api/posts",
      case: "post",
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  console.log(response);
}

async function uploadVideo(body: any) {
  const res = await fetch("/admin/api", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      url: "https://arthttp.ru/api/videos",
      case: "post",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
}

async function changeData(body: any, slug: string[]) {
  const res = await fetch("/admin/api", {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      url: `https://arthttp.ru/api/${slug[0]}/${slug[1]}`,
      case: "post",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
}

export {
  getAllData,
  getOneData,
  deleteItem,
  uploadData,
  changeData,
  uploadVideo,
};
