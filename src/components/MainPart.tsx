import logo from "../assets/ui/logo.svg"
import arrow from "../assets/ui/arrow-right.svg"
import s from "../styles/MainPart.module.scss"
import { Timer } from "./Timer"
import clsx from "clsx"
import { Link } from "@tanstack/react-router"

export const MainPart = ({isLoaded}: {isLoaded: boolean}) => {
    return(
        <main className={s.container}>
            <Link to="/"><img className={clsx(s.logo, isLoaded && s.animUp)} src={logo} /></Link>
            <h1 className={isLoaded ? s.animUpH1 : ""}>UNDER CONSTRUCTION</h1>
            <p className={isLoaded ? s.animUp : ""}>We're making lots of improvements and will be back soon</p>
            <Timer />
            <p className={isLoaded ? s.animDown : ""}>Check our event page when you wait:</p>
            <a target="_blank" href="https://leadadvisors.org/"><button className={isLoaded ? s.animDown : ""}>
                <span>Go to the event</span>
                <img src={arrow} alt="go to the event" />
            </button>
            </a>
        </main>
    )
}