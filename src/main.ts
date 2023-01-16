import { serve, createYoga, createSchema } from "../libPackage.ts";
import { schema } from "./schema.ts";
import { context } from "./context.ts";

const yoga = createYoga({
  schema,
  context
});

export const PORT = 4000
serve(yoga, {
  onListen({ hostname, port }:any) {
    console.log(`Listening on http://${hostname}:${port}/graphql`);
  },
});
