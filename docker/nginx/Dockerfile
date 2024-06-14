FROM nginx:1.23.3-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY my_ssl_cert.crt /etc/nginx/ssl/my_ssl_cert.crt
COPY my_ssl_cert.pem /etc/nginx/ssl/my_ssl_cert.pem

EXPOSE 80
EXPOSE 443