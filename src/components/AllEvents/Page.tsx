import s from "../../styles/AllEvents/Page.module.scss"
import { Cards } from "./Cards"

export const AllEventsSheet = () => {
    return(
        <main id="AllEvPage" className={s.container}>
            <h1 id="all_ev_header">ALL EVENTS</h1>
            <Cards />
        </main>
    )
}