FROM node:20-alpine AS base

FROM base AS deps
WORKDIR /monorepo
COPY package.json package-lock.json turbo.json ./
COPY apps/admin/package.json ./apps/admin/
COPY packages/ui/package.json ./packages/ui/
COPY packages/schema/package.json ./packages/schema/
RUN npm install --legacy-peer-deps

FROM base AS builder
WORKDIR /monorepo
COPY --from=deps /monorepo/node_modules ./node_modules
COPY . .
RUN cd apps/admin && npx prisma generate
RUN npx turbo build --filter=admin

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /monorepo/apps/admin/public ./public
COPY --from=builder --chown=nextjs:nodejs /monorepo/apps/admin/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /monorepo/apps/admin/.next/static ./apps/admin/.next/static

# Copy prisma files for db push at startup
COPY --from=builder --chown=nextjs:nodejs /monorepo/apps/admin/prisma ./prisma

COPY --from=builder --chown=nextjs:nodejs /monorepo/apps/admin/start.sh ./start.sh
RUN chmod +x ./start.sh

USER nextjs
EXPOSE 3000
CMD ["sh", "./start.sh"]
