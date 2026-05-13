FROM node:20-alpine AS base

# ── deps ──────────────────────────────────────────────────────────────────────
FROM base AS deps
WORKDIR /monorepo
COPY .npmrc package.json package-lock.json turbo.json ./
COPY packages/schema/package.json ./packages/schema/
COPY packages/ui/package.json ./packages/ui/
COPY apps/dallas/package.json ./apps/dallas/
RUN npm install --legacy-peer-deps

# ── builder ───────────────────────────────────────────────────────────────────
FROM base AS builder
WORKDIR /monorepo
COPY --from=deps /monorepo/node_modules ./node_modules
COPY . .
RUN npx turbo build --filter=dallas

# ── runner ────────────────────────────────────────────────────────────────────
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /monorepo/apps/dallas/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /monorepo/apps/dallas/.next/static ./apps/dallas/.next/static
COPY --from=builder /monorepo/apps/dallas/public ./apps/dallas/public

USER nextjs
EXPOSE 3000
CMD ["node", "apps/dallas/server.js"]
