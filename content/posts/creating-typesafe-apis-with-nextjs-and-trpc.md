---
title: Creating Typesafe APIs with Nextjs & tRPC
date: "2024-03-21"
legacyID: "creating-typesafe-apis-with-nextjs-and-trpc"
thumbnail: "📘"
description: "tRPC simplifies the creation and consumption of completely type-safe APIs without relying on schemas or code generation. This framework is designed for..."
published: true
latest: false
cover: "https://www.wilchow.com/images/posts//2023/trpc-nextjs-hero.jpg"
articleLink: "https://pritishsamal.xyz/blog"
tags:
  - tRPC
  - Nextjs
  - MongoDB
  - TypeScript
---

tRPC simplifies the creation and consumption of completely type-safe APIs without relying on schemas or code generation. This framework is designed for developing end-to-end type-safe APIs using TypeScript.

Given the increasing demand for type-safe APIs, tRPC emerges as an excellent solution for both building and utilizing APIs. It ensures that endpoints are written with type safety in mind, applicable to both the frontend and backend of your application. By identifying type errors within API contracts during the build phase, it significantly reduces the potential for runtime bugs in your application.

## Some of the benefits of using tRPC include:

- Comprehensive static typesafety and autocomplete features on the client side, covering inputs, outputs, and errors.
- A streamlined developer experience, free from code generation, runtime bloat, or complex build pipelines.
- Framework agnosticism, enabling compatibility with various frameworks such as Next.js, Express, etc.
- Support for request batching, automatically consolidating simultaneous requests into a single one

## Project setup
We will be using the latest version of next.js 14 to create a new app. We can use the following command to create a new next.js app with **app router**.

```bash
npx create-next-app@latest
```

We will be using MongoDB as our database and tRPC to create our API endpoints and Mongoose as our ODM for MongoDB.

```bash
npm install mongoose @trpc/client @trpc/server zod @trpc/next @tanstack/react-query@4.18.0 @trpc/react-query superjson
```

## Setting up Mongoose
We will create a new folder db in the root of our project. This folder will contain the setup for our MongoDB connection.

```ts
// db/mongoose.ts
 
import mongoose from 'mongoose';
declare global {
  var mongoose: any;
}
 
const MONGODB_URI = process.env.MONGODB_URI!;
 
if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}
 
let cached = global.mongoose;
 
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}
 
async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }
 
  return cached.conn;
}
 
export default dbConnect;
```

Here's a simplified MongoDB connection setup using `mongoose.connect`. In Next.js, it's recommended to use global to maintain a persistent connection to the database, ensuring we don't establish a new connection with every app re-render.

To organize our MongoDB models, we'll create a new folder called "**models**" at the root of our project. This directory will house all the necessary models for interacting with our MongoDB database.

```ts
// models/user-model.ts
 
import mongoose from 'mongoose';
 
export interface User {
  name: string;
  email: string;
  password: string;
}
 
export interface MongoUser extends User, mongoose.Document {}
 
export type TUser = User & {
  _id: string;
  createdAt: string;
  updatedAt: string;
};
 
const UserSchema = new mongoose.Schema<User>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
 
export default mongoose.models.User || mongoose.model<User>('User', UserSchema);
```

## Setting up tRPC
In the root of our project, we'll establish a new folder named "trpc-server". This directory will host the tRPC setup for our application.

```ts
// trpc-server/index.ts
 
import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
 
import { createContext } from './context';
 
const t = initTRPC.context<typeof createContext>().create({
  transformer: superjson,
});
 
export const createCallerFactory = t.createCallerFactory;
export const router = t.router;
export const publicProcedure = t.procedure;
```

Following the tRPC server initialization, we've opted to utilize superjson as our JSON serialization transformer.

Moving forward, our next step involves the creation of a new file named `context.ts` within the same directory.

```ts
// trpc-server/context.ts
 
export const createContext = async () => {
  // const session = await auth()
 
  return {
    // session,
  };
};
```

Next, we proceed to define our API endpoints. To achieve this, we'll establish a new file named "router.ts" within the aforementioned directory.

```ts
// trpc-server/router.ts
 
import { router, publicProcedure } from './index';
import { z } from 'zod';
import userModel, { TUser } from '@/models/user-model';
import dbConnect from '@/db/mongoose';
 
export const appRouter = router({
  createUser: publicProcedure
    .input((v) => {
      const schema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
      });
      const result = schema.safeParse(v);
      if (!result.success) {
        throw result.error;
      }
      return result.data;
    })
    .mutation(async (params) => {
      await dbConnect();
      const user: TUser = await userModel.create({
        ...params.input,
      });
 
      return {
        user,
      };
    }),
 
  getUser: publicProcedure.query(async () => {
    await dbConnect();
    const users: TUser[] = await userModel.aggregate([
      {
        $project: {
          name: 1,
          email: 1,
          _id: {
            $toString: '$_id',
          },
        },
      },
    ]);
    return users;
  }),
});
 
export type AppRouter = typeof appRouter;
```

We've outlined two endpoints, namely `createUser` and `getUser`. In the process, we've integrated `Zod` for input validation and employed Mongoose for seamless interaction with our MongoDB database.

## Setting up tRPC with Next.js


In the root directory of our project, we'll establish a new folder named `trpc-client`. This directory will serve as the location for configuring our tRPC client setup.

```ts
// trpc-client/client.ts
 
import { AppRouter } from '@/trpc-server/router';
import { createTRPCReact } from '@trpc/react-query';
 
export const trpc = createTRPCReact<AppRouter>({});
```

Our tRPC client setup has been configured using `@trpc/react-query`, aligning with our choice to utilize React Query for data fetching and mutations within our client components.

To facilitate data fetching and mutations on our server, we'll create a new file named `server-client.ts` within the same folder.

```ts
// trpc-client/server-client.ts
 
import { createCallerFactory } from '@/trpc-server';
import { createContext } from '@/trpc-server/context';
import { appRouter } from '@/trpc-server/router';
 
const createCaller = createCallerFactory(appRouter);
 
export const serverClient = createCaller(createContext());
```

With the above setup, we can now use `serverClient` to fetch data or do mutations in our server.

## Exposing tRPC endpoints to the client
To make our tRPC endpoints accessible to the client, we'll establish a new folder within the `app` directory named `api`. This designated folder will encompass the necessary setup for our **tRPC** **endpoints**.

```ts
// app/api/trpc/[trpc]/route.ts
 
import { createContext } from '@/trpc-server/context';
import { appRouter } from '@/trpc-server/router';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
 
const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: async () => await createContext(),
  });
 
export { handler as GET, handler as POST };
```

We have setup our tRPC endpoints using `@trpc/server/adapters/fetch`. This will allow us to use fetch to make requests to our tRPC server.

## Wrapping our app with tRPC provider using React Query
We will create a `lib` folder in the root of our project. This folder will contain the setup for our tRPC provider.

```ts
// lib/reactQuery-provider.tsx
 
'use client';
 
import React, { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import superjson from 'superjson';
import { trpc } from '@/trpc-client/client';
 
const url = 'http://localhost:3000/api/trpc';
 
export const Provider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );
 
  const trpcClient = trpc.createClient({
    transformer: superjson,
    links: [
      httpBatchLink({
        url: url,
      }),
    ],
  });
 
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};
```


To enable the usage of tRPC with React Query throughout our application, we can wrap the root component of our app with the `Provider` component.

```ts
// app/layout.tsx
 
import { Provider } from '@/lib/reactQuery-provider';
 
<html lang="en" suppressHydrationWarning>
  <body className={inter.className}>
    <Provider>{children}</Provider>
  </body>
</html>;
```

## Using tRPC endpoints in our components
we can use the `getUser` endpoint in our components to fetch data from our server.

```ts
// app/page.tsx
 
import { serverClient } from '@/trpc-client/server-client';
 
const Page = async () => {
  const user = await serverClient.getUser();
 
  console.log(user);
 
  return <div>hELLO tRPC</div>;
};
 
export default Page;
```

to create new user we can use the `createUser` endpoint in our client component.

```ts
// component/createUser.tsx
 
'use client';
import { trpc } from '@/trpc-client/client';
 
const CreateUser = () => {
  const { data, mutate } = trpc.createUser.useMutation();
 
  console.log(data);
 
  return (
    <button
      onClick={() =>
        mutate({ name: 'test', email: 'test12@gmail.com', password: '123456' })
      }
    >
      Create User
    </button>
  );
};
 
export default CreateUser;
```

With the outlined setup, we've effectively configured tRPC with Next.js 14 and MongoDB. This allows us to leverage tRPC for both creating and consuming type-safe APIs within our application.

## Conclusion
tRPC stands out as an excellent option for building and consuming APIs. It ensures that endpoint creation is inherently type-safe, applicable to both the frontend and backend of your application. By catching type errors within API contracts during the build phase, it significantly mitigates the potential for runtime bugs in your application.
