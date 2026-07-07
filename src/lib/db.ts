import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  max: 5,
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 30000,
  allowExitOnIdle: true,
});

const originalQuery = pool.query.bind(pool);
pool.query = async (...args: Parameters<typeof originalQuery>) => {
  try {
    return await originalQuery(...args);
  } catch (err) {
    console.error("DB query failed, retrying once...", (err as Error).message);
    return await originalQuery(...args);
  }
};

export default pool;
