FROM node:18-alpine AS deps
WORKDIR /app

ENV NODE_ENV production

COPY  apps/landing/.next/standalone/apps/landing/package.json ./package.json
RUN npm i --legacy-peer-deps --ignore-scripts

FROM node:18-alpine AS base
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nextjs
RUN adduser --system --uid 1001 nextjs

COPY --chown=nextjs:nextjs apps/landing/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --chown=nextjs:nextjs apps/landing/.next/standalone/apps/landing/ ./
COPY --chown=nextjs:nextjs apps/landing/.next/static ./.next/static
COPY --chown=nextjs:nextjs --from=deps app/node_modules ./node_modules

EXPOSE 4269

USER nextjs
RUN node -c server.js
CMD ["node", "server.js"]