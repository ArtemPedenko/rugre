import { endpoints } from "@/app/utils/constants";
interface CustomFormData extends FormData {
  name: string;
  value: Blob;
  fileName?: string;
}

async function sendImage(formData: FormData) {
  const res = await fetch(`/admin/api`, {
    method: "POST",
    credentials: "include",
    body: formData,
    headers: {
      case: "fileUpload",
      url: endpoints.images,
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
      url: endpoints.docs,
    },
  });

  return await res.json();
}

export { sendImage, sendFile };
