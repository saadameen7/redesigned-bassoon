# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/fa8a4142-c205-4a9d-91e3-ec3daf65da55

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/fa8a4142-c205-4a9d-91e3-ec3daf65da55) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/fa8a4142-c205-4a9d-91e3-ec3daf65da55) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Contact form: EmailJS setup

This project uses EmailJS to send contact form submissions.

1) Install deps (already installed): `@emailjs/browser`

2) Create a `.env` file based on `.env.example` and set:

```
VITE_EMAILJS_PUBLIC_KEY=...
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
```

3) In EmailJS, ensure your template has these variables:

- `from_name`
- `reply_to`
- `message`

4) Restart dev server after setting env vars.

Form code: `src/components/Contact.tsx` uses `sendContactEmail` from `src/lib/email.ts` and shows success/error toasts.

## Optional: Upload attachments to Google Drive via Apps Script

The contact form supports an optional file attachment. If configured, the file will be uploaded to your Google Drive via a Google Apps Script Web App and the resulting file URL will be included in the EmailJS template as `attachment_url`.

1) Create a new Google Apps Script project

- Go to `https://script.google.com` and create a new project
- Replace `Code.gs` contents with this:

```javascript
function doPost(e) {
  try {
    var folderId = PropertiesService.getScriptProperties().getProperty('FOLDER_ID');
    if (!folderId) {
      return ContentService.createTextOutput('Missing FOLDER_ID').setMimeType(ContentService.MimeType.TEXT).setResponseCode(500);
    }
    var folder = DriveApp.getFolderById(folderId);
    var payload = e && e.postData && e.postData.contents ? JSON.parse(e.postData.contents) : null;
    if (!payload || !payload.data) {
      return ContentService.createTextOutput('Invalid payload').setMimeType(ContentService.MimeType.TEXT).setResponseCode(400);
    }
    var bytes = Utilities.base64Decode(payload.data);
    var blob = Utilities.newBlob(bytes, payload.mimeType || 'application/octet-stream', payload.filename || 'upload');
    var file = folder.createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    var url = 'https://drive.google.com/uc?export=view&id=' + file.getId();
    var result = { fileUrl: url, fileId: file.getId() };
    return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput('Error: ' + err).setMimeType(ContentService.MimeType.TEXT).setResponseCode(500);
  }
}
```

2) Choose a Drive folder and set its ID

- Create or choose a folder in Google Drive where uploads will be stored
- Copy its ID from the URL (`https://drive.google.com/drive/folders/<FOLDER_ID>`) 
- In Apps Script, go to Project Settings → Script properties and create a property `FOLDER_ID` with that value

3) Deploy as Web App

- In Apps Script: Deploy → New deployment → Type: Web app
- Execute as: Me
- Who has access: Anyone with the link
- Click Deploy and copy the Web app URL

4) Configure the frontend

- Create or update your `.env` file:

```
VITE_APPS_SCRIPT_UPLOAD_URL=<your_web_app_url>
```

- Restart the dev server if running

5) Update your EmailJS template (optional)

- Add a variable named `attachment_url` to your EmailJS template so the uploaded file link can be included in the email

Implementation details:

- The uploader is in `src/lib/upload.ts` and expects the Web App to return JSON with `{ fileUrl: string, fileId?: string }`.
- The contact form (`src/components/Contact.tsx`) will upload the file first (if selected) and then send the email including `attachment_url`.
