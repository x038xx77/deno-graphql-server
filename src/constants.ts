import { config } from "https://deno.land/x/dotenv/mod.ts"; //import only Debug(prod error)

export const { 
    DATABASE_URL,
    REFRESH_TOKEN_SECRET,
    ACCESS_TOKEN_APP_SECRET,
    APP_SECRET_EXPIRATION_DATATIME,
    REFRESH_TOKEN_SECRET_EXPIRATION_DATATIME,
 } = config({ safe: true }); //only Debug

// // DEPLOY FOR DENO
// export const DATABASE_URL = Deno.env.get("DATABASE_URL")
// export const REFRESH_TOKEN_SECRET = Deno.env.get("REFRESH_TOKEN_SECRET")
// export const ACCESS_TOKEN_APP_SECRET = Deno.env.get("ACCESS_TOKEN_APP_SECRET")
// export const APP_SECRET_EXPIRATION_DATATIME = Deno.env.get("APP_SECRET_EXPIRATION_DATATIME")
// export const REFRESH_TOKEN_SECRET_EXPIRATION_DATATIME = Deno.env.get("REFRESH_TOKEN_SECRET_EXPIRATION_DATATIME")
