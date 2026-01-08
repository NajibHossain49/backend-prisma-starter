import dotenv from "dotenv";

// Load .env file
dotenv.config();

interface EnvConfig {
  NODE_ENV: "development" | "production" | "test";
  PORT: number;
  CLIENT_URL: string; // For CORS origin
  // Add more as your app grows (e.g., DATABASE_URL, JWT_SECRET, etc.)
}

const config: EnvConfig = {
  NODE_ENV: (process.env.NODE_ENV as EnvConfig["NODE_ENV"]) || "development",
  PORT: parseInt(process.env.PORT || "4000", 10),
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:3000",
  // Example future vars:
  // DATABASE_URL: process.env.DATABASE_URL || '',
  // JWT_SECRET: process.env.JWT_SECRET || 'fallback-secret-change-in-production',
};

export default config;
