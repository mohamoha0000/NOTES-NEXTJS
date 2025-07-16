import dotenv from 'dotenv';
dotenv.config();

import pg from 'pg';
const { Pool } = pg;

export const pool = new Pool({
    host: String(process.env.DB_HOST),
    user: String(process.env.DB_USER),
    password: String(process.env.DB_PASSWORD),
    database: String(process.env.DB_NAME),
    port: Number(process.env.DB_PORT),
});

