import { defineConfig } from '@prisma/config'

export default defineConfig({
<<<<<<< HEAD
  datasource: {
    url: process.env.DATABASE_URL,
  },
})
=======
  earlyAccess: true, // Required for Prisma 7 schema configuration features
  datasource: {
    url: process.env.DATABASE_URL,
  },
})
>>>>>>> b81937f767fdce31cf64e9ba1c27d4988fdcb432
