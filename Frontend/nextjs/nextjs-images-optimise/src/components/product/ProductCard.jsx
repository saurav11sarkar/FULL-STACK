import Image from "next/image";

const ProductCard = ({ product }) => {
    return (
        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="relative w-full h-48">
                <Image
                    src={product.image}
                    alt={product.productName}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                />
            </div>
            <div className="p-4 w-full">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-semibold text-gray-800">{product.productName}</h2>
                    <p className="text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm text-gray-600 mb-2">Brand: {product.brand}</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">$ {product.price}</h2>
                <div className="flex justify-between items-center">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                        See Details
                    </button>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;