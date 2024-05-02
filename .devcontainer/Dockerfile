FROM mcr.microsoft.com/devcontainers/base:alpine
# FROM node:20-alpine AS base
# # Install the xz-utils package

RUN apk update && apk add --update nodejs npm
RUN npm i -g corepack
# Install pnpm
RUN corepack enable && corepack prepare pnpm@7.29.0 --activate
RUN git config --global user.email "biniamdev@gmail.com"
RUN git config --global user.name "biniamkiros"
# RUN apk update && apk add \
#      nodejs \
#      npm \
#      && rm -rf /var/cache/* \
#      && mkdir /var/cache/apk
     
     # curl \
# RUN mkdir -p /bin && curl -fsSL "https://github.com/pnpm/pnpm/releases/download/v8.6.3/pnpm-linuxstatic-x64" -o /bin/pnpm; chmod +x /bin/pnpm;
