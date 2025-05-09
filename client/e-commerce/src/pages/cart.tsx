import Head from "next/head";
import Link from "next/link";

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
    },
    {
      id: 2,
      name: "LCD Display",
      price: 150,
      quantity: 1,
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <>
      <Head>
        <title>Shopping Cart | Exclusive</title>
      </Head>

      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Shopping Cart</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Shopping Cart
          </h1>

          <div className="overflow-x-auto bg-white rounded-xl shadow p-6 mb-10">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-4 text-gray-700 text-lg font-semibold">
                    Product
                  </th>
                  <th className="py-4 text-gray-700 text-lg font-semibold">
                    Price
                  </th>
                  <th className="py-4 text-gray-700 text-lg font-semibold">
                    Quantity
                  </th>
                  <th className="py-4 text-gray-700 text-lg font-semibold">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="py-6">
                      <div className="flex items-center">
                        <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 mr-4">
                          [Photo]
                        </div>
                        <span className="text-gray-800 text-base">
                          {item.name}
                        </span>
                      </div>
                    </td>
                    <td className="text-gray-700 text-base">
                      ${item.price.toFixed(2)}
                    </td>
                    <td>
                      <div className="flex items-center border rounded-lg w-28 h-11">
                        <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 text-xl h-full">
                          -
                        </button>
                        <span className="flex-1 text-center text-base">
                          {item.quantity}
                        </span>
                        <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 text-xl h-full">
                          +
                        </button>
                      </div>
                    </td>
                    <td className="font-semibold text-blue-600 text-base">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between mb-12 gap-6">
            <Link
              href="/shop"
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-100 text-base font-medium text-center"
            >
              Return To Shop
            </Link>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-base font-medium">
              Update Cart
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Coupon */}
            <div className="lg:w-1/2">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Coupon Code
              </h3>
              <div className="flex h-12">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="flex-1 px-4 border border-gray-300 rounded-l-lg focus:ring-blue-500 focus:outline-none"
                />
                <button className="px-6 bg-gray-800 text-white rounded-r-lg hover:bg-gray-700 font-medium">
                  Apply
                </button>
              </div>
            </div>

            {/* Cart Total */}
            <div className="lg:w-1/2 bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Cart Total
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-base text-gray-700">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base text-gray-700">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-lg font-semibold border-t pt-4 text-gray-900">
                  <span>Total:</span>
                  <span className="text-blue-600">${total.toFixed(2)}</span>
                </div>
              </div>
              <Link
                href="/checkout"
                className="block w-full py-3 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-lg"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
