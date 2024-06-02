import { defineConfig } from "drizzle-kit";
export default defineConfig({
    schema: "./db/schema.ts",
    dialect: "postgresql",
    dbCredentials: {
        url:'postgresql://postgres:example@localhost:5432/postgres' ,
    },
    verbose: true,
    strict: true,
});