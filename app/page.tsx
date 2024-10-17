import { Listing } from "@prisma/client";

import Container from "./components/Container";
import ClientOnly from "./components/ClientOnly";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";

import { getListings, IListingParams } from "./actions/getListings";
import { getCurrentUser } from "./actions/getCurrentUser";

interface HomeProps {
  serachParams: IListingParams;
}

const Home = async ({ serachParams }: HomeProps) => {
  const listings = await getListings(serachParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {listings.map((listing: Listing) => (
            <ListingCard
              key={listing.id}
              currentUser={currentUser}
              data={listing}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
