import { defineConfig } from '@prisma/config'

export default defineConfig({
  earlyAccess: true, // Required for Prisma 7 schema configuration features
  datasource: {
    url: process.env.DATABASE_URL,
  },
})
