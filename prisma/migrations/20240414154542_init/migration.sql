-- CreateTable
CREATE TABLE "Todos" (
    "id" SERIAL NOT NULL,
    "text" VARCHAR NOT NULL,
    "completeAt" TIMESTAMP,

    CONSTRAINT "Todos_pkey" PRIMARY KEY ("id")
);
