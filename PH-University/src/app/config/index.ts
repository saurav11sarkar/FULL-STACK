import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });

export const config = {
    PORT:process.env.PORT || 5001,
    URL:process.env.DATABASE_URL,
    ROUND:process.env.BCRYPT_SALT_ROUNDS,
    PASSWORD:process.env.DEFAULT_PASS,
    ENV:process.env.NODE_ENV,
    SECRET:process.env.JWT_SECRET,
    REFRESH_SECRET:process.env.JWT_REFRESH_SECRET,
    ACCESS_TOKEN_EXPIRES:process.env.JWT_ACCESS_EXPIRES,
    REFRESH_TOKEN_EXPIRES:process.env.JWT_REFRESH_EXPIRES,
    RESET_PASS_UI_LINK:process.env.RESET_PASS_UI_LINK
}
