import { useState } from "react";
import Setting from "./components/Settings";
import { clsx } from 'clsx';
import Clock from "./components/Clock";

function App() {

    const [openSetting, setOpenSetting] = useState<boolean>(false);

    return (
        <>
            <Setting opened={openSetting} close={() => setOpenSetting(!openSetting)} />
            <div className="options">
                <button className="btn" onClick={() => setOpenSetting(!openSetting)}>
                    <span className="material-icons">
                        settings
                    </span>
                </button>
            </div>
            <div className="widgets">
                <Clock />
            </div>
            <div className={clsx("MainBackground", openSetting && "settingOpened")}></div>
        </>
    )
}

export default App;
