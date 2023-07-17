/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { ThemeContext } from "../context/context";

export default function LeftBar() {
  const { region, setRegion } = useContext(ThemeContext);

  const handleRegion = (value) => {
    setRegion(value);
  };

  return (
    <>
      <div className="w-[40%] md:w-[30%] lg:w-[20%] h-screen bg-blue-700 fixed">
        <div className="font-FSAlbert  flex flex-col gap-y-6 justify-center items-center w-full h-full text-white">
          <button
            className="bg-blue-500 border-2 border-blue-500 rounded-md w-[80%] p-2 text-center shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-1000"
            onClick={() => handleRegion("all")}
          >
            All
          </button>
          <button
            className="bg-blue-500 border-2 border-blue-500 rounded-md w-[80%] p-2 text-center shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-1000"
            onClick={() => handleRegion("Africa")}
          >
            Africa
          </button>
          <button
            className="bg-blue-500 border-2 border-blue-500 rounded-md w-[80%] p-2 text-center shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-1000"
            onClick={() => handleRegion("Americas")}
          >
            America
          </button>
          <button
            className="bg-blue-500 border-2 border-blue-500 rounded-md w-[80%] p-2 text-center shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-1000"
            onClick={() => handleRegion("Asia")}
          >
            Asia
          </button>
          <button
            className="bg-blue-500 border-2 border-blue-500 rounded-md w-[80%] p-2 text-center shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-1000"
            onClick={() => handleRegion("Europe")}
          >
            Europe
          </button>
          <button
            className="bg-blue-500 border-2 border-blue-500 rounded-md w-[80%] p-2 text-center shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-1000"
            onClick={() => handleRegion("Oceania")}
          >
            Oceania
          </button>
        </div>
      </div>
    </>
  );
}
