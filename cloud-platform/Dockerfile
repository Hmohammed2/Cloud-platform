# Nginx to serve static files
FROM nginx:stable-alpine
COPY default.conf /etc/nginx/conf.d/default.conf
 
# Copy static landing page
COPY index.html /usr/share/nginx/html/index.html
COPY js /usr/share/nginx/html/js
COPY assets /usr/share/nginx/html/assets

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]