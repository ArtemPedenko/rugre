interface CustomFormData extends FormData {
  name: string;
  value: Blob;
  fileName?: string;
}
//https://arthttp.ru/api/images
async function sendFile(formData: CustomFormData) {
  const res = await fetch("https://arthttp.ru/api/images", {
    method: "POST",
    credentials: "include",
    body: formData,
  });
  return await res.json();
}

export { sendFile };
