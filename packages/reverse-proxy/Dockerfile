ARG PROXY_VERSION

# FROM nginx:${PROXY_VERSION}
FROM traefik:${PROXY_VERSION}

# COPY ./packages/reverse-proxy/nginx.conf nginx.conf 
# COPY ./packages/reverse-proxy/traefik.yml /etc/traefik/traefik.yml
COPY ./packages/reverse-proxy/traefik.yml /etc/traefik/traefik.yml
# /etc/nginx/nginx.conf