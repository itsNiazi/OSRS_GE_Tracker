import Image from "next/image";
import coins from "../images/osrs_icons/coins.webp";

export default function HeroSection() {
  return (
    <div className="text-center p-5 text-white">
      <h1 className="text-4xl mb-2">Welcome to the Grand Exchange Tracker!</h1>
      <p className="text-xl my-2">
        Where you can actually double your money
        <Image
          className="inline mx-2"
          src={coins.src}
          alt="coins"
          width={25}
          height={25}
          priority={true}
        />
      </p>
      <p className="text-lg">
        Ready to flip items and stack GP like a true Gielinor tycoon?
      </p>
    </div>
  );
}
