import { useEffect, useMemo, useState } from "react"

let interval: NodeJS.Timeout

export const useTimer = (startTime: number) => {
    const [currTime, setCurrTime] = useState(startTime)

    const dottedViewWithHours = useMemo(() => {
        if (currTime > 0) {
            const hours = Math.floor(currTime / 3600000);
            const minutes = Math.floor((currTime % 3600000) / 60000);
            const seconds = Math.floor((currTime % 60000) / 1000);
            return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        }

        return '00:00:00'
    }, [currTime])

    const dottedViewWithoutHours = useMemo(() => {
        if (currTime > 0) {
            const minutes = Math.floor(currTime / 60000);
            const seconds = Math.floor((currTime % 60000) / 1000);
            return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        }

        return '00:00'
    }, [currTime])

    const namedView = useMemo(() => {
        if (currTime > 0) {
            let milliseconds = currTime

            const days = Math.floor(milliseconds / 86400000);
            milliseconds %= 86400000;
            const hours = Math.floor(milliseconds / 3600000);
            milliseconds %= 3600000;
            const minutes = Math.floor(milliseconds / 60000);
            milliseconds %= 60000;
            const seconds = Math.floor(milliseconds / 1000);
            return `${days} Days : ${hours} Hr : ${minutes} Min : ${seconds} Sec`;
        }

        return '00 Days : 00 Hr : 00 Min : 00 Sec'
    }, [currTime])

    useEffect(() => {
        interval = setInterval(() => {
            if (currTime > 1000) {
                setCurrTime(prevState => prevState - 1000)
            } else {
                setCurrTime(0)
                clearInterval(interval)
            }
        }, 1000)
    }, [startTime])

    return {
        dottedViewWithHours,
        dottedViewWithoutHours,
        namedView,
    }
}