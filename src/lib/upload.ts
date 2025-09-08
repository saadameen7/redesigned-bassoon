export type UploadResponse = {
  fileUrl: string;
  fileId?: string;
};

async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const base64 = result.includes(",") ? result.split(",")[1] : result;
      resolve(base64);
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export async function uploadFileToAppsScript(file: File): Promise<UploadResponse> {
  const endpoint = import.meta.env.VITE_UPLOAD_PROXY_URL || "/.netlify/functions/gas-proxy";

  const base64 = await fileToBase64(file);

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      filename: file.name,
      mimeType: file.type || "application/octet-stream",
      data: base64,
    }),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`Upload failed (${response.status}): ${text}`);
  }

  const json = await response.json().catch(() => null);
  if (!json || (!json.fileUrl && !json.url)) {
    throw new Error("Unexpected upload response. Expected JSON with fileUrl");
  }

  return { fileUrl: json.fileUrl || json.url, fileId: json.fileId };
}

