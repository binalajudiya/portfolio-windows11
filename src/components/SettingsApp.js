import { BiArrowBack } from 'react-icons/bi';
import { BsDash } from 'react-icons/bs';
import { IoIosSquareOutline } from 'react-icons/io';
import { IoCloseOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { wallpapers } from '../assets';
import { 
    cacnelMaximizedActiveWindow,
    removeActiveWindow } from '../redux/feat/desktopScreenSlice';


const SettingsApp = ({
    id,
    title = "",
    height = "80vh",
    width = "80vw",
    x = 10,
    y = 10,
    minimized = false,
    maximized = false
}) => {
    const dispatch = useDispatch();
    const wallpaperActive = useSelector((state) => state.desktopScreen.wallpaper);

    return (
        <motion.div
            initial={ {opacity: 0} }
            animate={ {opacity: 1} }
            style={
                !maximized 
                ? { width: width, height: height }
                : { width: "100vw", height: "93vh" }
            }
            className="absolute z-10 bg-transparent border-2 border-gray-400 rounded-md text-sm text-gray-100 shadow-lg backdrop-blur-xl backdrop-filter leading-normal overflow-hidden"
        >
            <div className="flex items-center justify-between">
                <div className="flex p-2 items-center justify-center">
                    <button className="mr-2"><BiArrowBack size={15} /></button>
                    Settings
                </div>
                <div className="flex items-center justify-center">
                    <div className='flex p-3 hover:bg-white hover:bg-opacity-10'>
                        <BsDash size={20}/>
                    </div>
                    <div className='flex p-3 ml-2 hover:bg-white hover:bg-opacity-10'>
                        <IoIosSquareOutline size={20}/>
                    </div>
                    <div className='flex p-3 ml-2 hover:bg-white hover:bg-opacity-10'
                    title='close'
                    onClick={() => {
                        dispatch(removeActiveWindow(id));
                    }}>
                        <IoCloseOutline size={20} />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-2">
                <div className="hidden lg:grid col-span-12 md:col-span-4 lg:col-span-3 px-2">
                    <div className="flex justify-start items-start px-2 pb-5 border-b-2 border-white mb-1">
                        <div className="">
                            <p> Image</p>
                        </div>
                        <div className="flex flex-col justify-center items-start ml-3">
                            <p>Binal Ajudiya</p>
                            <p>binaljj@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="grid col-span-12 md:col-span-8 lg:col-span-9">
                    <div className='px-5 pb-5 lg:p-2 lg:px-2'>
                        <h1 className='mb-3 text-white text-xl font-bold'>
                            Personalization
                        </h1>
                        <div className='flex flex-col items-start justify-start lg:flex-row'>
                            <div className='flex flex-1'>
                                <img 
                                className='rounded-lg w-40'
                                src={wallpaperActive} 
                                />
                            </div>
                            <div className='flex flex-col flex-1 mt-3 lg:mt-0'>
                                <h2 className='text-md'>Select a theme to apply</h2>
                                <div className='grid grid-cols-3 grid-row gap-2 mt-2'>
                                    {wallpapers.length > 0 && (
                                        <>
                                            {wallpapers.map((wallpaper, index) => (
                                                <button 
                                                key={index}
                                                className='rounded-md active:opacity-50'>
                                                    <img 
                                                    src={wallpaper}
                                                    className='rounded-md'
                                                    />
                                                </button>
                                            ))}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}
export default SettingsApp;