
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

exports.Prisma.AddressInputScalarFieldEnum = makeEnum({
  id: 'id',
  company: 'company',
  name: 'name',
  line1: 'line1',
  line2: 'line2',
  city: 'city',
  state: 'state',
  postalCode: 'postalCode',
  country: 'country'
});

exports.Prisma.AddressScalarFieldEnum = makeEnum({
  id: 'id',
  zip: 'zip',
  deliveryId: 'deliveryId',
  shippingId: 'shippingId',
  billingId: 'billingId',
  company: 'company',
  name: 'name',
  line1: 'line1',
  line2: 'line2',
  state: 'state',
  postalCode: 'postalCode',
  country: 'country'
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

exports.Prisma.CheckoutInputScalarFieldEnum = makeEnum({
  id: 'id',
  cartId: 'cartId',
  email: 'email',
  notes: 'notes',
  shippingInputId: 'shippingInputId',
  billingInputId: 'billingInputId'
});

exports.Prisma.CityScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  addressId: 'addressId'
});

exports.Prisma.CurrencyScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  symbol: 'symbol',
  thousandsSeparator: 'thousandsSeparator',
  decimalSeparator: 'decimalSeparator',
  decimalDigits: 'decimalDigits'
});

exports.Prisma.CustomAttributeScalarFieldEnum = makeEnum({
  id: 'id',
  key: 'key',
  value: 'value'
});

exports.Prisma.CustomCartAttributeScalarFieldEnum = makeEnum({
  id: 'id',
  key: 'key',
  value: 'value'
});

exports.Prisma.DeliveryScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
});

exports.Prisma.JsonNullValueInput = makeEnum({
  JsonNull: Prisma.JsonNull
});

exports.Prisma.MessageScalarFieldEnum = makeEnum({
  id: 'id',
  body: 'body',
  createdAt: 'createdAt',
  userId: 'userId'
});

exports.Prisma.MoneyScalarFieldEnum = makeEnum({
  id: 'id',
  amount: 'amount',
  formatted: 'formatted'
});

exports.Prisma.OrderItemScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  type: 'type',
  images: 'images',
  moneyUnitTotalId: 'moneyUnitTotalId',
  moneyLineTotalId: 'moneyLineTotalId',
  quantity: 'quantity',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  metadata: 'metadata'
});

exports.Prisma.OrderScalarFieldEnum = makeEnum({
  id: 'id',
  order_id: 'order_id',
  purchaseDate: 'purchaseDate',
  description: 'description',
  userId: 'userId',
  productId: 'productId',
  deliveryId: 'deliveryId',
  cartId: 'cartId',
  email: 'email',
  orderId: 'orderId',
  addressShippingId: 'addressShippingId',
  addressBillingId: 'addressBillingId',
  moneySubTotalId: 'moneySubTotalId',
  moneyShippingTotalId: 'moneyShippingTotalId',
  moneyTaxTotalId: 'moneyTaxTotalId',
  moneyGrandTotalId: 'moneyGrandTotalId',
  totalItems: 'totalItems',
  totalUniqueItems: 'totalUniqueItems',
  notes: 'notes',
  metadata: 'metadata',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
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
  first_name: 'first_name',
  last_name: 'last_name',
  phone_user: 'phone_user',
  trademark: 'trademark',
  locale_user: 'locale_user',
  image_url_user: 'image_url_user',
  auth_is_telegram: 'auth_is_telegram',
  auth_is_yandex: 'auth_is_yandex',
  auth_is_google: 'auth_is_google',
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
exports.CartItemType = makeEnum({
  SKU: 'SKU',
  TAX: 'TAX',
  SHIPPING: 'SHIPPING'
});

exports.CurrencyCode = makeEnum({
  AED: 'AED',
  AFN: 'AFN',
  ALL: 'ALL',
  AMD: 'AMD',
  ANG: 'ANG',
  AOA: 'AOA',
  ARS: 'ARS',
  AUD: 'AUD',
  AWG: 'AWG',
  AZN: 'AZN',
  BAM: 'BAM',
  BBD: 'BBD',
  BDT: 'BDT',
  BGN: 'BGN',
  BHD: 'BHD',
  BIF: 'BIF',
  BMD: 'BMD',
  BND: 'BND',
  BOB: 'BOB',
  BRL: 'BRL',
  BSD: 'BSD',
  BTC: 'BTC',
  BTN: 'BTN',
  BWP: 'BWP',
  BYR: 'BYR',
  BZD: 'BZD',
  CAD: 'CAD',
  CDF: 'CDF',
  CHF: 'CHF',
  CLP: 'CLP',
  CNY: 'CNY',
  COP: 'COP',
  CRC: 'CRC',
  CUC: 'CUC',
  CUP: 'CUP',
  CVE: 'CVE',
  CZK: 'CZK',
  DJF: 'DJF',
  DKK: 'DKK',
  DOP: 'DOP',
  DZD: 'DZD',
  EGP: 'EGP',
  ERN: 'ERN',
  ETB: 'ETB',
  EUR: 'EUR',
  FJD: 'FJD',
  FKP: 'FKP',
  GBP: 'GBP',
  GEL: 'GEL',
  GHS: 'GHS',
  GIP: 'GIP',
  GMD: 'GMD',
  GNF: 'GNF',
  GTQ: 'GTQ',
  GYD: 'GYD',
  HKD: 'HKD',
  HNL: 'HNL',
  HRK: 'HRK',
  HTG: 'HTG',
  HUF: 'HUF',
  IDR: 'IDR',
  ILS: 'ILS',
  INR: 'INR',
  IQD: 'IQD',
  IRR: 'IRR',
  ISK: 'ISK',
  JMD: 'JMD',
  JOD: 'JOD',
  JPY: 'JPY',
  KES: 'KES',
  KGS: 'KGS',
  KHR: 'KHR',
  KMF: 'KMF',
  KPW: 'KPW',
  KRW: 'KRW',
  KWD: 'KWD',
  KYD: 'KYD',
  KZT: 'KZT',
  LAK: 'LAK',
  LBP: 'LBP',
  LKR: 'LKR',
  LRD: 'LRD',
  LSL: 'LSL',
  LYD: 'LYD',
  MAD: 'MAD',
  MDL: 'MDL',
  MGA: 'MGA',
  MKD: 'MKD',
  MMK: 'MMK',
  MNT: 'MNT',
  MOP: 'MOP',
  MRO: 'MRO',
  MTL: 'MTL',
  MUR: 'MUR',
  MVR: 'MVR',
  MWK: 'MWK',
  MXN: 'MXN',
  MYR: 'MYR',
  MZN: 'MZN',
  NAD: 'NAD',
  NGN: 'NGN',
  NIO: 'NIO',
  NOK: 'NOK',
  NPR: 'NPR',
  NZD: 'NZD',
  OMR: 'OMR',
  PAB: 'PAB',
  PEN: 'PEN',
  PGK: 'PGK',
  PHP: 'PHP',
  PKR: 'PKR',
  PLN: 'PLN',
  PYG: 'PYG',
  QAR: 'QAR',
  RON: 'RON',
  RSD: 'RSD',
  RUB: 'RUB',
  RWF: 'RWF',
  SAR: 'SAR',
  SBD: 'SBD',
  SCR: 'SCR',
  SDD: 'SDD',
  SDG: 'SDG',
  SEK: 'SEK',
  SGD: 'SGD',
  SHP: 'SHP',
  SLL: 'SLL',
  SOS: 'SOS',
  SRD: 'SRD',
  STD: 'STD',
  SVC: 'SVC',
  SYP: 'SYP',
  SZL: 'SZL',
  THB: 'THB',
  TJS: 'TJS',
  TMT: 'TMT',
  TND: 'TND',
  TOP: 'TOP',
  TRY: 'TRY',
  TTD: 'TTD',
  TVD: 'TVD',
  TWD: 'TWD',
  TZS: 'TZS',
  UAH: 'UAH',
  UGX: 'UGX',
  USD: 'USD',
  UYU: 'UYU',
  UZS: 'UZS',
  VEB: 'VEB',
  VEF: 'VEF',
  VND: 'VND',
  VUV: 'VUV',
  WST: 'WST',
  XAF: 'XAF',
  XCD: 'XCD',
  XBT: 'XBT',
  XOF: 'XOF',
  XPF: 'XPF',
  YER: 'YER',
  ZAR: 'ZAR',
  ZMW: 'ZMW',
  WON: 'WON'
});

exports.OrderStatus = makeEnum({
  UNPAID: 'UNPAID',
  PAID: 'PAID'
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
  products_product_category: 'products_product_category',
  products_tag: 'products_tag',
  products_product_tags: 'products_product_tags',
  ProductsProductWhoLikesIt: 'ProductsProductWhoLikesIt',
  payments_productbuyers: 'payments_productbuyers',
  AuthorProduct: 'AuthorProduct',
  Tags: 'Tags',
  UserFavoritesProduct: 'UserFavoritesProduct',
  Vote: 'Vote',
  Money: 'Money',
  Currency: 'Currency',
  Order: 'Order',
  CheckoutInput: 'CheckoutInput',
  OrderItem: 'OrderItem',
  AddressInput: 'AddressInput',
  CustomAttribute: 'CustomAttribute',
  CustomCartAttribute: 'CustomCartAttribute'
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
