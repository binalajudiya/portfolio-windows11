import LockScreen from './screens/LockScreen'
import DesktopScreen from './screens/DesktopScreen'
import { useSelector } from 'react-redux';

function App() {
  const isScreenLocked = useSelector((state) => state.lockScreen.isLocked);
  
  return isScreenLocked ? (
    <LockScreen />
  ) : (
    <DesktopScreen />
  );
}

export default App;
