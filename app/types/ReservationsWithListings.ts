import { Prisma } from "@prisma/client";

const reservationsWithListings =
  Prisma.validator<Prisma.ReservationDefaultArgs>()({
    include: {
      listing: true,
    },
  });
export type ReservationsWithListings = Prisma.ReservationGetPayload<
  typeof reservationsWithListings
>;
