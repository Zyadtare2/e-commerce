import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const wishlistItems = [
  {
    id: 1,
    name: "Smart Watch",
    price: 199.99,
    image: "/watch.jpg",
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    price: 89.5,
    image: "/speaker.jpg",
  },
];

export default function Wishlist() {
  return (
    <>
      <Head>
        <title>My Wishlist | Exclusive</title>
      </Head>

      <main className="bg-gray-50 min-h-screen py-10 px-4 sm:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">
          My Wishlist
        </h1>

        <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center"
            >
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  priority
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h2>
              <p className="text-blue-600 font-bold text-xl mb-4">${item.price}</p>
              <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Move to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-block px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 text-lg"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    </>
  );
}
