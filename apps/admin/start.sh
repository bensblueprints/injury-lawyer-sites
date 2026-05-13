#!/bin/sh
# Run database migrations then start server
node ./node_modules/prisma/build/index.js db push --schema=./prisma/schema.prisma --skip-generate || true
node apps/admin/server.js
