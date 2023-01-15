import { createSchema } from "../libPackage.ts";
import { GraphQLContext } from './context.ts'
export const schema = createSchema({
    typeDefs: /* GraphQL */ `
      type Query {
        users: [User!]
      }
      type Mutation {
       
        logIn(input: UserLoginInput) : AuthPayload
        
      }
      input UserLoginInput {
        email: String
        name: String
       
      }
      input UserSignUpInput {
        email: String
        name: String!
      }
      input UserUpdateInput {
        email: String
        name: String!
      }
      input UserSelect {
        id: String!
        email: String!
        name: String!
      }
      
      type AuthPayload {
        user: User
        token: String
      }
      type UserUpdatePayload {
        user: User
      }
       
      type User {
        id: String! 
        email: String! 
        name: String
      }
  `,
    resolvers: {
       
      Query: {
        // async products(parent: unknown, args: {}, context: GraphQLContext) {
  
        //   const result = await fetch("https://buildberries.pythonanywhere.com/api/products/?limit=999", {
        //     method: 'GET',
        //     headers: {
        //       "Content-Type": "application/json"
        //     },
        //   }).then((res: any) => res.json())
  
        //   return result
        // },
  
        //start Users
        users: (parent: unknown, args: {}, context: GraphQLContext) => {
          // if (context.currentUser === null) { throw new Error('Unauthenticated!') }
                    
          const users = context.prisma.user.findMany()
          return users
        },
       // end users
      },
  
  
      Mutation: {

  
        // end SignUp mutation
        // Login
  
        async logIn(
          parent: unknown,
          args: { input: { email: string; name: string; } },
          context: GraphQLContext
        ) {
          const user = await context.prisma.user.findUnique({
            where: { email: args.input.email }
          })
          const token = "djgskckjchdskbv324t34fwe"    
                  
          return  { user, token }
        
        },
  
        // end All mutation
      }
    }
  })