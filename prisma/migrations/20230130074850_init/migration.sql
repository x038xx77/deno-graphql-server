-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('UNPAID', 'PAID');

-- CreateEnum
CREATE TYPE "CartItemType" AS ENUM ('SKU', 'TAX', 'SHIPPING');

-- CreateEnum
CREATE TYPE "CurrencyCode" AS ENUM ('AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTC', 'BTN', 'BWP', 'BYR', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CUC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'INR', 'IQD', 'IRR', 'ISK', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRO', 'MTL', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDD', 'SDG', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'STD', 'SVC', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TVD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VEB', 'VEF', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XBT', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMW', 'WON');

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts" (
    "id" SERIAL NOT NULL,
    "compound_id" TEXT NOT NULL,
    "profile_id" TEXT NOT NULL,
    "provider_type" TEXT NOT NULL,
    "provider_id" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "access_token_expires" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "session_token" TEXT NOT NULL,
    "access_token" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "addressId" INTEGER,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "zip" INTEGER NOT NULL,
    "deliveryId" INTEGER,
    "shippingId" INTEGER NOT NULL,
    "billingId" INTEGER NOT NULL,
    "company" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "line1" TEXT NOT NULL,
    "line2" TEXT,
    "state" TEXT,
    "postalCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "productId" TEXT,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Delivery" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Delivery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationRequest" (
    "id" SERIAL NOT NULL,
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "VerificationRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "product_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT,
    "first_name" TEXT,
    "last_name" TEXT,
    "phone_user" TEXT,
    "trademark" TEXT,
    "locale_user" TEXT,
    "image_url_user" TEXT,
    "auth_is_telegram" BOOLEAN NOT NULL DEFAULT false,
    "auth_is_yandex" BOOLEAN NOT NULL DEFAULT false,
    "auth_is_google" BOOLEAN NOT NULL DEFAULT false,
    "role" TEXT NOT NULL DEFAULT 'buyer',
    "bio" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email_date_verified" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductsProduct" (
    "id" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "next" INTEGER NOT NULL,
    "previous" INTEGER NOT NULL,

    CONSTRAINT "ProductsProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductsProductResult" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "name" TEXT,
    "image" TEXT,
    "text" TEXT,
    "price_product" INTEGER,
    "taxation" TEXT,
    "tax" TEXT,
    "authorProductId" TEXT,
    "productsProductId" TEXT,

    CONSTRAINT "ProductsProductResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products_product_category" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "products_product_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products_tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "key" INTEGER,

    CONSTRAINT "products_tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products_product_tags" (
    "id" SERIAL NOT NULL,
    "producy_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,

    CONSTRAINT "products_product_tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductsProductWhoLikesIt" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "ProductsProductWhoLikesIt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments_productbuyers" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "backUrl" TEXT,
    "companyName" TEXT,
    "details" TEXT,
    "emailReq" TEXT,
    "errorCode" TEXT,
    "merchantEmail" TEXT,
    "merchantName" TEXT,
    "message" TEXT,
    "orderId" TEXT NOT NULL,
    "paymentId" TEXT NOT NULL,
    "phoneReq" TEXT,
    "success" TEXT,
    "tranDate" TEXT,

    CONSTRAINT "payments_productbuyers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuthorProduct" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT,
    "first_name" TEXT,
    "last_name" TEXT,
    "is_subscribed" BOOLEAN,
    "phone_user" TEXT,
    "trademark" TEXT,
    "locale_user" TEXT,
    "image_url_user" TEXT,
    "image_file_user" TEXT,
    "auth_is_telegram" BOOLEAN NOT NULL,
    "auth_is_yandex" BOOLEAN NOT NULL,
    "auth_is_google" BOOLEAN NOT NULL,
    "is_admin_constructor" BOOLEAN NOT NULL,

    CONSTRAINT "AuthorProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tags" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "color" TEXT,
    "slug" TEXT,
    "productsProductResultId" INTEGER,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserFavoritesProduct" (
    "id" SERIAL NOT NULL,
    "is_favorite" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "UserFavoritesProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vote" (
    "id" SERIAL NOT NULL,
    "count_votes" INTEGER NOT NULL DEFAULT 0,
    "is_vote_user" BOOLEAN NOT NULL DEFAULT false,
    "productId" TEXT,
    "userId" TEXT,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Money" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "formatted" TEXT NOT NULL,

    CONSTRAINT "Money_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Currency" (
    "id" SERIAL NOT NULL,
    "code" "CurrencyCode" NOT NULL,
    "symbol" TEXT NOT NULL,
    "thousandsSeparator" TEXT NOT NULL,
    "decimalSeparator" TEXT NOT NULL,
    "decimalDigits" INTEGER NOT NULL,

    CONSTRAINT "Currency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "order_id" TEXT NOT NULL,
    "purchaseDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "deliveryId" INTEGER,
    "cartId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "orderId" INTEGER NOT NULL,
    "addressShippingId" INTEGER NOT NULL,
    "addressBillingId" INTEGER NOT NULL,
    "moneySubTotalId" INTEGER NOT NULL,
    "moneyShippingTotalId" INTEGER NOT NULL,
    "moneyTaxTotalId" INTEGER NOT NULL,
    "moneyGrandTotalId" INTEGER NOT NULL,
    "totalItems" INTEGER NOT NULL,
    "totalUniqueItems" INTEGER NOT NULL,
    "notes" TEXT NOT NULL,
    "metadata" JSONB NOT NULL,
    "status" "OrderStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CheckoutInput" (
    "id" SERIAL NOT NULL,
    "cartId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "shippingInputId" INTEGER NOT NULL,
    "billingInputId" INTEGER NOT NULL,

    CONSTRAINT "CheckoutInput_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "type" "CartItemType" NOT NULL,
    "images" TEXT[],
    "moneyUnitTotalId" INTEGER NOT NULL,
    "moneyLineTotalId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "metadata" JSONB NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AddressInput" (
    "id" SERIAL NOT NULL,
    "company" TEXT,
    "name" TEXT NOT NULL,
    "line1" TEXT NOT NULL,
    "line2" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT,
    "postalCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "AddressInput_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomAttribute" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT,

    CONSTRAINT "CustomAttribute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomCartAttribute" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT,

    CONSTRAINT "CustomCartAttribute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AddressToOrder" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToProduct" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProductsProductToProductsProductResult" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProductsProductResultToTags" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CurrencyToMoney" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_OrderToProduct" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OrderToOrderItem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CustomAttributeToOrder" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CustomCartAttributeToOrderItem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_compound_id_key" ON "accounts"("compound_id");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_id_provider_account_id_key" ON "accounts"("provider_id", "provider_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_session_token_key" ON "sessions"("session_token");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_access_token_key" ON "sessions"("access_token");

-- CreateIndex
CREATE UNIQUE INDEX "Product_sku_key" ON "Product"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationRequest_token_key" ON "VerificationRequest"("token");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserFavoritesProduct_userId_productId_key" ON "UserFavoritesProduct"("userId", "productId");

-- CreateIndex
CREATE UNIQUE INDEX "Vote_userId_productId_key" ON "Vote"("userId", "productId");

-- CreateIndex
CREATE UNIQUE INDEX "_AddressToOrder_AB_unique" ON "_AddressToOrder"("A", "B");

-- CreateIndex
CREATE INDEX "_AddressToOrder_B_index" ON "_AddressToOrder"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToProduct_AB_unique" ON "_CategoryToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToProduct_B_index" ON "_CategoryToProduct"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductsProductToProductsProductResult_AB_unique" ON "_ProductsProductToProductsProductResult"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductsProductToProductsProductResult_B_index" ON "_ProductsProductToProductsProductResult"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductsProductResultToTags_AB_unique" ON "_ProductsProductResultToTags"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductsProductResultToTags_B_index" ON "_ProductsProductResultToTags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CurrencyToMoney_AB_unique" ON "_CurrencyToMoney"("A", "B");

-- CreateIndex
CREATE INDEX "_CurrencyToMoney_B_index" ON "_CurrencyToMoney"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrderToProduct_AB_unique" ON "_OrderToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_OrderToProduct_B_index" ON "_OrderToProduct"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OrderToOrderItem_AB_unique" ON "_OrderToOrderItem"("A", "B");

-- CreateIndex
CREATE INDEX "_OrderToOrderItem_B_index" ON "_OrderToOrderItem"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CustomAttributeToOrder_AB_unique" ON "_CustomAttributeToOrder"("A", "B");

-- CreateIndex
CREATE INDEX "_CustomAttributeToOrder_B_index" ON "_CustomAttributeToOrder"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CustomCartAttributeToOrderItem_AB_unique" ON "_CustomCartAttributeToOrderItem"("A", "B");

-- CreateIndex
CREATE INDEX "_CustomCartAttributeToOrderItem_B_index" ON "_CustomCartAttributeToOrderItem"("B");

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_deliveryId_fkey" FOREIGN KEY ("deliveryId") REFERENCES "Delivery"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerificationRequest" ADD CONSTRAINT "VerificationRequest_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsProductResult" ADD CONSTRAINT "ProductsProductResult_authorProductId_fkey" FOREIGN KEY ("authorProductId") REFERENCES "AuthorProduct"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_deliveryId_fkey" FOREIGN KEY ("deliveryId") REFERENCES "Delivery"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_addressShippingId_fkey" FOREIGN KEY ("addressShippingId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_addressBillingId_fkey" FOREIGN KEY ("addressBillingId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_moneySubTotalId_fkey" FOREIGN KEY ("moneySubTotalId") REFERENCES "Money"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_moneyShippingTotalId_fkey" FOREIGN KEY ("moneyShippingTotalId") REFERENCES "Money"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_moneyTaxTotalId_fkey" FOREIGN KEY ("moneyTaxTotalId") REFERENCES "Money"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_moneyGrandTotalId_fkey" FOREIGN KEY ("moneyGrandTotalId") REFERENCES "Money"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CheckoutInput" ADD CONSTRAINT "CheckoutInput_shippingInputId_fkey" FOREIGN KEY ("shippingInputId") REFERENCES "AddressInput"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CheckoutInput" ADD CONSTRAINT "CheckoutInput_billingInputId_fkey" FOREIGN KEY ("billingInputId") REFERENCES "AddressInput"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_moneyUnitTotalId_fkey" FOREIGN KEY ("moneyUnitTotalId") REFERENCES "Money"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_moneyLineTotalId_fkey" FOREIGN KEY ("moneyLineTotalId") REFERENCES "Money"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AddressToOrder" ADD CONSTRAINT "_AddressToOrder_A_fkey" FOREIGN KEY ("A") REFERENCES "Address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AddressToOrder" ADD CONSTRAINT "_AddressToOrder_B_fkey" FOREIGN KEY ("B") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToProduct" ADD CONSTRAINT "_CategoryToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToProduct" ADD CONSTRAINT "_CategoryToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductsProductToProductsProductResult" ADD CONSTRAINT "_ProductsProductToProductsProductResult_A_fkey" FOREIGN KEY ("A") REFERENCES "ProductsProduct"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductsProductToProductsProductResult" ADD CONSTRAINT "_ProductsProductToProductsProductResult_B_fkey" FOREIGN KEY ("B") REFERENCES "ProductsProductResult"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductsProductResultToTags" ADD CONSTRAINT "_ProductsProductResultToTags_A_fkey" FOREIGN KEY ("A") REFERENCES "ProductsProductResult"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductsProductResultToTags" ADD CONSTRAINT "_ProductsProductResultToTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CurrencyToMoney" ADD CONSTRAINT "_CurrencyToMoney_A_fkey" FOREIGN KEY ("A") REFERENCES "Currency"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CurrencyToMoney" ADD CONSTRAINT "_CurrencyToMoney_B_fkey" FOREIGN KEY ("B") REFERENCES "Money"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderToProduct" ADD CONSTRAINT "_OrderToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderToProduct" ADD CONSTRAINT "_OrderToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderToOrderItem" ADD CONSTRAINT "_OrderToOrderItem_A_fkey" FOREIGN KEY ("A") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderToOrderItem" ADD CONSTRAINT "_OrderToOrderItem_B_fkey" FOREIGN KEY ("B") REFERENCES "OrderItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomAttributeToOrder" ADD CONSTRAINT "_CustomAttributeToOrder_A_fkey" FOREIGN KEY ("A") REFERENCES "CustomAttribute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomAttributeToOrder" ADD CONSTRAINT "_CustomAttributeToOrder_B_fkey" FOREIGN KEY ("B") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomCartAttributeToOrderItem" ADD CONSTRAINT "_CustomCartAttributeToOrderItem_A_fkey" FOREIGN KEY ("A") REFERENCES "CustomCartAttribute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomCartAttributeToOrderItem" ADD CONSTRAINT "_CustomCartAttributeToOrderItem_B_fkey" FOREIGN KEY ("B") REFERENCES "OrderItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
