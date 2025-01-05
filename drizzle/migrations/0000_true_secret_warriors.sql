CREATE TYPE "public"."projectCategory" AS ENUM('tutorial', 'personal');--> statement-breakpoint
CREATE TYPE "public"."projectStatus" AS ENUM('completed', 'in progress', 'started', 'unavailable', 'enhancements');--> statement-breakpoint
CREATE TABLE "codeProject" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"reason" text NOT NULL,
	"techStack" text NOT NULL,
	"creationDate" date NOT NULL,
	"finishDate" date,
	"image" text NOT NULL,
	"githubLink" text,
	"activeLink" text,
	"category" "projectCategory" NOT NULL,
	"status" "projectStatus" NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
