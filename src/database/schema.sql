/*
  docker exec -it postgres bash
  psql -U postgres
  \l -> list all tables
  \c -> connect to database
  \dt -> list all tables
*/

CREATE DATABASE mycontacts;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL
);
