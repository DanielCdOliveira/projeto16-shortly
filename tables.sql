CREATE TABLE "users" (
	"id" serial PRIMARY KEY,
	"name" TEXT NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	"createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
);
CREATE TABLE "urls" (
	"id" serial PRIMARY KEY,	
    "url" TEXT NOT NULL,
	"shortUrl" TEXT NOT NULL UNIQUE,
	"visitCount" integer NOT NULL DEFAULT 0,
	"userId" integer NOT NULL REFERENCES "users"("id"),
	"createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
);
CREATE TABLE "sessions" (
	"id" serial PRIMARY KEY,
	"userId" integer NOT NULL REFERENCES "users"("id"),
	"token" TEXT NOT NULL UNIQUE,
	"createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
);