import Image from "next/image";
import nextImg from "@/assets/docs-og.png";

const GalleryPage = () => {
  return (
    <div className={"text-center my-10 text-2xl font-semibold"}>
      <h2>Regular images tag</h2>
      <img
        className={"mx-auto"}
        src="https://th.bing.com/th/id/OIP.g0VH_iRNKebr-5GeOEDNlgHaD3?rs=1&pid=ImgDetMain"
        alt="next js image"
        width={500}
        height={500}
      />
      <h2 className={"text-center my-10 text-2xl font-semibold"}>
        Next js images components
      </h2>

      <Image
        className={"mx-auto"}
        src="https://th.bing.com/th/id/OIP.g0VH_iRNKebr-5GeOEDNlgHaD3?rs=1&pid=ImgDetMain"
        alt={"next image"}
        width={500}
        height={500}
      />

      <h2 className={"text-center my-10 text-2xl font-semibold"}>
        Local images
      </h2>

      <Image
        className={"mx-auto"}
        src={nextImg}
        alt={"local image"}
        width={500}
        height={500}
      />
    </div>
  );
};

export default GalleryPage;
