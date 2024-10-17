import { db } from "../libs/db";

export interface IListingParams {
  userId?: string;
}

export const getListings = async (params: IListingParams) => {
  try {
    let query: any = {};

    if (params?.userId) {
      query.userId = params.userId;
    }

    const listings = await db.listing.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });

    return listings;
  } catch (error: any) {
    throw new Error(error);
  }
};
