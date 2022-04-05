// React Hooks
import { useState, useEffect } from "react";
// Helpers
import { mobileOrDesktop } from "../helpers";

const useDeviceDetect = () => {
    const [deviceType, setDeviceType] = useState<string>("");
    const [width, setWidth] = useState<number>(window.innerWidth);

    // handleWindowResize function
    const handleWindowResize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        setDeviceType(mobileOrDesktop);
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);

  return {
      deviceType,
      width
    };
};

export default useDeviceDetect;