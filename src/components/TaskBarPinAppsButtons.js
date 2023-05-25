const TaskBarPinAppsButtons = ({
    className,
    name,
    icon,
    width = 28,
    height = 28,
}) => {

    return (
        <button
        className={`${className} m-[.1em] w-[2.6em] h-[2.4em] border-black rounded-md bg-transparent hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-xl hover:backdrop-filter]`}
        title={name}
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

export default TaskBarPinAppsButtons;