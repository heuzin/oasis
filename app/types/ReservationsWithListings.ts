import { Prisma } from "@prisma/client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const reservationsWithListingsType =
  Prisma.validator<Prisma.ReservationDefaultArgs>()({
    include: {
      listing: true,
    },
  });
export type ReservationsWithListings = Prisma.ReservationGetPayload<
  typeof reservationsWithListingsType
>;
