import { bcrypt, createSchema, jwtCreate, GraphQLError } from "../libPackage.ts";
import { GraphQLContext } from "./context.ts";
import { PrismaClient, User } from "../generated/client/deno/edge.ts";


import {
  ACCESS_TOKEN_APP_SECRET,
  APP_SECRET_EXPIRATION_DATATIME,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET_EXPIRATION_DATATIME,
} from "./constants.ts";

export const schema = createSchema({
  typeDefs: /* GraphQL */ `

      type Query {
        me: User!
        users: [User!]
        # products: ProductsResponseApi
        messages: [Message!]!
        getFavorite(userId:String!, productId:String): UserFavoritesProduct!
        getCountVote(productId:String, userId:String): VotePayload
      }

      type Mutation {
        signUp(input: UserSignUpInput): AuthPayload
        logIn(input: UserLoginInput) : AuthPayload
        addMessage(email: String!, password: String!, body: String!) : AuthPayload
        updateFavoriteProduct(input: FavoriteInput) : FavoritePayload
        updateVote(input: VoteInput) : VotePayload
                      
      }

      input UserLoginInput {
        email: String
        password: String
       
      }
      input UserSignUpInput {
        email: String
        password: String
        username: String!
        first_name: String
        last_name: String
        phone_user: String
        trademark: String
        locale_user: String
        image_url_user: String
        auth_is_telegram: Boolean
        auth_is_yandex: Boolean
        auth_is_google: Boolean
      }

      input UserUpdateInput {
        email: String
        password: String!
        username: String!
        first_name: String
        last_name: String
        phone_user: String
        trademark: String
        locale_user: String
        image_url_user: String
        auth_is_telegram: Boolean
        auth_is_yandex: Boolean
        auth_is_google: Boolean
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
        id: String
        messages: [Message!]
        password: String
        products: [ProductApi!]
        username: String
        first_name: String
        last_name: String
        phone_user: String
        trademark: String
        locale_user: String
        image_url_user: String
        auth_is_telegram: Boolean
        auth_is_yandex: Boolean
        auth_is_google: Boolean
      }

      type Message {
        body: String!
        id: ID!
        messagedBy: User!
        messagedById: ID!
      }

      type Account {
        accessToken: String
        accessTokenExpires: String
        accountedBy: User!
        refreshToken: String
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
        id: ID
        count_votes: ID!
        is_vote_user: Boolean
        productId: String
        userId: String
      }

      input VoteInput {
        productId: String
        userId: String
        is_vote_user: Boolean
      }

      type VotePayload {
        count_votes: ID!
        is_vote_user: Boolean
        productId: String
        votes: [Vote]
      }
      
      type UserFavoritesProduct {
        is_favorite: Boolean
        productId: String
        userId: String
      }
      input FavoriteInput {
        userId: String!
        productId: String!
        is_favorite: Boolean
      }
      type FavoritePayload {
        is_favorite: Boolean
        userId: String!
        productId: String!
      }
  `,
  resolvers: {
    Query: {
      me(parent: unknown, args: {}, context: GraphQLContext) {
        if (context.currentUser === null) {
          throw new Error('Unauthenticated!')
        }
        return context.currentUser
      },
    
      //GetPRODUCTS
      // async products(parent: unknown, args: {}, context: GraphQLContext) {
      //   const result = await fetch(
      //     "https://buildberries.pythonanywhere.com/api/products/?limit=999",
      //     {
      //       method: "GET",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //     },
      //   ).then((res: any) => res.json());

      //   return result;
      // },
      //GetKEYS
      // async keyShop(parent: unknown, args: {}, context: GraphQLContext) {
      //   const result = await fetch(
      //     "https://buildberries.pythonanywhere.com/api/products/?limit=999",
      //     {
      //       method: "GET",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //     },
      //   ).then((res: any) => res.json());

      //   return result;
      // },

      //start Users
      async users(parent: unknown, args: {}, context: GraphQLContext) {
        // if (context.currentUser === null) { throw new Error('Unauthenticated!') }
        const users = await context.prisma.user.findMany();
        return users;
      },
      // end users
      // GET Favorite
      getFavorite: (
        parent: unknown,
        args: { userId: string; productId: string },
        context: GraphQLContext,
      ) => {
        if (context.currentUser === null) throw new Error("Unauthenticated!");

        const user_id: string = args.userId;
        const product_id: string = args.productId;

        async function favoriteUserProductFun(
          user_id: string,
          product_id: string,
        ) {
          return await context.prisma.userFavoritesProduct.findUnique({
            where: {
              userId_productId: { userId: user_id, productId: product_id },
            },
          });
        }
        return favoriteUserProductFun(user_id, product_id);
      },
      //end Favorite
      //GET COUNT VOTES
      getCountVote: (
        parent: unknown,
        args: { productId: string; userId: string },
        context: GraphQLContext,
      ) => {
        const product_id: string = args.productId;
        let user_id: string = args.userId;

        async function notAuthUserVotes(productId: string, userId: string) {
          const count_votes = await context.prisma.vote.findMany({
            where: {
              productId: productId,
            },
          });

          const result = {
            count_votes: count_votes.length,
            votes: count_votes,
            productId: productId,
            is_vote_user: true, //for_disabled_button
          };
          return result;
        }

        async function allVoteUserProductFun(
          productId: string,
          userId: string,
        ) {
          const count_votes = await context.prisma.vote.findMany({
            where: {
              productId: productId,
            },
          });

          const check_is_vote_user = await context.prisma.vote.findUnique({
            where: {
              userId_productId: { userId: userId, productId: productId },
            },
          });
          let result_check_is_vote_user = check_is_vote_user?.is_vote_user;
          if (check_is_vote_user === null || check_is_vote_user === undefined) {
            result_check_is_vote_user = false;
          }

          const result = {
            count_votes: count_votes.length,
            votes: count_votes,
            productId: productId,
            is_vote_user: result_check_is_vote_user,
          };


          return result;
        }

        if (context.currentUser === null) {
          user_id = "anonymous";
          return notAuthUserVotes(product_id, user_id);
        }
        return allVoteUserProductFun(product_id, user_id);
      },
      //End Get Vote
      //end All Query
    },

    Mutation: {
      // SignUP
      async signUp(
        parent: unknown,
        args: { input: { 
          email: string; 
          password: string; 
          username: string;
          first_name: string;
          last_name: string;
          phone_user: string;
          trademark: string;
          locale_user: string;
          image_url_user: string;
          auth_is_telegram: boolean
          auth_is_yandex: boolean
          auth_is_google: boolean        
        } },
        context: GraphQLContext,
      ) {
        const checkUniqueUser = await context.prisma.user.findUnique({
          where: { email: args.input.email },
        });
        if (checkUniqueUser) {
          throw new Error("Email exist, change email!");
        }
        let password: any;
        try {
          password = bcrypt.hashSync(args.input.password);
        } catch (err) {
          console.log("Errors: ", err);
        }

        const user: User = await context.prisma.user.create({
          data: { ...args.input, password },
        });

        let token: any;
        try {
          token = await jwtCreate({ alg: "HS512", typ: "JWT" }, {
            userId: user?.id,
          }, ACCESS_TOKEN_APP_SECRET!);
        } catch (err) {
          console.log("Err: ", err);
        }
       
        return { token: await token, user };
      },
      // end SignUp mutation

      // Login
      async logIn(
        parent: unknown,
        args: { input: { email: string; password: string } },
        context: GraphQLContext,
      ) {
        const user: User | null = await context.prisma.user.findUnique({
          where: { email: args.input.email },
        });

        if (!user) {
          throw new GraphQLError("No such email user found");
        }

        let valid: any;
        try {
          valid = bcrypt.compareSync(args.input.password, user.password);
        } catch (err) {
          console.log("Errors: ", err);
        }
        if (!valid) {
          throw new GraphQLError("Invalid password");
        }
        let jwtToken: any;
        try {
          jwtToken = await jwtCreate({ alg: "HS512", typ: "JWT" }, {
            userId: user?.id,
          }, ACCESS_TOKEN_APP_SECRET!);
        } catch (err) {
          console.log("Err: ", err);
        }

        return { user, token: jwtToken };
      },
      // End Login

      // Favorite
      async updateFavoriteProduct(
        parent: any,
        args: {
          input: {
            id: number;
            userId: string;
            productId: string;
            is_favorite: boolean;
          };
        },
        context: GraphQLContext,
      ) {
        const id_favorite = args.input.id;

        const is_favorite = args.input.is_favorite;
        const productId: string = args.input.productId;
        const userId = args.input.userId;

        const productExists = await context.prisma.userFavoritesProduct
          .findUnique({
            where: {
              userId_productId: {
                userId: args.input.userId,
                productId: args.input.productId,
              },
            },
          });

        let favorite: any;
        if (productExists !== null) {
          favorite = await context.prisma.userFavoritesProduct.update({
            where: { userId_productId: { userId, productId } },
            data: {
              is_favorite: is_favorite,
            },
          });
        } else {
          favorite = await context.prisma.userFavoritesProduct.upsert({
            where: { userId_productId: { userId, productId } },
            update: {},
            create: {
              userId: userId,
              productId: productId,
              is_favorite: false,
            },
          });
        }

        return favorite;
      },
      // end Favorite mutation

      //VOTE
      async updateVote(
        parent: any,
        args: { input: { userId: string; productId: string } },
        context: GraphQLContext,
      ) {
        // const userId = getUserId(context)
        let vote_user_product: any | null = null;

        const userId = args.input.userId;
        const productId = args.input.productId;
        const productExists = await context.prisma.vote.findUnique({
          where: {
            userId_productId: {
              userId: userId,
              productId: productId,
            },
          },
        });
        if (productExists) {
          throw new Error(`Already voted for product: ${args.input.productId}`);
        } 

        if (context.currentUser !== null && !productExists) {
            vote_user_product = await context.prisma.vote.create({
              data: {
                userId: userId,
                productId: productId,
                is_vote_user: true,
              },
            });
          
        }
        return vote_user_product
      },
      // End VOTE

      // messege
      async addMessage(
        parent: any,
        args: { body: string; messagedById: string },
        context: GraphQLContext,
      ) {
        if (context.currentUser === null) {
          throw new Error("Unauthenticated!");
        }
        const userId = context.currentUser.id;
        const newBody = await context.prisma.message.create({
          data: {
            body: args.body,
            userId: userId,
          },
        });
        return { newBody };
      },
      // end addMessage mutation

      // end All mutation
    },
  },
});
