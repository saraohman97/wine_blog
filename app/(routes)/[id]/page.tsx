import Image from "next/image";
import { BiCopy, BiPrinter } from "react-icons/bi";

const RecipePage = () => {
  return (
    <>
      <Image
        src="/macarons.webp"
        alt=""
        height={1000}
        width={1000}
        className="h-96 w-full object-cover object-center"
      />

      <div className="max-w-screen-lg mx-auto my-10 px-2 sm:px-6">
        <h1 className="text-4xl font-extralight text-center">
          Macarons med vit choklad och passionsfrukt
        </h1>
        <p className="text-sm font-semibold mb-10 text-center">
          Det här är en beskrivande text om Påsk Makaroner.
        </p>
        <div className="flex max-sm:flex-col gap-10 md:gap-20 w-full">
          <div>
            <Image
              src="/macarons.webp"
              alt=""
              height={1000}
              width={1000}
              className="object-cover object-top mb-10 max-h-96"
            />
            <div className="flex gap-4">
              <BiCopy size={25} />
              <BiPrinter size={25} />
            </div>
          </div>

          <div className="text-sm leading-relaxed">
            <div className="mb-10">
              <div className="font-light text-[#6C1D1D]/70 border-[#6C1D1D]/50 text-xl border-b pb-2 mb-2">
                Ingredienser
              </div>
              <div>
                70 g äggvita (ca 2) <br />
                30 g strösocker (0,3 dl) <br />
                70 g florsocker <br />
                (drygt 1 dl) <br />
                90 g fintmalet mandelmjöl (knappt 2 dl) <br />
                90 g florsocker (1,5 dl) <br />
                Hushållsfärg efter tycke och smak <br />
              </div>
            </div>
            <div className="font-light text-[#6C1D1D]/70 border-[#6C1D1D]/50 text-xl border-b pb-2 mb-2">
              Att göra
            </div>
            <div>
              1. Sätt ugnen på 150 grader, vanlig ugn. <br /> <br />
              2. Vispa upp äggvitan till ett fast skum. Blanda vanligt socker
              med den lilla mängden florsocker (70 g). Häll ner det i äggskummet
              och vispa i 2 minuter. <br /> <br />
              3. Sikta 90 g florsocker och mandelmjöl. Vänd ned blandningen i
              marängen och blanda med slickepott tills marängen börjar bli lite
              lös. <br /> <br />
              4. Addera färgen här om du använder gelfärg eller pastafärg.{" "}
              <br /> <br />
              5. Spritsa ut blandningen på bakplåtspapper ca 3 cm i diameter.
              Baka på 150 grader i 12 minuter. (De här macaronsen kan gräddas
              direkt när de är spritsade, de behöver inte vila eller torka på
              plåten innan.) <br /> <br />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-4xl font-extralight text-center">Andra recept</h1>
          <div className="py-10 grid grid-cols-3 w-full gap-10">

            <div>
              <Image
                src="/macarons.webp"
                alt=""
                height={1000}
                width={1000}
                className="aspect-square w-full object-cover object-center rounded-xl"
              />
              <h3 className="font-bold text-center mt-2">text</h3>
              <p className="text-center text-sm font-light">text</p>
            </div>
            <div>
              <Image
                src="/macarons.webp"
                alt=""
                height={1000}
                width={1000}
                className="aspect-square w-full object-cover object-center rounded-xl"
              />
              <h3 className="font-bold text-center mt-2">text</h3>
              <p className="text-center text-sm font-light">text</p>
            </div>
            <div>
              <Image
                src="/macarons.webp"
                alt=""
                height={1000}
                width={1000}
                className="aspect-square w-full object-cover object-center rounded-xl"
              />
              <h3 className="font-bold text-center mt-2">text</h3>
              <p className="text-center text-sm font-light">text</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipePage;
