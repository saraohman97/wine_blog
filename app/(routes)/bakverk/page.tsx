import Image from "next/image";
import { BiSearch } from "react-icons/bi";

const BakverkPage = () => {
    const categories = [
        {
            title: "Macarons",
            id: 1,
        },
        {
            title: "Macarons",
            id: 1,
        },
        {
            title: "Macarons",
            id: 1,
        },
    ]


  const posts = [
    {
      id: 1,
      title: "Nytt Recept",
      category: "Macaron",
      image: "/bakverk.jpg",
    },
    {
      id: 2,
      title: "Nytt Recept",
      category: "Macaron",
      image: "/bakverk.jpg",
    },
    {
      id: 3,
      title: "Nytt Recept",
      category: "Macaron",
      image: "/bakverk.jpg",
    },
    {
      id: 4,
      title: "Nytt Recept",
      category: "Macaron",
      image: "/bakverk.jpg",
    },
    {
      id: 5,
      title: "Nytt Recept",
      category: "Macaron",
      image: "/bakverk.jpg",
    },
  ];

    return ( 
        <>
      <Image
        src="/bakverk.jpg"
        alt=""
        height={1000}
        width={1000}
        className="h-96 w-full object-cover object-top"
      />

        <div className="max-w-screen-xl mx-auto my-10">
            <h1 className="text-4xl font-extralight mb-6">Bakverk</h1>
            <div className="flex flex-wrap gap-6 mb-10">
                {categories.map((item) => (
                    <div key={item.id} className="bg-[#6C1D1D] hover:bg-[#6C1D1D]/90 cursor-pointer rounded-xl py-3 px-10 w-fit text-white uppercase font-semibold text-xs">{item.title}</div>
                ))}
                <div className="flex items-center">
                <input type="text" className="bg-gray-100 rounded-l-xl py-2 px-4 outline-none h-full" />
                <button className="bg-[#6C1D1D] hover:bg-[#6C1D1D]/90 cursor-pointer rounded-r-xl py-3 px-6 w-fit text-white uppercase font-semibold text-xs"><BiSearch size={20} /></button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-10">
            {posts.map((item) => (
              <div key={item.id}>
                <Image
                  alt=""
                  src={item.image}
                  width={500}
                  height={500}
                  className="object-cover rounded-xl max-h-96"
                />
                <h3 className="font-bold text-center mt-2">{item.title}</h3>
                <p className="text-center text-sm font-light">{item.category}</p>
              </div>
            ))}
          </div>
        </div>
        </>
     );
}
 
export default BakverkPage;