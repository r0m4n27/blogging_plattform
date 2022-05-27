-- CreateTable
CREATE TABLE "Year" (
    "value" INTEGER NOT NULL,

    CONSTRAINT "Year_pkey" PRIMARY KEY ("value")
);

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_year_fkey" FOREIGN KEY ("year") REFERENCES "Year"("value") ON DELETE RESTRICT ON UPDATE CASCADE;
