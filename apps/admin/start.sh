#!/bin/sh
# Run database migrations then start server
./node_modules/.bin/prisma db push --schema=./prisma/schema.prisma --skip-generate || true
node apps/admin/server.js
