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
RUN turbo prune account --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app
RUN yarn global add pnpm@9.0.6
RUN yarn global add turbo

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install --frozen-lockfile

# Build the project
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

# RUN echo SKIP_ENV_VALIDATION=1 > .env  
# Uncomment and use build args to enable remote caching
# ARG TURBO_TEAM
# ENV TURBO_TEAM=$TURBO_TEAM

# ARG TURBO_TOKEN
# ENV TURBO_TOKEN=$TURBO_TOKEN
ARG SKIP_ENV_VALIDATION
ENV SKIP_ENV_VALIDATION=${SKIP_ENV_VALIDATION}
# ENV DATABASE_URL=${DATABASE_URL}
# ENV NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
# ENV NEXTAUTH_URL=${NEXTAUTH_URL}
# ENV DISCORD_CLIENT_ID=${DISCORD_CLIENT_ID}
# ENV DISCORD_CLIENT_SECRET=${DISCORD_CLIENT_SECRET}


RUN yarn turbo build --filter=account...

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/account/next.config.js .
COPY --from=installer /app/apps/account/package.json .

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/account/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/account/.next/static ./apps/account/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/account/public ./apps/account/public

CMD node apps/account/server.js
