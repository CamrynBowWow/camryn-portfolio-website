CREATE TABLE "jobHistory" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"jobTitle" text NOT NULL,
	"company" text,
	"techStack" text NOT NULL,
	"jobDuties" text,
	"startedDate" date NOT NULL,
	"endedDate" date,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
