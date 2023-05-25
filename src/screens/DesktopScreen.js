import { useSelector } from 'react-redux';
import TaskBar from '../components/TaskBar';

const DesktopScreen = () => {
    const wallpaper = useSelector((state) => state.desktopScreen.wallpaper);

    return (
        <div 
        className='bg-cover bg-no-repeat bg-bottom text-white transition-all duration-300 ease-in'
        style={{ backgroundImage: `url(${wallpaper})` }}
        >
            <div className='h-screen w-screen'>
                <TaskBar />
            </div>
        </div>
    )
}

export default DesktopScreen;