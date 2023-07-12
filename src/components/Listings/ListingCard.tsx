import { AiFillStar } from "react-icons/ai";

import Heart from "../../assets/Icons/HeartIcon";

interface ListingsProps {
  name: string;
  host: string;
  dates: string;
  duration: string;
  cost: string;
  rating: string;
  like: boolean;
  id: number;
  onLike: (listingId: number) => void;
}

const ListingCard = ({
  name,
  host,
  dates,
  duration,
  cost,
  rating,
  like,
  id,
  onLike,
}: ListingsProps) => {
  return (
    <div className="relative flex flex-col gap-3 aspect-[20/19] group cursor-pointer rounded 2xl">
      <div className="relative h-full overflow-x-auto scrollbar-hidden flex">
        <img
          src={`houses/${host}.webp`}
          alt=""
          className="rounded-xl object-cover transition-all duration-300"
        />
      </div>
      <button
        onClick={() => onLike(id)}
        className="absolute right-[14px] top-[14px]"
      >
        <Heart like={like} />
      </button>
      <div className="grid text-sm">
        <div className="grid grid-cols-[80%,20%] text-primary">
          <div className="font-medium truncate capitalize">{name}</div>
          <button className="flex justify-self-end items-center gap-1">
            <AiFillStar />
            <span>{rating}</span>
          </button>
        </div>
        <div className="text-secondary ">
          Hosted by <span className="capitalize"> {host}</span>
        </div>
        <div className="text-secondary ">
          <span> {duration}</span>
          <span>&nbsp;·&nbsp;</span>
          <span>{dates}</span>
        </div>
        <div className="mt-[6px]">
          <span className="font-medium">{cost}</span>&nbsp;
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
