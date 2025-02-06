import { getServerSession } from "next-auth";
import { authOptions } from "@/components/utils/authOptions";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log("DashboardPage", session);
  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome To {session?.user?.name}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Login User email {session?.user?.email}
          </h1>
          <Image
            className={"mx-auto rounded-full mt-5"}
            src={session?.user?.image || "https://img.icons8.com/?size=100&id=108652&format=png&color=000000"}
            alt={session?.user?.name as string}
            width={100}
            height={100}
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
