import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

const useMobile = (): boolean => {
    const [mobile, setMobile] = useState<boolean>(false);
    useEffect(() => {
        setMobile(isMobile);
    }, [isMobile])
    return mobile;
}

export default useMobile;