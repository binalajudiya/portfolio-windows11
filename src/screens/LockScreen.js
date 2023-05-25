import { useSelector } from 'react-redux';

const LockScreen = () => {
    const wallpaper = useSelector((state) => state.lockScreen.wallpaper);

    return (
        <>
            <img src={wallpaper} />
        </>
    )
}

export default LockScreen;