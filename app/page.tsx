import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const categoryBoxes = [
    {
      name: "Reviews",
      image: "/bakverk.jpg",
      link: "/bakverk",
    },
    {
      name: "Reviews",
      image: "/bg.jpg",
      link: "/bakverk",
    },
    {
      name: "Reviews",
      image: "/bg.jpg",
      link: "/bakverk",
    },
  ];

  const posts = [
    {
      id: 1,
      title: "Nytt Recept",
      category: "Macaron",
      image: "/bg.jpg",
    },
    {
      id: 2,
      title: "Nytt Recept",
      category: "Macaron",
      image: "/bg.jpg",
    },
    {
      id: 3,
      title: "Nytt Recept",
      category: "Macaron",
      image: "/bg.jpg",
    },
    {
      id: 4,
      title: "Nytt Recept",
      category: "Macaron",
      image: "/bg.jpg",
    },
    {
      id: 5,
      title: "Nytt Recept",
      category: "Macaron",
      image: "/bg.jpg",
    },
  ];

  return (
    <>
      <Image
        src="/bg.jpg"
        alt=""
        height={1000}
        width={1000}
        className="h-96 w-full object-cover object-top"
      />

      <div className="max-w-screen-xl mx-auto my-10 px-2 sm:px-6 flex flex-col gap-20">
        <div className="grid grid-cols-3 gap-4 sm:gap-10">
          {categoryBoxes.map((item) => (
            <Link href={item.link} key={item.name} className="relative">
              <Image
                alt=""
                src={item.image}
                width={500}
                height={500}
                className="aspect-square object-cover rounded-xl w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white bg-[#6C1D1D]/50 rounded-xl">
                {item.name} {"-->"}
              </div>
            </Link>
          ))}
        </div>

        <div>
          <h1 className="text-3xl font-light mb-10">Nyaste recepten</h1>
          <div className="grid grid-cols-3 gap-4 sm:gap-10">
            {posts.map((item) => (
              <Link href={`/${item.id}`} key={item.id}>
                <Image
                  alt=""
                  src={item.image}
                  width={500}
                  height={500}
                  className="object-cover rounded-xl aspect-square"
                />
                <h3 className="font-bold text-center mt-2">{item.title}</h3>
                <p className="text-center text-sm font-light">{item.category}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
