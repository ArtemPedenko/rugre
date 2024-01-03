interface CustomFormData extends FormData {
  name: string;
  value: Blob;
  fileName?: string;
}
//https://arthttp.ru/api/images
//http://localhost:4000/api/images
async function sendFile(formData: CustomFormData) {
  console.log("formData");
  console.log(formData.get("file"));
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

export { sendFile };
