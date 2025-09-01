# Build React app
FROM node:23-alpine AS builder
WORKDIR /app/frontend
COPY app/package*.json ./
RUN npm install
COPY app ./
RUN npm run build

# Nginx to serve static files
FROM nginx:stable-alpine
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy static landing page
COPY index.html /usr/share/nginx/html/index.html
COPY js /usr/share/nginx/html/js
COPY assets /usr/share/nginx/html/assets

# Copy sitemap + robots.txt to root (important for SEO)
COPY sitemap.xml /usr/share/nginx/html/sitemap.xml
COPY robots.txt /usr/share/nginx/html/robots.txt

# Copy React build (served under /app)
COPY --from=builder /app/frontend/dist /usr/share/nginx/html/app

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
