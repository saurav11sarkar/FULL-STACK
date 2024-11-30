import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });

export const config = {
    PORT:process.env.PORT,
    URL:process.env.DATABASE_URL,
    ROUND:process.env.BCRYPT_SALT_ROUNDS,
    PASSWORD:process.env.DEFAULT_PASS
}
