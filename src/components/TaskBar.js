import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { GiSpeaker } from "react-icons/gi";
import TaskBarPinAppsButtons from "./TaskBarPinAppsButtons";
import { useSelector } from "react-redux";

const TaskBar = () => {

    const pinApps = useSelector((state) => state.desktopScreen.pinApps);

    return (
        <div className="fixed bottom-0 w-screen h-[2.6em] border-black bg-black bg-opacity-20 text-white ">
            <div className="flex h-[2.6em] items-center justify-between">
                <div className="hidden flex-1 lg:flex"></div>
                <div className="flex flex-1 h-[2.6em] items-center justify-start lg:justify-center">
                    {pinApps.length > 0 && (
                        <>
                            {pinApps.map((app, index) =>(
                                <TaskBarPinAppsButtons
                                key={index}
                                className=""
                                {...app}
                                />
                            ))}
                        </>
                    )}
                </div>
                <div className="flex flex-1 flex-row justify-end">
                    <div className="flex m-[.1em] h-[2.4em] border-black rounded-md hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-xl hover:backdrop-filter">
                        <div className="flex justify-center items-center">
                            <MdOutlineKeyboardArrowUp size={24} />
                        </div>
                    </div>
                    <div className="relative">
                        <div className="flex m-[.1em] h-[2.4em] border-black rounded-md bg-transparent hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-xl  hover:backdrop-filter">
                            <div className="flex flex-row justify-center items-center px-2">
                                <div className="px-[0.2em]">
                                    <AiOutlineWifi size={18} />
                                </div>
                                <div className="px-[0.2em]">
                                    <GiSpeaker size={18} />
                                </div>
                                <div className="px-[0.2em]">
                                    <AiOutlineWifi size={18} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="flex m-[.1em] h-[2.4em] border-black rounded-md hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-xl hover:backdrop-filter">
                            <div className="flex justify-center items-center px-2">
                                <div className="flex flex-col items-end justify-center text-xs">
                                    <span>9:36 PM</span>
                                    <span> 5/25/2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TaskBar;