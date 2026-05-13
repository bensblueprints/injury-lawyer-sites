FROM node:20-alpine AS base

# ── deps ──────────────────────────────────────────────────────────────────────
FROM base AS deps
WORKDIR /monorepo
COPY .npmrc package.json package-lock.json turbo.json ./
COPY packages/schema/package.json ./packages/schema/
COPY packages/ui/package.json ./packages/ui/
COPY apps/austin/package.json ./apps/austin/
RUN npm install --legacy-peer-deps

# ── builder ───────────────────────────────────────────────────────────────────
FROM base AS builder
WORKDIR /monorepo
COPY --from=deps /monorepo/node_modules ./node_modules
COPY . .
RUN npx turbo build --filter=austin

# ── runner ────────────────────────────────────────────────────────────────────
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /monorepo/apps/austin/public ./public
COPY --from=builder --chown=nextjs:nodejs /monorepo/apps/austin/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /monorepo/apps/austin/.next/static ./apps/austin/.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "apps/austin/server.js"]
