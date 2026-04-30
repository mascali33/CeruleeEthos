# Traefik Configuration for SPA

To host this application using Traefik, you can use the provided `docker-compose.yml` which includes Traefik labels for automatic configuration.

## SPA Routing with Traefik
Since this is a Single Page Application (SPA), Traefik needs to redirect 404 errors to `index.html`. This is achieved using a combination of Docker labels and a dynamic configuration file.

### Docker Compose Labels
The `app` service in `docs/docker-compose.yml` is configured with these labels:

\`\`\`yaml
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.app.rule=Host(\`localhost\`)"
      - "traefik.http.routers.app.entrypoints=web"
      - "traefik.http.routers.app.middlewares=spa-rewrite"
      - "traefik.http.services.app.loadbalancer.server.port=80"
\`\`\`

### Dynamic Configuration
The `spa-rewrite` middleware is defined in `docs/traefik-dynamic-config.yaml`:

\`\`\`yaml
http:
  middlewares:
    spa-rewrite:
      errors:
        status:
          - "404"
        query: "/index.html"
        service: app-service
  services:
    app-service:
      loadBalancer:
        servers:
          - url: "http://app:80"
\`\`\`

## Running with Docker Compose
From the root of the project, run:
\`\`\`bash
docker-compose -f docs/docker-compose.yml up --build
\`\`\`
