## Setup database with Docker
### Create new database environment:
`docker run --name shop-code-core-container -e POSTGRES_USER=shop-code-core -e POSTGRES_PASSWORD=nopassword -p 5432:5432 -d postgres`

## Bootstrap application
`yarn create next-app project-name --typescript`

## Install dependencies
`yarn add  @trpc/react @trpc/server@next @trpc/client@next @trpc/react-query@next @tanstack/react-query@latest @trpc/next zod superjson jotai @prisma/client react-hook-form jsonwebtoken cookie nodemailer`

`yarn add @types/jsonwebtoken @types/cookie @types/nodemailer -D`

## Prisma
`npx prisma init`

`npx prisma migrate dev --name`