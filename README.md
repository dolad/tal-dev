# tal-dev

# run migration
cd hasura
hasura migrate create "create_transaction_tbl --database-name taldev
hasura migrate create "create_currency_tbl"  --database-name taldev

# seed-migration 
cd hasura
hasura seed apply seed_currency_tbl --database-name taldev