
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.8.1
 * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
 */
Prisma.prismaVersion = {
  client: "4.8.1",
  engine: "d6e67a83f971b175a593ccc12e15c4a757f93ffe"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AccountScalarFieldEnum = makeEnum({
  id: 'id',
  compoundId: 'compoundId',
  userId: 'userId',
  providerType: 'providerType',
  providerId: 'providerId',
  providerAccountId: 'providerAccountId',
  refreshToken: 'refreshToken',
  accessToken: 'accessToken',
  accessTokenExpires: 'accessTokenExpires',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.AddressScalarFieldEnum = makeEnum({
  id: 'id',
  zip: 'zip',
  deliveryId: 'deliveryId'
});

exports.Prisma.AuthorProductScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  username: 'username',
  first_name: 'first_name',
  last_name: 'last_name',
  is_subscribed: 'is_subscribed',
  phone_user: 'phone_user',
  trademark: 'trademark',
  locale_user: 'locale_user',
  image_url_user: 'image_url_user',
  image_file_user: 'image_file_user',
  auth_is_telegram: 'auth_is_telegram',
  auth_is_yandex: 'auth_is_yandex',
  auth_is_google: 'auth_is_google',
  is_admin_constructor: 'is_admin_constructor'
});

exports.Prisma.CategoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  productId: 'productId'
});

exports.Prisma.CityScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  addressId: 'addressId'
});

exports.Prisma.DeliveryScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title'
});

exports.Prisma.MessageScalarFieldEnum = makeEnum({
  id: 'id',
  body: 'body',
  createdAt: 'createdAt',
  userId: 'userId'
});

exports.Prisma.OrderScalarFieldEnum = makeEnum({
  id: 'id',
  order_id: 'order_id',
  purchaseDate: 'purchaseDate',
  description: 'description',
  userId: 'userId',
  productId: 'productId',
  deliveryId: 'deliveryId'
});

exports.Prisma.Payments_productbuyersScalarFieldEnum = makeEnum({
  id: 'id',
  amount: 'amount',
  backUrl: 'backUrl',
  companyName: 'companyName',
  details: 'details',
  emailReq: 'emailReq',
  errorCode: 'errorCode',
  merchantEmail: 'merchantEmail',
  merchantName: 'merchantName',
  message: 'message',
  orderId: 'orderId',
  paymentId: 'paymentId',
  phoneReq: 'phoneReq',
  success: 'success',
  tranDate: 'tranDate'
});

exports.Prisma.ProductScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  description: 'description',
  image: 'image',
  sku: 'sku',
  quantity: 'quantity',
  price: 'price',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
});

exports.Prisma.Product_categoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.ProductsProductResultScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  name: 'name',
  image: 'image',
  text: 'text',
  price_product: 'price_product',
  taxation: 'taxation',
  tax: 'tax',
  authorProductId: 'authorProductId',
  productsProductId: 'productsProductId'
});

exports.Prisma.ProductsProductScalarFieldEnum = makeEnum({
  id: 'id',
  count: 'count',
  next: 'next',
  previous: 'previous'
});

exports.Prisma.ProductsProductWhoLikesItScalarFieldEnum = makeEnum({
  id: 'id',
  product_id: 'product_id',
  user_id: 'user_id'
});

exports.Prisma.Products_product_categoryScalarFieldEnum = makeEnum({
  id: 'id',
  product_id: 'product_id',
  category_id: 'category_id'
});

exports.Prisma.Products_product_tagsScalarFieldEnum = makeEnum({
  id: 'id',
  producy_id: 'producy_id',
  tag_id: 'tag_id'
});

exports.Prisma.Products_tagScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  color: 'color',
  slug: 'slug',
  key: 'key'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SessionScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  expires: 'expires',
  sessionToken: 'sessionToken',
  accessToken: 'accessToken',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TagsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  color: 'color',
  slug: 'slug',
  productsProductResultId: 'productsProductResultId'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserFavoritesProductScalarFieldEnum = makeEnum({
  id: 'id',
  is_favorite: 'is_favorite',
  userId: 'userId',
  productId: 'productId'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  password: 'password',
  username: 'username',
  firstName: 'firstName',
  lastName: 'lastName',
  phoneUser: 'phoneUser',
  trademark: 'trademark',
  localeUser: 'localeUser',
  imageUrlUser: 'imageUrlUser',
  authIsTelegram: 'authIsTelegram',
  authIsYandex: 'authIsYandex',
  authIsGoogle: 'authIsGoogle',
  role: 'role',
  bio: 'bio',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  emailDateVerified: 'emailDateVerified'
});

exports.Prisma.VerificationRequestScalarFieldEnum = makeEnum({
  id: 'id',
  identifier: 'identifier',
  token: 'token',
  expires: 'expires',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
});

exports.Prisma.VoteScalarFieldEnum = makeEnum({
  id: 'id',
  count_votes: 'count_votes',
  is_vote_user: 'is_vote_user',
  productId: 'productId',
  userId: 'userId'
});


exports.Prisma.ModelName = makeEnum({
  Message: 'Message',
  Account: 'Account',
  Session: 'Session',
  City: 'City',
  Address: 'Address',
  Category: 'Category',
  Product: 'Product',
  Delivery: 'Delivery',
  VerificationRequest: 'VerificationRequest',
  product_category: 'product_category',
  User: 'User',
  ProductsProduct: 'ProductsProduct',
  ProductsProductResult: 'ProductsProductResult',
  Order: 'Order',
  products_product_category: 'products_product_category',
  products_tag: 'products_tag',
  products_product_tags: 'products_product_tags',
  ProductsProductWhoLikesIt: 'ProductsProductWhoLikesIt',
  payments_productbuyers: 'payments_productbuyers',
  AuthorProduct: 'AuthorProduct',
  Tags: 'Tags',
  UserFavoritesProduct: 'UserFavoritesProduct',
  Vote: 'Vote'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
