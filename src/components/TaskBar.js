import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { GiSpeaker } from "react-icons/gi";
import TaskBarPinAppsButtons from "./TaskBarPinAppsButtons";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import moment from "moment";
import { motion } from 'framer-motion';



const TaskBar = () => {

    const [date, setDay] = useState(moment().format("DD[/]MM[/]YYYY"));
    const [time, setTime] = useState(moment().format("HH:MM"));
    const [datetime, setDateTime] = useState(moment().format("dddd, DD MMMM YYYY"));
    const [dateToggled, setdateToggled] = useState(false);

    const _updatedTime = () => {
        return setInterval(() => {
            setDay(moment().format("DD[/]MM[/]YYYY"));
            setTime(moment().format("HH:MM"));
            setDateTime(moment().format("dddd DD MMMM YYYY"));
        },1000);
    }

    useEffect(() => {
        const current = _updatedTime();
        return() => clearInterval(current);
    },[])

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
                        <div className="flex m-[.1em] h-[2.4em] border-black rounded-md hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-xl hover:backdrop-filter"
                        onClick={() => {
                            setdateToggled((prev) => !(prev))
                        }}>
                            <div className="flex justify-center items-center px-2">
                                <div className="flex flex-col items-end justify-center text-xs">
                                    <span>{time}</span>
                                    <span>{date}</span>
                                </div>
                            </div>
                        </div>
                        {dateToggled && (
                            <motion.div
                                initial = {{right: -1000}} 
                                animate = {{right: 0}}
                                className="absolute -top-[50px] m-2 -right-0 z-10 border-[1px] border-gray-100 rounded-mdborder-white bg-transparent text-sm " >
                                    <div className="flex flex-row justify-center text-center items-center">
                                        <span className="p-2 h-10 w-70">{datetime}</span>
                                    </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TaskBar;