/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_PUBLIC_KEY: string
  readonly VITE_EMAILJS_SERVICE_ID: string
  readonly VITE_EMAILJS_TEMPLATE_ID: string
  readonly VITE_APPS_SCRIPT_UPLOAD_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
