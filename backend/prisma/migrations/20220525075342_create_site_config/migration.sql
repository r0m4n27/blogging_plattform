-- CreateTable
CREATE TABLE "SiteConfig" (
    "id" SERIAL NOT NULL,
    "blogTitle" TEXT NOT NULL,
    "logo" BYTEA NOT NULL,
    "logoIcon" BYTEA NOT NULL,

    CONSTRAINT "SiteConfig_pkey" PRIMARY KEY ("id")
);
