import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#6C1D1D] flex flex-col items-center text-center justify-center gap-2 h-40 sm:h-80">
      <Link href="/" className="text-3xl font-light text-white">Wine Pair</Link>

      <div className="uppercase text-sm flex gap-6 text-white font-extralight">
        <div>Resa</div>
        <div>Vin</div>
        <div>Köket</div>
      </div>
    </div>
  );
};

export default Footer;
