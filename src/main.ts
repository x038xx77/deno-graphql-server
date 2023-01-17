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


// const corsOptions = {
//    origin: 'http://example.com',
//    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

const server_port = 4000;
serve(yoga, { port: server_port});

console.log(`Running a GraphQL API server at http://localhost:${server_port}/graphql`)






// handler
// async (req, reply) => {
//       // Second parameter adds Fastify's `req` and `reply` to the GraphQL Context
//       const response = await yoga.handleNodeRequest(req, {
//         req,
//         reply
//       })
//       response.headers.forEach((value, key) => {
//         reply.header(key, value)
//       })
//       reply.status(response.status)
//       reply.send(response.body)
//       return reply
//     }


// appServerFastifi.route({
  
//   url: '/graphql',
//   method: ['GET', 'POST', 'OPTIONS'],
//   handler: async (req, reply) => {
//     // Second parameter adds Fastify's `req` and `reply` to the GraphQL Context
//     const response = await yoga.handleNodeRequest(req, {
//       req,
//       reply
//     })
//     response.headers.forEach((value, key) => {
//       reply.header(key, value)
//     })
//     reply.status(response.status)
//     reply.send(response.body)
//     return reply
//   }
// })






// const app = new Application();
// app.use(router.routes());

// console.info("CORS-enabled web server listening on port http://localhost:8000");
// await app.listen({ port: 8000 });

// Start serving on `/graphql` using the handler
// await serve(
//   (req: Request) => {
//     const [path, _search] = req.url.split('?');

//     if (path.endsWith('/graphql')) {
//       return yoga(req);
//     } else {
//       return new Response(null, { status: 404 });
//     }
//   },
//   {
//     port: 8000, // Listening to port 4000
    
//   },
// );
// 1=====================================================================
// const app = application();

// app.get("/", () => "Hello world");
// app.get('/ping', async (request, reply) => {
//   return 'pong\n'
// })

// console.log("Listening on: http://localhost:8000");

// await app.serve();



//2===================================================================
// serve(yoga, {
//   onListen({ hostname, port }) {
//     console.log(`Listening on http://${hostname}:${port}/graphql`)
//   },
// })


//3=======================================================
// serve(yoga,{ port: 8000 });
//3============================================
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
