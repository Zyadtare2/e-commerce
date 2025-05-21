import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getSingleProduct } from "@/services/productService";
import { Product } from "@/services/types";
import { addToWishlist } from "@/services/wishlistService";
import { addToCart } from "@/services/cartService";

const ProductPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const data = await getSingleProduct(id as string);
        setProduct(data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
        setError("Product not found or failed to load.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToWishlist = async () => {
    try {
      if (!product) return;
      await addToWishlist(product._id);
      alert("Added to wishlist!");
    } catch (error) {
      console.error("Failed to add to wishlist", error);
    }
  };

  const handleAddToCart = async () => {
    try {
      if (!product) return;
      await addToCart(product._id, quantity);
      alert("Added to cart!");
    } catch (err) {
      console.error("Failed to add to cart", err);
      alert("Failed to add to cart");
    }
  };

  return (
    <>
      <Head>
        <title>Exclusive | Product Details</title>
        <meta name="description" content="View product details" />
      </Head>

      <main className="bg-white text-gray-900 min-h-screen">
        <div className="container mx-auto px-4 py-10">
          <button
            onClick={() => router.back()}
            className="mb-6 text-blue-600 hover:underline"
          >
            &larr; Back to products
          </button>

          {loading ? (
            <p className="text-center text-gray-500">Loading product...</p>
          ) : error || !product ? (
            <p className="text-center text-red-500">
              {error || "Product not found."}
            </p>
          ) : (
            <div className="bg-gray-50 rounded-xl shadow p-8">
              <div className="flex flex-col md:flex-row gap-10">
                {/* Product Image Section */}
                <div className="md:w-1/2 space-y-4">
                  <div className="bg-white h-96 rounded-lg relative overflow-hidden border">
                    {product.imageCover ? (
                      <Image
                        src={product.imageCover}
                        alt={product.name}
                        fill
                        className="object-contain p-4"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        No Image Available
                      </div>
                    )}
                  </div>

                  {/* Additional Images */}
                  {product.images?.length > 0 && (
                    <div className="flex gap-4 overflow-x-auto">
                      {product.images.map((img, idx) => (
                        <div
                          key={idx}
                          className="w-24 h-24 flex-shrink-0 relative border rounded"
                        >
                          <Image
                            src={img}
                            alt={`Preview ${idx + 1}`}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="md:w-1/2 space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold mb-1">{product.name}</h1>
                    <div className="text-lg text-gray-500">
                      ID: {product._id.slice(-6).toUpperCase()}
                    </div>
                  </div>

                  <div className="text-2xl font-semibold text-blue-600">
                    ${product.price?.toFixed(2)}
                  </div>

                  <div>
                    <h2 className="text-lg font-medium mb-1">Description</h2>
                    <p className="text-gray-700 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="text-sm text-gray-600">
                    <p>Stock: <span className="font-medium text-black">{product.stock}</span></p>
                    <p>Sold: <span className="text-black">{product.sold}</span></p>
                    <p>Reviews: <span className="text-black">{product.reviews.length}</span></p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded">
                      <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="px-3 py-1 text-xl font-bold text-gray-700"
                      >
                        -
                      </button>
                      <span className="px-4 font-medium">{quantity}</span>
                      <button
                        onClick={() => setQuantity((q) => q + 1)}
                        className="px-3 py-1 text-xl font-bold text-gray-700"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={handleAddToCart}
                      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                    >
                      Add to Cart
                    </button>

                    <button
                      onClick={handleAddToWishlist}
                      className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition"
                    >
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default ProductPage;
