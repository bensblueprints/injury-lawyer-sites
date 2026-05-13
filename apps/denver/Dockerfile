FROM node:20-alpine AS base

# ── deps ──────────────────────────────────────────────────────────────────────
FROM base AS deps
WORKDIR /monorepo
COPY package.json package-lock.json turbo.json ./
COPY apps/denver/package.json ./apps/denver/
COPY packages/ui/package.json ./packages/ui/
COPY packages/schema/package.json ./packages/schema/
RUN npm install --legacy-peer-deps

# ── builder ───────────────────────────────────────────────────────────────────
FROM base AS builder
WORKDIR /monorepo
COPY --from=deps /monorepo/node_modules ./node_modules
COPY . .
RUN npx turbo build --filter=denver

# ── runner ────────────────────────────────────────────────────────────────────
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /monorepo/apps/denver/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /monorepo/apps/denver/.next/static ./apps/denver/.next/static
COPY --from=builder /monorepo/apps/denver/public ./apps/denver/public

USER nextjs
EXPOSE 3000
CMD ["node", "apps/denver/server.js"]
