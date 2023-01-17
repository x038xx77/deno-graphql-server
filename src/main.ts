import { serve, createYoga } from "../libPackage.ts";
import { schema } from "./schema.ts";
import { authContext } from "./context.ts";

const yoga = createYoga({
  schema: schema,
  context:authContext,
  // cors:false
  cors: {
    origin: ['https://xn--brilliant-p985h.ml', 'https://brilliant-3s3.pages.dev'],
    credentials: true,
    allowedHeaders: ['authorization', 'content-type'],
    methods: ['GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'],
  }


});



// Start serving on `/graphql` using the handler
await serve(
  (req: Request) => {
    const [path, _search] = req.url.split('?');
    if (path.endsWith('/graphql')) {
      return yoga(req);
    } else {
      return new Response(null, { status: 404 });
    }
  },
  {
    port: 8000, // Listening to port 4000
    
  },
);

// const app = application();

// app.get("/", () => "Hello world");
// app.get('/ping', async (request, reply) => {
//   return 'pong\n'
// })

// console.log("Listening on: http://localhost:8000");

// await app.serve();



//===================================================================
// serve(yoga, {
//   onListen({ hostname, port }) {
//     console.log(`Listening on http://${hostname}:${port}/graphql`)
//   },
// })


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
