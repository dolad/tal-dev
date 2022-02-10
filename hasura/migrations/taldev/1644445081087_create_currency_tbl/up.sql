CREATE TABLE IF NOT EXISTS "public"."currency"(
    "id" SERIAL PRIMARY KEY,
    "currency_code" character varying(10) NOT NULL
);
CREATE EXTENSION IF NOT EXISTS pgcrypto;