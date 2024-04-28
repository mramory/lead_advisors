import { useEffect, useState } from "react";
import line from "../assets/ui/timer_line.svg"
import lineSm from "../assets/ui/timer_line_sm.svg"
import s from "../styles/Timer.module.scss"

const finishTime = new Date("2024-07-24T00:00:00").valueOf()
export const Timer = () => {

    const [[diffDays, diffH, diffM, diffS], setDiff] = useState([0, 0, 0, 0]);
    const [tick, setTick] = useState(false);

    useEffect(()=> {
      const diff = (finishTime - new Date().valueOf()) / 1000;

      if (diff < 0) return
      setDiff([
        Math.floor(diff / 86400),
        Math.floor((diff / 3600) % 24), 
        Math.floor((diff / 60) % 60), 
        Math.floor(diff % 60)
      ]) 
    }, [tick, finishTime])
        
    useEffect(()=>{
      const timerID = setInterval(() => setTick(!tick), 1000);
      return () => clearInterval(timerID);
    }, [tick])

    return(
        <div className={s.container}>
            <div className={s.item}>
                <span>{diffDays}</span>
                <picture className={s.picture}>
                    <source media="(min-width: 1200px)" srcSet={line} />
                    <img src={lineSm} alt="Days" />
                    <span>Days</span>
                    <span>DD</span>
                </picture>
            </div>
            <span className={s.colon}>&#65306;</span>
            <div className={s.item}>
                <span>{diffH}</span>
                <picture className={s.picture}>
                    <source media="(min-width: 1200px)" srcSet={line} />
                    <img src={lineSm} alt="Days" />
                    <span>Hours</span>
                    <span>HH</span>
                </picture>
            </div>
            <span className={s.colon}>&#65306;</span>
            <div className={s.item}>
                <span>{diffM}</span>
                <picture className={s.picture}>
                    <source media="(min-width: 1200px)" srcSet={line} />
                    <img src={lineSm} alt="Days" />
                    <span>Minutes</span>
                    <span>MM</span>
                </picture>
            </div>
            <span className={s.colon}>&#65306;</span>
            <div className={s.item}>
                <span>{diffS}</span>
                <picture className={s.picture}>
                    <source media="(min-width: 1200px)" srcSet={line} />
                    <img src={lineSm} alt="Days" />
                    <span>Seconds</span>
                    <span>SS</span>
                </picture>
            </div>
        </div>
    )
}