ARG SELEDA_DATABASE_URL
ARG SELEDA_BOT_TOKEN
ARG SKIP_ENV_VALIDATION

FROM node:18-alpine AS base

# This Dockerfile is copy-pasted into our main docs at /docs/handbook/deploying-with-docker.
# Make sure you update both files!

FROM base AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
RUN apk update
# Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune seleda --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app
RUN yarn global add pnpm@9.0.6
RUN yarn global add turbo

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
# COPY prisma ./prisma/
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm install --frozen-lockfile
# RUN pnpm prisma db push
# Build the project
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

# RUN echo SKIP_ENV_VALIDATION=1 > .env  
# Uncomment and use build args to enable remote caching
# ARG TURBO_TEAM
# ENV TURBO_TEAM=$TURBO_TEAM

# ARG TURBO_TOKEN
# ENV TURBO_TOKEN=$TURBO_TOKEN

ENV SKIP_ENV_VALIDATION=${SKIP_ENV_VALIDATION}
ENV SELEDA_DATABASE_URL=${SELEDA_DATABASE_URL}
ENV SELEDA_BOT_TOKEN=${SELEDA_BOT_TOKEN}
# ENV NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
# ENV NEXTAUTH_URL=${NEXTAUTH_URL}
# ENV DISCORD_CLIENT_ID=${DISCORD_CLIENT_ID}
# ENV DISCORD_CLIENT_SECRET=${DISCORD_CLIENT_SECRET}


RUN yarn turbo build --filter=seleda...

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/seleda/next.config.js .
COPY --from=installer /app/apps/seleda/package.json .

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/seleda/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/seleda/.next/static ./apps/seleda/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/seleda/public ./apps/seleda/public

CMD node apps/seleda/server.js
