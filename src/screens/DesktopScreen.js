import { useSelector } from 'react-redux';
import TaskBar from '../components/TaskBar';
import DesktopShortcutList from '../components/DesktopShortcutList';

const DesktopScreen = () => {
    const wallpaper = useSelector((state) => state.desktopScreen.wallpaper);
    const activeWindows = useSelector((state) => state.desktopScreen.activeWindows);
    return (
        <div 
        className='bg-cover bg-no-repeat bg-bottom text-white transition-all duration-300 ease-in'
        style={{ backgroundImage: `url(${wallpaper})` }}
        >
            <div className='h-screen w-screen'>
                
                {activeWindows.length > 0 && (
                    <>
                    {activeWindows
                    .filter((win) => win.minimized === false)
                    .map(
                    (
                        {
                            id,
                            title,
                            height,
                            width,
                            x,
                            y,
                            minimized,
                            maximized,
                            Component
                        }, index 
                    ) => (
                        <Component 
                        key={index}
                        id={id}
                        title={title}
                        height={height}
                        width={width}
                        x={x}
                        y={y}
                        minimized={minimized}
                        maximized={maximized}
                        />
                    ))}
                    </>
                )}

                <DesktopShortcutList />
                <TaskBar />
            </div>
        </div>
    )
}

export default DesktopScreen;