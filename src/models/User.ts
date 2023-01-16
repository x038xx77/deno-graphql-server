
import { builder } from "../builder.ts";
import { prisma } from "../db.ts";

// export const UserObjectType = builder.prismaObject("User", {
//   fields: t => ({
//     id: t.exposeID("id"),
//     email: t.exposeString("email"),
//     name: t.exposeString("name"),
//   })
// })

// // Query
// builder.queryField("users", (t) =>

//   t.prismaField({
//     type: ["User"],
//     resolve: async (query, root, args, ctx, info) => {
//       return prisma.user.findMany({ ...query });
//     },
//   })
// );


// Mutation
// export const UserObjectInput = builder.inputType('UserObjectInput', {
//   fields: (t) => ({
//     name: t.string({ required: true }),
//     id: t.int(),
//     email: t.string({ required: true }),
//   })
// })

// builder.mutationField("newUser", (t) =>
//   t.field({
//     type: UserObjectType,
//     args: {
//       input: t.arg({
//         type: UserObjectInput,
//         required: true
//       })
//     },
//     resolve: async (root, args, ctx) => {
//       return prisma.user.create({
//        data:{
//           name: args.input.name,
//           email: args.input.email
//         }
//       });
//     },
//   })
// );
