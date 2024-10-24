-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "brand" VARCHAR NOT NULL,
    "year" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "color" VARCHAR NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);
