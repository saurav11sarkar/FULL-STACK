"use client";
const ErrorPage = ({ error, reset }) => {
  return (
    <div>
      <h2 className={"text-center text-3xl text-red-500"}>
        Something went wrong: {error.message}
      </h2>
      <div className={"text-center mt-10"}>
        <button onClick={() => reset()}
          className={
            "mx-auto rounded bg-red-500 text-white px-2 py-1 text-center"
          }
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
