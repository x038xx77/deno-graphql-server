import { serve, createYoga } from "../libPackage.ts";
import { schema } from "./schema.ts";
import { authContext } from "./context.ts";

const yoga = createYoga({
  schema: schema,
  context:authContext,
  // cors:false
  // cors: {
  //   origin: ['https://xn--brilliant-p985h.ml', 'https://brilliant-3s3.pages.dev'],
  //   credentials: true,
  //   allowedHeaders: ['authorization', 'content-type'],
  //   methods: ['GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'],
  // }
});


const server_port = 4000;
serve(yoga, { port: server_port});
console.log(`Running a GraphQL API server at http://localhost:${server_port}/graphql`)
