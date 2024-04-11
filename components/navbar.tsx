import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-[#6C1D1D] text-white text-center text-xs py-1">
        Professionel matlagning och vin drickande
      </div>

      <div className="bg-white shadow">
        <div className="max-w-screen-xl mx-auto py-6 px-2 sm:px-6 flex items-center justify-between font-extralight">
          <div>
            <Link href="/" className="text-3xl font-light">Wine Pair</Link>
            <p className="text-sm">Professionel matlagning och vin drickande</p>
          </div>

          <div className="uppercase flex gap-6">
            <div>Resa</div>
            <div>Vin</div>
            <div>Köket</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
