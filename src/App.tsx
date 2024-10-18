import { useState } from "react";
import Drone from "./assets/Images/droneGif.gif";

function App() {
    const actions = [
        "Change route",
        "Activate redundancy systems",
        "Use occupancy maps",
        "Change altitude",
        "Restore GPS attack",
        "Emergency landing",
    ];

    const sliders = ["Risco", "Tempo", "Energia", "Complexidade", "Impacto"];

    return (
        <div className="w-svw h-svh flex flex-row justify-between p-8 bg-black">
            {/*Sliders*/}
            <div className="w-fit h-fit flex flex-col gap-6 p-8 bg-white border border-primary rounded-md">
                {sliders.map((slider) => {
                    return (
                        <>
                            <div className="flex flex-col gap-2">
                                <p className="text-primary text-xl">{slider}</p>
                                <div className="w-[200px] h-2 flex items-center bg-gray-300">
                                    <div className="w-full h-2 flex flex-row items-center ">
                                        <div className="w-4 h-2 bg-primary hover:w-full duration-3000"></div>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>

            <div className=" w-fit flex flex-col items-center justify-between">
                {/*Regras*/}
                <div className="w-fit h-fit flex flex-col p-4 gap-4 bg-white border border-primary items-center justify-center rounded-md ">
                    <p className="text-2xl font-semibold text-primary">
                        Regras
                    </p>
                </div>

                {/*Ações*/}
                <div className="w-fit h-fit flex flex-col p-4 gap-4 bg-white border border-primary items-center justify-center rounded-md">
                    <p className="w-fit h-fit text-2xl font-semibold text-primary">
                        Ações
                    </p>
                    <div className="w-fit flex flex-col items-center bg-gray-100 border border-gray-300 divide-y divide-gray-300 divide-dashed">
                        {actions.map((action) => {
                            return (
                                <>
                                    <div className="w-full flex px-8 py-4 justify-center">
                                        <p className="text-black">{action}</p>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* <div className="flex flex-row gap-8">
                <div className="flex flex-col gap-2 items-center justify-center">
                    <img
                        src={Drone}
                        className="flex object-cover w-16 aspect-square"
                    ></img>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center">
                    <img
                        src={Drone}
                        className="flex object-cover w-16 aspect-square"
                    ></img>
                </div>
            </div> */}
        </div>
    );
}

export default App;
