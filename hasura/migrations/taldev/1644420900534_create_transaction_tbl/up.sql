CREATE TABLE IF NOT EXISTS "public"."transactions"(
    "id" uuid PRIMARY KEY,
    "currency_pair" character varying(10) NOT NULL,
    "pair_rate" double precision NOT NULL DEFAULT '0'::double precision,
    "amount" double precision NOT NULL DEFAULT '0'::double precision,
    "converted_amount" double precision NOT NULL DEFAULT '0'::double precision,
    "exchange_from_currency" character varying(10) NOT NULL,
    "exchange_to_currency" character varying(10) NOT NULL,
    "exchange_from_usd_rate" double precision NOT NULL DEFAULT '0'::double precision,
    "exchange_to_usd_rate" double precision NOT NULL DEFAULT '0'::double precision,
    "created_at" timestamp with time zone NOT NULL
);
CREATE EXTENSION IF NOT EXISTS pgcrypto;