import Image from "next/Image";
import HeaderItem from "./HeaderItem";

import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const myLoader = ({ src }) => {
  return "https://links.papareact.com/ua6";
};

const Header = () => {
  return (
    <>
      <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem title="Home" Icon={HomeIcon} />
          <HeaderItem title="Trending" Icon={LightningBoltIcon} />
          <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
          <HeaderItem title="Collections" Icon={CollectionIcon} />
          <HeaderItem title="Search" Icon={SearchIcon} />
          <HeaderItem title="Account" Icon={UserIcon} />
        </div>
        <Image
          loader={myLoader}
          src="https://links.papareact.com/ua6"
          alt="logo"
          width={200}
          height={100}
        />
      </header>
    </>
  );
};

export default Header;
