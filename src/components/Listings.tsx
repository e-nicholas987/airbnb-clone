import { useState } from "react";
import { ListingsData, listings } from "constants/listings";
import ListingCard from "./Listings/ListingCard";
import Container from "./Global/Container";

const Listings = () => {
  const [listingsData, setListingData] =
    useState<ListingsData[]>(listings);
  const handleLike = (id: number) => {
    setListingData((prev) => {
      return prev.map((listing) => {
        return listing.id === id
          ? { ...listing, like: !listing.like }
          : { ...listing };
      });
    });
  };
  return (
    <Container>
      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-4
        3xl:grid-cols-5
        4xl:grid-cols-6
        gap-x-6
        gap-y-10
        mt-4
        pb-20"
      >
        {listingsData.map((listing, index) => (
          <ListingCard
            key={index}
            name={listing.name}
            host={listing.host}
            dates={listing.dates}
            like={listing.like}
            cost={listing.cost}
            rating={listing.rating}
            id={listing.id}
            onLike={handleLike}
          />
        ))}
      </div>
    </Container>
  );
};

export default Listings;
