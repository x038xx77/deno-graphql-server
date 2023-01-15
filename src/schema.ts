import { createSchema } from "../libPackage.ts";
import { GraphQLContext } from './context.ts'
export const schema = createSchema({
    typeDefs: /* GraphQL */ `
      type Query {
        users: [User!]
        products: ProductsResponseApi
      }
      type Mutation {
       
        logIn(input: UserLoginInput) : AuthPayload
              
      }

      input UserLoginInput {
        email: String!
        password: String!
       
      }
      input UserSignUpInput {
        email: String
        password: String
        username: String!
      }

      input UserUpdateInput {
        email: String
        password: String!
        username: String!
      }

      input UserSelect {
        id: String!
        email: String!
        password: String!
      }
      
      type AuthPayload {
        user: User
        token: String
      }

      type UserUpdatePayload {
        user: User
      }
       
      type User {
        accounts: [Account!]!
        email: String
        first_name: String!
        id: String
        last_name: String!
        messages: [Message!]
        password: String!
        phone_user: String!
        products: [ProductApi!]
        username: String!
      }

      type Message {
        body: String!
        id: ID!
        messagedBy: User!
        messagedById: ID!
      }

      type Account {
        accessToken: String!
        accessTokenExpires: String!
        accountedBy: User!
        refreshToken: String!
      }
      
      type ProductsResponseApi {
        count: ID
        next: ID
        previous: ID
        results: [ProductApi]
      }

      type ProductApi {
        amount_cart_product: Boolean
        author: AuthorProductApi!
        id: ID
        id_cart_product: Boolean
        image: String!
        is_favorited: Boolean
        is_in_shopping_cart: Boolean
        name: String!
        price_product: ID!
        tags: [TagsProductApi!]
        tax: String!
        taxation: String!
        text: String!
      }

      type AuthorProductApi {
        auth_is_google: Boolean
        auth_is_telegram: Boolean
        auth_is_yandex: Boolean
        email: String
        first_name: String!
        id: ID!
        image_file_user: String!
        image_url_user: String!
        is_admin_constructor: Boolean
        is_subscribed: Boolean
        last_name: String!
        locale_user: String!
        phone_user: String!
        trademark: String!
        username: String!
      }

      type TagsProductApi {
        color: String!
        id: ID!
        name: String!
        slug: String!
      }
      
      type Vote {
        count_votes: ID!
        id: ID
        is_vote_user: Boolean
        productId: String
        userId: String
      }

      type VoteInput {
        productId: String
        userId: String
      }

      type VotePayload {
        count_votes: ID!
        is_vote_user: Boolean
        productId: String
        userId: String
      }
      
      type UserFavoritesProduct {
        is_favorite: Boolean
        productId: String
        userId: String
      }
  `,
    resolvers: {
       
      Query: {
        async products(parent: unknown, args: {}, context: GraphQLContext) {
  
          const result = await fetch("https://buildberries.pythonanywhere.com/api/products/?limit=999", {
            method: 'GET',
            headers: {
              "Content-Type": "application/json"
            },
          }).then((res: any) => res.json())
  
          return result
        },
  
        //start Users
        users: (parent: unknown, args: {}, context: GraphQLContext) => {
          // if (context.currentUser === null) { throw new Error('Unauthenticated!') }
                    
          const users = context.prisma.user.findMany()
          return {users}
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