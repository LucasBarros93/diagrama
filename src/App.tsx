import { useState } from "react";
import Sliders from "./components/Slider";
import Drone from "./assets/Images/droneGif.gif";

function App() {
  return (
    <div className="w-svw h-svh flex flex-row items-center justify-center gap-10">
      <div className="w-fit flex flex-col p-4 gap-4 border border-primary items-center justify-center rounded-md">
        <p className="w-fit h-fit text-2xl font-semibold text-primary">Ações</p>
        <div className="w-fit flex flex-col items-center bg-gray-50 border border-gray-300 divide-y divide-gray-300 divide-dashed">
          <div className="w-full flex px-8 py-4 justify-center">
            <p className="text-black">Change route</p>
          </div>
          <div className="w-full flex px-8 py-4 justify-center">
            <p className="text-black">Activate redundancy systems</p>
          </div>
          <div className="w-full flex px-8 py-4 justify-center">
            <p className="text-black">Use occupancy maps</p>
          </div>
          <div className="w-full flex px-8 py-4 justify-center">
            <p className="text-black">Change altitude</p>
          </div>
          <div className="w-full flex px-8 py-4 justify-center">
            <p className="text-black">Restore GPS attack</p>
          </div>
          <div className="w-full flex px-8 py-4 justify-center">
            <p className="text-black">Emergency landing</p>
          </div>
        </div>
      </div>

      <div className="w-fit flex flex-col p-4 gap-4 border border-primary items-center justify-center rounded-md">
        <p className="w-fit h-fit text-2xl font-semibold text-primary">
          Regras
        </p>
      </div>

      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="text-black text-xl">Minha</p>
          <img
            src={Drone}
            className="flex object-cover w-16 aspect-square"
          ></img>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="text-black text-xl">Pika</p>
          <img
            src={Drone}
            className="flex object-cover w-16 aspect-square"
          ></img>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="w-[200px] h-2 flex items-center bg-gray-300">
          <div className="w-full h-2 flex flex-row items-center ">
            <div className="w-4 h-2 bg-black hover:w-full duration-3000">
            </div>
            
          </div>
        </div>{" "}
        <Sliders />
      </div>
    </div>
  );
}

export default App;
