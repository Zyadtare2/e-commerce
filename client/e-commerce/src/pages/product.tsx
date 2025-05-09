import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const ProductPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Exclusive | Product Details</title>
        <meta name="description" content="View product details" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => router.back()}
            className="mb-4 text-blue-600 hover:underline"
          >
            &larr; Back to products
          </button>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Product Image</span>
              </div>
            </div>

            <div className="md:w-1/2">
              <h1 className="text-3xl font-bold mb-2">Product Name {id}</h1>
              <div className="text-2xl font-semibold text-gray-800 mb-4">
                $99.99
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-gray-700">
                  This is a detailed description of the product. It highlights
                  all the features and benefits that make this product special
                  and worth purchasing.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Specifications</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Material:</strong> Premium quality
                  </li>
                  <li>
                    <strong>Dimensions:</strong> 10 x 5 x 3 inches
                  </li>
                  <li>
                    <strong>Weight:</strong> 1.5 lbs
                  </li>
                  <li>
                    <strong>Color:</strong> Various options available
                  </li>
                </ul>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded">
                  <button className="px-3 py-1 text-xl">-</button>
                  <span className="px-4">1</span>
                  <button className="px-3 py-1 text-xl">+</button>
                </div>

                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductPage;
