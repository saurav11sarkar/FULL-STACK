"use client";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const handleNavaget = () => {
    router.push("/dashbord");
  };
  return (
    <div className={"text-center"}>
      <h2 className={"text-2xl font-bold text-center py-3"}>
        Hello This Is main page home
      </h2>

      <button
        onClick={handleNavaget}
        className={
          "my-3 border px-3 rounded-2xl border-transparent text-black bg-white py-3"
        }
      >
        dashBord
      </button>
    </div>
  );
};

export default Home;
