"use client";

import { useState } from "react";

const CounterCompent = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="counter flex gap-3 px-2 justify-center items-center h-screen bg-white">
            <div
                className={
                    "flex gap-3 px-2 justify-center items-center bg-white rounded-lg w-[150px] h-[100px] border border-gray-200 shadow-2xl"
                }
            >
                <button
                    className={"bg-sky-400 w-1/3 rounded"}
                    onClick={() => setCount(count + 1)}
                >
                    +
                </button>
                <button onClick={() => setCount(0)} className={"text-black font-bold"}>
                    {count}
                </button>
                <button
                    className={"bg-yellow-300 w-1/3 rounded"}
                    onClick={() => setCount(count - 1)}
                >
                    -
                </button>
            </div>
        </div>
    );
};

export default CounterCompent;
