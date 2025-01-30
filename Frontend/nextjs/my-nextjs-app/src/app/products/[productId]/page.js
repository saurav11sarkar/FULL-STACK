import React from "react";

const DinamikPage = async ({ params, searchParams }) => {
    const {productId} = await params;
  console.log(productId);
  console.log(await searchParams);
  return (
    <div>
      <h2 className={"text-2xl text-center text-purple-600"}>
        This is Dynamik Page {productId}
      </h2>
    </div>
  );
};

export default DinamikPage;
