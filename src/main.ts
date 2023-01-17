import { serve, createYoga } from "../libPackage.ts";
import { schema } from "./schema.ts";
import { authContext } from "./context.ts";

const yoga = createYoga({
  schema: schema,
  context:authContext,
  
  cors: {
    origin: 'https://xn--brilliant-p985h.ml',
    credentials: true,
    // allowedHeaders: ['X-Custom-Header'],
    methods: ['GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'],  }
});

serve(yoga, {
  onListen({ hostname, port }) {
    console.log(`Listening on http://${hostname}:${port}/graphql`)
  },
})


//2
// serve(yoga,{ port: 8000 });
//3
// const server_port = 5500;

// function req_handler(req: Request): Response {
//   console.log("\nReceived a request...\n");
//   const body = JSON.stringify({ message: "I am a DENO server 🦕" });
//   return new Response(body, {
//     status: 200,
//     headers: {
//       "content-type": "application/json; charset=utf-8",
//     },
//   });
// }

// serve(req_handler, { port: server_port})
// console.log("Listening on PORT: ", server_port);
