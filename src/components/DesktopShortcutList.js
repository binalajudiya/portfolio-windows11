import { useSelector } from "react-redux";
import DesktopShortcutListItem from "./DesktopShortcutListItem";

const DesktopShortcutList = () => {
    const shortcutApps = useSelector((state) => state.desktopScreen.shortcutApps);
    return(
        <>
        {shortcutApps.length > 0 && (
            <div className="flex h-[91vh] w-[95vw]  flex-col flex-wrap content-start items-start justify-start">
                {shortcutApps.map((app,index) => (
                    <DesktopShortcutListItem className="my-2" key={index} {...app} />
                ))}
            </div>
        )}
        </>
    )
}
export default DesktopShortcutList;