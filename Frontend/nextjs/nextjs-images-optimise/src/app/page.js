import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";
import FaceData from "@/components/faceData/FaceData";

const Home = async () => {
  const products = await FaceData("http://localhost:5000/products");
  // console.log(products);
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">
        Next.js Image Optimizations
      </h2>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No products found.</p>
      )}
      <div className={"text-center mt-4"}>
        <Link href={"/product"}>
          <button className={"rounded bg-sky-600 text-white px-2 py-1"}>
            All product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
