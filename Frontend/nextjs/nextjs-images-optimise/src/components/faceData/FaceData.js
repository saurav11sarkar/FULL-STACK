"use server";
const FaceData = async (data) => {
  try {
    const faceData = await fetch(data, {
      next: {
        revalidate: 30,
      },
    });
    return await faceData.json();
  } catch (err) {
    console.error("error the product", err);
  }
};

export default FaceData;
