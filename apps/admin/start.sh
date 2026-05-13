#!/bin/sh
# Run database migrations then start server
npx prisma db push --schema=./prisma/schema.prisma --skip-generate 2>/dev/null || true
node apps/admin/server.js
