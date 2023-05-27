import { useDispatch } from "react-redux";

const DesktopShortcutListItem = ({
    className,
    name,
    icon,
    width = 28,
    height = 28,
    onClick
}) => {
    const dispatch = useDispatch();

    return (
        <button
            className={`${className} m-[.1em] w-[2.6em] h-[2.4em] border-black rounded-md bg-transparent hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-xl hover:backdrop-filter]`}
            title={name}
            onClick={(e) => onClick(e, dispatch)}
        >
            <img 
            className="m-auto"
            src={icon}
            width={width}
            height={height}
            />
        </button>
    )

}
export default DesktopShortcutListItem;