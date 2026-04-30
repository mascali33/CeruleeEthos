# Build and Launch Instructions

## Prerequisites
- Node.js (v18 or later)
- npm

## Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Production Build
1. Build the application:
   ```bash
   npm run build
   ```
2. Built assets are in `dist/`.

## Deployment

### Render (Manual Configuration)
To fix 404 errors on refresh when hosting as a Static Site on Render:
1. Go to your service in the Render Dashboard.
2. Navigate to the **Redirects/Rewrites** tab.
3. Click **Add Rule**.
4. Set **Source Path** to `/*`.
5. Set **Destination Path** to `/index.html`.
6. Set **Action** to **Rewrite**.
7. Save the changes.

### Docker
From the root directory:
```bash
docker-compose -f docs/docker-compose.yml up --build
```
This will start the application with an Nginx server and a Traefik reverse proxy, both configured for SPA routing.

### Nginx (Manual)
Use the configuration in `docs/nginx.conf`. Ensure `try_files $uri $uri/ /index.html;` is present in your server block.

### Apache2 (Manual)
Use the configuration in `docs/apache2.conf`. Ensure `mod_rewrite` is enabled and the `.htaccess` (or server config) redirects non-existent files to `index.html`.

### Caddy (Manual)
Use the configuration in `docs/Caddyfile`. The `try_files {path} /index.html` directive handles the SPA routing.
