interface CustomFormData extends FormData {
  name: string;
  value: Blob;
  fileName?: string;
}
//https://arthttp.ru/api/images
//http://localhost:4000/api/images
async function sendImage(formData: FormData) {
  const res = await fetch(`/admin/api`, {
    method: "POST",
    credentials: "include",
    body: formData,
    headers: {
      case: "fileUpload",
      url: "https://arthttp.ru/api/images",
    },
  });

  return await res.json();
}

async function sendFile(formData: CustomFormData) {
  const res = await fetch(`/admin/api`, {
    method: "POST",
    credentials: "include",
    body: formData,
    headers: {
      case: "fileUpload",
      url: "https://arthttp.ru/api/docs",
    },
  });

  return await res.json();
}

export { sendImage, sendFile };
